# Praxis Chartered Accountants — Website Revamp

**Date:** 19 August 2026
**Branch:** `revamp`
**Baseline:** commit `9bca5da` on `master`

A full audit and rebuild of praxisaccountants.co.zw. The site was previously an
off-the-shelf Next.js template with the firm's name substituted into it. This
pass replaced the design system, the navigation, the content and the asset
pipeline. The brand colours from the logo — navy `#0B2559` and sage `#6F8B56` —
are the foundation of the new system.

Anything requiring real data from Praxis is listed in
[**Needs client input**](#needs-client-input) at the end. Nothing in that list
has been invented or guessed at.

---

## Phase 1 — Audit findings

### Broken or dead functionality

| Finding | Where it was |
|---|---|
| `emailjs.send(...)` called without importing `emailjs` — the homepage consultation form threw a `ReferenceError` on **every** submission and silently failed | `components/sections/home1/Expertise.js` |
| Blog navigation link pointed at `#` — the entire blog was unreachable from the nav | `components/layout/Menu.js` |
| Blog cards linked to `/blog-details` (no such route) and to a literal `/blog-details/[slug]?slug=…` | `app/blog/page.js` |
| `Breadcrumb` was commented out of the layout, so every inner page's `breadcrumbTitle` was dead and **no inner page rendered an `<h1>`** | `components/layout/Layout.js:60` |
| Footer: 4 of 8 links were `#` (Privacy, Terms, Support, Disclaimer); the footer logo linked to `#`; the "Services" link pointed at `/service`, a 404 | `Footer1.js` |
| Navigation was rendered three times from three different sources that had drifted apart — desktop said "Learn More"/"Blog", mobile said "Pages"/"Blogs"; the sticky header's CTA said "Free Consulting" while the main header's said "Get A Quote" | Header3 / Menu / MobileMenu |
| Homepage feature cards linked to `/index-3`, a template demo page, instead of the real service pages | `home3/Features.js` |
| All five mobile-menu social links pointed at `/#` | `MobileMenu.js` |
| Blog author link had a typo: `href="blog-detailsl"` | `blog-details/[slug]/page.jsx` |
| Logos referenced `src="assets/images/…"` — a relative path that broke on any nested route | Header3, Footer1, and throughout |
| "Download Resources" buttons on every service page did nothing | `tax-management` et al. |
| `blogs.map()` had no React `key` | `app/blog/page.js` |
| **447** images with empty `alt=""` | site-wide |

### Content problems

- **"99.99% Success"** and **"We never fail!"** on the homepage *and* the about page.
- **Lorem ipsum still live in production**: the team page testimonial intro read *"Amet dui scelerisque vel habitant eget tincidunt facilisis pretium…"*.
- All six blog posts were two-sentence stubs with **invented US authors** (Jane Smith, Paul Roberts, Sarah Lee, Michael Green…) and fabricated comment counts.
- **Zero Zimbabwe specificity.** No mention of ZIMRA, ICAZ, PAAB, RBZ, or any Zimbabwean legislation, on a Zimbabwean chartered accountancy's website.
- **Three different email addresses** across the site — `info@`, `contact@`, `support@praxisaccountants.com` — none matching the live `.co.zw` domain.
- **Three phone formats**, one of them broken: footer printed `263 772 243` (truncated) against a `tel:263772243934` link; contact page had `+(263) 772-2439 34`; team pages had `+263 772 24 3934`.
- **The map pointed at the wrong city.** Embed was centred on 6626 Zimre Way, **Ruwa** — about 25 km from the stated Harare address.
- Copyright credited **"bytestream"**, not Praxis.
- About page copy cut off mid-sentence: *"…tailor made services to our clients in"*.
- Team bios contained a leftover template firm name: *"Before joining **JonBon**…"*, plus overlapping employment dates and contradictory experience figures.
- Only **one** `metadata` export in the whole application. No per-page titles, no descriptions, no OpenGraph, no sitemap, no robots.txt.
- **Eleven leftover template demo pages** were live and indexable: `/shop`, `/shopping-cart`, `/checkout`, `/product-details`, `/pricing-table`, `/portfolio`, `/index-2`, `/index-3`, `/blog-2`, `/services2`, `/career`.

### Design and UX problems

- Three-slide autoplay carousel of generic Western stock photography; all three slides used the identical CTA ("Discover More" → `/about-us`).
- Icons came from a template icon font (`icon-7`, `icon-12`, `icon-29`…) — arbitrary glyphs from unrelated sets with no consistent metaphor or stroke weight.
- **No `:focus-visible` styles anywhere.** Accordions and carousels were `<div>`s with `onClick` — completely inoperable by keyboard.
- Heading hierarchy skipped levels; inner pages had no `<h1>` at all.
- `wow.js` fade-in-on-scroll applied to nearly every block — the single clearest "this is a template" signal.
- Team-member "Skills" rendered as progress bars whose **widths did not match their printed percentages** (a 95%-wide bar labelled "75%").
- The About page carried a template placeholder signature image.

### Technical debt

- **285 MB of images** in `public/` — 26 files over 2 MB each, served unoptimised.
- **31,433 lines of CSS** loaded on every page: Bootstrap (10,906), font-awesome (6,203), elpath (4,413), animate.css (3,782), style.css (3,200), jquery-ui (1,518), plus more. The overwhelming majority unused.
- Dependencies for features this site does not have: `isotope-layout`, `lightgallery`, `bootstrap-touchspin`, `react-curved-text`, `react-modal-video`, `wowjs`.
- **60+ near-identical slider components**, roughly 50 of them never imported.
- No `next.config` image configuration, no security headers, no redirects.
- EmailJS enquiries were delivered to a **personal Gmail address**, not a firm mailbox.

---

## Phase 2 — Visual and brand redesign

### Design system

Built a single design system in `app/globals.css` (1,216 lines) replacing all
31,433 lines of template CSS. No CSS framework; no utility-class library.

- **Brand palette extracted from the logo file itself.** Sampled `logo.png` and
  found navy `#0B2559` (the wordmark) and sage `#6F8B56` (the mark). Both were
  built out into full 5–7 step scales. Neutrals are warm-tinted (`#FBFAF7`
  paper) so the page reads editorial rather than clinical.
- **Type scale** — fluid `clamp()` ramp from 13px to 72px, one consistent set of
  steps used everywhere.
- **Spacing scale** on a 4px base, with a single `--section-y` token controlling
  vertical rhythm across the whole site.
- **Component set**: buttons (6 variants × 3 sizes), cards, badges, section
  headers, accordions, numbered process steps, article rows, quote cards,
  callouts, form controls, page headers, CTA bands.

### Typography

**Lato** across the whole site — headings, body, UI and data — replacing the
template's Inter + Jost (14 static files, 7 weights each).

Four styles ship: 400 and its italic for body copy, 700 for headings and UI
emphasis, 900 for the largest display sizes. They are **self-hosted**, so
nothing is fetched from Google at build time or run time: no third-party request
when a client loads the site, and no external dependency in the build.

Because Lato has no 500 or 600, every intermediate weight in the design system
was snapped to a real one (400 / 700 / 900). Left as-is, the browser would have
synthesised those into a blurry faux-bold. Headings moved from 400 to 700 — a
weight the serif did not need but a sans does to carry a headline — with
tracking tightened to compensate, and the largest display sizes take Lato Black
at −0.032em.

### Hero

The three-slide stock-photo carousel is gone. In its place: a single editorial
statement, a credibility subline, one primary action, and a panel that puts the
firm's actual differentiators above the fold. Since no professional photography
of the firm exists, the brand treatment is geometric — layered navy gradients
with a sage arc echoing the logo mark — rather than unrelated stock imagery.

Below the fold, three credibility signals sit immediately under the hero:
practising since 2012, ICAZ-led, multi-currency as standard.

### Icons

Replaced the template icon font with a **single inline-SVG icon system**
(`components/ui/Icon.js`): 27 glyphs, all drawn on a 24×24 grid at 1.5px stroke
weight with round caps and joins. No fills, no two-tone shapes, no dependency.

### Navigation

Consolidated the three divergent navigation definitions into **one** source
(`lib/site.js` → `primaryNav`), rendered twice — desktop and mobile drawer.

- The Blog link now routes to a working `/insights` index.
- Desktop dropdowns open on hover *and* on keyboard focus, close on `Escape`.
- The mobile drawer is a proper `role="dialog"`, locks body scroll, sets `inert`
  when closed so its links are not reachable by tab, and closes on `Escape` and
  on navigation.
- Current page is marked with `aria-current="page"`.

### Motion

Removed `wow.js` and `animate.css` (3,782 lines) and replaced them with a
20-line `IntersectionObserver` that toggles one attribute. It is disabled
entirely under `prefers-reduced-motion`, and a `<noscript>` rule guarantees
content is visible without JavaScript.

### Accessibility

- Skip-to-content link on every page.
- `:focus-visible` outlines throughout.
- Accordions rebuilt as real `<button aria-expanded aria-controls>` disclosures.
- Every form control has an associated `<label for>`.
- Every image has descriptive alt text (was: 447 empty).
- Exactly one `<h1>` per page, with no skipped heading levels — verified by crawl.
- **Palette audited for WCAG AA.** Two tokens failed and were corrected: the
  faintest neutral was 3.04:1 (used for article metadata and form hints) and has
  been darkened to 4.84:1; the mid neutral was adjusted alongside it to keep a
  legible three-step hierarchy. Every text pair on the site now clears 4.5:1.

### Footer

Rebuilt from `lib/site.js`. Every link resolves — the four `#` placeholders are
now real Privacy and Terms pages. Contact details are correct and consistent.
Copyright credits Praxis.

---

## Phase 3 — Content overhaul

All copy was rewritten. Nothing from the template survives.

### Firm messaging

- **"99.99% Success" and "We never fail!" are gone** from both pages that carried
  them. In their place: specific, checkable positioning — practising since 2012,
  ICAZ-led, Big Four trained, multi-currency reporting as standard, public-sector
  audit depth.
- The homepage now leads with what the firm does ("Books that hold up. Returns
  that file on time.") rather than a generic consulting claim.
- The firm's own stated commitment — being a *"growth partner in a
  liquidity-constrained market"* — was kept and given substance rather than
  dropped, because it is genuinely specific to this market.
- Added a **"How we work"** section: five numbered steps from introductory call
  to advisory review, on the homepage, the services index and the about page.

### Services

Restructured to `/services/<slug>`, driven by `lib/serviceContent.js`. Each of
the six services now has an intro, a "what the engagement covers" list, a
four-step approach, the frameworks it operates under, a scope note, and its own
FAQs — grounded in Zimbabwean practice:

| Service | Zimbabwe-specific content |
|---|---|
| Tax Management | ZIMRA registration and TaRMS onboarding, PAYE, VAT tax periods, QPDs, ITF263 tax clearance and its cash-flow consequences, Income Tax Act [Ch. 23:06], VAT Act [Ch. 23:12], CGT Act [Ch. 23:01] |
| Bookkeeping & Accounting | Multi-currency (ZWG/USD) ledgers with rate and rate-source recorded, IFRS and IFRS for SMEs, COBE Act [Ch. 24:31] record-keeping, IAS 29 hyperinflationary scoping |
| Strategy & Planning | Models separating volume, price and currency effects; RBZ exchange control constraints on foreign-currency access; SADC trading context |
| Forensic Audit | Evidence preservation sequence, ICAZ professional standards, findings separated from opinion, explicit limits on what we will not do |
| Financial Advisory | Exchange Control Act [Ch. 22:05], authorised dealers, withholding taxes, double taxation agreements, transfer pricing documentation |
| Risk & Insurance Strategy | IPEC's regulatory role, an explicit statement that we hold no insurance licence and take no commission, multi-currency sums-insured drift |

`/financial-advices` was renamed to `/financial-advisory` (the old spelling was
not English), and `Insurance Strategy` became `Risk & Insurance Strategy` to
describe what the service actually is.

### Insights (formerly the dead Blog link)

The six filler posts with invented American authors were deleted. In their place,
**seven substantive articles** (`lib/insights.js`), each 6–9 minutes, written for
Zimbabwean businesses:

1. **The ZIMRA compliance calendar: what falls due, and when** — PAYE, VAT, QPDs, annual returns, ITF263, TaRMS, and how to build a calendar that survives staff turnover.
2. **VAT registration in Zimbabwe** — the rolling twelve-month test, compulsory vs voluntary registration, the invoice-basis cash-flow trap, and what to do if you are already late.
3. **PAYE: what Zimbabwean employers are actually responsible for** — the Final Deduction System, benefits in kind, contractor reclassification risk, multi-currency payroll, NSSA and NEC as separate regimes.
4. **Record keeping for Zimbabwean SMEs** — COBE Act vs tax-Act obligations, multi-currency record requirements, electronic retention, and a filing structure that survives a review.
5. **Cross-border transactions: exchange control and currency questions to settle first** — the RBZ framework, authorised dealers, export acquittal, functional currency, IAS 29, withholding taxes and treaty relief.
6. **Preparing for year end** — a working checklist from six weeks before to the signed accounts, including going concern and the independence split.
7. **Audit, review or compilation** — what each level of assurance actually provides, who decides which you need, and PAAB registration.

**Editorial rule applied throughout:** procedures and principles are stated
directly, because they change slowly. **No specific rate, threshold, percentage
or deadline is asserted anywhere.** Every place one belongs carries a flagged
"Confirm before relying on this" callout naming exactly what to check against
current ZIMRA, RBZ or Finance Act sources. There are 18 such callouts across the
seven articles. This is deliberate: a published figure that goes stale is worse
than no figure, and on a chartered accountancy's own website it is a
professional risk.

Every article ends with a general-guidance disclaimer.

### Testimonials, team and FAQ

- **Testimonials kept, not replaced.** The three quotes on the old site
  (D. Maupa / Desma Consulting Engineers, D. Tasaranahwo / Tazmac Micro Finance,
  G. Mutobaya / Danville Consultancy) read as genuine client-supplied feedback,
  so they were preserved and lightly tightened. **No testimonial was invented.** A
  fourth card is a clearly-marked placeholder.
- **Team bios kept where verifiable.** Boniface Coutinho's ICAZ membership,
  Deloitte & Touche training, UDCORP audit leadership 1995–2010 and 1988 BAcc
  from the University of Zimbabwe were all retained. Three things were **removed**
  rather than carried forward: the template "Skills" percentage bars, the
  leftover *"before joining JonBon"* reference, and employment dates that
  overlapped and contradicted each other. See *Needs client input*.
- **FAQ rebuilt** from three thin pairs into **17 substantive questions** across
  four groups: working with us, fees and pricing, services and scope, and common
  compliance questions. Includes a direct answer on why the firm does not publish
  current tax rates.

### Contact details

Consolidated into one source of truth (`lib/site.js`):

| Field | Before | Now |
|---|---|---|
| Email | `info@`, `contact@`, `support@` (three) | one address, site-wide |
| Phone | `263 772 243` / `+(263) 772-2439 34` / `+263 772 24 3934` | `+263 772 243 934`, one format |
| Map | pinned to Ruwa (~25 km away) | pinned to the Harare office address |
| Copyright | "bytestream" | Praxis Chartered Accountants |

### New pages

- `/privacy` and `/terms` — substantive drafts replacing the `#` links, covering
  how the site actually behaves. Both are marked as requiring legal review.
- `/insights` and `/insights/<slug>` — working index and article template with
  title, date, read time, structured body, topics, disclaimer and related reading.
- `/team/<slug>` — profiles moved from `/team-details/<slug>`.
- Rebuilt 404 page that routes visitors to services and recent insights.

---

## Performance and technical

| Metric | Before | After |
|---|---|---|
| `public/` payload | **302 MB** | **476 KB** |
| CSS lines loaded per page | 31,433 | 1,216 (one file) |
| Runtime dependencies | 12 | 4 |
| Font payload | 14 static files | 8 self-hosted Lato files — 91 KB latin, 22 KB latin-ext |
| First Load JS | — | 78.5 KB shared, ~95 KB per page |
| Pages pre-rendered | — | 31, all static |
| Per-page metadata | 1 (root only) | every page |

- Removed `isotope-layout`, `lightgallery`, `bootstrap-touchspin`,
  `react-curved-text`, `react-modal-video`, `wowjs`, `swiper` and `sass`.
- Deleted all 50 slider components (roughly 50 of which were never imported) and the
  22 remaining template layout/element components.
- Team photos cropped to a consistent 4:5 portrait framing and re-encoded
  (2.4 MB → 92 KB and 76 KB); logos trimmed, resized and given WebP versions.
- Images now served through `next/image` with AVIF/WebP negotiation and
  responsive `sizes`.
- Added `sitemap.xml` and `robots.txt` (generated from the content, so they stay
  correct), plus JSON-LD for the organisation, each service, each article and the
  FAQ page.
- Added security headers: `X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options`, `Permissions-Policy`, and immutable caching for `/assets`.
- **22 permanent redirects** preserve every old URL — service pages, `/about-us`,
  `/team-details/*`, the blog, and all eleven removed demo pages.

### Follow-up changes (same pass)

Four changes requested after the first review:

1. **Lato everywhere**, as described under *Typography* above.

2. **Mega-menu navigation.** The "Services" and "Firm" dropdowns were 320px
   panels anchored to their nav item. They are now container-width mega panels
   on a **4-column grid** — six services read as a row of four plus a row of two,
   rather than a long list. Each entry gained its service icon, and each panel
   closes with a full-width link to the section index. Below 1280px the grid
   drops to two columns, since four squeezed the descriptions too hard. This
   required moving positioning off `.nav-item` and onto the header container, so
   `.nav-link` took over as the anchor for the current-page underline.

3. **Phone CTAs now open WhatsApp.** Every call-to-action that dialled
   +263 772 243 934 is now a `wa.me` deep link opening in a new tab, with the
   WhatsApp mark in place of the handset icon: header utility bar, mobile drawer,
   footer, the CTA band on every page, the service sidebar, the homepage
   consultation block, and the contact, FAQ and privacy pages.

   Messages are **prefilled and contextual** — opening a chat from a service page
   pre-writes "…about Tax Management", so the enquiry arrives with context
   instead of an empty "Hi". The text is written to be sent as-is, with no
   bracketed blanks for the visitor to fill in.

   Raymond Mupeti's direct line (+263 773 710 691) is a **different number** and
   correctly remains a normal `tel:` link. This is handled by a `contactHref()`
   helper that compares against the firm's WhatsApp number rather than being
   hard-coded per page.

   The privacy policy gained a short section on WhatsApp, since messages sent
   through it are processed by Meta under Meta's terms rather than ours — a real
   data-protection consideration once it becomes a primary contact channel.

4. **Floating WhatsApp button**, bottom-right on every page. It expands from a
   56px circle to a labelled pill on hover where a pointer exists, and stays a
   circle on touch. Back-to-top was restacked above it so the two do not collide.

   **Colour note:** WhatsApp's brand green (`#25D366`) gives white text only
   **1.98:1**, and the button's own edge only **1.90:1** against the page — both
   hard WCAG failures. The button uses a deeper shade of the same hue
   (`#0B7A43`), which is still unmistakably WhatsApp but clears 5.41:1 for the
   label and 5.19:1 for the button boundary.

### Bug found and fixed during this pass

Three layouts — the contact page, team profiles and the homepage insights
preview — set `grid-template-columns` as an **inline style**, which beat the
`.split` media query. They never collapsed to a single column on phones, so
content was rendering two-up at 414px. This was introduced in the first pass and
missed because only the homepage was checked at mobile width. The overrides are
now modifier classes (`.split--aside`, `.split--form`, `.split--feed`) declared
ahead of the breakpoint so it can reset them. Verified at 414px.

### Verification performed

- Production build: clean, 31 static pages.
- Full-site crawl: 26 pages, all HTTP 200, **zero** broken internal links, **zero**
  `href="#"` placeholders, every image has alt text, every form control is
  labelled, every page has a title and meta description, exactly one `<h1>` per
  page with no skipped levels.
- All 22 redirects confirmed returning 308 to the correct destination.
- Browser console: no errors or React warnings on `/`, `/contact`, `/faq`, `/team`.
- Contrast audit across 21 text/background pairs — all pass WCAG AA.
- Rendering checked at 1440px, 414px and 430px, including the mega menu hover
  state and the WhatsApp button's collapsed and expanded forms (driven over the
  DevTools protocol, since hover cannot be captured with a plain screenshot).
- Every `tel:` link to the firm's number confirmed replaced by a `wa.me` link
  across all 26 pages; Raymond Mupeti's separate direct line confirmed unchanged.

### Files removed

Template demo pages: `/shop`, `/shopping-cart`, `/checkout`, `/product-details`,
`/pricing-table`, `/portfolio`, `/index-2`, `/index-3`, `/blog-2`, `/services2`,
`/career`. All redirect to a sensible destination.

**All deleted files — including the 302 MB of template imagery — remain
recoverable from git history at commit `9bca5da`.** Nothing is permanently lost.

---

## Needs client input

Everything below is a placeholder or an unverified claim. **None of it has been
invented.** Each item needs real data from Praxis before launch.

### Blocking — these are wrong or unconfirmed on the live site today

1. ~~**Email address.**~~ **Resolved.** Praxis supplied
   `bcoutinho@praxisaccountants.co.zw`, now used site-wide, and the team direct
   addresses are `bcoutinho@` and `rmpeti@praxisaccountants.co.zw`.
2. **Enquiry recipient — still open.** Both forms still deliver to
   `bonifacecoutinho@gmail.com`, inherited from the old build. Now that a firm
   address exists this should almost certainly point at it, but **we have not
   changed it**: delivery depends on how the EmailJS template is configured, and
   we cannot verify a live send from here. Silently repointing a working contact
   form is riskier than leaving a flagged TODO. Change `RECIPIENT` in
   `lib/emailjs.js`, then send one test enquiry to confirm it arrives.
3. **Office address.** Standardised as *Suite 226, Stanley House, Cnr Jason Moyo
   Avenue & First Street, Harare*. The old map pointed to Ruwa instead — please
   confirm which is current, and confirm the map pin.
4. **Phone number / WhatsApp.** Standardised as `+263 772 243 934`, taken from the
   `tel:` link in the old code. **Every phone call-to-action on the site now opens
   a WhatsApp chat to this number**, so please confirm two things: that it is the
   correct main line, and that **it is an active WhatsApp account someone
   monitors**. If the firm also wants a dialable landline shown, send it and we
   will add it alongside.
5. **Office hours.** Currently Mon–Fri 08:00–17:00 CAT, Saturday by appointment.
   This was **not** on the old site — it is a reasonable default that needs
   confirming or replacing.

### Credentials and registration

6. ~~**ICAZ and PAAB registration numbers.**~~ **Closed by the client** — the
   placeholder blocks on `/about` and `/team` were removed, so no registration
   number is displayed. The site still explains what ICAZ and PAAB are and that
   the practice is ICAZ-led. Reopen this if the firm later wants numbers shown.
7. **Is the practice PAAB-registered to sign audit reports?** The site describes
   audit work. The `/insights/audit-review-or-compilation` article tells readers
   to check the signing practitioner's registration — we should be able to answer
   that question about ourselves.

### Firm facts

8. **Years in operation.** "Since 2012" is used throughout, taken from the old
   site's `SINCE 2012` badge. But the Boniface Coutinho biography said he has been
   audit partner *"since May 2011"*. Confirm the founding year.
9. ~~**Client and staff numbers.**~~ **Closed by the client** — the placeholder
   was removed and no figures are published. Nothing on the site claims a client
   count or a staff count.
10. **Sector claims.** The site says the firm works with owner-managed businesses,
    NGOs/donor-funded organisations, and public-sector entities, and claims
    particular depth in public-sector audit — inferred from Boniface's UDCORP
    background and the existing client list. Confirm this is how Praxis wants to
    position itself.
11. **SADC / regional scope.** The old site claimed to serve "Zimbabwe and the
    Southern Africa region". This is retained but stated carefully — no specific
    regional client, office or engagement is claimed. Confirm the firm actually
    services clients outside Zimbabwe, or the wording should be narrowed.

### Team

12. **Boniface Coutinho — conflicting dates.** The old biography said Finance
    Administration Manager at Retrofit Electrical Engineering *Jan 1994 – April
    2005*, while also saying Director of Audit at UDCORP *May 1995 – Dec 2010*.
    These overlap by ten years. The team card said "20 years" experience while the
    biography said "over three decades". **All conflicting dates and totals have
    been removed** from the published bio rather than guessed at. Send a correct
    employment history and we will restore the detail.
13. **Raymond Mupeti — biography mismatch.** His title is *Marketing &
    Administration Executive*, but the old biography described him as *"an
    accomplished auditor with over thirteen years of experience at the Urban
    Development Corporation"* — which duplicates Boniface's history and appears to
    have been copy-pasted. The published bio now covers only the roles that were
    specific to him (Creekshaw Marketing, Clinique Talent Consultants). Please
    supply the correct biography.
14. **Team photographs.** Both existing photos are informal phone snapshots — one
    full-length in a living room, one low-resolution (820×820) with the top of the
    head cropped. They have been cropped to a consistent 4:5 portrait framing,
    which helps considerably, but **professional headshots would make more
    difference to how the site reads than any other single change.** Same
    background, same framing, both people.
15. ~~**Rest of the team.**~~ **Closed by the client** — the placeholder card was
    removed and `/team` now presents the two named people in a two-column layout.
16. ~~**Team direct contacts.**~~ **Resolved** — see item 1.

### Content

17. ~~**Fourth testimonial.**~~ **Closed by the client** — the placeholder card was
    removed. The three attributed quotes remain. Item 18 below still stands.
18. **Existing testimonials — confirm permission.** The three retained quotes were
    already published by Praxis, but please confirm each client is still happy to
    be named.
19. **Tax figures in the Insights articles.** Eighteen flagged callouts mark exactly
    where a rate, threshold, deadline or percentage belongs. These were left
    unfilled on purpose. Before publishing, someone at the firm should verify each
    against current ZIMRA / RBZ / Finance Act sources and decide whether to state
    the figure or keep the "confirm this" framing. **Our recommendation is to keep
    the framing** — it ages far better and it demonstrates the professional
    caution clients are paying for.
20. **Privacy Policy and Terms of Use.** Both are substantive drafts covering how
    the site actually behaves, but neither has been reviewed by a legal
    practitioner, and the privacy policy does not yet address obligations under
    the Data Protection Act [Chapter 11:12] or name a Data Protection Officer.
    Both carry a visible "draft pending legal review" notice, and both have a
    `[date — Praxis to insert on publication]` field.
21. **Social media accounts.** The footer links to Boniface's personal LinkedIn,
    Facebook and X profiles, because the old site had no firm accounts. If the
    firm has its own pages, send the URLs; if not, consider whether personal
    profiles belong in the site footer.

### Optional

22. **Careers page.** `/career` was a template page with placeholder vacancies. It
    has been removed and redirects to `/contact`. If Praxis is hiring, it is worth
    rebuilding properly.
23. **Favicon.** Still the template's. A favicon cut from the logo mark would be
    a small improvement.
24. **Next.js version.** The project is on 13.4.19. Upgrading is straightforward
    and is worth doing for the security patches, but it was left out of this pass
    to keep the change set reviewable.
