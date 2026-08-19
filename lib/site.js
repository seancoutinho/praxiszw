/**
 * Single source of truth for firm details, navigation and service metadata.
 *
 * Contact details were inconsistent across the old site (three email addresses,
 * three phone formats, a map pin in Ruwa against an address in Harare).
 * Everything is consolidated here — see CHANGELOG.md → "Needs client input"
 * for the items Praxis still has to confirm.
 */

export const site = {
  name: 'Praxis Chartered Accountants',
  shortName: 'Praxis',
  legalName: 'Praxis Chartered Accountants',
  tagline: 'Chartered accountants, auditors and business advisors in Harare.',
  founded: 2012,
  url: 'https://www.praxisaccountants.co.zw',
  locale: 'en_ZW',
}

export const contact = {
  // Confirmed by Praxis, Aug 2026. The old site carried three conflicting
  // addresses (info@, contact@, support@praxisaccountants.com) on the wrong TLD.
  email: 'bcoutinho@praxisaccountants.co.zw',
  emailLabel: 'bcoutinho@praxisaccountants.co.zw',

  // Canonical format for +263 77 mobile numbers. The old footer printed a
  // truncated "263 772 243" against a full tel: link.
  phone: '+263 772 243 934',
  phoneHref: '+263772243934',

  // wa.me wants the number in full international form with no '+' and no
  // leading zero. This is the same line as `phone` above.
  whatsapp: '263772243934',

  address: {
    line1: 'Suite 226, Stanley House',
    line2: 'Cnr Jason Moyo Avenue & First Street',
    city: 'Harare',
    country: 'Zimbabwe',
  },
  addressOneLine:
    'Suite 226, Stanley House, Cnr Jason Moyo Avenue & First Street, Harare, Zimbabwe',

  // Google Maps embed centred on Cnr Jason Moyo Ave & First St, Harare.
  // The old embed pointed at 6626 Zimre Way, Ruwa — roughly 25 km away.
  mapEmbed:
    'https://www.google.com/maps?q=Stanley%20House%2C%20Jason%20Moyo%20Avenue%2C%20Harare%2C%20Zimbabwe&output=embed',

  hours: [
    { days: 'Monday – Friday', time: '08:00 – 17:00 CAT' },
    { days: 'Saturday', time: 'By appointment' },
  ],

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/boniface-coutinho-68065896/', icon: 'linkedin' },
    { label: 'Facebook', href: 'https://www.facebook.com/boniface.coutinho', icon: 'facebook' },
    { label: 'X', href: 'https://x.com/BonifaceCoutinh', icon: 'x' },
  ],
}

/** Services — drives the nav, the services index, and each detail page. */
export const services = [
  {
    slug: 'tax-management',
    title: 'Tax Management',
    nav: 'Tax Management',
    icon: 'receipt',
    summary:
      'ZIMRA registration, monthly and annual returns, PAYE, VAT and QPD planning, and representation in queries, objections and audits.',
    short: 'ZIMRA compliance, returns, PAYE, VAT and QPDs.',
  },
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping & Accounting',
    nav: 'Bookkeeping & Accounting',
    icon: 'ledger',
    summary:
      'Multi-currency bookkeeping, management accounts and year-end financial statements prepared under IFRS or IFRS for SMEs.',
    short: 'Multi-currency books, management accounts, annual financial statements.',
  },
  {
    slug: 'strategy-planning',
    title: 'Strategy & Planning',
    nav: 'Strategy & Planning',
    icon: 'compass',
    summary:
      'Budgeting, forecasting, cash-flow modelling and business plans built for a multi-currency, inflation-exposed operating environment.',
    short: 'Budgets, forecasts, cash-flow models and business plans.',
  },
  {
    slug: 'forensic-audit',
    title: 'Forensic Audit',
    nav: 'Forensic Audit',
    icon: 'search',
    summary:
      'Fraud and misappropriation investigations, internal control reviews, and reports prepared to a standard that holds up in a disciplinary or legal forum.',
    short: 'Fraud investigations, control reviews, evidence-grade reporting.',
  },
  {
    slug: 'financial-advisory',
    title: 'Financial Advisory',
    nav: 'Financial Advisory',
    icon: 'chart',
    summary:
      'Funding readiness, due diligence, valuations, and advice on exchange control and cross-border transactions in the SADC region.',
    short: 'Funding readiness, due diligence, valuations, cross-border advice.',
  },
  {
    slug: 'insurance-strategy',
    title: 'Risk & Insurance Strategy',
    nav: 'Risk & Insurance Strategy',
    icon: 'shield',
    summary:
      'Risk registers, cover adequacy reviews and claims support, so the balance sheet is protected against the losses that actually threaten it.',
    short: 'Risk registers, cover adequacy reviews, claims support.',
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)

/**
 * Build a WhatsApp deep link with a prefilled opening message.
 *
 * `topic` tailors the message to wherever the visitor clicked from, so the chat
 * arrives with context instead of an empty "Hi". The text is written to be sent
 * as-is — no bracketed blanks the visitor has to fill in first.
 */
export const whatsappLink = (topic) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    topic
      ? `Hello Praxis, I'm getting in touch from your website about ${topic}. I'd like to arrange a free introductory consultation — when would suit you?`
      : `Hello Praxis, I'm getting in touch from your website. I'd like to arrange a free introductory consultation — when would suit you?`
  )}`

/**
 * Direct lines on team profiles: the firm's main number opens WhatsApp like
 * everything else, while any other number stays a normal dial link.
 */
export const contactHref = (number) =>
  number.replace(/[^\d]/g, '') === contact.whatsapp
    ? whatsappLink()
    : `tel:${number}`

/** Primary navigation. Every href below resolves to a real route. */
export const primaryNav = [
  { label: 'Services', href: '/services', panelCta: 'All services', children: services.map((s) => ({
      label: s.nav, href: `/services/${s.slug}`, desc: s.short, icon: s.icon,
    })) },
  {
    label: 'Firm',
    href: '/about',
    panelCta: 'About the firm',
    children: [
      { label: 'About Praxis', href: '/about', desc: 'Who we are and how we practise.', icon: 'globe' },
      { label: 'Our People', href: '/team', desc: 'The professionals you will work with.', icon: 'people' },
      { label: 'Client Feedback', href: '/testimonials', desc: 'What clients say about working with us.', icon: 'handshake' },
      { label: 'FAQ', href: '/faq', desc: 'Engagement, pricing and process questions.', icon: 'document' },
    ],
  },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = {
  services: services.map((s) => ({ label: s.nav, href: `/services/${s.slug}` })),
  firm: [
    { label: 'About Praxis', href: '/about' },
    { label: 'Our People', href: '/team' },
    { label: 'Client Feedback', href: '/testimonials' },
    { label: 'Insights', href: '/insights' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
}
