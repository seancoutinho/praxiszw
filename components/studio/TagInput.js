'use client'

import { useState } from 'react'

/** Chips with autocomplete from existing tags. Enter or comma adds; Backspace on empty removes the last. */
export default function TagInput({ id, value, onChange, suggestions = [], max = 20 }) {
  const [text, setText] = useState('')
  const listId = `${id}-options`

  const add = (raw) => {
    const t = raw.trim().replace(/,$/, '').trim()
    if (!t || value.length >= max) return
    if (value.some((v) => v.toLowerCase() === t.toLowerCase())) return setText('')
    onChange([...value, t])
    setText('')
  }

  return (
    <div className="st-tags">
      {value.map((t, i) => (
        <span className="st-tag" key={`${t}-${i}`}>
          {t}
          <button type="button" aria-label={`Remove tag ${t}`} onClick={() => onChange(value.filter((_, j) => j !== i))}>
            ×
          </button>
        </span>
      ))}
      <input
        id={id}
        className="st-tags-input"
        list={listId}
        value={text}
        placeholder={value.length ? 'Add another' : 'Type a tag and press Enter'}
        onChange={(e) => {
          const v = e.target.value
          if (v.endsWith(',')) add(v)
          else setText(v)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            add(text)
          } else if (e.key === 'Backspace' && !text && value.length) {
            onChange(value.slice(0, -1))
          }
        }}
        onBlur={() => text && add(text)}
      />
      <datalist id={listId}>
        {suggestions
          .filter((s) => !value.some((v) => v.toLowerCase() === s.toLowerCase()))
          .map((s) => (
            <option key={s} value={s} />
          ))}
      </datalist>
    </div>
  )
}
