'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-prev',
        prevEl: '.swiper-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function News() {
  return (
    <>
        <section className="news-section" id="news">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="top-title">News & Updates</span>
                    <h2>Featured News and Updates</h2>
                </div>
                <div className="inner-content">
                    <Swiper {...swiperOptions} className="theme_carousel testimonial-carousel">
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Link href="/blog-details"><Image src="/assets/images/news/news-1.jpg" alt="Image" width={370} height={490} priority /></Link>
                                        <span className="post-date">21<br />May</span>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="category"><i className="flaticon-note"></i><p>Human Resource</p></div>
                                            <h3><Link href="/blog-details">5 Effective Ways to Hire More Workers</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="far fa-user"></i><Link href="index.html">Harley Reuban</Link></li>
                                                <li><i className="far fa-comment"></i><Link href="index.html">3 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Link href="/blog-details"><Image src="/assets/images/news/news-2.jpg" alt="Image" width={370} height={490} priority /></Link>
                                        <span className="post-date">20<br />May</span>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="category"><i className="flaticon-note"></i><p>Techiques</p></div>
                                            <h3><Link href="/blog-details">Does My Business Need a Director of Training?</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="far fa-user"></i><Link href="index.html">Harley Reuban</Link></li>
                                                <li><i className="far fa-comment"></i><Link href="index.html">5 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Link href="/blog-details"><Image src="/assets/images/news/news-3.jpg" alt="Image" width={370} height={490} priority /></Link>
                                        <span className="post-date">19<br />May</span>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="category"><i className="flaticon-note"></i><p>Recruitment</p></div>
                                            <h3><Link href="/blog-details">What are the 2020 Staffing Trends in USA</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="far fa-user"></i><Link href="index.html">Harley Reuban</Link></li>
                                                <li><i className="far fa-comment"></i><Link href="index.html">4 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Link href="/blog-details"><Image src="/assets/images/news/news-1.jpg" alt="Image" width={370} height={490} priority /></Link>
                                        <span className="post-date">21<br />May</span>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="category"><i className="flaticon-note"></i><p>Human Resource</p></div>
                                            <h3><Link href="/blog-details">5 Effective Ways to Hire More Workers</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="far fa-user"></i><Link href="index.html">Harley Reuban</Link></li>
                                                <li><i className="far fa-comment"></i><Link href="index.html">3 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Link href="/blog-details"><Image src="/assets/images/news/news-2.jpg" alt="Image" width={370} height={490} priority /></Link>
                                        <span className="post-date">20<br />May</span>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="category"><i className="flaticon-note"></i><p>Techiques</p></div>
                                            <h3><Link href="/blog-details">Does My Business Need a Director of Training?</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="far fa-user"></i><Link href="index.html">Harley Reuban</Link></li>
                                                <li><i className="far fa-comment"></i><Link href="index.html">5 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <figure className="image-box">
                                        <Link href="/blog-details"><Image src="/assets/images/news/news-3.jpg" alt="Image" width={370} height={490} priority /></Link>
                                        <span className="post-date">19<br />May</span>
                                    </figure>
                                    <div className="lower-content">
                                        <div className="inner">
                                            <div className="category"><i className="flaticon-note"></i><p>Recruitment</p></div>
                                            <h3><Link href="/blog-details">What are the 2020 Staffing Trends in USA</Link></h3>
                                            <ul className="post-info clearfix">
                                                <li><i className="far fa-user"></i><Link href="index.html">Harley Reuban</Link></li>
                                                <li><i className="far fa-comment"></i><Link href="index.html">4 Cmnts</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-nav">
                        <div className="swiper-prev"><span className="flaticon-left-arrow-1"></span></div>
                        <div className="swiper-next"><span className="flaticon-right-arrow"></span></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
