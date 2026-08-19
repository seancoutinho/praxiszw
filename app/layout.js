import './globals.css'
import JsonLd from '@/components/ui/JsonLd'
import { lato } from '@/lib/font'
import { site } from '@/lib/site'
import { BRAND, ogImage, organisationSchema, websiteSchema } from '@/lib/seo'

/**
 * Site-wide defaults. Individual pages override title, description, canonical
 * and social tags through `buildMetadata` in lib/seo.js.
 *
 * `metadataBase` fixes the host every relative canonical and og:url resolves
 * against, which is what keeps the site on one indexable domain — see
 * next.config.js for the 301 that sends the apex domain here.
 */
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Chartered Accountants in Harare | ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description:
    'Audit, ZIMRA tax compliance, bookkeeping and financial advisory for businesses, NGOs and public-sector entities across Zimbabwe.',
  applicationName: site.name,
  keywords: [
    'chartered accountants Zimbabwe',
    'ZIMRA tax compliance',
    'auditors Harare',
    'bookkeeping Zimbabwe',
    'forensic audit Zimbabwe',
    'financial advisory SADC',
  ],
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `Chartered Accountants in Harare | ${BRAND}`,
    description:
      'Audit, ZIMRA tax compliance, bookkeeping and advisory for businesses in Zimbabwe and the SADC region.',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Chartered Accountants in Harare | ${BRAND}`,
    description: 'Audit, tax and advisory for businesses in Zimbabwe and the SADC region.',
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  formatDetection: { telephone: false },
}

export const viewport = {
  themeColor: '#0b2559',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZW" className={lato.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Praxis Accountants" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Reveal animations are JS-driven; without JS the content must stay visible. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body>
        {children}
        {/* Organisation and WebSite nodes carry stable @ids that every page-level
            graph references, so crawlers resolve one firm rather than nineteen. */}
        <JsonLd data={[organisationSchema, websiteSchema]} />
      </body>
    </html>
  )
}
