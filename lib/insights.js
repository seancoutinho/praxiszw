/**
 * Praxis Insights — article content.
 *
 * Editorial rule applied throughout: procedural and structural guidance is
 * written directly, because it changes slowly and we can state it accurately.
 * Specific rates, thresholds and monetary figures are NOT asserted — every
 * place one belongs carries a `verify` callout naming what must be checked
 * against current ZIMRA / RBZ / Finance Act sources before publication.
 *
 * Block types understood by app/insights/[slug]/page.js:
 *   { t: 'p'   , c: string }
 *   { t: 'h2' | 'h3', c: string }
 *   { t: 'ul' | 'ol', items: string[] }
 *   { t: 'callout', title?: string, c: string }
 *   { t: 'verify', c: string }        — client/ZIMRA verification flag
 *   { t: 'table', head: string[], rows: string[][] }
 */

const insights = [
  /* ------------------------------------------------------------------ 1 */
  {
    slug: 'zimra-compliance-calendar',
    title: 'The ZIMRA compliance calendar: what falls due, and when',
    seoTitle: 'ZIMRA Compliance Calendar Explained',
    metaDescription:
      'PAYE, VAT, QPDs, annual returns and tax clearance set out as one calendar, so a Zimbabwean company knows what falls due and when.',
    excerpt:
      'A single view of the recurring filings a Zimbabwean company owes ZIMRA across the year — PAYE, VAT, QPDs, annual returns and tax clearance — and how to build a calendar that survives staff turnover.',
    date: '2026-02-10',
    dateLabel: '10 February 2026',
    readTime: 9,
    category: 'Tax compliance',
    tags: ['ZIMRA', 'Compliance', 'PAYE', 'VAT', 'QPDs'],
    body: [
      { t: 'p', c: 'Most compliance failures we are called in to fix are not disputes about interpretation. They are missed dates. A filing slipped because the person who used to do it left, or because nobody had written down what was actually due and when. Penalties and interest then compound on top of a liability that was never contested in the first place.' },
      { t: 'p', c: 'This is a structural overview of the recurring obligations an operating Zimbabwean company carries with the Zimbabwe Revenue Authority (ZIMRA), and how to hold them in a calendar rather than in someone’s head.' },

      { t: 'h2', c: 'The obligations, grouped by rhythm' },
      { t: 'p', c: 'It helps to stop thinking of “tax” as one thing. A typical registered company is running four separate clocks at once, each with its own return, its own remittance and its own consequences for lateness.' },
      {
        t: 'table',
        head: ['Obligation', 'Rhythm', 'What it covers'],
        rows: [
          ['PAYE', 'Monthly', 'Employees’ tax withheld from remuneration, plus the associated returns'],
          ['VAT', 'Monthly or bi-monthly by category', 'Output tax charged less input tax claimed, per tax period'],
          ['QPDs (provisional tax)', 'Four times a year', 'Instalments of the year’s estimated income tax liability'],
          ['Income tax return', 'Annually', 'The self-assessment return reconciling the year’s actual liability'],
          ['Tax clearance (ITF263)', 'Annually', 'Certificate confirming you are compliant, renewed each tax year'],
          ['Withholding taxes', 'As transactions occur', 'Amounts withheld on qualifying payments and remitted to ZIMRA'],
        ],
      },

      { t: 'h3', c: 'Monthly: PAYE' },
      { t: 'p', c: 'If you employ anyone, you are an agent for the collection of employees’ tax. You calculate the deduction, withhold it from the employee, and remit it to ZIMRA with the associated return. Zimbabwe operates a Final Deduction System, which means the tax withheld through the year is intended to be the employee’s final liability in most straightforward cases — placing the accuracy burden squarely on the employer rather than the individual.' },
      { t: 'p', c: 'Two practical points. First, remittance deadlines fall shortly after month end, so payroll has to close early enough to leave time for it. Second, employers also file an annual reconciliation return summarising each employee’s earnings and deductions for the year; if your monthly figures were wrong, that is where it surfaces.' },
      { t: 'verify', c: 'Monthly remittance deadline, the annual reconciliation return’s form reference and due date, and current PAYE tables must be confirmed against ZIMRA’s published guidance for the relevant tax year before you rely on them.' },

      { t: 'h3', c: 'Monthly or bi-monthly: VAT' },
      { t: 'p', c: 'Registered operators file VAT returns for a defined tax period. The period length depends on the category you were allocated when you registered, which is generally tied to turnover. Larger operators file monthly; others file for two-month periods. The return declares output tax on your supplies, claims input tax on your purchases, and settles the net.' },
      { t: 'p', c: 'The claim side is where most money is lost. Input tax is only deductible when it is supported by a valid tax invoice containing the particulars the VAT Act requires, held within the prescribed time limit. Invoices that are missing a supplier VAT number, or that are addressed to the wrong entity, are the single most common reason a VAT refund is reduced on review.' },

      { t: 'h3', c: 'Quarterly: QPDs' },
      { t: 'p', c: 'Companies do not pay income tax in one lump at year end. They pay provisional instalments on Quarterly Payment Dates through the year, each being a set proportion of the estimated annual liability. The estimate is yours to make, and it is the estimate — not the eventual outcome — that determines whether you underpaid.' },
      { t: 'p', c: 'That has a consequence people miss: an under-estimate can attract interest even if you settle the full amount later, because the instalment was short when it fell due. The discipline is to re-forecast taxable income before each QPD rather than rolling forward last year’s number.' },
      { t: 'verify', c: 'The four QPD dates and the percentage of estimated annual liability payable at each are set in legislation and have been amended in the past. Confirm the current dates and proportions, and any minimum-estimate safe harbour, against the current Income Tax Act and Finance Act before setting your calendar.' },

      { t: 'h3', c: 'Annually: the income tax return and tax clearance' },
      { t: 'p', c: 'The annual income tax return is a self-assessment: you compute the liability, and ZIMRA may subsequently review it. It reconciles the provisional tax already paid against the actual liability for the year of assessment.' },
      { t: 'p', c: 'Separately, the ITF263 tax clearance certificate is renewed each tax year and is issued only if your affairs are in order. Its importance is commercial rather than technical. Registered clients paying you are obliged to withhold a portion of the payment if you cannot produce a valid certificate, and remit that to ZIMRA on your behalf. In practice this means a lapsed clearance directly reduces your cash receipts from every corporate customer you have.' },
      { t: 'verify', c: 'The withholding rate applied to payments made to suppliers without a valid ITF263, and the current process and timing for renewal, should be confirmed with ZIMRA. Both have changed in recent years.' },

      { t: 'h2', c: 'Filing mechanics' },
      { t: 'p', c: 'ZIMRA has moved taxpayer administration onto the Tax and Revenue Management System (TaRMS), replacing the older e-Services platform. Registration, returns, payments and taxpayer account statements are handled there.' },
      { t: 'p', c: 'The migration matters for two practical reasons. Access credentials and the persons authorised to act on the account had to be re-established, so companies that never completed onboarding can find themselves unable to file at all. And the account statement view makes historic balances, penalties and interest visible in a way they previously were not — which is useful, but occasionally reveals liabilities a client did not know were sitting there.' },
      { t: 'verify', c: 'Confirm the current TaRMS onboarding requirements and which taxes are administered through it at the time of publication; ZIMRA has phased functionality in over time.' },

      { t: 'h2', c: 'Building a calendar that actually holds' },
      { t: 'p', c: 'A compliance calendar is only useful if it survives the departure of whoever built it. Four things make the difference:' },
      {
        t: 'ol',
        items: [
          'Record the obligation, not the task. “VAT return for period ending 31 March” is durable; “Tapiwa does VAT” is not.',
          'Date the internal deadline, not the statutory one. Work back far enough that a missing invoice can still be chased.',
          'Name a preparer and a separate reviewer for each item. Self-review is how errors persist across a whole year.',
          'Keep the filing acknowledgement with the working papers. Reconstructing proof of submission two years later, during a review, is far harder than filing it at the time.',
        ],
      },
      { t: 'callout', title: 'A practical test', c: 'If your finance lead were unreachable for three weeks, could someone else in the business identify every ZIMRA obligation falling due in that window and file it? If not, the calendar exists but the process does not.' },

      { t: 'h2', c: 'Where this goes wrong most often' },
      {
        t: 'ul',
        items: [
          'Dormant or pre-revenue companies assuming no returns are due. Registration creates filing obligations whether or not you traded.',
          'Treating the tax clearance renewal as administrative. It is a cash-flow control, and it lapses silently.',
          'Rolling QPD estimates forward from last year in a year where revenue moved materially.',
          'Filing on time but paying late, or the reverse. They are two separate obligations with two separate consequences.',
          'Losing the VAT input-tax trail because supplier invoices were never checked for the required particulars at the point of receipt.',
        ],
      },
      { t: 'p', c: 'None of these are sophisticated failures. They are all process failures, which is why they are fixable.' },
    ],
  },

  /* ------------------------------------------------------------------ 2 */
  {
    slug: 'vat-registration-zimbabwe',
    title: 'VAT registration in Zimbabwe: when you must, when you might, and what changes afterwards',
    seoTitle: 'VAT Registration in Zimbabwe',
    metaDescription:
      'How compulsory and voluntary VAT registration work, what the turnover test measures, and the obligations that start on your effective date.',
    excerpt:
      'How compulsory and voluntary VAT registration work, what the turnover test actually measures, and the obligations that begin the day your registration takes effect.',
    date: '2026-01-22',
    dateLabel: '22 January 2026',
    readTime: 8,
    category: 'Tax compliance',
    tags: ['VAT', 'ZIMRA', 'Registration', 'SMEs'],
    body: [
      { t: 'p', c: 'Value Added Tax is administered under the Value Added Tax Act [Chapter 23:12]. Registration is not optional once you cross the threshold, and the obligation is triggered by your own trading figures — not by ZIMRA noticing. Businesses regularly discover they should have registered several periods ago, at which point the exposure includes output tax that was never charged to customers and can no longer be recovered from them.' },

      { t: 'h2', c: 'Compulsory registration' },
      { t: 'p', c: 'A person carrying on a trade must register when the value of taxable supplies made in a twelve-month period exceeds the prescribed threshold, or where there are reasonable grounds to believe it will exceed the threshold in the coming twelve months. Two features of that test are frequently misread.' },
      {
        t: 'ul',
        items: [
          'It is a rolling test, not a financial-year test. You are looking at any twelve consecutive months, which means the threshold can be crossed mid-year.',
          'It is forward-looking as well as backward-looking. A signed contract that will clearly push you over the line creates the obligation before the revenue is banked.',
        ],
      },
      { t: 'p', c: 'The measure is the value of taxable supplies. That includes standard-rated and zero-rated supplies, but excludes exempt supplies. Businesses with a mix of exempt and taxable activity — some financial services, certain educational and medical supplies — need to compute the taxable portion specifically rather than reading total turnover off the income statement.' },
      { t: 'verify', c: 'The compulsory registration threshold is set by regulation and has been revised, including in response to currency changes. Confirm the current threshold, the currency in which it is expressed, and the treatment of foreign-currency turnover with ZIMRA before assessing your position.' },

      { t: 'h2', c: 'Voluntary registration' },
      { t: 'p', c: 'Below the threshold, registration may be permitted on application. It is worth considering, but it is not automatically advantageous. The calculation turns on who your customers are.' },
      { t: 'p', c: 'If you sell primarily to other registered operators, registering lets you recover input tax on your own purchases while your customers recover the VAT you charge them — so the tax is broadly neutral to the relationship and you are better off. If you sell to final consumers or to unregistered businesses, your prices effectively rise by the VAT you must now charge, or your margin absorbs it. Many small B2C operators are worse off registering voluntarily.' },
      { t: 'p', c: 'There is a second, less obvious factor: credibility. Larger corporate and public-sector buyers frequently require a VAT registration number and a valid tax clearance certificate before they will onboard a supplier at all. For businesses trying to move upmarket, registration is sometimes a commercial prerequisite rather than a tax decision.' },

      { t: 'h2', c: 'What changes the day registration takes effect' },
      { t: 'p', c: 'Registration is not a filing. It converts you into a collecting agent for the state, with the record-keeping burden that implies.' },
      {
        t: 'ol',
        items: [
          'You must charge VAT on your taxable supplies from the effective date of registration, whether or not your pricing has been updated.',
          'You must issue tax invoices containing every particular the Act requires. An invoice missing a required particular is not a valid tax invoice, and your customer cannot claim on it.',
          'You must file a return for every tax period, including periods in which you made no supplies at all. Nil returns are still returns.',
          'You must hold valid tax invoices to support input tax claimed, and be able to produce them on review.',
          'You must account for VAT on the correct basis — invoice or payments — as allocated to you, which determines when output tax becomes payable.',
        ],
      },
      { t: 'callout', title: 'The invoice-basis trap', c: 'On the invoice basis, output tax falls due by reference to the invoice, not the receipt. A business with long debtor days can owe VAT on sales it has not been paid for. If collections run at 90 days and your VAT period is a month, that gap has to be funded — plan for it before it arrives.' },

      { t: 'h2', c: 'Getting registered' },
      { t: 'p', c: 'Registration is handled through ZIMRA and, since the platform migration, through TaRMS. In broad terms you will need the entity’s registration documents, proof of the business address, details of the responsible persons, banking details, and evidence supporting the turnover position you are asserting.' },
      { t: 'p', c: 'The document that most often holds applications up is proof of trading premises. Businesses operating from a director’s residence or a shared space should sort out what they can produce before they apply, not after.' },
      { t: 'verify', c: 'The current application form references, the full supporting-document list and the category allocation rules that determine your tax period length should be confirmed against ZIMRA’s published requirements at the time of application.' },

      { t: 'h2', c: 'If you are already late' },
      { t: 'p', c: 'Late registration is a materially worse position than late filing, because the output tax for the intervening periods is due regardless of whether you ever charged it. You cannot generally go back and invoice historical customers for it.' },
      { t: 'p', c: 'The right sequence is: quantify the exposure properly first, establish what input tax is recoverable against it, and only then approach ZIMRA — with a computed position and a proposal, rather than an open-ended admission. Voluntary disclosure handled properly is a considerably better outcome than discovery on audit, but it should not be done unprepared.' },
    ],
  },

  /* ------------------------------------------------------------------ 3 */
  {
    slug: 'paye-obligations-zimbabwean-employers',
    title: 'PAYE: what Zimbabwean employers are actually responsible for',
    seoTitle: 'PAYE Duties for Zimbabwe Employers',
    metaDescription:
      'Registration, valuing benefits, monthly remittance and the year-end reconciliation — what the Final Deduction System puts on the employer.',
    excerpt:
      'Employees’ tax under the Final Deduction System puts the accuracy burden on the employer. A guide to registration, benefits valuation, remittance and the year-end reconciliation.',
    date: '2025-12-04',
    dateLabel: '4 December 2025',
    readTime: 8,
    category: 'Payroll',
    tags: ['PAYE', 'Payroll', 'ZIMRA', 'Employment'],
    body: [
      { t: 'p', c: 'Pay As You Earn is the mechanism by which employees’ tax is collected in Zimbabwe. It operates under a Final Deduction System, which means the amount you withhold through the year is intended to be the employee’s final income tax liability in ordinary cases, with no return required from them.' },
      { t: 'p', c: 'That design has a direct consequence for employers. If the tax withheld is wrong, there is no individual return downstream that corrects it. The error stays in the system and it is the employer who is pursued for the shortfall.' },

      { t: 'h2', c: 'When the obligation starts' },
      { t: 'p', c: 'It starts with the first employee, not with a headcount threshold. An employer must register with ZIMRA as an employer, withhold from remuneration paid, remit what is withheld, and file the associated returns. This holds regardless of whether the employee is full-time, part-time or on a fixed-term contract.' },
      { t: 'p', c: 'The question that decides everything else is whether a person is an employee at all. Engaging someone as an “independent contractor” does not make them one — the substance of the relationship governs. Where a person works set hours, under your direction, using your equipment, integrated into your operations, ZIMRA is entitled to treat the arrangement as employment and assess the PAYE that should have been withheld, with penalties.' },
      { t: 'callout', title: 'Worth testing honestly', c: 'If you would struggle to explain to a third party why a long-standing “consultant” is not an employee, assume ZIMRA will reach the same conclusion. Reclassification assessments are one of the more expensive payroll findings because they reach back over multiple years.' },

      { t: 'h2', c: 'What counts as remuneration' },
      { t: 'p', c: 'Remuneration is considerably broader than basic salary. It generally captures the full package of value provided in respect of employment, including:' },
      {
        t: 'ul',
        items: [
          'Salary, wages, overtime, commission, bonuses and leave pay',
          'Allowances — transport, housing, entertainment, representation and similar',
          'Benefits provided in kind, including the use of a company motor vehicle, employer-provided accommodation, and loans granted at concessionary rates',
          'Certain termination payments and settlements',
        ],
      },
      { t: 'p', c: 'Benefits in kind are where payroll most often understates the liability. Each has a prescribed valuation basis — a motor vehicle benefit, for instance, is valued by reference to engine capacity rather than the actual cost of running it. Applying a commonsense estimate rather than the prescribed method produces a wrong figure even when it feels reasonable.' },
      { t: 'verify', c: 'Motor vehicle benefit values, the deemed interest rate applied to concessionary loans, and the treatment of accommodation are set in legislation and revised periodically, commonly through the annual Finance Act. Confirm current values before running payroll on them.' },

      { t: 'h2', c: 'Calculating and remitting' },
      { t: 'p', c: 'Tax is computed using the PAYE tables issued by ZIMRA for the relevant period. Zimbabwe’s multi-currency environment adds a step that catches out imported payroll software: where remuneration is paid in more than one currency, the tax has to be computed correctly for each, and converted where required, rather than lumped into a single notional figure.' },
      { t: 'p', c: 'Withheld amounts are remitted to ZIMRA shortly after month end, together with the prescribed return. Two failures are treated separately and both carry consequences: filing the return late, and paying late. It is entirely possible to do one correctly and the other not.' },
      { t: 'verify', c: 'Confirm the current monthly remittance deadline, the applicable tax tables and credits, and the correct treatment of multi-currency remuneration against ZIMRA guidance for the relevant year.' },

      { t: 'h2', c: 'The year-end reconciliation' },
      { t: 'p', c: 'After the tax year closes, employers file an annual reconciliation return setting out, per employee, the remuneration paid and the tax withheld. It reconciles twelve months of monthly submissions against the payroll records.' },
      { t: 'p', c: 'This is the point at which accumulated error becomes visible. A benefit valued incorrectly in March has been valued incorrectly every month since, and the reconciliation surfaces the aggregate. It is far cheaper to review benefit valuations and employee classifications once, mid-year, than to correct twelve months at once under time pressure.' },
      { t: 'verify', c: 'The current form reference and filing deadline for the annual PAYE reconciliation should be confirmed with ZIMRA, as should the employee certificate employers are required to provide.' },

      { t: 'h2', c: 'Other deductions running alongside PAYE' },
      { t: 'p', c: 'PAYE is not the only statutory deduction on a Zimbabwean payslip. Employers also deal with National Social Security Authority (NSSA) contributions, and depending on the sector may operate under a National Employment Council with its own levies and contribution rules.' },
      { t: 'p', c: 'These are separate regimes with separate registrations, separate remittance dates and separate inspectorates. Compliance with PAYE tells you nothing about compliance with NSSA. They should be tracked as distinct lines on the compliance calendar.' },
      { t: 'verify', c: 'NSSA contribution rates, the insurable earnings ceiling, and any applicable NEC obligations depend on sector and change over time. Confirm each against the responsible body.' },

      { t: 'h2', c: 'A short payroll health check' },
      {
        t: 'ol',
        items: [
          'Is every person paid through payroll correctly classified as employee or contractor, on substance?',
          'Is every benefit in kind valued using the prescribed method, at current values?',
          'Do monthly remittances reconcile to the payroll register, every month, with someone other than the preparer checking?',
          'Are filing acknowledgements retained alongside proof of payment?',
          'Are NSSA and any NEC obligations tracked separately from PAYE?',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ 4 */
  {
    slug: 'record-keeping-requirements-smes',
    title: 'Record keeping for Zimbabwean SMEs: what to keep, and for how long',
    seoTitle: 'Record Keeping Rules for Zimbabwe SMEs',
    metaDescription:
      'Which records the Companies Act and the tax Acts require, how long to keep them, and a filing structure that survives an audit or ZIMRA review.',
    excerpt:
      'Statutory record-keeping obligations under the Companies and Other Business Entities Act and the tax Acts, and a filing structure that makes an audit or a ZIMRA review straightforward rather than traumatic.',
    date: '2025-11-06',
    dateLabel: '6 November 2025',
    readTime: 7,
    category: 'Accounting',
    tags: ['Record keeping', 'SMEs', 'COBE Act', 'Compliance'],
    body: [
      { t: 'p', c: 'Record keeping is the least interesting obligation a business carries and the one that determines the outcome of almost every review it will face. A deduction you cannot support is a deduction you do not get. An input tax claim without a valid tax invoice is not a claim. A transaction you cannot explain is, from an examiner’s position, a transaction that did not happen the way you say it did.' },

      { t: 'h2', c: 'Two separate sources of obligation' },
      { t: 'p', c: 'Zimbabwean businesses keep records for two distinct reasons, and the requirements do not perfectly overlap.' },
      { t: 'p', c: 'The first is company law. The Companies and Other Business Entities Act [Chapter 24:31] requires registered entities to keep accounting records sufficient to show and explain their transactions, disclose their financial position with reasonable accuracy at any time, and enable financial statements to be prepared. It also requires statutory registers and records of company decision-making to be maintained.' },
      { t: 'p', c: 'The second is tax law. The Income Tax Act and the VAT Act each impose their own record-retention requirements, tied to the periods within which ZIMRA may assess or reassess you. These retention periods are what actually determine how long you keep things.' },
      { t: 'verify', c: 'Statutory retention periods under the Income Tax Act, the VAT Act and the COBE Act should be confirmed against current legislation. Where they differ, retain for the longest applicable period.' },

      { t: 'h2', c: 'The records themselves' },
      { t: 'h3', c: 'Accounting records' },
      {
        t: 'ul',
        items: [
          'General ledger, trial balances and journals, including narration explaining each journal',
          'Sales invoices issued and purchase invoices received, in sequence',
          'Bank statements for every account, and reconciliations to the ledger',
          'Cash books and petty cash records with supporting vouchers',
          'Fixed asset register showing cost, date of acquisition, depreciation and disposals',
          'Inventory records and stock-count sheets, including the count instructions used',
          'Debtors and creditors ledgers with ageing',
        ],
      },
      { t: 'h3', c: 'Tax records' },
      {
        t: 'ul',
        items: [
          'Valid tax invoices supporting every input tax claim, with the particulars the VAT Act requires',
          'VAT account reconciling returns filed to the ledger for each tax period',
          'Payroll registers, PAYE computations and benefit valuations',
          'Copies of returns filed and acknowledgements of submission',
          'Proof of payment for every remittance, matched to the return it settles',
          'Tax computations with the reconciliation from accounting profit to taxable income',
        ],
      },
      { t: 'h3', c: 'Statutory and governance records' },
      {
        t: 'ul',
        items: [
          'Certificate of incorporation, constitutive documents and any amendments',
          'Registers of members, directors and secretaries',
          'Minutes of board and shareholder meetings, and written resolutions',
          'Signed contracts, leases and loan agreements',
          'Licences, permits and sector-specific registrations',
        ],
      },

      { t: 'h2', c: 'Multi-currency records' },
      { t: 'p', c: 'Zimbabwe’s currency environment adds a requirement most record-keeping guidance written elsewhere does not cover. Where a business transacts in more than one currency, the record must show the currency of the original transaction, the rate applied on conversion, and the source of that rate.' },
      { t: 'p', c: 'Recording only the converted figure destroys information you cannot reconstruct later. When a review asks how a balance was translated, “that is what the system produced” is not an answer. Keep the rate and its source alongside the entry.' },
      { t: 'callout', title: 'Practical rule', c: 'Every foreign-currency entry should carry three things: original amount and currency, rate used, and where the rate came from. If your system cannot hold all three, record them in the narration.' },

      { t: 'h2', c: 'Electronic records' },
      { t: 'p', c: 'Records may generally be kept electronically provided they remain accessible, readable and capable of being produced when required. That last condition is where businesses come unstuck. Records held only in a cloud accounting subscription that has lapsed, or on a laptop that left with a former employee, are not records you can produce.' },
      {
        t: 'ol',
        items: [
          'Keep an independent backup that does not depend on a single subscription remaining active.',
          'Export a full trial balance and transaction listing at each year end, in a format readable without the original software.',
          'Retain scanned source documents at a resolution where the required particulars remain legible.',
          'Document who holds administrator access, and revoke it as part of the leaver process.',
        ],
      },
      { t: 'verify', c: 'Confirm ZIMRA’s current position on electronic record retention, including any requirement to keep records within Zimbabwe or to produce them in a particular format.' },

      { t: 'h2', c: 'A filing structure that survives a review' },
      { t: 'p', c: 'The test of a filing system is not whether you can find something. It is whether someone who has never seen your business can find it, in your absence, within a few minutes. That is precisely the situation during an audit or a ZIMRA visit.' },
      { t: 'p', c: 'The structure we recommend to clients is simple: financial year at the top level, then function (sales, purchases, payroll, banking, tax, statutory), then period. Filing acknowledgements and proofs of payment live with the return they relate to, not in a separate "ZIMRA" folder. Anything that required judgement gets a short memorandum recording the reasoning at the time — not reconstructed two years later under questioning.' },
    ],
  },

  /* ------------------------------------------------------------------ 5 */
  {
    slug: 'cross-border-transactions-exchange-control',
    title: 'Cross-border transactions: exchange control and currency questions to settle first',
    seoTitle: 'Exchange Control on Cross-Border Deals',
    metaDescription:
      'Zimbabwe’s exchange control framework, the role of authorised dealers, and the accounting and tax questions to settle before you transact.',
    excerpt:
      'Zimbabwe’s exchange control framework, the role of authorised dealers, and the accounting and tax questions that arise when a business earns or spends across borders.',
    date: '2025-10-09',
    dateLabel: '9 October 2025',
    readTime: 9,
    category: 'Advisory',
    tags: ['Exchange control', 'RBZ', 'Cross-border', 'SADC', 'Currency'],
    body: [
      { t: 'p', c: 'Cross-border trade is where Zimbabwean businesses most often discover that a transaction which made commercial sense is difficult to execute, account for, or repatriate. The constraints are not primarily tax constraints. They are exchange control constraints, and they need to be understood before a contract is signed rather than after an invoice is raised.' },

      { t: 'h2', c: 'The framework' },
      { t: 'p', c: 'Exchange control in Zimbabwe operates under the Exchange Control Act [Chapter 22:05] and the regulations and directives issued under it. The Reserve Bank of Zimbabwe administers the framework, and much of it is implemented in practice through authorised dealers — the commercial banks licensed to process foreign-currency transactions.' },
      { t: 'p', c: 'This is the structural point that matters. For most routine transactions you will not be dealing with the RBZ directly. Your authorised dealer applies the rules, requires the documentation, and declines what does not comply. Your banking relationship is therefore an operational dependency for cross-border trade, not merely a payments arrangement.' },

      { t: 'h2', c: 'Exports' },
      { t: 'p', c: 'Exports are documented and monitored. Exporters are generally required to declare shipments through the prescribed export declaration process, and export proceeds are expected to be received and accounted for within defined timeframes. Failure to acquit an export declaration is treated seriously — an unacquitted declaration is, on its face, value that left the country without proceeds returning.' },
      { t: 'p', c: 'Export receipts have historically been subject to surrender or retention arrangements, under which a proportion of foreign currency received is converted at a prescribed rate and the balance retained. These arrangements have been amended frequently, and the applicable proportions have changed more than once in recent years.' },
      { t: 'verify', c: 'Current export declaration procedures, acquittal timeframes, and any surrender or retention requirements and rates must be confirmed with your authorised dealer or the RBZ. This is one of the most frequently amended areas of the framework and any figure published here would date quickly.' },

      { t: 'h2', c: 'Imports and outbound payments' },
      { t: 'p', c: 'Outbound payments require supporting documentation demonstrating the underlying commercial substance — typically the supplier invoice, the contract, shipping and customs documentation for goods, and evidence of delivery for services. Authorised dealers apply due diligence to these before releasing funds.' },
      { t: 'p', c: 'Payments for services and intangibles attract more scrutiny than payments for physical goods, for the obvious reason that the evidence of receipt is weaker. Management fees, technical service fees, royalties and licence payments to related parties abroad sit at the intersection of exchange control and transfer pricing, and should be supported by a written agreement, a defensible basis for the amount, and evidence the service was actually rendered.' },
      { t: 'callout', title: 'Build the file before you need it', c: 'The documentation an authorised dealer requires and the documentation ZIMRA would want on a transfer pricing review overlap substantially. Assembling it once, at the time of the transaction, serves both.' },

      { t: 'h2', c: 'Currency and reporting' },
      { t: 'p', c: 'Zimbabwe has operated a multi-currency environment for an extended period, and the domestic unit has changed — most recently with the introduction of the Zimbabwe Gold (ZiG) currency, carrying the code ZWG. For accounting purposes this raises three questions that must be answered deliberately rather than by default:' },
      {
        t: 'ol',
        items: [
          'What is the entity’s functional currency? This is determined by the economic substance of its operations — the currency that mainly influences its selling prices and costs — not by preference or by what the accounting system defaults to.',
          'What is the presentation currency of the financial statements, and does any external requirement dictate it?',
          'Which rates are applied on translation, at which dates, and what is the source of those rates? The answer must be applied consistently and documented.',
        ],
      },
      { t: 'p', c: 'Zimbabwe has been designated a hyperinflationary economy for financial reporting purposes, which brings IAS 29 into play for entities reporting under full IFRS. That is a specialist area with material consequences for reported results, and it should be scoped explicitly at the start of an engagement rather than discovered during the audit.' },
      { t: 'verify', c: 'The applicability of IAS 29 to a specific entity, and the current position on functional currency determination in Zimbabwe, should be assessed on the facts with reference to current guidance from the relevant professional bodies.' },

      { t: 'h2', c: 'Tax consequences that travel with the transaction' },
      { t: 'p', c: 'Cross-border payments frequently attract withholding taxes in Zimbabwe. Where a double taxation agreement exists with the counterparty’s jurisdiction, it may reduce the rate — but treaty relief is not automatic. It generally requires evidence of the recipient’s residence and beneficial ownership, obtained before the payment is made.' },
      { t: 'p', c: 'Zimbabwe has concluded double taxation agreements with a number of countries, including partners in the SADC region. Whether one applies, and what it provides for a particular payment type, is a question to answer per transaction rather than in general.' },
      { t: 'verify', c: 'Applicable withholding tax rates by payment type, the current list of double taxation agreements in force, and the documentation ZIMRA requires to apply a treaty rate should each be confirmed before a payment is made.' },

      { t: 'h2', c: 'The questions to settle before signing' },
      {
        t: 'ul',
        items: [
          'In what currency is the contract priced, and who bears the currency risk between invoice and settlement?',
          'Can your authorised dealer process this payment, and what documentation will it require?',
          'If this is an export, what acquittal obligation does it create and by when?',
          'What withholding tax applies, is treaty relief available, and who bears it under the contract?',
          'How will the transaction be recorded — original currency, rate, and rate source?',
        ],
      },
      { t: 'p', c: 'None of these questions are difficult to answer in advance. All of them are difficult to fix afterwards.' },
    ],
  },

  /* ------------------------------------------------------------------ 6 */
  {
    slug: 'preparing-for-year-end',
    title: 'Preparing for year end: a working checklist for Zimbabwean companies',
    seoTitle: 'Year-End Preparation Checklist',
    metaDescription:
      'What to do in the weeks either side of your financial year end so statement preparation and any audit that follows run to plan.',
    excerpt:
      'What to do in the weeks before and after your financial year end so that financial statement preparation — and any audit that follows — runs to plan rather than to crisis.',
    date: '2025-09-11',
    dateLabel: '11 September 2025',
    readTime: 8,
    category: 'Accounting',
    tags: ['Year end', 'Financial statements', 'Audit', 'IFRS'],
    body: [
      { t: 'p', c: 'Year end is a deadline that never moves and is nonetheless treated as a surprise by a remarkable number of businesses. The work that determines whether it goes smoothly is done before the year end date, not after it.' },
      { t: 'p', c: 'This is the checklist we work through with clients. It assumes a company preparing financial statements under IFRS or IFRS for SMEs, with or without a statutory audit.' },

      { t: 'h2', c: 'Four to six weeks before year end' },
      { t: 'h3', c: 'Agree the reporting framework and timetable' },
      { t: 'p', c: 'Confirm which framework applies — full IFRS or IFRS for SMEs — and whether an audit is required. Where an audit is required, agree the dates now: when the trial balance will be final, when the audit fieldwork starts, when the signed accounts are needed. Working backwards from a filing or lender deadline usually reveals that the trial balance has to be closed sooner than anyone assumed.' },
      { t: 'h3', c: 'Plan the stock count' },
      { t: 'p', c: 'If inventory is material, the count must be planned in advance. Written count instructions, sections assigned to counters, a second-count process for discrepancies, and a clear cut-off procedure for goods in transit. Where the accounts are audited, the auditor will normally want to attend the count — which means they need notice, not an invitation the day before.' },
      { t: 'h3', c: 'Clear the reconciliations' },
      { t: 'p', c: 'Bank, debtors, creditors, intercompany, VAT and payroll control accounts should be reconciled and the reconciling items understood before year end, not after. Unexplained differences that have sat in a control account for months become audit findings and, occasionally, prior-period adjustments.' },

      { t: 'h2', c: 'At year end' },
      {
        t: 'ol',
        items: [
          'Cut off properly. Sales invoiced after year end for goods delivered before it belong in the old year; the reverse is equally true. Record the last document numbers used before the cut-off — delivery notes, invoices, goods received notes — so the boundary can be tested later.',
          'Count and value inventory, and document obsolete or slow-moving lines with the basis for any write-down.',
          'Confirm bank balances for every account, including dormant ones, in every currency held.',
          'Circularise material debtors and creditors, or gather the statements needed to substantiate the balances.',
          'Fix exchange rates used at the reporting date and record the source of each.',
        ],
      },

      { t: 'h2', c: 'After year end: the closing entries that need judgement' },
      { t: 'p', c: 'These are the areas that consume the most time in review, because each requires a documented basis rather than a number.' },
      {
        t: 'ul',
        items: [
          'Accruals and prepayments — supported by the underlying invoice or contract, not by last year’s figure rolled forward.',
          'Depreciation — consistent with policy, with additions and disposals reflected from the correct dates.',
          'Expected credit losses on receivables — a documented methodology applied consistently, not a round-number provision.',
          'Inventory valuation — lower of cost and net realisable value, with the evidence supporting realisable value.',
          'Provisions — recognised only where there is a present obligation from a past event that can be reliably estimated.',
          'Leases and borrowings — classified and measured under the applicable standard, with the agreements on file.',
          'Related-party transactions — identified and quantified for disclosure. These are almost always understated on first draft.',
          'Events after the reporting period — identified up to the date the accounts are authorised, and split between adjusting and non-adjusting.',
        ],
      },
      { t: 'callout', title: 'Going concern', c: 'The going concern assessment is not a formality, and in a liquidity-constrained market it will attract attention. It should be supported by a cash-flow forecast covering at least twelve months from the date the accounts are authorised, with stated assumptions and a sensitivity analysis. Prepare it as a document; do not expect to answer the question verbally.' },

      { t: 'h2', c: 'Tax at year end' },
      { t: 'p', c: 'The tax computation is a separate exercise from the accounts, and it is where the two disciplines meet. Accounting profit is reconciled to taxable income through adjustments for non-deductible expenditure, capital allowances in place of accounting depreciation, and timing differences.' },
      { t: 'p', c: 'Reconcile the provisional tax already paid through QPDs to the computed liability, and identify the balance payable or recoverable. Where deferred tax is recognised, it flows from these same differences and should be computed from the reconciliation rather than estimated separately.' },

      { t: 'h2', c: 'If your accounts are audited' },
      { t: 'p', c: 'An audit is faster and cheaper when the client is prepared. Practically, that means a final trial balance the client is willing to stand behind, a lead schedule for every material balance agreeing to that trial balance, and the supporting documentation filed against each schedule.' },
      { t: 'p', c: 'It also means understanding what an audit is not. The auditor does not prepare your records, does not make your accounting judgements, and cannot design or implement the controls they are testing. Where the same firm assists with preparation, independence requirements govern what is permissible — a matter that is regulated for auditors registered with the Public Accountants and Auditors Board (PAAB).' },
      { t: 'p', c: 'Scope this at the start. Discovering in week three that your accountant cannot also be your auditor is an expensive discovery.' },
    ],
  },

  /* ------------------------------------------------------------------ 7 */
  {
    slug: 'audit-review-or-compilation',
    title: 'Audit, review or compilation: choosing the right level of assurance',
    seoTitle: 'Audit, Review or Compilation?',
    metaDescription:
      'What each of the three assurance levels actually provides over a set of financial statements, and how to tell which one you are required to obtain.',
    excerpt:
      'The three levels of engagement over a set of financial statements, what each actually provides, and how to work out which one your lender, regulator or shareholders require.',
    date: '2025-08-14',
    dateLabel: '14 August 2025',
    readTime: 6,
    category: 'Assurance',
    tags: ['Audit', 'Assurance', 'PAAB', 'ICAZ', 'Financial statements'],
    body: [
      { t: 'p', c: 'Businesses regularly ask for “audited accounts” when what they need is something else, and occasionally accept a compilation when a lender is going to insist on an audit. The three engagement types differ in the work performed, the assurance given, and the cost — and the difference is not cosmetic.' },

      { t: 'h2', c: 'The three levels' },
      {
        t: 'table',
        head: ['Engagement', 'What the practitioner does', 'What you get'],
        rows: [
          [
            'Compilation',
            'Assembles financial statements from information you provide, applying accounting expertise but performing no verification',
            'Properly presented financial statements. No assurance at all as to whether they are free of material misstatement.',
          ],
          [
            'Review',
            'Applies analytical procedures and enquiry, but does not test controls or obtain the corroborating evidence an audit requires',
            'Limited (negative) assurance — nothing came to the practitioner’s attention suggesting material misstatement.',
          ],
          [
            'Audit',
            'Plans by reference to risk, tests controls and balances, obtains external confirmations, attends inventory counts, evaluates estimates and going concern',
            'Reasonable (positive) assurance — an opinion that the statements give a true and fair view, or present fairly, in all material respects.',
          ],
        ],
      },
      { t: 'p', c: 'The distinction people miss is between negative and positive assurance. A review says nothing came to attention; an audit expresses an opinion. The evidential work required to move from the first to the second is substantial, and it is what the fee difference reflects.' },

      { t: 'h2', c: 'Who decides which you need' },
      { t: 'p', c: 'Rarely you. In practice the requirement comes from one of four places:' },
      {
        t: 'ul',
        items: [
          'Legislation — company law and sector-specific statutes impose audit requirements on certain categories of entity.',
          'Your constitutive documents — many articles require audited accounts regardless of what the law demands.',
          'A contract — lenders, grant funders and donors routinely require audited financial statements as a condition, and some specify the standards to be applied.',
          'A regulator — financial services, insurance, and certain licensed sectors carry their own assurance requirements.',
        ],
      },
      { t: 'p', c: 'Check all four before commissioning work. Paying for an audit you did not need is wasteful; delivering a review where a funder required an audit means doing it again.' },
      { t: 'verify', c: 'Statutory audit thresholds and the categories of entity required to be audited under the Companies and Other Business Entities Act and sector legislation should be confirmed against current law for your specific entity type.' },

      { t: 'h2', c: 'Who is permitted to perform the work' },
      { t: 'p', c: 'In Zimbabwe, public auditors are registered with the Public Accountants and Auditors Board (PAAB), the statutory body established to regulate the profession. Chartered accountants are members of professional bodies including the Institute of Chartered Accountants of Zimbabwe (ICAZ). The distinction matters: not every accountant may sign an audit report.' },
      { t: 'p', c: 'If an audit report is going to a lender, a regulator or a funder, confirm at the outset that the signing practitioner holds the registration required for that report to be accepted. This is a question worth asking directly and early.' },
      { t: 'verify', c: 'Praxis to confirm the practice’s current PAAB registration status and ICAZ membership details for publication, including registration numbers where the firm wishes to display them.' },

      { t: 'h2', c: 'Independence' },
      { t: 'p', c: 'An auditor must be independent of the entity audited, in fact and in appearance. That constrains what other services the same firm may provide — a firm generally cannot audit financial statements it prepared, or controls it designed, without breaching independence requirements.' },
      { t: 'p', c: 'For a smaller business this has a practical implication worth planning around: the accountant who does your bookkeeping may not be able to audit the resulting accounts. Establish that split before year end rather than during it.' },

      { t: 'h2', c: 'What an audit does not do' },
      {
        t: 'ul',
        items: [
          'It is not a guarantee that the financial statements are free of all error. Assurance is reasonable, not absolute, and it is expressed in relation to materiality.',
          'It is not primarily a fraud investigation. Auditors consider fraud risk, but detecting a well-concealed fraud is not what an audit is designed to do — a forensic engagement is.',
          'It is not a valuation of the business, or an opinion on whether it is well run.',
          'It does not transfer responsibility for the financial statements. They remain the responsibility of the directors.',
        ],
      },
      { t: 'p', c: 'Where the concern is specifically that something has been misappropriated, an audit is the wrong instrument. The right one is a forensic engagement, scoped to the allegation and structured so that the evidence gathered will hold up in whatever forum it eventually reaches.' },
    ],
  },
]

/** Newest first. */
export const allInsights = [...insights].sort((a, b) => b.date.localeCompare(a.date))

export const getInsight = (slug) => insights.find((p) => p.slug === slug)

export const getRecentInsights = (n = 3) => allInsights.slice(0, n)

export const getRelatedInsights = (slug, n = 3) => {
  const current = getInsight(slug)
  if (!current) return getRecentInsights(n)
  const scored = allInsights
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === current.category ? 2 : 0) +
        p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
  return scored.slice(0, n).map((s) => s.post)
}

export const insightCategories = [...new Set(insights.map((p) => p.category))].sort()

export default allInsights
