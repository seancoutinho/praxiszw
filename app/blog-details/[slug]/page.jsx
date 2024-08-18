
'use client';

import { useSearchParams } from 'next/navigation'
import blogs from '@/lib/blogs'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    const searchParams = useSearchParams();
    const slug = searchParams.get('slug'); // Extract the slug from the query parameters

    // Find the blog post that matches the slug
    const blog = blogs.find((blog) => blog.slug === slug);

    if (!blog) {
        return (
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="404 Error">
                <section className="error-section p_relative centred">
                    <div className="auto-container">
                        <div className="inner-box">
                            <figure className="error-image">
                                <img src="assets/images/icons/error-1.png" alt="" />
                            </figure>
                            <h2>Oops! That Page Can Not <br />be Found.</h2>
                            <Link href="/" className="theme-btn-one">
                                <i className="icon-5"></i>Back to Homepage
                            </Link>
                        </div>
                    </div>
                </section>

            </Layout>
        )
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
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
                                                <h2>{blog.date.slice(0, 2)}<span>{blog.date.slice(2, 6)}</span></h2>
                                            </div>
                                            <div className="lower-content">
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-21"></i><Link href="blog-detailsl">{blog.author}</Link></li>
                                                </ul>
                                                <h2>{blog?.title}</h2>
                                                <p>{blog?.content1}</p>
                                                <p>{blog?.content2}</p>
                                                <blockquote>
                                                    <div className="icon-box"><i className="icon-47"></i></div>
                                                    <p>{blog?.quote}</p>
                                                    <h4>{blog?.quoteAuthor}</h4>
                                                </blockquote>
                                                <p>{blog.conclusion}</p>
                                                {blog.tags.map(tag => (
                                                    <ul className="tags-list clearfix">
                                                        <li><Link href="/blog">{blog.tag}</Link></li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/news/author-1.jpg" alt="" /></figure>
                                        <h3>{blog.blogAuthor}</h3>
                                        <span className="designation">About Author</span>
                                        <p>{blog.authorAbout}</p>
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
                                        {blogs.map(blog => (
                                            <div className="post-inner">
                                                <div className="post">
                                                    <figure className="post-thumb"><Link href="/blog"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                                    <h5><Link href="/blog">{blog.title}</Link></h5>
                                                    <span className="post-date">{blog.date}</span>
                                                </div>
                                            </div>
                                        ))}

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
