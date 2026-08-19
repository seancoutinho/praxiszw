import localFont from 'next/font/local'

/**
 * Typographic pairing for the rebuild, self-hosted.
 *
 * Source Serif 4 carries the headlines — an editorial, high-legibility serif
 * that reads as a professional practice rather than a SaaS template. Inter
 * handles body copy, UI and data.
 *
 * Both are variable fonts covering the full weight range in one file each, so
 * this replaces the template's fourteen static weight files (Inter + Jost, seven
 * weights apiece). They are served from our own origin rather than fetched from
 * Google at build or run time: no third-party request when a client loads the
 * site, no external dependency in the build.
 *
 * Files carry `unicode-range` via the subset split, so latin-ext only downloads
 * when a page actually renders a character that needs it.
 */

export const serif = localFont({
  variable: '--serif',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  src: [
    { path: './fonts/serif-normal-latin.woff2', weight: '400 600', style: 'normal' },
    { path: './fonts/serif-normal-latin-ext.woff2', weight: '400 600', style: 'normal' },
    { path: './fonts/serif-italic-latin.woff2', weight: '400 600', style: 'italic' },
    { path: './fonts/serif-italic-latin-ext.woff2', weight: '400 600', style: 'italic' },
  ],
})

export const inter = localFont({
  variable: '--inter',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  src: [
    { path: './fonts/inter-normal-latin.woff2', weight: '400 700', style: 'normal' },
    { path: './fonts/inter-normal-latin-ext.woff2', weight: '400 700', style: 'normal' },
  ],
})
