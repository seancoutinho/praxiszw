
'use client'
import Image from "next/image"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
            <section className="banner-style-two alternat-2 p_relative">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }}></div>
                        </div>
                        <figure className="banner-image"><Image height={898} width={826} src="/assets/images/banner/banner-img-1.jpg" alt="" /></figure>
                        <div className="auto-container">
                            <div className="content-box">
                                <span>Professional Book-keeping</span>
                                <h2>Build & Grow Your Business</h2>
                                <p>You need a dependable guide to navigate critical decisions and provide valuable advice.<br />Our goal is to anticipate potential impacts and steer you towards success.</p>
                                <div className="btn-box">
                                    <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }}></div>
                        </div>
                        <figure className="banner-image"><Image height={535} width={818} src="/assets/images/banner/banner-img-2.jpg" alt="" /></figure>
                        <div className="auto-container">
                            <div className="content-box">
                                <span>Ensure Financial Accuracy</span>
                                <h2>Comprehensive Audit Services</h2>
                                <p>Our audit services provide thorough and precise financial assessments, ensuring your business remains compliant and financially sound. <br />Partner with us for peace of mind and strategic insights.</p>
                                <div className="btn-box">
                                    <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item p_relative">
                        <div className="pattern-layer">
                            <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-29.png)' }}></div>
                            <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-30.png)' }}></div>
                        </div>
                        <figure className="banner-image"><Image height={535} width={818} src="/assets/images/banner/banner-img-3.jpg" alt="" /></figure>
                        <div className="auto-container">
                            <div className="content-box">
                                <span>Optimize Your Finances</span>
                                <h2>Expert Tax Planning & Filing</h2>
                                <p>Our tax planning and filing services help you navigate complex tax laws and maximize your savings. <br />Trust us to handle your taxes with precision and efficiency.</p>
                                <div className="btn-box">
                                    <Link href="/about-us" className="theme-btn-one">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span className="icon-5"></span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span className="icon-6"></span>
                        </button>
                    </div>
                </Swiper>

            </section>
        </>
    )
}
