import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import SectionHead from '@/components/ui/SectionHead'
import testimonials from '@/lib/testimonials'

export default function Testimonials() {
  return (
    <section className="section section--paper">
      <div className="container">
        <SectionHead
          eyebrow="Client feedback"
          title="In our clients’ words"
          lead="Published with permission. Every quote below comes from a business we have worked with directly."
        />

        <div className="grid grid-3 mt-12">
          {testimonials.map((t) => (
            <figure className="quote-card reveal" key={t.name}>
              <span className="quote-mark" aria-hidden="true">&ldquo;</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption className="quote-attrib">
                <div className="name">{t.name}</div>
                <div className="org">{t.role}, {t.org}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/testimonials" className="link-arrow">
            All client feedback
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
