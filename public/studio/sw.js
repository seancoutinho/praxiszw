/**
 * Praxis Studio service worker. Scope: /studio (see the Service-Worker-Allowed
 * header in next.config.js — without it a worker at /studio/sw.js could only
 * control /studio/…, not /studio itself).
 *
 * - The API is never cached: every read and write goes to the network, and the
 *   editor keeps unsaved work in localStorage when that fails.
 * - Studio pages are network-first, falling back to the last copy seen, then
 *   to an offline page — so the installed app opens without a connection.
 * - Next's hashed build assets are immutable, so they are served cache-first.
 *
 * Bump VERSION to drop every cached page on the next visit.
 */
const VERSION = 'praxis-studio-v1'
const OFFLINE = '/studio/offline.html'
const PRECACHE = [OFFLINE, '/web-app-manifest-192x192.png']

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

async function networkFirst(request, fallbackToOffline) {
  const cache = await caches.open(VERSION)
  try {
    const res = await fetch(request)
    if (res.ok && res.type === 'basic') cache.put(request, res.clone())
    return res
  } catch (err) {
    const hit = await cache.match(request)
    if (hit) return hit
    if (fallbackToOffline) return cache.match(OFFLINE)
    throw err
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(VERSION)
  const hit = await cache.match(request)
  if (hit) return hit
  const res = await fetch(request)
  if (res.ok) cache.put(request, res.clone())
  return res
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return
  if (url.pathname.startsWith('/api/')) return

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, true))
  } else if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request))
  } else if (url.pathname === '/studio' || url.pathname.startsWith('/studio/')) {
    event.respondWith(networkFirst(request, false))
  }
})
