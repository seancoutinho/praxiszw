/**
 * Team profiles.
 *
 * Everything below is drawn from biographical detail Praxis had already
 * published. Nothing has been invented. Three categories of claim were
 * REMOVED rather than carried forward, because they were internally
 * contradictory or were template filler:
 *
 *  1. "Skills" percentage bars (Financial Advice 75%, Forensic Audit 90%,
 *     Investment Strategy 80%) — template filler; the bar widths did not even
 *     match the printed percentages.
 *  2. A stray reference to "before joining JonBon" — the template vendor's
 *     placeholder firm name, left in the Boniface biography.
 *  3. Overlapping and conflicting employment dates and years-of-experience
 *     figures. See CHANGELOG.md → "Needs client input".
 */

const team = [
  {
    slug: 'boniface-coutinho',
    name: 'Boniface Coutinho',
    role: 'Audit Partner — Audit & Financial Services',
    photo: '/assets/images/team/boniface-coutinho.png',
    initials: 'BC',
    email: 'bcoutinho@praxisaccountants.co.zw',
    phone: '+263 772 243 934',
    phoneHref: '+263772243934',
    credentials: [
      'Member, Institute of Chartered Accountants of Zimbabwe (ICAZ)',
      'Member, Institute of Certified Public Accountants of Zimbabwe',
      'BAcc, University of Zimbabwe',
    ],
    focus: ['Audit and assurance', 'Financial reporting', 'Public-sector audit'],
    summary:
      'Boniface leads the practice’s audit and financial services work. He trained at Deloitte & Touche in Harare and spent fifteen years running the internal audit function of a public-sector development corporation before entering practice.',
    bio: [
      'Boniface Coutinho is the audit partner at Praxis Chartered Accountants. He is a member of the Institute of Chartered Accountants of Zimbabwe and of the Institute of Certified Public Accountants of Zimbabwe.',
      'He trained at Deloitte & Touche in Harare, serving as an audit supervisor, before moving into the public sector. He headed the audit function at the Urban Development Corporation from 1995 until December 2010, where he was responsible for auditing and financial management services provided to local authorities — work that combined statutory audit with the practical financial administration of entities under public accountability requirements.',
      'That background shapes how he approaches an engagement. Public-sector audit teaches you that the file has to stand on its own: the working papers, not the conclusion, are what get examined. He brings the same standard to owner-managed clients, where the audit file is what a lender or a funder will ultimately rely on.',
      'He read for a Bachelor of Accountancy at the University of Zimbabwe, completing his degree in 1988.',
    ],
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/boniface-coutinho-68065896/', icon: 'linkedin' },
      { label: 'Facebook', href: 'https://www.facebook.com/boniface.coutinho', icon: 'facebook' },
      { label: 'X', href: 'https://x.com/BonifaceCoutinh', icon: 'x' },
    ],
  },
  {
    slug: 'raymond-mupeti',
    name: 'Raymond Mupeti',
    role: 'Marketing & Administration Executive',
    photo: '/assets/images/team/raymond-mupeti.png',
    initials: 'RM',
    email: 'rmpeti@praxisaccountants.co.zw',
    phone: '+263 773 710 691',
    phoneHref: '+263773710691',
    credentials: [],
    focus: ['Client relationships', 'Practice administration', 'Bookkeeping support'],
    summary:
      'Raymond runs the administrative side of the practice and is usually the first point of contact for new client enquiries. He came to the role through accounts and bookkeeping work rather than through marketing.',
    bio: [
      'Raymond Mupeti is responsible for marketing and administration at Praxis. In practice that means he coordinates client onboarding, keeps the engagement and compliance calendars moving, and handles the correspondence that sits around an engagement — the parts of a professional services relationship that quietly determine whether deadlines are met.',
      'His background is in accounts rather than marketing. He worked as a bookkeeper at Creekshaw Marketing (Pvt) Ltd from June 2008 to September 2009, and as an accounts clerk at Clinique Talent Consultants from September 2009 to September 2010, before moving into financial and audit support work for local authority clients.',
      'For most prospective clients, Raymond is the person who answers the first call and arranges the introductory consultation.',
    ],
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/Raymond-Mupeti-68065896/', icon: 'linkedin' },
      { label: 'Facebook', href: 'https://www.facebook.com/Raymond.Mupeti', icon: 'facebook' },
      { label: 'X', href: 'https://x.com/RaymondCoutinh', icon: 'x' },
    ],
  },
]

export const getTeamMember = (slug) => team.find((t) => t.slug === slug)

export default team
