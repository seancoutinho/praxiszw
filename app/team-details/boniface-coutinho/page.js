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
                                        <Image height={400} width={400} src="/assets/images/team/team-1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box ml_30">
                                        <h2>Boniface Coutinho</h2>
                                        <span className="designation">Executive Consultant - Audit & Financial Services</span>
                                        <p>
                                            <p>
                                                Boniface is a member of the Institute of Chartered Accountants of Zimbabwe. He trained with Deloitte and Touché in Harare. He is also a member of the Institute of Certified Public Accountants Zimbabwe). He has more than fifteen years’ experience as an auditor in the Public sector having been the head of the auditing wing of the Urban Development Corporation from 1995 until December 2010.
                                            </p>
                                        </p>
                                        <ul className="info-list clearfix">
                                            <li>
                                                <span>Expertise: </span>Audit, Accounting, Bookkeeping
                                            </li>
                                            <li>
                                                <span>Experience: </span>20 Years
                                            </li>
                                            <li>
                                                <span>Email: </span>
                                                <Link href="mailto:boniface@praxisaccountants.com">boniface@praxisaccountants.com</Link>
                                            </li>
                                            <li>
                                                <span>Phone: </span>
                                                <Link href="tel:263772243934">+263 772 24 3934</Link>
                                            </li>
                                        </ul>
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
                                </div>
                            </div>
                        </div>
                        <div className="biography-box mb_80">
                            <h3>Boniface Coutinho Biography</h3>
                            <p>
                                Boniface Coutinho is a seasoned accounting professional with over three decades of experience in the field. He is currently an Audit Partner at Praxis Chartered Accountants, a role he has held since May 2011. Based in Harare, Zimbabwe, Boniface specializes in financial reporting, financial accounting, and a range of other skills.
                                Before joining JonBon, he served as the Director of Audit & Financial Services at the Urban Development Corporation from May 1995 to December 2010, where he gained extensive experience in financial administration and project management. Prior to that, he was the Finance Administration Manager at Retrofit Electrical Engineering from January 1994 to April 2005, overseeing financial reporting and project management.
                                Boniface's early career includes a significant tenure as an Audit Supervisor at Deloitte and Touche from January 1989 to December 1993. 
                                
                            </p>
                            <p>
                                His educational background is rooted in his studies at the University of Zimbabwe, where he earned a Bachelor of Accountancy in 1988. He completed his A Levels at Mutare Boys High School.
                            </p>
                            <p>With his extensive expertise and commitment to excellence, Boniface Coutinho continues to make a substantial impact in the field of accounting and finance.</p>
                        </div>
                        <div className="lower-content">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 skills-column">
                                    <div className="skills-box mr_20">
                                        <h3>Skills</h3>
                                        <p>
                                            Here's a brief overview of Boniface Coutinho's skills and expertise.
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
                                                Boniface Coutinho earned his Bachelor of Accountancy in 1988 at the University of Zimbabwe.
                                            </p>
                                        </div>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <h4>University of Zimbabwe</h4>
                                                <p>
                                                    <span>Bachelor's degree - Accountancy</span>2012 - 2013
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
                                                Here's some of the institutions Boniface has been associated with.
                                            </p>
                                        </div>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <h4>Audit Partner</h4>
                                                <p>
                                                    <span>JonBon Chartered Accountants</span>May 2011 - June 2020
                                                </p>
                                            </div>
                                            <div className="single-item">
                                                <h4>Director audit & financial services</h4>
                                                <p>
                                                    <span>Urban Development Corporation</span>May 1995 - Dec 2010
                                                </p>
                                            </div>
                                            <div className="single-item">
                                                <h4>Finance Administration Manager</h4>
                                                <p>
                                                    <span>Retrofit Electrical Engineering </span>Jan 1994 - Apr 2005
                                                </p>
                                            </div>
                                            <div className="single-item">
                                                <h4>Audit Supervisor</h4>
                                                <p>
                                                    <span>Deloitte and Touche</span>Jan 1989 - Dec 1993 
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

