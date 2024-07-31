'use client'
import Link from "next/link"
import { useState } from "react"


export default function Pricing() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="service-section p_relative centred bg-color-1 sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-12.png)' }}></div>
                <div className="auto-container">
                    <div className="sec-title mb_70">
                    <span className="sub-title">What We Do</span>
                    <h2>Provide the Best Consulting <br />in This Industry</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="static-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-4.png)' }}></div>
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3>
                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                </div>
                                <div className="overlay-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-5.png)' }}></div>
                                <h3><Link href="/strategy-planning">Strategy & Planning</Link></h3>
                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="btn-box">
                                    <Link href="/strategy-planning" className="theme-btn-one">Read More</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="static-content">
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h3><Link href="/program-manager">Program Manager</Link></h3>
                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                </div>
                                <div className="overlay-content">
                                <h3><Link href="/program-manager">Program Manager</Link></h3>
                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="btn-box">
                                    <Link href="/program-manager" className="theme-btn-one">Read More</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="static-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}></div>
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h3><Link href="/tax-management">Tax Management</Link></h3>
                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                </div>
                                <div className="overlay-content">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                                <h3><Link href="/tax-management">Tax Management</Link></h3>
                                <p>Amet minim mollit no duis sit enim aliqua dolor do amet officia.</p>
                                <div className="btn-box">
                                    <Link href="/tax-management" className="theme-btn-one">Read More</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    {/* Repeat the above service-block structure for other services */}
                    </div>
                    <div className="more-btn mt_60">
                    <Link href="/services2" className="theme-btn-one">More Services</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
