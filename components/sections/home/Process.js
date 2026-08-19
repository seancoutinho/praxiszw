import SectionHead from '@/components/ui/SectionHead'

export const processSteps = [
  {
    title: 'Introductory call',
    body:
      'Thirty minutes, no charge. We ask what you need, what condition your records are in, and what deadlines are already running. If another firm is a better fit, we will say so.',
  },
  {
    title: 'Scope and fee proposal',
    body:
      'You receive a written engagement letter setting out exactly what we will do, what we need from you, who is responsible for what, and the fee basis. Nothing starts until you have signed it.',
  },
  {
    title: 'Onboarding and records review',
    body:
      'We collect your ZIMRA registration details, prior-year returns and accounting records, then tell you plainly where the gaps are and what it will take to close them.',
  },
  {
    title: 'Delivery on a fixed calendar',
    body:
      'Compliance obligations go on a dated calendar — PAYE, VAT, QPDs, annual returns. Management accounts and reporting run to an agreed monthly or quarterly cycle.',
  },
  {
    title: 'Review and advisory',
    body:
      'Periodic reviews where we walk through the numbers with you rather than emailing a PDF. This is where compliance work turns into decisions about pricing, funding and structure.',
  },
]

export default function Process() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHead
          eyebrow="How we work"
          title="A defined process, from first call to signed accounts"
          lead="Professional services go wrong when nobody agreed what was in scope. Ours is written down before any work begins."
        />
        <div className="steps mt-12">
          {processSteps.map((s) => (
            <div className="step reveal" key={s.title}>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
