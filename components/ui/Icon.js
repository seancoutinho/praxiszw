/**
 * One icon system for the whole site.
 *
 * Every glyph is drawn on a 24x24 grid at 1.5px stroke weight with round caps
 * and joins — no fills, no two-tone shapes. This replaces the template's
 * `icon-7` / `icon-29` icon font, where glyphs came from unrelated sets.
 * Inline SVG keeps it dependency-free and themable via `currentColor`.
 */

const paths = {
  // --- Services
  receipt: <><path d="M5 3v18l2.5-1.5L10 21l2-1.5L14 21l2.5-1.5L19 21V3H5Z" /><path d="M9 8h6M9 12h6M9 16h3" /></>,
  ledger: <><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H19v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" /><path d="M4 16.5h15M8 4v16M11.5 8.5h4M11.5 12h4" /></>,
  compass: <><circle cx="12" cy="12" r="8.5" /><path d="m15 9-1.9 4.1L9 15l1.9-4.1L15 9Z" /></>,
  search: <><circle cx="10.75" cy="10.75" r="6.25" /><path d="m15.5 15.5 4 4" /><path d="M8.5 10.75h4.5" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="m7.5 15.5 3.5-4 3 2.5 4.5-6" /></>,
  shield: <><path d="M12 3.5 5 6v5.5c0 4 2.9 7.5 7 9 4.1-1.5 7-5 7-9V6l-7-2.5Z" /><path d="m9.25 11.75 2 2 3.5-3.75" /></>,

  // --- Interface
  arrowRight: <><path d="M5 12h13" /><path d="m12.5 6 6 6-6 6" /></>,
  arrowUpRight: <><path d="M7 17 17 7" /><path d="M8.5 7H17v8.5" /></>,
  arrowUp: <><path d="M12 19V5" /><path d="m6 11.5 6-6 6 6" /></>,
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  chevronRight: <path d="m9.5 6 6 6-6 6" />,
  close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7" />,

  // --- Contact
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  phone: <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />,
  pin: <><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.75" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 1.75" /></>,

  // --- Credibility / value props
  scale: <><path d="M12 4v16" /><path d="M7 20h10" /><path d="M4.5 7.5h15" /><path d="m4.5 7.5-2.25 5.25a2.5 2.5 0 0 0 4.5 0L4.5 7.5Z" /><path d="m19.5 7.5-2.25 5.25a2.5 2.5 0 0 0 4.5 0L19.5 7.5Z" /></>,
  handshake: <><path d="m3.5 12 3-3 3 1.5 3-1.5 3 1.5 3-1.5 2 2" /><path d="M9.5 10.5 7 13a1.9 1.9 0 0 0 2.7 2.7l.8-.8.9.9a1.9 1.9 0 0 0 2.7-2.7" /><path d="m13.1 13.1 1.6 1.6a1.9 1.9 0 0 0 2.7-2.7" /></>,
  people: <><circle cx="9" cy="8.5" r="3.25" /><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" /><path d="M16 5.75a3.25 3.25 0 0 1 0 6.5" /><path d="M17.5 14.75a5.5 5.5 0 0 1 3 4.75" /></>,
  document: <><path d="M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8L14 3.5Z" /><path d="M13.75 3.75V8.25H18.25" /><path d="M9 13h6M9 16.5h4" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.75 12h16.5" /><path d="M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.4-5.4-3.4-8.5S9.8 5.9 12 3.5Z" /></>,
  lock: <><rect x="4.5" y="10" width="15" height="10" rx="2" /><path d="M8 10V7.5a4 4 0 0 1 8 0V10" /></>,
  spark: <><path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7L4.5 11 10.1 9 12 3.5Z" /><path d="M18.5 16.5 19.2 18.4l1.8.6-1.8.6-.7 1.9-.7-1.9-1.8-.6 1.8-.6.7-1.9Z" /></>,

  // --- Social
  linkedin: <><path d="M5 8.75v10.5M5 4.9v.1" /><path d="M10 19.25V8.75" /><path d="M10 13.25a4.5 4.5 0 0 1 9 0v6" /></>,
  facebook: <path d="M14.5 21v-8h2.75l.5-3.25H14.5V7.6c0-.94.29-1.58 1.64-1.58h1.75V3.11A23 23 0 0 0 15.35 3c-2.53 0-4.26 1.55-4.26 4.38V9.75H8.25V13h2.84v8" />,
  x: <><path d="M4 4.5 20 19.5" /><path d="M20 4.5 4 19.5" /></>,
}

/**
 * Brand marks. These are official logotypes and must be drawn as filled shapes
 * at their published outlines — they are not part of the stroke system above.
 */
const filled = {
  whatsapp: (
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  ),
}

export default function Icon({ name, size = 20, className, strokeWidth = 1.5, ...rest }) {
  if (filled[name]) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
        focusable="false"
        {...rest}
      >
        {filled[name]}
      </svg>
    )
  }

  const d = paths[name]
  if (!d) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {d}
    </svg>
  )
}
