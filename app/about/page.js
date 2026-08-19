import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Process from '@/components/sections/home/Process'
import CtaBand from '@/components/ui/CtaBand'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import SectionHead from '@/components/ui/SectionHead'
import { site } from '@/lib/site'
import team from '@/lib/team'

export const metadata = {
  title: 'About the Firm',
  description:
    'Praxis Chartered Accountants is a Harare-based multidisciplinary practice founded in 2012, providing audit, tax, accounting and advisory services to clients in Zimbabwe and the SADC region.',
  alternates: { canonical: '/about' },
}

const principles = [
  {
    icon: 'scale',
    title: 'We practise to a standard, not to a brief',
    body:
      'The practice is led by a member of the Institute of Chartered Accountants of Zimbabwe, trained at a Big Four firm. Assurance work is performed against the professional and ethical standards that membership carries, and we will not sign something to accommodate a deadline.',
  },
  {
    icon: 'handshake',
    title: 'Scope and fees in writing, first',
    body:
      'Every engagement starts with a letter setting out what we will do, what we need from you, who is responsible for what, and how the fee is calculated. Routine compliance work is not billed open-endedly by the hour.',
  },
  {
    icon: 'spark',
    title: 'We say when the answer is no',
    body:
      'If a filing position is aggressive, a forecast is optimistic, or an engagement is not worth the fee, you will hear that from us. We would rather decline work than deliver something we cannot stand behind.',
  },
  {
    icon: 'people',
    title: 'Small by design',
    body:
      'You deal with the person doing the work. There is no account management layer between you and the accountant who prepares your file, which is the main reason clients say things get done.',
  },
]

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'About' }]}
        eyebrow="The firm"
        title="A multidisciplinary practice, built to be a growth partner"
        lead={`Founded in ${site.founded} and based in Harare, Praxis provides audit, tax, accounting and advisory services to owner-managed businesses, NGOs and public-sector entities across Zimbabwe and the SADC region.`}
      />

      <section className="section">
        <div className="container">
          <div className="split split--top">
            <div className="prose">
              <h2 className="mt-0">What we are here to do</h2>
              <p>
                Praxis was founded as a multidisciplinary consulting firm bringing together audit,
                tax, accounting and advisory capability under one roof. The reason was practical:
                clients rarely have a problem that is purely a tax problem or purely an accounting
                problem, and being handed between specialists is how things fall between the cracks.
              </p>
              <p>
                Our stated commitment is to act as a growth partner in a liquidity-constrained
                market. We are deliberate about that phrase. Cash is the binding constraint for
                most Zimbabwean businesses, and reporting does not fix a model that fails to
                generate it. So the work does not stop at closing the books — it extends to
                helping clients build a finance function that produces reliable numbers quickly
                enough to act on, and a business model that holds together when currency and
                pricing conditions move.
              </p>
              <p>
                We intend to grow into a larger firm. That ambition only works if the clients we
                take on now grow too, which is why we would rather turn down an engagement than
                take one where we cannot add something beyond the filing.
              </p>

              <h2>What makes the Zimbabwean context different</h2>
              <p>
                Accounting practice imported unchanged from a stable economy does not survive
                contact with this market. Three things have to be handled deliberately rather
                than by default:
              </p>
              <ul>
                <li>
                  <strong>Multi-currency reality.</strong> Businesses price, cost and report across
                  ZWG and USD. Functional currency, translation rates and rate sources have to be
                  decided and documented at the outset, not reconstructed at year end.
                </li>
                <li>
                  <strong>Hyperinflationary designation.</strong> Zimbabwe is designated a
                  hyperinflationary economy for financial reporting purposes, which brings IAS 29
                  into scope for entities reporting under full IFRS. Its effect on reported
                  results is material and it should be scoped at the start of an engagement.
                </li>
                <li>
                  <strong>An active revenue authority.</strong> ZIMRA compliance is not a
                  once-a-year event. PAYE, VAT, QPDs, annual returns and tax clearance run on
                  separate clocks, and a lapsed clearance directly reduces what your corporate
                  customers pay you.
                </li>
              </ul>
            </div>

            <div>
              <div className="card">
                <span className="card-icon"><Icon name="globe" size={22} /></span>
                <h3>At a glance</h3>
                <ul className="list-dash mt-4">
                  <li>Founded in {site.founded}</li>
                  <li>Based in Harare, serving clients across Zimbabwe</li>
                  <li>Audit, tax, accounting, forensic and advisory work</li>
                  <li>Led by an ICAZ member trained at Deloitte &amp; Touche</li>
                  <li>Owner-managed businesses, NGOs and public-sector entities</li>
                  <li>Multi-currency reporting handled as standard</li>
                </ul>
              </div>

              <div className="card mt-8">
                <span className="card-icon card-icon--navy"><Icon name="people" size={22} /></span>
                <h3>Who you will deal with</h3>
                <ul className="list-dash mt-4">
                  {team.map((t) => <li key={t.slug}>{t.name} — {t.role}</li>)}
                </ul>
                <Link href="/team" className="link-arrow">
                  Read the profiles <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHead
            eyebrow="How we practise"
            title="Four things we hold to"
            lead="Not values on a wall. These are the commitments that change what we actually do on an engagement."
          />
          <div className="grid grid-2 mt-12">
            {principles.map((p) => (
              <div className="card reveal" key={p.title}>
                <span className="card-icon"><Icon name={p.icon} size={22} /></span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <CtaBand />
    </Layout>
  )
}
