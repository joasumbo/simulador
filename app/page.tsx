import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import ContactInfo from "@/components/sections/home2/Contactinfo"
import Simulator from "@/components/sections/home2/Simulator"
import ScrollProgress from "@/components/elements/ScrollProgress"

export default function Home_OnePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "DS Intermediários de Crédito",
        "description": "Intermediários de crédito especializados em crédito habitação e soluções de financiamento imobiliário em Portugal",
        "url": "https://dsicredito.pt",
        "logo": "https://dsicredito.pt/assets/images/logo-ds.png",
        "image": "https://dsicredito.pt/assets/images/logo-ds.png",
        "telephone": "+351226007286",
        "email": "info@dsicredito.pt",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Sacadura Cabral, 3812",
            "addressLocality": "São Félix da Marinha",
            "addressRegion": "Porto",
            "postalCode": "4410-099",
            "addressCountry": "PT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "41.0883",
            "longitude": "-8.6648"
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
                <Simulator />
                <ContactInfo />
            </Layout>
        </>
    )
}
