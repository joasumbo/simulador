'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {
  return (
    <>
        <section className="testimonial-style-two centred" id="testimonial">
            <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/pattern-20.png)" }}></div>
            <div className="thumb-box">
                <div className="user-thumb thumb-1">
                    <Image src="/assets/images/resource/thumb-1.png" alt="Icon" width={196} height={195} priority />
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/pattern-21.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/pattern-22.png)" }}></div>
                    <div className="pattern-3"></div>
                    <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/pattern-23.png)" }}></div>
                </div>
                <div className="user-thumb thumb-2">
                    <Image src="/assets/images/resource/thumb-2.png" alt="Icon" width={196} height={195} priority />
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/pattern-21.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/pattern-22.png)" }}></div>
                    <div className="pattern-3"></div>
                    <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/pattern-23.png)" }}></div>
                </div>
                <div className="user-thumb thumb-3">
                    <Image src="/assets/images/resource/thumb-3.png" alt="Icon" width={196} height={195} priority />
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/pattern-21.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/pattern-22.png)" }}></div>
                    <div className="pattern-3"></div>
                    <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/pattern-23.png)" }}></div>
                </div>
                <div className="user-thumb thumb-4">
                    <Image src="/assets/images/icons/comment-1.png" alt="Icon" width={196} height={195} priority />
                </div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-8 col-lg-12 col-md-12 offset-xl-2 inner-column">
                        <Swiper {...swiperOptions} className="testimonial-carousel-2">
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <figure className="icon-box"><Image src="/assets/images/icons/quote-2.png" alt="Icon" width={60} height={48} priority /></figure>
                                        <p>“Eazy Recruitz is very accurate when comes to helping you find a job and if that job finishes, They help you to find an another job placement!.”</p>
                                        <ul className="rating clearfix">
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                        </ul>
                                        <h3>Evan Clement - <span>Manager, Cypertech</span></h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <figure className="icon-box"><Image src="/assets/images/icons/quote-2.png" alt="Icon" width={60} height={48} priority /></figure>
                                        <p>“Eazy Recruitz is very accurate when comes to helping you find a job and if that job finishes, They help you to find an another job placement!.”</p>
                                        <ul className="rating clearfix">
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                        </ul>
                                        <h3>Evan Clement - <span>Manager, Cypertech</span></h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <figure className="icon-box"><Image src="/assets/images/icons/quote-2.png" alt="Icon" width={60} height={48} priority /></figure>
                                        <p>“Eazy Recruitz is very accurate when comes to helping you find a job and if that job finishes, They help you to find an another job placement!.”</p>
                                        <ul className="rating clearfix">
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                        </ul>
                                        <h3>Evan Clement - <span>Manager, Cypertech</span></h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <figure className="icon-box"><Image src="/assets/images/icons/quote-2.png" alt="Icon" width={60} height={48} priority /></figure>
                                        <p>“Eazy Recruitz is very accurate when comes to helping you find a job and if that job finishes, They help you to find an another job placement!.”</p>
                                        <ul className="rating clearfix">
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                        </ul>
                                        <h3>Evan Clement - <span>Manager, Cypertech</span></h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-block-two">
                                    <div className="inner-box">
                                        <figure className="icon-box"><Image src="/assets/images/icons/quote-2.png" alt="Icon" width={60} height={48} priority /></figure>
                                        <p>“Eazy Recruitz is very accurate when comes to helping you find a job and if that job finishes, They help you to find an another job placement!.”</p>
                                        <ul className="rating clearfix">
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                            <li><i className="flaticon-star"></i></li>
                                        </ul>
                                        <h3>Evan Clement - <span>Manager, Cypertech</span></h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div className="swiper-pagination"></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
