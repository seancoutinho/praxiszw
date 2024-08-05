import Image from "next/image"
import Link from "next/link"


export default function Team() {
    return (
        <>
            
            <section className="team-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title mb_50 centred">
                        <span className="sub-title">Exclusive Team</span>
                        <h2>We Have A Professional Team <br />Member</h2>
                    </div>
                </div>
                <div className="auto-container">
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
                                                    <Image height={250} width={400} src="/assets/images/team/team-1.jpg" alt="" />
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
                                                    <Image height={850} width={400} src="/assets/images/team/team-2.jpg" alt="" />
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
                </div>
            </section>

        </>
    )
}
