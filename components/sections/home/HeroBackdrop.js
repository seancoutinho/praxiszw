'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Ambient motion behind the hero: a 4-second seamless loop of a perspective
 * ledger grid, a drifting data network and a rising trend line.
 *
 * Two cuts, because the hero is a completely different shape on each. On
 * desktop it is roughly 16:9 with the copy on the left, so that cut keeps its
 * left third clear. On a phone the hero is around 1:3.5 — taller than it is
 * wide, three times over — with copy running the full width, so that cut
 * spreads the composition vertically and masks with a top-to-bottom wash.
 * Serving the landscape cut to a phone would crop it to a narrow vertical slice
 * of the deliberately empty left side.
 *
 * Still decoration, so still conditional: skipped entirely under reduced motion
 * or Save-Data. Mounted after first paint so it never competes with LCP.
 */
const CUTS = {
  landscape: {
    webm: '/assets/video/hero.webm',
    mp4: '/assets/video/hero.mp4',
    poster: '/assets/video/hero-poster.jpg',
  },
  portrait: {
    webm: '/assets/video/hero-portrait.webm',
    mp4: '/assets/video/hero-portrait.mp4',
    poster: '/assets/video/hero-portrait-poster.jpg',
  },
}

export default function HeroBackdrop() {
  const [cut, setCut] = useState(null)   // null until we know which to load
  const [ready, setReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const wideQuery = window.matchMedia('(min-width: 768px)')

    const evaluate = () => {
      if (motionQuery.matches || navigator.connection?.saveData === true) {
        setCut(null)
        return
      }
      setCut(wideQuery.matches ? 'landscape' : 'portrait')
    }
    evaluate()

    motionQuery.addEventListener('change', evaluate)
    wideQuery.addEventListener('change', evaluate)
    return () => {
      motionQuery.removeEventListener('change', evaluate)
      wideQuery.removeEventListener('change', evaluate)
    }
  }, [])

  // Swapping cuts remounts the element, so the new sources are actually picked
  // up; reset the fade until the replacement is genuinely playing.
  useEffect(() => { setReady(false) }, [cut])

  // Autoplay can still be refused (low power mode, browser policy). If it is,
  // stay hidden rather than showing a frozen frame over the gradient.
  useEffect(() => {
    if (!cut) return
    const el = videoRef.current
    if (!el) return
    const attempt = el.play()
    if (attempt?.catch) attempt.catch(() => setReady(false))
  }, [cut])

  if (!cut) return null
  const src = CUTS[cut]

  return (
    <>
      <video
        key={cut}
        ref={videoRef}
        className="hero-video"
        data-ready={ready}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        poster={src.poster}
        onPlaying={() => setReady(true)}
      >
        <source src={src.webm} type="video/webm" />
        <source src={src.mp4} type="video/mp4" />
      </video>

      {/* Readability scrim. Each cut carries its own darkening, but object-fit:
          cover crops differently at every hero size, so the guarantee has to
          live in CSS where it tracks the real box. */}
      <span className="hero-scrim" data-ready={ready} aria-hidden="true" />
    </>
  )
}
