import Link from 'next/link'
import HeroBackdrop from '@/components/sections/home/HeroBackdrop'
import Icon from '@/components/ui/Icon'
import { site } from '@/lib/site'

/**
 * Replaces the three-slide autoplay carousel of Western stock photography.
 * One statement, one credibility line, one primary action — and a panel that
 * puts the firm's actual differentiators above the fold instead of a photo.
 */
export default function Hero() {
  return (
    <section className="hero">
      <HeroBackdrop />
      <div className="container">
        <div className="hero-inner">
          <div>
            <p className="eyebrow eyebrow--light">
              Chartered Accountants · Harare, Zimbabwe
            </p>
            <h1 className="mt-6">
              Books that hold up. Returns that file on time.
            </h1>
            <p className="hero-lead">
              Praxis is a Harare chartered accountancy and advisory practice. We take on the
              accounting, ZIMRA compliance and assurance work that owner-managed businesses,
              NGOs and public-sector entities cannot afford to get wrong.
            </p>

            <div className="hero-cta">
              <Link href="/contact" className="btn btn--accent btn--lg">
                Book a consultation
                <Icon name="arrowRight" size={18} />
              </Link>
              <Link href="/services" className="btn btn--on-navy btn--lg">
                See what we do
              </Link>
            </div>

            <div className="hero-proof">
              <div className="facts">
                <div>
                  <p className="fact-value">Since {site.founded}</p>
                  <p className="fact-label">Practising in Harare</p>
                </div>
                <div>
                  <p className="fact-value">ICAZ</p>
                  <p className="fact-label">
                    Led by a member of the Institute of Chartered Accountants of Zimbabwe
                  </p>
                </div>
                <div>
                  <p className="fact-value">ZWG &amp; USD</p>
                  <p className="fact-label">
                    Multi-currency books and returns handled as standard
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <h2>What working with us looks like</h2>
            <ul className="hero-panel-list">
              <li>
                <span className="n">01</span>
                <span>
                  <span className="t">You speak to the person doing the work</span>
                  <span className="d">
                    A small practice by design. The accountant who scopes your engagement is
                    the one who signs it off.
                  </span>
                </span>
              </li>
              <li>
                <span className="n">02</span>
                <span>
                  <span className="t">Deadlines are tracked, not remembered</span>
                  <span className="d">
                    PAYE, VAT, QPDs and annual returns run off a compliance calendar we keep
                    for every client.
                  </span>
                </span>
              </li>
              <li>
                <span className="n">03</span>
                <span>
                  <span className="t">Fees agreed before we start</span>
                  <span className="d">
                    A written scope and fee basis up front. No open-ended hourly billing on
                    routine compliance work.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
