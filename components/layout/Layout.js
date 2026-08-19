import BackToTop from '@/components/elements/BackToTop'
import WhatsAppButton from '@/components/elements/WhatsAppButton'
import Reveal from '@/components/elements/Reveal'
import Footer from './Footer'
import Header from './Header'

/** Site chrome. Every page renders through this. */
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <Reveal />
    </>
  )
}
