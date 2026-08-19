import localFont from 'next/font/local'

/**
 * Lato across the whole site — headings, body, UI and data.
 *
 * Self-hosted rather than fetched from Google, so there is no third-party
 * request when a client loads the site and no external dependency in the build.
 * Four styles are shipped: 400 and its italic for body copy, 700 for headings
 * and UI emphasis, 900 for the largest display sizes.
 *
 * The subset split carries `unicode-range`, so latin-ext only downloads when a
 * page actually renders a character that needs it. Total latin payload is
 * ~89 KB, down from ~460 KB for the previous serif + sans variable pairing.
 */
export const lato = localFont({
  variable: '--lato',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
  src: [
    { path: './fonts/lato-400-normal-latin.woff2', weight: '400', style: 'normal' },
    { path: './fonts/lato-400-normal-latin-ext.woff2', weight: '400', style: 'normal' },
    { path: './fonts/lato-400-italic-latin.woff2', weight: '400', style: 'italic' },
    { path: './fonts/lato-400-italic-latin-ext.woff2', weight: '400', style: 'italic' },
    { path: './fonts/lato-700-normal-latin.woff2', weight: '700', style: 'normal' },
    { path: './fonts/lato-700-normal-latin-ext.woff2', weight: '700', style: 'normal' },
    { path: './fonts/lato-900-normal-latin.woff2', weight: '900', style: 'normal' },
    { path: './fonts/lato-900-normal-latin-ext.woff2', weight: '900', style: 'normal' },
  ],
})
