import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import Accordion from '@/components/ui/Accordion'
import CtaBand from '@/components/ui/CtaBand'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import ServiceNav from '@/components/ui/ServiceNav'
import JsonLd from '@/components/ui/JsonLd'
import { getServiceContent } from '@/lib/serviceContent'
import { getService, services } from '@/lib/site'
import { ORG_ID, absoluteUrl, buildMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const service = getService(params.slug)
  if (!service) return { title: 'Service not found', robots: { index: false, follow: true } }

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  })
}

export default function ServicePage({ params }) {
  const service = getService(params.slug)
  const content = getServiceContent(params.slug)
  if (!service || !content) notFound()

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  const url = absoluteUrl(`/services/${service.slug}`)

  // The provider is referenced by @id rather than restated, so every service
  // page resolves to the single Organization node declared in the root layout.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.summary,
    url,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'Country', name: 'Zimbabwe' },
      { '@type': 'AdministrativeArea', name: 'Southern African Development Community' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: content.includes.title,
      itemListElement: content.includes.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item },
      })),
    },
  }

  // The visible accordion and this FAQPage node read from the same array.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
        path={`/services/${service.slug}`}
        eyebrow="Service"
        title={service.title}
        lead={content.lead}
      />

      <section className="section">
        <div className="container">
          <div className="service-layout">
            <ServiceNav current={service.slug} />

            <div>
              <div className="prose">
                {content.intro.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </div>

              <section className="mt-16">
                <h2>{content.includes.title}</h2>
                <ul className="list-check mt-6">
                  {content.includes.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </section>

              <section className="mt-16">
                <h2>{content.approach.title}</h2>
                <div className="steps mt-8">
                  {content.approach.steps.map((s) => (
                    <div className="step" key={s.title}>
                      <div>
                        <h3>{s.title}</h3>
                        <p>{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-16">
                <h2>{content.frameworks.title}</h2>
                <ul className="list-dash mt-6">
                  {content.frameworks.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
                {content.note && (
                  <aside className="callout mt-8">
                    <p className="callout-title">Please note</p>
                    <p>{content.note}</p>
                  </aside>
                )}
              </section>

              <section className="mt-16">
                <h2>Common questions</h2>
                <div className="mt-8">
                  <Accordion items={content.faqs} defaultOpen={[0]} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper section--sm">
        <div className="container">
          <h2>Related services</h2>
          <div className="grid grid-3 mt-8">
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card">
                <span className="card-icon"><Icon name={s.icon} size={20} /></span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="link-arrow">Read more <Icon name="arrowRight" size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need help with ${service.title.toLowerCase()}?`}
        body="Tell us where you currently stand. We will come back with a scope, a fee basis and an honest view of whether we are the right firm for it."
        topic={service.title}
      />
      <JsonLd data={[schema, faqSchema]} />
    </Layout>
  )
}
