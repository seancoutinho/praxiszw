import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import SectionHead from '@/components/ui/SectionHead'
import { getRecentInsights } from '@/lib/insights'

export default function InsightsPreview() {
  const posts = getRecentInsights(3)

  return (
    <section className="section">
      <div className="container">
        <div className="split split--top" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)' }}>
          <SectionHead
            eyebrow="Insights"
            title="Practical guidance for Zimbabwean businesses"
            lead="Notes on ZIMRA compliance, record keeping and reporting, written for the people who actually have to do the filing."
          />
          <div>
            <div className="article-list">
              {posts.map((post) => (
                <Link href={`/insights/${post.slug}`} className="article-row" key={post.slug}>
                  <div>
                    <p className="article-meta">{post.dateLabel}</p>
                    <p className="article-meta">{post.readTime} min read</p>
                  </div>
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                  <span className="article-arrow"><Icon name="arrowUpRight" size={20} /></span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/insights" className="btn btn--outline">
                All insights
                <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
