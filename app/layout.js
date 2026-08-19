import './globals.css'
import { inter, serif } from '@/lib/font'
import { contact, site } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Praxis Chartered Accountants | Audit, Tax & Advisory in Harare',
    template: '%s | Praxis Chartered Accountants',
  },
  description:
    'Praxis Chartered Accountants is a Harare-based practice providing audit, ZIMRA tax compliance, bookkeeping, forensic investigation and financial advisory services to businesses across Zimbabwe and the SADC region.',
  keywords: [
    'chartered accountants Zimbabwe',
    'ZIMRA tax compliance',
    'auditors Harare',
    'bookkeeping Zimbabwe',
    'forensic audit Zimbabwe',
    'financial advisory SADC',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: 'Praxis Chartered Accountants | Audit, Tax & Advisory in Harare',
    description:
      'Audit, ZIMRA tax compliance, bookkeeping and advisory for businesses in Zimbabwe and the SADC region. Practising since 2012.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Praxis Chartered Accountants',
    description: 'Audit, tax and advisory for businesses in Zimbabwe and the SADC region.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export const viewport = {
  themeColor: '#0b2559',
  width: 'device-width',
  initialScale: 1,
}

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: site.name,
  url: site.url,
  foundingDate: String(site.founded),
  email: contact.email,
  telephone: contact.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: contact.address.city,
    addressCountry: 'ZW',
  },
  areaServed: ['Zimbabwe', 'Southern African Development Community'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZW" className={`${inter.variable} ${serif.variable}`}>
      <head>
        {/* Reveal animations are JS-driven; without JS the content must stay visible. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  )
}
