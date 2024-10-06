'use client'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Home() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                "service_5b2kdcp",
                "template_gi615z7",
                {
                    ...formData,
                    to_email: "bonifacecoutinho@gmail.com",
                },
                "_9cuYkV2p6GKYAmFR"
            );
            setStatus("sent");
            setFormData({
                username: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("error");
        }
    };

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
                                            <p>Suite 226, Stanley House, Cnr Jason Moyo, First St,  <br />Harare</p>
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
                                {/* ... existing content ... */}
                                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner">
                                        <form onSubmit={handleSubmit} className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder="Your Name"
                                                        required
                                                        value={formData.username}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Your email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        required
                                                        placeholder="Phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        required
                                                        placeholder="Subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Type message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                                    ></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button
                                                        className={`theme-btn theme-btn-one ${status === "sending" ? "opacity-50 cursor-not-allowed" : ""
                                                            }`}
                                                        type="submit"
                                                        disabled={status === "sending"}
                                                    >
                                                        {status === "idle" && "Send Message"}
                                                        {status === "sending" && (
                                                            <span className="flex items-center">
                                                                Sending...
                                                            </span>
                                                        )}
                                                        {status === "sent" && "Sent!"}
                                                        {status === "error" && "Error. Try again."}
                                                    </button>
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
