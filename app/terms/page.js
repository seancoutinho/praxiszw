import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/ui/PageHeader'
import { contact, site } from '@/lib/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms of Use',
  description:
    'The terms governing use of the Praxis Chartered Accountants website and the basis on which the information published here is provided.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <Layout>
      <PageHeader
        breadcrumbs={[{ label: 'Terms of Use' }]}
        path="/terms"
        eyebrow="Legal"
        title="Terms of Use"
        lead="The basis on which this website and the information published on it are provided."
      />

      <section className="section">
        <div className="container container--narrow">

          <div className="prose mt-12">
            <h2>These terms</h2>
            <p>
              This website is operated by {site.legalName}. By using it you accept these terms.
              If you do not accept them, please do not use the site.
            </p>

            <h2>Information is general, not advice</h2>
            <p>
              Everything published on this site — including the articles in
              our <Link href="/insights">Insights</Link> section and the descriptions on our
              service pages — is general information about how the relevant rules are structured.
              It is not advice on your circumstances and must not be relied on as such.
            </p>
            <p>
              Tax, company and exchange control legislation in Zimbabwe changes regularly, often
              through the annual Finance Act and through directives issued by ZIMRA and the
              Reserve Bank of Zimbabwe. Where an article refers to a rate, threshold or deadline,
              it flags that the figure must be confirmed against current sources. We do not
              undertake to keep published articles current, and an article may become out of date
              without notice.
            </p>

            <h2>No engagement is created by using this site</h2>
            <p>
              Sending an enquiry through this website does not create a professional relationship
              between you and Praxis. An engagement begins only when we have issued an engagement
              letter setting out scope, responsibilities and fees, and you have accepted it in
              writing.
            </p>
            <p>
              Until that point, please do not send us confidential information or documents you
              would not want held outside a formal engagement.
            </p>

            <h2>Liability</h2>
            <p>
              We take reasonable care over the content of this site but do not warrant that it is
              complete, current or free of error. To the fullest extent permitted by law, we
              accept no liability for loss arising from reliance on information published here in
              the absence of a professional engagement.
            </p>
            <p>
              Nothing in these terms limits liability that cannot lawfully be limited, including
              liability arising under our professional obligations to clients.
            </p>

            <h2>Third-party links</h2>
            <p>
              Where we link to an external site — a regulator, a professional body, a
              social media profile — we do not control that site and are not responsible for its
              content.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The content of this site, including the articles, is owned by {site.legalName}
              unless stated otherwise. You may read, print and share it for your own reference.
              Republishing it commercially, or presenting it as your own, requires our written
              permission.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent
              to <a href={`mailto:${contact.email}`}>{contact.emailLabel}</a>, or to{' '}
              {contact.addressOneLine}.
            </p>
            <p className="small muted">Last reviewed: [date — Praxis to insert on publication]</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
