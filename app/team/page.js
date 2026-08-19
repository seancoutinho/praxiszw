import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import CtaBand from '@/components/ui/CtaBand'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import SectionHead from '@/components/ui/SectionHead'
import team from '@/lib/team'

export const metadata = {
  title: 'Our People',
  description:
    'The chartered accountants and staff at Praxis Chartered Accountants in Harare — who they are, what they are qualified in, and what they work on.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Firm', href: '/about' }, { label: 'Our People' }]}
        eyebrow="Our people"
        title="You will work with these people, not an account manager"
        lead="Praxis is a small practice by design. The person who scopes your engagement is the person who does the work and signs it off."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {team.map((person) => (
              <article className="person reveal" key={person.slug}>
                <Link href={`/team/${person.slug}`} className="person-photo">
                  <Image
                    src={person.photo}
                    alt={`${person.name}, ${person.role} at Praxis Chartered Accountants`}
                    width={640}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                </Link>
                <h2 className="person-name">
                  <Link href={`/team/${person.slug}`}>{person.name}</Link>
                </h2>
                <p className="person-role">{person.role}</p>
                <p className="person-bio">{person.summary}</p>
                <Link href={`/team/${person.slug}`} className="link-arrow mt-4">
                  Full profile <Icon name="arrowRight" size={16} />
                </Link>
              </article>
            ))}

            {/* Structure ready for the rest of the team — see CHANGELOG.md */}
            {/* <article className="person">
              <div className="person-photo person-photo--empty">
                <span className="person-initials" aria-hidden="true">+</span>
              </div>
              <h2 className="person-name">[Team member — Praxis to provide]</h2>
              <p className="person-role">[Role]</p>
              <p className="placeholder-note mt-4">
                Placeholder. Send a name, role, photo, qualifications and a short biography and
                this card populates exactly like the two beside it. Delete this block if the
                team page is complete as it stands.
              </p>
            </article> */}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHead
            eyebrow="Professional standing"
            title="Who regulates the work we do"
            lead="Worth understanding before you appoint any accountant in Zimbabwe, not just us."
          />
          <div className="grid grid-2 mt-10">
            <div className="card">
              <span className="card-icon card-icon--navy"><Icon name="scale" size={22} /></span>
              <h3>ICAZ</h3>
              <p>
                The Institute of Chartered Accountants of Zimbabwe is the professional body for
                chartered accountants in Zimbabwe. Membership carries continuing professional
                development and ethical obligations, and a disciplinary process behind them.
              </p>
            </div>
            <div className="card">
              <span className="card-icon card-icon--navy"><Icon name="document" size={22} /></span>
              <h3>PAAB</h3>
              <p>
                The Public Accountants and Auditors Board is the statutory body that registers
                public auditors. Not every accountant may sign an audit report — if a report is
                going to a lender or a regulator, confirm the signing practitioner is registered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to talk to one of us?"
        body="Ask for whoever you need. If we are the wrong practice for the work, we will point you somewhere better."
      />
    </Layout>
  )
}
