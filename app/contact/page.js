
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Get in touch">
                <div>
                    {/* Feature Section */}
                    <section className="feature-style-three p_relative centred">
                        <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-31.png)' }}></div>
                        <div className="auto-container">
                            <div className="sec-title mb_100">
                                <span className="sub-title">Contact Info</span>
                                <h2>We’d Love To Help You</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-three wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="block-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-32.png)' }}></div>
                                            <div className="icon-box"><i className="icon-48"></i></div>
                                            <h3>Our Location</h3>
                                            <p>1901 Thornridge Cir. Shiloh, <br />Hawaii 81063</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-49"></i></div>
                                            <h3>Email Address</h3>
                                            <p><Link href="mailto:contact@example.com">contact@example.com</Link><br /><Link href="mailto:support@example.com">support@example.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="block-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
                                            <div className="icon-box"><i className="icon-50"></i></div>
                                            <h3>Phone Number</h3>
                                            <p>Emergency Cases <br /><Link href="tel:2085550112">+(208) 555-0112</Link> (24/7)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section End */}

                    {/* Contact Form Section */}
                    <section className="contact-style-two sec-pad">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_70">
                                        <div className="sec-title mb_35">
                                            <span className="sub-title">Message</span>
                                            <h2>Feel Free to Contact with us</h2>
                                            <p className="mt_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit et aenean orci egestas arcu interdum nisl magna.</p>
                                        </div>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/contact"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/contact"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/contact"><i className="fab fa-pinterest-p"></i></Link></li>
                                            <li><Link href="/contact"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner">
                                        <form method="post" action="sendemail.php" id="contact-form" className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="username" placeholder="Your Name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="email" placeholder="Your email" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="phone" required placeholder="Phone" />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="subject" required placeholder="Subject" />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea name="message" placeholder="Type message"></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button className="theme-btn theme-btn-one" type="submit" name="submit-form">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}

                    {/* Google Map Section */}
                    <section className="map-section-two">
                        {/*Map Outer*/}
                        <div className="map-outer">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>
                    {/* Google Map Section End */}
                </div>

            </Layout>
        </>
    )
}