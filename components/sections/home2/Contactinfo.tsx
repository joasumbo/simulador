'use client'
import Image from "next/image"
import Link from "next/link"

export default function ContactInfo() {
  return (
    <>
        <section className="contactinfo-section bg-color-2" id="contactos">
            <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/pattern-24.png)" }}></div>
            <div className="auto-container">
                <div className="row align-items-center clearfix">
                    <div className="col-lg-12 col-sm-12 content-column">
                        <div id="content_block_6">
                            <div className="content-box text-center">
                                <div className="sec-title">
                                    <span className="top-title">Entre em Contacto</span>
                                    <h2>Fale Connosco</h2>
                                </div>
                                <ul className="info-list clearfix" style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
                                    <li>
                                        <figure className="icon-box"><Image src="/assets/images/icons/icon-40.png" alt="Telefone" width={62} height={62} priority /></figure>
                                        <div className="inner">
                                            <h4>Telefone</h4>
                                            <p>
                                                <Link href="tel:+351913016845">913 016 845</Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure className="icon-box"><Image src="/assets/images/icons/icon-40.png" alt="Email" width={62} height={62} priority /></figure>
                                        <div className="inner">
                                            <h4>Email</h4>
                                            <p>
                                                <Link href="mailto:catarinateixeira@dsicredito.pt">catarinateixeira@dsicredito.pt</Link>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure className="icon-box"><Image src="/assets/images/icons/icon-41.png" alt="Horário" width={62} height={62} priority /></figure>
                                        <div className="inner">
                                            <h4>Horário</h4>
                                            <p>Seg - Sex: 9h às 18h<br />Sábado e Domingo: Fechado</p>
                                        </div>
                                    </li>
                                    <li>
                                        <figure className="icon-box"><Image src="/assets/images/icons/icon-41.png" alt="Morada" width={62} height={62} priority /></figure>
                                        <div className="inner">
                                            <h4>Morada</h4>
                                            <p>Rua Anzebino da Cruz Saraiva, loja 34<br />Piso 0, 2415-371 Leiria</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
