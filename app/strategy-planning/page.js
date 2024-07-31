import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Strategy & Planning">
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
                                                    <Link href="/strategy-planning" className="current">
                                                        Strategy & Planning
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/bookkeeping">Program Manager</Link>
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
                                                <img src="assets/images/service/strategy-and-planning.jpg" alt="Strategy & Planning" />
                                            </figure>
                                            <div className="text">
                                                <h2>Strategy & Planning</h2>
                                                <p>
                                                    At Praxis Chartered Accountants, we offer expert strategy and planning services to help you achieve your business goals and drive sustainable growth. Our team collaborates with you to develop clear, actionable strategies that align with your vision and market dynamics.
                                                </p>
                                                <p>
                                                    We focus on crafting tailored plans that address your unique challenges and opportunities. From long-term strategic planning to short-term tactical initiatives, we provide the insights and expertise needed to guide your business towards success.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="content-two mb_90">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                                                    <div className="text-box">
                                                        <h3>Overview</h3>
                                                        <p>
                                                            Our strategy and planning services are designed to help you navigate the complexities of the business environment. We provide comprehensive analyses, strategic roadmaps, and actionable insights to ensure your business stays ahead of the competition and achieves its objectives.
                                                        </p>
                                                        <ul className="list-style-one clearfix">
                                                            <li>Long-Term Strategic Planning</li>
                                                            <li>Market Analysis and Forecasting</li>
                                                            <li>Tactical Business Initiatives</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box">
                                                        <img src="assets/images/service/service-9.jpg" alt="Strategy & Planning Overview" />
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-three mb_85">
                                            <div className="text mb_100">
                                                <h3>Our Solutions</h3>
                                                <p>
                                                    Our strategy and planning solutions provide a structured approach to achieving your business goals. We leverage industry insights, market trends, and strategic frameworks to deliver plans that drive performance, efficiency, and growth.
                                                </p>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-8"></i>
                                                        </div>
                                                        <h3>Strategic Roadmaps</h3>
                                                        <p>Developing comprehensive roadmaps to guide your business towards its goals.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                    <div className="single-item">
                                                        <div className="icon-box">
                                                            <i className="icon-13"></i>
                                                        </div>
                                                        <h3>Market Insights</h3>
                                                        <p>Providing in-depth market analysis to inform strategic decisions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text mt_50">
                                                <p>
                                                    Trust Praxis Chartered Accountants for strategic and planning expertise that drives your business forward. Our tailored solutions are designed to meet your specific needs and ensure long-term success.
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
                                                    <h5>Strategic Planning Guide</h5>
                                                    <span>Pdf(160kb)</span>
                                                    <button type="button">Download</button>
                                                </li>
                                                <li>
                                                    <div className="icon-box">
                                                        <i className="icon-30"></i>
                                                    </div>
                                                    <h5>Market Analysis Report</h5>
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