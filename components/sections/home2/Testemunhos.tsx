'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-next-testemunho',
        prevEl: '.swiper-prev-testemunho',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
}

export default function Testemunhos() {
  return (
    <>
        <section className="testemunhos-section" id="testemunhos" style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="top-title" style={{ color: '#C2185B' }}>Feedback dos Clientes</span>
                    <h2>O que dizem os nossos clientes</h2>
                    <p style={{ maxWidth: '700px', margin: '20px auto 0', color: '#666' }}>
                        As opiniões dos nossos clientes refletem o compromisso e dedicação que colocamos em cada processo.
                    </p>
                </div>
                
                <div className="testimonial-carousel" style={{ marginTop: '50px', position: 'relative' }}>
                    <Swiper {...swiperOptions}>
                        <SwiperSlide>
                            <div className="testimonial-card" style={{
                                background: '#ffffff',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                height: '100%'
                            }}>
                                <div className="quote-icon" style={{
                                    fontSize: '48px',
                                    color: '#C2185B',
                                    lineHeight: '1',
                                    marginBottom: '20px'
                                }}>
                                    &ldquo;
                                </div>
                                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px', minHeight: '150px' }}>
                                    Fazer um crédito com a DSCréditos torna-se um processo fácil mesmo que haja obstáculos difíceis de ultrapassar, graças à competência, profissionalismo e resiliência. De realçar também a disponibilidade constante para resolver as questões, com simpatia e rapidez.
                                </p>
                                <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div className="author-avatar" style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                        fontWeight: '700',
                                        fontSize: '20px'
                                    }}>
                                        R
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '3px', color: '#222' }}>Rosário Oliveira</h4>
                                        <span style={{ fontSize: '13px', color: '#999' }}>Cliente DS Crédito</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card" style={{
                                background: '#ffffff',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                height: '100%'
                            }}>
                                <div className="quote-icon" style={{
                                    fontSize: '48px',
                                    color: '#C2185B',
                                    lineHeight: '1',
                                    marginBottom: '20px'
                                }}>
                                    &ldquo;
                                </div>
                                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px', minHeight: '150px' }}>
                                    Profissionalismo aliado a um toque de descontração tornaram uma experiência incrível. Foi a chave para transformar a construção do nosso sonho em realidade. Sempre que tínhamos dúvidas prestou rapidamente respostas. Recomendo a DSI a todos que buscam realizar seus projetos com eficiência.
                                </p>
                                <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div className="author-avatar" style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                        fontWeight: '700',
                                        fontSize: '20px'
                                    }}>
                                        D
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '3px', color: '#222' }}>Daniel & Rita</h4>
                                        <span style={{ fontSize: '13px', color: '#999' }}>Cliente DS Crédito</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card" style={{
                                background: '#ffffff',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                height: '100%'
                            }}>
                                <div className="quote-icon" style={{
                                    fontSize: '48px',
                                    color: '#C2185B',
                                    lineHeight: '1',
                                    marginBottom: '20px'
                                }}>
                                    &ldquo;
                                </div>
                                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px', minHeight: '150px' }}>
                                    O acompanhamento foi fantástico. Sempre acessível para responder às nossas questões. Realço ainda as tabelas comparativas entre as várias entidades bancárias que foram uma excelente mais valia na escolha do crédito. Um grande obrigado à equipa.
                                </p>
                                <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div className="author-avatar" style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                        fontWeight: '700',
                                        fontSize: '20px'
                                    }}>
                                        F
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '3px', color: '#222' }}>Filipa e João</h4>
                                        <span style={{ fontSize: '13px', color: '#999' }}>Cliente DS Crédito</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimonial-card" style={{
                                background: '#ffffff',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                height: '100%'
                            }}>
                                <div className="quote-icon" style={{
                                    fontSize: '48px',
                                    color: '#C2185B',
                                    lineHeight: '1',
                                    marginBottom: '20px'
                                }}>
                                    &ldquo;
                                </div>
                                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '25px', minHeight: '150px' }}>
                                    Muito atenciosa e sempre disponível. Em situações de imprevistos ajuda a encontrar soluções. É uma boa ouvinte e procura sempre arranjar planos e medidas que satisfaçam a situação individual de cada um. Muito prestável e boa conselheira. Sem dúvida que recomendo!
                                </p>
                                <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div className="author-avatar" style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                        fontWeight: '700',
                                        fontSize: '20px'
                                    }}>
                                        F
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '3px', color: '#222' }}>Fábio e Irina</h4>
                                        <span style={{ fontSize: '13px', color: '#999' }}>Cliente DS Crédito</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="swiper-prev-testemunho" style={{
                        position: 'absolute',
                        left: '-50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '50px',
                        height: '50px',
                        background: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        zIndex: 10,
                        fontSize: '20px',
                        color: '#C2185B'
                    }}>
                        ‹
                    </div>
                    <div className="swiper-next-testemunho" style={{
                        position: 'absolute',
                        right: '-50px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '50px',
                        height: '50px',
                        background: '#ffffff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                        zIndex: 10,
                        fontSize: '20px',
                        color: '#C2185B'
                    }}>
                        ›
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
