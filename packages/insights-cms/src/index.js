/**
 * insights-cms — a small MongoDB-backed insights/blog backend for Next.js.
 *
 *   import { createInsightsCms } from 'insights-cms'
 *
 *   export const cms = createInsightsCms({
 *     uri: process.env.MONGODB_URI,
 *     dbName: 'mysite',
 *     onChange: () => revalidateTag('insights'),
 *   })
 *
 * `cms.repo`   — call from server components (listPublished, getPublishedBySlug…)
 * `cms.routes` — export from one catch-all route handler
 * `cms.auth`   — accounts and sessions (the CLI uses this)
 *
 * See README.md for mounting it in a site.
 */

import { createAuth } from './auth.js'
import { createStore } from './db.js'
import { createRoutes } from './http.js'
import { createRepo } from './repo.js'
import { BLOCK_TYPES } from './schema.js'

const DEFAULTS = {
  dbName: 'insights',
  collectionPrefix: 'cms_',
  basePath: '/api/cms',
  cookieName: 'cms_session',
  blockTypes: BLOCK_TYPES,
  timeZone: 'UTC',
  locale: 'en-GB',
  titleBudget: null,
  sessionDays: 14,
  maxAttempts: 5,
  lockoutMinutes: 15,
  allowedOrigins: [],
  onChange: null,
}

export function createInsightsCms(options = {}) {
  // Undefined options fall back to defaults, so callers can pass
  // `process.env.X || undefined` without clobbering them.
  const given = Object.fromEntries(Object.entries(options).filter(([, v]) => v !== undefined))
  const config = { ...DEFAULTS, ...given }
  const unknown = config.blockTypes.filter((t) => !BLOCK_TYPES.includes(t))
  if (unknown.length) throw new Error(`insights-cms: unknown block types ${unknown.join(', ')}`)
  config.basePath = config.basePath.replace(/\/+$/, '')

  const store = createStore(config)
  const repo = createRepo(config, store)
  const auth = createAuth(config, store)
  const routes = createRoutes(config, repo, auth)

  return { config, repo, auth, routes, close: store.close }
}

export { CmsError } from './errors.js'
export * from './derive.js'
export { BLOCK_TYPES, LIMITS, cleanBody, postWarnings, publishErrors, validateBlock, validatePost } from './schema.js'
