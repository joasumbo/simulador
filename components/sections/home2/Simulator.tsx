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
    const [telemovel, setTelemovel] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [tipoCredito, setTipoCredito] = useState<string>('')
    const [residenciaFiscal, setResidenciaFiscal] = useState<string>('')
    const [estatutoPortugal, setEstatutoPortugal] = useState<string>('')
    const [incidentesBP, setIncidentesBP] = useState<string>('')
    const [situacaoProfissional, setSituacaoProfissional] = useState<string>('')
    const [rendimentosAgregado, setRendimentosAgregado] = useState<string>('')
    const [consentimento, setConsentimento] = useState<boolean>(false)
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

DADOS DO CRÉDITO:
Montante: €${formatCurrency(montante)}
Entrada: €${formatCurrency(entrada)}
Prazo: ${prazo} anos
TAN: ${formatPercentage(tan, 3)}%
Prestação Mensal: €${formatCurrency(prestacaoMensal)}
TAEG: ${formatPercentage(taeg, 1)}%
MTIC: €${formatCurrency(mtic)}
Montante Total: €${formatCurrency(montanteTotal)}

DADOS DO CLIENTE:
Nome: ${nome}
Telemóvel: ${telemovel}
Email: ${email}
Tipo de Crédito: ${tipoCredito}
Residência Fiscal em Portugal: ${residenciaFiscal}
Estatuto em Portugal: ${estatutoPortugal}
Incidentes no Banco de Portugal: ${incidentesBP}
Situação Profissional: ${situacaoProfissional}
Rendimentos do Agregado: ${rendimentosAgregado}`
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
                setTelemovel('')
                setEmail('')
                setTipoCredito('')
                setResidenciaFiscal('')
                setEstatutoPortugal('')
                setIncidentesBP('')
                setSituacaoProfissional('')
                setRendimentosAgregado('')
                setConsentimento(false)
            }
        } catch (error) {
            console.error('Erro ao enviar simulação:', error)
        }
    }

    return (
        <>
            <style jsx>{`
                .premium-simulator {
                    padding: 60px 0;
                    background: #fafafa;
                    position: relative;
                }
                .section-header { text-align: center; margin-bottom: 40px; }
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
                    gap: 30px;
                    max-width: 1400px;
                    margin: 0 auto;
                    align-items: start;
                    min-height: 100vh;
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
                .form-select {
                    width: 100%;
                    padding: 16px 20px;
                    font-size: 16px;
                    font-weight: 600;
                    border: 2px solid #e9ecef;
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    outline: none;
                    background: #ffffff;
                    cursor: pointer;
                }
                .form-select:focus {
                    border-color: #C2185B;
                    box-shadow: 0 0 0 4px rgba(194, 24, 91, 0.1);
                }
                .section-divider {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    margin: 32px 0 24px 0;
                }
                .section-divider span {
                    padding: 0 20px;
                    font-size: 16px;
                    font-weight: 700;
                    color: #C2185B;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    background: #ffffff;
                    position: relative;
                    z-index: 1;
                }
                .section-divider::before {
                    content: '';
                    flex: 1;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #e9ecef, transparent);
                }
                .section-divider::after {
                    content: '';
                    flex: 1;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, #e9ecef, transparent);
                }
                .radio-group {
                    display: flex;
                    gap: 20px;
                    margin-top: 8px;
                }
                .radio-option {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    padding: 12px 20px;
                    border: 2px solid #e9ecef;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    flex: 1;
                }
                .radio-option:hover {
                    border-color: #C2185B;
                    background: #fef5f9;
                }
                .radio-option input[type="radio"] {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    accent-color: #C2185B;
                }
                .radio-option input[type="radio"]:checked + span {
                    color: #C2185B;
                    font-weight: 700;
                }
                .radio-option span {
                    font-size: 15px;
                    font-weight: 600;
                    color: #666666;
                    transition: all 0.3s ease;
                }
                .checkbox-group {
                    margin: 20px 0;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 12px;
                    border: 2px solid #e9ecef;
                }
                .checkbox-label {
                    display: flex;
                    gap: 12px;
                    cursor: pointer;
                    align-items: flex-start;
                }
                .checkbox-label input[type="checkbox"] {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    accent-color: #C2185B;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
                .checkbox-label span {
                    font-size: 13px;
                    line-height: 1.6;
                    color: #666666;
                }
                .submit-btn:disabled {
                    background: #cccccc;
                    cursor: not-allowed;
                    box-shadow: none;
                    transform: none;
                }
                .submit-btn:disabled:hover {
                    transform: none;
                    box-shadow: none;
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
                    padding: 24px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                    position: sticky;
                    top: 120px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    max-height: calc(100vh - 140px);
                    overflow-y: auto;
                }
                .results-card:hover {
                    box-shadow: 0 8px 24px rgba(194, 24, 91, 0.12);
                    border-color: rgba(194, 24, 91, 0.15);
                }
                .results-card::-webkit-scrollbar {
                    width: 6px;
                }
                .results-card::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .results-card::-webkit-scrollbar-thumb {
                    background: linear-gradient(135deg, #C2185B 0%, #880E4F 100%);
                    border-radius: 10px;
                }
                .results-card::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(135deg, #880E4F 0%, #C2185B 100%);
                }
                .results-title {
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    margin-bottom: 16px;
                    color: #5a6c7d;
                    text-align: center;
                }
                .prestacao-highlight {
                    background: #f8f9fa;
                    border: 2px solid #C2185B;
                    border-radius: 12px;
                    padding: 20px;
                    margin-bottom: 20px;
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
                    font-size: 36px;
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
                    padding: 14px 0;
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
                        max-height: none;
                        overflow-y: visible;
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

                                    <div className="section-divider">
                                        <span>Informações Pessoais</span>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Tipo de crédito pretendido *</label>
                                        <select
                                            className="form-select"
                                            value={tipoCredito}
                                            onChange={(e) => setTipoCredito(e.target.value)}
                                            required
                                        >
                                            <option value="">Selecione uma opção</option>
                                            <option value="credito-habitacao">Crédito Habitação</option>
                                            <option value="transferencia-credito">Transferência de Crédito Habitação</option>
                                            <option value="credito-pessoal">Crédito Pessoal / Automóvel</option>
                                            <option value="consolidacao-creditos">Consolidação de Créditos</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Tem residência fiscal em Portugal? *</label>
                                        <div className="radio-group">
                                            <label className="radio-option">
                                                <input
                                                    type="radio"
                                                    name="residenciaFiscal"
                                                    value="sim"
                                                    checked={residenciaFiscal === 'sim'}
                                                    onChange={(e) => setResidenciaFiscal(e.target.value)}
                                                    required
                                                />
                                                <span>Sim</span>
                                            </label>
                                            <label className="radio-option">
                                                <input
                                                    type="radio"
                                                    name="residenciaFiscal"
                                                    value="nao"
                                                    checked={residenciaFiscal === 'nao'}
                                                    onChange={(e) => setResidenciaFiscal(e.target.value)}
                                                />
                                                <span>Não</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Qual o seu estatuto em Portugal? *</label>
                                        <select
                                            className="form-select"
                                            value={estatutoPortugal}
                                            onChange={(e) => setEstatutoPortugal(e.target.value)}
                                            required
                                        >
                                            <option value="">Selecione uma opção</option>
                                            <option value="residente">Residente</option>
                                            <option value="nao-residente">Não Residente</option>
                                            <option value="residente-nao-habitual">Residente Não Habitual</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Tem incidentes ativos no Banco de Portugal? *</label>
                                        <select
                                            className="form-select"
                                            value={incidentesBP}
                                            onChange={(e) => setIncidentesBP(e.target.value)}
                                            required
                                        >
                                            <option value="">Selecione uma opção</option>
                                            <option value="nao">Não</option>
                                            <option value="sim">Sim</option>
                                            <option value="nao-sei">Não sei</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Situação profissional</label>
                                        <select
                                            className="form-select"
                                            value={situacaoProfissional}
                                            onChange={(e) => setSituacaoProfissional(e.target.value)}
                                        >
                                            <option value="">Selecione uma opção</option>
                                            <option value="conta-outrem">Por conta de outrem</option>
                                            <option value="conta-propria">Por conta própria</option>
                                            <option value="funcionario-publico">Funcionário Público</option>
                                            <option value="reformado">Reformado</option>
                                            <option value="desempregado">Desempregado</option>
                                            <option value="estudante">Estudante</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Rendimentos do agregado *</label>
                                        <select
                                            className="form-select"
                                            value={rendimentosAgregado}
                                            onChange={(e) => setRendimentosAgregado(e.target.value)}
                                            required
                                        >
                                            <option value="">Selecione uma opção</option>
                                            <option value="menos-500">Menos de €500</option>
                                            <option value="500-1000">€500 - €1.000</option>
                                            <option value="1000-1500">€1.000 - €1.500</option>
                                            <option value="1500-2000">€1.500 - €2.000</option>
                                            <option value="2000-3000">€2.000 - €3.000</option>
                                            <option value="mais-3000">Mais de €3.000</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Nome *</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            placeholder="Nome Completo"
                                            required
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Telemóvel *</label>
                                        <input
                                            type="tel"
                                            className="form-input"
                                            value={telemovel}
                                            onChange={(e) => setTelemovel(e.target.value)}
                                            placeholder="Contacto"
                                            required
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    <div className="input-group">
                                        <label className="input-label">Email *</label>
                                        <input
                                            type="email"
                                            className="form-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Email"
                                            required
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={consentimento}
                                                onChange={(e) => setConsentimento(e.target.checked)}
                                                required
                                            />
                                            <span>
                                                Ao utilizar este formulário, concorda em fornecer as suas informações, 
                                                para nós entrarmos em contacto. Os seus dados serão mantidos em sigilo 
                                                e não serão compartilhados com terceiros.
                                            </span>
                                        </label>
                                    </div>

                                    <button 
                                        onClick={handleSubmit} 
                                        className="submit-btn" 
                                        suppressHydrationWarning
                                        disabled={!consentimento || !nome || !telemovel || !email || !tipoCredito || !residenciaFiscal || !estatutoPortugal || !incidentesBP || !rendimentosAgregado}
                                    >
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
