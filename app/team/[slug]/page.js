import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import CtaBand from '@/components/ui/CtaBand'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import team, { getTeamMember } from '@/lib/team'
import { contact, contactHref } from '@/lib/site'

export function generateStaticParams() {
  return team.map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }) {
  const person = getTeamMember(params.slug)
  if (!person) return { title: 'Profile not found' }
  return {
    title: `${person.name} — ${person.role}`,
    description: person.summary,
    alternates: { canonical: `/team/${person.slug}` },
  }
}

export default function TeamMemberPage({ params }) {
  const person = getTeamMember(params.slug)
  if (!person) notFound()

  const others = team.filter((t) => t.slug !== person.slug)
  // The firm's main line is reachable on WhatsApp; other direct lines are not.
  const isWhatsApp = person.phoneHref.replace(/[^\d]/g, '') === contact.whatsapp

  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Our People', href: '/team' }, { label: person.name }]}
        eyebrow={person.role}
        title={person.name}
      />

      <section className="section">
        <div className="container">
          <div className="split split--top split--aside">
            <div>
              <div className="person-photo">
                <Image
                  src={person.photo}
                  alt={`${person.name}, ${person.role} at Praxis Chartered Accountants`}
                  width={640}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 30vw"
                  priority
                />
              </div>

              <div className="card mt-8">
                <h2 style={{ fontSize: 'var(--t-lg)' }}>Contact</h2>
                <ul className="footer-contact" style={{ color: 'var(--ink-2)' }}>
                  <li>
                    <Icon name="mail" size={16} />
                    <a className="link-underline" href={`mailto:${person.email}`}>{person.email}</a>
                  </li>
                  <li>
                    <Icon name={isWhatsApp ? 'whatsapp' : 'phone'} size={16} />
                    <a
                      className="link-underline"
                      href={contactHref(person.phoneHref)}
                      {...(isWhatsApp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {person.phone}
                      {isWhatsApp && <span className="visually-hidden"> — chat on WhatsApp</span>}
                    </a>
                  </li>
                </ul>
                <div className="social-row">
                  {person.social.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                       aria-label={`${person.name} on ${s.label}`}>
                      <Icon name={s.icon} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="lead">{person.summary}</p>

              {person.credentials.length > 0 && (
                <div className="mt-10">
                  <h2 style={{ fontSize: 'var(--t-xl)' }}>Qualifications</h2>
                  <ul className="list-check mt-4">
                    {person.credentials.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              )}

              <div className="mt-10">
                <h2 style={{ fontSize: 'var(--t-xl)' }}>Areas of focus</h2>
                <div className="tag-row mt-4">
                  {person.focus.map((f) => <span className="badge" key={f}>{f}</span>)}
                </div>
              </div>

              <div className="prose mt-12">
                <h2>Background</h2>
                {person.bio.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
              </div>
            </div>
          </div>

          {others.length > 0 && (
            <div className="mt-16">
              <hr className="rule" />
              <div className="mt-10">
                <h2 style={{ fontSize: 'var(--t-xl)' }}>Others at the firm</h2>
                <div className="grid grid-3 mt-6">
                  {others.map((o) => (
                    <Link href={`/team/${o.slug}`} className="card" key={o.slug}>
                      <h3>{o.name}</h3>
                      <p>{o.role}</p>
                      <span className="link-arrow">Profile <Icon name="arrowRight" size={16} /></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </Layout>
  )
}
