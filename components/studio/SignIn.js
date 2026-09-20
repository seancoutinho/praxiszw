'use client'

import { useState } from 'react'
import { api } from './api'

export default function SignIn({ onSignedIn, online }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const { user } = await api('auth/login', { method: 'POST', body: { email, password } })
      onSignedIn(user)
    } catch (err) {
      setError(err.message)
      setPassword('')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="st-center st-signin">
      <form className="st-card st-signin-card" onSubmit={submit} noValidate>
        <div className="st-brand st-brand--dark">
          <span className="st-brand-mark" aria-hidden="true">P</span>
          <span>
            Praxis <strong>Studio</strong>
          </span>
        </div>
        <h1 className="st-signin-title">Sign in to publish insights</h1>

        <div className="field">
          <label htmlFor="st-email">Email</label>
          <input
            id="st-email"
            className="input"
            type="email"
            autoComplete="username"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="st-password">Password</label>
          <input
            id="st-password"
            className="input"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="form-status" data-tone="error" role="alert">
            {error}
          </p>
        )}
        {!online && (
          <p className="form-status" role="status">
            You’re offline — connect to sign in.
          </p>
        )}

        <button type="submit" className="btn btn--primary btn--block" disabled={busy || !email || !password}>
          {busy ? 'Signing in…' : 'Sign in'}
        </button>
        <p className="st-muted st-small">
          Forgotten your password? Ask your site administrator to reset it.
        </p>
      </form>
    </div>
  )
}
