/**
 * Studio → /api/cms client. Every call is JSON; mutations always send a body
 * (even `{}`) because the API refuses non-JSON writes as a CSRF guard.
 */

export const API_BASE = '/api/cms'

export class ApiError extends Error {
  constructor(status, data) {
    super(data?.error || (status === 0 ? 'You appear to be offline.' : `Request failed (${status}).`))
    this.status = status
    this.code = data?.code || (status === 0 ? 'offline' : 'error')
    this.details = data?.details || null
  }
}

export async function api(path, { method = 'GET', body } = {}) {
  const init = { method, credentials: 'same-origin', cache: 'no-store', headers: {} }
  if (method !== 'GET') {
    init.headers['Content-Type'] = 'application/json'
    init.body = JSON.stringify(body ?? {})
  }

  let res
  try {
    res = await fetch(`${API_BASE}/${path}`, init)
  } catch {
    throw new ApiError(0, null)
  }

  let data = null
  try {
    data = await res.json()
  } catch {}
  if (!res.ok) throw new ApiError(res.status, data)
  return data
}
