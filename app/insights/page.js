import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import CtaBand from '@/components/ui/CtaBand'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import { allInsights } from '@/lib/insights'

export const metadata = {
  title: 'Insights',
  description:
    'Practical guidance on ZIMRA compliance, VAT and PAYE obligations, record keeping, exchange control and year-end reporting, written for Zimbabwean businesses by Praxis Chartered Accountants.',
  alternates: { canonical: '/insights' },
}

export default function InsightsIndex() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Insights' }]}
        eyebrow="Insights"
        title="Notes from the practice"
        lead="Guidance on the compliance and reporting questions Zimbabwean businesses actually bring us. Written to be used, not to rank."
      />

      <section className="section">
        <div className="container">
          <div className="callout" style={{ maxWidth: '52rem' }}>
            <p className="callout-title">How to read these</p>
            <p>
              Procedures and principles are stated directly. Specific rates, thresholds and
              deadlines change — often through the annual Finance Act — so where a figure
              belongs you will find a flagged note telling you what to confirm against current
              ZIMRA, RBZ or legislative sources. Nothing here is a substitute for advice on
              your own facts.
            </p>
          </div>

          <h2 className="visually-hidden">All articles</h2>
          <div className="article-list mt-12">
            {allInsights.map((post) => (
              <Link href={`/insights/${post.slug}`} className="article-row" key={post.slug}>
                <div>
                  <p className="article-meta">{post.dateLabel}</p>
                  <p className="article-meta mt-4">{post.category}</p>
                  <p className="article-meta">{post.readTime} min read</p>
                </div>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <span className="article-arrow"><Icon name="arrowUpRight" size={22} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a question these don’t answer?"
        body="Most of what we publish started as a client question. Send us yours — if it is a quick one we will just answer it."
      />
    </Layout>
  )
}
