import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Testimonials">
                <div>
                    <section className="testimonial-page-section p_relative">
                        <div className="auto-container">
                            <div className="sec-title mb_50 centred">
                                <span className="sub-title">Testimonials</span>
                                <h2>What They’re Saying <br />About Us?</h2>
                            </div>
                            <div className="sortable-masonry">
                                <div className="items-container row clearfix">
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block masonry-item small-column">
                                        <div className="testimonial-block-two">
                                            {/* <figure className="thumb-box">
                                                <img src="assets/images/resource/testimonial-3.jpg" alt="" />
                                            </figure> */}
                                            <div className="inner-box">
                                                <h3>D. Maupa</h3>
                                                <span className="designation">Managing Director ~ Desma Consulting Engineers</span>
                                                <p>
                                                    “Navigating the complexities of tax regulations can be overwhelming, but Praxis Accountants made the process seamless. Their tax advisory services are exceptional; they took the time to understand my business and provided tailored solutions that maximized my tax benefits. The peace of mind I gained knowing my taxes were in expert hands was invaluable. I can't thank them enough for their support!”
                                                </p>
                                                <ul className="rating clearfix">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block masonry-item small-column">
                                        <div className="testimonial-block-two">
                                            {/* <figure className="thumb-box">
                                                <img src="assets/images/resource/testimonial-4.jpg" alt="" />
                                            </figure> */}
                                            <div className="inner-box">
                                                <h3>D. Tasaranahwo</h3>
                                                <span className="designation">Managing Director ~ Tazmac Micro Finance Company</span>
                                                <p>
                                                    “Working with Praxis has transformed our approach to financial reporting. Their meticulous analysis and insightful recommendations have not only improved our financial clarity but have also empowered us to make informed strategic decisions. The team's professionalism and dedication to our success are truly commendable. I highly recommend their services to any business looking to enhance their financial management.”
                                                </p>
                                                <ul className="rating clearfix">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 testimonial-block masonry-item small-column">
                                        <div className="testimonial-block-two">
                                            {/* <figure className="thumb-box">
                                                <img src="assets/images/resource/testimonial-5.jpg" alt="" />
                                            </figure> */}
                                            <div className="inner-box">
                                                <h3>G. Mutobaya</h3>
                                                <span className="designation">Founder & CEO ~ Danville Consultancy P/L</span>
                                                <p>
                                                    “The management consultancy services provided by Praxis have been a game-changer for our organization. They conducted a thorough assessment of our operations and provided actionable insights that have significantly improved our efficiency and impact. Their team is knowledgeable, approachable, and genuinely invested in our mission. I wholeheartedly recommend them to any nonprofit seeking to enhance their operational effectiveness.”
                                                </p>
                                                <ul className="rating clearfix">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}
