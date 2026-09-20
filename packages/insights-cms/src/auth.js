/**
 * Accounts and sessions.
 *
 * - Passwords: scrypt (node:crypto), per-user random salt, parameters stored
 *   alongside the hash so they can be raised later without breaking logins.
 * - Sessions: a random 32-byte token goes in an httpOnly cookie; only its
 *   SHA-256 is stored, so a leaked database cannot be replayed as a login.
 *   Expiry slides forward while the session is in use; Mongo's TTL index
 *   removes expired rows.
 * - Throttling: failures are counted per email + IP. After `maxAttempts`, that
 *   pair is locked out until `lockoutMinutes` pass with no further failure.
 *
 * There is no sign-up route. Accounts are created with the CLI.
 */

import { createHash, randomBytes, scrypt as scryptCb, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'
import { ObjectId } from 'mongodb'
import { CmsError, conflict, invalid, unauthorised } from './errors.js'

const scrypt = promisify(scryptCb)

const SCRYPT = { N: 16384, r: 8, p: 1, keylen: 64 }
export const PASSWORD_MIN = 10
const PASSWORD_MAX = 256

const sha256 = (s) => createHash('sha256').update(s).digest('hex')
export const normaliseEmail = (s) => String(s ?? '').trim().toLowerCase()
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function hashPassword(password) {
  const salt = randomBytes(16)
  const { N, r, p, keylen } = SCRYPT
  const hash = await scrypt(password, salt, keylen, { N, r, p, maxmem: 64 * 1024 * 1024 })
  return ['scrypt', N, r, p, salt.toString('base64'), hash.toString('base64')].join('$')
}

export async function verifyPassword(password, stored) {
  const [alg, N, r, p, saltB64, hashB64] = String(stored ?? '').split('$')
  if (alg !== 'scrypt' || !saltB64 || !hashB64) return false
  const expected = Buffer.from(hashB64, 'base64')
  const actual = await scrypt(String(password), Buffer.from(saltB64, 'base64'), expected.length, {
    N: Number(N),
    r: Number(r),
    p: Number(p),
    maxmem: 64 * 1024 * 1024,
  })
  return actual.length === expected.length && timingSafeEqual(actual, expected)
}

function checkPassword(password) {
  if (typeof password !== 'string' || password.length < PASSWORD_MIN) {
    return `Use at least ${PASSWORD_MIN} characters.`
  }
  if (password.length > PASSWORD_MAX) return `Use at most ${PASSWORD_MAX} characters.`
  return null
}

export function createAuth(config, store) {
  const { sessionDays, maxAttempts, lockoutMinutes } = config
  const sessionMs = sessionDays * 24 * 60 * 60 * 1000
  const lockoutMs = lockoutMinutes * 60 * 1000
  const SLIDE_AFTER_MS = 60 * 60 * 1000

  // Verified against when the email is unknown, so a miss costs the same time
  // as a wrong password and response timing doesn't reveal which accounts exist.
  let dummyHash
  const getDummyHash = async () => (dummyHash ??= await hashPassword(randomBytes(16).toString('hex')))

  const publicUser = (u) => ({ id: u._id.toString(), email: u.email, name: u.name })

  /* ---------------------------------------------------------- accounts */

  async function createUser({ email, name, password }) {
    const errors = {}
    const e = normaliseEmail(email)
    if (!EMAIL_PATTERN.test(e)) errors.email = 'Enter a valid email address.'
    const n = String(name ?? '').trim()
    if (!n) errors.name = 'Enter a name.'
    const pwErr = checkPassword(password)
    if (pwErr) errors.password = pwErr
    if (Object.keys(errors).length) throw invalid(errors)

    const { users } = await store.getCollections()
    try {
      const doc = { email: e, name: n, passwordHash: await hashPassword(password), createdAt: new Date() }
      const { insertedId } = await users.insertOne(doc)
      return publicUser({ ...doc, _id: insertedId })
    } catch (err) {
      if (err?.code === 11000) throw conflict('email_taken', `An account for ${e} already exists.`)
      throw err
    }
  }

  async function listUsers() {
    const { users } = await store.getCollections()
    const docs = await users.find({}, { projection: { passwordHash: 0 } }).sort({ email: 1 }).toArray()
    return docs.map((u) => ({ ...publicUser(u), createdAt: u.createdAt, lastLoginAt: u.lastLoginAt ?? null }))
  }

  /** Set a password and sign the account out everywhere. */
  async function setPassword(email, password) {
    const pwErr = checkPassword(password)
    if (pwErr) throw invalid({ password: pwErr })
    const { users, sessions } = await store.getCollections()
    const user = await users.findOne({ email: normaliseEmail(email) })
    if (!user) throw new CmsError(404, 'not_found', `No account for ${normaliseEmail(email)}.`)
    await users.updateOne({ _id: user._id }, { $set: { passwordHash: await hashPassword(password) } })
    await sessions.deleteMany({ userId: user._id })
    return publicUser(user)
  }

  async function removeUser(email) {
    const { users, sessions } = await store.getCollections()
    const user = await users.findOne({ email: normaliseEmail(email) })
    if (!user) throw new CmsError(404, 'not_found', `No account for ${normaliseEmail(email)}.`)
    await sessions.deleteMany({ userId: user._id })
    await users.deleteOne({ _id: user._id })
    return publicUser(user)
  }

  /* ---------------------------------------------------------- sessions */

  async function login({ email, password, ip = '', userAgent = '' }) {
    const e = normaliseEmail(email)
    if (!e || typeof password !== 'string' || !password) {
      throw invalid({ email: !e ? 'Enter your email.' : undefined, password: !password ? 'Enter your password.' : undefined })
    }

    const { users, sessions, attempts } = await store.getCollections()
    const key = sha256(`${e}|${ip}`)
    const now = new Date()

    const prior = await attempts.findOne({ key })
    if (prior && prior.count >= maxAttempts && prior.expiresAt > now) {
      const mins = Math.max(1, Math.ceil((prior.expiresAt - now) / 60000))
      throw new CmsError(429, 'locked', `Too many failed attempts. Try again in ${mins} minute${mins === 1 ? '' : 's'}.`)
    }

    const user = await users.findOne({ email: e })
    const ok = user
      ? await verifyPassword(password, user.passwordHash)
      : (await verifyPassword(password, await getDummyHash()), false)

    if (!ok || user.disabled) {
      await attempts.updateOne(
        { key },
        { $inc: { count: 1 }, $set: { expiresAt: new Date(now.getTime() + lockoutMs) } },
        { upsert: true }
      )
      throw new CmsError(401, 'bad_credentials', 'Email or password is incorrect.')
    }

    await attempts.deleteOne({ key })
    const token = randomBytes(32).toString('base64url')
    const expiresAt = new Date(now.getTime() + sessionMs)
    await sessions.insertOne({
      tokenHash: sha256(token),
      userId: user._id,
      createdAt: now,
      lastSeenAt: now,
      expiresAt,
      userAgent: String(userAgent).slice(0, 300),
    })
    await users.updateOne({ _id: user._id }, { $set: { lastLoginAt: now } })
    return { token, expiresAt, user: publicUser(user) }
  }

  /** The signed-in user for a session token, or null. Extends the session while in use. */
  async function getSession(token) {
    if (!token || typeof token !== 'string') return null
    const { users, sessions } = await store.getCollections()
    const now = new Date()
    const session = await sessions.findOne({ tokenHash: sha256(token), expiresAt: { $gt: now } })
    if (!session) return null
    const user = await users.findOne({ _id: session.userId }, { projection: { passwordHash: 0 } })
    if (!user || user.disabled) return null

    let { expiresAt } = session
    if (now - session.lastSeenAt > SLIDE_AFTER_MS) {
      expiresAt = new Date(now.getTime() + sessionMs)
      await sessions.updateOne({ _id: session._id }, { $set: { lastSeenAt: now, expiresAt } })
    }
    return { user: publicUser(user), expiresAt }
  }

  async function logout(token) {
    if (!token) return
    const { sessions } = await store.getCollections()
    await sessions.deleteOne({ tokenHash: sha256(token) })
  }

  /** Change password with the current one; signs out every other session. */
  async function changePassword({ userId, currentToken, current, next }) {
    const { users, sessions } = await store.getCollections()
    const user = ObjectId.isValid(userId) ? await users.findOne({ _id: new ObjectId(userId) }) : null
    if (!user) throw unauthorised()
    if (!(await verifyPassword(current ?? '', user.passwordHash))) {
      throw invalid({ current: 'Current password is incorrect.' })
    }
    const pwErr = checkPassword(next)
    if (pwErr) throw invalid({ next: pwErr })
    await users.updateOne({ _id: user._id }, { $set: { passwordHash: await hashPassword(next) } })
    await sessions.deleteMany({ userId: user._id, tokenHash: { $ne: sha256(currentToken ?? '') } })
    return publicUser(user)
  }

  return { createUser, listUsers, setPassword, removeUser, login, getSession, logout, changePassword }
}
