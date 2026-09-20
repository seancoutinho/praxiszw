/**
 * Values derived from a post rather than typed by an author.
 *
 * Pure functions with no Node or DB imports, so the studio UI can import this
 * module in the browser and show the same numbers the server will store.
 */

export const WORDS_PER_MINUTE = 220

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
export const SLUG_MAX = 96

/** "Choosing a PBC — in 2026?" → "choosing-a-pbc-in-2026" */
export const slugify = (s = '') =>
  String(s)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, SLUG_MAX)
    .replace(/-+$/g, '')

/** Every piece of reader-visible text in a block, joined. */
export function blockText(b) {
  if (!b || typeof b !== 'object') return ''
  const parts = []
  if (typeof b.title === 'string') parts.push(b.title)
  if (typeof b.c === 'string') parts.push(b.c)
  if (Array.isArray(b.items)) parts.push(...b.items)
  if (Array.isArray(b.head)) parts.push(...b.head)
  if (Array.isArray(b.rows)) for (const r of b.rows) if (Array.isArray(r)) parts.push(...r)
  return parts.filter((p) => typeof p === 'string').join(' ')
}

export function countWords(blocks = []) {
  let n = 0
  for (const b of blocks) {
    const words = blockText(b).trim().split(/\s+/).filter(Boolean)
    n += words.length
  }
  return n
}

/** Whole minutes, never less than one. */
export const estimateReadTime = (blocks = []) =>
  Math.max(1, Math.round(countWords(blocks) / WORDS_PER_MINUTE))

/** "2026-08-29" → "29 August 2026". Parsed as UTC so the day never shifts. */
export function formatDateLabel(isoDate, locale = 'en-GB') {
  if (!isoDate) return ''
  const d = new Date(`${isoDate}T00:00:00Z`)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/** Today's calendar date in `timeZone`, as YYYY-MM-DD. */
export const todayIn = (timeZone = 'UTC', now = new Date()) =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)

/** A block with no reader-visible text — dropped before anything goes live. */
export const isEmptyBlock = (b) => blockText(b).trim() === ''
