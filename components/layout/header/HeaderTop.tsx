"use client";
import { useState } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-fade";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "fade", // 👈 enables fade transition
    fadeEffect: {
        crossFade: true, // smooth fade between slides
    },
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

export default function HeaderTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleInfo = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>

      <div className="header-top">
        <div className="page-header-mobile-info">
            <div
            className="page-header-mobile-info-content"
            style={{
            display: isVisible ? "block" : "none",
            background: "#f9f9f9",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "6px"
            }}
        >
            <div className="top-inner">
            <ul className="left-info">
                <li>
                <i className="flaticon-phone-call"></i>
                <p>
                    <span>Call: </span>
                    <Link href="tel:8004561234">(800) 456-1234</Link>
                </p>
                </li>
                <li>
                <i className="flaticon-email"></i>
                <p>
                    <span>Mail: </span>
                    <Link href="mailto:info@example.com">info@example.com</Link>
                </p>
                </li>
            </ul>

            <div className="location-box">
                <Swiper {...swiperOptions} className="location-carousel">
                    <SwiperSlide>
                        <p><span>Recent:</span> Business Development Manager, San Fransisco, CA.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p><span>Recent:</span> Business Development Manager, Landon, UK.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p><span>Recent:</span> Business Development Manager, New York.</p>
                    </SwiperSlide>
                    <div className="swiper-nav">
                        <div className="swiper-prev"><span className="flaticon-arrowhead-thin-outline-to-the-left"></span></div>
                        <div className="swiper-next"><span className="flaticon-right-arrow-2"></span></div>
                    </div>
                </Swiper>
                <div className="apply-btn">
                <Link href="/">Apply Online<i className="flaticon-arrow-pointing-to-right"></i></Link>
                </div>
            </div>

            <div className="right-info">
                <ul className="list">
                <li><Link href="/">About Us</Link></li>
                <li><Link href="/">Locations</Link></li>
                <li><Link href="/">Resources</Link></li>
                </ul>
                <ul className="social-links">
                <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                <li><Link href="/"><i className="fab fa-google-plus-g"></i></Link></li>
                <li><Link href="/"><i className="fab fa-youtube"></i></Link></li>
                </ul>
            </div>
            </div>
            </div>
            <div className="toggle-box clearfix">
                <button className="page-header-mobile-info-toggle" 
                    onClick={toggleInfo} 
                    style={{
                    padding: "8px 16px",
                    backgroundColor: "#333",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "10px"
                    }}
                >
                    {isVisible ? "" : ""}
                </button>
                <div className="link"><Link href="/" className="theme-btn-one">Appointment</Link></div>
            </div>
        </div>

        <div className="top-inner">
            <ul className="left-info">
                <li>
                    <i className="flaticon-phone-call"></i>
                    <p><span>call: </span><Link href="tel:8004561234">(800) 456-1234</Link></p>
                </li>
                <li>
                    <i className="flaticon-email"></i>
                    <p><span>Mail: </span><Link href="mailto:info@example.com">info@example.com</Link></p>
                </li>
            </ul>
            <div className="location-box">
                <Swiper {...swiperOptions} className="location-carousel">
                    <SwiperSlide>
                        <p><span>Recent:</span> Business Development Manager, San Fransisco, CA.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p><span>Recent:</span> Business Development Manager, Landon, UK.</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p><span>Recent:</span> Business Development Manager, New York.</p>
                    </SwiperSlide>
                    <div className="swiper-nav">
                        <div className="swiper-prev"><span className="flaticon-arrowhead-thin-outline-to-the-left"></span></div>
                        <div className="swiper-next"><span className="flaticon-right-arrow-2"></span></div>
                    </div>
                </Swiper>
                <div className="apply-btn"><Link href="/">Apply Online<i className="flaticon-arrow-pointing-to-right"></i></Link></div>
            </div>
            <div className="right-info">
                <ul className="list">
                    <li><Link href="/">About Us</Link></li>
                    <li><Link href="/">Locations</Link></li>
                    <li><Link href="/">Resources</Link></li>
                </ul>
                <ul className="social-links">
                    <li><Link href="/"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="/"><i className="fab fa-google-plus-g"></i></Link></li>
                    <li><Link href="/"><i className="fab fa-youtube"></i></Link></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
