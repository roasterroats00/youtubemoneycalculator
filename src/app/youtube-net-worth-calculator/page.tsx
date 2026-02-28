import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NetWorthClient from "./NetWorthClient";

export const metadata: Metadata = {
    title: "YouTube Net Worth Calculator – Estimate Channel Value (2026)",
    description:
        "Uncover your YouTube channel's true worth! Learn key factors, valuation methods, and maximize your channel value with our Net Worth Calculator.",
    keywords: [
        "youtube net worth calculator",
        "youtube channel value",
        "how much is my youtube channel worth",
        "youtube channel valuation",
        "youtube earnings estimator",
        "sell youtube channel",
        "youtube channel worth calculator",
        "youtube net worth",
    ],
    openGraph: {
        title: "YouTube Net Worth Calculator – Estimate Channel Value",
        description:
            "Uncover your YouTube channel's true worth! Learn key factors, valuation methods, and maximize your value.",
        type: "website",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.com/youtube-net-worth-calculator",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How is YouTube net worth calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "YouTube net worth is calculated by multiplying a channel's annual revenue by a valuation multiplier (typically 2–5x). Additional factors like niche demand, engagement, and growth potential also influence the valuation.",
            },
        },
        {
            "@type": "Question",
            name: "What is a valuation multiplier?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A valuation multiplier is a number used to estimate a channel's worth based on its niche, engagement, and revenue streams. High-demand niches typically have higher multipliers.",
            },
        },
        {
            "@type": "Question",
            name: "Does subscriber count affect net worth?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, a large and loyal subscriber base adds value to a channel by increasing its potential for long-term revenue and partnerships.",
            },
        },
        {
            "@type": "Question",
            name: "Can I sell my YouTube channel?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, YouTube channels can be sold as assets. Platforms like Flippa or private agreements allow creators to monetize their channels' net worth.",
            },
        },
        {
            "@type": "Question",
            name: "What is the average net worth of a successful YouTube channel?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The net worth varies widely. Small channels earning $1,000 monthly may be worth $30,000–$60,000, while larger channels earning $10,000+ monthly can exceed $500,000 in value.",
            },
        },
        {
            "@type": "Question",
            name: "How do sponsorships impact net worth?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sponsorships significantly increase net worth by providing additional revenue streams and highlighting the channel's value to brands.",
            },
        },
    ],
};

export default function YouTubeNetWorthCalculatorPage() {
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
            <NetWorthClient />
            <Footer />
        </div>
    );
}
