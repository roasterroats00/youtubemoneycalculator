import React from "react";

interface SchemaProps {
    data: Record<string, any>;
}

/**
 * A reusable component to render JSON-LD structured data for SEO.
 */
export const Schema: React.FC<SchemaProps> = ({ data }) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
};

/**
 * Common schema generators
 */
export const SchemaFactory = {
    organization: () => ({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://youtubemoneycalculator.net/#organization",
        "name": "YouTube Money Calculator",
        "url": "https://youtubemoneycalculator.net",
        "logo": {
            "@type": "ImageObject",
            "url": "https://youtubemoneycalculator.net/upload/youtubemoneycalculator.net.png",
            "width": 600,
            "height": 60
        },
        "sameAs": [
            "https://twitter.com/ytmoneycalc", // Replace with real links if available
            "https://facebook.com/youtubemoneycalculator"
        ]
    }),

    website: () => ({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://youtubemoneycalculator.net/#website",
        "url": "https://youtubemoneycalculator.net",
        "name": "YouTube Money Calculator",
        "description": "Calculate YouTube earnings and analyze channel revenue.",
        "publisher": { "@id": "https://youtubemoneycalculator.net/#organization" },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://youtubemoneycalculator.net/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }),

    breadcrumb: (items: { name: string; item: string }[]) => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.item.startsWith("http") ? item.item : `https://youtubemoneycalculator.net${item.item}`
        }))
    }),

    softwareApplication: (name: string, description: string, url: string) => ({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": name,
        "description": description,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Web Browser",
        "url": url.startsWith("http") ? url : `https://youtubemoneycalculator.net${url}`,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    }),

    faq: (items: { q: string; a: string }[]) => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    })
};
