'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ApiError, api } from './api'
import SignIn from './SignIn'

/**
 * Studio chrome and session gate.
 *
 * Children only render once a session is confirmed; any API call that comes
 * back 401 (expired session) drops the user back to the sign-in screen without
 * losing the page they were on. Also registers the studio's service worker and
 * surfaces the browser's "install app" prompt when one is offered.
 */

const StudioContext = createContext(null)
export const useStudio = () => useContext(StudioContext)

export default function StudioShell({ children }) {
  const [user, setUser] = useState(undefined) // undefined = checking, null = signed out
  const [meta, setMeta] = useState(null)
  const [online, setOnline] = useState(true)
  const [installPrompt, setInstallPrompt] = useState(null)
  const pathname = usePathname()

  // Wraps api() so an expired session anywhere signs the studio out.
  const request = useCallback(async (path, opts) => {
    try {
      return await api(path, opts)
    } catch (err) {
      // By code, not status: the API answers writes with 403 rather than 401.
      if (err instanceof ApiError && err.code === 'unauthorised') setUser(null)
      throw err
    }
  }, [])

  const refreshMeta = useCallback(async () => {
    try {
      setMeta(await request('admin/meta'))
    } catch {}
  }, [request])

  useEffect(() => {
    api('auth/me')
      .then((d) => setUser(d.user))
      .catch(() => setUser(null))
  }, [])

  useEffect(() => {
    if (user) refreshMeta()
  }, [user, refreshMeta])

  useEffect(() => {
    const update = () => setOnline(navigator.onLine)
    update()
    window.addEventListener('online', update)
    window.addEventListener('offline', update)

    const onPrompt = (e) => {
      e.preventDefault()
      setInstallPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)

    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/studio/sw.js', { scope: '/studio' }).catch(() => {})
    }

    return () => {
      window.removeEventListener('online', update)
      window.removeEventListener('offline', update)
      window.removeEventListener('beforeinstallprompt', onPrompt)
    }
  }, [])

  async function signOut() {
    try {
      await api('auth/logout', { method: 'POST' })
    } catch {}
    setUser(null)
  }

  async function install() {
    if (!installPrompt) return
    installPrompt.prompt()
    await installPrompt.userChoice.catch(() => null)
    setInstallPrompt(null)
  }

  const value = useMemo(
    () => ({ user, meta, refreshMeta, online, request, signOut }),
    [user, meta, refreshMeta, online, request]
  )

  if (user === undefined) {
    return (
      <div className="st-center">
        <p className="st-muted" role="status">Loading the studio…</p>
      </div>
    )
  }

  if (!user) return <SignIn onSignedIn={setUser} online={online} />

  const nav = [
    { href: '/studio', label: 'Insights', active: pathname === '/studio' || pathname.startsWith('/studio/edit') },
    { href: '/studio/account', label: 'Account', active: pathname.startsWith('/studio/account') },
  ]

  return (
    <StudioContext.Provider value={value}>
      <header className="st-bar">
        <div className="st-bar-inner">
          <Link href="/studio" className="st-brand">
            <span className="st-brand-mark" aria-hidden="true">P</span>
            <span>
              Praxis <strong>Studio</strong>
            </span>
          </Link>
          <nav className="st-nav" aria-label="Studio">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={n.active ? 'page' : undefined}>
                {n.label}
              </Link>
            ))}
            <a href="/insights" target="_blank" rel="noopener">
              View site
            </a>
          </nav>
          <div className="st-bar-actions">
            {installPrompt && (
              <button type="button" className="btn btn--on-navy btn--sm" onClick={install}>
                Install app
              </button>
            )}
            <button type="button" className="btn btn--on-navy btn--sm" onClick={signOut}>
              Sign out
            </button>
          </div>
        </div>
      </header>
      {!online && (
        <div className="st-offline" role="status">
          You’re offline. You can keep writing — changes stay on this device and save when you reconnect.
        </div>
      )}
      <main className="st-main">{children}</main>
    </StudioContext.Provider>
  )
}
