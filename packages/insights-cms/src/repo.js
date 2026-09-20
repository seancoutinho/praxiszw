/**
 * Insight reads and writes.
 *
 * Status model (single role — anyone signed in can publish):
 *
 *   draft ──publish──▶ published ──archive──▶ archived
 *     ▲                    │                     │
 *     └─────unpublish──────┴─────────────────────┘
 *
 * A published post whose `date` is still in the future is "scheduled": it is
 * stored as published but excluded from every public read until that date
 * arrives in the configured time zone.
 *
 * Any write that changes what the public can see calls `config.onChange`, which
 * is how the host site purges its page cache.
 */

import { ObjectId } from 'mongodb'
import { estimateReadTime, formatDateLabel, slugify, todayIn } from './derive.js'
import { conflict, invalid, notFound } from './errors.js'
import { cleanBody, postWarnings, publishErrors, validatePost } from './schema.js'

const DUPLICATE_KEY = 11000

export const STATUSES = ['draft', 'published', 'archived']

export function createRepo(config, store) {
  const { blockTypes, timeZone, titleBudget, locale } = config

  const today = () => todayIn(timeZone)
  const liveFilter = () => ({ status: 'published', date: { $lte: today() } })

  const userRef = (user) => (user ? { id: String(user.id), name: user.name } : null)

  async function notify(event) {
    if (!config.onChange) return
    try {
      await config.onChange(event)
    } catch (err) {
      // The write has already succeeded; a failed cache purge must not undo
      // it or surface as an error. Pages still refresh on their revalidate
      // interval.
      console.error('[insights-cms] onChange failed', err)
    }
  }

  /* ---------------------------------------------------------- shapes */

  function toPublic(doc) {
    const post = {
      slug: doc.slug,
      title: doc.title,
      seoTitle: doc.seoTitle || doc.title,
      metaDescription: doc.metaDescription,
      excerpt: doc.excerpt,
      category: doc.category,
      tags: doc.tags ?? [],
      date: doc.date,
      dateLabel: formatDateLabel(doc.date, locale),
      updated: doc.updated ?? null,
      readTime: doc.readTime,
    }
    if (doc.body) post.body = doc.body
    return post
  }

  function toAdmin(doc) {
    const isLive = doc.status === 'published' && doc.date <= today()
    return {
      id: doc._id.toString(),
      status: doc.status,
      scheduled: doc.status === 'published' && !isLive,
      live: isLive,
      slug: doc.slug,
      title: doc.title,
      seoTitle: doc.seoTitle ?? '',
      metaDescription: doc.metaDescription ?? '',
      excerpt: doc.excerpt ?? '',
      category: doc.category ?? '',
      tags: doc.tags ?? [],
      date: doc.date,
      dateLabel: formatDateLabel(doc.date, locale),
      updated: doc.updated ?? null,
      readTime: doc.readTime,
      readTimeOverride: doc.readTimeOverride ?? null,
      ...(doc.body ? { body: doc.body } : {}),
      createdAt: doc.createdAt?.toISOString() ?? null,
      updatedAt: doc.updatedAt?.toISOString() ?? null,
      publishedAt: doc.publishedAt?.toISOString() ?? null,
      createdBy: doc.createdBy ?? null,
      updatedBy: doc.updatedBy ?? null,
      warnings: postWarnings(doc, { titleBudget }),
    }
  }

  const SUMMARY_PROJECTION = { body: 0 }

  /* ---------------------------------------------------------- public reads */

  /** Live posts, newest first. Bodies are omitted unless `withBody`. */
  async function listPublished({ limit, withBody = false } = {}) {
    const { insights } = await store.getCollections()
    let cursor = insights
      .find(liveFilter(), { projection: withBody ? {} : SUMMARY_PROJECTION })
      .sort({ date: -1, _id: -1 })
    if (limit) cursor = cursor.limit(limit)
    return (await cursor.toArray()).map(toPublic)
  }

  async function getPublishedBySlug(slug) {
    if (typeof slug !== 'string') return null
    const { insights } = await store.getCollections()
    const doc = await insights.findOne({ ...liveFilter(), slug })
    return doc ? toPublic(doc) : null
  }

  /* ---------------------------------------------------------- admin reads */

  function parseId(id) {
    if (typeof id !== 'string' || !ObjectId.isValid(id)) throw notFound('No insight with that id.')
    return new ObjectId(id)
  }

  async function findDoc(id) {
    const { insights } = await store.getCollections()
    const doc = await insights.findOne({ _id: parseId(id) })
    if (!doc) throw notFound('No insight with that id.')
    return doc
  }

  async function listAll({ status, q } = {}) {
    const { insights } = await store.getCollections()
    const filter = {}
    if (STATUSES.includes(status)) filter.status = status
    if (q && typeof q === 'string' && q.trim()) {
      const rx = new RegExp(q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i')
      filter.$or = [{ title: rx }, { slug: rx }, { category: rx }, { tags: rx }]
    }
    const docs = await insights
      .find(filter, { projection: SUMMARY_PROJECTION })
      .sort({ updatedAt: -1, date: -1 })
      .limit(500)
      .toArray()
    return docs.map(toAdmin)
  }

  const getById = async (id) => toAdmin(await findDoc(id))

  /** Existing categories and tags, for autocomplete, plus the config the studio needs. */
  async function meta() {
    const { insights } = await store.getCollections()
    const [categories, tags] = await Promise.all([
      insights.distinct('category'),
      insights.distinct('tags'),
    ])
    const sort = (arr) => arr.filter(Boolean).sort((a, b) => a.localeCompare(b))
    return {
      categories: sort(categories),
      tags: sort(tags),
      blockTypes,
      titleBudget: titleBudget ?? null,
      timeZone,
      today: today(),
    }
  }

  /* ---------------------------------------------------------- writes */

  async function uniqueSlug(base, excludeId) {
    const { insights } = await store.getCollections()
    const root = base || 'untitled'
    for (let n = 1; n < 1000; n++) {
      const candidate = n === 1 ? root : `${root}-${n}`
      const clash = await insights.findOne(
        { slug: candidate, ...(excludeId ? { _id: { $ne: excludeId } } : {}) },
        { projection: { _id: 1 } }
      )
      if (!clash) return candidate
    }
    throw conflict('slug_taken', 'Could not find a free address for this insight.')
  }

  const slugTaken = () =>
    conflict('slug_taken', 'Another insight already uses that address. Choose a different slug.', {
      slug: 'Already in use.',
    })

  const readTimeFor = (post) => post.readTimeOverride ?? estimateReadTime(post.body ?? [])

  async function create(input, user) {
    const { value, errors } = validatePost(input, { blockTypes })
    if (!value.title && !errors.title) errors.title = 'Give the insight a title.'
    if (Object.keys(errors).length) throw invalid(errors)

    const { insights } = await store.getCollections()
    const slug = value.slug || (await uniqueSlug(slugify(value.title)))
    const now = new Date()
    const doc = {
      ...value,
      slug,
      date: value.date || today(),
      readTime: readTimeFor(value),
      status: 'draft',
      createdAt: now,
      updatedAt: now,
      publishedAt: null,
      createdBy: userRef(user),
      updatedBy: userRef(user),
    }
    try {
      const { insertedId } = await insights.insertOne(doc)
      return toAdmin({ ...doc, _id: insertedId })
    } catch (err) {
      if (err?.code === DUPLICATE_KEY) throw slugTaken()
      throw err
    }
  }

  /**
   * Save changes. `input.expectedUpdatedAt` (the `updatedAt` the editor last
   * saw) guards against two devices overwriting each other; a mismatch is a
   * 409 rather than a silent last-write-wins.
   *
   * Saving a published post changes the live page immediately, so it has to
   * pass the same checks as publishing.
   */
  async function update(id, input, user) {
    const existing = await findDoc(id)
    const src = input && typeof input === 'object' ? input : {}

    if (src.expectedUpdatedAt && src.expectedUpdatedAt !== existing.updatedAt?.toISOString()) {
      throw conflict('stale', 'This insight was changed elsewhere since you opened it. Reload to get the latest version.')
    }

    const { value, errors } = validatePost(src, { partial: true, blockTypes })
    if ('title' in value && !value.title) errors.title = 'Give the insight a title.'
    if ('slug' in value && !value.slug) errors.slug = 'The slug cannot be empty.'
    if (Object.keys(errors).length) throw invalid(errors)

    const isPublished = existing.status === 'published'
    const slugChanged = 'slug' in value && value.slug !== existing.slug
    if (slugChanged && isPublished && src.confirmSlugChange !== true) {
      throw conflict(
        'slug_locked',
        'This insight is published. Changing its slug changes its web address and breaks existing links to it.',
        { slug: 'Confirm to change the address of a published insight.' }
      )
    }

    const merged = { ...existing, ...value }
    if (isPublished) {
      merged.body = cleanBody(merged.body)
      const blockers = publishErrors(merged)
      if (Object.keys(blockers).length) {
        throw invalid(blockers, 'A published insight must stay complete. Fix these, or unpublish it first.')
      }
      value.body = merged.body
    }

    const $set = {
      ...value,
      readTime: readTimeFor(merged),
      updatedAt: new Date(),
      updatedBy: userRef(user),
    }

    const { insights } = await store.getCollections()
    let updated
    try {
      updated = await insights.findOneAndUpdate(
        { _id: existing._id, updatedAt: existing.updatedAt },
        { $set },
        { returnDocument: 'after', includeResultMetadata: false }
      )
    } catch (err) {
      if (err?.code === DUPLICATE_KEY) throw slugTaken()
      throw err
    }
    if (!updated) {
      throw conflict('stale', 'This insight was changed elsewhere while you were saving. Reload to get the latest version.')
    }

    if (isPublished) {
      await notify({ type: 'update', slug: updated.slug, prevSlug: slugChanged ? existing.slug : undefined })
    }
    return toAdmin(updated)
  }

  async function setStatus(id, status, user, extra = {}) {
    const { insights } = await store.getCollections()
    const updated = await insights.findOneAndUpdate(
      { _id: parseId(id) },
      { $set: { status, updatedAt: new Date(), updatedBy: userRef(user), ...extra } },
      { returnDocument: 'after', includeResultMetadata: false }
    )
    if (!updated) throw notFound('No insight with that id.')
    return updated
  }

  async function publish(id, user) {
    const existing = await findDoc(id)
    const body = cleanBody(existing.body)
    const blockers = publishErrors({ ...existing, body })
    if (Object.keys(blockers).length) throw invalid(blockers, 'This insight is not ready to publish yet.')

    const updated = await setStatus(id, 'published', user, {
      body,
      readTime: readTimeFor({ ...existing, body }),
      publishedAt: existing.publishedAt ?? new Date(),
    })
    await notify({ type: 'publish', slug: updated.slug })
    return toAdmin(updated)
  }

  /** Back to draft — from published (takes it offline) or from archived. */
  async function unpublish(id, user) {
    const existing = await findDoc(id)
    const updated = await setStatus(id, 'draft', user)
    if (existing.status === 'published') await notify({ type: 'unpublish', slug: updated.slug })
    return toAdmin(updated)
  }

  async function archive(id, user) {
    const existing = await findDoc(id)
    const updated = await setStatus(id, 'archived', user)
    if (existing.status === 'published') await notify({ type: 'archive', slug: updated.slug })
    return toAdmin(updated)
  }

  async function remove(id) {
    const existing = await findDoc(id)
    if (existing.status === 'published') {
      throw conflict('published', 'Unpublish or archive this insight before deleting it.')
    }
    const { insights } = await store.getCollections()
    await insights.deleteOne({ _id: existing._id })
    return { id, deleted: true }
  }

  /**
   * Insert or replace by slug — used by the CLI importer to migrate content
   * from files. Idempotent: running it twice leaves one copy of each post.
   * A `readTime` in the source is kept as an override only when it differs
   * from the estimate, so imported posts don't all become manually timed.
   */
  async function upsertBySlug(input, { status = 'published', user = null } = {}) {
    const { value, errors } = validatePost(input, { blockTypes })
    if (!value.slug && !errors.slug) errors.slug = 'Imported posts need a slug.'
    if (!value.title && !errors.title) errors.title = 'Imported posts need a title.'
    if (Object.keys(errors).length) throw invalid(errors, `Cannot import "${input?.slug ?? '?'}".`)

    const post = { ...value, date: value.date || today() }
    if (status === 'published') {
      post.body = cleanBody(post.body)
      const blockers = publishErrors(post)
      if (Object.keys(blockers).length) throw invalid(blockers, `"${post.slug}" is not complete enough to publish.`)
    }
    if (Number.isInteger(input.readTime) && input.readTime !== estimateReadTime(post.body)) {
      post.readTimeOverride = input.readTime
    }

    const { insights } = await store.getCollections()
    const now = new Date()
    const existing = await insights.findOne({ slug: post.slug }, { projection: { _id: 1 } })
    const $set = {
      ...post,
      readTime: readTimeFor(post),
      status,
      updatedAt: now,
      updatedBy: userRef(user),
    }
    await insights.updateOne(
      { slug: post.slug },
      {
        $set,
        $setOnInsert: {
          createdAt: now,
          createdBy: userRef(user),
          publishedAt: status === 'published' ? now : null,
        },
      },
      { upsert: true }
    )
    return { slug: post.slug, action: existing ? 'updated' : 'inserted' }
  }

  return {
    listPublished,
    getPublishedBySlug,
    listAll,
    getById,
    meta,
    create,
    update,
    publish,
    unpublish,
    archive,
    remove,
    upsertBySlug,
  }
}
