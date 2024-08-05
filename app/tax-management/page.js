
import ServiceTabs1 from "@/components/elements/ServiceTabs1"
import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export default function Home() {

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Tax Management">
        <div>
          <section className="service-details p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="service-sidebar mr_40">
                    <div className="sidebar-widget category-widget">
                      <h3>All Services</h3>
                      <ul className="category-list clearfix">
                        <li>
                          <Link href="/tax-management" className="current">
                            Tax Management
                          </Link>
                        </li>
                        <li>
                          <Link href="/strategy-planning">Strategy & Planning</Link>
                        </li>
                        <li>
                          <Link href="/bookkeeping">Bookkeeping</Link>
                        </li>
                        <li>
                          <Link href="/forensic-audit">Forensic Audit</Link>
                        </li>
                        <li>
                          <Link href="/financial-advices">Financial Advice</Link>
                        </li>
                        <li>
                          <Link href="/insurance-strategy">Insurance Strategy</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-widget contact-widget centred">
                      <div className="widget-content">
                        <div
                          className="bg-layer"
                          style={{ backgroundImage: 'url(assets/images/service/service-7.jpg)' }}
                        ></div>
                        <h3>
                          Do You Need <br />Any <span>Help?</span>
                        </h3>
                        <div className="icon-box">
                          <i className="icon-29"></i>
                        </div>
                        <div className="inner-box">
                          <p>
                            <Link href="mailto:info@praxisaccountants.com">info@praxisaccountants.com</Link>
                          </p>
                          <h3>
                            <Link href="tel:263772243934">+263 772 24 3934</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one mb_90">
                      <figure className="image-box">
                        <img src="assets/images/service/service-10.jpg" alt="Tax Management" />
                      </figure>
                      <div className="text">
                        <h2>Tax Management</h2>
                        <p>
                          At Praxis Chartered Accountants, we provide comprehensive tax management services designed to optimize your tax position and ensure compliance with all regulations. Our expert team works closely with you to navigate complex tax laws and implement strategies that minimize liabilities and maximize savings.
                        </p>
                        <p>
                          Our approach to tax management combines in-depth knowledge with proactive strategies. We focus on understanding your unique financial situation and business goals, allowing us to deliver tailored solutions that address your specific needs.
                        </p>
                      </div>
                    </div>
                    <div className="content-two mb_90">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                          <div className="text-box">
                            <h3>Overview</h3>
                            <p>
                              Our tax management services are designed to provide you with a clear path through the complexities of tax legislation. We offer strategic planning, compliance monitoring, and proactive advice to ensure your tax affairs are handled efficiently.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Strategic Tax Planning</li>
                              <li>Compliance and Reporting</li>
                              <li>Tax Efficiency Solutions</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image-box">
                            <img src="assets/images/service/service-9.jpg" alt="Tax Management Overview" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="content-three mb_85">
                      <div className="text mb_100">
                        <h3>Our Solutions</h3>
                        <p>
                          Our tax management solutions are crafted to address both immediate tax needs and long-term financial goals. By leveraging our expertise, you gain access to strategies that not only ensure compliance but also contribute to overall financial stability and growth.
                        </p>
                      </div>
                    </div>
                    <div className="content-four">
                      <h3>Download Resources</h3>
                      <ul className="download-list clearfix">
                        <li>
                          <div className="icon-box">
                            <i className="icon-30"></i>
                          </div>
                          <h5>Annual Tax Management Report</h5>
                          <span>Pdf(160kb)</span>
                          <button type="button">Download</button>
                        </li>
                        <li>
                          <div className="icon-box">
                            <i className="icon-30"></i>
                          </div>
                          <h5>Tax Compliance Checklist</h5>
                          <span>Pdf(160kb)</span>
                          <button type="button">Download</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>

      </Layout>
    </>
  )
}