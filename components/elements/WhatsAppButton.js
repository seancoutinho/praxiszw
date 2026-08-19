'use client'

import { useEffect, useState } from 'react'
import Icon from '@/components/ui/Icon'
import { whatsappLink } from '@/lib/site'

/**
 * Floating WhatsApp entry point.
 *
 * Sits above the back-to-top control in the bottom-right stack. The label
 * expands on pointer devices so the affordance is obvious, and collapses to a
 * circle on touch where hover does not exist.
 */
export default function WhatsAppButton() {
  const [ready, setReady] = useState(false)

  // Reveal after first paint so it does not compete with the hero on load.
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      className="wa-fab"
      data-ready={ready}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Praxis on WhatsApp"
    >
      <span className="wa-fab-icon">
        <Icon name="whatsapp" size={26} />
      </span>
      <span className="wa-fab-label">Chat on WhatsApp</span>
    </a>
  )
}
