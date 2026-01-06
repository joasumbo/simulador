
import Image from "next/image";

export default function About() {
  return (
    <>
        <section className="about-style-two" id="quem-somos" style={{ padding: '80px 0', backgroundColor: '#f9f9f9' }}>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                            <div id="content_block_3">
                                <div className="content-box text-center">
                                    <div className="sec-title">
                                        <span className="top-title">Quem Somos</span>
                                        <h2>DS Intermediários de Crédito</h2>
                                    </div>
                                    <div className="text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                                        <p>A marca DS Intermediários de Crédito, registada no Banco de Portugal com o n.º 4600 faz parte do Grupo Decisões e Soluções, especializado na prestação de serviços de intermediação de crédito e de serviços de consultoria relativamente a contratos de créditos a consumidores.</p>
                                        <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: '600', color: '#C2185B' }}>
                                            Atingir uma relação duradoura e sustentável de confiança com os nossos clientes.
                                        </p>
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
