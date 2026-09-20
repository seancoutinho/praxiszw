'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { estimateReadTime, slugify } from 'insights-cms/derive'
import { LIMITS, postWarnings } from 'insights-cms/schema'
import BlockEditor, { AutoTextarea, stripKeys, withKey } from './BlockEditor'
import Preview from './Preview'
import TagInput from './TagInput'
import { clockTime, relativeTime, statusOf } from './format'
import { useStudio } from './StudioShell'

/**
 * One insight, edited.
 *
 * Saving model:
 * - Drafts autosave a few seconds after typing stops.
 * - Live posts never autosave — edits go live only on "Update live", which
 *   the server checks as strictly as a publish.
 * - Every edit is mirrored to localStorage until the server has it, so a lost
 *   connection or a closed tab never loses work; the mirror is offered back
 *   on the next visit.
 * - Saves carry the `updatedAt` the editor last saw. If another device saved
 *   in between, the server refuses and the author chooses whose version wins.
 */

const AUTOSAVE_MS = 4000
const mirrorKey = (id) => `praxis-studio:draft:${id}`

const toDraft = (p) => ({
  title: p.title ?? '',
  slug: p.slug ?? '',
  seoTitle: p.seoTitle ?? '',
  metaDescription: p.metaDescription ?? '',
  excerpt: p.excerpt ?? '',
  category: p.category ?? '',
  tags: p.tags ?? [],
  date: p.date ?? '',
  updated: p.updated ?? '',
  readTimeOverride: p.readTimeOverride ?? '',
  body: (p.body ?? []).map(withKey),
})

const toPayload = (d) => ({
  title: d.title,
  slug: d.slug,
  seoTitle: d.seoTitle,
  metaDescription: d.metaDescription,
  excerpt: d.excerpt,
  category: d.category,
  tags: d.tags,
  date: d.date,
  updated: d.updated || null,
  readTimeOverride: d.readTimeOverride === '' || d.readTimeOverride == null ? null : Number(d.readTimeOverride),
  body: stripKeys(d.body),
})

const readMirror = (id) => {
  try {
    return JSON.parse(localStorage.getItem(mirrorKey(id)) || 'null')
  } catch {
    return null
  }
}

function Counter({ value, target, max }) {
  const n = value.length
  const over = target ? n > target : n > max
  return (
    <span className={`st-counter${over ? ' st-counter--over' : ''}`}>
      {n}
      {target ? ` / ${target}` : ''}
    </span>
  )
}

