import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/PageHeader'
import { contact, site, whatsappLink } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Praxis collects, uses, stores and protects personal information submitted through this website and during professional engagements.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        path="/privacy"
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How we handle personal information collected through this website and in the course of our professional work."
      />

      <section className="section">
        <div className="container container--narrow">

          <div className="prose mt-12">
            <h2>Who we are</h2>
            <p>
              {site.legalName}, of {contact.addressOneLine}, is responsible for the personal
              information described in this policy. You can reach us
              at <a href={`mailto:${contact.email}`}>{contact.emailLabel}</a> or on{' '}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{contact.phone}</a>{' '}
              on WhatsApp.
            </p>

            <h2>What we collect</h2>
            <h3>Information you give us</h3>
            <p>
              When you submit the enquiry or consultation form on this website we collect the
              name, email address, telephone number, organisation and message you enter. We ask
              you not to send financial records, identity documents or tax credentials through
              those forms.
            </p>
            <h3>Information collected in the course of an engagement</h3>
            <p>
              Where you engage us professionally we will hold the information necessary to
              perform that engagement — which may include financial records, payroll data,
              identity and registration documents, and correspondence with third parties such as
              ZIMRA, your bank or your other advisers.
            </p>
            <h3>If you contact us on WhatsApp</h3>
            <p>
              Several buttons on this site open a WhatsApp conversation with us.
              WhatsApp is operated by Meta, and any message you send through it is
              processed under Meta&rsquo;s own terms and privacy policy, not ours — including
              the phone number you are messaging from. We receive and retain the contents
              of that conversation in the same way as any other client correspondence.
              If you would rather not use WhatsApp, email or telephone reach us equally well.
            </p>

            <h3>Information collected automatically</h3>
            <p>
              This website does not run third-party analytics or advertising trackers. Standard
              server logs may record request information such as IP address and user agent for
              security and operational purposes. Enquiry forms are delivered through a
              third-party email delivery service, which processes the contents of the form in
              order to send it to us.
            </p>

            <h2>Why we use it</h2>
            <ul>
              <li>To respond to your enquiry and arrange an introductory consultation</li>
              <li>To provide the professional services you engage us to perform</li>
              <li>To meet our own legal, regulatory and professional obligations, including record-retention requirements</li>
              <li>To maintain the security and integrity of our systems and records</li>
            </ul>
            <p>
              We do not sell personal information, and we do not use enquiry details for
              marketing unrelated to the enquiry you made.
            </p>

            <h2>Who we share it with</h2>
            <p>We disclose personal information only where one of the following applies:</p>
            <ul>
              <li>You have asked or authorised us to — for example, dealing with ZIMRA, a bank or another adviser on your behalf</li>
              <li>It is necessary to perform the engagement you have instructed</li>
              <li>We are required to disclose it by law, by a court, or by a regulator</li>
              <li>It is provided to a service provider that supports our operations, under obligations of confidentiality</li>
            </ul>
            <p>
              Professional confidentiality applies to client information independently of this
              policy, and continues after an engagement ends.
            </p>

            <h2>How long we keep it</h2>
            <p>
              Client records are retained for the periods required by the tax and company
              legislation applicable to the engagement, and by our professional obligations,
              which in some cases require retention for several years after the engagement ends.
              Enquiries that do not lead to an engagement are retained only as long as needed to
              deal with the enquiry.
            </p>

            <h2>Security</h2>
            <p>
              We apply administrative and technical measures appropriate to the sensitivity of
              the information we hold, including restricting access to those who need it for the
              engagement. No system is perfectly secure, and we ask you not to send sensitive
              records through unencrypted email or through the forms on this site.
            </p>

            <h2>Your rights</h2>
            <p>
              You may ask us what personal information we hold about you, ask us to correct
              inaccurate information, and ask us to delete information we no longer have a
              lawful or professional reason to retain. Write to us at the address above.
            </p>
            <p>
              Where a request conflicts with a retention obligation imposed on us by law or by
              our professional body, we will explain which obligation applies rather than simply
              declining.
            </p>

            <h2>Changes</h2>
            <p>
              We will update this page if our practices change. Material changes will be
              reflected in the date below.
            </p>
            <p className="small muted">Last reviewed: [date — Praxis to insert on publication]</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
