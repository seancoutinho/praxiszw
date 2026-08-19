import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Process, { processSteps } from '@/components/sections/home/Process'
import CtaBand from '@/components/ui/CtaBand'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import SectionHead from '@/components/ui/SectionHead'
import { services } from '@/lib/site'

export const metadata = {
  title: 'Services',
  description:
    'Audit and assurance, ZIMRA tax compliance, multi-currency bookkeeping, forensic investigation, financial advisory and risk review for businesses, NGOs and public-sector entities in Zimbabwe.',
  alternates: { canonical: '/services' },
}

export default function ServicesIndex() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Services' }]}
        eyebrow="Services"
        title="Six practice areas, one accountable team"
        lead="You can engage us for a single filing season, a one-off investigation, or the whole finance function. Whichever it is, the scope and the fee basis are agreed in writing before we start."
      />

      <section className="section">
        <div className="container">
          <h2 className="visually-hidden">Our services</h2>
          <div className="grid grid-2">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card reveal">
                <span className="card-icon"><Icon name={s.icon} size={22} /></span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="link-arrow">
                  Read more about {s.nav.toLowerCase()}
                  <Icon name="arrowRight" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHead
            eyebrow="Sectors"
            title="Who we work with"
            lead="We are a small practice and we work best where the finance function is either the constraint or the thing being built."
          />
          <div className="grid grid-3 mt-10">
            <div className="card card--quiet">
              <h3>Owner-managed businesses</h3>
              <p>
                Companies where the founder is still close to the numbers and needs a finance
                function that scales past their own attention.
              </p>
            </div>
            <div className="card card--quiet">
              <h3>NGOs and donor-funded entities</h3>
              <p>
                Organisations carrying grant reporting obligations alongside statutory ones,
                often across multiple funders and currencies.
              </p>
            </div>
            <div className="card card--quiet">
              <h3>Public-sector and parastatal entities</h3>
              <p>
                Bodies with public accountability requirements, where the audit trail matters as
                much as the reported result.
              </p>
            </div>
          </div>
          <p className="lead mt-10" style={{ maxWidth: '48rem' }}>
            If you are unsure whether we are the right fit, a short call will establish it
            quickly. We would rather say so at the start than three weeks in.
          </p>
        </div>
      </section>

      <Process />
      <CtaBand />
    </Layout>
  )
}
