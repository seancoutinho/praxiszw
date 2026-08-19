import emailjs from 'emailjs-com'

/**
 * EmailJS delivery for the site's two forms.
 *
 * The public key below is EmailJS's browser key and is designed to be visible
 * in client source. The service/template IDs are carried over from the
 * previous build.
 *
 * `RECIPIENT` is passed to the template as {{to_email}}. It must stay in sync
 * with `contact.email` in lib/site.js — a typo here fails silently, because
 * EmailJS accepts the request and the mail simply never arrives.
 */
const SERVICE_ID = 'service_5b2kdcp'
const TEMPLATE_ID = 'template_gi615z7'
const PUBLIC_KEY = '_9cuYkV2p6GKYAmFR'
const RECIPIENT = 'bcoutinho@praxisaccountants.co.zw'

export async function sendEnquiry(fields) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { ...fields, to_email: RECIPIENT },
    PUBLIC_KEY
  )
}
