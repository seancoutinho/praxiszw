import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import SectionHead from '@/components/ui/SectionHead'

const points = [
  {
    icon: 'globe',
    title: 'Built for a multi-currency economy',
    body:
      'Zimbabwean businesses keep records, transact and report across ZWG and USD. Our ledgers, management accounts and tax computations are structured for that from the outset, not retrofitted at year end.',
  },
  {
    icon: 'scale',
    title: 'Practising to ICAZ standards',
    body:
      'The practice is led by a member of the Institute of Chartered Accountants of Zimbabwe, trained at a Big Four firm. Assurance work is performed against the professional and ethical standards that membership carries.',
  },
  {
    icon: 'document',
    title: 'Evidence you can hand to a third party',
    body:
      'Financial statements that satisfy a lender, a working paper file that survives a ZIMRA review, an investigation report that stands up in a disciplinary hearing. The output has to work outside your office.',
  },
]

export default function Positioning() {
  return (
    <section className="section">
      <div className="container">
        <div className="split split--top">
          <div>
            <SectionHead
              eyebrow="Why Praxis"
              title="A growth partner in a liquidity-constrained market"
              lead="We are candid about what that means. Cash is the binding constraint for most Zimbabwean businesses, and no amount of reporting fixes a model that does not generate it."
            />
            <div className="prose mt-8">
              <p>
                Praxis was founded in 2012 as a multidisciplinary practice. Our brief is not
                simply to close the books — it is to help clients build a finance function
                that produces reliable numbers quickly enough to act on them, and a business
                model that holds together when currency and pricing conditions move.
              </p>
              <p>
                That means we will tell you when a filing position is aggressive, when a
                forecast is optimistic, and when an engagement is not worth the fee. We would
                rather decline work than deliver something we cannot stand behind.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="btn btn--outline">
                More about the firm
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </div>

          <div className="stack-lg">
            {points.map((p) => (
              <div key={p.title} className="card reveal">
                <span className="card-icon card-icon--navy"><Icon name={p.icon} size={22} /></span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
