import { useState, useEffect } from 'react';

export default function Feature() {
    const [progress, setProgress] = useState({
        financial: 0,
        consulting: 0,
        investment: 0,
    });

    // Simulate progress bar animation
    useEffect(() => {
        const timeout = setTimeout(() => {
            setProgress({
                financial: 85,
                consulting: 90,
                investment: 70,
            });
        }, 500); // Delay for animation
        return () => clearTimeout(timeout);
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log('Form Data Submitted:', data);

        // Add additional functionality for form submission, e.g., API call or notification
        alert('Request submitted successfully!');
    };

    return (
        <>
            <section className="expertise-section p_relative bg-color-1">
                <div className="pattern-layer">
                    <div
                        className="pattern-1"
                        style={{ backgroundImage: "url(assets/images/shape/shape-2.png)" }}
                    ></div>
                    <div
                        className="pattern-2"
                        style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}
                    ></div>
                </div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                                <div className="content-box p_relative mr_30">
                                    <div className="sec-title mb_30">
                                        <span className="sub-title">Our Expertise</span>
                                        <h2>Our Business Growth is Really Incredible!</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                            Donec felis suscipit mi urna nulla at tincidunt feugiat
                                            vulputate. Ante facilisis face pellentesque quis egestas metus.
                                        </p>
                                    </div>
                                    <div className="progress-inner">
                                        <div className="progress-box mb_30">
                                            <p>Financial Advice</p>
                                            <div className="bar">
                                                <div
                                                    className="bar-inner count-bar"
                                                    style={{ width: `${progress.financial}%` }}
                                                >
                                                    <div className="count-text">{progress.financial}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box mb_30">
                                            <p>Business Consulting</p>
                                            <div className="bar">
                                                <div
                                                    className="bar-inner count-bar"
                                                    style={{ width: `${progress.consulting}%` }}
                                                >
                                                    <div className="count-text">{progress.consulting}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-box">
                                            <p>Investment Strategy</p>
                                            <div className="bar">
                                                <div
                                                    className="bar-inner count-bar"
                                                    style={{ width: `${progress.investment}%` }}
                                                >
                                                    <div className="count-text">{progress.investment}%</div>
                                                </div>
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
                                        <form onSubmit={handleFormSubmit} className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your name"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email address"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Phone number"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <div className="select-box">
                                                        <select name="service" className="selectpicker">
                                                            <option value="Tax Management">Tax Management</option>
                                                            <option value="Strategy & Planning">
                                                                Strategy & Planning
                                                            </option>
                                                            <option value="Bookkeeping">Bookkeeping</option>
                                                            <option value="Forensic Audit">Forensic Audit</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn-one">
                                                        Send Request
                                                    </button>
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
    );
}
