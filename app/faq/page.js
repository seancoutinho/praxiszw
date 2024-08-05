'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ’S">
                <div>
                    <section className="faq-page-section p_relative sec-pad">
                        <div className="auto-container">
                            <div className="sec-title mb_50 centred">
                                <span className="sub-title">Frequently Asked Questions</span>
                                <h2>How Can We Help You?</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <ul className="accordion-box">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-box"></div>
                                                <h3>What services do you offer?</h3>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We offer a comprehensive range of services including auditing, tax consultancy, financial advisory, and business consultancy.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"></div>
                                                <h3>How can you help my business grow?</h3>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our expert consultants provide tailored financial strategies and advice to help your business achieve sustainable growth.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-box"></div>
                                                <h3>What industries do you serve?</h3>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We serve a wide range of industries including manufacturing, retail, healthcare, and technology.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <ul className="accordion-box">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                <div className="icon-box"></div>
                                                <h3>How do you ensure compliance?</h3>
                                            </div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our team stays updated with the latest regulations and standards, ensuring your business remains compliant through rigorous audits and reviews.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                <div className="icon-box"></div>
                                                <h3>What are your payment options?</h3>
                                            </div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We offer flexible payment plans to accommodate the financial needs of our clients.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                <div className="icon-box"></div>
                                                <h3>How do you price your services?</h3>
                                            </div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our pricing is competitive and transparent, tailored to the specific services you require.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="contact-section sec-pad p_relative centred bg-color-1">
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}></div>
                        <div className="auto-container">
                            <div className="sec-title mb_50">
                                <span className="sub-title">Contact</span>
                                <h2>Do You Have Any <br />Questions?</h2>
                            </div>
                            <div className="form-inner">
                                <form action="faq.html" method="post">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="name" placeholder="Your name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email address" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone number" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <div className="message-btn">
                                                <button type="submit" className="theme-btn-one">Send Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}

