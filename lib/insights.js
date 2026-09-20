import { unstable_cache } from 'next/cache'
import { INSIGHTS_TAG, cms } from '@/lib/cms'

/**
 * Praxis Insights — public reads.
 *
 * Articles are stored in MongoDB and written in the studio (/studio). Every
 * read here is cached under the `insights` tag, which lib/cms.js purges the
 * moment anything is published, unpublished or edited live. `REVALIDATE` is
 * only the backstop, and it is what brings a scheduled (future-dated) post
 * online once its date arrives.
 *
 * Each post has the shape components/ui/ArticleBody.js and the insight pages
 * already expect: slug, title, seoTitle, metaDescription, excerpt, category,
 * tags, date, dateLabel, updated, readTime and (for single posts) body.
 */

export const REVALIDATE = 3600

/**
 * `unstable_cache` needs Next's incremental cache, and in 13.4 it checks for
 * it when the wrapper is *created* — so the wrapper is built per call (the
 * cache key comes from `fn`'s source and `key`, so it is stable). Where there
 * is no cache (module evaluation during build, a script) the read just runs
 * uncached.
 */
const cached = (fn, key) => async (...args) => {
  let wrapped
  try {
    wrapped = unstable_cache(fn, ['insights', key], { tags: [INSIGHTS_TAG], revalidate: REVALIDATE })
  } catch (err) {
    if (String(err?.message).includes('incrementalCache missing')) return fn(...args)
    throw err
  }
  return wrapped(...args)
}

/** Every live article, newest first, without bodies. */
export const getAllInsights = cached(() => cms.repo.listPublished(), 'all')

/** One live article with its body, or null. */
export const getInsight = cached((slug) => cms.repo.getPublishedBySlug(slug), 'one')

export async function getRecentInsights(n = 3) {
  return (await getAllInsights()).slice(0, n)
}

/** Same category scores 2, each shared tag 1; ties go to the newer article. */
export async function getRelatedInsights(slug, n = 3) {
  const all = await getAllInsights()
  const current = all.find((p) => p.slug === slug)
  if (!current) return all.slice(0, n)
  return all
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === current.category ? 2 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, n)
    .map((s) => s.post)
}

export async function getInsightCategories() {
  return [...new Set((await getAllInsights()).map((p) => p.category))].sort()
}
