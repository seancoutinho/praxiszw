import { allInsights } from '@/lib/insights'
import { services, site } from '@/lib/site'
import team from '@/lib/team'

export default function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/team', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/insights', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/testimonials', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  return [
    ...staticRoutes,
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...allInsights.map((p) => ({
      url: `${site.url}/insights/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
    ...team.map((t) => ({
      url: `${site.url}/team/${t.slug}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
  ]
}
