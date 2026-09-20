/** Small display helpers shared by the studio screens. */

export function relativeTime(iso) {
  if (!iso) return ''
  const diff = (Date.now() - new Date(iso).getTime()) / 1000
  const MIN = 60
  const HOUR = 60 * MIN
  const DAY = 24 * HOUR
  if (diff < 45) return 'just now'
  if (diff < HOUR) return plural(Math.max(1, Math.round(diff / MIN)), 'minute')
  if (diff < DAY) return plural(Math.round(diff / HOUR), 'hour')
  if (diff < 7 * DAY) return plural(Math.round(diff / DAY), 'day')
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

const plural = (n, unit) => `${n} ${unit}${n === 1 ? '' : 's'} ago`

export const clockTime = (d) =>
  new Date(d).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

/** The label and tone for a post's state, as authors think of it. */
export function statusOf(post) {
  if (post.status === 'published' && post.scheduled) return { key: 'scheduled', label: 'Scheduled', tone: 'navy' }
  if (post.status === 'published') return { key: 'published', label: 'Live', tone: 'sage' }
  if (post.status === 'archived') return { key: 'archived', label: 'Archived', tone: 'muted' }
  return { key: 'draft', label: 'Draft', tone: 'amber' }
}
