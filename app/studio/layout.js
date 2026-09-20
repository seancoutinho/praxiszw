import StudioShell from '@/components/studio/StudioShell'
import './studio.css'

/**
 * Praxis Studio — where the practice writes and publishes insights.
 *
 * Deliberately separate from the public site: no site header/footer, its own
 * installable manifest (scoped to /studio so installing it doesn't install the
 * website), and never indexed — see also robots.js and the headers in
 * next.config.js. Nothing on the public site links here.
 */
export const metadata = {
  // Absolute, and per page too: in Next 13.4 a layout's `template` beside
  // `absolute` is ignored, so the site's "| Praxis Accountants" would apply.
  title: { absolute: 'Praxis Studio' },
  description: 'Write and publish Praxis insights.',
  manifest: '/studio/manifest.webmanifest',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
  appleWebApp: { capable: true, statusBarStyle: 'default' },
  other: { 'apple-mobile-web-app-title': 'Praxis Studio' },
}

export const viewport = {
  themeColor: '#0b2559',
  width: 'device-width',
  initialScale: 1,
}

export default function StudioLayout({ children }) {
  return <StudioShell>{children}</StudioShell>
}
