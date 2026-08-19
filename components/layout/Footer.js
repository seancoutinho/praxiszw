import Image from 'next/image'
import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import { contact, footerNav, site, whatsappLink } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-grid">
            <div>
              <Link href="/" className="footer-logo" aria-label={`${site.name} — home`}>
                <Image
                  src="/assets/images/logo-light.png"
                  alt={site.name}
                  width={459}
                  height={193}
                />
              </Link>
              <p className="footer-about">
                A Harare-based chartered accountancy and advisory practice serving owner-managed
                businesses, NGOs and public-sector entities across Zimbabwe and the wider SADC region
                since {site.founded}.
              </p>
              <div className="social-row">
                {contact.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.shortName} on ${s.label}`}
                  >
                    <Icon name={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

            <nav aria-labelledby="footer-services">
              <h2 className="footer-title" id="footer-services">Services</h2>
              <ul className="footer-links">
                {footerNav.services.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-firm">
              <h2 className="footer-title" id="footer-firm">Firm</h2>
              <ul className="footer-links">
                {footerNav.firm.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="footer-title">Contact</h2>
              <ul className="footer-contact">
                <li>
                  <Icon name="pin" size={16} />
                  <span>
                    {contact.address.line1}<br />
                    {contact.address.line2}<br />
                    {contact.address.city}, {contact.address.country}
                  </span>
                </li>
                <li>
                  <Icon name="mail" size={16} />
                  <a href={`mailto:${contact.email}`}>{contact.emailLabel}</a>
                </li>
                <li>
                  <Icon name="whatsapp" size={16} />
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    {contact.phone}
                    <span className="visually-hidden"> — chat on WhatsApp</span>
                  </a>
                </li>
                <li>
                  <Icon name="clock" size={16} />
                  <span>
                    {contact.hours.map((h) => (
                      <span key={h.days} style={{ display: 'block' }}>{h.days}: {h.time}</span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <ul className="footer-legal">
            {footerNav.legal.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
