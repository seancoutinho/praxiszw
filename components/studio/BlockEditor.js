'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import { blockText } from 'insights-cms/derive'

/**
 * Edits an article body as a list of blocks — the same shapes ArticleBody
 * renders. Blocks carry a client-only `_k` key for stable React identity;
 * `stripKeys` removes it before anything is sent to the server.
 */

let seq = 0
export const withKey = (b) => ({ ...b, _k: `b${++seq}` })
export const stripKeys = (blocks) => blocks.map(({ _k, ...b }) => b)

export const BLOCKS = {
  p: { label: 'Paragraph', make: () => ({ t: 'p', c: '' }) },
  h2: { label: 'Heading', make: () => ({ t: 'h2', c: '' }) },
  h3: { label: 'Sub-heading', make: () => ({ t: 'h3', c: '' }) },
  ul: { label: 'Bullet list', make: () => ({ t: 'ul', items: [''] }) },
  ol: { label: 'Numbered list', make: () => ({ t: 'ol', items: [''] }) },
  callout: { label: 'Callout', make: () => ({ t: 'callout', title: '', c: '' }) },
  verify: { label: 'Verify flag', make: () => ({ t: 'verify', c: '' }) },
  table: { label: 'Table', make: () => ({ t: 'table', head: ['', ''], rows: [['', '']] }) },
}

const TEXT = new Set(['p', 'h2', 'h3', 'callout', 'verify'])
const LIST = new Set(['ul', 'ol'])

function convert(b, t) {
  if (TEXT.has(t)) {
    const c = TEXT.has(b.t) ? b.c : (b.items ?? []).join('\n')
    return t === 'callout' ? { t, title: b.title ?? '', c } : { t, c }
  }
  if (LIST.has(t)) {
    const items = LIST.has(b.t) ? b.items : b.c.split(/\n+/).map((s) => s.trim()).filter(Boolean)
    return { t, items: items.length ? items : [''] }
  }
  return b
}

const BULLET = /^\s*[-*\u2022\u2013\u00b7\u25aa\u25e6]\s+/
const NUMBERED = /^\s*\(?\d{1,3}[.)]\s+/

/**
 * Turn pasted text (typically from Word or an email) into blocks: each line
 * becomes a paragraph, and runs of bulleted or numbered lines become lists.
 */
export function parsePasted(text) {
  const out = []
  let list = null
  const flush = () => {
    if (list) out.push(list)
    list = null
  }
  for (const raw of text.replace(/\r\n?/g, '\n').split('\n')) {
    const line = raw.trim()
    if (!line) {
      flush()
      continue
    }
    const kind = BULLET.test(line) ? 'ul' : NUMBERED.test(line) ? 'ol' : null
    if (kind) {
      if (!list || list.t !== kind) {
        flush()
        list = { t: kind, items: [] }
      }
      list.items.push(line.replace(kind === 'ul' ? BULLET : NUMBERED, ''))
    } else {
      flush()
      out.push({ t: 'p', c: line })
    }
  }
  flush()
  return out
}

export function AutoTextarea({ value, onChange, className = '', ...rest }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight + 2}px`
  }, [value])
  return (
    <textarea
      ref={ref}
      rows={1}
      className={`st-auto ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  )
}

function AddMenu({ allowed, onPick, onClose }) {
  return (
    <div className="st-addmenu" role="group" aria-label="Add a block">
      {allowed.map((t) => (
        <button
          key={t}
          type="button"
          className="st-chipbtn"
          onClick={() => {
            onPick(t)
            onClose?.()
          }}
        >
          {BLOCKS[t].label}
        </button>
      ))}
      {onClose && (
        <button type="button" className="st-linkbtn" onClick={onClose}>
          Cancel
        </button>
      )}
    </div>
  )
}

function Inserter({ allowed, onPick }) {
  const [open, setOpen] = useState(false)
  if (open) return <AddMenu allowed={allowed} onPick={onPick} onClose={() => setOpen(false)} />
  return (
    <div className="st-inserter">
      <button type="button" className="st-inserter-btn" onClick={() => setOpen(true)} aria-label="Insert a block here">
        + Insert
      </button>
    </div>
  )
}

