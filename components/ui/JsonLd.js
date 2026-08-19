/**
 * Renders one or more schema.org graphs as ld+json.
 *
 * Structured data is the one place `dangerouslySetInnerHTML` is unavoidable —
 * the payload is JSON we generate ourselves, never user input. `<` is escaped
 * so a stray character in content copy cannot close the script tag early.
 */
export default function JsonLd({ data }) {
  const graphs = Array.isArray(data) ? data : [data]

  return (
    <>
      {graphs.filter(Boolean).map((graph, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  )
}
