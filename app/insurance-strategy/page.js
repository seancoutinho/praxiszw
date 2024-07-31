import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Insurance Strategy">
                <div>
                    <section className="service-details p_relative">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                    <div className="service-sidebar mr_40">
                                        <div className="sidebar-widget category-widget">
                                            <h3>All Services</h3>
                                            <ul className="category-list clearfix">
                                                <li><Link href="/tax-management">Tax Management</Link></li>
                                                <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                                                <li><Link href="/bookkeeping">Program Manager</Link></li>
                                                <li><Link href="/forensic-audit">Forensic Audit</Link></li>
                                                <li><Link href="/financial-advices">Financial Advice</Link></li>
                                                <li><Link href="/insurance-strategy" className="current">Insurance Strategy</Link></li>
                                            </ul>
                                        </div>
                                        <div className="sidebar-widget contact-widget centred">
                                            <div className="widget-content">
                                                <div
                                                    className="bg-layer"
                                                    style={{ backgroundImage: 'url(assets/images/service/service-7.jpg)' }}
                                                ></div>
                                                <h3>
                                                    Do You Need <br />
                                                    Any <span>Help?</span>
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
                                                <img src="assets/images/service/insurance-strategy.jpg" alt="Insurance Strategies" />
                                            </figure>
                                            <div className="text">
                                                <h2>Insurance Strategies</h2>
                                                <p>
                                                    At Praxis Chartered Accountants, we provide expert insurance strategies designed to safeguard your assets and ensure financial security. Our tailored approach helps you identify and implement the most effective insurance solutions to protect against risks and uncertainties.
                                                </p>
                                                <p>
                                                    We analyze your specific needs and exposures to craft customized insurance strategies that align with your financial goals. Our aim is to provide you with peace of mind through comprehensive coverage and strategic risk management.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>Overview</h3>
                                                        <p>
                                                            Our insurance strategies services offer a proactive approach to managing risks and ensuring adequate coverage. We help you navigate the complexities of insurance products, identify potential gaps in your coverage, and implement strategies that protect your financial well-being.
                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Risk Assessment</li>
                                                            <li>Customized Coverage Solutions</li>
                                                            <li>Policy Optimization</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/service-9.jpg" alt="Insurance Strategies Overview" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Our Solutions</h3>
                                                <p>
                                                    Our insurance strategies solutions are designed to provide you with comprehensive protection and peace of mind. By offering expert advice and personalized coverage options, we ensure that your insurance strategy effectively mitigates risks and supports your overall financial goals.
                                                </p>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-8"></i>
                                                        </div>
                                                        <h3>Risk Management</h3>
                                                        <p>Identifying and managing potential risks to protect your assets.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-13"></i>
                                                        </div>
                                                        <h3>Coverage Optimization</h3>
                                                        <p>Ensuring your insurance policies provide the most effective coverage.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text mt_50">
                                                <p>
                                                    Choose Praxis Chartered Accountants for comprehensive insurance strategies that safeguard your future. Our dedicated team works to ensure that your insurance solutions are both effective and aligned with your financial objectives.
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
                                                    <h5>Insurance Strategy Guide</h5>
                                                    <span>Pdf(160kb)</span>
                                                    <button type="button">Download</button>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <i className="icon-30"></i>
                                                    </div>
                                                    <h5>Risk Management Best Practices</h5>
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