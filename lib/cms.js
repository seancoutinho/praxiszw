import { revalidateTag } from 'next/cache'
import { createInsightsCms } from 'insights-cms'
import { TITLE_BUDGET } from '@/lib/seo'

/**
 * The site's one CMS instance. Server-only — it holds the database client.
 *
 * Insights are stored in MongoDB and edited at /studio. Public pages read them
 * through lib/insights.js, which caches every read under the `insights` tag.
 * `onChange` fires whenever a write changes what the public can see (publish,
 * unpublish, archive, or an edit to a live post) and purges that tag, which
 * refreshes the insights index, each article, the homepage feed and the
 * sitemap without a redeploy.
 *
 * The same tag also invalidates the pages themselves: in Next 13.4,
 * `unstable_cache` stamps its tags onto the page that called it, so purging
 * the data purges every page built from it. (`revalidatePath` would not work
 * here — in 13.4 it only reaches pages that used `fetch()`.)
 */
export const INSIGHTS_TAG = 'insights'

export const cms = createInsightsCms({
  uri: process.env.MONGODB_URI,
  dbName: process.env.MONGODB_DB || 'praxis',
  timeZone: 'Africa/Harare',
  titleBudget: TITLE_BUDGET,
  onChange: () => revalidateTag(INSIGHTS_TAG),
})
