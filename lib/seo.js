/**
 * SEO helpers — one place that builds page metadata and JSON-LD.
 *
 * Two rules drive everything here:
 *
 *  1. Titles lead with the search term and end with the brand. The suffix is
 *     "Praxis Accountants" rather than the full legal name, because
 *     " | Praxis Chartered Accountants" is 30 characters and left almost no
 *     room under the ~60-character SERP limit. `site.legalName` is still used
 *     everywhere the *legal* identity matters — schema, the footer, copyright.
 *
 *  2. Every page is self-canonical on ONE host. `site.url` is the single
 *     source for that host, and next.config.js 301s the apex domain to it.
 */

import { contact, site } from '@/lib/site'

/** Title suffix. 21 characters including the separator, leaving 39 for the topic. */
export const BRAND = 'Praxis Accountants'

/** Longest a topic can be before the composed title passes 60 characters. */
export const TITLE_BUDGET = 60 - (BRAND.length + 3)

export const absoluteUrl = (path = '') => `${site.url}${path}`

/**
 * Default social share card. Composed from the firm's own logo on the brand
 * navy — see CHANGELOG "Needs client input" for the designed card that should
 * eventually replace it.
 */
export const ogImage = {
  url: '/assets/images/og-default.png',
  width: 1200,
  height: 630,
  alt: 'Praxis Chartered Accountants — audit, tax and advisory, Harare',
}

/**
 * Build a complete metadata object for a page.
 *
 * `title` is the topic only; the layout's title template appends the brand for
 * the document title, and this helper composes the full string for the social
 * tags, which have no template mechanism of their own.
 */
export function buildMetadata({
  title,
  description,
  path = '',
  type = 'website',
  image = ogImage,
  openGraph = {},
  ...rest
}) {
  const fullTitle = `${title} | ${BRAND}`

  return {
    title,
    description,
    alternates: { canonical: path || '/' },
    openGraph: {
      type,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      images: [image],
      ...openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.url],
    },
    ...rest,
  }
}

/* ------------------------------------------------------------------ schema */

export const ORG_ID = `${site.url}/#organization`
export const WEBSITE_ID = `${site.url}/#website`

/**
 * The firm itself. `AccountingService` is a subtype of `ProfessionalService`
 * and `LocalBusiness`, so it inherits address, telephone and areaServed while
 * being specific about what the business does.
 *
 * Deliberately omitted, because no verified value exists — see CHANGELOG:
 *   sameAs                    the only social profiles are a person's, not the firm's
 *   openingHoursSpecification office hours are an unconfirmed default
 *   aggregateRating / review  the firm publishes no ratings
 *   numberOfEmployees, vatID, priceRange
 */
export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  '@id': ORG_ID,
  name: site.name,
  legalName: site.legalName,
  alternateName: BRAND,
  description: site.tagline,
  url: site.url,
  foundingDate: String(site.founded),
  email: contact.email,
  telephone: contact.phone,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/assets/images/logo.png'),
    width: 370,
    height: 165,
  },
  image: absoluteUrl(ogImage.url),
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: contact.address.city,
    addressCountry: 'ZW',
  },
  areaServed: [
    { '@type': 'Country', name: 'Zimbabwe' },
    { '@type': 'AdministrativeArea', name: 'Southern African Development Community' },
  ],
  knowsAbout: [
    'ZIMRA tax compliance',
    'Audit and assurance',
    'Bookkeeping and management accounts',
    'Forensic audit and fraud investigation',
    'Financial advisory',
    'IFRS and IFRS for SMEs reporting',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: site.url,
  name: site.name,
  inLanguage: 'en-ZW',
  publisher: { '@id': ORG_ID },
}

/**
 * BreadcrumbList from the same crumb array the visible breadcrumb trail uses,
 * so the two can never disagree. Home is prepended to match the rendered trail.
 */
export function breadcrumbSchema(crumbs = [], currentPath = '') {
  const trail = [{ label: 'Home', href: '/' }, ...crumbs]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => {
      const isLast = i === trail.length - 1
      const href = c.href ?? (isLast ? currentPath : undefined)
      return {
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        // schema.org allows the final item to omit `item`; where we do know the
        // URL it is better to state it.
        ...(href ? { item: absoluteUrl(href) } : {}),
      }
    }),
  }
}
