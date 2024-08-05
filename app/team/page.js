
import Layout from "@/components/layout/Layout"
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Members">
                <div>
                    <section className="team-page-section">
                        <div className="auto-container">
                            <div className="sec-title mb_50 centred">
                                <span className="sub-title">Exclusive Team</span>
                                <h2>We Have A Professional <br />Team</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-8 col-sm-12 team-block">
                                    <div
                                        className="team-block-one wow fadeInUp animated"
                                        data-wow-delay="00ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <img src="assets/images/team/team-1.jpg" alt="" />
                                                </figure>
                                                <ul className="social-links clearfix">
                                                    <li>
                                                        <Link href="/team">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/team">
                                                            <i className="fab fa-twitter"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/team">
                                                            <i className="fab fa-instagram"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="/team-details/boniface-coutinho">Boniface Coutinho</Link>
                                                </h3>
                                                <span className="designation">Executive Consultant- Audit & Financial Services</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-8 col-sm-12 team-block">
                                    <div
                                        className="team-block-one wow fadeInUp animated"
                                        data-wow-delay="400ms"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image">
                                                    <img src="assets/images/team/team-2.jpg" alt="" />
                                                </figure>
                                                <ul className="social-links clearfix">
                                                    <li>
                                                        <Link href="/team">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/team">
                                                            <i className="fab fa-twitter"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/team">
                                                            <i className="fab fa-instagram"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="lower-content">
                                                <h3>
                                                    <Link href="/team-details/raymond-mpeti">Raymond Mpeti</Link>
                                                </h3>
                                                <span className="designation">Marketing & Administration Executive</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* testimonial-section */}
                    <section className="testimonial-section p_relative bg-color-1">
                        <div
                            className="pattern-layer"
                            style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}
                        ></div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                                    <div className="sec-title">
                                        <span className="sub-title">Testimonials</span>
                                        <h2>What They’re Say About Us?</h2>
                                        <p>
                                            Amet dui scelerisque vel habitant eget tincidunt facilisis
                                            pretium. Porttitor mi nisi, non vitae tempus.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        {/*Theme Carousel*/}
                                        <TestimonialSlider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* testimonial-section end */}
                </div>

            </Layout>
        </>
    )
}