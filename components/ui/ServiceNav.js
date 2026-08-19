import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import { contact, services } from '@/lib/site'

export default function ServiceNav({ current }) {
  return (
    <aside className="service-nav">
      <h2 className="mono-label service-nav-title">All services</h2>
      <ul>
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              aria-current={s.slug === current ? 'page' : undefined}
            >
              {s.nav}
            </Link>
          </li>
        ))}
      </ul>

      <div className="aside-card">
        <h3>Not sure where to start?</h3>
        <p>
          A short call is usually enough to scope the work. No charge, and no
          obligation to engage us afterwards.
        </p>
        <Link href="/contact" className="btn btn--light btn--sm">
          Book a consultation
          <Icon name="arrowRight" size={15} />
        </Link>
        <p style={{ marginTop: '1rem' }}>
          <a href={`tel:${contact.phoneHref}`} style={{ color: '#fff', fontWeight: 600 }}>
            {contact.phone}
          </a>
        </p>
      </div>
    </aside>
  )
}
