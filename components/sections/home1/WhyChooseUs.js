import Link from "next/link"


export default function WhyChooseUs() {
    return (
        <>
            <section className="chooseus-section p_relative bg-color-2">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-13.png)' }}></div>
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/chooseus-bg.jpg)' }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                        <div className="content-box p_relative">
                            <div className="sec-title light mb_45">
                            <span className="sub-title">Why Choose BizTech</span>
                            <h2>Reason For Choosing Our Consultancy</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer ultrices suspendisse varius etiam est.</p>
                            </div>
                            <div className="inner-box">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Quick Response</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Experience Consultant</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>Flexible Payment</h3>
                                <p>Lorem ipsum dolor sit amet tempus consectetur adipiscing.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="outer-box">
                    <h2>Looking for the Best Business <br />Consulting?</h2>
                    <Link href="/contact" className="theme-btn-one">Let’s Contact</Link>
                </div>
            </section>           
        </>
    )
}
