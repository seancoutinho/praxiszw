import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from 'next/image';
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
                <section className="team-details p_relative">
                    <div className="auto-container">
                        <div className="team-details-content mb_90">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <figure className="image-box mr_30">
                                        <Image height={400} width={400} src="/assets/images/team/team-2.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box ml_30">
                                        <h2>Raymond Mupeti</h2>
                                        <span className="designation">Marketing & Administration Executive</span>
                                        <p>
                                            <p>
                                                Raymond Mupeti is responsible for marketing and administration as an Executive at the company. His main duties include developing and implementing marketing strategies, managing marketing campaigns, conducting market research, and overseeing administrative tasks. He works closely with the marketing team to ensure effective communication and branding. Additionally, Raymond is responsible for coordinating administrative activities, such as managing office operations, organizing meetings, and handling correspondence. He plays a crucial role in supporting the overall success of the company through his expertise in marketing and administration.
                                            </p>
                                        </p>
                                        <ul className="info-list clearfix">
                                            <li>
                                                <span>Expertise: </span>Marketing, Research, Accounting, Bookkeeping
                                            </li>
                                            <li>
                                                <span>Experience: </span>12 Years
                                            </li>
                                            <li>
                                                <span>Email: </span>
                                                <Link href="mailto:raymond@praxisaccountants.com">raymond@praxisaccountants.com</Link>
                                            </li>
                                            <li>
                                                <span>Phone: </span>
                                                <Link href="tel:263773710691">+263 773 71 0691</Link>
                                            </li>
                                        </ul>
                                        <ul className="social-links clearfix">
                                            <li>
                                                <Link href="https://www.facebook.com/Raymond.Mupeti">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://x.com/RaymondCoutinh">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.linkedin.com/in/Raymond-Mupeti-68065896/">
                                                    <i className="fab fa-linkedin"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="biography-box mb_80">
                            <h3>Raymond Mupeti Biography</h3>
                            <p>
                                Raymond Mupeti is an accomplished auditor with over thirteen years of experience at the Urban Development Corporation in Harare. He has been integral in providing specialized auditing and financial management services to local authorities since October 2010. His role encompasses the preparation of financial statements, stocktaking, and auditing client records to ensure accuracy and compliance with accepted practices and laws.
                            </p>
                            <p>
                                Before joining the Urban Development Corporation, Raymond served as an Accounts Clerk at Clinique Talent Consultants from September 2009 to September 2010 and as a Bookkeeper at Creekshaw Marketing (Pvt) Ltd from June 2008 to September 2009.
                            </p>
                        </div>
                        <div className="lower-content">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 skills-column">
                                    <div className="skills-box mr_20">
                                        <h3>Skills</h3>
                                        <p>
                                            Here's a brief overview of Raymond's skills and expertise.
                                        </p>
                                        <div className="progress-inner">
                                            <div className="progress-box mb_30">
                                                <p>Financial Advice</p>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" style={{ width: '95%' }}>
                                                    </div>
                                                    <div className="count-text">75%</div>
                                                </div>
                                            </div>
                                            <div className="progress-box mb_30">
                                                <p>Forensic Audit</p>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" style={{ width: '90%' }}>
                                                    </div>
                                                    <div className="count-text">90%</div>
                                                </div>
                                            </div>
                                            <div className="progress-box">
                                                <p>Investment Strategy</p>
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" style={{ width: '80%' }}>
                                                    </div>
                                                    <div className="count-text">80%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 education-column">
                                    <div className="education-inner mr_70 ml_20">
                                        <div className="text mb_30">
                                            <h3>Education</h3>
                                            <p>
                                                Raymond earned his Bsc Management and Entreprenuership Development Studies majoring in Banking and Finance., Practice of Banking,Accounting,Finance
                                                Women's University in Africa at the University of Zimbabwe.
                                            </p>
                                        </div>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <h4>Women's University in Africa</h4>
                                                <p>
                                                    <span>Bsc Management and Entreprenuership Development Studies</span>2012 - 2013
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 education-column">
                                    <div className="education-inner mr_70 ml_20">
                                        <div className="text mb_30">
                                            <h3>Experience</h3>
                                            <p>
                                                Here's some of the institutions Raymond has been associated with.
                                            </p>
                                        </div>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <h4>Auditor</h4>
                                                <p>
                                                    <span>Urban Development Corperation</span>Oct 2010 - 2016
                                                </p>
                                            </div>
                                            <div className="single-item">
                                                <h4>Accounts Clerk</h4>
                                                <p>
                                                    <span>Clinique Talent Consultants</span>Sep 2009 - Sep 2010
                                                </p>
                                            </div>
                                            <div className="single-item">
                                                <h4>Bookkeeper</h4>
                                                <p>
                                                    <span>Creekshaw Marketing (Pvt) Ltd </span>Jun 2008 - Sep 2009 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

