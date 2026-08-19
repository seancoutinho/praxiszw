import Layout from '@/components/layout/Layout'
import CtaBand from '@/components/ui/CtaBand'
import PageHeader from '@/components/ui/PageHeader'
import testimonials from '@/lib/testimonials'

export const metadata = {
  title: 'Client Feedback',
  description:
    'What clients say about working with Praxis Chartered Accountants — feedback from businesses across Zimbabwe on tax advisory, financial reporting and consultancy engagements.',
  alternates: { canonical: '/testimonials' },
}

export default function TestimonialsPage() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Firm', href: '/about' }, { label: 'Client Feedback' }]}
        eyebrow="Client feedback"
        title="In our clients’ words"
        lead="Every quote below comes from a business we have worked with directly. We have not written any of them, and we do not publish anonymous or composite testimonials."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <figure className="quote-card reveal" key={t.name}>
                <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{t.quote}</blockquote>
                <figcaption className="quote-attrib">
                  <div className="name">{t.name}</div>
                  <div className="org">{t.role}, {t.org}</div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="callout mt-16" style={{ maxWidth: '52rem' }}>
            <p className="callout-title">On testimonials</p>
            <p>
              We publish client feedback only with permission and only attributed. Where a client
              prefers not to be named we do not publish an anonymised version instead — an
              unattributable quote tells you nothing you can check.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Are you a client with something to add?"
        body="If we have worked together and you are willing to be quoted, we would be glad to hear from you."
      />
    </Layout>
  )
}
