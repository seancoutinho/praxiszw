/**
 * Praxis Insights — company registration and tax clearance (one article).
 *
 * Written from the client's brief: Praxis registers every entity type, from
 * sole traders and private companies to public companies, and charges USD 150
 * for registration and USD 30 for a tax clearance application. Those two
 * figures are the firm's own fees and are stated plainly. Statutory
 * requirements (documents, government fees, turnaround, withholding rates)
 * follow the house rule: described in general terms, with a verify flag.
 *
 * Entity descriptions match "Choosing your business structure in Zimbabwe".
 *
 * SEED DATA ONLY — imported once with
 *   npm run cms -- import content/insights-company-registration.mjs --status published
 * after which the article lives in MongoDB and is edited at /studio. Delete
 * this file once the import is confirmed.
 */

const insights = [
  {
    slug: 'company-registration-zimbabwe',
    title: 'Registering your business in Zimbabwe: what it costs, and why to formalise now',
    seoTitle: 'Company Registration in Zimbabwe',
    metaDescription:
      'Praxis registers every entity type, from sole traders and PBCs to private and public companies, for USD 150, and handles tax clearance for USD 30.',
    excerpt:
      'Trading informally feels cheaper until a bank, a tender board or a creditor asks who you are. We register every kind of business, from sole traders to public companies, for a fixed USD 150, and handle tax clearance for USD 30.',
    date: '2026-09-21',
    category: 'Advisory',
    tags: ['Company registration', 'Tax clearance', 'PBC', 'PVT', 'Private company', 'ZIMRA'],
    body: [
      { t: 'p', c: 'Many Zimbabwean businesses start informally and stay that way for years. It works until the business needs something only a registered, tax-compliant entity can get: a bank loan, a government tender, a contract with a larger company, or protection from a creditor. By then, formalising is urgent rather than planned.' },
      { t: 'p', c: 'Registration is not complicated, but it has to be done in the right order and with the right documents. We handle it end to end, for every entity type, at a fixed fee.' },

      { t: 'h2', c: 'What we charge' },
      {
        t: 'table',
        head: ['Service', 'Praxis fee'],
        rows: [
          ['Business registration, any entity type', 'USD 150'],
          ['Tax clearance certificate application', 'USD 30'],
        ],
      },
      { t: 'p', c: 'The registration fee is the same whether you are forming a Private Business Corporation or a public company. We confirm the full cost in writing before any work starts, so there are no surprises.' },

      { t: 'h2', c: 'Every entity type, one process' },
      { t: 'p', c: 'Whatever you are setting up, we register it and get it tax-ready:' },
      {
        t: 'ul',
        items: [
          'Private limited companies (Pvt Ltd): the structure banks, tender boards and co-investors expect. Separate legal personality, limited liability, 1 to 50 members, with directors and a company secretary.',
          'Private Business Corporations (PBC): limited liability without the full machinery of a company. Owned and managed by 1 to 20 individuals, with no company secretary and no statutory audit.',
          'Public companies (PLC): for businesses raising capital from the public. Most begin as a Pvt Ltd and convert once the business is large enough to justify the stricter governance.',
          'Partnerships: a written partnership agreement, and registration for tax.',
          'Individuals and sole traders: tax registration and a registered trading name, so you can invoice larger customers and apply for tax clearance.',
        ],
      },
      { t: 'p', c: 'Not sure which one fits? Our briefing “Choosing your business structure in Zimbabwe” compares them side by side, and we will advise you before you commit.' },

      { t: 'h2', c: 'What registration involves' },
      {
        t: 'ol',
        items: [
          'Choosing the structure, based on liability, ownership, who you need to convince, and how you plan to grow.',
          'Searching for and reserving the business name.',
          'Preparing the constitutive documents: a Memorandum and Articles or a Constitution for a company, or PBC by-laws.',
          'Filing with the Registrar of Companies under the Companies and Other Business Entities Act [Chapter 24:31].',
          'Registering with ZIMRA for the taxes that apply to you, and with NSSA once you employ staff.',
          'Applying for a tax clearance certificate, once your registrations and returns are in order.',
        ],
      },

      { t: 'verify', c: 'The documents the Registrar and ZIMRA require, any statutory filing fees and typical turnaround times are set by regulation and administrative practice, and change from time to time. We confirm the current position for your entity when we quote.' },

      { t: 'h2', c: 'Why formalising pays' },
      {
        t: 'ul',
        items: [
          'Protection for your personal assets. A registered company or PBC is a separate legal person. Its debts are its own, not yours, which a sole trader or partner cannot say.',
          'Credibility with customers and funders. Banks, corporates and government buyers generally prefer to contract with a registered entity, and many will not onboard a supplier without one.',
          'Access to tenders. Public-sector and parastatal tenders typically require a registered entity with valid tax clearance, and a missing certificate is a common reason bids are rejected outright.',
          'Payments made in full. Customers may be required to withhold tax from payments to suppliers who cannot produce a valid tax clearance certificate. A current certificate keeps the whole invoice in your account.',
          'Access to finance. Lenders assess registration documents and tax compliance before anything else. See our article “Loan-ready in 30 days”.',
          'A business that outlasts you. A company continues regardless of changes among its owners, so you can bring in a partner, raise investment, or sell it one day.',
          'No backlog to unwind. Businesses that formalise late often face penalties and interest on periods they traded unregistered. Starting compliant costs far less than fixing it later.',
        ],
      },

      { t: 'verify', c: 'Whether a payer must withhold tax from a supplier without tax clearance, the rate and the payment threshold are set by the Income Tax Act and amended through the Finance Act. Confirm the current rules before relying on them.' },

      { t: 'h2', c: 'Why let us handle it' },
      {
        t: 'ul',
        items: [
          'The right structure from the start. Changing entity type later means new registrations, transfers and cost. We advise before we file.',
          'Right first time. Names get rejected and filings get returned when documents are incomplete. We prepare everything to the Registrar’s and ZIMRA’s requirements, which keeps delays to a minimum.',
          'Registration and tax in one engagement. You leave with the entity registered, tax registrations in place, and tax clearance applied for, not a certificate of incorporation and a list of things still to do.',
          'Fixed, transparent fees. USD 150 to register and USD 30 for tax clearance, confirmed in writing before we start.',
          'Compliance that continues. As chartered accountants we can keep the business compliant afterwards: bookkeeping, returns, and renewing tax clearance before it lapses.',
        ],
      },

      { t: 'callout', title: 'How Praxis can help', c: 'Tell us what you want to set up, and we will recommend the right structure, confirm the cost in writing and handle the registration and tax clearance from start to finish. Message us on WhatsApp or book a consultation to get started.' },
    ],
  },
]

export default insights
