'use client'
import Image from "next/image"

export default function Equipa() {
  const teamMembers = [
    {
      name: "Catarina Teixeira",
      role: "Diretora de Loja",
      image: "/assets/images/equipa/catarina texeira - diretora de loja.webp"
    },
    {
      name: "Cristina Agostinho",
      role: "Gestora de Crédito",
      image: "/assets/images/equipa/cristina agostinho - gestora de credito.webp"
    },
    {
      name: "João Cunha",
      role: "Gestor de Crédito",
      image: "/assets/images/equipa/joao cunha - gestor de credito.webp"
    },
    {
      name: "Filipa Santos",
      role: "Gestora de Crédito",
      image: "/assets/images/equipa/filipa santos - gestor de credito.webp"
    },
    {
      name: "Susana Soares",
      role: "Gestora de Crédito",
      image: "/assets/images/equipa/susana soares - gestora de credito.webp"
    },
    {
      name: "Berta Domingos",
      role: "Gestora de Crédito",
      image: "/assets/images/equipa/berta domingos - gestora de credito.webp"
    }
  ]

  return (
    <>
        <section className="equipa-section" id="equipa">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="top-title">Nossa Equipa</span>
                    <h2>Especialistas em Crédito Habitação</h2>
                    <p className="subtitle">
                        Profissionais dedicados a encontrar a melhor solução de financiamento para si
                    </p>
                </div>
                
                <div className="row clearfix team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="team-member">
                                <div className="image-wrapper">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name}
                                        width={400}
                                        height={400}
                                        className="member-photo"
                                    />
                                    <div className="overlay">
                                        <a href="#contactos" className="contact-btn">Contactar</a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>{member.name}</h4>
                                    <span className="role">{member.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div className="cta-box">
                            <div className="cta-content">
                                <h3>Quer falar com a nossa equipa?</h3>
                                <p>Contacte-nos para uma consultoria gratuita e sem compromisso</p>
                            </div>
                            <div className="cta-button">
                                <a href="#contactos" className="theme-btn btn-style-one">
                                    <span className="btn-title">Contactar Agora</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row clearfix advantages-row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="advantage-item">
                            <div className="advantage-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                    <path d="M2 17l10 5 10-5"/>
                                    <path d="M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h5>Experiência</h5>
                            <p>Anos no mercado de crédito habitação</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="advantage-item">
                            <div className="advantage-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                                </svg>
                            </div>
                            <h5>Parcerias</h5>
                            <p>Acesso a múltiplos bancos e instituições</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="advantage-item">
                            <div className="advantage-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <h5>Gratuito</h5>
                            <p>Serviço sem custos adicionais para si</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="advantage-item">
                            <div className="advantage-icon">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                </svg>
                            </div>
                            <h5>Rapidez</h5>
                            <p>Resposta e processamento ágil</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .equipa-section {
                    padding: 100px 0;
                    background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
                    position: relative;
                    overflow: hidden;
                }

                .auto-container {
                    position: relative;
                    z-index: 1;
                }

                .sec-title {
                    margin-bottom: 70px;
                }

                .top-title {
                    color: #C2185B;
                    font-size: 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    display: block;
                    margin-bottom: 15px;
                }

                .sec-title h2 {
                    font-size: 42px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 20px;
                    line-height: 1.3;
                }

                .subtitle {
                    font-size: 18px;
                    color: #666;
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .team-grid {
                    margin-bottom: 70px;
                }

                .team-member {
                    margin-bottom: 40px;
                    transition: all 0.3s ease;
                }

                .image-wrapper {
                    position: relative;
                    overflow: hidden;
                    border-radius: 15px;
                    aspect-ratio: 1;
                    margin-bottom: 25px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .image-wrapper :global(.member-photo) {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .team-member:hover .image-wrapper :global(.member-photo) {
                    transform: scale(1.1);
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(107, 44, 92, 0.95) 0%, rgba(139, 58, 110, 0.95) 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .team-member:hover .overlay {
                    opacity: 1;
                }

                .contact-btn {
                    background: #ffffff;
                    color: #6B2C5C;
                    padding: 12px 30px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    text-decoration: none;
                    transform: translateY(20px);
                    transition: all 0.4s ease;
                    opacity: 0;
                }

                .team-member:hover .contact-btn {
                    transform: translateY(0);
                    opacity: 1;
                }

                .contact-btn:hover {
                    background: #1a1a1a;
                    color: #ffffff;
                }

                .member-info {
                    text-align: center;
                }

                .member-info h4 {
                    font-size: 22px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 8px;
                    transition: color 0.3s ease;
                }

                .team-member:hover .member-info h4 {
                    color: #C2185B;
                }

                .member-info .role {
                    font-size: 14px;
                    color: #666;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 600;
                    display: block;
                }

                .cta-box {
                    background: linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%);
                    padding: 50px 60px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                    box-shadow: 0 15px 50px rgba(107, 44, 92, 0.3);
                    margin: 0 0 70px 0;
                }

                .cta-content h3 {
                    font-size: 32px;
                    font-weight: 700;
                    color: #ffffff;
                    margin-bottom: 10px;
                }

                .cta-content p {
                    font-size: 16px;
                    color: rgba(255,255,255,0.9);
                    margin: 0;
                }

                .theme-btn {
                    background: #ffffff;
                    color: #6B2C5C;
                    padding: 16px 40px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 700;
                    text-transform: uppercase;
                    text-decoration: none;
                    display: inline-block;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .theme-btn:hover {
                    background: #1a1a1a;
                    color: #ffffff;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                }

                .advantages-row {
                    margin-top: 0;
                }

                .advantage-item {
                    text-align: center;
                    padding: 35px 25px;
                    background: #ffffff;
                    border-radius: 15px;
                    transition: all 0.4s ease;
                    height: 100%;
                    border: 2px solid #f0f0f0;
                }

                .advantage-item:hover {
                    background: linear-gradient(135deg, #C2185B 0%, #8B3A6E 100%);
                    color: #ffffff;
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(194, 24, 91, 0.3);
                    border-color: transparent;
                }

                .advantage-icon {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(135deg, #C2185B 0%, #8B3A6E 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    color: #ffffff;
                    transition: all 0.4s ease;
                }

                .advantage-item:hover .advantage-icon {
                    background: #ffffff;
                    color: #C2185B;
                    transform: rotateY(180deg);
                }

                .advantage-item h5 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 12px;
                    transition: color 0.3s ease;
                }

                .advantage-item:hover h5 {
                    color: #ffffff;
                }

                .advantage-item p {
                    font-size: 14px;
                    color: #666;
                    margin: 0;
                    line-height: 1.7;
                    transition: color 0.3s ease;
                }

                .advantage-item:hover p {
                    color: rgba(255,255,255,0.9);
                }

                @media (max-width: 991px) {
                    .equipa-section {
                        padding: 70px 0;
                    }

                    .sec-title h2 {
                        font-size: 32px;
                    }

                    .cta-box {
                        flex-direction: column;
                        text-align: center;
                        padding: 40px 30px;
                    }

                    .cta-content h3 {
                        font-size: 26px;
                    }

                    .team-grid {
                        margin-bottom: 50px;
                    }
                }

                @media (max-width: 767px) {
                    .sec-title h2 {
                        font-size: 28px;
                    }

                    .team-member {
                        margin-bottom: 30px;
                    }

                    .advantage-item {
                        margin-bottom: 20px;
                    }

                    .advantages-row {
                        margin-top: 0;
                    }
                }
            `}</style>
        </section>
    </>
  )
}
