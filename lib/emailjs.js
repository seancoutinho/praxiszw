import emailjs from 'emailjs-com'

/**
 * EmailJS delivery for the site's two forms.
 *
 * The public key below is EmailJS's browser key and is designed to be visible
 * in client source. The service/template IDs are carried over from the
 * previous build.
 *
 * NEEDS CLIENT INPUT: `RECIPIENT` is a personal Gmail address inherited from
 * the old site. It should be repointed at a firm mailbox before launch.
 */
const SERVICE_ID = 'service_5b2kdcp'
const TEMPLATE_ID = 'template_gi615z7'
const PUBLIC_KEY = '_9cuYkV2p6GKYAmFR'
const RECIPIENT = 'bonifacecoutinho@gmail.com'

export async function sendEnquiry(fields) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { ...fields, to_email: RECIPIENT },
    PUBLIC_KEY
  )
}
