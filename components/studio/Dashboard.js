'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { relativeTime, statusOf } from './format'
import { useStudio } from './StudioShell'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'draft', label: 'Drafts' },
  { key: 'scheduled', label: 'Scheduled' },
  { key: 'published', label: 'Live' },
  { key: 'archived', label: 'Archived' },
]

export default function Dashboard() {
  const { request, user } = useStudio()
  const router = useRouter()
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')
  const [q, setQ] = useState('')
  const [creating, setCreating] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [createError, setCreateError] = useState('')

  const load = useCallback(async () => {
    setError('')
    try {
      const { insights } = await request('admin/insights')
      setPosts(insights)
    } catch (err) {
      setError(err.message)
    }
  }, [request])

  useEffect(() => {
    load()
  }, [load])

  const counts = useMemo(() => {
    const c = { all: 0, draft: 0, scheduled: 0, published: 0, archived: 0 }
    for (const p of posts ?? []) {
      c.all++
      c[statusOf(p).key]++
    }
    return c
  }, [posts])

  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return (posts ?? []).filter((p) => {
      if (filter !== 'all' && statusOf(p).key !== filter) return false
      if (!needle) return true
      return [p.title, p.category, p.slug, ...(p.tags ?? [])].some((s) => s?.toLowerCase().includes(needle))
    })
  }, [posts, filter, q])

  async function create(e) {
    e.preventDefault()
    setCreateError('')
    try {
      const { insight } = await request('admin/insights', { method: 'POST', body: { title: newTitle } })
      router.push(`/studio/edit/${insight.id}`)
    } catch (err) {
      setCreateError(err.details?.title || err.message)
    }
  }

  return (
    <div className="st-container">
      <div className="st-page-head">
        <div>
          <p className="eyebrow">Insights</p>
          <h1 className="st-h1">Hello, {user.name.split(' ')[0]}</h1>
        </div>
        {!creating && (
          <button type="button" className="btn btn--primary" onClick={() => setCreating(true)}>
            New insight
          </button>
        )}
      </div>

      {creating && (
        <form className="st-card st-new" onSubmit={create}>
          <div className="field">
            <label htmlFor="st-new-title">Working title</label>
            <input
              id="st-new-title"
              className="input"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. What the 2027 Finance Act changes for SMEs"
              autoFocus
            />
            <span className="hint">You can change it at any time. Nothing is published until you choose to.</span>
          </div>
          {createError && (
            <p className="form-status" data-tone="error" role="alert">
              {createError}
            </p>
          )}
          <div className="st-row">
            <button type="submit" className="btn btn--primary" disabled={!newTitle.trim()}>
              Start writing
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => setCreating(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="st-toolbar">
        <div className="st-tabs" role="tablist" aria-label="Filter by status">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              className="st-tab"
              onClick={() => setFilter(f.key)}
            >
              {f.label}
              <span className="st-count">{counts[f.key]}</span>
            </button>
          ))}
        </div>
        <input
          type="search"
          className="input st-search"
          placeholder="Search title, category or tag"
          aria-label="Search insights"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {error && (
        <div className="st-alert st-alert--error" role="alert">
          <p>{error}</p>
          <button type="button" className="btn btn--ghost btn--sm" onClick={load}>
            Try again
          </button>
        </div>
      )}

      {posts === null && !error && <p className="st-muted">Loading insights…</p>}

      {posts && visible.length === 0 && (
        <div className="st-empty">
          {posts.length === 0 ? (
            <p>No insights yet. Start one with <strong>New insight</strong>.</p>
          ) : (
            <p>Nothing matches that filter.</p>
          )}
        </div>
      )}

      {visible.length > 0 && (
        <ul className="st-list">
          {visible.map((p) => {
            const s = statusOf(p)
            return (
              <li key={p.id}>
                <Link href={`/studio/edit/${p.id}`} className="st-list-row">
                  <div className="st-list-main">
                    <p className="st-list-title">{p.title || 'Untitled'}</p>
                    <p className="st-list-meta">
                      {p.category || 'No category'}
                      <span aria-hidden="true"> · </span>
                      {s.key === 'scheduled' ? `Goes live ${p.dateLabel}` : p.dateLabel}
                      <span aria-hidden="true"> · </span>
                      {p.readTime} min read
                    </p>
                  </div>
                  <div className="st-list-side">
                    <span className={`st-status st-status--${s.tone}`}>{s.label}</span>
                    <span className="st-list-edited">
                      Edited {relativeTime(p.updatedAt)}
                      {p.updatedBy?.name ? ` by ${p.updatedBy.name.split(' ')[0]}` : ''}
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