function ListEditor({ block, onChange, blockKey }) {
  const focusItem = (i) =>
    requestAnimationFrame(() => document.querySelector(`[data-item="${blockKey}-${i}"]`)?.focus())

  const setItem = (i, v) => onChange({ ...block, items: block.items.map((it, j) => (j === i ? v : it)) })
  const addAfter = (i) => {
    const items = [...block.items]
    items.splice(i + 1, 0, '')
    onChange({ ...block, items })
    focusItem(i + 1)
  }
  const removeAt = (i) => {
    if (block.items.length === 1) return
    onChange({ ...block, items: block.items.filter((_, j) => j !== i) })
    focusItem(Math.max(0, i - 1))
  }

  return (
    <div className="st-listedit">
      {block.items.map((it, i) => (
        <div className="st-listitem" key={i}>
          <span className="st-listmark" aria-hidden="true">
            {block.t === 'ol' ? `${i + 1}.` : '•'}
          </span>
          <AutoTextarea
            value={it}
            data-item={`${blockKey}-${i}`}
            aria-label={`List item ${i + 1}`}
            onChange={(v) => setItem(i, v)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                addAfter(i)
              } else if (e.key === 'Backspace' && it === '' && block.items.length > 1) {
                e.preventDefault()
                removeAt(i)
              }
            }}
          />
          <button
            type="button"
            className="st-iconbtn"
            aria-label={`Remove item ${i + 1}`}
            onClick={() => removeAt(i)}
            disabled={block.items.length === 1}
          >
            ×
          </button>
        </div>
      ))}
      <button type="button" className="st-linkbtn" onClick={() => addAfter(block.items.length - 1)}>
        + Add item
      </button>
      <p className="st-hint">Enter adds the next item; Backspace on an empty item removes it.</p>
    </div>
  )
}

function TableEditor({ block, onChange }) {
  const cols = block.head.length
  const setHead = (j, v) => onChange({ ...block, head: block.head.map((h, k) => (k === j ? v : h)) })
  const setCell = (r, j, v) =>
    onChange({ ...block, rows: block.rows.map((row, i) => (i === r ? row.map((c, k) => (k === j ? v : c)) : row)) })
  const addRow = () => onChange({ ...block, rows: [...block.rows, Array(cols).fill('')] })
  const removeRow = (r) => onChange({ ...block, rows: block.rows.filter((_, i) => i !== r) })
  const addCol = () =>
    onChange({ ...block, head: [...block.head, ''], rows: block.rows.map((row) => [...row, '']) })
  const removeCol = (j) =>
    cols > 1 &&
    onChange({
      ...block,
      head: block.head.filter((_, k) => k !== j),
      rows: block.rows.map((row) => row.filter((_, k) => k !== j)),
    })

  return (
    <div className="st-tableedit">
      <div className="st-tablescroll">
        <table>
          <thead>
            <tr>
              {block.head.map((h, j) => (
                <th key={j}>
                  <div className="st-cellwrap">
                    <input
                      className="st-cell st-cell--head"
                      value={h}
                      placeholder={`Column ${j + 1}`}
                      aria-label={`Column ${j + 1} heading`}
                      onChange={(e) => setHead(j, e.target.value)}
                    />
                    <button
                      type="button"
                      className="st-iconbtn"
                      aria-label={`Remove column ${j + 1}`}
                      onClick={() => removeCol(j)}
                      disabled={cols === 1}
                    >
                      ×
                    </button>
                  </div>
                </th>
              ))}
              <th aria-hidden="true" />
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r}>
                {row.map((c, j) => (
                  <td key={j}>
                    <AutoTextarea
                      className="st-cell"
                      value={c}
                      aria-label={`Row ${r + 1}, column ${j + 1}`}
                      onChange={(v) => setCell(r, j, v)}
                    />
                  </td>
                ))}
                <td>
                  <button type="button" className="st-iconbtn" aria-label={`Remove row ${r + 1}`} onClick={() => removeRow(r)}>
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="st-row">
        <button type="button" className="st-linkbtn" onClick={addRow}>
          + Row
        </button>
        <button type="button" className="st-linkbtn" onClick={addCol} disabled={cols >= 12}>
          + Column
        </button>
      </div>
    </div>
  )
}

