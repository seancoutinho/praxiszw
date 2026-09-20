/**
 * Praxis Insights — client-supplied batches 1 and 2 (ten articles).
 *
 * Source: "praxis-insights-batch-1.pdf" and "praxis-insights-batch-2.pdf",
 * supplied by Praxis. The copy is the client's; this file only restructures it
 * into the block format components/ui/ArticleBody.js renders.
 *
 * Conversions applied:
 *   "Summary:"                      → excerpt
 *   "Confirm against current sources" → { t: 'verify' }
 *   "How Praxis can help"           → closing callout
 *   Monetary examples               → left as written, flagged illustrative
 *
 * Dates are spread at roughly three-week intervals across March–September 2026,
 * filling the gap between the existing February and August 2026 articles.
 * Read times are the client's stated 3 minutes. The word-count estimate gives
 * 1–2 minutes for these list-heavy pieces, so they are imported as overrides.
 *
 * SEED DATA ONLY — imported once with `npm run cms:seed-batch-2`, after which
 * these articles live in MongoDB and are edited at /studio. Delete this file
 * once the import is confirmed.
 */

const insights = [
  /* ------------------------------------------------------------------ 1 */
  {
    slug: 'zimra-audit-notice-first-seven-days',
    title: 'Received a ZIMRA audit notice? Your first seven days',
    seoTitle: 'Responding to a ZIMRA Audit Notice',
    metaDescription:
      'What to do in the first week after a ZIMRA audit notice: establish the scope, secure records, reconcile before ZIMRA does, and respond in writing.',
    excerpt:
      'A ZIMRA audit notice is stressful, but a calm, organised first week usually decides how the audit ends. Here is what to do, day by day.',
    date: '2026-03-06',
    readTime: 3,
    category: 'Tax compliance',
    tags: ['ZIMRA', 'Tax audit', 'Compliance', 'Record keeping'],
    body: [
      { t: 'p', c: 'A notice from ZIMRA does not mean you have done something wrong. Audits are triggered by risk profiling, industry reviews, refund claims and data mismatches as often as by suspicion. What matters is how you respond in the first week.' },

      { t: 'h2', c: 'Day 1: Read the notice carefully' },
      { t: 'p', c: 'Note which tax types are covered — income tax, VAT, PAYE or all of them — which periods are under review, what documents are requested, and the response deadline. A desk review, a verification and a full field audit carry different demands, so establish which one you are facing.' },

      { t: 'h2', c: 'Day 2: Appoint one point of contact' },
      { t: 'p', c: 'Route every communication through one person, and involve your accountant or tax adviser immediately. Inconsistent answers from different staff members create avoidable problems.' },

      { t: 'h2', c: 'Day 3: Secure your records' },
      { t: 'p', c: 'Do not delete, alter or “tidy” anything. Collect the returns filed for the periods in question, general ledgers, bank statements, sales and purchase invoices, payroll records, contracts and import documents.' },

      { t: 'h2', c: 'Days 4 and 5: Reconcile before ZIMRA does' },
      { t: 'p', c: 'Test your own position first:' },
      {
        t: 'ul',
        items: [
          'Do VAT returns agree to the ledger and to invoices?',
          'Does PAYE remitted agree to payroll?',
          'Does declared income agree to bank deposits?',
          'If you trade in USD and ZiG, are conversions documented and consistent?',
        ],
      },
      { t: 'p', c: 'Differences are common and often have innocent explanations, but only if you can show them.' },

      { t: 'h2', c: 'Day 6: Quantify your exposure' },
      { t: 'p', c: 'If the reconciliation reveals errors, work out the tax, penalties and interest involved. Where the error is yours, discuss with your adviser whether a voluntary disclosure before the audit progresses is the better route.' },

      { t: 'h2', c: 'Day 7: Respond in writing' },
      { t: 'p', c: 'Send a clear, indexed response covering exactly what was requested, no more and no less. If you need more time, request an extension in writing before the deadline, not after. Keep a log of every call, meeting and document submitted.' },

      { t: 'h2', c: 'A few things not to do' },
      {
        t: 'ul',
        items: [
          'Do not ignore the notice or miss the deadline.',
          'Do not submit unreviewed documents, or verbal explanations you cannot support.',
          'Do not backdate or create records after the fact.',
          'Do not pay an assessment without understanding it. Objection and appeal rights carry strict time limits.',
        ],
      },

      { t: 'verify', c: 'Response periods, objection deadlines and penalty rates are set by the tax Acts and ZIMRA practice notes, and change with the Finance Act. Check the current position before relying on any figure.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We handle ZIMRA audits and reviews from first notice to final agreement, including reconciliations, responses and negotiations. If you have received a notice, message us on WhatsApp for a free 30-minute review of what you are facing and what to do next.' },
    ],
  },

  /* ------------------------------------------------------------------ 2 */
  {
    slug: 'thirteen-week-cash-flow-forecast',
    title: 'The 13-week cash flow forecast: why profitable businesses still run out of cash',
    seoTitle: 'The 13-Week Cash Flow Forecast',
    metaDescription:
      'Profit is an accounting result; cash pays salaries. How to build and maintain a rolling 13-week cash flow forecast, and what to do when it shows a gap.',
    excerpt:
      'Profit is an accounting result. Cash is what pays salaries. A rolling 13-week forecast shows problems while you can still fix them.',
    date: '2026-03-27',
    readTime: 3,
    category: 'Advisory',
    tags: ['Cash flow', 'Forecasting', 'Working capital', 'SMEs'],
    body: [
      { t: 'p', c: 'Many businesses that fail were profitable on paper. They ran out of cash because customers paid late, stock absorbed funds, or a tax payment fell due in the same week as payroll. A 13-week cash flow forecast, which covers one quarter and rolls forward weekly, is the simplest tool for seeing this coming.' },

      { t: 'callout', title: 'Profit versus cash: a worked example', c: 'Your business sells USD 60,000 of goods in a month and earns a USD 10,000 profit. But customers pay after 60 days, and you pay suppliers and staff within 30. In month one you have spent USD 50,000 and collected almost nothing. The profit is real, but the bank account is empty. The figures here are illustrative.' },

      { t: 'h2', c: 'How to build it' },
      {
        t: 'ol',
        items: [
          'Start with your actual opening bank balance in each currency you hold. Keep USD and ZiG on separate lines.',
          'Forecast receipts by week. Use when customers actually pay, not when you invoice. Go customer by customer for your largest debtors.',
          'List every payment by week. Include payroll, PAYE, VAT, rent, suppliers, loan repayments, insurance, equipment purchases and quarterly tax payments (QPDs).',
          'Calculate the closing balance each week and carry it forward as next week’s opening balance.',
          'Flag the weeks where the balance dips below your minimum buffer. These are your decision points.',
        ],
      },

      { t: 'h3', c: 'Keep it simple' },
      { t: 'p', c: 'A spreadsheet with weeks across the top and receipt and payment categories down the side is enough. Accuracy over the next four weeks matters more than precision in weeks ten to thirteen.' },

      { t: 'h3', c: 'Update it weekly' },
      { t: 'p', c: 'Replace the forecast with actuals for the week just ended, add a new week 13, and note where you were wrong. Over time this shows you which assumptions, such as customer payment days, you consistently misjudge.' },

      { t: 'h2', c: 'What to do when the forecast shows a gap' },
      {
        t: 'ul',
        items: [
          'Speed up collections: follow up, offer settlement discounts, or invoice earlier.',
          'Negotiate supplier terms before you are in difficulty, not after.',
          'Time discretionary purchases outside tight weeks.',
          'Arrange short-term funding early. Lenders respond better to a forecast than to an emergency.',
        ],
      },

      { t: 'h2', c: 'For public entities' },
      { t: 'p', c: 'The same tool works for entities that depend on treasury releases or grants. Mapping expected disbursements against fixed obligations shows how long the entity can operate if funds arrive late.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We build 13-week forecasts tailored to your business and train your team to maintain them. Book a consultation and we will set up your first forecast with you, using your own numbers.' },
    ],
  },

  /* ------------------------------------------------------------------ 3 */
  {
    slug: 'procurement-compliance-audit-findings',
    title: 'Procurement compliance: the audit findings public entities repeat every year',
    seoTitle: 'Procurement Compliance Findings',
    metaDescription:
      'The procurement weaknesses that appear year after year in audits of Zimbabwean public entities, why they matter, and the practical fixes that close them.',
    excerpt:
      'The same procurement weaknesses appear year after year in audits of public entities. Most are fixable with documentation and discipline.',
    date: '2026-04-17',
    readTime: 3,
    category: 'Public sector',
    tags: ['Procurement', 'PRAZ', 'Public entities', 'Audit findings', 'Internal controls'],
    body: [
      { t: 'p', c: 'Procurement is one of the highest-risk areas for government-linked entities, and one of the most frequently qualified in audit reports. Entities governed by the Public Procurement and Disposal of Public Assets Act, and regulated by the Procurement Regulatory Authority of Zimbabwe (PRAZ), must be able to show not just that they bought well, but that they followed the required process.' },

      { t: 'h2', c: 'The findings we see most often' },
      {
        t: 'ul',
        items: [
          'No approved procurement plan. Purchases happen ad hoc, so the entity cannot show that needs were planned and budgeted.',
          'Order splitting. A large purchase is divided into smaller ones to stay under an approval threshold.',
          'Insufficient quotations or bids. Files contain fewer quotes than required, or quotes from suppliers who appear connected.',
          'Unjustified single sourcing. Direct procurement without documented justification or the necessary approval.',
          'Weak evaluation records. Committee scoring sheets missing, unsigned, or inconsistent with the award decision.',
          'Undeclared conflicts of interest. No declarations from committee members.',
          'Contract variations without approval. Scope or price increases agreed informally.',
          'Payment before confirmed delivery. Invoices settled without a goods received note or completion certificate.',
          'Missing files. The audit team asks for the procurement file and it is incomplete or cannot be found.',
        ],
      },

      { t: 'h2', c: 'Why it matters' },
      { t: 'p', c: 'Beyond audit qualifications, weak procurement exposes the entity to overpricing, fraud, disputes with unsuccessful bidders, and personal accountability for officers and board members.' },

      { t: 'h2', c: 'Practical fixes' },
      {
        t: 'ol',
        items: [
          'Build an annual procurement plan aligned to the approved budget, and get it approved at the start of the year.',
          'Use a standard file checklist for every procurement: requisition, approval, quotes or bids, evaluation, award, contract, delivery, payment.',
          'Separate duties. The person who requests should not approve, receive goods and pay.',
          'Keep a contract register showing value, variations, dates and payment status.',
          'Require conflict declarations at the start of every evaluation.',
          'Do a quarterly internal review of a sample of files, and fix gaps before the auditors find them.',
        ],
      },

      { t: 'verify', c: 'Procurement thresholds, method requirements and approval limits are set by the Act, its regulations and PRAZ circulars, and are updated from time to time. Confirm the current limits that apply to your entity.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We carry out procurement compliance reviews for public entities, testing your files against requirements and giving you a prioritised action list before your audit. Contact us to arrange a review of a sample of your procurement files.' },
    ],
  },

  /* ------------------------------------------------------------------ 4 */
  {
    slug: 'internal-control-gaps-public-sector',
    title: 'Ten internal control gaps found in most public sector audits',
    seoTitle: 'Internal Control Gaps: Checklist',
    metaDescription:
      'A ten-point internal control self-assessment for public entities, local authorities and parastatals, with scoring and the controls to fix first.',
    excerpt:
      'Weak controls are the root cause of most audit findings and most losses. This checklist helps your board and management see where you stand.',
    date: '2026-05-08',
    readTime: 3,
    category: 'Public sector',
    tags: ['Internal controls', 'Self-assessment', 'Public entities', 'Audit readiness', 'Governance'],
    body: [
      { t: 'p', c: 'Internal controls are the everyday routines that protect an entity’s money, assets and information. When they are weak, errors go unnoticed, fraud becomes easier and audits become harder. The same gaps appear across public entities, local authorities and parastatals.' },

      { t: 'h2', c: 'Self-assessment: answer yes or no' },
      {
        t: 'ol',
        items: [
          'Bank reconciliations: are all bank accounts reconciled monthly, reviewed and signed by someone other than the preparer?',
          'Segregation of duties: are the tasks of authorising, recording, and handling cash or assets done by different people?',
          'Revenue collection: is all revenue receipted, banked intact and promptly, and reconciled to expected income?',
          'Payment approval: does every payment have supporting documents and an independent authoriser?',
          'Payroll: is the payroll reviewed monthly against the approved staff establishment, with changes authorised in writing?',
          'Asset register: is there a complete fixed asset register, verified by a physical count at least annually?',
          'Budget control: are actual results compared to budget monthly, with variances explained and expenditure above budget approved?',
          'Debtors and creditors: are balances reconciled and aged regularly, with follow-up on overdue amounts?',
          'System access: are accounting system users limited to what their role requires, with leavers removed promptly?',
          'Oversight: does the board or audit committee receive and act on financial and internal audit reports each quarter?',
        ],
      },

      { t: 'h2', c: 'Scoring' },
      {
        t: 'table',
        head: ['Yes answers', 'What it means'],
        rows: [
          ['9 to 10', 'Your foundations are sound. Test that these controls operate in practice, not just on paper.'],
          ['6 to 8', 'There are gaps that an auditor will find. Prioritise the ones covering cash and payments.'],
          ['5 or fewer', 'Your entity is exposed. A structured control review is advisable soon.'],
        ],
      },

      { t: 'h2', c: 'Why a “yes” needs evidence' },
      { t: 'p', c: 'Many entities have a policy for each item but cannot show it operating. Signed reconciliations, approval trails and minutes are what convince auditors, and they protect officers if something goes wrong.' },

      { t: 'h2', c: 'Start with the cash controls' },
      { t: 'p', c: 'If you can only fix a few things this quarter, focus on items 1, 3 and 4. Most fraud in small and mid-sized entities involves cash receipts or payments.' },

      { t: 'callout', title: 'How Praxis can help', c: 'Our control reviews test how your controls actually work, rank the gaps by risk and give management a practical remediation plan. Book a consultation to have us assess your entity against this checklist.' },
    ],
  },

  /* ------------------------------------------------------------------ 5 */
  {
    slug: 'loan-ready-in-30-days',
    title: 'Loan-ready in 30 days: what banks and funders expect to see',
    seoTitle: 'Loan-Ready in 30 Days',
    metaDescription:
      'A four-week plan to prepare a funding application: current records, tax compliance, forecasts a lender will believe, and the pack that ties them together.',
    excerpt:
      'Most loan applications fail on preparation, not on the strength of the business. Here is what lenders look for, and how to get it in order within a month.',
    date: '2026-05-29',
    readTime: 3,
    category: 'Advisory',
    tags: ['Funding', 'Bank finance', 'Cash flow', 'Tax clearance', 'SMEs'],
    body: [
      { t: 'p', c: 'Lenders are not only judging your idea. They are judging whether they can trust your numbers and whether you can repay. A business that presents a clean, complete pack is treated very differently from one that produces documents in pieces.' },

      { t: 'h2', c: 'Week 1: Get your financial records current' },
      {
        t: 'ul',
        items: [
          'Books written up to the latest month end, with bank accounts reconciled.',
          'The last two to three years of annual financial statements, ideally signed off by a chartered accountant.',
          'Current management accounts showing year-to-date performance.',
          'A schedule of debtors, creditors and existing loans.',
        ],
      },

      { t: 'h2', c: 'Week 2: Get your compliance in order' },
      {
        t: 'ul',
        items: [
          'Valid ZIMRA tax clearance and up-to-date returns.',
          'Company registration documents, and shareholder and director details.',
          'Licences and permits relevant to your industry.',
          'Evidence that PAYE and other statutory payments are current.',
        ],
      },
      { t: 'p', c: 'Lenders often decline an otherwise sound application because of a tax compliance gap. It is easier to fix it before you apply.' },

      { t: 'h2', c: 'Week 3: Build the forward-looking numbers' },
      {
        t: 'ul',
        items: [
          'A 12-month cash flow forecast showing how the loan will be drawn and repaid.',
          'A short profit forecast with clear assumptions.',
          'A repayment analysis: can your cash flow cover the instalments with room to spare? Lenders typically want to see a comfortable margin, not just break-even.',
        ],
      },

      { t: 'h2', c: 'Week 4: Package it' },
      {
        t: 'ul',
        items: [
          'A two-page business summary covering what you do, who your customers are, why you need the funds and how they will be used.',
          'The loan amount, term and security you can offer.',
          'A schedule of assets available as collateral, with proof of ownership.',
          'Customer contracts, purchase orders or quotations that support your projections.',
        ],
      },

      { t: 'h2', c: 'Common reasons applications are declined' },
      {
        t: 'ul',
        items: [
          'Records that are out of date, or that don’t reconcile.',
          'Projections with no stated assumptions.',
          'Loan requests that do not match the business’s ability to repay.',
          'Undeclared existing debt.',
          'Outstanding tax or statutory issues.',
        ],
      },

      { t: 'callout', title: 'A word on currency', c: 'State clearly whether you are requesting funds in USD or ZiG, and show how your income currency matches your repayment currency. A mismatch is a risk lenders will ask about.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We prepare funding packs for SMEs, including forecasts, financial statements and lender presentations. Book a consultation for a free readiness check, and we will tell you honestly what a lender would flag before you apply.' },
    ],
  },

  /* ------------------------------------------------------------------ 6 */
  {
    slug: 'deductions-capital-allowances-smes-miss',
    title: 'Deductions and capital allowances SMEs commonly miss',
    seoTitle: 'Deductions SMEs Commonly Miss',
    metaDescription:
      'Capital allowances, bad debts, interest, assessed losses and the other claims Zimbabwean SMEs overlook — and the records needed to support them.',
    excerpt:
      'Many businesses pay more income tax than they need to, simply because they don’t claim what the law allows. Here are the areas most often overlooked.',
    date: '2026-06-19',
    readTime: 3,
    category: 'Tax compliance',
    tags: ['Income tax', 'Capital allowances', 'Deductions', 'Record keeping', 'SMEs'],
    body: [
      { t: 'p', c: 'The aim of good tax planning is not to avoid tax. It is to pay exactly what is due and no more. In practice, SMEs often overpay because expenses are not recorded properly, or because assets and allowances are never claimed.' },

      { t: 'callout', title: 'The general test', c: 'An expense is normally deductible if it was incurred in the production of income and is not of a capital nature. Personal or private expenses are not. Documents matter as much as the rule: no supporting document, no safe deduction.' },

      { t: 'h2', c: 'Areas commonly missed' },
      {
        t: 'ol',
        items: [
          'Capital allowances. When you buy equipment, vehicles or machinery, the cost is not deducted in one go but is generally recovered through allowances over time. Many small businesses either expense these items incorrectly or never claim the allowance. Keep a fixed asset register with purchase dates and costs.',
          'Bad debts. Debts that have genuinely become irrecoverable may be deductible, but you need to show that you took reasonable steps to collect. Keep a record of reminders and follow-up.',
          'Interest on business borrowing. Interest on funds used to earn business income is often deductible. Keep loan agreements and evidence of how the funds were used.',
          'Staff costs. Salaries, employer contributions and certain staff training costs are commonly deductible, provided payroll and PAYE compliance is in order.',
          'Assessed losses. A tax loss in one year can often be carried forward against future profits, subject to conditions. Many businesses do not track these properly.',
          'Repairs and maintenance. These are generally deductible, but improvements that add to an asset’s value are treated differently. Record what the spend actually achieved.',
          'Professional fees. Audit, accounting and some legal fees related to running the business are often deductible.',
        ],
      },

      { t: 'h2', c: 'Where SMEs go wrong in the other direction' },
      { t: 'p', c: 'Claiming personal expenses, owner’s drawings or unsupported cash payments as business costs can trigger penalties and interest. The safest approach is complete records and a clear line between business and personal spending.' },

      { t: 'h2', c: 'Multi-currency issues' },
      { t: 'p', c: 'If you trade in USD and ZiG, expenses must be translated consistently and documented. Inconsistent conversion is a common source of disputes.' },

      { t: 'verify', c: 'Rates and rules for capital allowances, incentives, loss carry-forward and deductibility limits are set by the Income Tax Act and amended through the Finance Act. Confirm the current position for your circumstances.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We review your last returns to identify overpaid tax and missed claims, and we set up records so nothing is missed going forward. Message us on WhatsApp to arrange a free tax health check.' },
    ],
  },

  /* ------------------------------------------------------------------ 7 */
  {
    slug: 'warning-signs-of-fraud-small-business',
    title: 'Warning signs of fraud in a small business',
    seoTitle: 'Fraud Warning Signs for SMEs',
    metaDescription:
      'The behavioural, numerical and documentary red flags that point to fraud in a small business, the controls that prevent it, and what to do if you suspect it.',
    excerpt:
      'Most small business fraud is committed by someone the owner trusts. These red flags help you notice it early.',
    date: '2026-07-10',
    readTime: 3,
    category: 'Forensic and risk',
    tags: ['Fraud', 'Internal controls', 'Forensic audit', 'SMEs'],
    body: [
      { t: 'p', c: 'Fraud in small businesses rarely looks dramatic. It is usually a slow, quiet leak, and it typically goes unnoticed because owners are busy and trust the people closest to the money.' },

      { t: 'h2', c: 'Why small businesses are vulnerable' },
      {
        t: 'ul',
        items: [
          'One person often handles receipts, payments and records.',
          'Owners are stretched and review little.',
          'Informal controls and cash-heavy operations.',
          'Trust replaces checking.',
        ],
      },

      { t: 'h2', c: 'Red flags in behaviour' },
      {
        t: 'ul',
        items: [
          'An employee who never takes leave, or won’t let anyone cover their duties.',
          'Reluctance to share information or documents.',
          'A lifestyle that doesn’t match a salary.',
          'Defensiveness when questioned about routine matters.',
          'Close relationships with certain suppliers or customers.',
        ],
      },

      { t: 'h2', c: 'Red flags in the numbers' },
      {
        t: 'ul',
        items: [
          'Cash sales falling while other indicators stay the same.',
          'Stock shortages that can’t be explained.',
          'Suppliers you don’t recognise, or duplicate payments.',
          'Round-figure or just-below-approval-limit payments.',
          'Growing debtors with no clear reason.',
          'Expenses that rise faster than sales.',
          'Bank reconciliations that are late, or full of old items.',
        ],
      },

      { t: 'h2', c: 'Red flags in documents' },
      {
        t: 'ul',
        items: [
          'Missing, photocopied or altered invoices.',
          'Journal entries without explanation.',
          'Payroll names you cannot match to real staff.',
        ],
      },

      { t: 'h2', c: 'What to do now' },
      {
        t: 'ol',
        items: [
          'Separate duties. Whoever handles cash should not also record it or reconcile the bank.',
          'Review the bank statement yourself each month, not just the summary.',
          'Require two approvals for payments above a set limit.',
          'Rotate tasks and enforce leave so problems surface.',
          'Count stock and cash unannounced from time to time.',
          'Give staff a way to report concerns confidentially.',
        ],
      },

      { t: 'callout', title: 'If you suspect fraud', c: 'Do not confront the person immediately. Secure records and bank access, limit further exposure, and take advice before acting. Poorly handled investigations can destroy evidence and weaken any later legal or disciplinary process.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We carry out control reviews, fraud risk assessments and forensic investigations that produce evidence-grade reports. If something doesn’t look right, contact us for a confidential conversation.' },
    ],
  },

  /* ------------------------------------------------------------------ 8 */
  {
    slug: 'effective-audit-committee-public-entity',
    title: 'What makes an audit committee effective in a public entity',
    seoTitle: 'Effective Audit Committees',
    metaDescription:
      'What an audit committee in a parastatal, state-owned enterprise or local authority is there to do, the traits of effective ones, and the signs of a weak one.',
    excerpt:
      'An audit committee that only meets to tick a box adds cost without value. Here is what separates effective committees from ceremonial ones.',
    date: '2026-07-31',
    readTime: 3,
    category: 'Public sector',
    tags: ['Governance', 'Audit committee', 'Boards', 'Public entities'],
    body: [
      { t: 'p', c: 'For parastatals, state-owned enterprises and local authorities, the audit committee is the board’s main tool for overseeing financial reporting, risk and controls. Its effectiveness has a direct influence on audit outcomes, and on how well the entity is run.' },

      { t: 'h2', c: 'What an audit committee is there to do' },
      {
        t: 'ul',
        items: [
          'Oversee the integrity of financial reporting.',
          'Review the adequacy of internal controls and risk management.',
          'Oversee internal audit and monitor the external audit.',
          'Follow up on audit findings until they are closed.',
          'Monitor compliance with laws, regulations and policies.',
        ],
      },

      { t: 'h2', c: 'Traits of effective committees' },
      {
        t: 'ol',
        items: [
          'Independent, competent members. At least one member should have real financial expertise, and members should not have operational or personal interests in matters the committee reviews.',
          'A clear charter. Written terms of reference, approved by the board, defining responsibilities, meeting frequency and reporting lines.',
          'Regular meetings with a real agenda. Committees meeting quarterly at minimum, with papers circulated in advance so members arrive prepared.',
          'Direct access to auditors. Internal and external auditors should be able to speak to the committee without management present.',
          'A tracker for findings. Every audit finding should have an owner and a due date, and the committee should review progress at each meeting.',
          'Willingness to challenge. Members ask questions about unusual transactions, delayed reports and repeat findings, and minute the answers.',
        ],
      },

      { t: 'h2', c: 'Signs of a weak committee' },
      {
        t: 'ul',
        items: [
          'Meetings postponed or shortened repeatedly.',
          'Papers tabled at the meeting itself.',
          'The same audit findings appearing year after year.',
          'Management dominating discussions.',
          'Minutes that record attendance but not debate.',
        ],
      },

      { t: 'h2', c: 'What the board should do' },
      {
        t: 'ul',
        items: [
          'Assess the committee’s composition and skills annually.',
          'Ensure it is resourced and has access to information.',
          'Read its reports and act on its recommendations.',
        ],
      },

      { t: 'verify', c: 'Governance requirements for public entities, including committee composition and reporting, are set out in the applicable corporate governance legislation and codes, and have been evolving. Confirm what applies to your entity.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We support boards and audit committees through effectiveness reviews, charter drafting, training and follow-up on audit findings. Contact us to book a short governance health check.' },
    ],
  },

  /* ------------------------------------------------------------------ 9 */
  {
    slug: 'audited-financial-statements-on-time',
    title: 'Getting audited financial statements out on time',
    seoTitle: 'Audited Statements, On Time',
    metaDescription:
      'Why annual financial statements run late, and a timetable — from three months before year end through to the audit itself — that keeps them on schedule.',
    excerpt:
      'Late financial statements are one of the most common problems in the public sector and among SMEs. Most delays are predictable, and therefore avoidable.',
    date: '2026-09-04',
    readTime: 3,
    category: 'Assurance',
    tags: ['Year end', 'Audit readiness', 'Financial statements', 'Deadlines'],
    body: [
      { t: 'p', c: 'Late accounts create real costs: funders withhold money, lenders lose confidence, regulators raise queries, and boards make decisions without reliable information. For public entities they often attract adverse attention. For SMEs they can hold up loans, tenders and tax clearance.' },

      { t: 'h2', c: 'Why accounts are late' },
      {
        t: 'ul',
        items: [
          'Records not written up during the year, so the year-end becomes a rebuild.',
          'Bank and control account reconciliations incomplete.',
          'Missing documents and unsupported transactions.',
          'No agreed timetable between management and auditors.',
          'Key staff unavailable, or unclear on roles.',
          'Late adjustments and disagreements over accounting treatments.',
          'Auditors appointed late.',
        ],
      },

      { t: 'h2', c: 'A workable plan' },

      { t: 'h3', c: 'Three months before year end' },
      {
        t: 'ul',
        items: [
          'Agree the audit timetable with your auditors in writing.',
          'Appoint someone accountable for delivery.',
          'Identify known problem areas, such as unreconciled balances or missing documents.',
        ],
      },

      { t: 'h3', c: 'During the last month' },
      {
        t: 'ul',
        items: [
          'Clear old reconciling items.',
          'Plan stock counts and asset verification.',
          'Confirm balances with major debtors, creditors and banks.',
        ],
      },

      { t: 'h3', c: 'Within four weeks after year end' },
      {
        t: 'ul',
        items: [
          'Close the books and complete all reconciliations.',
          'Prepare the schedules your auditors will request.',
          'Draft the financial statements and disclosure notes.',
        ],
      },

      { t: 'h3', c: 'During the audit' },
      {
        t: 'ul',
        items: [
          'Respond to queries within a set number of days.',
          'Hold short weekly progress meetings.',
          'Resolve disagreements early.',
        ],
      },

      { t: 'h2', c: 'Keep the year-end a formality' },
      { t: 'p', c: 'The single biggest improvement is keeping books current all year. Monthly reconciliations and management accounts mean the year-end is a review rather than a rescue.' },

      { t: 'callout', title: 'For boards and owners', c: 'Ask for a timetable and status update each month. If deadlines slip, ask why now, not after the due date has passed.' },

      { t: 'verify', c: 'Statutory filing and reporting deadlines are set by the Companies and Other Business Entities Act, public finance legislation and, where relevant, funder agreements. Confirm the deadlines that apply to you.' },

      { t: 'callout', title: 'How Praxis can help', c: 'We prepare annual financial statements, coordinate audit readiness and can put a year-end timetable in place before your next reporting date. Book a consultation and we will map your route to on-time accounts.' },
    ],
  },

  /* ------------------------------------------------------------------ 10 */
  {
    slug: 'preparing-for-the-national-budget',
    title: 'The national budget is coming: how to prepare your business or entity',
    seoTitle: 'Preparing for the National Budget',
    metaDescription:
      'What to watch for in the national budget statement, how to prepare before it is presented, and why only the enacted Finance Act should drive your decisions.',
    excerpt:
      'Budget announcements affect tax, costs and funding. Preparing before the statement lets you respond quickly rather than react late.',
    date: '2026-09-18',
    readTime: 3,
    category: 'Advisory',
    tags: ['National budget', 'Finance Act', 'Planning', 'ZIMRA'],
    body: [
      { t: 'p', c: 'The national budget statement is normally presented in the last quarter of the year and is followed by the Finance Act, which turns proposals into law. For SMEs it can change tax obligations and costs. For public entities it shapes funding allocations and expectations. Businesses that plan for it move faster than those that read about it afterwards.' },

      { t: 'h2', c: 'What to look out for' },

      { t: 'h3', c: 'Tax measures' },
      {
        t: 'ul',
        items: [
          'Changes to income tax, VAT, PAYE and other tax rates or thresholds.',
          'New or amended levies and duties.',
          'Capital allowances and incentives for investment.',
          'Compliance and reporting changes.',
        ],
      },

      { t: 'h3', c: 'Economic and currency measures' },
      {
        t: 'ul',
        items: [
          'Exchange rate and monetary policy direction.',
          'Import duties and customs changes.',
          'Measures affecting exporters and cross-border trade.',
        ],
      },

      { t: 'h3', c: 'For public entities' },
      {
        t: 'ul',
        items: [
          'Allocations and grants.',
          'Expenditure controls and fiscal discipline measures.',
          'Procurement or reporting requirements.',
        ],
      },

      { t: 'h2', c: 'How to prepare before the announcement' },
      {
        t: 'ol',
        items: [
          'Review last year. List what changed last time and how it affected your business. This shows where you are most sensitive.',
          'Build scenarios. Update your budget and cash flow for a favourable, expected and adverse outcome.',
          'Check your contracts. Do your customer contracts allow price adjustment for tax or duty changes? If not, note which ones to renegotiate.',
          'Review pricing and payroll. Know which tax changes would affect your prices and your employees’ take-home pay.',
          'Diarise a post-budget review. Arrange a meeting within two weeks of the statement to agree on actions.',
        ],
      },

      { t: 'h2', c: 'After the announcement' },
      { t: 'p', c: 'Announcements are not law. Proposals may change before enactment, and effective dates vary. Separate what is announced, what is enacted and when it starts, and act on the last of these.' },

      { t: 'verify', c: 'Rates, thresholds and effective dates come only from the budget statement, the enacted Finance Act and ZIMRA notices. Do not rely on press summaries alone.' },

      { t: 'callout', title: 'How Praxis can help', c: 'After the statement, we publish a short briefing on what changed and what to do about it. We also offer a post-budget impact review for individual businesses and public entities. Book a consultation now and we will diarise your review.' },
    ],
  },
]

export default insights
