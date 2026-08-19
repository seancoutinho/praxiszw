import Link from 'next/link'

/**
 * Inner-page masthead. The old template had a Breadcrumb component that was
 * commented out of the layout, so every inner page began abruptly under the
 * nav with no H1 at all.
 */
export default function PageHeader({ eyebrow, title, lead, breadcrumbs = [], children }) {
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
    </header>
  )
}
