import Image from "next/image"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-style-three p_relative">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_one">
                                <div className="content-box p_relative mr_40">
                                    <div className="sec-title mb_25">
                                        <span className="sub-title">About Praxis Chartered Accountants</span>
                                        <h2>Dedicated And <br />Professional Consulting Services</h2>
                                    </div>
                                    <div className="text mb_35">
                                        <p>"Our commitment to excellence and integrity empowers our clients to thrive. Let's navigate the path to financial prosperity together." — Boniface Coutinho, CEO</p>
                                        <p>Welcome to Praxis Chartered Accountants, your trusted partner in financial excellence. Serving Zimbabwe and the wider Southern Africa region, we are dedicated to providing comprehensive and personalized accounting services that drive your business success. Our team of experienced professionals is committed to delivering innovative financial solutions, tailored to meet your unique needs. At Praxis, we prioritize integrity, precision, and client satisfaction, ensuring your business thrives in a competitive market. Partner with us for reliable expertise and strategic guidance, and let us help you achieve your financial goals.</p>
                                    </div>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>Solution Focused</h3>
                                            <p>Driven to unburden you from finding a solution to your business problems.</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-11"></i></div>
                                            <h3>99.99% Success</h3>
                                            <p>We never fail! Our team of experts make sure to deliver a viable solution to our clients     .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_three">
                                <div className="image-box p_relative ml_40 pl_60">
                                    <figure className="image"><Image height={530} width={670} src="/assets/images/resource/about-4.jpg" alt="" /></figure>
                                    <div className="image-text">
                                        <h3>SINCE 2012</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
