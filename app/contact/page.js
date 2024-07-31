
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get in touch">
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
                                            <p>6626 Zimre Way, Zimre Park, <br />Ruwa</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-49"></i></div>
                                            <h3>Email Address</h3>
                                            <p><Link href="mailto:contact@praxisaccountants.com">contact@praxisaccountants.com</Link><br /><Link href="mailto:support@praxisaccountants.com">support@praxisaccountants.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                                    <div className="feature-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <div className="block-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
                                            <div className="icon-box"><i className="icon-50"></i></div>
                                            <h3>Phone Number</h3>
                                            <p>Emergency Cases <br /><Link href="tel:263772243934">+(263) 772-2439 34</Link> (24/7)</p>
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
                                            <p className="mt_20">Have questions or need assistance? Our team is here to help. Reach out to us through the contact form below, or connect with us directly by phone or email. We look forward to hearing from you!</p>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144248.96130868216!2d31.144463951376537!3d-17.864416152674032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931beef8f385033%3A0xcc9445a1bbe9c59a!2s6626%20Zimre%20Way%2C%20Ruwa!5e1!3m2!1sen!2szw!4v1722436471935!5m2!1sen!2szw" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </section>
                    {/* Google Map Section End */}
                </div>

            </Layout>
        </>
    )
}