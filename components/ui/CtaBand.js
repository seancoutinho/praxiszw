import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import { contact } from '@/lib/site'

export default function CtaBand({
  title = 'Talk to a chartered accountant, not a call centre.',
  body = 'Tell us what you need — compliance clean-up, an audit, a funding round — and we will tell you honestly whether we are the right firm for it.',
  primary = { href: '/contact', label: 'Book a consultation' },
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
            <a href={`tel:${contact.phoneHref}`} className="btn btn--on-navy btn--lg">
              <Icon name="phone" size={16} />
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
