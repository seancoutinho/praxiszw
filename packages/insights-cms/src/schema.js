/**
 * The shape of an insight, and the only place that decides what is valid.
 *
 * Hand-written rather than pulled from a schema library so the package has no
 * dependency beyond the Mongo driver, and so the studio can import the same
 * rules in the browser. Unknown keys are dropped; strings are trimmed.
 *
 * Body content is structured blocks, never HTML, so nothing an author types
 * can inject markup into the public site:
 *
 *   { t: 'p' | 'h2' | 'h3' | 'verify', c }
 *   { t: 'ul' | 'ol', items: [] }
 *   { t: 'callout', title?, c }
 *   { t: 'table', head: [], rows: [[]] }
 */

import { SLUG_MAX, SLUG_PATTERN, isEmptyBlock } from './derive.js'

export const BLOCK_TYPES = ['p', 'h2', 'h3', 'ul', 'ol', 'callout', 'verify', 'table']

export const LIMITS = {
  title: 160,
  seoTitle: 120,
  metaDescription: 320,
  excerpt: 600,
  category: 60,
  tag: 48,
  tags: 20,
  blocks: 400,
  text: 12000,
  calloutTitle: 160,
  listItems: 100,
  listItem: 4000,
  tableCols: 12,
  tableRows: 300,
  cell: 2000,
  readTime: 120,
}

/** Recommended upper bound for a meta description before search engines truncate it. */
export const META_DESCRIPTION_TARGET = 160

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

export const isIsoDate = (v) => {
  if (typeof v !== 'string' || !DATE_PATTERN.test(v)) return false
  const d = new Date(`${v}T00:00:00Z`)
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === v
}

function text(v, max, label) {
  if (v === undefined || v === null) return { value: '' }
  if (typeof v !== 'string') return { error: `${label} must be text.` }
  const value = v.trim()
  if (value.length > max) return { error: `${label} must be ${max} characters or fewer.` }
  return { value }
}

function textList(v, maxItems, maxLen, label) {
  if (!Array.isArray(v)) return { error: `${label} must be a list.` }
  if (v.length > maxItems) return { error: `${label} can have at most ${maxItems} entries.` }
  const out = []
  for (const item of v) {
    const r = text(item, maxLen, `Each entry in ${label.toLowerCase()}`)
    if (r.error) return r
    out.push(r.value)
  }
  return { value: out }
}

/** Validate one body block. Returns `{ value }` or `{ error }`. */
export function validateBlock(b, allowed = BLOCK_TYPES) {
  if (!b || typeof b !== 'object' || Array.isArray(b)) return { error: 'Block is malformed.' }
  if (!allowed.includes(b.t)) return { error: `Unknown block type "${b.t}".` }

  switch (b.t) {
    case 'p':
    case 'h2':
    case 'h3':
    case 'verify': {
      const r = text(b.c, LIMITS.text, 'Text')
      return r.error ? r : { value: { t: b.t, c: r.value } }
    }
    case 'callout': {
      const c = text(b.c, LIMITS.text, 'Callout text')
      if (c.error) return c
      const title = text(b.title, LIMITS.calloutTitle, 'Callout title')
      if (title.error) return title
      return { value: title.value ? { t: 'callout', title: title.value, c: c.value } : { t: 'callout', c: c.value } }
    }
    case 'ul':
    case 'ol': {
      const r = textList(b.items ?? [], LIMITS.listItems, LIMITS.listItem, 'List')
      return r.error ? r : { value: { t: b.t, items: r.value } }
    }
    case 'table': {
      const head = textList(b.head ?? [], LIMITS.tableCols, LIMITS.cell, 'Table header')
      if (head.error) return head
      if (head.value.length === 0) return { error: 'A table needs at least one column.' }
      if (!Array.isArray(b.rows)) return { error: 'Table rows must be a list.' }
      if (b.rows.length > LIMITS.tableRows) return { error: `A table can have at most ${LIMITS.tableRows} rows.` }
      const rows = []
      for (const row of b.rows) {
        const r = textList(row, LIMITS.tableCols, LIMITS.cell, 'Table row')
        if (r.error) return r
        if (r.value.length !== head.value.length) {
          return { error: 'Every table row must have the same number of cells as the header.' }
        }
        rows.push(r.value)
      }
      return { value: { t: 'table', head: head.value, rows } }
    }
    default:
      return { error: `Unknown block type "${b.t}".` }
  }
}

/**
 * Validate the author-editable fields of a post.
 *
 * `partial: true` validates only the keys present (a PATCH); otherwise every
 * field is filled with its empty default (a create). Returns
 * `{ value, errors }` — `errors` is `{ field: message }` and empty when valid.
 */
