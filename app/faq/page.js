import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Accordion from '@/components/ui/Accordion'
import CtaBand from '@/components/ui/CtaBand'
import PageHeader from '@/components/ui/PageHeader'
import { contact } from '@/lib/site'

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'How engagements with Praxis Chartered Accountants work — scoping, fees, timelines, industries served, and what to expect from an audit, a tax clean-up or an advisory engagement.',
  alternates: { canonical: '/faq' },
}

const groups = [
  {
    heading: 'Working with us',
    items: [
      {
        q: 'How does an engagement start?',
        a: 'With a short introductory call, at no charge. We ask what you need, what condition your records are in, and what deadlines are already running. If we are a good fit you receive a written engagement letter setting out scope, responsibilities and fees. Nothing starts until you sign it.',
      },
      {
        q: 'Will we deal with the same person throughout?',
        a: 'Yes. Praxis is a small practice and there is no account management layer. The accountant who scopes the work is the one who does it and signs it off.',
      },
      {
        q: 'What do you need from us to get started?',
        a: 'Typically: your certificate of incorporation and constitutive documents, ZIMRA registration details and BP number, prior-year financial statements and tax returns, current-year accounting records, bank statements, and details of the persons authorised to act on the tax account.',
      },
      {
        q: 'Do you work with clients outside Harare?',
        a: 'Yes. Much of the work is done on records rather than on site, so location is rarely the constraint. Where an engagement genuinely requires attendance — a stock count, an audit visit, an investigation — we agree that and any associated cost up front.',
      },
      {
        q: 'Can you take over from our current accountant?',
        a: 'Yes, and it is a routine transition. With your authority we approach the outgoing accountant for professional clearance and the handover of records. What matters is establishing a reliable opening position before we start processing on top of it.',
      },
    ],
  },
  {
    heading: 'Fees and pricing',
    items: [
      {
        q: 'How do you price your work?',
        a: 'Recurring compliance work — bookkeeping, payroll, routine tax filings — is quoted as a fixed periodic fee, so you can budget for it. Project work such as audits, investigations and advisory engagements is quoted per engagement after a scoping review, because the effort depends on the state of the records. We do not put open-ended hourly billing on routine compliance.',
      },
      {
        q: 'Why can you not quote over the phone?',
        a: 'Because the honest answer depends on what condition your records are in, and we cannot know that from a description. A short scoping review costs you nothing and produces a number we will stand behind, rather than an estimate that moves later.',
      },
      {
        q: 'Is the first consultation really free?',
        a: 'Yes. The introductory call is at no charge and carries no obligation to engage us. If we think another firm is a better fit for what you need, we will say so on that call.',
      },
      {
        q: 'What happens if the work turns out to be larger than quoted?',
        a: 'We come back to you before doing it, not afterwards on the invoice. Where a clean-up uncovers materially more than the scoping review suggested, you get a revised scope and fee to approve first.',
      },
    ],
  },
  {
    heading: 'Services and scope',
    items: [
      {
        q: 'What industries do you serve?',
        a: 'We work with owner-managed businesses across a range of sectors, with NGOs and donor-funded organisations, and with public-sector and parastatal entities. The practice has particular depth in public-sector audit and in the financial administration of entities carrying public accountability requirements.',
      },
      {
        q: 'Can you both prepare and audit our accounts?',
        a: 'No. Independence requirements prevent a firm from auditing financial statements it prepared. Where an audit is required we either prepare the accounts and work alongside your appointed auditor, or perform the audit on accounts prepared elsewhere. It is worth settling that split before year end rather than during it.',
      },
      {
        q: 'Do you handle payroll?',
        a: 'Yes — PAYE computation, monthly remittances and returns, benefit valuations and the annual reconciliation. NSSA and any National Employment Council obligations are separate regimes and we track those separately.',
      },
      {
        q: 'We think there has been a fraud. Where do we start?',
        a: 'Call before you start asking questions internally. The most common way an investigation is compromised is an internal enquiry that alerts the subject before evidence is secured. See our forensic audit page for how these engagements are scoped.',
      },
    ],
  },
  {
    heading: 'Compliance questions we hear often',
    items: [
      {
        q: 'We have periods we never filed with ZIMRA. How bad is it?',
        a: 'Recoverable, in almost every case, but the sequence matters. Quantify the exposure and establish what input tax is recoverable against it before approaching ZIMRA — a computed position with a proposal is a materially better outcome than the same liability found on audit. What does not work is an unprepared admission.',
      },
      {
        q: 'Our company is dormant. Do we still have to file?',
        a: 'Yes. Registration creates filing obligations whether or not you traded, and nil returns are still returns. Unfiled periods on a dormant company routinely block a tax clearance application years later.',
      },
      {
        q: 'Do you publish current tax rates and thresholds?',
        a: 'Deliberately not. Rates, thresholds and deadlines are amended regularly, commonly through the annual Finance Act, and a figure published on a website ages badly. Our Insights articles explain how each obligation is structured and flag exactly which figures you need to confirm against current ZIMRA sources.',
      },
      {
        q: 'How long do we have to keep records?',
        a: 'Retention periods come from several statutes at once — the Income Tax Act, the VAT Act and the Companies and Other Business Entities Act — and they do not perfectly align. The practical rule is to retain for the longest applicable period. We cover the detail in our record-keeping article.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap((g) =>
    g.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    }))
  ),
}

export default function FaqPage() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Firm', href: '/about' }, { label: 'FAQ' }]}
        eyebrow="Frequently asked questions"
        title="How working with us actually works"
        lead="Engagement process, fees, scope and the compliance questions we are asked most. If yours is not here, ask us directly — most of these started as a client question."
      />

      <section className="section">
        <div className="container container--narrow">
          {groups.map((g, i) => (
            <div key={g.heading} className={i > 0 ? 'mt-16' : ''}>
              <h2>{g.heading}</h2>
              <div className="mt-6">
                <Accordion items={g.items} allowMultiple defaultOpen={i === 0 ? [0] : []} />
              </div>
            </div>
          ))}

          <div className="callout mt-16">
            <p className="callout-title">Still unanswered?</p>
            <p>
              Email <a className="link-underline" href={`mailto:${contact.email}`}>{contact.emailLabel}</a> or
              call <a className="link-underline" href={`tel:${contact.phoneHref}`}>{contact.phone}</a>. If it is
              a quick question we will just answer it — you do not need to become a client first.
              You can also read our <Link className="link-underline" href="/insights">Insights</Link> for
              longer treatments of the compliance topics above.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </Layout>
  )
}
