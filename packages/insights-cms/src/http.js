/**
 * The HTTP surface, as Web-standard route handlers.
 *
 * Mount once, as a catch-all, and export the methods:
 *
 *   // app/api/cms/[...path]/route.js
 *   export const { GET, POST, PATCH, DELETE } = cms.routes
 *
 * Only `Request`/`Response` are used — nothing from `next/*` — so the same
 * handlers work in any Next.js version with route handlers (13.4+).
 *
 * CSRF: the session cookie is SameSite=Lax, and every mutation must also be
 * `Content-Type: application/json` with an `Origin` matching the host. A
 * cross-site form cannot set that content type, and a cross-site fetch cannot
 * forge the Origin.
 */

import { CmsError, badRequest, forbidden, notFound, unauthorised } from './errors.js'

const MAX_BODY_BYTES = 1024 * 1024

export function createRoutes(config, repo, auth) {
  const { basePath, cookieName, sessionDays, allowedOrigins } = config

  /* ---------------------------------------------------------- helpers */

  const json = (data, status = 200, headers = {}) =>
    new Response(JSON.stringify(data), {
      status,
      headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
    })

  const NO_STORE = { 'Cache-Control': 'no-store' }
  const PUBLIC_CACHE = { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600' }

  function readCookie(request, name) {
    const header = request.headers.get('cookie') || ''
    for (const part of header.split(';')) {
      const i = part.indexOf('=')
      if (i === -1) continue
      if (part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim())
    }
    return null
  }

  function isSecure(request) {
    const proto = request.headers.get('x-forwarded-proto')
    if (proto) return proto.split(',')[0].trim() === 'https'
    return new URL(request.url).protocol === 'https:'
  }

  function sessionCookie(request, token, maxAgeSeconds) {
    const parts = [
      `${cookieName}=${encodeURIComponent(token)}`,
      'Path=/',
      'HttpOnly',
      'SameSite=Lax',
      `Max-Age=${maxAgeSeconds}`,
    ]
    if (isSecure(request)) parts.push('Secure')
    return parts.join('; ')
  }

  const clientIp = (request) =>
    (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    ''

  function checkMutation(request) {
    const type = request.headers.get('content-type') || ''
    if (!type.toLowerCase().startsWith('application/json')) {
      throw new CmsError(415, 'unsupported_media_type', 'Send requests as JSON.')
    }
    const origin = request.headers.get('origin')
    let o
    try {
      o = new URL(origin)
    } catch {
      throw forbidden('Cross-origin request refused.')
    }
    if (allowedOrigins.includes(o.origin)) return
    // Any name this request arrived under. Next 13.4 proxies to a worker, so
    // `Host` can be 127.0.0.1:<port> while `request.url` keeps the public host;
    // behind Vercel or another proxy the public host is in x-forwarded-host.
    // A cross-site browser request can match none of these — the browser sets
    // Origin, and it is the attacker's.
    const hosts = [
      new URL(request.url).host,
      request.headers.get('x-forwarded-host')?.split(',')[0].trim(),
      request.headers.get('host'),
    ].filter(Boolean)
    if (!hosts.includes(o.host)) throw forbidden('Cross-origin request refused.')
  }

  async function readJson(request) {
    const raw = await request.text()
    if (raw.length > MAX_BODY_BYTES) throw new CmsError(413, 'too_large', 'That request is too large.')
    if (!raw) return {}
    try {
      const data = JSON.parse(raw)
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error()
      return data
    } catch {
      throw badRequest('Request body must be a JSON object.')
    }
  }

  async function requireUser(request) {
    const session = await auth.getSession(readCookie(request, cookieName))
    if (!session) throw unauthorised()
    return session.user
  }

  /* ---------------------------------------------------------- handlers */

  const table = [
    // Public, read-only. Other sites and apps can consume these.
    ['GET', 'insights', { public: true }, async ({ url }) => {
      const limit = Math.min(Math.max(parseInt(url.searchParams.get('limit'), 10) || 0, 0), 100)
      const withBody = url.searchParams.get('body') === '1'
      return json({ insights: await repo.listPublished({ limit: limit || undefined, withBody }) }, 200, PUBLIC_CACHE)
    }],
    ['GET', 'insights/:slug', { public: true }, async ({ params }) => {
      const post = await repo.getPublishedBySlug(params.slug)
      if (!post) throw notFound('No published insight at that address.')
      return json({ insight: post }, 200, PUBLIC_CACHE)
    }],

    // Session.
    ['POST', 'auth/login', { public: true }, async ({ request }) => {
      const { email, password } = await readJson(request)
      const { token, user } = await auth.login({
        email,
        password,
        ip: clientIp(request),
        userAgent: request.headers.get('user-agent') || '',
      })
      return json({ user }, 200, {
        ...NO_STORE,
        'Set-Cookie': sessionCookie(request, token, sessionDays * 24 * 60 * 60),
      })
    }],
    ['POST', 'auth/logout', { public: true }, async ({ request }) => {
      await auth.logout(readCookie(request, cookieName))
      return json({ ok: true }, 200, { ...NO_STORE, 'Set-Cookie': sessionCookie(request, '', 0) })
    }],
    ['GET', 'auth/me', { public: true }, async ({ request }) => {
      const session = await auth.getSession(readCookie(request, cookieName))
      return json({ user: session?.user ?? null }, 200, NO_STORE)
    }],
    ['POST', 'auth/password', {}, async ({ request, user }) => {
      const { current, next } = await readJson(request)
      await auth.changePassword({ userId: user.id, currentToken: readCookie(request, cookieName), current, next })
      return json({ ok: true }, 200, NO_STORE)
    }],

    // Studio.
    ['GET', 'admin/meta', {}, async () => json(await repo.meta(), 200, NO_STORE)],
    ['GET', 'admin/insights', {}, async ({ url }) =>
      json({ insights: await repo.listAll({ status: url.searchParams.get('status'), q: url.searchParams.get('q') }) }, 200, NO_STORE)],
    ['POST', 'admin/insights', {}, async ({ request, user }) =>
      json({ insight: await repo.create(await readJson(request), user) }, 201, NO_STORE)],
    ['GET', 'admin/insights/:id', {}, async ({ params }) =>
      json({ insight: await repo.getById(params.id) }, 200, NO_STORE)],
    ['PATCH', 'admin/insights/:id', {}, async ({ request, params, user }) =>
      json({ insight: await repo.update(params.id, await readJson(request), user) }, 200, NO_STORE)],
    ['DELETE', 'admin/insights/:id', {}, async ({ params }) =>
      json(await repo.remove(params.id), 200, NO_STORE)],
    ['POST', 'admin/insights/:id/publish', {}, async ({ params, user }) =>
      json({ insight: await repo.publish(params.id, user) }, 200, NO_STORE)],
    ['POST', 'admin/insights/:id/unpublish', {}, async ({ params, user }) =>
      json({ insight: await repo.unpublish(params.id, user) }, 200, NO_STORE)],
    ['POST', 'admin/insights/:id/archive', {}, async ({ params, user }) =>
      json({ insight: await repo.archive(params.id, user) }, 200, NO_STORE)],
  ].map(([method, pattern, opts, fn]) => ({ method, parts: pattern.split('/'), opts, fn }))

  function match(segments) {
    const found = []
    for (const route of table) {
      if (route.parts.length !== segments.length) continue
      const params = {}
      const ok = route.parts.every((p, i) => {
        if (p.startsWith(':')) {
          params[p.slice(1)] = segments[i]
          return true
        }
        return p === segments[i]
      })
      if (ok) found.push({ route, params })
    }
    return found
  }

  function segmentsFor(request, ctx) {
    const fromParams = ctx?.params?.path
    if (Array.isArray(fromParams)) return fromParams.map((s) => decodeURIComponent(s))
    let path = new URL(request.url).pathname
    if (path.startsWith(basePath)) path = path.slice(basePath.length)
    return path.split('/').filter(Boolean).map((s) => decodeURIComponent(s))
  }

  async function handle(request, ctx) {
    try {
      const url = new URL(request.url)
      const candidates = match(segmentsFor(request, ctx))
      if (!candidates.length) throw notFound('Unknown endpoint.')
      const hit = candidates.find((c) => c.route.method === request.method)
      if (!hit) {
        const allow = [...new Set(candidates.map((c) => c.route.method))].join(', ')
        return json({ error: 'Method not allowed.', code: 'method_not_allowed' }, 405, { Allow: allow })
      }
      if (request.method !== 'GET' && request.method !== 'HEAD') checkMutation(request)
      const user = hit.route.opts.public ? null : await requireUser(request)
      return await hit.route.fn({ request, url, params: hit.params, user })
    } catch (err) {
      if (err instanceof CmsError) {
        const body = { error: err.message, code: err.code }
        if (err.details) body.details = err.details
        // `next start` in Next 13.4 proxies each request to a worker through
        // undici's fetch, which turns a 401 answer to a request with a body
        // into a network error (it tries to replay the body to authenticate)
        // and the client gets an HTML 500. Writes therefore get 403 with the
        // same `code`; clients should branch on `code`, not the status.
        const status = err.status === 401 && request.method !== 'GET' ? 403 : err.status
        return json(body, status, NO_STORE)
      }
      console.error('[insights-cms]', err)
      return json({ error: 'Something went wrong. Please try again.', code: 'server_error' }, 500, NO_STORE)
    }
  }

  return { GET: handle, POST: handle, PATCH: handle, DELETE: handle, handle }
}
