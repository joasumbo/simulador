import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

interface SimuladorFormData {
  // Dados do crédito
  montante: number
  entrada: number
  prazo: number
  tan: number
  prestacao: number
  taeg: number
  montanteTotal: number
  // Dados pessoais
  nome: string
  email: string
  telemovel: string
  tipoCredito: string
  residenciaFiscal: string
  estatutoPortugal: string
  incidentesBP: string
  situacaoProfissional: string
  rendimentosAgregado: string
}

export async function POST(request: Request) {
  try {
    const data: SimuladorFormData = await request.json()

    if (!data.email || !data.nome) {
      return NextResponse.json(
        { success: false, message: "Nome e email são obrigatórios" },
        { status: 400 }
      )
    }

    // Configuração do servidor SMTP
    const transporter = nodemailer.createTransport({
      host: 'sv02.workmind.host',
      port: 465,
      secure: true,
      auth: {
        user: 'no-reply@workmind.pt',
        pass: 'L65it0@6l'
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Template HTML do email
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Nunito Sans', 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
          <tr>
            <td align="center">
              <table width="650" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; max-width: 650px;">
                
                <!-- Logo -->
                <tr>
                  <td style="padding: 30px 40px 20px 40px; text-align: center;">
                    <img src="https://dsicredito.pt/wp-content/uploads/2021/06/DSIC_Logo_2021_fundoTransparente.png" alt="DS Crédito" style="width: 120px; height: auto;" />
                  </td>
                </tr>
                
                <!-- Saudação -->
                <tr>
                  <td style="padding: 20px 40px;">
                    <h1 style="color: #2c3e50; font-size: 22px; margin: 0 0 15px 0; font-weight: 700; font-family: 'Nunito Sans', sans-serif;">
                      Olá ${data.nome}!
                    </h1>
                    <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 0; font-family: 'Nunito Sans', sans-serif;">
                      Muito obrigado pelo interesse, eis o resumo da sua simulação:
                    </p>
                  </td>
                </tr>
                
                <!-- Resumo da Simulação -->
                <tr>
                  <td style="padding: 10px 40px 30px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f9fa; border-radius: 8px; overflow: hidden;">
                      <tr>
                        <td style="padding: 25px;">
                          <h2 style="color: #C2185B; font-size: 18px; margin: 0 0 20px 0; font-weight: 700; font-family: 'Nunito Sans', sans-serif; border-bottom: 2px solid #C2185B; padding-bottom: 10px;">
                            DADOS DO CRÉDITO
                          </h2>
                          
                          <table width="100%" cellpadding="8" cellspacing="0" style="font-family: 'Nunito Sans', sans-serif; font-size: 14px;">
                            <tr>
                              <td style="color: #666; width: 50%; padding: 8px 0;"><strong>Tipo de Crédito:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.tipoCredito}</td>
                            </tr>
                            <tr style="background-color: rgba(194, 24, 91, 0.05);">
                              <td style="color: #666; padding: 8px 10px;"><strong>Montante do Imóvel:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 10px;">${data.montante.toLocaleString('pt-PT')}€</td>
                            </tr>
                            <tr>
                              <td style="color: #666; padding: 8px 0;"><strong>Entrada:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.entrada.toLocaleString('pt-PT')}€ (${((data.entrada / data.montante) * 100).toFixed(0)}%)</td>
                            </tr>
                            <tr style="background-color: rgba(194, 24, 91, 0.05);">
                              <td style="color: #666; padding: 8px 10px;"><strong>Prazo:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 10px;">${data.prazo} anos</td>
                            </tr>
                            <tr>
                              <td style="color: #666; padding: 8px 0;"><strong>TAN:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.tan.toFixed(2)}%</td>
                            </tr>
                            <tr>
                              <td style="color: #666; padding: 8px 0;"><strong>TAEG:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.taeg.toFixed(2)}%</td>
                            </tr>
                            <tr style="background-color: rgba(194, 24, 91, 0.05);">
                              <td style="color: #666; padding: 8px 10px;"><strong>Montante Total do Crédito:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 10px;">${data.montanteTotal.toLocaleString('pt-PT')}€</td>
                            </tr>
                            <tr style="background-color: #C2185B;">
                              <td style="color: #ffffff; padding: 12px 10px; font-size: 16px;"><strong>Prestação Mensal:</strong></td>
                              <td style="color: #ffffff; text-align: right; padding: 12px 10px; font-size: 18px; font-weight: 700;">${data.prestacao.toLocaleString('pt-PT', {minimumFractionDigits: 2, maximumFractionDigits: 2})}€</td>
                            </tr>
                          </table>
                          
                          <h2 style="color: #C2185B; font-size: 18px; margin: 30px 0 20px 0; font-weight: 700; font-family: 'Nunito Sans', sans-serif; border-bottom: 2px solid #C2185B; padding-bottom: 10px;">
                            DADOS DO CLIENTE
                          </h2>
                          
                          <table width="100%" cellpadding="8" cellspacing="0" style="font-family: 'Nunito Sans', sans-serif; font-size: 14px;">
                            <tr>
                              <td style="color: #666; width: 50%; padding: 8px 0;"><strong>Nome:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.nome}</td>
                            </tr>
                            <tr style="background-color: rgba(194, 24, 91, 0.05);">
                              <td style="color: #666; padding: 8px 10px;"><strong>Telemóvel:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 10px;">${data.telemovel}</td>
                            </tr>
                            <tr>
                              <td style="color: #666; padding: 8px 0;"><strong>Email:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.email}</td>
                            </tr>
                            <tr style="background-color: rgba(194, 24, 91, 0.05);">
                              <td style="color: #666; padding: 8px 10px;"><strong>Residência Fiscal:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 10px;">${data.residenciaFiscal}</td>
                            </tr>
                            <tr>
                              <td style="color: #666; padding: 8px 0;"><strong>Estatuto:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.estatutoPortugal}</td>
                            </tr>
                            <tr style="background-color: rgba(194, 24, 91, 0.05);">
                              <td style="color: #666; padding: 8px 10px;"><strong>Incidentes BP:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 10px;">${data.incidentesBP}</td>
                            </tr>
                            <tr>
                              <td style="color: #666; padding: 8px 0;"><strong>Situação Profissional:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 0;">${data.situacaoProfissional}</td>
                            </tr>
                            <tr style="background-color: rgba(194, 24, 91, 0.05);">
                              <td style="color: #666; padding: 8px 10px;"><strong>Rendimentos:</strong></td>
                              <td style="color: #2c3e50; text-align: right; padding: 8px 10px;">${data.rendimentosAgregado}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Call to Action -->
                <tr>
                  <td style="padding: 0 40px 30px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #C2185B 0%, #880E4F 100%); border-radius: 8px;">
                      <tr>
                        <td style="padding: 25px; text-align: center;">
                          <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 15px 0; font-weight: 700; font-family: 'Nunito Sans', sans-serif;">
                            Deseja avançar com o seu pedido de crédito?
                          </h3>
                          <p style="color: #ffffff; font-size: 14px; margin: 0 0 20px 0; opacity: 0.95; font-family: 'Nunito Sans', sans-serif;">
                            Entre agora mesmo em contato pelos canais disponíveis:
                          </p>
                          
                          <table width="100%" cellpadding="10" cellspacing="0" border="0" style="margin-top: 15px;">
                            <tr>
                              <td style="text-align: center; font-family: 'Nunito Sans', sans-serif;">
                                <p style="margin: 0 0 5px 0; color: #ffffff; font-size: 13px; opacity: 0.9;">Telefone:</p>
                                <p style="margin: 0 0 15px 0;">
                                  <a href="tel:+351913016845" style="color: #ffffff; font-size: 18px; font-weight: 700; text-decoration: none;">913 016 845</a>
                                </p>
                                
                                <p style="margin: 0 0 5px 0; color: #ffffff; font-size: 13px; opacity: 0.9;">Email:</p>
                                <p style="margin: 0 0 15px 0;">
                                  <a href="mailto:catarinateixeira@dsicredito.pt" style="color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none;">catarinateixeira@dsicredito.pt</a>
                                </p>
                                
                                <p style="margin: 0 0 5px 0; color: #ffffff; font-size: 13px; opacity: 0.9;">Horário:</p>
                                <p style="margin: 0; color: #ffffff; font-size: 15px; font-weight: 600;">Segunda a Sexta: 9h - 18h</p>
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Redes Sociais -->
                          <table width="100%" cellpadding="15" cellspacing="0" border="0" style="margin-top: 20px;">
                            <tr>
                              <td style="text-align: center;">
                                <a href="https://facebook.com/dsicredito" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                                  <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" style="width: 32px; height: 32px;" />
                                </a>
                                <a href="https://instagram.com/dsicredito" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                                  <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" style="width: 32px; height: 32px;" />
                                </a>
                                <a href="https://linkedin.com/company/dsicredito" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                                  <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" style="width: 32px; height: 32px;" />
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Copyright -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 3px solid #C2185B;">
                    <p style="color: #666; font-size: 11px; line-height: 1.6; margin: 0; text-align: justify; font-family: 'Nunito Sans', sans-serif;">
                      Percentagem Elaborada, Lda Intermediários de Crédito Vinculado, com o registo n.º 7912, autorizado pelo Banco de Portugal para a prestação de serviços de consultoria e autorizado para a prestação de serviços de intermediação de crédito. Contratos de crédito abrangidos: Crédito Habitação e Crédito a Consumidores. Mutuantes ou grupos de mutuantes com quem mantém contrato de vinculação: BANCO SANTANDER TOTTA,S.A., CAIXA GERAL DE DEPÓSITOS, BANCO BPI, NOVO BANCO, S.A., BANCO CTT, S.A., UNICRE – INSTITUIÇÃO FINANCEIRA DE CRÉDITO, S.A, UCI – UNION DE CRÉDITOS INMOBILIÁRIOS, S.A., ABANCA CORPORACION BANCARIA, S.A SUCURSAL EM PORTUGAL, BANKINTER, S.A- SUCURSAL EM PORTUGAL, BANCO BIC PORTUGUES, S.A, CAIXA CENTRAL DE CRÉDITO AGRÍCOLA MUTUO, CRL. A "DS INTERMEDIÁRIOS DE CRÉDITO" é uma marca detida pela DECISÕES E SOLUÇÕES – INTERMEDIÁRIOS DE CRÉDITO, LDA.
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Enviar email para o cliente
    await transporter.sendMail({
      from: '"DS Intermediários de Crédito" <no-reply@workmind.pt>',
      to: data.email,
      subject: 'Simulação de crédito - DSICREDITO',
      html: htmlEmail
    })

    // Enviar cópia para a empresa
    await transporter.sendMail({
      from: '"DS Intermediários de Crédito" <no-reply@workmind.pt>',
      to: 'catarinateixeira@dsicredito.pt',
      subject: `Nova Simulação - ${data.nome}`,
      html: htmlEmail
    })

    console.log('✅ Emails enviados com sucesso para:', data.email)

    return NextResponse.json({ 
      success: true, 
      message: "Simulação enviada com sucesso!" 
    })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao processar solicitação" },
      { status: 500 }
    )
  }
}