export function validatePost(input, { partial = false, blockTypes = BLOCK_TYPES } = {}) {
  const errors = {}
  const value = {}
  const src = input && typeof input === 'object' ? input : {}
  const has = (k) => Object.prototype.hasOwnProperty.call(src, k)
  const want = (k) => !partial || has(k)

  for (const [k, label] of [
    ['title', 'Title'],
    ['seoTitle', 'SEO title'],
    ['metaDescription', 'Meta description'],
    ['excerpt', 'Excerpt'],
    ['category', 'Category'],
  ]) {
    if (!want(k)) continue
    const r = text(src[k], LIMITS[k], label)
    if (r.error) errors[k] = r.error
    else value[k] = r.value
  }

  if (want('slug')) {
    const r = text(src.slug, SLUG_MAX, 'Slug')
    if (r.error) errors.slug = r.error
    else if (r.value && !SLUG_PATTERN.test(r.value)) {
      errors.slug = 'Use lowercase letters, numbers and single hyphens only.'
    } else value.slug = r.value
  }

  if (want('tags')) {
    const r = textList(src.tags ?? [], LIMITS.tags, LIMITS.tag, 'Tags')
    if (r.error) errors.tags = r.error
    else {
      // De-duplicate case-insensitively, keeping the first spelling used.
      const seen = new Set()
      value.tags = r.value.filter((t) => {
        const key = t.toLowerCase()
        if (!t || seen.has(key)) return false
        seen.add(key)
        return true
      })
    }
  }

  if (want('date')) {
    if (src.date === undefined || src.date === null || src.date === '') {
      if (partial) errors.date = 'Publish date is required.'
    } else if (!isIsoDate(src.date)) errors.date = 'Publish date must be a real date (YYYY-MM-DD).'
    else value.date = src.date
  }

  if (want('updated')) {
    if (src.updated === undefined || src.updated === null || src.updated === '') value.updated = null
    else if (!isIsoDate(src.updated)) errors.updated = 'Updated date must be a real date (YYYY-MM-DD).'
    else value.updated = src.updated
  }

  if (want('readTimeOverride')) {
    const v = src.readTimeOverride
    if (v === undefined || v === null || v === '') value.readTimeOverride = null
    else if (!Number.isInteger(v) || v < 1 || v > LIMITS.readTime) {
      errors.readTimeOverride = `Read time must be a whole number of minutes from 1 to ${LIMITS.readTime}.`
    } else value.readTimeOverride = v
  }

  if (want('body')) {
    const body = src.body ?? []
    if (!Array.isArray(body)) errors.body = 'Body must be a list of blocks.'
    else if (body.length > LIMITS.blocks) errors.body = `An article can have at most ${LIMITS.blocks} blocks.`
    else {
      value.body = []
      body.forEach((b, i) => {
        const r = validateBlock(b, blockTypes)
        if (r.error) errors[`body.${i}`] = r.error
        else value.body.push(r.value)
      })
    }
  }

  return { value, errors }
}

/**
 * Drop blocks and list items with no text. Drafts keep them (an author may be
 * mid-way through adding one); anything that goes live does not.
 */
export function cleanBody(body = []) {
  return body
    .map((b) => (b.t === 'ul' || b.t === 'ol' ? { ...b, items: b.items.filter((it) => it.trim()) } : b))
    .filter((b) => !isEmptyBlock(b))
}

/** What stops a post going live. Same `{ field: message }` shape as validatePost. */
export function publishErrors(post) {
  const errors = {}
  if (!post.title) errors.title = 'Add a title.'
  if (!post.slug) errors.slug = 'Add a slug.'
  if (!post.excerpt) errors.excerpt = 'Add an excerpt — it appears on the insights list and under the headline.'
  if (!post.metaDescription) errors.metaDescription = 'Add a meta description for search results.'
  if (!post.category) errors.category = 'Choose a category.'
  if (!post.date) errors.date = 'Set a publish date.'
  if (!cleanBody(post.body).length) errors.body = 'The article has no content yet.'
  return errors
}

/** Advisory only — never blocks a save. */
export function postWarnings(post, { titleBudget } = {}) {
  const warnings = []
  const docTitle = post.seoTitle || post.title || ''
  if (titleBudget && docTitle.length > titleBudget) {
    warnings.push({
      field: 'seoTitle',
      message: `SEO title is ${docTitle.length} characters; search results show about ${titleBudget}. Shorten it or set a separate SEO title.`,
    })
  }
  if ((post.metaDescription || '').length > META_DESCRIPTION_TARGET) {
    warnings.push({
      field: 'metaDescription',
      message: `Meta description is ${post.metaDescription.length} characters; search engines usually cut off around ${META_DESCRIPTION_TARGET}.`,
    })
  }
  return warnings
}
