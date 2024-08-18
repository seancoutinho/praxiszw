
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import blogs from "@/lib/blogs"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Grid">
                <div>
                    {/* news-style-two */}
                    <section className="news-style-two blog-grid pt_150 pb_150">
                        <div className="auto-container">
                            <div className="row clearfix">
                                {blogs?.map(blog => (
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="/blog-details"><img src={blog.image} alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <div className="inner">
                                                    <span className="post-date">{blog.date}</span>
                                                    <h3><Link href="/blog-details">{blog.title}</Link></h3>
                                                    <ul className="post-info clearfix">
                                                        <li><i className="icon-21"></i><Link href="/blog-details">{blog.author}</Link></li>
                                                    </ul>
                                                    <p>{`${blog.content1.slice(0, 50)}...`}</p>
                                                    <div className="btn-box">
                                                        <Link href={`/blog-details/[slug]?slug=${blog?.slug}`} className="theme-btn-one">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            {/* <div className="pagination-wrapper centred pt_30">
                                <ul className="pagination clearfix">
                                    <li><Link href="/blog"><i className="icon-45"></i></Link></li>
                                    <li><Link href="/blog" className="current">1</Link></li>
                                    <li><Link href="/blog">2</Link></li>
                                    <li><Link href="/blog"><i className="icon-44"></i></Link></li>
                                </ul>
                            </div> */}
                        </div>
                    </section>
                    {/* news-style-two end */}
                </div>

            </Layout>
        </>
    )
}