function BlockFields({ block, onChange, onPasteBlocks }) {
  switch (block.t) {
    case 'h2':
    case 'h3':
      return (
        <AutoTextarea
          className={`st-text st-text--${block.t}`}
          value={block.c}
          placeholder={block.t === 'h2' ? 'Heading' : 'Sub-heading'}
          aria-label={BLOCKS[block.t].label}
          onChange={(c) => onChange({ ...block, c })}
          onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
        />
      )
    case 'ul':
    case 'ol':
      return <ListEditor block={block} onChange={onChange} blockKey={block._k} />
    case 'callout':
      return (
        <div className="st-callout-edit">
          <input
            className="st-text st-text--label"
            value={block.title ?? ''}
            placeholder="Label (optional) — e.g. At a glance"
            aria-label="Callout label"
            onChange={(e) => onChange({ ...block, title: e.target.value })}
          />
          <AutoTextarea
            className="st-text"
            value={block.c}
            placeholder="Callout text"
            aria-label="Callout text"
            onChange={(c) => onChange({ ...block, c })}
          />
        </div>
      )
    case 'verify':
      return (
        <div className="st-verify-edit">
          <p className="st-verify-label">Confirm before relying on this</p>
          <AutoTextarea
            className="st-text"
            value={block.c}
            placeholder="What must the reader confirm, and against which source? e.g. The current VAT registration threshold — check the latest Finance Act."
            aria-label="Verify flag text"
            onChange={(c) => onChange({ ...block, c })}
          />
        </div>
      )
    case 'table':
      return <TableEditor block={block} onChange={onChange} />
    case 'p':
    default:
      return (
        <AutoTextarea
          className="st-text"
          value={block.c}
          placeholder="Write, or paste from Word — paragraphs and bullet points are split out automatically."
          aria-label="Paragraph"
          onChange={(c) => onChange({ ...block, c })}
          onPaste={(e) => {
            const text = e.clipboardData.getData('text/plain')
            if (!/\n/.test(text.trim())) return
            const parsed = parsePasted(text)
            if (parsed.length < 2 && parsed[0]?.t === 'p') return
            e.preventDefault()
            onPasteBlocks(parsed)
          }}
        />
      )
  }
}

export default function BlockEditor({ blocks, onChange, allowed, errors = {} }) {
  const types = allowed.filter((t) => BLOCKS[t])

  const update = (i, b) => onChange(blocks.map((x, j) => (j === i ? b : x)))
  const insertAt = (i, newBlocks) => {
    const next = [...blocks]
    next.splice(i, 0, ...newBlocks.map(withKey))
    onChange(next)
    const k = next[i]._k
    requestAnimationFrame(() => document.querySelector(`[data-block="${k}"] textarea, [data-block="${k}"] input`)?.focus())
  }
  const move = (i, d) => {
    const j = i + d
    if (j < 0 || j >= blocks.length) return
    const next = [...blocks]
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }
  const remove = (i) => {
    const b = blocks[i]
    if (blockText(b).trim() && !window.confirm(`Delete this ${BLOCKS[b.t].label.toLowerCase()}?`)) return
    onChange(blocks.filter((_, j) => j !== i))
  }
  const pasteInto = (i, parsed) => {
    const current = blocks[i]
    const next = [...blocks]
    const replace = current.t === 'p' && !current.c.trim()
    next.splice(replace ? i : i + 1, replace ? 1 : 0, ...parsed.map(withKey))
    onChange(next)
  }

  return (
    <div className="st-blocks">
      {blocks.length === 0 && (
        <div className="st-empty st-empty--body">
          <p>Start with a paragraph, or paste the article in from Word.</p>
        </div>
      )}

      {blocks.map((b, i) => (
        <div key={b._k}>
          {i > 0 && <Inserter allowed={types} onPick={(t) => insertAt(i, [BLOCKS[t].make()])} />}
          <section
            className={`st-block st-block--${b.t}${errors[`body.${i}`] ? ' st-block--error' : ''}`}
            data-block={b._k}
            aria-label={`${BLOCKS[b.t]?.label ?? 'Block'} ${i + 1}`}
          >
            <div className="st-block-bar">
              {b.t === 'table' ? (
                <span className="st-block-type">Table</span>
              ) : (
                <select
                  className="st-block-type"
                  value={b.t}
                  aria-label="Block type"
                  onChange={(e) => update(i, { ...convert(b, e.target.value), _k: b._k })}
                >
                  {types
                    .filter((t) => t !== 'table')
                    .map((t) => (
                      <option key={t} value={t}>
                        {BLOCKS[t].label}
                      </option>
                    ))}
                </select>
              )}
              <div className="st-block-actions">
                <button type="button" className="st-iconbtn" aria-label="Move up" onClick={() => move(i, -1)} disabled={i === 0}>
                  ↑
                </button>
                <button
                  type="button"
                  className="st-iconbtn"
                  aria-label="Move down"
                  onClick={() => move(i, 1)}
                  disabled={i === blocks.length - 1}
                >
                  ↓
                </button>
                <button type="button" className="st-iconbtn st-iconbtn--danger" aria-label="Delete block" onClick={() => remove(i)}>
                  ×
                </button>
              </div>
            </div>
            <BlockFields block={b} onChange={(nb) => update(i, nb)} onPasteBlocks={(parsed) => pasteInto(i, parsed)} />
            {errors[`body.${i}`] && <p className="st-field-error">{errors[`body.${i}`]}</p>}
          </section>
        </div>
      ))}

      <div className="st-addbar">
        <p className="mono-label">Add a block</p>
        <AddMenu allowed={types} onPick={(t) => insertAt(blocks.length, [BLOCKS[t].make()])} />
      </div>
    </div>
  )
}
