import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Icon from '@/components/ui/Icon'
import { getRecentInsights } from '@/lib/insights'
import { services } from '@/lib/site'

// A 404 must never be indexed, and it has no canonical of its own to claim.
export const metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for is not at this address.',
  robots: { index: false, follow: true },
  // Explicitly cleared: without this the 404 inherits the layout's canonical
  // and every bad URL claims to be the homepage.
  alternates: { canonical: null },
}

export default function NotFound() {
  const posts = getRecentInsights(2)

  return (
    <Layout>
      <section className="section">
        <div className="container container--narrow">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-6">We could not find that page</h1>
          <p className="lead mt-6">
            The link may be out of date. This site was rebuilt in 2026 and a number of pages
            moved — most old addresses redirect automatically, but not all of them.
          </p>

          <div className="hero-cta" style={{ marginTop: '2rem' }}>
            <Link href="/" className="btn btn--primary">Go to the homepage</Link>
            <Link href="/contact" className="btn btn--ghost">Contact us</Link>
          </div>

          <hr className="rule mt-16" />

          <div className="mt-10">
            <h2 style={{ fontSize: 'var(--t-xl)' }}>Looking for a service?</h2>
            <ul className="list-dash mt-4">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link className="link-underline" href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 style={{ fontSize: 'var(--t-xl)' }}>Recent insights</h2>
            <div className="grid grid-2 mt-6">
              {posts.map((p) => (
                <Link href={`/insights/${p.slug}`} className="card" key={p.slug}>
                  <p className="article-meta">{p.dateLabel}</p>
                  <h3>{p.title}</h3>
                  <span className="link-arrow">Read <Icon name="arrowRight" size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
