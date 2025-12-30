'use client'
import { useState, useEffect, useCallback } from 'react'

const PRAZO_OPTIONS = [24, 30, 36, 40] as const
const ANIMATION_DELAY = 500
const SUCCESS_MESSAGE_DURATION = 5000

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

export default function Simulator() {
    const [montante, setMontante] = useState<number>(150000)
    const [entrada, setEntrada] = useState<number>(0)
    const [prazo, setPrazo] = useState<number>(30)
    const [tan, setTan] = useState<number>(3.5)
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const [loadingResults, setLoadingResults] = useState<boolean>(false)

    useEffect(() => {
        setLoadingResults(true)
        const timer = setTimeout(() => {
            setLoadingResults(false)
        }, ANIMATION_DELAY)
        return () => clearTimeout(timer)
    }, [montante, entrada, prazo, tan])

    const calcularPrestacao = useCallback((): number => {
        const montanteFinanciar = montante - entrada
        const taxaMensal = tan / 100 / 12
        const numPagamentos = prazo * 12
        
        if (taxaMensal === 0) {
            return montanteFinanciar / numPagamentos
        }
        
        const fatorPotencia = Math.pow(1 + taxaMensal, numPagamentos)
        return montanteFinanciar * (taxaMensal * fatorPotencia) / (fatorPotencia - 1)
    }, [montante, entrada, prazo, tan])

    const prestacaoMensal = calcularPrestacao()
    const montanteTotal = prestacaoMensal * prazo * 12
    const mtic = montanteTotal - (montante - entrada)
    const taeg = tan + 0.5

    const formatCurrency = (value: number): string => {
        return value.toLocaleString('pt-PT', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        }).replace(/\s/g, '.')
    }

    const formatPercentage = (value: number, decimals: number = 2): string => {
        return value.toFixed(decimals).replace('.', ',')
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault()
        
        const formData: ContactFormData = {
            name: nome,
            email: email,
            subject: 'Simulação de Crédito Habitação',
            message: `Simulação realizada:
Montante: €${formatCurrency(montante)}
Entrada: €${formatCurrency(entrada)}
Prazo: ${prazo} anos
TAN: ${formatPercentage(tan, 3)}%
Prestação Mensal: €${formatCurrency(prestacaoMensal)}
TAEG: ${formatPercentage(taeg, 1)}%
MTIC: €${formatCurrency(mtic)}
Montante Total: €${formatCurrency(montanteTotal)}`
        }
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setShowSuccess(true)
                setTimeout(() => setShowSuccess(false), SUCCESS_MESSAGE_DURATION)
                setNome('')
                setEmail('')
            }
        } catch (error) {
            console.error('Erro ao enviar simulação:', error)
        }
    }

    return (
        <>
            <style jsx>{`
                .premium-simulator {
                    padding: 100px 0;
                    background: #fafafa;
                    position: relative;
                }
                .section-header { text-align: center; margin-bottom: 60px; }
                .section-tag {
                    display: inline-block;
                    background: linear-gradient(135deg, #C2185B 0%, #880E4F 100%);
                    color: #ffffff;
                    padding: 8px 24px;
                    border-radius: 30px;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 20px;
                }
                .section-heading {
                    font-size: 42px;
                    font-weight: 800;
                    color: #2c3e50;
                    margin-bottom: 16px;
                    line-height: 1.2;
                }
                .section-subtitle {
                    font-size: 18px;
                    color: #7f8c8d;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                .simulator-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .simulator-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 12px;
                    padding: 40px;
                    transition: all 0.3s ease;
                }
                .simulator-card:hover {
                    border-color: rgba(194, 24, 91, 0.2);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.04);
                }
                .input-group { margin-bottom: 35px; }
                .input-label {
                    font-size: 12px;
                    font-weight: 700;
                    color: #666666;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-bottom: 10px;
                    display: block;
                }
                .input-value {
                    font-size: 32px;
                    font-weight: 700;
                    color: #C2185B;
                    margin-bottom: 12px;
                }
                .slider-track {
                    position: relative;
                    width: 100%;
                    height: 8px;
                    background: #e9ecef;
                    border-radius: 10px;
                    overflow: hidden;
                }
                .slider-fill {
                    position: absolute;
                    height: 100%;
                    background: #C2185B;
                    border-radius: 10px;
                    transition: width 0.3s ease;
                }
                .range-input {
                    position: relative;
                    width: 100%;
                    height: 8px;
                    -webkit-appearance: none;
                    background: transparent;
                    outline: none;
                    z-index: 2;
                    cursor: pointer;
                    margin-top: -8px;
                }
                .range-input::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #C2185B;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 3px 8px rgba(194, 24, 91, 0.4);
                    transition: transform 0.2s ease;
                }
                .range-input::-webkit-slider-thumb:hover { transform: scale(1.2); }
                .range-labels {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                    color: #95a5a6;
                    margin-top: 8px;
                    font-weight: 600;
                }
                .prazo-buttons {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 12px;
                }
                .prazo-btn {
                    padding: 16px 10px;
                    font-size: 15px;
                    font-weight: 700;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    background: #ffffff;
                    color: #666666;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                .prazo-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s ease;
                }
                .prazo-btn:hover::before { left: 100%; }
                .prazo-btn:hover {
                    border-color: #C2185B;
                    transform: translateY(-2px);
                }
                .prazo-btn.active {
                    background: linear-gradient(135deg, #C2185B 0%, #880E4F 100%);
                    color: #ffffff;
                    border-color: #C2185B;
                    box-shadow: 0 4px 15px rgba(194, 24, 91, 0.3);
                }
                .form-input {
                    width: 100%;
                    padding: 16px 20px;
                    font-size: 16px;
                    font-weight: 600;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    outline: none;
                }
                .form-input:focus {
                    border-color: #C2185B;
                    box-shadow: 0 0 0 4px rgba(194, 24, 91, 0.1);
                }
                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                    margin-bottom: 24px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 18px;
                    font-size: 16px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    background: linear-gradient(135deg, #C2185B 0%, #880E4F 100%);
                    color: #ffffff;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 8px 25px rgba(194, 24, 91, 0.3);
                    position: relative;
                    overflow: hidden;
                }
                .submit-btn::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition: width 0.6s ease, height 0.6s ease;
                }
                .submit-btn:hover::before {
                    width: 300px;
                    height: 300px;
                }
                .submit-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 35px rgba(194, 24, 91, 0.4);
                }
                .success-message {
                    margin-top: 16px;
                    padding: 16px;
                    background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
                    color: #ffffff;
                    border-radius: 12px;
                    text-align: center;
                    font-weight: 600;
                    animation: slideInUp 0.4s ease;
                }
                .disclaimer {
                    text-align: center;
                    margin-top: 16px;
                    font-size: 13px;
                    color: #95a5a6;
                    font-weight: 500;
                }
                .results-card {
                    background: #ffffff;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: 12px;
                    padding: 40px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                    position: sticky;
                    top: 120px;
                }
                .results-title {
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    margin-bottom: 28px;
                    color: #5a6c7d;
                    text-align: center;
                }
                .prestacao-highlight {
                    background: #f8f9fa;
                    border: 2px solid #C2185B;
                    border-radius: 12px;
                    padding: 24px;
                    margin-bottom: 32px;
                    text-align: center;
                }
                .prestacao-label {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    color: #5a6c7d;
                    margin-bottom: 12px;
                    font-weight: 700;
                }
                .prestacao-value {
                    font-size: 42px;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    color: #2c3e50;
                }
                .prestacao-subtitle {
                    font-size: 12px;
                    color: #7f8c8d;
                    margin-top: 8px;
                    font-weight: 500;
                }
                .skeleton-shimmer {
                    display: inline-block;
                    height: 1em;
                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                    border-radius: 4px;
                    vertical-align: middle;
                }
                .skeleton-prestacao {
                    width: 180px;
                    height: 42px;
                    margin: 0 auto;
                }
                .skeleton-value {
                    width: 80px;
                    height: 20px;
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .results-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }
                .result-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 20px 0;
                    border-bottom: 1px solid #e9ecef;
                }
                .result-item:last-child {
                    border-bottom: none;
                }
                .result-label {
                    font-size: 12px;
                    color: #5a6c7d;
                    font-weight: 600;
                    line-height: 1.4;
                    max-width: 60%;
                }
                .result-label-main {
                    display: block;
                    font-weight: 700;
                    margin-bottom: 2px;
                }
                .result-label-sub {
                    display: block;
                    font-size: 11px;
                    font-weight: 400;
                    color: #95a5a6;
                }
                .result-value {
                    font-size: 20px;
                    font-weight: 700;
                    color: #2c3e50;
                    text-align: right;
                }
                .disclaimer-box {
                    margin-top: 60px;
                    background: rgba(194, 24, 91, 0.05);
                    border-left: 4px solid #C2185B;
                    border-radius: 12px;
                    padding: 30px;
                }
                .disclaimer-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 16px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .disclaimer-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .disclaimer-list li {
                    font-size: 14px;
                    color: #7f8c8d;
                    line-height: 1.8;
                    padding-left: 24px;
                    position: relative;
                    margin-bottom: 8px;
                }
                .disclaimer-list li::before {
                    content: '•';
                    position: absolute;
                    left: 0;
                    color: #C2185B;
                    font-weight: 700;
                    font-size: 18px;
                }
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @media (max-width: 991px) {
                    .simulator-grid {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }
                    .results-card {
                        position: relative;
                        top: 0;
                    }
                    .simulator-card, .results-card {
                        padding: 30px;
                    }
                    .section-heading {
                        font-size: 32px;
                    }
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
            
            <section className="premium-simulator" id="simulador">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Simulador Online</span>
                        <h2 className="section-heading">Simule o Seu Crédito Habitação</h2>
                        <p className="section-subtitle">
                            Calcule a sua prestação mensal em tempo real e descubra as melhores condições para o seu crédito
                        </p>
                    </div>

                    <div className="simulator-grid">
                        <div className="simulator-card">
                                    <div className="input-group">
                                        <label className="input-label">Montante do Imóvel</label>
                                        <div className="input-value">€{montante.toLocaleString('pt-PT')}</div>
                                        <div className="slider-track">
                                            <div className="slider-fill" style={{ width: `${((montante - 50000) / (500000 - 50000)) * 100}%` }}></div>
                                        </div>
                                        <input
                                            type="range"
                                            className="range-input"
                                            min="50000"
                                            max="500000"
                                            step="5000"
                                            value={montante}
                                            onChange={(e) => setMontante(Number(e.target.value))}
                                        />
                                        <div className="range-labels">
                                            <span>€50.000</span>
                                            <span>€500.000</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Entrada</label>
                                        <div className="input-value">
                                            €{entrada.toLocaleString('pt-PT')} 
                                            <span style={{ fontSize: '18px', color: '#95a5a6', marginLeft: '12px' }}>
                                                ({((entrada / montante) * 100).toFixed(0)}%)
                                            </span>
                                        </div>
                                        <div className="slider-track">
                                            <div className="slider-fill" style={{ width: `${(entrada / (montante * 0.5)) * 100}%` }}></div>
                                        </div>
                                        <input
                                            type="range"
                                            className="range-input"
                                            min="0"
                                            max={montante * 0.5}
                                            step="1000"
                                            value={entrada}
                                            onChange={(e) => setEntrada(Number(e.target.value))}
                                        />
                                        <div className="range-labels">
                                            <span>€0</span>
                                            <span>€{(montante * 0.5).toLocaleString('pt-PT')}</span>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Prazo</label>
                                        <div className="prazo-buttons">
                                            {PRAZO_OPTIONS.map((anos) => (
                                                <button
                                                    key={anos}
                                                    type="button"
                                                    onClick={() => setPrazo(anos)}
                                                    className={`prazo-btn ${prazo === anos ? 'active' : ''}`}
                                                    suppressHydrationWarning
                                                    aria-label={`Prazo de ${anos} anos`}
                                                >
                                                    {anos} anos
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">TAN (Taxa Anual Nominal)</label>
                                        <input
                                            type="number"
                                            className="form-input"
                                            value={tan}
                                            onChange={(e) => setTan(Number(e.target.value))}
                                            step="0.1"
                                            min="0"
                                            max="10"
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    <div className="contact-grid">
                                        <div>
                                            <label className="input-label">Nome (Opcional)</label>
                                            <input
                                                type="text"
                                                className="form-input"
                                                value={nome}
                                                onChange={(e) => setNome(e.target.value)}
                                                placeholder="Seu nome"
                                                suppressHydrationWarning
                                            />
                                        </div>
                                        <div>
                                            <label className="input-label">Email (Opcional)</label>
                                            <input
                                                type="email"
                                                className="form-input"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="seu@email.com"
                                                suppressHydrationWarning
                                            />
                                        </div>
                                    </div>

                                    <button onClick={handleSubmit} className="submit-btn" suppressHydrationWarning>
                                        Enviar Simulação
                                    </button>

                                    {showSuccess && (
                                        <div className="success-message">✓ Simulação enviada com sucesso!</div>
                                    )}

                                    <div className="disclaimer">Sem compromisso • Resposta em 24h</div>
                        </div>

                        <div className="results-card">
                            <h3 className="results-title">Resumo da Simulação</h3>
                            <div className="prestacao-highlight">
                                <div className="prestacao-label">PRESTAÇÃO MENSAL</div>
                                {loadingResults ? (
                                    <div className="skeleton-shimmer skeleton-prestacao"></div>
                                ) : (
                                    <div className="prestacao-value">{formatCurrency(prestacaoMensal)}€</div>
                                )}
                                <div className="prestacao-subtitle">Prestação mensal sem Imposto do Selo</div>
                            </div>
                            <div className="results-list">
                                <div className="result-item">
                                    <div className="result-label">
                                        <span className="result-label-main">TAN</span>
                                        <span className="result-label-sub">Taxa Anual Nominal</span>
                                    </div>
                                    {loadingResults ? (
                                        <div className="skeleton-shimmer skeleton-value"></div>
                                    ) : (
                                        <span className="result-value">{formatPercentage(tan, 3)}%</span>
                                    )}
                                </div>
                                <div className="result-item">
                                    <div className="result-label">
                                        <span className="result-label-main">TAEG</span>
                                        <span className="result-label-sub">Taxa Anual Efetiva Global</span>
                                    </div>
                                    {loadingResults ? (
                                        <div className="skeleton-shimmer skeleton-value"></div>
                                    ) : (
                                        <span className="result-value">{formatPercentage(taeg, 1)}%</span>
                                    )}
                                </div>
                                <div className="result-item">
                                    <div className="result-label">
                                        <span className="result-label-main">MTIC</span>
                                        <span className="result-label-sub">Montante Total Imputado ao Consumidor</span>
                                    </div>
                                    {loadingResults ? (
                                        <div className="skeleton-shimmer skeleton-value"></div>
                                    ) : (
                                        <span className="result-value">{formatCurrency(mtic)}€</span>
                                    )}
                                </div>
                                <div className="result-item">
                                    <div className="result-label">
                                        <span className="result-label-main">Montante Total do Crédito</span>
                                    </div>
                                    {loadingResults ? (
                                        <div className="skeleton-shimmer skeleton-value"></div>
                                    ) : (
                                        <span className="result-value">{formatCurrency(montanteTotal)}€</span>
                                    )}
                                </div>
                                <div className="result-item">
                                    <div className="result-label">
                                        <span className="result-label-main">Prazo</span>
                                    </div>
                                    {loadingResults ? (
                                        <div className="skeleton-shimmer skeleton-value"></div>
                                    ) : (
                                        <span className="result-value">{prazo * 12} meses</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="disclaimer-box">
                        <h5 className="disclaimer-title">Pressupostos da Simulação</h5>
                        <ul className="disclaimer-list">
                            <li>TAN (Taxa Anual Nominal): Taxa de juro aplicada ao empréstimo</li>
                            <li>TAEG (Taxa Anual Efetiva Global): Inclui todos os custos do crédito</li>
                            <li>MTIC (Montante Total Imputado ao Consumidor): Total de juros pagos</li>
                            <li>Valores indicativos e sujeitos a análise de crédito</li>
                            <li>Esta simulação não constitui uma proposta vinculativa</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
