import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import SectionHead from '@/components/ui/SectionHead'
import { services } from '@/lib/site'

export default function ServicesGrid() {
  return (
    <section className="section section--paper">
      <div className="container">
        <SectionHead
          eyebrow="What we do"
          title="Six practice areas, one team"
          lead="Most clients start with compliance and stay for the advisory work. You can engage us for a single filing season or for the whole finance function."
        />

        <div className="grid grid-3 mt-12">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card reveal">
              <span className="card-icon"><Icon name={s.icon} size={22} /></span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <span className="link-arrow">
                Read more
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
