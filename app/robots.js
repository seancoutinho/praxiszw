import { site } from '@/lib/site'

/**
 * Everything on this site is public — there is no admin, preview or draft
 * route to keep out of the index. The only paths worth excluding are Next's
 * internal ones, which serve no crawlable content.
 *
 * `host` is honoured by Yandex only, but it costs nothing and reinforces the
 * same canonical host that next.config.js redirects to.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
