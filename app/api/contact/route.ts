import { NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    if (!data.email || !data.message) {
      return NextResponse.json(
        { success: false, message: "Email e mensagem são obrigatórios" },
        { status: 400 }
      )
    }

    console.log("Simulação recebida:", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ 
      success: true, 
      message: "Simulação enviada com sucesso!" 
    })
  } catch (error) {
    console.error("Erro ao processar formulário:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao processar solicitação" },
      { status: 500 }
    )
  }
}
