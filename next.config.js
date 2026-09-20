/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // The insights CMS is a local package (packages/insights-cms) shipped as
  // untranspiled ESM.
  transpilePackages: ['insights-cms'],

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920],
  },

  /**
   * The rebuild reorganised the URL structure and removed eleven leftover
   * template demo pages. These 301s preserve any inbound links and search
   * equity from the previous site.
   */
  async redirects() {
    return [
      /**
       * ONE canonical host. `https://www.praxisaccountants.co.zw` is the form
       * every internal link, canonical tag and sitemap entry already uses, so
       * the apex is 301'd onto it. Without this both hosts serve the same
       * pages and Google indexes two copies of the site, splitting equity.
       *
       * Placed first so it resolves before any path-level rule below.
       */
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'praxisaccountants.co.zw' }],
        destination: 'https://www.praxisaccountants.co.zw/:path*',
        permanent: true,
      },

      // Services moved under /services/*
      { source: '/tax-management', destination: '/services/tax-management', permanent: true },
      { source: '/strategy-planning', destination: '/services/strategy-planning', permanent: true },
      { source: '/bookkeeping', destination: '/services/bookkeeping', permanent: true },
      { source: '/forensic-audit', destination: '/services/forensic-audit', permanent: true },
      { source: '/financial-advices', destination: '/services/financial-advisory', permanent: true },
      { source: '/insurance-strategy', destination: '/services/insurance-strategy', permanent: true },
      { source: '/services2', destination: '/services', permanent: true },

      // Renamed pages
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/team-details/:slug', destination: '/team/:slug', permanent: true },

      // Blog became Insights. Old post slugs no longer exist, so the index
      // catches them rather than returning 404s.
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog-2', destination: '/insights', permanent: true },
      { source: '/blog-details', destination: '/insights', permanent: true },
      { source: '/blog-details/:path*', destination: '/insights', permanent: true },

      // Template demo pages removed — an accounting practice has no storefront.
      { source: '/shop', destination: '/services', permanent: true },
      { source: '/shopping-cart', destination: '/services', permanent: true },
      { source: '/checkout', destination: '/contact', permanent: true },
      { source: '/product-details', destination: '/services', permanent: true },
      { source: '/pricing-table', destination: '/faq', permanent: true },
      { source: '/portfolio', destination: '/services', permanent: true },
      { source: '/index-2', destination: '/', permanent: true },
      { source: '/index-3', destination: '/', permanent: true },
      { source: '/career', destination: '/contact', permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      /**
       * The insights studio and its private API are never indexed. /studio is
       * also disallowed in robots.js. (`:path*` matches zero segments too, so
       * this covers /studio itself.) The studio pages are static shells with
       * no user data — everything personal comes from the API, whose
       * responses are all `Cache-Control: no-store`.
       */
      ...['/studio/:path*', '/api/cms/admin/:path*', '/api/cms/auth/:path*'].map((source) => ({
        source,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      })),
      // Lets the worker at /studio/sw.js control /studio itself, not just /studio/….
      {
        source: '/studio/sw.js',
        headers: [{ key: 'Service-Worker-Allowed', value: '/studio' }],
      },
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

module.exports = nextConfig
