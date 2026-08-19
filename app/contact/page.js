import Layout from '@/components/layout/Layout'
import ContactForm from '@/components/forms/ContactForm'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import JsonLd from '@/components/ui/JsonLd'
import { contact, whatsappLink } from '@/lib/site'
import { ORG_ID, absoluteUrl, buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact Our Harare Accountants',
  description:
    'Reach Praxis at 6626 Zimre Way, Zimre Park, Ruwa, Harare, or book a free introductory consultation online.',
  path: '/contact',
})

// Points the contact page at the single Organization node rather than
// restating the address, so there is one authoritative set of NAP details.
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${absoluteUrl('/contact')}#contactpage`,
  url: absoluteUrl('/contact'),
  name: 'Contact Praxis Chartered Accountants',
  inLanguage: 'en-ZW',
  about: { '@id': ORG_ID },
  mainEntity: { '@id': ORG_ID },
}

export default function ContactPage() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Contact' }]}
        path="/contact"
        eyebrow="Contact"
        title="Start with a conversation"
        lead="The first call is free and carries no obligation. Tell us what you need and we will come back within one business day with an honest view of the work involved."
      />

      <section className="section">
        <div className="container">
          <div className="split split--top split--form">
            <div>
              <h2>Details</h2>
              <ul className="footer-contact mt-6" style={{ color: 'var(--ink-2)' }}>
                <li>
                  <Icon name="pin" size={18} />
                  <span>
                    <strong style={{ color: 'var(--navy-800)' }}>Office</strong><br />
                    {contact.address.line1}<br />
                    {contact.address.line2}<br />
                    {contact.address.city}, {contact.address.country}
                  </span>
                </li>
                <li>
                  <Icon name="mail" size={18} />
                  <span>
                    <strong style={{ color: 'var(--navy-800)' }}>Email</strong><br />
                    <a className="link-underline" href={`mailto:${contact.email}`}>{contact.emailLabel}</a>
                  </span>
                </li>
                <li>
                  <Icon name="whatsapp" size={18} />
                  <span>
                    <strong style={{ color: 'var(--navy-800)' }}>WhatsApp</strong><br />
                    <a className="link-underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">{contact.phone}</a>
                    <br />
                    <span className="hint">Usually the fastest way to reach us.</span>
                  </span>
                </li>
                <li>
                  <Icon name="clock" size={18} />
                  <span>
                    <strong style={{ color: 'var(--navy-800)' }}>Office hours</strong><br />
                    {contact.hours.map((h) => (
                      <span key={h.days} style={{ display: 'block' }}>{h.days}: {h.time}</span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="card mt-10">
                <span className="card-icon"><Icon name="lock" size={20} /></span>
                <h3>Sending us documents</h3>
                <p>
                  Please do not attach financial records, identity documents or ZIMRA credentials
                  to a first enquiry. Once we have replied we will confirm how to send them
                  securely, and who at the firm will hold them.
                </p>
              </div>
            </div>

            <div className="card" style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              <h2 style={{ fontSize: 'var(--t-xl)' }}>Send us a message</h2>
              <p className="muted mt-4" style={{ fontSize: 'var(--t-base)' }}>
                Fields marked as required must be completed so we can respond.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="visually-hidden">Office location map</h2>
          <div className="map-frame">
            <iframe
              src={contact.mapEmbed}
              title={`Map showing ${contact.addressOneLine}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="small muted mt-4">
            {contact.addressOneLine}
          </p>
        </div>
      </section>
      <JsonLd data={contactSchema} />
    </Layout>
  )
}
