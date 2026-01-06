import type { Metadata } from "next";
import { Nunito_Sans, Mulish } from "next/font/google";

import "@/public/assets/css/bootstrap.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";
import "./globals.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade'

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const muli = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dsicredito.pt'),
  title: "DS Intermediários de Crédito - Simulador de Crédito Habitação Online",
  description: "Simule o seu crédito habitação em tempo real e encontre as melhores condições do mercado. Intermediários de crédito especializados em Leiria. Contacte-nos: 913 016 845.",
  keywords: "crédito habitação, simulador crédito, intermediários crédito, financiamento imobiliário, crédito habitação Portugal, Leiria, TAN, TAEG, DS Crédito, crédito pessoal, consolidação créditos",
  authors: [{ name: "DS Intermediários de Crédito" }],
  openGraph: {
    title: "DS Intermediários de Crédito - Simulador de Crédito Habitação",
    description: "Simule o seu crédito habitação online e encontre as melhores taxas. Especialistas em financiamento imobiliário em Leiria.",
    url: "https://dsicredito.pt",
    siteName: "DS Intermediários de Crédito",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/assets/images/logo-ds.png",
        width: 1200,
        height: 630,
        alt: "DS Intermediários de Crédito - Simulador Online"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DS Intermediários de Crédito - Simulador Online",
    description: "Simule o seu crédito habitação e encontre as melhores condições.",
    images: ["/assets/images/logo-ds.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/assets/images/logo-ds.png", type: "image/png" }
    ],
    shortcut: "/assets/images/logo-ds.png",
    apple: "/assets/images/logo-ds.png"
  },
  alternates: {
    canonical: "https://dsicredito.pt"
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#C2185B" />
      </head>
      <body className={`${nunitoSans.className} ${muli.className}`}>
        {children}
      </body>
    </html>
  );
}
