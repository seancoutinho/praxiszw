import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import { whatsappLink } from '@/lib/site'

export default function CtaBand({
  title = 'Talk to a chartered accountant, not a call centre.',
  body = 'Tell us what you need — compliance clean-up, an audit, a funding round — and we will tell you honestly whether we are the right firm for it.',
  primary = { href: '/contact', label: 'Book a consultation' },
  topic,
}) {
  return (
    <section className="section section--sm">
      <div className="container">
        <div className="cta-band reveal">
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="cta-actions">
            <Link href={primary.href} className="btn btn--light btn--lg">
              {primary.label}
              <Icon name="arrowRight" size={18} />
            </Link>
            <a href={whatsappLink(topic)} className="btn btn--on-navy btn--lg" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
