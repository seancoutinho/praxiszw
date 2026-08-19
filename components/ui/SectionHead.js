export default function SectionHead({ eyebrow, title, lead, center, light, as: H = 'h2' }) {
  return (
    <div className={`section-head${center ? ' section-head--center' : ''}`}>
      {eyebrow && <p className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</p>}
      <H>{title}</H>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}
