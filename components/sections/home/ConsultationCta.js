import ConsultationForm from '@/components/forms/ConsultationForm'
import Icon from '@/components/ui/Icon'
import { contact, whatsappLink } from '@/lib/site'

export default function ConsultationCta() {
  return (
    <section className="section section--navy" id="consultation">
      <div className="container">
        <div className="split split--top">
          <div>
            <p className="eyebrow eyebrow--light">Free introductory consultation</p>
            <h2 className="mt-6">Start with a conversation, not a contract</h2>
            <p className="lead mt-6">
              Tell us what you need and we will come back within one business day with an
              honest view of the work involved, what it will cost, and whether we are the
              right firm for it.
            </p>

            <ul className="list-check mt-10">
              <li>No charge and no obligation for the first call</li>
              <li>Scope and fees confirmed in writing before any work starts</li>
              <li>Your information is used only to respond to this enquiry</li>
            </ul>

            <div className="mt-10" style={{ display: 'grid', gap: '0.75rem' }}>
              <a href={whatsappLink()} className="link-arrow" style={{ color: '#fff' }} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={16} /> Chat on WhatsApp — {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="link-arrow" style={{ color: '#fff' }}>
                <Icon name="mail" size={16} /> {contact.emailLabel}
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
