import { site } from '@/lib/site'

/**
 * Everything on this site is public except the insights studio (/studio),
 * which is where the practice writes and publishes articles. It is not linked
 * from anywhere and also sends `X-Robots-Tag: noindex` (next.config.js); the
 * disallow here just stops crawlers spending time on it. The other exclusions
 * are Next's internals and the API, which serve no crawlable content.
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
        disallow: ['/_next/', '/api/', '/studio'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
