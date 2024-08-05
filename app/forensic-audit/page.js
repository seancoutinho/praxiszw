import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Forensic Audit">
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
                                                    <Link href="/tax-management">Tax Management</Link>
                                                </li>
                                                <li>
                                                    <Link href="/strategy-planning">Strategy & Planning</Link>
                                                </li>
                                                <li>
                                                    <Link href="/bookkeeping">Bookkeeping</Link>
                                                </li>
                                                <li>
                                                    <Link href="/forensic-audit" className="current">
                                                        Forensic Audit
                                                    </Link>
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
                                                    style={{
                                                        backgroundImage: 'url(assets/images/service/service-7.jpg)',
                                                    }}
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
                                                <img src="assets/images/service/forensic-audit.jpg" alt="Forensic Audit" />
                                            </figure>
                                            <div className="text">
                                                <h2>Forensic Audit</h2>
                                                <p>
                                                    Praxis Chartered Accountants provides comprehensive forensic audit services to investigate and resolve financial discrepancies, fraud, and misconduct. Our expert team uses advanced techniques and methodologies to uncover critical insights and deliver actionable findings.
                                                </p>
                                                <p>
                                                    We specialize in detailed investigations, evidence collection, and reporting that support legal proceedings and organizational integrity. Our goal is to ensure transparency, accountability, and a robust response to financial irregularities.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>Overview</h3>
                                                        <p>
                                                            Our forensic audit services are designed to identify, analyze, and address financial discrepancies and fraudulent activities. We conduct thorough investigations, ensuring all evidence is meticulously gathered and analyzed to provide you with clear, reliable results.
                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Fraud Investigation</li>
                                                            <li>Financial Irregularity Analysis</li>
                                                            <li>Litigation Support</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/service-9.jpg" alt="Forensic Audit Overview" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Our Solutions</h3>
                                                <p>
                                                    Our forensic audit solutions are tailored to address complex financial issues and provide clear, actionable insights. With a focus on accuracy and thoroughness, we help you uncover the truth, resolve disputes, and enhance financial integrity.
                                                </p>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-8"></i>
                                                        </div>
                                                        <h3>Fraud Detection</h3>
                                                        <p>Identifying and investigating fraudulent activities to protect your organization.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-13"></i>
                                                        </div>
                                                        <h3>Evidence Analysis</h3>
                                                        <p>Collecting and analyzing evidence to support legal and regulatory actions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text mt_50">
                                                <p>
                                                    Choose Praxis Chartered Accountants for expert forensic audit services that ensure thorough investigations and reliable results. Our commitment is to uphold integrity and support your organization in navigating complex financial challenges.
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
                                                    <h5>Forensic Audit Process Overview</h5>
                                                    <span>Pdf(160kb)</span>
                                                    <button type="button">Download</button>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <i className="icon-30"></i>
                                                    </div>
                                                    <h5>Fraud Prevention Best Practices</h5>
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