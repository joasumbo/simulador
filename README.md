# DS Intermediários de Crédito

Sistema de simulação de crédito habitação desenvolvido para a DS Intermediários de Crédito, permitindo aos clientes simular condições de financiamento em tempo real.

## Descrição

Plataforma web moderna para simulação de crédito habitação, oferecendo:

- Simulador de crédito em tempo real com cálculos detalhados
- Interface responsiva e intuitiva
- Informações institucionais e de contacto
- SEO otimizado para mecanismos de busca
- Performance otimizada com Next.js 15

## Tecnologias Utilizadas

- **Framework**: Next.js 15.5.0 (Turbopack)
- **UI**: React 19.1.0
- **Linguagem**: TypeScript 5
- **Styling**: styled-jsx, Bootstrap 5, CSS customizado
- **Fontes**: Nunito Sans, Mulish (Google Fonts)
- **Animações**: Swiper.js para carrosséis
- **Deployment**: Plesk com Node.js

## Estrutura do Projeto

```
DSIcredito/
├── app/                      # Páginas da aplicação (Next.js App Router)
│   ├── page.tsx             # Página principal
│   ├── contact/             # Página de contacto
│   ├── faq/                 # Perguntas frequentes
│   ├── error/               # Página de erro
│   └── not-found.tsx        # Página 404
├── components/              # Componentes reutilizáveis
│   ├── elements/            # Elementos UI (botões, forms, etc)
│   ├── layout/              # Layout e navegação
│   └── sections/            # Seções da página principal
│       └── home2/           # Componentes da home
│           ├── About.tsx
│           ├── Banner.tsx
│           ├── Contactinfo.tsx
│           └── Simulator.tsx
├── public/                  # Arquivos estáticos
│   └── assets/              # CSS, imagens, fontes
├── next.config.ts           # Configuração do Next.js
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências do projeto
```

## Funcionalidades

### Simulador de Crédito
- Cálculo automático de prestação mensal
- TAN (Taxa Anual Nominal) e TAEG (Taxa Anual Efetiva Global)
- Valores totais de juros e montante a pagar
- Validação de inputs em tempo real
- Loading states e feedback visual

### SEO e Performance
- Meta tags otimizadas para Google e redes sociais
- JSON-LD para rich snippets
- Sitemap e robots.txt configurados
- Imagens e assets otimizados
- Server-side rendering com Next.js

### Interface do Usuário
- Design moderno e profissional
- Animações suaves de scroll e cursor
- Barra de progresso de scroll
- Responsivo para todos os dispositivos
- Acessibilidade WCAG 2.1

## Instalação

### Pré-requisitos
- Node.js 18.x ou superior
- npm ou yarn

### Passos para Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/dsicredito.git
cd dsicredito
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o ambiente de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:3000`

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento (Turbopack)
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter ESLint

## Deployment em Plesk

O projeto está configurado para deployment em servidor Plesk com Node.js. Consulte o arquivo `DEPLOY-PLESK.md` para instruções detalhadas.

### Resumo do Deployment

1. Execute `npm run build` localmente
2. Faça upload dos arquivos para `/httpdocs` via FTP/SFTP
3. Configure Node.js no Plesk (versão 18.x ou superior)
4. Instale as dependências no servidor
5. Configure proxy reverso para porta 3000
6. Inicie a aplicação

## Variáveis de Ambiente

Crie um arquivo `.env.local` para desenvolvimento:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Para produção, configure no Plesk ou no arquivo `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://dsicredito.pt
NODE_ENV=production
PORT=3000
```

## Informações de Contacto

**DS Intermediários de Crédito**

- Morada: Av. Sacadura Cabral, 3812, São Félix da Marinha, 4410-099, Porto
- Telefone: +351 226 007 286
- Email: info@dsicredito.pt
- Website: https://dsicredito.pt

**Redes Sociais:**
- Facebook: https://www.facebook.com/DSICREDITOPORTUGAL/
- Instagram: https://www.instagram.com/dsicredito.pt/
- LinkedIn: https://www.linkedin.com/company/dsintermediariosdecredito/

## Licença

Este projeto é propriedade da DS Intermediários de Crédito. Todos os direitos reservados.

## Desenvolvimento

Desenvolvido por: João Sumbo

Data: Dezembro 2025

---

Para suporte técnico ou dúvidas sobre o funcionamento do sistema, entre em contacto através dos canais oficiais da DS Intermediários de Crédito.
