# insights-cms

A small MongoDB-backed insights/blog backend for Next.js App Router sites. It provides:

- a public read API
- email and password sessions
- a write API for an authoring UI
- a CLI for accounts and bulk imports

It only uses Web `Request`/`Response` and the `mongodb` driver, and never imports `next/*`. The host site supplies anything framework-specific, such as cache purging, through config.

It was first built for praxisaccountants.co.zw, whose studio UI (`app/studio`, `components/studio`) uses this package.

## Add it to a Next.js site

**1. Install.** Either copy this folder into the site and add it as a `file:` dependency, or install it from git. Then add the Mongo driver, which is a peer dependency:

```sh
npm install ./packages/insights-cms mongodb@^6
```

```js
// next.config.js — the package ships untranspiled ESM
transpilePackages: ['insights-cms'],
```

**2. Create one instance** in `lib/cms.js`, for server use only:

```js
import { revalidateTag } from 'next/cache'
import { createInsightsCms } from 'insights-cms'

export const INSIGHTS_TAG = 'insights'

export const cms = createInsightsCms({
  uri: process.env.MONGODB_URI,
  dbName: process.env.MONGODB_DB || 'mysite',
  timeZone: 'Africa/Harare',      // decides when a scheduled post goes live
  titleBudget: 39,                // optional: warn when SEO titles get too long
  onChange: () => revalidateTag(INSIGHTS_TAG),
})
```

**3. Mount the API** with one catch-all route handler:

```js
// app/api/cms/[...path]/route.js
import { cms } from '@/lib/cms'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const { GET, POST, PATCH, DELETE } = cms.routes
```

**4. Read from server components.** Call the repo directly rather than over HTTP, and cache under the tag that `onChange` purges:

```js
import { unstable_cache } from 'next/cache'
import { cms, INSIGHTS_TAG } from '@/lib/cms'

// Keyed per deployment: Vercel restores .next/cache into each build, and
// without this a build can render from an earlier build's cached list.
const DEPLOYMENT = process.env.VERCEL_DEPLOYMENT_ID || process.env.VERCEL_GIT_COMMIT_SHA || 'local'

export const getAllInsights = () =>
  unstable_cache(() => cms.repo.listPublished(), ['insights', 'all', DEPLOYMENT], {
    tags: [INSIGHTS_TAG],
    revalidate: 3600,
  })()
```

In Next 13.4, `unstable_cache` has to be created inside the call as shown. It throws if created at module level during a build. See `lib/insights.js` in the Praxis site for a complete version.

**5. Set the environment and create a login:**

```sh
MONGODB_URI=mongodb+srv://…     # needed at build time too if pages pre-render from it
MONGODB_DB=mysite
npx insights-cms create-user --email editor@example.com --name "Jane Editor"
```

## Config

| Option | Default | |
|---|---|---|
| `uri` | none | Mongo connection string. Checked the first time the database is used, not at import. |
| `dbName` | `insights` | |
| `collectionPrefix` | `cms_` | Collections are `<prefix>insights`, `users`, `sessions` and `login_attempts`. |
| `basePath` | `/api/cms` | Only used when the route is not a `[...path]` catch-all. |
| `timeZone` | `UTC` | "Today" for scheduling. |
| `locale` | `en-GB` | Used for `dateLabel`. |
| `blockTypes` | all | Any subset of `p h2 h3 ul ol callout verify table`. |
| `titleBudget` | `null` | The character count above which `seoTitle` gets a warning. |
| `sessionDays` | `14` | Sliding expiry. |
| `maxAttempts` / `lockoutMinutes` | `5` / `15` | Login throttle, counted per email and IP. |
| `allowedOrigins` | `[]` | Extra origins allowed to call write routes. Same-origin requests always work. |
| `onChange` | `null` | Called after any write that changes what the public sees: `({ type, slug, prevSlug })`. |

## HTTP API

Every route sits under the mount point, `/api/cms` in these examples.

