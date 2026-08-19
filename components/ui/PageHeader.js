import Link from 'next/link'
import JsonLd from '@/components/ui/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'

/**
 * Inner-page masthead. The old template had a Breadcrumb component that was
 * commented out of the layout, so every inner page began abruptly under the
 * nav with no H1 at all.
 *
 * The visible trail and the BreadcrumbList structured data are both generated
 * from the same `breadcrumbs` array, so they cannot drift apart. `path` is the
 * page's own canonical path — supplying it lets the final list item carry a
 * URL, which is what Google prefers even though schema.org allows omitting it.
 */
export default function PageHeader({ eyebrow, title, lead, breadcrumbs = [], path, children }) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header-inner">
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb">
              <ol className="breadcrumbs">
                <li><Link href="/">Home</Link></li>
                {breadcrumbs.map((c, i) =>
                  c.href && i < breadcrumbs.length - 1 ? (
                    <li key={c.href}><Link href={c.href}>{c.label}</Link></li>
                  ) : (
                    <li key={c.label} aria-current="page">{c.label}</li>
                  )
                )}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="eyebrow eyebrow--light mt-6">{eyebrow}</p>}
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
          {children}
        </div>
      </div>
      {breadcrumbs.length > 0 && <JsonLd data={breadcrumbSchema(breadcrumbs, path)} />}
    </header>
  )
}
