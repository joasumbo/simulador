"use client"
import Image from "next/image"
import Link from "next/link"

export default function Footer2(){
    return(
        <>
        <footer className="main-footer style-two bg-color-1">
            <div className="auto-container">
                <div className="footer-top">
                    <div className="widget-section">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget about-widget">
                                    <div className="widget-title">
                                        <h3>DS Crédito</h3>
                                    </div>
                                    <div className="text">
                                        <p>Intermediários de crédito especializados em encontrar as melhores soluções de financiamento para si.</p>
                                        <p>Av. Sacadura Cabral, 3812<br />São Félix da Marinha<br />4410-099 Vila Nova de Gaia</p>
                                    </div>
                                    <ul className="social-links clearfix">
                                        <li><h5>Redes Sociais:</h5></li>
                                        <li><Link href="https://www.facebook.com/DSICREDITOPORTUGAL/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="https://www.instagram.com/dsicredito.pt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link href="https://www.linkedin.com/company/dsintermediariosdecredito/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Links Úteis</h3>
                                    </div>
                                    <ul className="links-list clearfix">
                                        <li><Link href="https://dsicredito.pt/quem-somos">Quem Somos</Link></li>
                                        <li><Link href="https://dsicredito.pt/servicos">Serviços</Link></li>
                                        <li><Link href="https://dsicredito.pt/simulador" aria-current="page">Simulador</Link></li>
                                        <li><Link href="https://dsicredito.pt/oportunidades">Oportunidades</Link></li>
                                        <li><Link href="https://dsicredito.pt/blog">Blog</Link></li>
                                        <li><Link href="https://dsicredito.pt/contactos">Contactos</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h3>Contactos</h3>
                                    </div>
                                    <ul className="info-box clearfix">
                                        <li>
                                            <strong>Telefone:</strong><br />
                                            <Link href="tel:+351226007286">226 007 286</Link> / 
                                            <Link href="tel:+351226007287">87</Link> / 
                                            <Link href="tel:+351226007288">88</Link>
                                            <span style={{ display: 'block', fontSize: '12px', color: '#999', marginTop: '4px' }}>
                                                (Chamada para rede fixa nacional)
                                            </span>
                                        </li>
                                        <li style={{ marginTop: '16px' }}>
                                            <strong>Email:</strong><br />
                                            <Link href="mailto:info@dsicredito.pt">info@dsicredito.pt</Link>
                                        </li>
                                        <li style={{ marginTop: '16px' }}>
                                            <strong>Horário:</strong><br />
                                            Segunda a Sexta: 9h - 18h
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom clearfix">
                    <div className="copyright pull-left">
                        <figure className="footer-logo"><Link href="/"><Image src="/assets/images/logo-ds.png" alt="DS Crédito" width={100} height={35} priority /></Link></figure>
                        <p>&copy; {new Date().getFullYear()} DS Intermediários de Crédito. Todos os direitos reservados.</p>
                        <p style={{ fontSize: '13px', marginTop: '8px' }}>
                            Desenvolvido pela: <Link href="https://workmind.pt/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2185B', fontWeight: '600' }}>Workmind</Link>
                        </p>
                    </div>
                    <ul className="footer-nav pull-right clearfix">
                        <li><Link href="https://dsicredito.pt/politica-privacidade">Política de Privacidade</Link></li>
                        <li><Link href="https://dsicredito.pt/termos-condicoes">Termos e Condições</Link></li>
                        <li><Link href="https://dsicredito.pt/livro-reclamacoes">Livro de Reclamações</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}