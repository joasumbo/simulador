import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import ContactInfo from "@/components/sections/home2/Contactinfo"
import Simulator from "@/components/sections/home2/Simulator"
import Testemunhos from "@/components/sections/home2/Testemunhos"
import Valores from "@/components/sections/home2/Valores"
import Equipa from "@/components/sections/home2/Equipa"
import ScrollProgress from "@/components/elements/ScrollProgress"

export default function Home_OnePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "DS Intermediários de Crédito - Leiria Beira Rio",
        "description": "Intermediários de crédito especializados em crédito habitação e soluções de financiamento imobiliário em Portugal",
        "url": "https://dsicredito.pt",
        "logo": "https://dsicredito.pt/assets/images/logo-ds.png",
        "image": "https://dsicredito.pt/assets/images/logo-ds.png",
        "telephone": "+351913016845",
        "email": "catarinateixeira@dsicredito.pt",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Anzebino da Cruz Saraiva, loja 34, Piso 0",
            "addressLocality": "Leiria",
            "addressRegion": "Leiria",
            "postalCode": "2415-371",
            "addressCountry": "PT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.7436",
            "longitude": "-8.8071"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/DSICREDITOPORTUGAL/",
            "https://www.instagram.com/dsicredito.pt/",
            "https://www.linkedin.com/company/dsintermediariosdecredito/"
        ],
        "areaServed": {
            "@type": "Country",
            "name": "Portugal"
        },
        "priceRange": "€€"
    }

    return (
        <>
            <ScrollProgress />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Layout headerStyle={4} footerStyle={2}>
                <Banner />
                <About />
                <Testemunhos />
                <Valores />
                <Equipa />
                <Simulator />
                <ContactInfo />
            </Layout>
        </>
    )
}
