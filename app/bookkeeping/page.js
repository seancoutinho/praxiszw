import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Bookeeping">
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
                                                    <Link href="/bookkeeping" className="current">
                                                        Book Keeping & Accounting
                                                    </Link>
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
                                                <img src="assets/images/service/bookkepping.jpg" alt="Bookkeeping" />
                                            </figure>
                                            <div className="text">
                                                <h2>Bookkeeping</h2>
                                                <p>
                                                    At Praxis Chartered Accountants, we offer meticulous bookkeeping services to ensure that your financial records are accurate, up-to-date, and compliant with accounting standards. Our team handles all aspects of your bookkeeping needs, allowing you to focus on growing your business.
                                                </p>
                                                <p>
                                                    From daily transaction recording to monthly reconciliations, we provide comprehensive solutions that streamline your financial operations. Our goal is to offer you clarity and control over your financial data, supporting informed decision-making and financial health.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>Overview</h3>
                                                        <p>
                                                            Our bookkeeping services are designed to maintain accurate financial records, ensuring all transactions are properly recorded and categorized. We handle everything from ledger management to generating financial statements, providing you with a clear picture of your financial position.
                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Transaction Recording</li>
                                                            <li>Monthly Reconciliation</li>
                                                            <li>Financial Reporting</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/service-9.jpg" alt="Bookkeeping Overview" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Our Solutions</h3>
                                                <p>
                                                    Our bookkeeping solutions provide reliable and accurate financial record-keeping, tailored to meet your business needs. With a focus on precision and efficiency, we ensure that your books are always in order, giving you confidence and transparency in your financial operations.
                                                </p>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-8"></i>
                                                        </div>
                                                        <h3>Transaction Management</h3>
                                                        <p>Efficiently managing and recording all financial transactions for accuracy.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-13"></i>
                                                        </div>
                                                        <h3>Reconciliation</h3>
                                                        <p>Ensuring your financial records align with bank statements and other documents.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text mt_50">
                                                <p>
                                                    Trust Praxis Chartered Accountants for accurate and reliable bookkeeping services. Our dedicated team is here to ensure that your financial records are meticulously maintained, providing you with the insights needed to manage your business effectively.
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
                                                    <h5>Bookkeeping Best Practices Guide</h5>
                                                    <span>Pdf(160kb)</span>
                                                    <button type="button">Download</button>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <i className="icon-30"></i>
                                                    </div>
                                                    <h5>Financial Record Keeping Checklist</h5>
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