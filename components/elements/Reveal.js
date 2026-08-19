'use client'

import { useEffect } from 'react'

/**
 * Replaces wow.js + animate.css (3,782 lines) with an IntersectionObserver
 * that toggles one attribute. Anything with `.reveal` fades up once, and the
 * transition itself is disabled under `prefers-reduced-motion`.
 */
export default function Reveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not([data-shown])')
    if (!nodes.length) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((n) => n.setAttribute('data-shown', 'true'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute('data-shown', 'true')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  })

  return null
}