function Field({ id, label, hint, error, warning, aside, children }) {
  return (
    <div className={`field st-field${error ? ' st-field--error' : ''}`}>
      <div className="st-field-head">
        <label htmlFor={id}>{label}</label>
        {aside}
      </div>
      {children}
      {hint && !error && <span className="hint">{hint}</span>}
      {warning && !error && <span className="st-field-warn">{warning}</span>}
      {error && (
        <span className="st-field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default function Editor({ id }) {
  const { request, meta, refreshMeta, online } = useStudio()
  const router = useRouter()

  const [post, setPost] = useState(null) // last server copy
  const [draft, setDraft] = useState(null) // what the author is editing
  const [snapshot, setSnapshot] = useState('') // payload JSON the server last accepted
  const [loadError, setLoadError] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState(null) // { offline } | { message }
  const [errors, setErrors] = useState({})
  const [notice, setNotice] = useState(null) // { tone, text }
  const [conflict, setConflict] = useState(false)
  const [recovery, setRecovery] = useState(null)
  const [lastSaved, setLastSaved] = useState(null)
  const [view, setView] = useState('edit')
  const [busy, setBusy] = useState('')
  const slugTouched = useRef(false)
  const moreRef = useRef(null)

  useEffect(() => {
    const close = (e) => {
      if (moreRef.current?.open && !moreRef.current.contains(e.target)) moreRef.current.open = false
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  /* ---------------------------------------------------------- load */

  const load = useCallback(async () => {
    setLoadError('')
    try {
      const { insight } = await request(`admin/insights/${id}`)
      const d = toDraft(insight)
      const snap = JSON.stringify(toPayload(d))
      setPost(insight)
      setDraft(d)
      setSnapshot(snap)
      setConflict(false)
      setErrors({})
      slugTouched.current = insight.status !== 'draft' || insight.publishedAt || d.slug !== slugify(d.title)
      const mirror = readMirror(id)
      if (mirror && mirror.payload !== snap) setRecovery(mirror)
      else localStorage.removeItem(mirrorKey(id))
    } catch (err) {
      setLoadError(err.status === 404 ? 'This insight no longer exists.' : err.message)
    }
  }, [id, request])

  useEffect(() => {
    load()
  }, [load])

  const payload = useMemo(() => (draft ? toPayload(draft) : null), [draft])
  const payloadJson = useMemo(() => (payload ? JSON.stringify(payload) : ''), [payload])
  const dirty = !!draft && payloadJson !== snapshot
  const isDraft = post?.status === 'draft'
  const isLive = post?.status === 'published'

  /* ---------------------------------------------------------- mirror */

  useEffect(() => {
    if (!draft || recovery) return
    const t = setTimeout(() => {
      try {
        if (dirty) {
          localStorage.setItem(
            mirrorKey(id),
            JSON.stringify({ payload: payloadJson, savedAt: new Date().toISOString(), title: draft.title })
          )
        } else localStorage.removeItem(mirrorKey(id))
      } catch {}
    }, 400)
    return () => clearTimeout(t)
  }, [id, draft, dirty, payloadJson, recovery])

  /* ---------------------------------------------------------- save */

  const save = useCallback(
    async ({ confirmSlugChange = false } = {}) => {
      if (!post || !payload) return null
      const sent = payloadJson
      setSaving(true)
      setSaveError(null)
      try {
        const { insight } = await request(`admin/insights/${id}`, {
          method: 'PATCH',
          body: { ...JSON.parse(sent), expectedUpdatedAt: post.updatedAt, confirmSlugChange },
        })
        setPost(insight)
        setSnapshot(sent)
        setErrors({})
        setLastSaved(new Date())
        if (insight.status === 'published') refreshMeta()
        return insight
      } catch (err) {
        if (err.code === 'offline') setSaveError({ offline: true })
        else if (err.code === 'stale') setConflict(true)
        else if (err.code === 'slug_locked') {
          const ok = window.confirm(
            'This insight is live. Changing its slug changes its web address, and links people have already shared will stop working.\n\nChange it anyway?'
          )
          if (ok) {
            setSaving(false)
            return save({ confirmSlugChange: true })
          }
          setErrors({ slug: 'Slug not changed. Put the old one back, or confirm the change when saving.' })
          setSaveError({ message: 'Not saved' })
        } else {
          if (err.details) setErrors(err.details)
          setSaveError({ message: err.message })
        }
        return null
      } finally {
        setSaving(false)
      }
    },
    [id, post, payload, payloadJson, request, refreshMeta]
  )

  // Drafts autosave once typing pauses. Retries automatically after reconnecting.
  useEffect(() => {
    if (!isDraft || !dirty || saving || conflict || recovery || !online) return
    if (saveError && !saveError.offline) return
    const t = setTimeout(() => save(), AUTOSAVE_MS)
    return () => clearTimeout(t)
  }, [isDraft, dirty, saving, conflict, recovery, online, saveError, save, payloadJson])

  // Ctrl/Cmd+S saves; leaving with unsaved work asks first.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 's') {
        e.preventDefault()
        if (dirty && !saving) save()
      }
    }
    const onUnload = (e) => {
      if (!dirty) return
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('beforeunload', onUnload)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('beforeunload', onUnload)
    }
  }, [dirty, saving, save])

  /* ---------------------------------------------------------- field edits */

  const set = (patch) => {
    setDraft((d) => {
      const next = { ...d, ...patch }
      if ('title' in patch && !slugTouched.current) next.slug = slugify(patch.title)
      return next
    })
    setNotice(null)
    if (saveError && !saveError.offline) setSaveError(null)
  }

  /* ---------------------------------------------------------- status actions */

  async function act(action, { confirm: question, done, after } = {}) {
    if (question && !window.confirm(question)) return
    setBusy(action)
    setNotice(null)
    try {
      if (dirty) {
        const saved = await save()
        if (!saved) return
      }
      const { insight } = await request(`admin/insights/${id}/${action}`, { method: 'POST' })
      setPost(insight)
      setErrors({})
      setNotice({ tone: 'ok', text: done })
      refreshMeta()
      after?.(insight)
    } catch (err) {
      if (err.details) setErrors(err.details)
      setNotice({ tone: 'error', text: err.message })
    } finally {
      setBusy('')
    }
  }

  const today = meta?.today ?? new Date().toISOString().slice(0, 10)
  const future = draft?.date && draft.date > today

  const publish = () =>
    act('publish', {
      confirm: future
        ? `Schedule this insight? It will appear on the website on ${draft.date}.`
        : 'Publish this insight? It will appear on the website straight away.',
      done: future ? 'Scheduled. It goes live on its publish date.' : 'Published. It is now live on the website.',
    })

  async function updateLive() {
    setNotice(null)
    const saved = await save()
    if (saved) setNotice({ tone: 'ok', text: 'Updated. The live article now shows these changes.' })
  }

  async function remove() {
    if (!window.confirm('Delete this insight permanently? This cannot be undone.')) return
    setBusy('delete')
    try {
      await request(`admin/insights/${id}`, { method: 'DELETE' })
      try {
        localStorage.removeItem(mirrorKey(id))
      } catch {}
      router.push('/studio')
    } catch (err) {
      setNotice({ tone: 'error', text: err.message })
      setBusy('')
    }
  }

  async function keepMine() {
    try {
      const { insight } = await request(`admin/insights/${id}`)
      setPost(insight)
      setConflict(false)
    } catch (err) {
      setNotice({ tone: 'error', text: err.message })
    }
  }

  // Once `post` reflects the latest server version, save over it.
  const pendingOverwrite = useRef(false)
  useEffect(() => {
    if (pendingOverwrite.current && !conflict) {
      pendingOverwrite.current = false
      save()
    }
  }, [post, conflict, save])

  function restoreMirror() {
    try {
      const p = JSON.parse(recovery.payload)
      setDraft(toDraft(p))
      slugTouched.current = true
    } catch {}
    setRecovery(null)
  }

  function discardMirror() {
    try {
      localStorage.removeItem(mirrorKey(id))
    } catch {}
    setRecovery(null)
  }

  /* ---------------------------------------------------------- render */

  if (loadError) {
    return (
      <div className="st-container">
        <div className="st-alert st-alert--error" role="alert">
          <p>{loadError}</p>
          <Link href="/studio" className="btn btn--ghost btn--sm">
            Back to insights
          </Link>
        </div>
      </div>
    )
  }
  if (!post || !draft) return <p className="st-container st-muted">Loading…</p>

  const status = statusOf(post)
  const readTimeAuto = estimateReadTime(payload.body)
  const warnings = Object.fromEntries(
    postWarnings(payload, { titleBudget: meta?.titleBudget }).map((w) => [w.field, w.message])
  )
  const errorList = Object.entries(errors).filter(([, v]) => v)

  let saveState
  if (saving) saveState = 'Saving…'
  else if (saveError?.offline) saveState = 'Offline — kept on this device'
  else if (saveError) saveState = saveError.message
  else if (dirty && !online) saveState = 'Offline — kept on this device'
  else if (dirty && isLive) saveState = 'Changes not live yet'
  else if (dirty) saveState = 'Unsaved changes'
  else if (lastSaved) saveState = `Saved ${clockTime(lastSaved)}`
  else saveState = `Last edited ${relativeTime(post.updatedAt)}`

  return (
    <div className="st-editor">
      <div className="st-editor-bar">
        <div className="st-editor-bar-inner">
          <div className="st-editor-left">
            <Link
              href="/studio"
              className="st-back"
              onClick={async (e) => {
                if (!dirty) return
                e.preventDefault()
                if (isDraft) {
                  if (await save()) router.push('/studio')
                } else if (window.confirm('Leave without making these changes live? They stay saved on this device.')) {
                  router.push('/studio')
                }
              }}
            >
              ← Insights
            </Link>
            <span className={`st-status st-status--${status.tone}`}>{status.label}</span>
            <span className={`st-savestate${saveError ? ' st-savestate--error' : ''}`} role="status" aria-live="polite">
              {saveState}
            </span>
          </div>

          <div className="st-editor-actions">
            {post.live && (
              <a className="btn btn--ghost btn--sm" href={`/insights/${post.slug}`} target="_blank" rel="noopener">
                View live
              </a>
            )}
            {isDraft && (
              <>
                <button type="button" className="btn btn--ghost btn--sm" onClick={() => save()} disabled={!dirty || saving}>
                  Save draft
                </button>
                <button type="button" className="btn btn--accent btn--sm" onClick={publish} disabled={!!busy || saving}>
                  {busy === 'publish' ? 'Publishing…' : future ? 'Schedule' : 'Publish'}
                </button>
              </>
            )}
            {isLive && (
              <button type="button" className="btn btn--accent btn--sm" onClick={updateLive} disabled={!dirty || saving}>
                {saving ? 'Updating…' : post.scheduled ? 'Save changes' : 'Update live'}
              </button>
            )}
            {post.status === 'archived' && (
              <button
                type="button"
                className="btn btn--primary btn--sm"
                onClick={() => act('unpublish', { done: 'Moved back to drafts.' })}
                disabled={!!busy}
              >
                Move to drafts
              </button>
            )}
            <details className="st-more" ref={moreRef}>
              <summary className="btn btn--ghost btn--sm" aria-label="More actions">
                More
              </summary>
              <div
                className="st-more-menu"
                onClick={(e) => {
                  if (e.target.closest('button') && moreRef.current) moreRef.current.open = false
                }}
              >
                {isLive && (
                  <button
                    type="button"
                    onClick={() =>
                      act('unpublish', {
                        confirm: 'Take this insight off the website and return it to drafts?',
                        done: 'Unpublished. It is no longer on the website.',
                      })
                    }
                  >
                    Unpublish
                  </button>
                )}
                {post.status !== 'archived' && (
                  <button
                    type="button"
                    onClick={() =>
                      act('archive', {
                        confirm: isLive
                          ? 'Archive this insight? It will be taken off the website.'
                          : 'Archive this draft?',
                        done: 'Archived.',
                      })
                    }
                  >
                    Archive
                  </button>
                )}
                {!isLive && (
                  <button type="button" className="st-danger" onClick={remove}>
                    Delete permanently
                  </button>
                )}
              </div>
            </details>
          </div>
        </div>
      </div>

      {recovery && (
        <div className="st-alert st-alert--warn st-editor-alert" role="alert">
          <p>
            This device has unsaved changes to this insight from {relativeTime(recovery.savedAt)}. Restore them?
          </p>
          <div className="st-row">
            <button type="button" className="btn btn--primary btn--sm" onClick={restoreMirror}>
              Restore my changes
            </button>
            <button type="button" className="btn btn--ghost btn--sm" onClick={discardMirror}>
              Discard them
            </button>
          </div>
        </div>
      )}

      {conflict && (
        <div className="st-alert st-alert--warn st-editor-alert" role="alert">
          <p>
            Someone (or another device) saved this insight after you opened it. Your changes are safe on this device.
            Which version should win?
          </p>
          <div className="st-row">
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={() => {
                pendingOverwrite.current = true
                keepMine()
              }}
            >
              Keep mine (overwrite)
            </button>
            <button type="button" className="btn btn--ghost btn--sm" onClick={() => { discardMirror(); load() }}>
              Load theirs (discard mine)
            </button>
          </div>
        </div>
      )}

      {notice && (
        <div className={`st-alert st-alert--${notice.tone} st-editor-alert`} role="status">
          <p>{notice.text}</p>
        </div>
      )}

      {errorList.length > 0 && (
        <div className="st-alert st-alert--error st-editor-alert" role="alert">
          <p>
            <strong>Fix {errorList.length === 1 ? 'this' : 'these'} first:</strong>
          </p>
          <ul>
            {errorList.map(([k, v]) => (
              <li key={k}>{v}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="st-viewtabs" role="tablist" aria-label="Editor view">
        <button type="button" role="tab" aria-selected={view === 'edit'} onClick={() => setView('edit')}>
          Write
        </button>
        <button type="button" role="tab" aria-selected={view === 'preview'} onClick={() => setView('preview')}>
          Preview
        </button>
      </div>

      <div className={`st-editor-grid st-editor-grid--${view}`}>
        <div className="st-editor-form">
          <AutoTextarea
            className="st-title-input"
            value={draft.title}
            onChange={(title) => set({ title: title.replace(/\n/g, ' ') })}
            onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
            placeholder="Title"
            aria-label="Title"
            maxLength={LIMITS.title}
          />
          {errors.title && <p className="st-field-error">{errors.title}</p>}

          <div className="st-card st-details">
            <Field
              id="f-excerpt"
              label="Excerpt"
              hint="One or two sentences. Shown on the insights list and under the headline."
              error={errors.excerpt}
              aside={<Counter value={draft.excerpt} max={LIMITS.excerpt} />}
            >
              <textarea
                id="f-excerpt"
                className="textarea st-textarea-sm"
                value={draft.excerpt}
                onChange={(e) => set({ excerpt: e.target.value })}
                maxLength={LIMITS.excerpt}
              />
            </Field>

            <div className="form-grid">
              <Field id="f-category" label="Category" error={errors.category} hint="Pick an existing one to keep the list tidy.">
                <input
                  id="f-category"
                  className="input"
                  list="f-category-options"
                  value={draft.category}
                  onChange={(e) => set({ category: e.target.value })}
                  maxLength={LIMITS.category}
                />
                <datalist id="f-category-options">
                  {(meta?.categories ?? []).map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </Field>
              <Field
                id="f-date"
                label="Publish date"
                error={errors.date}
                hint={future ? `Scheduled — goes live on this date (Harare time).` : 'A future date schedules the insight.'}
              >
                <input
                  id="f-date"
                  className="input"
                  type="date"
                  value={draft.date}
                  onChange={(e) => set({ date: e.target.value })}
                  required
                />
              </Field>
            </div>

            <Field id="f-tags" label="Topics (tags)" error={errors.tags}>
              <TagInput
                id="f-tags"
                value={draft.tags}
                onChange={(tags) => set({ tags })}
                suggestions={meta?.tags ?? []}
                max={LIMITS.tags}
              />
            </Field>

            <details className="st-seo" open={!!(errors.slug || errors.metaDescription || errors.seoTitle)}>
              <summary>
                Search &amp; sharing
                <span className="st-muted st-small"> — address, search title and description</span>
              </summary>

              <Field
                id="f-meta"
                label="Meta description"
                hint="The snippet under the link in Google results."
                error={errors.metaDescription}
                warning={warnings.metaDescription}
                aside={<Counter value={draft.metaDescription} target={160} />}
              >
                <textarea
                  id="f-meta"
                  className="textarea st-textarea-sm"
                  value={draft.metaDescription}
                  onChange={(e) => set({ metaDescription: e.target.value })}
                  maxLength={LIMITS.metaDescription}
                />
              </Field>

              <Field
                id="f-seotitle"
                label="SEO title"
                hint="Optional. A shorter headline for the browser tab and search results."
                error={errors.seoTitle}
                warning={warnings.seoTitle}
                aside={meta?.titleBudget ? <Counter value={draft.seoTitle || draft.title} target={meta.titleBudget} /> : null}
              >
                <input
                  id="f-seotitle"
                  className="input"
                  value={draft.seoTitle}
                  placeholder={draft.title}
                  onChange={(e) => set({ seoTitle: e.target.value })}
                  maxLength={LIMITS.seoTitle}
                />
              </Field>

              <Field
                id="f-slug"
                label="Web address"
                error={errors.slug}
                hint={
                  isLive
                    ? 'This insight is live — changing the address breaks links people have shared.'
                    : 'Set automatically from the title until you edit it.'
                }
              >
                <div className="st-slug">
                  <span className="st-slug-prefix">/insights/</span>
                  <input
                    id="f-slug"
                    className="input"
                    value={draft.slug}
                    onChange={(e) => {
                      slugTouched.current = true
                      set({ slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') })
                    }}
                    onBlur={() => set({ slug: slugify(draft.slug) })}
                  />
                </div>
              </Field>

              <div className="form-grid">
                <Field
                  id="f-read"
                  label="Read time (minutes)"
                  hint={`Leave blank to use the estimate: ${readTimeAuto} min.`}
                  error={errors.readTimeOverride}
                >
                  <input
                    id="f-read"
                    className="input"
                    type="number"
                    min={1}
                    max={LIMITS.readTime}
                    value={draft.readTimeOverride}
                    placeholder={String(readTimeAuto)}
                    onChange={(e) => set({ readTimeOverride: e.target.value === '' ? '' : Number(e.target.value) })}
                  />
                </Field>
                <Field
                  id="f-updated"
                  label="Last substantive update"
                  hint="Optional. Set when the guidance itself changes."
                  error={errors.updated}
                >
                  <input
                    id="f-updated"
                    className="input"
                    type="date"
                    value={draft.updated}
                    onChange={(e) => set({ updated: e.target.value })}
                  />
                </Field>
              </div>
            </details>
          </div>

          <div className="st-body-head">
            <h2 className="st-h2">Article</h2>
            <span className="st-muted st-small">
              ~{readTimeAuto} min read · {payload.body.length} block{payload.body.length === 1 ? '' : 's'}
            </span>
          </div>
          {errors.body && <p className="st-field-error">{errors.body}</p>}
          <BlockEditor
            blocks={draft.body}
            onChange={(body) => set({ body })}
            allowed={meta?.blockTypes ?? ['p', 'h2', 'h3', 'ul', 'ol', 'callout', 'verify', 'table']}
            errors={errors}
          />
        </div>

        <aside className="st-editor-preview" aria-label="Preview">
          <Preview post={payload} readTime={payload.readTimeOverride ?? readTimeAuto} />
        </aside>
      </div>
    </div>
  )
}
