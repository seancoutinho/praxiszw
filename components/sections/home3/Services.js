import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="service-style-three p_relative bg-color-2">
        <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
        <div className="pattern-layer-2" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
        <div className="auto-container">
          <div className="sec-title centred light mb_60">
            <span className="sub-title">What We Do</span>
            <h2>We Provide the Best Consulting <br />Services in Zimbabwe</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-three wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-7"></i></div>
                  <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3>
                  <p>Developing strategic plans to drive long-term success and business growth.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-three wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-12"></i></div>
                  <h3><Link href="/bookkeeping">External Audit</Link></h3>
                  <p>Providing independent evaluations to ensure financial accuracy and regulatory compliance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-three wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-8"></i></div>
                  <h3><Link href="/tax-management">Tax Management</Link></h3>
                  <p>Optimizing tax strategies to enhance savings and ensure compliance</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-three wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-13"></i></div>
                  <h3><Link href="/forensic-audit">Forensic Audit</Link></h3>
                  <p>Formulating policies to guide and maximize your investment decisions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-14"></i></div>
                  <h3><Link href="/financial-advices">Financial Advice</Link></h3>
                  <p>Offering expert guidance to help you make informed financial decisions.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
              <div className="service-block-three wow fadeInRight animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="icon-box"><i className="icon-15"></i></div>
                  <h3><Link href="/insurance-strategy">Insurance Strategy</Link></h3>
                  <p>Designing insurance solutions to safeguard your assets and manage risks effectively.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="more-btn centred">
            <Link href="/services" className="theme-btn-one">More Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
