'use client'

import { useId, useState } from 'react'

/**
 * Keyboard-accessible disclosure list. The template version used click-only
 * <div>s with no ARIA, so the FAQ was unusable without a mouse.
 */
export default function Accordion({ items, allowMultiple = false, defaultOpen = [] }) {
  const uid = useId()
  const [open, setOpen] = useState(new Set(defaultOpen))

  const toggle = (i) => {
    setOpen((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set()
      if (prev.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        return (
          <div className="accordion-item" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={`${uid}-panel-${i}`}
                id={`${uid}-trigger-${i}`}
                onClick={() => toggle(i)}
              >
                <span>{item.q}</span>
                <span className="accordion-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="accordion-panel"
              id={`${uid}-panel-${i}`}
              role="region"
              aria-labelledby={`${uid}-trigger-${i}`}
              hidden={!isOpen}
            >
              {typeof item.a === 'string' ? <p>{item.a}</p> : item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