| Method | Path | Auth | |
|---|---|---|---|
| GET | `insights?limit=&body=1` | public | Live posts, newest first |
| GET | `insights/:slug` | public | One live post, with its body |
| POST | `auth/login` `{ email, password }` | none | Sets the `cms_session` cookie |
| POST | `auth/logout` | none | |
| GET | `auth/me` | none | `{ user }` or `{ user: null }` |
| POST | `auth/password` `{ current, next }` | session | Signs out the account's other sessions |
| GET | `admin/meta` | session | Existing categories and tags, block types, `today` |
| GET | `admin/insights?status=&q=` | session | All posts in any status, without bodies |
| POST | `admin/insights` | session | Create a draft |
| GET / PATCH / DELETE | `admin/insights/:id` | session | PATCH takes `expectedUpdatedAt`. DELETE only works on drafts and archived posts. |
| POST | `admin/insights/:id/publish` · `unpublish` · `archive` | session | |

Errors return `{ error, code, details? }`, where `details` maps field names to messages. **Branch on `code`, not on the HTTP status.** In Next 13.4, `next start` turns a 401 on a request with a body into an HTML 500, so write routes send 403 where they would otherwise send 401.

Codes:

| Code | Meaning |
|---|---|
| `unauthorised` | Not signed in |
| `bad_credentials` | Wrong email or password |
| `locked` | Too many failed logins |
| `invalid` | Validation failed; see `details` |
| `stale` | Someone else saved since this editor loaded the post |
| `slug_locked` | The post is published; resend with `confirmSlugChange: true` |
| `slug_taken` | Another post already uses that slug |
| `published` | Can't delete a live post |
| `not_found` | |

## Content model

A post has these fields:

`slug`, `title`, `seoTitle`, `metaDescription`, `excerpt`, `category`, `tags[]`, `date` (YYYY-MM-DD publish date), `updated`, `readTime`, `body[]`, `status` (`draft` | `published` | `archived`)

The server fills in `readTime` from the word count unless `readTimeOverride` is set. A published post with a future `date` is scheduled: public reads leave it out until that date arrives in `timeZone`.

The body is structured blocks, never HTML, so an author can't inject markup:

```js
{ t: 'p' | 'h2' | 'h3' | 'verify', c }
{ t: 'ul' | 'ol', items: [] }
{ t: 'callout', title?, c }
{ t: 'table', head: [], rows: [[]] }   // every row as wide as head
```

`insights-cms/derive` and `insights-cms/schema` are pure modules, safe to import in the browser. An editor can use them to show the same slug, read time, validation and warnings the server will apply.

## CLI

```
insights-cms create-user --email <e> --name <n>   (prompts for the password; also accepts it piped on stdin)
insights-cms set-password --email <e>
insights-cms remove-user --email <e>
insights-cms list-users
insights-cms import <file.mjs|.json> [--status published|draft] [--dry-run]
```

The CLI reads `MONGODB_URI`, `MONGODB_DB` and `CMS_COLLECTION_PREFIX` from the environment, and loads `.env.local` and `.env` itself.

`import` upserts by slug, so running it again updates posts rather than duplicating them. The file can export posts as a default export or as `insights`.

## Security

- **Passwords:** hashed with scrypt from `node:crypto`, with a per-user salt. The hash parameters are stored with each hash.
- **Sessions:** a random 32-byte token sits in an httpOnly, `SameSite=Lax` cookie, marked `Secure` over HTTPS. Only the token's SHA-256 is stored, and Mongo's TTL index removes expired sessions.
- **CSRF:**
  - Writes must be `application/json`, which a cross-site form can't send.
  - Writes must carry an `Origin` that matches the host, which a cross-site fetch can't forge.
- **Signup:** there is none. Accounts can only be created with the CLI.

## Next 13.4 caveats

These come from Next 13.4 itself. All of them go away on Next 14 or later.

- **`revalidatePath` doesn't reach pages that never call `fetch()`.** Purge a tag that `unstable_cache` stamped onto the page instead, as shown above.
- **Route handlers are never invalidated by tag.** They refresh on their own `revalidate` interval.
- **`app/sitemap.js` is pre-rendered at build time** and ignores `dynamic` and `revalidate`, so it never lists posts published after a build. Serve the sitemap from a route handler instead (`app/sitemap.xml/route.js` with `dynamic = 'force-dynamic'`), reading `cms.repo.listPublished()` uncached. The Praxis site has one to copy.
- **The data cache survives builds.** `.next/cache` is restored between Vercel builds, so key `unstable_cache` by deployment, as in step 4.
- **A post that goes offline still returns HTTP 200.** When `notFound()` runs in an on-demand-generated page, the "not found" render is cached with status 200. Add `robots: { index: false }` in `generateMetadata` for missing posts so search engines drop the URL.
