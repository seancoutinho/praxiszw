/**
 * Praxis Insights — rental income: legal and tax obligations (one article).
 *
 * Supplied as finished copy with inline source links. The wording is kept; the
 * conversion to ArticleBody blocks changes only the form:
 *   - Inline citations (ZIMRA Public Notice 08 of 2026, Propzone) → one closing
 *     "Sources" callout, since blocks carry plain text, not links.
 *   - The presumptive-tax facts stated in the text are also gathered into an
 *     "at a glance" table, as other articles do for key figures.
 *   - Specific rates, deadlines and limits are kept as supplied (they are
 *     sourced) and carry verify flags, per the house rule.
 *
 * SEED DATA ONLY — imported once with
 *   npm run cms -- import content/insights-rental-income.mjs --status published
 * after which the article lives in MongoDB and is edited at /studio. Delete
 * this file once the import is confirmed.
 */

const insights = [
  {
    slug: 'rental-income-zimbabwe-tax-obligations',
    title: 'Rental income in Zimbabwe: current legal and tax obligations',
    seoTitle: 'Rental Income Tax in Zimbabwe',
    metaDescription:
      'The 15% presumptive tax on commercial rentals from 2026, landlord and tenant duties, deposits, rent currency and lawful eviction in Zimbabwe.',
    excerpt:
      'Landlords and tenants now need to distinguish clearly between residential and commercial use. From 1 January 2026, qualifying commercial rent attracts a 15% presumptive tax; purely residential rent does not, but it is not tax-free either.',
    date: '2026-09-22',
    category: 'Tax compliance',
    tags: ['Rental income', 'Presumptive tax', 'ZIMRA', 'Landlords', 'Leases'],
    body: [
      { t: 'p', c: 'Zimbabwe’s rental-law framework now requires landlords and tenants to distinguish clearly between residential and commercial use. The most significant recent tax change is the 15% presumptive rental income tax on qualifying commercial rentals, effective from 1 January 2026; purely residential rental income is not subject to that specific tax.' },

      { t: 'h2', c: 'Scope of the rules' },
      { t: 'p', c: 'Residential tenancies are generally regulated by the Rent Regulations, 2007 (SI 32 of 2007), issued under the Housing and Building Act [Chapter 22:07]. Commercial leases are governed separately, principally by the Commercial Premises (Lease Control) Act [Chapter 14:04] and its regulations.' },
      { t: 'p', c: 'This distinction matters because a tenant who uses premises to conduct a trade, business or profession can trigger the new presumptive rental income tax rules, even where other parts of the same building are residential. The residential part is excluded from that presumptive tax.' },

      { t: 'h2', c: 'Tax on rental income' },
      { t: 'p', c: 'From 1 January 2026, a proprietor who receives rent from premises used by a tenant for business, trade or an occupation is generally subject to Presumptive Rental Income Tax. The tax is 15% of the gross rent received and is a final tax: no expenses, deductions or allowances may be deducted in arriving at the taxable amount.' },
      {
        t: 'table',
        head: ['Presumptive Rental Income Tax', 'At a glance'],
        rows: [
          ['Applies to', 'Rent from premises a tenant uses for business, trade or an occupation'],
          ['Rate', '15% of gross rent received'],
          ['Deductions', 'None: it is a final tax'],
          ['Registration', 'Within 30 days of becoming a registrable proprietor'],
          ['Monthly return', 'By the 5th day of the following month'],
          ['Payment', 'By the 10th day of the following month'],
          ['Failure to remit', 'The tax, plus a penalty equal to 100% of the unpaid amount'],
        ],
      },
      { t: 'p', c: 'A landlord who was already registered, filing returns and paying tax under self-assessment up to 31 December 2025 continues declaring that rental income under normal income tax rates, subject to the transitional rules. A landlord newly registering from 1 January 2026 is generally brought into the presumptive tax system for qualifying commercial rental income.' },
      { t: 'p', c: 'Residential landlords should not assume that “exempt from presumptive tax” means “tax-free”. The exemption is from the new 15% commercial-rental presumptive tax; residential rental income remains relevant to the landlord’s ordinary income tax compliance under the applicable income tax rules.' },
      { t: 'verify', c: 'The rate, registration period, filing and payment dates, penalty and transitional rules above are from ZIMRA Public Notice 08 of 2026. Confirm the current position with ZIMRA before registering or filing, as notices can be revised.' },

      { t: 'h2', c: 'Landlord tax duties' },
      { t: 'p', c: 'For commercial or business-use premises, the landlord, owner, lessee or sub-lessee receiving rent is the “registrable proprietor” and must meet the following obligations.' },
      {
        t: 'ul',
        items: [
          'Register with ZIMRA within 30 days of becoming a registrable proprietor. Persons already receiving qualifying rent were required to register by 1 January 2026.',
          'Submit a schedule of leased properties and tenant details to ZIMRA.',
          'Notify ZIMRA of a change of address or cessation of the rental activity.',
          'Submit the monthly presumptive tax return by the 5th day of the following month.',
          'Pay the tax by the 10th day of the following month.',
          'Maintain sound records, including signed lease agreements, rent invoices or receipts, bank or mobile-money payment records, tenant-use details, and proof of tax remittance. These records support accurate returns and are essential during a ZIMRA audit.',
        ],
      },
      { t: 'p', c: 'Failure to register does not remove the underlying tax liability. Failure to remit can lead to recovery of the tax plus a penalty equal to 100% of the unpaid amount.' },

      { t: 'h2', c: 'Tenants and tax payments' },
      { t: 'p', c: 'The tax is primarily a landlord obligation, but commercial tenants can become directly involved where the landlord or an agent fails to remit it. ZIMRA may appoint the tenant liable for presumptive tax to pay the outstanding tax directly to ZIMRA out of future rent.' },
      { t: 'p', c: 'Where this occurs, the tenant has statutory protection against eviction or rent escalation for three months solely because the tenant complied with the tax-payment instruction. The tenant should retain ZIMRA’s appointment notice, payment confirmations and any withholding documentation, and promptly provide copies to the landlord or managing agent.' },
      { t: 'callout', title: 'Informal trader’s tax', c: 'Landlords must also continue collecting informal trader’s tax from eligible tenants where applicable. This is a tax on the tenant’s income, not a tax on the landlord, and ZIMRA states it is calculated at 10% of rent.' },

      { t: 'h2', c: 'Rent, deposits and currency' },
      { t: 'p', c: 'For residential premises covered by the Rent Regulations, a landlord may demand no more than one month’s rent in advance and one month’s rent as a security deposit. A premium, bonus or similar extra payment for granting the tenancy is prohibited, and a lease-preparation fee drawn up by the landlord is limited to 5% of the first full month’s rent.' },
      { t: 'p', c: 'The deposit must be refunded within 14 days after the tenant vacates, unless the landlord gives written notice within that period setting out loss or damage for which the tenant is liable. A signed move-in and move-out inspection report, supported by dated photographs, is the strongest practical protection for both parties.' },
      { t: 'p', c: 'Following the 2026 amendment to the Rent Regulations, landlords must quote and demand payment in legally accepted currency at the time payment is due. The currency and payment method should therefore be expressly stated in the lease, and neither party should unilaterally change the agreed payment currency mid-tenancy.' },
      { t: 'verify', c: 'The advance-rent, deposit, lease-fee and refund limits apply to residential premises covered by the Rent Regulations, 2007 as amended. Confirm the current regulations, including the 2026 currency amendment, before relying on a specific limit.' },

      { t: 'h2', c: 'Landlord obligations' },
      { t: 'p', c: 'A landlord should ensure that every tenancy is documented in a written agreement covering rent, due date, currency, deposit, utilities, repairs, notice, renewal, default interest if any, and the permitted use of the premises. This is especially important where a tenant might use a residential-looking property for business, because that use may change the tax outcome.' },
      { t: 'p', c: 'The landlord’s core duties include:' },
      {
        t: 'ul',
        items: [
          'Deliver the property in a condition fit for its intended use. In a home, this includes structurally sound premises, working sanitation and functional agreed services.',
          'Preserve the tenant’s peaceful occupation. Do not enter without reasonable prior notice except in an emergency, and do not harass or interfere with occupation.',
          'Attend to structural repairs and fixed services such as the roof, exterior walls, plumbing and electrical installations, unless a valid agreement clearly allocates a particular responsibility.',
          'Issue clear payment records and keep a complete rent ledger showing rent billed, rent paid, arrears, deposits and utility charges.',
          'Use lawful enforcement procedures where rent is unpaid. Do not lock out the tenant, remove possessions, disconnect water or electricity, or otherwise carry out “self-help” eviction.',
        ],
      },

      { t: 'h2', c: 'Tenant obligations' },
      { t: 'p', c: 'A tenant’s main obligation is to pay the agreed rent, in the agreed currency and by the agreed due date. The tenant must also use the property only for the purpose authorised by the lease, preserve it with reasonable care, report defects promptly and avoid causing damage beyond ordinary wear and tear.' },
      { t: 'p', c: 'Other practical tenant duties include:' },
      {
        t: 'ul',
        items: [
          'Pay agreed utility charges and other recoverable costs on time, and retain proof of payment.',
          'Keep the interior reasonably clean and handle minor matters within the tenant’s control, such as damage caused by the tenant, household members or visitors.',
          'Obtain written consent before making alterations, subletting or changing the permitted use of the premises.',
          'Cooperate with lawful, properly notified inspections and repairs.',
          'If formally directed by ZIMRA to pay presumptive rental tax, pay it as instructed and retain all evidence of payment.',
        ],
      },

      { t: 'h2', c: 'Arrears and eviction' },
      { t: 'p', c: 'Non-payment of rent is a material breach of the lease, but eviction is not automatic. A landlord should issue a written demand, give the tenant a reasonable chance to cure the breach, and maintain a documented record of notices and arrears before initiating formal proceedings.' },
      { t: 'p', c: 'Zimbabwe’s Constitution prohibits eviction from a home without a court order made after consideration of the relevant circumstances. For residential matters, the Rent Board may determine fair rent, issue arrears-related orders and grant an ejectment certificate; physical eviction ultimately requires a court order and is enforced through the Messenger of Court.' },

      { t: 'h2', c: 'Practical lease checklist' },
      { t: 'p', c: 'For a client-ready lease, include the following provisions:' },
      {
        t: 'ul',
        items: [
          'Exact monthly rent, due date, payment channel and legally recognised payment currency.',
          'A statement of whether the premises are residential, commercial or mixed-use.',
          'A prohibition on the tenant using the premises for business without written consent.',
          'Deposit amount, inspection process, permissible deductions and refund timetable.',
          'Clear allocation of utilities, maintenance and repair obligations.',
          'Rent-review formula, written-notice requirement and effective date of any increase.',
          'Default notices, interest or penalties if lawful and agreed, termination procedure and dispute-resolution process.',
          'A ZIMRA compliance clause for commercial leases, requiring cooperation with registration, tenant-detail schedules and any lawful tax withholding or direct-payment instruction.',
        ],
      },

      { t: 'callout', title: 'Important note', c: 'This article is a practical overview, not legal or tax advice for a particular transaction. Landlords, property managers and business tenants should obtain tailored advice before signing a lease, altering the use of premises or responding to a ZIMRA enforcement action.' },

      { t: 'callout', title: 'Sources', c: 'ZIMRA Public Notice 08 of 2026: Presumptive Rental Income Tax. Rent Regulations, 2007 (SI 32 of 2007), issued under the Housing and Building Act [Chapter 22:07], as amended. Commercial Premises (Lease Control) Act [Chapter 14:04]. Constitution of Zimbabwe. Propzone landlord and tenant guides.' },
    ],
  },
]

export default insights
