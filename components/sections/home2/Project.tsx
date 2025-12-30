"use client";

import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function Project() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Collect all lightbox images in one array
  const slides = [
    { src: "/assets/images/project/project-1.jpg" },
    { src: "/assets/images/project/project-2.jpg" },
    { src: "/assets/images/project/project-3.jpg" },
    { src: "/assets/images/project/project-4.jpg" },
    { src: "/assets/images/project/project-5.jpg" },
  ];

  return (
    <>
        <section className="project-section" id="project">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="top-title">Recruitment technologies</span>
                    <h2>Latest From Our Project</h2>
                </div>
            </div>
            <div className="outer-container">
                <Swiper {...swiperOptions} className="project-carousel">
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-1.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(0); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-2.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(1); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-3.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(2); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-4.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(3); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-5.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(4); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-1.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(0); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-2.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(1); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-3.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(2); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-4.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(3); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="project-block-one">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <div className="pattern-layer">
                                        <div className="pattern-1" style={{ backgroundImage: "url(/assets/images/shape/pattern-16.png)" }}></div>
                                        <div className="pattern-2" style={{ backgroundImage: "url(/assets/images/shape/pattern-17.png)" }}></div>
                                    </div>
                                    <Image src="/assets/images/project/project-5.jpg" alt="Image" width={348} height={348} priority />
                                </figure>
                                <div className="content-box">
                                    <div className="text">
                                        <span>@ Presentation</span>
                                        <h3><Link href="/index-2">Helping Bigbasket Scale Up</Link></h3>
                                    </div>
                                    <div onClick={() => { setIndex(4); setOpen(true); }} className="cursor-pointer">
                                        <div className="view-btn"><Link href="#">+</Link></div>
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
            <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={slides}
            />
        </section>
    </>
  )
}
