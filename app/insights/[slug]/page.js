import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ArticleBody from '@/components/ui/ArticleBody'
import CtaBand from '@/components/ui/CtaBand'
import Icon from '@/components/ui/Icon'
import PageHeader from '@/components/ui/PageHeader'
import JsonLd from '@/components/ui/JsonLd'
import { allInsights, getInsight, getRelatedInsights } from '@/lib/insights'
import { site } from '@/lib/site'
import { ORG_ID, absoluteUrl, buildMetadata, ogImage } from '@/lib/seo'

export function generateStaticParams() {
  return allInsights.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = getInsight(params.slug)
  if (!post) return { title: 'Article not found', robots: { index: false, follow: true } }

  // `seoTitle` is a shortened form of the headline that keeps the composed
  // document title inside the ~60-character SERP limit; `title` still runs in
  // full as the H1 and in og:title, where length is not penalised.
  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/insights/${post.slug}`,
    type: 'article',
    openGraph: {
      title: post.title,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.name],
      section: post.category,
      tags: post.tags,
    },
  })
}

export default function InsightPage({ params }) {
  const post = getInsight(params.slug)
  if (!post) notFound()

  const related = getRelatedInsights(post.slug, 3)

  const url = absoluteUrl(`/insights/${post.slug}`)

  // Articles are written by the practice rather than by a named individual, so
  // the author is the Organization. No person is credited who did not write it.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    image: absoluteUrl(ogImage.url),
    articleSection: post.category,
    keywords: post.tags,
    inLanguage: 'en-ZW',
    isAccessibleForFree: true,
  }

  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Insights', href: '/insights' }, { label: post.title }]}
        path={`/insights/${post.slug}`}
        eyebrow={post.category}
        title={post.title}
      >
        <div className="article-meta-row mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
          <time dateTime={post.date}>{post.dateLabel}</time>
          <span className="dot" aria-hidden="true" />
          <span>{post.readTime} min read</span>
          <span className="dot" aria-hidden="true" />
          <span>{site.name}</span>
        </div>
      </PageHeader>

      <article className="section">
        <div className="container container--narrow">
          <p className="lead">{post.excerpt}</p>
          <hr className="rule mt-10" />
          <div className="mt-10">
            <ArticleBody blocks={post.body} />
          </div>

          <div className="mt-16">
            <p className="mono-label" style={{ marginBottom: '0.75rem' }}>Topics</p>
            <div className="tag-row">
              {post.tags.map((t) => <span className="badge badge--outline" key={t}>{t}</span>)}
            </div>
          </div>

          <div className="callout mt-12">
            <p className="callout-title">General guidance only</p>
            <p>
              This article describes how the rules are structured. It is not advice on your
              circumstances, and tax legislation in Zimbabwe changes regularly. Speak to us — or
              to another qualified adviser — before acting on anything here.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section--paper section--sm">
          <div className="container">
            <h2>Related reading</h2>
            <div className="grid grid-3 mt-8">
              {related.map((r) => (
                <Link href={`/insights/${r.slug}`} className="card" key={r.slug}>
                  <p className="article-meta">{r.dateLabel} · {r.readTime} min read</p>
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                  <span className="link-arrow">Read <Icon name="arrowRight" size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <JsonLd data={schema} />
    </Layout>
  )
}
