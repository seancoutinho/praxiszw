import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="feature-style-three p_relative centred">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-31.png)' }}></div>
                <div className="auto-container">
                    <div className="sec-title mb_100">
                        <span className="sub-title">Some of our Services</span>
                        <h2>Professional And Dedicated <br />Consulting Solutions.</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="block-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-32.png)' }}></div>
                                    <div className="icon-box"><i className="icon-7"></i></div>
                                    <h3><Link href="/index-3">Accounting & Bookkeeping</Link></h3>
                                    <p>Engage our accounting services for expert guidance and exceptional financial management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-8"></i></div>
                                    <h3><Link href="/index-3">Tax Strategy</Link></h3>
                                    <p>Trust us to handle your taxes with precision and efficiency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-three wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="block-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
                                    <div className="icon-box"><i className="icon-9"></i></div>
                                    <h3><Link href="/index-3">CFO Services</Link></h3>
                                    <p>Partner with Praxis today for strategic financial leadership to drive your business growth and profitability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
