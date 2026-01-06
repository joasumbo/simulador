'use client'

export default function Valores() {
  return (
    <>
        <section className="valores-section" id="valores" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="top-title" style={{ color: '#C2185B' }}>Nossos Pilares</span>
                    <h2>Os nossos valores</h2>
                </div>
                <div className="row clearfix" style={{ marginTop: '50px' }}>
                    <div className="col-lg-3 col-md-6 col-sm-12 valor-block">
                        <div className="valor-card text-center" style={{ 
                            padding: '40px 30px', 
                            background: '#f9f9f9', 
                            borderRadius: '10px',
                            height: '100%',
                            transition: 'all 0.3s ease'
                        }}>
                            <div className="icon-box" style={{ 
                                width: '80px', 
                                height: '80px', 
                                background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                fontSize: '36px',
                                color: '#ffffff'
                            }}>
                                ✓
                            </div>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#222' }}>Transparência</h3>
                            <p style={{ color: '#666', lineHeight: '1.8' }}>Agimos com clareza e ética em todas as etapas.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 valor-block">
                        <div className="valor-card text-center" style={{ 
                            padding: '40px 30px', 
                            background: '#f9f9f9', 
                            borderRadius: '10px',
                            height: '100%',
                            transition: 'all 0.3s ease'
                        }}>
                            <div className="icon-box" style={{ 
                                width: '80px', 
                                height: '80px', 
                                background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                fontSize: '36px',
                                color: '#ffffff'
                            }}>
                                ★
                            </div>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#222' }}>Confiança</h3>
                            <p style={{ color: '#666', lineHeight: '1.8' }}>Construímos relações sólidas com clientes e parceiros.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 valor-block">
                        <div className="valor-card text-center" style={{ 
                            padding: '40px 30px', 
                            background: '#f9f9f9', 
                            borderRadius: '10px',
                            height: '100%',
                            transition: 'all 0.3s ease'
                        }}>
                            <div className="icon-box" style={{ 
                                width: '80px', 
                                height: '80px', 
                                background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                fontSize: '36px',
                                color: '#ffffff'
                            }}>
                                ⚡
                            </div>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#222' }}>Eficiência</h3>
                            <p style={{ color: '#666', lineHeight: '1.8' }}>Trabalhamos com agilidade, sem comprometer a qualidade.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 valor-block">
                        <div className="valor-card text-center" style={{ 
                            padding: '40px 30px', 
                            background: '#f9f9f9', 
                            borderRadius: '10px',
                            height: '100%',
                            transition: 'all 0.3s ease'
                        }}>
                            <div className="icon-box" style={{ 
                                width: '80px', 
                                height: '80px', 
                                background: 'linear-gradient(135deg, #6B2C5C 0%, #8B3A6E 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                fontSize: '36px',
                                color: '#ffffff'
                            }}>
                                ♥
                            </div>
                            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '15px', color: '#222' }}>Compromisso</h3>
                            <p style={{ color: '#666', lineHeight: '1.8' }}>O nosso sucesso é o sucesso dos nossos clientes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .valor-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                }
                
                @media (max-width: 767px) {
                    .valor-block {
                        margin-bottom: 30px;
                    }
                }
            `}</style>
        </section>
    </>
  )
}
