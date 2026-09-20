/**
 * Mongo connection and collections.
 *
 * On serverless hosts every warm invocation re-evaluates route modules, so the
 * client is cached on `globalThis` keyed by URI; otherwise each request would
 * open a fresh pool and Atlas would run out of connections. In development the
 * same cache survives hot reloads.
 */

import { MongoClient } from 'mongodb'
import { CmsError } from './errors.js'

const cache = (globalThis.__insightsCms ??= { clients: new Map(), indexes: new Map() })

function getClient(uri) {
  let pending = cache.clients.get(uri)
  if (!pending) {
    const client = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10_000,
      appName: 'insights-cms',
    })
    pending = client.connect()
    // A failed connect must not be cached forever — the next call retries.
    pending.catch(() => cache.clients.delete(uri))
    cache.clients.set(uri, pending)
  }
  return pending
}

/**
 * `getCollections()` resolves once the connection is up and indexes exist.
 * The URI is checked lazily so importing the package never throws — a site can
 * build pages that don't touch the CMS without the env var set.
 */
export function createStore({ uri, dbName, collectionPrefix }) {
  const names = {
    insights: `${collectionPrefix}insights`,
    users: `${collectionPrefix}users`,
    sessions: `${collectionPrefix}sessions`,
    attempts: `${collectionPrefix}login_attempts`,
  }

  async function getCollections() {
    if (!uri) {
      throw new CmsError(500, 'not_configured', 'The CMS database is not configured (MONGODB_URI is not set).')
    }
    const client = await getClient(uri)
    const db = client.db(dbName)
    const cols = {
      insights: db.collection(names.insights),
      users: db.collection(names.users),
      sessions: db.collection(names.sessions),
      attempts: db.collection(names.attempts),
    }

    const key = `${uri}::${dbName}::${collectionPrefix}`
    let ready = cache.indexes.get(key)
    if (!ready) {
      ready = ensureIndexes(cols)
      ready.catch(() => cache.indexes.delete(key))
      cache.indexes.set(key, ready)
    }
    await ready
    return cols
  }

  async function close() {
    const pending = cache.clients.get(uri)
    if (!pending) return
    cache.clients.delete(uri)
    for (const k of cache.indexes.keys()) if (k.startsWith(`${uri}::`)) cache.indexes.delete(k)
    const client = await pending.catch(() => null)
    await client?.close()
  }

  return { getCollections, close, names }
}

async function ensureIndexes({ insights, users, sessions, attempts }) {
  await Promise.all([
    insights.createIndex({ slug: 1 }, { unique: true }),
    insights.createIndex({ status: 1, date: -1 }),
    users.createIndex({ email: 1 }, { unique: true }),
    sessions.createIndex({ tokenHash: 1 }, { unique: true }),
    sessions.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
    attempts.createIndex({ key: 1 }, { unique: true }),
    attempts.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
  ])
}
