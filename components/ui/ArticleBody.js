/**
 * Renders the structured block content in lib/insights.js.
 *
 * Content is stored as data rather than HTML strings so nothing is injected
 * with dangerouslySetInnerHTML and every block gets consistent styling.
 */
export default function ArticleBody({ blocks }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return <h2 key={i} id={slugify(b.c)}>{b.c}</h2>
          case 'h3':
            return <h3 key={i}>{b.c}</h3>
          case 'ul':
            return <ul key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ul>
          case 'ol':
            return <ol key={i}>{b.items.map((it) => <li key={it}>{it}</li>)}</ol>
          case 'callout':
            return (
              <aside className="callout" key={i}>
                {b.title && <p className="callout-title">{b.title}</p>}
                <p>{b.c}</p>
              </aside>
            )
          case 'verify':
            return (
              <aside className="callout" key={i} style={{ borderLeftColor: 'var(--navy-600)' }}>
                <p className="callout-title" style={{ color: 'var(--navy-700)' }}>
                  Confirm before relying on this
                </p>
                <p>{b.c}</p>
              </aside>
            )
          case 'table':
            return (
              <div className="table-wrap" key={i}>
                <table>
                  <thead>
                    <tr>{b.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'p':
          default:
            return <p key={i}>{b.c}</p>
        }
      })}
    </div>
  )
}

export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
