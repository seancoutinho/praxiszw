'use client'

import { formatDateLabel } from 'insights-cms/derive'
import { cleanBody } from 'insights-cms/schema'
import ArticleBody from '@/components/ui/ArticleBody'
import { site } from '@/lib/site'
import { BRAND } from '@/lib/seo'

const SERP_TITLE_CHARS = 60

/**
 * The article as it will appear on the site — same body renderer, same prose
 * styles — plus how it will look in a search result.
 */
export default function Preview({ post, readTime }) {
  const body = cleanBody(post.body)
  const docTitle = `${post.seoTitle || post.title || 'Untitled'} | ${BRAND}`

  return (
    <div className="st-preview">
      <p className="mono-label st-preview-label">Search result</p>
      <div className="st-serp">
        <p className="st-serp-url">
          {site.url.replace(/^https?:\/\//, '')} › insights › {post.slug || '…'}
        </p>
        <p className="st-serp-title">
          {docTitle.length > SERP_TITLE_CHARS ? `${docTitle.slice(0, SERP_TITLE_CHARS - 3)}…` : docTitle}
        </p>
        <p className="st-serp-desc">
          {post.metaDescription
            ? post.metaDescription.length > 160
              ? `${post.metaDescription.slice(0, 157)}…`
              : post.metaDescription
            : 'Add a meta description to control this snippet.'}
        </p>
      </div>

      <p className="mono-label st-preview-label">Article</p>
      <article className="st-preview-article">
        <header className="st-preview-head">
          <p className="eyebrow eyebrow--light">{post.category || 'Category'}</p>
          <h1>{post.title || 'Untitled'}</h1>
          <p className="st-preview-meta">
            {formatDateLabel(post.date) || 'No date'} · {readTime} min read · {site.name}
          </p>
        </header>
        <div className="st-preview-body">
          {post.excerpt ? <p className="lead">{post.excerpt}</p> : <p className="lead st-muted">Excerpt goes here.</p>}
          <hr className="rule" />
          {body.length ? <ArticleBody blocks={body} /> : <p className="st-muted">The article body will appear here.</p>}
          {post.tags.length > 0 && (
            <div className="st-preview-tags">
              <p className="mono-label">Topics</p>
              <div className="tag-row">
                {post.tags.map((t) => (
                  <span className="badge badge--outline" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
