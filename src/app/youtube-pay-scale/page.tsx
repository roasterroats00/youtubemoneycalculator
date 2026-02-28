import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import PayScaleClient from "./PayScaleClient";

export const metadata: Metadata = {
    title: "YouTube Pay Scale – CPM, RPM & Earnings Guide (2026)",
    description:
        "Understand the YouTube Pay Scale! Learn CPM, RPM, and maximize your YouTube earnings effortlessly. Complete guide to YouTube creator compensation.",
    keywords: [
        "youtube pay scale",
        "youtube cpm rates",
        "youtube rpm",
        "how much does youtube pay",
        "youtube earnings per view",
        "youtube creator pay",
        "youtube ad revenue",
        "youtube pay per 1000 views",
    ],
    openGraph: {
        title: "YouTube Pay Scale – CPM, RPM & Earnings Guide",
        description:
            "Learn how YouTube pays creators. Understand CPM, RPM, and how to maximize your YouTube earnings.",
        type: "website",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.com/youtube-pay-scale",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is CPM in YouTube's pay scale?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CPM stands for Cost Per Mille, which is the amount advertisers pay per 1,000 ad impressions. It varies based on factors like audience location, content niche, and seasonality.",
            },
        },
        {
            "@type": "Question",
            name: "What is RPM, and how does it differ from CPM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "RPM (Revenue Per Mille) represents the actual revenue a creator earns per 1,000 views, while CPM measures what advertisers pay per 1,000 ad impressions. RPM accounts for YouTube's revenue share and includes all monetization streams.",
            },
        },
        {
            "@type": "Question",
            name: "How does YouTube Premium impact earnings?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "YouTube Premium contributes to creator earnings by sharing subscription revenue based on the watch time of Premium members.",
            },
        },
        {
            "@type": "Question",
            name: "What factors affect RPM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "RPM is influenced by audience demographics, content niche, engagement levels, ad types, and seasonal trends.",
            },
        },
        {
            "@type": "Question",
            name: "How do I increase my earnings under YouTube's pay scale?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Focus on creating high-quality content in lucrative niches, improving viewer retention, targeting high-paying regions, and diversifying revenue streams through memberships and merchandise.",
            },
        },
        {
            "@type": "Question",
            name: "Why do earnings vary by region?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Earnings vary because advertisers pay more for impressions in regions with higher purchasing power and advertiser demand, such as the U.S. and Europe.",
            },
        },
    ],
};

export default function YouTubePayScalePage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>
            <Header />
            <PayScaleClient />
            <Footer />
        </div>
    );
}
