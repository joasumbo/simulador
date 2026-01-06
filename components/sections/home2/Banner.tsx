'use client'
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link";
import "swiper/css/effect-fade";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
}

export default function Banner() {
  return (
    <>
        <style jsx>{`
            .premium-banner {
                margin-top: 90px;
                position: relative;
                width: 100%;
                height: 700px;
                overflow: hidden;
            }
            
            .banner-slide {
                position: relative;
                width: 100%;
                height: 700px;
                overflow: hidden;
            }
            
            .banner-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            
            .banner-image::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(107, 44, 92, 0.85) 0%, rgba(139, 58, 110, 0.75) 50%, rgba(107, 44, 92, 0.85) 100%);
            }
            
            .banner-content {
                position: relative;
                z-index: 2;
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 40px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: #ffffff;
            }
            
            .banner-tag {
                display: inline-block;
                background: rgba(255, 64, 129, 0.2);
                border: 2px solid #FF4081;
                color: #FF4081;
                padding: 8px 20px;
                border-radius: 30px;
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                margin-bottom: 25px;
                width: fit-content;
                animation: fadeInUp 0.8s ease;
            }
            
            .banner-title {
                font-size: 58px;
                font-weight: 800;
                line-height: 1.2;
                margin-bottom: 35px;
                color: #ffffff;
                max-width: 800px;
                text-shadow: 0 4px 20px rgba(0,0,0,0.3);
                animation: fadeInUp 1s ease 0.2s backwards;
            }
            
            .banner-buttons {
                display: flex;
                gap: 20px;
                animation: fadeInUp 1.2s ease 0.4s backwards;
            }
            
            .btn-primary-banner {
                background: #FF4081;
                color: #ffffff;
                padding: 16px 40px;
                border-radius: 50px;
                font-size: 15px;
                font-weight: 700;
                text-transform: uppercase;
                text-decoration: none;
                transition: all 0.3s ease;
                box-shadow: 0 8px 25px rgba(255, 64, 129, 0.4);
                letter-spacing: 0.5px;
            }
            
            .btn-primary-banner:hover {
                background: #C2185B;
                color: #ffffff;
                transform: translateY(-3px);
                box-shadow: 0 12px 35px rgba(194, 24, 91, 0.5);
            }
            
            .btn-secondary-banner {
                background: transparent;
                color: #ffffff;
                padding: 16px 40px;
                border: 2px solid #ffffff;
                border-radius: 50px;
                font-size: 15px;
                font-weight: 700;
                text-transform: uppercase;
                text-decoration: none;
                transition: all 0.3s ease;
                letter-spacing: 0.5px;
            }
            
            .btn-secondary-banner:hover {
                background: #ffffff;
                color: #6B2C5C;
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
            }
            
            .swiper-navigation {
                position: absolute;
                bottom: 50px;
                right: 50px;
                display: flex;
                gap: 15px;
                z-index: 10;
            }
            
            .swiper-arrow {
                width: 55px;
                height: 55px;
                background: rgba(255, 255, 255, 0.15);
                border: 2px solid rgba(255, 255, 255, 0.3);
                backdrop-filter: blur(10px);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                color: #ffffff;
                font-size: 20px;
            }
            
            .swiper-arrow:hover {
                background: #FF4081;
                border-color: #FF4081;
                color: #ffffff;
                transform: scale(1.1);
            }
            
            .scroll-indicator {
                position: absolute;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10;
                animation: bounce 2s infinite;
            }
            
            .scroll-indicator-icon {
                width: 30px;
                height: 50px;
                border: 2px solid rgba(255, 255, 255, 0.5);
                border-radius: 20px;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                padding-top: 8px;
            }
            
            .scroll-indicator-dot {
                width: 6px;
                height: 6px;
                background: rgba(255, 255, 255, 0.7);
                border-radius: 50%;
                animation: scrollDot 2s infinite;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                    transform: translateX(-50%) translateY(0);
                }
                40% {
                    transform: translateX(-50%) translateY(-10px);
                }
                60% {
                    transform: translateX(-50%) translateY(-5px);
                }
            }
            
            @keyframes scrollDot {
                0% {
                    transform: translateY(0);
                    opacity: 1;
                }
                100% {
                    transform: translateY(20px);
                    opacity: 0;
                }
            }
            
            @media (max-width: 991px) {
                .premium-banner, .banner-slide {
                    height: 600px;
                }
                
                .banner-content {
                    padding: 0 20px;
                }
                
                .banner-title {
                    font-size: 42px;
                }
                
                .banner-buttons {
                    flex-direction: column;
                    gap: 15px;
                }
                
                .btn-primary-banner, .btn-secondary-banner {
                    text-align: center;
                }
                
                .swiper-navigation {
                    bottom: 30px;
                    right: 20px;
                }
                
                .swiper-arrow {
                    width: 45px;
                    height: 45px;
                }
            }
            
            @media (max-width: 575px) {
                .premium-banner, .banner-slide {
                    height: 500px;
                }
                
                .banner-title {
                    font-size: 32px;
                }
                
                .banner-tag {
                    font-size: 11px;
                    padding: 6px 16px;
                }
            }
        `}</style>
        
        <section className="premium-banner" id="inicio">
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="banner-slide">
                        <div className="banner-image" style={{ backgroundImage: "url(/assets/images/banner/Familia_website-2.jpg)" }}></div>
                        <div className="banner-content">
                            <span className="banner-tag">DS Intermediários de Crédito</span>
                            <h1 className="banner-title">Tenha a solução indicada para o seu crédito</h1>
                            <div className="banner-buttons">
                                <a href="#simulador" className="btn-primary-banner">Simular Crédito</a>
                                <a href="https://dsicredito.pt/contactos/" target="_blank" rel="noopener noreferrer" className="btn-secondary-banner">Entre em Contacto</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="banner-slide">
                        <div className="banner-image" style={{ backgroundImage: "url(/assets/images/banner/banner-analise-personalizada-640x480.jpg)" }}></div>
                        <div className="banner-content">
                            <span className="banner-tag">Profissionais Qualificados</span>
                            <h1 className="banner-title">Aconselhamento personalizado e soluções à medida</h1>
                            <div className="banner-buttons">
                                <a href="#simulador" className="btn-primary-banner">Simular Crédito</a>
                                <a href="https://dsicredito.pt/contactos/" target="_blank" rel="noopener noreferrer" className="btn-secondary-banner">Entre em Contacto</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="banner-slide">
                        <div className="banner-image" style={{ backgroundImage: "url(/assets/images/banner/Familia2_site-640x480.jpg)" }}></div>
                        <div className="banner-content">
                            <span className="banner-tag">Melhores Soluções</span>
                            <h1 className="banner-title">Pague menos pelo seu crédito habitação</h1>
                            <div className="banner-buttons">
                                <a href="#simulador" className="btn-primary-banner">Simular Crédito</a>
                                <a href="https://dsicredito.pt/contactos/" target="_blank" rel="noopener noreferrer" className="btn-secondary-banner">Entre em Contacto</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            
            <div className="swiper-navigation">
                <div className="swiper-arrow swiper-prev">
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="swiper-arrow swiper-next">
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            
            <div className="scroll-indicator">
                <div className="scroll-indicator-icon">
                    <div className="scroll-indicator-dot"></div>
                </div>
            </div>
        </section>
    </>
  )
}
