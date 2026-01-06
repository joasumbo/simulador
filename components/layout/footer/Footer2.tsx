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
                                        <h3>DS Crédito Leiria</h3>
                                    </div>
                                    <div className="text">
                                        <p>Intermediários de crédito especializados em encontrar as melhores soluções de financiamento para si.</p>
                                        <p>Rua Anzebino da Cruz Saraiva, loja 34<br />Piso 0<br />2415-371 Leiria</p>
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
                                        <h3>Políticas</h3>
                                    </div>
                                    <ul className="links-list clearfix">
                                        <li><Link href="https://dsicredito.pt/politica-privacidade">Política de Privacidade</Link></li>
                                        <li><Link href="https://dsicredito.pt/tratamento-dados">Tratamento de dados</Link></li>
                                        <li><Link href="https://dsicredito.pt/termos-condicoes">Termos e Condições</Link></li>
                                        <li><Link href="https://dsicredito.pt/deveres-informacao">Deveres de Informação</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h3>Contacte-nos</h3>
                                    </div>
                                    <ul className="info-box clearfix">
                                        <li>
                                            <strong>Telefone:</strong><br />
                                            <Link href="tel:+351913016845">913 016 845</Link>
                                        </li>
                                        <li style={{ marginTop: '16px' }}>
                                            <strong>Email:</strong><br />
                                            <Link href="mailto:catarinateixeira@dsicredito.pt">catarinateixeira@dsicredito.pt</Link>
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
                    <div className="copyright-full">
                        <figure className="footer-logo"><Link href="/"><Image src="/assets/images/logo-ds.png" alt="DS Crédito" width={100} height={35} priority /></Link></figure>
                        <p style={{ fontSize: '12px', lineHeight: '1.7', maxWidth: '1100px', marginTop: '15px', color: '#999' }}>
                            Percentagem Elaborada, Lda Intermediários de Crédito Vinculado, com o registo n.º 7912, autorizado pelo Banco de Portugal para a prestação de serviços de consultoria e autorizado para a prestação de serviços de intermediação de crédito. Contratos de crédito abrangidos: Crédito Habitação e Crédito a Consumidores. Mutuantes ou grupos de mutuantes com quem mantém contrato de vinculação: BANCO SANTANDER TOTTA,S.A., CAIXA GERAL DE DEPÓSITOS, BANCO BPI, NOVO BANCO, S.A., BANCO CTT, S.A., UNICRE – INSTITUIÇÃO FINANCEIRA DE CRÉDITO, S.A, UCI – UNION DE CRÉDITOS INMOBILIÁRIOS, S.A., ABANCA CORPORACION BANCARIA, S.A SUCURSAL EM PORTUGAL, BANKINTER, S.A- SUCURSAL EM PORTUGAL, BANCO BIC PORTUGUES, S.A, CAIXA CENTRAL DE CRÉDITO AGRÍCOLA MUTUO, CRL. A &quot;DS INTERMEDIÁRIOS DE CRÉDITO&quot; é uma marca detida pela DECISÕES E SOLUÇÕES – INTERMEDIÁRIOS DE CRÉDITO, LDA.
                        </p>
                        <p style={{ fontSize: '13px', marginTop: '15px', color: '#666' }}>
                            &copy; {new Date().getFullYear()} DS Intermediários de Crédito. Desenvolvido por: <Link href="https://workmind.pt/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2185B', fontWeight: '600' }}>Workmind</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
