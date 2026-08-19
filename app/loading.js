export default function Loading() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
        color: 'var(--ink-4)',
        fontSize: 'var(--t-sm)',
      }}
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  )
}
