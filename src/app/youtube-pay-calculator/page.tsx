import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import PayCalculatorClient from "./PayCalculatorClient";

export const metadata: Metadata = {
    title: "YouTube Pay Calculator – Estimate Your Earnings Instantly (2026)",
    description:
        "Estimate your YouTube earnings instantly! Use our YouTube Pay Calculator for accurate revenue predictions based on views, RPM & CPM.",
    keywords: [
        "youtube pay calculator",
        "youtube earnings calculator",
        "youtube income calculator",
        "youtube revenue calculator",
        "how much youtube pays",
        "youtube money estimator",
        "youtube rpm calculator",
        "youtube cpm calculator",
    ],
    openGraph: {
        title: "YouTube Pay Calculator – Estimate Your Earnings Instantly",
        description:
            "Use our YouTube Pay Calculator for accurate revenue predictions and growth insights based on views and RPM.",
        type: "website",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.net/youtube-pay-calculator",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How does the YouTube Pay Calculator work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The YouTube Pay Calculator works by multiplying your views by your RPM and dividing by 1,000. It provides an estimate based on your content performance and audience metrics.",
            },
        },
        {
            "@type": "Question",
            name: "Can I use the calculator for Shorts or live streams?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, the calculator can estimate earnings for Shorts and live streams by factoring in their specific monetization methods, such as ad revenue and Super Chats.",
            },
        },
        {
            "@type": "Question",
            name: "What's the difference between RPM and CPM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "RPM is the revenue a creator earns per 1,000 views, including all income streams. CPM refers to what advertisers pay per 1,000 ad impressions and does not reflect the creator's final earnings.",
            },
        },
        {
            "@type": "Question",
            name: "What's a good RPM to aim for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A good RPM varies by niche and region, but anything above $5 is considered solid. High-demand niches can see RPMs exceeding $10.",
            },
        },
        {
            "@type": "Question",
            name: "How do I improve my RPM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "To improve RPM, focus on creating content in high-paying niches, improving engagement, targeting premium regions, and enabling all ad formats.",
            },
        },
        {
            "@type": "Question",
            name: "Why do earnings vary across regions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Advertiser demand and purchasing power differ across regions. Countries like the U.S. and Norway have higher CPMs, resulting in higher RPMs for creators targeting those regions.",
            },
        },
    ],
};

export default function YouTubePayCalculatorPage() {
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
            <PayCalculatorClient />
            <Footer />
        </div>
    );
}
