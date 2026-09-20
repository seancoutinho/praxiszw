/**
 * An error with an HTTP status the route layer can hand straight back to the
 * client. `code` is stable and machine-readable; `message` is for people.
 */
export class CmsError extends Error {
  constructor(status, code, message, details) {
    super(message)
    this.name = 'CmsError'
    this.status = status
    this.code = code
    if (details !== undefined) this.details = details
  }
}

export const badRequest = (message, details) => new CmsError(400, 'bad_request', message, details)
export const invalid = (details, message = 'Some fields need attention.') =>
  new CmsError(422, 'invalid', message, details)
export const unauthorised = (message = 'Sign in to continue.') =>
  new CmsError(401, 'unauthorised', message)
export const forbidden = (message = 'Not allowed.') => new CmsError(403, 'forbidden', message)
export const notFound = (message = 'Not found.') => new CmsError(404, 'not_found', message)
export const conflict = (code, message, details) => new CmsError(409, code, message, details)
