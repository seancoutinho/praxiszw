import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Financial Advice">
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
                                                    <Link href="/bookkeeping">Program Manager</Link>
                                                </li>
                                                <li>
                                                    <Link href="/forensic-audit">Forensic Audit</Link>
                                                </li>
                                                <li>
                                                    <Link href="/financial-advices" className="current">
                                                        Financial Advice
                                                    </Link>
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
                                                <img src="assets/images/service/surprised-black-businessman-looking-at-smartphone-2024-05-21-18-32-28-utc.jpg" alt="Financial Advice" />
                                            </figure>
                                            <div className="text">
                                                <h2>Financial Advice</h2>
                                                <p>
                                                    At Praxis Chartered Accountants, we offer expert financial advice to help you make informed decisions and achieve your financial goals. Our team of professionals provides personalized guidance on managing your finances, optimizing investments, and planning for the future.
                                                </p>
                                                <p>
                                                    We work closely with you to understand your unique financial situation and objectives, offering tailored strategies that enhance financial stability and growth. Our goal is to empower you with the knowledge and tools needed to make sound financial choices.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>Overview</h3>
                                                        <p>
                                                            Our financial advice services encompass a wide range of areas including investment planning, retirement strategies, and risk management. We provide clear, actionable recommendations that align with your financial goals and help you navigate complex financial decisions with confidence.
                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Investment Planning</li>
                                                            <li>Retirement Strategies</li>
                                                            <li>Risk Management</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/surprised-black-businessman-looking-at-smartphone-2024-05-21-18-32-28-utc.jpg" alt="Financial Advice Overview" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Our Solutions</h3>
                                                <p>
                                                    Our financial advice solutions are designed to help you navigate the complexities of personal and business finances. By offering expert guidance and tailored strategies, we support you in making well-informed decisions that foster long-term financial success.
                                                </p>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-8"></i>
                                                        </div>
                                                        <h3>Investment Advice</h3>
                                                        <p>Providing strategic recommendations to optimize your investment portfolio.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-13"></i>
                                                        </div>
                                                        <h3>Retirement Planning</h3>
                                                        <p>Developing strategies to ensure a secure and comfortable retirement.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text mt_50">
                                                <p>
                                                    Trust Praxis Chartered Accountants for expert financial advice that aligns with your goals and priorities. Our dedicated team is here to provide the insights and strategies you need to navigate your financial journey with confidence.
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
                                                    <h5>Guide to Smart Investing</h5>
                                                    <span>Pdf(160kb)</span>
                                                    <button type="button">Download</button>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <i className="icon-30"></i>
                                                    </div>
                                                    <h5>Retirement Planning Essentials</h5>
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