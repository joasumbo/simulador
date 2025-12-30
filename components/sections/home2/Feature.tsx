
import Image from "next/image";
import Link from "next/link";

export default function Feature() {
  return (
    <>
        <section className="feature-section">
            <div className="outer-container">
                <div id="content_block_4">
                    <div className="content-box">
                        <div className="inner-box">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="single-item wow fadeInRight animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-7.png" alt="Image" width={70} height={70} priority /></figure>
                                            <h3><span>01</span><a href="#simulador">Profissionais Qualificados<i className="flaticon-right-arrow"></i></a></h3>
                                            <p>Equipa empenhada e competente</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="single-item wow fadeInRight animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div className="inner">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-8.png" alt="Image" width={70} height={70} priority /></figure>
                                            <h3><span>02</span><a href="#simulador">Aconselhamento Personalizado<i className="flaticon-right-arrow"></i></a></h3>
                                            <p>Rapido e eficaz</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                    <div className="single-item wow fadeInRight animated animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div className="inner">
                                            <figure className="icon-box"><Image src="/assets/images/icons/icon-9.png" alt="Image" width={70} height={70} priority /></figure>
                                            <h3><span>03</span><a href="#simulador">Melhores Soluções<i className="flaticon-right-arrow"></i></a></h3>
                                            <p>Para particulares e empresas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
