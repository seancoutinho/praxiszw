
export default function Feature() {
    return (
        <>
            <section className="expertise-section p_relative bg-color-1">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_three">
                        <div className="content-box p_relative mr_30">
                            <div className="sec-title mb_30">
                            <span className="sub-title">Our Expertise</span>
                            <h2>Our Business Growth is Really Incredible!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate. Ante facilisis face pellentesque quis egestas metus.</p>
                            </div>
                            <div className="progress-inner">
                            <div className="progress-box mb_30">
                                <p>Financial Advice</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '85%' }} ><div className="count-text">85%</div></div>
                                </div>
                            </div>
                            <div className="progress-box mb_30">
                                <p>Business Consulting</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '90%' }} ><div className="count-text">90%</div></div>
                                </div>
                            </div>
                            <div className="progress-box">
                                <p>Investment Strategy</p>
                                <div className="bar">
                                <div className="bar-inner count-bar" style={{ width: '70%' }} ><div className="count-text">70%</div></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                        <div className="content-box p_relative ml_30 mt_20 centred">
                            <h3>Request for Our Free <br />Consultation</h3>
                            <div className="form-inner">
                            <form action="index.html" method="post" className="default-form">
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="name" placeholder="Your name" required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Email address" required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="phone" placeholder="Phone number" required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <div className="select-box">
                                    <select className="selectpicker">
                                        <option value={1}>Tax Management</option>
                                        <option value={1}>Strategy & Planning</option>
                                        <option value={1}>Program Manager</option>
                                        <option value={1}>Investment Policy</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <button type="submit" className="theme-btn-one">Send Request</button>
                                </div>
                                </div>
                            </form>
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
