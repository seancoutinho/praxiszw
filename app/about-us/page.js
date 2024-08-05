'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import TestimonialSlider0 from '@/components/slider/TestimonialSlider0'
import AwardSlider1 from '@/components/slider/AwardSlider1'
import Link from "next/link"
import { useState } from 'react'
import ReactCurvedText from 'react-curved-text'
import ModalVideo from 'react-modal-video'
import Image from "next/image"
export default function Home() {
    const [isOpen, setOpen] = useState(false)
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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-section p_relative">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                <div className="image_block_one">
                                    <div className="image-box p_relative pr_50 mr_30">
                                        <figure className="image image-1"><Image height={550} width={550} src="/assets/images/resource/about-2.jpg" alt="" /></figure>
                                        <figure className="image image-2"><Image height={450} width={350} src="/assets/images/resource/about-1.jpg" alt="" /></figure>
                                        <div className="video-inner">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content_block_one">
                                    <div className="content-box p_relative ml_30">
                                        <div className="sec-title mb_25">
                                            <span className="sub-title">About Praxis Chartered Accountants</span>
                                            <h2>Dedicated And <br />Professional Audit & Consulting Services</h2>
                                        </div>
                                        <div className="text mb_35">
                                            <p>Praxis Chartered Accountants is a multidisciplinary consulting firm with diverse, experienced and leadership skills. We offer value for money tailor made services to our clients in</p>
                                        </div>
                                        <div className="text mb_35">
                                            <p>Our commitment to be our clients ‘growth partner’ in a liquidity constrained market and our aim is to grow into a modern large firm in the future which means we take it upon our shoulders to assist our clients to build not only a highly responsive finance function but a sustainable business model.</p>
                                        </div>
                                        <div className="inner-box mb_35">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-11"></i></div>
                                                <h3>Solution Focused</h3>
                                                <p>We are dedicated to understand your problem and help you with a tailored solution</p>
                                            </div>
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-11"></i></div>
                                                <h3>99.99% Success</h3>
                                                <p>We are determined to make sure we deliver </p>
                                            </div>
                                        </div>
                                        <figure className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-section end */}


                {/* service-style-two */}
                <section className="service-style-two p_relative bg-color-1">
                    <div className="auto-container">
                        <div className="sec-title centred mb_50">
                            <span className="sub-title">What We Do</span>
                            <h2>Provide the Best Consulting <br />in This Industry</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="/assets/images/service/service-1.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3>
                                          
                                                <div className="btn-box">
                                                    <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><Image height={410} width={280} src="/assets/images/service/service-2.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/bookkeeping">Bookkeeping</Link></h3>

                                                <div className="btn-box">
                                                    <Link href="/bookkeeping" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-3.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/tax-management">Tax Management</Link></h3>
                                                
                                                <div className="btn-box">
                                                    <Link href="/tax-management" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/forensic-audit.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/forensic-audit">Forensic Audit</Link></h3>
                                                
                                                <div className="btn-box">
                                                    <Link href="/forensic-audit" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/service-4.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/financial-advices">Financial Advice</Link></h3>
                                                
                                                <div className="btn-box">
                                                    <Link href="/financial-advices" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                                <div className="service-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/service/strategy-and-planning.jpg" alt="" /></figure>
                                        <div className="lower-content">
                                            <div className="inner">
                                                <div className="icon-box"><i className="icon-7"></i></div>
                                                <h3><Link href="/insurance-strategy">Insurance Strategy</Link></h3>
                                                
                                                <div className="btn-box">
                                                    <Link href="/insurance-strategy" className="theme-btn-one">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* service-style-two end */}


                {/* clients-section */}
                {/* <section className="clients-section p_relative bg-color-2">
                    <div className="auto-container">
                        <div className="inner-box">
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-1.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-2.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-3.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-4.png" alt="" /></Link></figure>
                            <figure className="clients-logo"><Link href="/about-us"><img src="assets/images/clients/clients-5.png" alt="" /></Link></figure>
                        </div>
                    </div>
                </section> */}
                {/* clients-section end */}


                {/* team-section */}
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
                                                    <Link href="https://www.facebook.com/boniface.coutinho">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://x.com/BonifaceCoutinh">
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/in/boniface-coutinho-68065896/">
                                                        <i className="fab fa-linkedin"></i>
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
                                                    <Link href="https://www.facebook.com/boniface.coutinho">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://x.com/BonifaceCoutinh">
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://www.linkedin.com/in/boniface-coutinho-68065896/">
                                                        <i className="fab fa-linkedin"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="lower-content">
                                            <h3>
                                                <Link href="/team-details/raymond-mupeti">Raymond Mupeti</Link>
                                            </h3>
                                            <span className="designation">Marketing & Administration Executive</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* team-section end */}


                {/* chooseus-style-two */}
                <section className="chooseus-style-two sec-pad">
                    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/chooseus-bg.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                                <div className="content_block_six">
                                    <div className="content-box p_relative ml_30">
                                        <div className="sec-title mb_50">
                                            <span className="sub-title">Why Choose Praxis Chartered Accountants</span>
                                            <h2>Reasons For Choosing Our Consultancy</h2>
                                        </div>
                                            <ul className="accordion-box">
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                        <div className="icon-box"></div>
                                                        <h3>Comprehensive Auditing</h3>
                                                    </div>
                                                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Our team provides thorough auditing services, ensuring compliance and accuracy in your financial statements.</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                        <div className="icon-box"></div>
                                                        <h3>Expert Consultancy</h3>
                                                    </div>
                                                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">Benefit from our expert consultancy services to optimize your financial and operational strategies.</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                        <div className="icon-box"></div>
                                                        <h3>Flexible Payment Options</h3>
                                                    </div>
                                                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">We offer flexible payment plans tailored to meet the diverse needs of our clients.</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                        <div className="icon-box"></div>
                                                        <h3>Personalized Services</h3>
                                                    </div>
                                                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                            <div className="text">We tailor our services to fit the unique needs of each client, ensuring personalized attention and solutions.</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/*Accordion Block*/}
                                                <li className="accordion block">
                                                    <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                        <div className="icon-box"></div>
                                                    <h3>Automation of Accounting Processes Using Established Accounting Software</h3>
                                                    </div>
                                                    <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                        <div className="content">
                                                        <div className="text">Our firm specializes in automating your accounting operations by leveraging well-established accounting software.</div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* chooseus-style-two end */}


                {/* testimonial-style-two */}
                <section className="testimonial-style-two p_relative">
                    <div className="auto-container">
                        <div className="sec-title mb_50 centred">
                            <span className="sub-title">Testimonials</span>
                            <h2>What They’re Say <br />About Us?</h2>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                {/*Theme Carousel*/}
                                <TestimonialSlider0 />
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-style-two end */}


                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}


