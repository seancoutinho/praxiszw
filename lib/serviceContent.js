/**
 * Long-form content for each service detail page.
 *
 * Same editorial rule as lib/insights.js: procedure and structure are stated
 * directly; rates, thresholds and deadlines are flagged for verification
 * rather than asserted.
 */

const serviceContent = {
  'tax-management': {
    lead:
      'We take responsibility for the ZIMRA relationship — registrations, returns, remittances and correspondence — so that compliance stops being something you chase and starts being something that simply happens on a calendar.',
    intro: [
      'Tax management for a Zimbabwean business is not one obligation. It is PAYE monthly, VAT monthly or bi-monthly, provisional tax on quarterly payment dates, an annual self-assessment return, withholding taxes as transactions arise, and an ITF263 tax clearance certificate that has to be renewed and kept valid or your corporate customers will start withholding from what they pay you.',
      'Each of those has its own return, its own remittance and its own consequence for lateness. We hold all of them on one calendar, with a named preparer and a separate reviewer for each item, and we file the acknowledgements with the working papers so that proof of submission exists when someone eventually asks for it.',
    ],
    includes: {
      title: 'What the engagement covers',
      items: [
        'ZIMRA registration and TaRMS onboarding, including re-establishing access where a company has lost it',
        'Monthly PAYE computation, remittance and returns, plus the annual reconciliation',
        'VAT returns for every tax period, including nil returns, with the input tax trail reviewed before filing',
        'Quarterly provisional tax (QPD) estimates re-forecast before each date rather than rolled forward',
        'Annual income tax return and the reconciliation from accounting profit to taxable income',
        'ITF263 tax clearance applications and renewals, tracked so they do not lapse',
        'Withholding tax on qualifying payments, including cross-border payments and treaty positions',
        'Correspondence with ZIMRA: queries, objections, payment plans and audit support',
      ],
    },
    approach: {
      title: 'How we approach it',
      steps: [
        {
          title: 'Position review first',
          body: 'Before we file anything we establish where you actually stand: what is registered, what has been filed, what is outstanding, and what the taxpayer account statement shows in penalties and interest. Clients are frequently unaware of balances sitting on their account.',
        },
        {
          title: 'Close the gaps deliberately',
          body: 'Where there are outstanding periods we quantify the exposure and agree a sequence for clearing it — including, where appropriate, approaching ZIMRA with a computed position rather than waiting for discovery on audit.',
        },
        {
          title: 'Run it on a calendar',
          body: 'Every recurring obligation gets a dated internal deadline set ahead of the statutory one, so a missing invoice can still be chased. You receive the return and the computation for approval before we file.',
        },
        {
          title: 'Plan, then comply',
          body: 'Once the compliance base is stable, the useful conversations begin — structuring, timing, allowances, and whether a filing position you have been taking for years is one we would defend.',
        },
      ],
    },
    frameworks: {
      title: 'Frameworks we work within',
      items: [
        'Income Tax Act [Chapter 23:06] and the annual Finance Act amendments',
        'Value Added Tax Act [Chapter 23:12]',
        'Capital Gains Tax Act [Chapter 23:01]',
        'ZIMRA administrative practice, including the TaRMS platform',
        'Double taxation agreements in force between Zimbabwe and its treaty partners',
      ],
    },
    note:
      'Rates, thresholds, QPD proportions and filing deadlines are set in legislation and revised regularly. We work from the position current at the time of your engagement and confirm figures against ZIMRA sources rather than from memory.',
    faqs: [
      {
        q: 'We have periods we never filed. Is approaching ZIMRA a bad idea?',
        a: 'Usually the opposite, provided you go in prepared. A quantified position with input tax properly claimed and a proposal for settlement is a materially better outcome than the same liability discovered on audit. What is a bad idea is an unprepared admission.',
      },
      {
        q: 'Can you deal with ZIMRA directly on our behalf?',
        a: 'Yes. We are appointed on the taxpayer account as your representative and handle correspondence, queries and objections. You are copied on everything and approve any filing position before it is taken.',
      },
      {
        q: 'Our company is dormant. Do we still need to file?',
        a: 'Registration creates filing obligations whether or not you traded. Nil returns are still returns, and unfiled periods on a dormant company are a common reason a tax clearance application is refused years later.',
      },
    ],
  },

  bookkeeping: {
    lead:
      'Multi-currency bookkeeping, monthly management accounts and year-end financial statements, produced to a timetable you can actually plan around.',
    intro: [
      'Most of the businesses we take on do not have a bookkeeping problem in the abstract. They have numbers that arrive too late to act on, a trial balance nobody is confident in, and a year-end scramble that produces financial statements three months after they would have been useful.',
      'We take over the ledger — or rebuild it — and run it to a monthly cycle. The output is a set of management accounts you receive on a known date each month, and a year-end file that is ready for audit rather than needing to be assembled for one.',
    ],
    includes: {
      title: 'What the engagement covers',
      items: [
        'Transaction processing and ledger maintenance, in ZWG and USD, with original currency, rate and rate source recorded on every foreign-currency entry',
        'Bank, debtor, creditor, intercompany and control account reconciliations, cleared monthly rather than at year end',
        'Fixed asset register maintenance including additions, disposals and depreciation',
        'Monthly or quarterly management accounts with commentary — not just a P&L export',
        'Cash-flow reporting and debtor ageing, because in this market that is usually the number that matters',
        'Year-end financial statements under IFRS or IFRS for SMEs',
        'Audit-ready working paper files with lead schedules agreeing to the trial balance',
        'Accounting system setup, migration and chart of accounts design',
      ],
    },
    approach: {
      title: 'How we approach it',
      steps: [
        {
          title: 'Establish a reliable opening position',
          body: 'We do not start processing on top of a ledger we have not validated. Opening balances are agreed, control accounts reconciled, and anything unexplained is identified and dealt with before it rolls forward another year.',
        },
        {
          title: 'Design the chart of accounts around your decisions',
          body: 'A chart of accounts that mirrors how you actually run the business — by branch, contract, funder or product line — makes management accounts useful. One inherited from a template does not.',
        },
        {
          title: 'Set the currency policy explicitly',
          body: 'Functional currency, presentation currency, translation rates and rate sources are decided and documented at the outset. Left to system defaults, these produce results that are difficult to defend later.',
        },
        {
          title: 'Close monthly, not annually',
          body: 'A month that is closed and reviewed is a month that will not need reworking in the audit. This is the single change that most reduces year-end cost.',
        },
      ],
    },
    frameworks: {
      title: 'Reporting frameworks',
      items: [
        'IFRS and IFRS for SMEs',
        'Companies and Other Business Entities Act [Chapter 24:31] record-keeping requirements',
        'IAS 29 considerations arising from Zimbabwe’s designation as a hyperinflationary economy, where applicable to the entity',
        'Donor and funder reporting formats where an NGO client requires them',
      ],
    },
    note:
      'Whether IAS 29 applies to a particular entity is a judgement made on the facts, and its effect on reported results can be material. We scope this explicitly at the start of an engagement rather than raising it during the audit.',
    faqs: [
      {
        q: 'Our records are in poor shape. Is that a problem?',
        a: 'It is the normal starting point. We will tell you honestly what it will take to get to a reliable trial balance, and quote the clean-up separately from the ongoing work so you can see what you are paying for.',
      },
      {
        q: 'Do we have to change accounting software?',
        a: 'Not necessarily. We work with what you have where it is fit for purpose. Where we do recommend a change, we will say why, and we handle the migration and the opening balance reconciliation.',
      },
      {
        q: 'Can you also audit the accounts you prepare?',
        a: 'No — independence requirements prevent a firm from auditing financial statements it prepared. Where an audit is required we help you scope it and work alongside the appointed auditor. It is worth settling this split before year end.',
      },
    ],
  },

  'strategy-planning': {
    lead:
      'Budgets, forecasts, cash-flow models and business plans built for an economy where currency, pricing and liquidity conditions move faster than an annual plan can absorb.',
    intro: [
      'Planning models imported from stable economies fail here for a predictable reason: they assume the currency you price in, the currency you cost in and the currency you report in behave consistently. In Zimbabwe they frequently do not, and a plan that cannot separate those movements from operating performance will mislead you about both.',
      'We build planning models that hold currency, pricing and volume as separate drivers, so that when results diverge from plan you can see which of them moved. That is the difference between a forecast that informs a decision and one that simply records a variance.',
    ],
    includes: {
      title: 'What the engagement covers',
      items: [
        'Annual budgets built from drivers rather than from last year plus a percentage',
        'Rolling cash-flow forecasts, weekly or monthly, with sensitivity to collection performance',
        'Multi-currency models that separate volume, price and currency effects',
        'Business plans and financial projections for lenders, investors and funders',
        'Costing and pricing reviews, including margin analysis by product, contract or branch',
        'Working capital analysis — debtor days, creditor days, inventory holding and the funding gap between them',
        'Scenario and stress testing against the conditions that would actually threaten the business',
        'Board and management reporting packs that support a decision rather than describing the past',
      ],
    },
    approach: {
      title: 'How we approach it',
      steps: [
        {
          title: 'Find the binding constraint',
          body: 'Most plans optimise something that is not the problem. We start by identifying what actually limits the business — cash, capacity, a single customer, foreign currency access — because everything else is secondary to it.',
        },
        {
          title: 'Model the drivers, not the totals',
          body: 'A model built on volume, price, cost and currency as separate inputs can answer questions. One built on growth percentages cannot.',
        },
        {
          title: 'Test what breaks it',
          body: 'We run the plan against adverse scenarios: collections slipping, a currency move, the loss of a major contract. The point is to know in advance which of these you could absorb and which you could not.',
        },
        {
          title: 'Hand over a model you can operate',
          body: 'The model is yours, documented, with assumptions visible and changeable. A forecast you have to come back to us to update is not much use.',
        },
      ],
    },
    frameworks: {
      title: 'Context we plan against',
      items: [
        'Zimbabwe’s multi-currency operating environment (ZWG and USD)',
        'Reserve Bank of Zimbabwe exchange control considerations affecting foreign-currency access',
        'Sector and regional conditions across the SADC market where clients trade across borders',
        'Lender and funder requirements where the plan supports a funding application',
      ],
    },
    note:
      'We model your business on your data. We do not publish market forecasts or macroeconomic projections, and any external assumption in a model we build is sourced and labelled so you can challenge it.',
    faqs: [
      {
        q: 'We need a business plan for a bank. Is that this?',
        a: 'Yes, and we will be direct about what lenders actually assess — the cash-flow forecast, the security position and the credibility of the assumptions, rather than the narrative sections. A plan that reads well but does not survive the lender’s stress test wastes everyone’s time.',
      },
      {
        q: 'How often should a forecast be updated?',
        a: 'Cash-flow forecasts monthly at minimum, and weekly where liquidity is tight. Budgets annually with a formal mid-year reforecast. A model that is not maintained stops being a plan and becomes a document.',
      },
      {
        q: 'Do you help implement, or just advise?',
        a: 'Both, depending on what you engage us for. Some clients want the model and the review discipline; others want us to run the reporting cycle as well. We will scope whichever you need in writing.',
      },
    ],
  },

  'forensic-audit': {
    lead:
      'Investigations into suspected fraud, misappropriation and control failure, conducted so that the findings hold up in whatever forum they eventually reach.',
    intro: [
      'A forensic engagement is not an audit with more scepticism. It is a different exercise with a different objective: to establish what happened, quantify it, and produce evidence that will survive challenge in a disciplinary hearing, an insurance claim, or a court.',
      'That objective changes how the work is done from the first hour. Evidence has to be secured before anyone is alerted. Chain of custody has to be maintained. Interviews have to be conducted in an order that does not tip off the subject. Getting the sequence wrong can compromise an otherwise sound case.',
    ],
    includes: {
      title: 'What the engagement covers',
      items: [
        'Fraud and misappropriation investigations, from a specific allegation or a general concern',
        'Quantification of loss, traced through the accounting records to source documents',
        'Internal control reviews identifying how the failure was possible and what would prevent recurrence',
        'Analysis of transaction data to identify anomalies, duplicates, ghost suppliers and unusual patterns',
        'Structured interviews conducted in a defensible sequence',
        'Asset tracing within the limits of what is lawfully accessible',
        'Written reports prepared to evidentiary standard, with findings distinguished from opinion',
        'Support through disciplinary proceedings, insurance claims or referral to authorities',
      ],
    },
    approach: {
      title: 'How we approach it',
      steps: [
        {
          title: 'Scope the allegation precisely',
          body: 'An open-ended investigation is expensive and rarely conclusive. We define what is alleged, what would prove or disprove it, and what the outcome is intended to support — dismissal, recovery, a claim, or a referral.',
        },
        {
          title: 'Secure the evidence first',
          body: 'Records, systems access and documents are preserved before anyone is approached. Evidence that disappears in the first 48 hours is generally not recoverable.',
        },
        {
          title: 'Follow the transactions to source',
          body: 'Ledger analysis identifies where to look; source documents establish what happened. A finding that rests only on an accounting entry is a finding that will be challenged successfully.',
        },
        {
          title: 'Report so it survives challenge',
          body: 'The report states what the evidence shows, separates fact from inference, records the limitations of the work, and is written to be read by someone hostile to its conclusions.',
        },
      ],
    },
    frameworks: {
      title: 'How we work',
      items: [
        'Investigations conducted to the professional and ethical standards that ICAZ membership carries',
        'Findings separated from opinion, with the basis for each stated',
        'Scope limitations recorded explicitly rather than left implicit',
        'Evidence handling designed so that admissibility is not compromised by our process',
        'Coordination with your legal advisers where proceedings are contemplated',
      ],
    },
    note:
      'We do not conduct surveillance, access systems or data without proper authority, or take steps that would prejudice a subject’s rights. Where an engagement would require any of that, it is a matter for your legal advisers and the appropriate authorities, not for us.',
    faqs: [
      {
        q: 'We suspect something but have no proof. Is it too early to call you?',
        a: 'No — that is the right time. The most common way an investigation is compromised is an internal enquiry that alerts the subject before evidence is secured. Call before you start asking questions, not after.',
      },
      {
        q: 'Will an ordinary audit find fraud?',
        a: 'It may, but that is not what it is designed to do. Auditors consider fraud risk and assurance is reasonable rather than absolute. A concealed misappropriation usually requires an engagement scoped specifically to look for it.',
      },
      {
        q: 'Can the report be used in a disciplinary hearing?',
        a: 'That is what it is written for. We prepare findings to evidentiary standard and can support the process, though how the report is used is a matter to take with your legal advisers.',
      },
    ],
  },

  'financial-advisory': {
    lead:
      'Funding readiness, due diligence, valuations, and advice on the exchange control and structuring questions that arise when money moves across a border.',
    intro: [
      'Advisory work is where the compliance base pays off. Once the numbers are reliable, the useful questions become answerable: whether the business is fundable, what it is worth, whether an acquisition is what it appears to be, and how a cross-border arrangement should be structured before it is signed rather than after.',
      'We are a small practice and we scope this work narrowly. Where an engagement needs specialist legal, valuation or tax counsel beyond what we can properly provide, we will say so and work alongside them rather than stretching.',
    ],
    includes: {
      title: 'What the engagement covers',
      items: [
        'Funding readiness reviews — what a lender or investor will ask for, and whether you can currently produce it',
        'Financial due diligence on an acquisition target, including quality of earnings and working capital analysis',
        'Vendor due diligence and preparation for sale',
        'Business valuations for transactions, shareholder arrangements and disputes',
        'Advice on exchange control requirements for cross-border transactions, working with your authorised dealer',
        'Withholding tax and double taxation agreement positions on cross-border payments',
        'Transfer pricing documentation support for related-party arrangements',
        'Restructuring and shareholder arrangement advice',
      ],
    },
    approach: {
      title: 'How we approach it',
      steps: [
        {
          title: 'Establish what the decision actually is',
          body: 'Advisory engagements go wrong when the deliverable is a report rather than a decision. We start from what you have to decide and what would change your mind.',
        },
        {
          title: 'Test the numbers before building on them',
          body: 'Valuations and diligence conclusions inherit the quality of the underlying records. Where those records are weak we say so in the report rather than presenting a spurious precision.',
        },
        {
          title: 'Settle the exchange control position early',
          body: 'For cross-border work, whether your authorised dealer can process the transaction and what documentation it will require is a threshold question. It should be answered before terms are agreed, not after.',
        },
        {
          title: 'State the limitations plainly',
          body: 'Every report records what we did, what we did not do, and what our conclusions depend on. Advisory work that hides its assumptions is worse than none.',
        },
      ],
    },
    frameworks: {
      title: 'Frameworks and bodies involved',
      items: [
        'Exchange Control Act [Chapter 22:05] and Reserve Bank of Zimbabwe directives, applied through authorised dealers',
        'Income Tax Act [Chapter 23:06] provisions on withholding taxes and related-party transactions',
        'Double taxation agreements in force between Zimbabwe and its treaty partners',
        'Companies and Other Business Entities Act [Chapter 24:31] on restructuring and shareholder arrangements',
        'SADC-region considerations where a client trades or holds assets across borders',
      ],
    },
    note:
      'Exchange control requirements, surrender and retention arrangements, and withholding rates are amended frequently. We confirm the current position with your authorised dealer or the RBZ for each transaction rather than relying on precedent from a prior deal.',
    faqs: [
      {
        q: 'How long does financial due diligence take?',
        a: 'It depends almost entirely on the state of the target’s records. A well-kept set of books can be worked through in a few weeks; poor records can double that. We give an estimate after a short scoping review rather than at first contact.',
      },
      {
        q: 'Can you value a business for a shareholder dispute?',
        a: 'Yes, and we will be explicit about the basis of valuation and its limitations, because in a contested setting those are the points that will be challenged. Where the matter is in litigation we work alongside your legal advisers.',
      },
      {
        q: 'We are paying a related company abroad. What should we check?',
        a: 'Four things, before the payment: that a written agreement exists and reflects reality, that the amount has a defensible basis, that your authorised dealer will process it with the documentation you hold, and what withholding tax applies and whether treaty relief is available.',
      },
    ],
  },

  'insurance-strategy': {
    lead:
      'Risk registers, cover adequacy reviews and claims support — so that the losses which would genuinely damage the balance sheet are the ones you are actually insured against.',
    intro: [
      'Most businesses we review are insured, and most are insured for the wrong things. Cover was arranged years ago, renewed on autopilot, and never revisited against how the business actually changed. Sums insured drift out of date. New exposures — a new site, a new contract, a new liability — never make it onto the schedule.',
      'This is an accountant’s view of risk, not a broker’s. We do not sell insurance and we earn no commission on any policy. Our role is to identify what would actually hurt you, establish whether current arrangements respond to it, and give you the analysis to take to your broker or insurer.',
    ],
    includes: {
      title: 'What the engagement covers',
      items: [
        'Risk register development — identifying exposures, rating them by likelihood and impact, and assigning ownership',
        'Cover adequacy review against the risks identified, including gaps and unnecessary duplication',
        'Sums insured review, including reinstatement values in a multi-currency environment where historic figures understate replacement cost',
        'Business interruption exposure analysis and indemnity period assessment',
        'Review of contractual insurance obligations under leases, loan agreements and customer contracts',
        'Internal control review where controls are the primary mitigation rather than insurance',
        'Claims support — quantification, documentation and preparation of the claim file',
        'Post-loss review of what the claim experience revealed about the arrangements',
      ],
    },
    approach: {
      title: 'How we approach it',
      steps: [
        {
          title: 'Identify what would actually threaten the business',
          body: 'Not a generic risk list. The specific events — loss of a key site, a debtor concentration failing, a fire, a fraud, a currency movement — that would materially damage this business.',
        },
        {
          title: 'Separate what should be insured from what should be controlled',
          body: 'Insurance is one treatment among several, and it is often the wrong one. Some exposures are cheaper to control, avoid or absorb. Paying premiums for a risk you could have designed out is a poor trade.',
        },
        {
          title: 'Test the cover against the exposure',
          body: 'We read the policy schedules against the risk register and the financial statements. Under-insurance, outdated sums insured, exclusions that bite on your actual operations, and indemnity periods too short for realistic recovery are the recurring findings.',
        },
        {
          title: 'Support the claim when it happens',
          body: 'Claims are settled on documentation. Businesses that can produce a quantified, supported claim file recover more, and faster, than those assembling one under pressure after a loss.',
        },
      ],
    },
    frameworks: {
      title: 'How this fits with your other advisers',
      items: [
        'We do not place insurance, hold an insurance licence, or receive commission from insurers or brokers',
        'Our output is analysis you take to your broker or insurer, not a product recommendation',
        'Where regulated advice is required, we work alongside your licensed broker rather than substituting for them',
        'Risk registers are built to support board reporting and governance obligations as well as insurance decisions',
      ],
    },
    note:
      'Insurance in Zimbabwe is regulated by the Insurance and Pensions Commission (IPEC). Placement and advice on specific insurance products is the province of licensed intermediaries. Our engagement is a financial and risk analysis, deliberately positioned upstream of that.',
    faqs: [
      {
        q: 'Do you sell insurance?',
        a: 'No. We hold no insurance licence and take no commission from insurers or brokers. That independence is the point of the exercise — our analysis is not connected to what any product pays.',
      },
      {
        q: 'How often should sums insured be reviewed?',
        a: 'At least annually, and immediately after any material change — a new site, significant capital expenditure, a new contract with its own insurance requirements. In a multi-currency environment historic sums insured become inadequate faster than most businesses expect.',
      },
      {
        q: 'Can you help with a claim already in dispute?',
        a: 'We can help quantify and document the loss and prepare the claim file. Where the dispute concerns policy interpretation or is heading to a formal process, that is a matter for your legal advisers, and we work alongside them.',
      },
    ],
  },
}

export const getServiceContent = (slug) => serviceContent[slug]

export default serviceContent
