'use client'

import { useState } from 'react'
import { useStudio } from './StudioShell'

export default function Account() {
  const { user, request, signOut } = useStudio()
  const [form, setForm] = useState({ current: '', next: '', repeat: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setErrors({})
    setStatus(null)
    if (form.next !== form.repeat) return setErrors({ repeat: 'The new passwords don’t match.' })
    setBusy(true)
    try {
      await request('auth/password', { method: 'POST', body: { current: form.current, next: form.next } })
      setForm({ current: '', next: '', repeat: '' })
      setStatus({ tone: 'ok', text: 'Password changed. Any other devices have been signed out.' })
    } catch (err) {
      setErrors(err.details ?? {})
      if (!err.details) setStatus({ tone: 'error', text: err.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="st-container st-container--narrow">
      <div className="st-page-head">
        <div>
          <p className="eyebrow">Account</p>
          <h1 className="st-h1">{user.name}</h1>
          <p className="st-muted">{user.email}</p>
        </div>
      </div>

      <form className="st-card st-stack" onSubmit={submit} noValidate>
        <h2 className="st-h2">Change password</h2>
        {[
          ['current', 'Current password', 'current-password'],
          ['next', 'New password', 'new-password'],
          ['repeat', 'Repeat new password', 'new-password'],
        ].map(([k, label, ac]) => (
          <div className={`field${errors[k] ? ' st-field--error' : ''}`} key={k}>
            <label htmlFor={`pw-${k}`}>{label}</label>
            <input
              id={`pw-${k}`}
              className="input"
              type="password"
              autoComplete={ac}
              value={form[k]}
              onChange={set(k)}
              required
            />
            {k === 'next' && !errors.next && <span className="hint">At least 10 characters. A short phrase is easiest.</span>}
            {errors[k] && (
              <span className="st-field-error" role="alert">
                {errors[k]}
              </span>
            )}
          </div>
        ))}
        {status && (
          <p className="form-status" data-tone={status.tone} role="status">
            {status.text}
          </p>
        )}
        <div className="st-row">
          <button type="submit" className="btn btn--primary" disabled={busy || !form.current || !form.next}>
            {busy ? 'Saving…' : 'Change password'}
          </button>
        </div>
      </form>

      <div className="st-card st-stack">
        <h2 className="st-h2">This device</h2>
        <p className="st-muted">
          Signing out here ends this session only. You stay signed in for 14 days on devices you use regularly.
        </p>
        <div className="st-row">
          <button type="button" className="btn btn--ghost" onClick={signOut}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}
