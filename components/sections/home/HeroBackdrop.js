'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Ambient motion behind the hero: a 4-second seamless loop of a perspective
 * ledger grid, a drifting data network and a rising trend line, with the left
 * third darkened in the source footage so the headline stays readable.
 *
 * It is decoration, so it is deliberately conditional. The hero's CSS gradient
 * sits underneath and is the real background — this only ever layers on top.
 * We skip it entirely when:
 *   - the visitor asked for reduced motion,
 *   - the viewport is narrow (a 16:9 loop crops to almost nothing on a phone,
 *     and it is not worth the bytes on mobile data),
 *   - or the browser reports Save-Data.
 *
 * Mounting happens after first paint so the video never competes with LCP.
 */
export default function HeroBackdrop() {
  const [enabled, setEnabled] = useState(false)
  const [ready, setReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const widthQuery = window.matchMedia('(min-width: 768px)')
    const saveData = navigator.connection?.saveData === true

    const evaluate = () => setEnabled(!motionQuery.matches && widthQuery.matches && !saveData)
    evaluate()

    motionQuery.addEventListener('change', evaluate)
    widthQuery.addEventListener('change', evaluate)
    return () => {
      motionQuery.removeEventListener('change', evaluate)
      widthQuery.removeEventListener('change', evaluate)
    }
  }, [])

  // Autoplay can still be refused (low power mode, browser policy). If it is,
  // stay hidden rather than showing a frozen frame over the gradient.
  useEffect(() => {
    if (!enabled) return
    const el = videoRef.current
    if (!el) return
    const attempt = el.play()
    if (attempt?.catch) attempt.catch(() => setReady(false))
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <video
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
        poster="/assets/video/hero-poster.jpg"
        onPlaying={() => setReady(true)}
      >
        <source src="/assets/video/hero.webm" type="video/webm" />
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Readability scrim. The footage carries its own left-hand darkening, but
          object-fit: cover crops it differently at every hero aspect ratio, so
          the guarantee has to live in CSS where it tracks the real box. */}
      <span className="hero-scrim" data-ready={ready} aria-hidden="true" />
    </>
  )
}
