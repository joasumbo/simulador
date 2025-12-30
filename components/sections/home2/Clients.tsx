'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image";
import Link from "next/link";
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

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
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
}

export default function Clients() {
  return (
    <>
        <section className="clients-style-two" style={{ backgroundImage: "url(/assets/images/background/clients-1.jpg)" }}>
            <div className="auto-container">
                <div className="title-inner centred">
                    <h2>Need of Highly Qualified HR Personnel or Employment Opportunities</h2>
                    <div className="btn-box">
                        <Link href="index-2.html" className="btn-one">Hire</Link>
                        <Link href="index-2.html" className="btn-two">Apply</Link>
                    </div>
                </div>
                <Swiper {...swiperOptions} className="clients-carousel">
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-7.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-8.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-9.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-10.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-11.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-12.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-7.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-8.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-9.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-10.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-11.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo-box">
                            <Link href="/index-2"><Image src="/assets/images/clients/clients-logo-12.png" alt="Image" width={135} height={80} priority /></Link>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
  )
}
