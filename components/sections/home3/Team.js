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
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-8 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Image height={370} width={318} src="/assets/images/team/team-1.jpg" alt="" /></figure>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/https://www.facebook.com/boniface.coutinho"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="https://x.com/BonifaceCoutinh"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="https://www.linkedin.com/in/boniface-coutinho-68065896/"><i className="fab fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Boniface Coutinho</Link></h3>
                                        <span className="designation">Founder & CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-8 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Image height={370} width={318} src="/assets/images/team/team-2.jpg" alt="" /></figure>
                                        <ul className="social-links clearfix">
                                        <li><Link href="/index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="/index-3"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="/index-3"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Raymond Mpeti</Link></h3>
                                        <span className="designation">Senior Accountant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-8 team-block">
                            <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Image height={370} width={318} src="/assets/images/team/team-3.jpg" alt="" /></figure>
                                        <ul className="social-links clearfix">
                                            <li><Link href="/index-3"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="/index-3"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="/index-3"><i className="fab fa-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/team-details">Jacqueline Warren</Link></h3>
                                        <span className="designation">Consultant</span>
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
