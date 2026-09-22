import { getAllInsightsFresh } from '@/lib/insights'
import { services, site } from '@/lib/site'
import team from '@/lib/team'

/**
 * Generated from the content, not hand-maintained, so a new service appears the
 * moment it exists in lib/ and a new article the moment it is published.
 *
 * Every URL is absolute and built from `site.url` — the one canonical host.
 * Priorities: the homepage and the commercial pages people search for rank
 * highest, editorial sits in the middle, legal pages at the bottom.
 *
 * Written as a route handler rather than Next's `app/sitemap.js` convention
 * because that convention is pre-rendered at build time in Next 13.4 and
 * ignores `dynamic`/`revalidate` — a sitemap baked at build time would not list
 * anything published afterwards. This renders per request from an uncached
 * read, which a sitemap can afford: it is small, and only crawlers fetch it.
 *
 * `<lastmod>` is only given where a real date exists. Rendered per request, a
 * "now" timestamp would claim every page changed on every fetch — and Google
 * stops trusting a sitemap's lastmod values once they prove inaccurate, which
 * would cost the articles their genuine dates too. The spec makes the tag
 * optional, so pages without a true change date simply omit it.
 */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const escapeXml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const urlEntry = ({ url, lastModified, changeFrequency, priority }) =>
  `  <url>
    <loc>${escapeXml(url)}</loc>${lastModified ? `
    <lastmod>${lastModified.toISOString()}</lastmod>` : ''}
    <changefreq>${changeFrequency}</changefreq>
    <priority>${priority}</priority>
  </url>`

export async function GET() {
  const allInsights = await getAllInsightsFresh()
  const articleDate = (p) => new Date(p.updated ?? p.date)

  // The homepage and /insights both list the latest articles, so they
  // genuinely change when one is published.
  const newestArticle = allInsights.length
    ? new Date(Math.max(...allInsights.map((p) => articleDate(p).getTime())))
    : null
  const feedPages = new Set(['', '/insights'])

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/about', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/insights', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/team', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/testimonials', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ].map((r) => ({
    // The homepage's canonical tag is `${site.url}/`, so its sitemap entry has
    // to carry the same trailing slash or the two disagree about one URL.
    url: `${site.url}${r.path || '/'}`,
    lastModified: feedPages.has(r.path) ? newestArticle : null,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  const entries = [
    ...staticRoutes,

    // Service pages sit alongside /services in importance — these are the
    // pages the commercial search terms actually land on.
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: null,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),

    // Articles carry their own publication (or substantive update) date.
    ...allInsights.map((p) => ({
      url: `${site.url}/insights/${p.slug}`,
      lastModified: articleDate(p),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),

    ...team.map((t) => ({
      url: `${site.url}/team/${t.slug}`,
      lastModified: null,
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(urlEntry).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    },
  })
}
