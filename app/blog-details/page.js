
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Blog Details">
                {/* sidebar-page-container */}
                <section className="sidebar-page-container pt_150 pb_150">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-details-content">
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><img src="assets/images/news/news-13.jpg" alt="" /></figure>
                                                <h2>18<span>APRIL</span></h2>
                                            </div>
                                            <div className="lower-content">
                                                <ul className="post-info clearfix"> 
                                                    <li><i className="icon-21"></i><Link href="blog-detailsl">Admin</Link></li>
                                                    <li><i className="icon-22"></i><Link href="blog-detailsl">0 Comnt</Link></li>
                                                </ul>
                                                <h2>How to Manage Business’s Online Reputation</h2>
                                                <p>Imperdiet consectetur gravida vel rutrum tempus, mattis sit massa lacus morbi feugiat aliquam sagittis nunc neque sit nec lorem tincidunt arcu nunc accumsan risus felis in ornare Lorem ipsum dolor sit amet, consectetur adipiscing elit. cursus ornare non non massa elit rutrum. eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit posuere turpis amet. Lectus lacus lectus habitasse amet quam libero, lorem. Volutpat maecenas viverra consequat condimentum diam donec aliquet. Natoque quam vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum. Aliquam gravida et proin maecenas quis faucibus varius tristique.</p>
                                                <p>Pulvinar dolor aliquet netus ultrices neque, mi non accumsan ullamcorper nunc scelerisque turpis facilisis pretium ut facilisis pharetra, ultrices. Duis imperdiet habitant arcu quis. Nunc euismod odio cursus in diam eget tincidunt mauris.</p>
                                                <blockquote>
                                                    <div className="icon-box"><i className="icon-47"></i></div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui consequat nibh elit urna interdum.</p>
                                                    <h4>Darlene Robertson</h4>
                                                </blockquote>
                                                <p>Tortor etiam sed suspendisse faucibus ac volutpat mattis tortor nec. Orc velit posuere turpis amet Lectus lacus lectus habitasse amet quam libero lorem Volutpat maecenas viverra consequat proin condimentum diam donec aliquet natoque quam vitae leo risus. Eget neque proin in dolor cursus bibendum urna dictum.</p>
                                                <ul className="tags-list clearfix">
                                                    <li><Link href="/blog">Agency</Link></li>
                                                    <li><Link href="/blog">Business</Link></li>
                                                    <li><Link href="/blog">Consult</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt="" /></figure>
                                        <h3>Sandra Bullock</h3>
                                        <span className="designation">About Author</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit amet sit purus tempor dui pharetra consequat nibh elit urna interdum viera quam.</p>
                                    </div>
                                    <div className="comment-form-area">
                                        <h3>Leave A Comments</h3>
                                        <div className="form-inner">
                                            <form action="blog-detailsl" method="post" className="default-form">
                                                <div className="row clearfix"> 
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="name" placeholder="Your Name" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" placeholder="Your email" required />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea name="message" placeholder="Type message"></textarea>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <div className="message-btn">
                                                            <button type="submit" className="theme-btn-one">Post Comment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar ml_40">
                                    <div className="sidebar-widget search-widget">
                                        <div className="search-form">
                                            <form action="blog-2l" method="post">
                                                <div className="form-group">
                                                    <input type="search" name="search-field" placeholder="Search..." required />
                                                    <button type="submit"><i className="icon-4"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget category-widget">
                                        <div className="widget-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="/blog">Business</Link></li>
                                                <li><Link href="/blog">Consulting</Link></li>
                                                <li><Link href="/blog">Financial Plan</Link></li>
                                                <li><Link href="/blog">Innovative</Link></li>
                                                <li><Link href="/blog">Nursing</Link></li>
                                                <li><Link href="/blog">Management</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget post-widget">
                                        <div className="widget-title">
                                            <h3>Recent Article</h3>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                                <h5><Link href="/blog">How to Manage Online Business’s</Link></h5>
                                                <span className="post-date">Apr 17, 2022</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog"><img src="assets/images/news/post-2.jpg" alt="" /></Link></figure>
                                                <h5><Link href="/blog">Your Business is Ready For Integration</Link></h5>
                                                <span className="post-date">Apr 16, 2022</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog"><img src="assets/images/news/post-3.jpg" alt="" /></Link></figure>
                                                <h5><Link href="/blog">Ensure that Copies of Documents</Link></h5>
                                                <span className="post-date">Apr 15, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget tags-widget">
                                        <div className="widget-title">
                                            <h3>Popular Tags</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="tags-list clearfix">
                                                <li><Link href="/blog">Agency</Link></li>
                                                <li><Link href="/blog">Business</Link></li>
                                                <li><Link href="/blog">Consult</Link></li>
                                                <li><Link href="/blog">Corporate</Link></li>
                                                <li><Link href="/blog">Marketing</Link></li>
                                                <li><Link href="/blog">Industry</Link></li>
                                                <li><Link href="/blog">Idea</Link></li>
                                                <li><Link href="/blog">Data</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* sidebar-page-container end */}

            </Layout>
        </>
    )
}
