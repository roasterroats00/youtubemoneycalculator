import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import RevenueCalculatorClient from "./RevenueCalculatorClient";

export const metadata: Metadata = {
    title: "YouTube Revenue Calculator – Calculate Your Earnings (2026)",
    description:
        "Use our YouTube Revenue Calculator! Enter views, RPM & get instant, accurate earnings estimates for free. Calculate channel and video revenue easily.",
    keywords: [
        "youtube revenue calculator",
        "youtube earnings calculator",
        "youtube income calculator",
        "calculate youtube revenue",
        "youtube money calculator",
        "youtube rpm calculator",
        "how much youtube pays",
        "youtube ad revenue calculator",
    ],
    openGraph: {
        title: "YouTube Revenue Calculator – Free Earnings Calculator",
        description:
            "Enter views and RPM to instantly calculate your YouTube revenue for free.",
        type: "website",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.com/youtube-revenue-calculator",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How does a YouTube Revenue Calculator work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A YouTube Revenue Calculator estimates earnings by multiplying your views by your RPM and dividing by 1,000. It accounts for ads, memberships, and YouTube Premium revenue.",
            },
        },
        {
            "@type": "Question",
            name: "What is RPM in YouTube revenue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "RPM stands for Revenue Per Mille, representing how much revenue a creator earns per 1,000 views, including ads, memberships, and YouTube Premium earnings.",
            },
        },
        {
            "@type": "Question",
            name: "How much money can I make per 1,000 views?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Earnings per 1,000 views depend on RPM, which can range from $1 to $30. High-demand niches and regions typically yield higher RPMs.",
            },
        },
        {
            "@type": "Question",
            name: "Does the content niche affect revenue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, niches like finance, health, and tech often have higher RPMs due to advertiser demand. Gaming or comedy content tends to have lower RPMs.",
            },
        },
        {
            "@type": "Question",
            name: "Can YouTube Shorts earn revenue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Shorts can earn revenue through the Shorts Fund or ads, depending on their monetization setup.",
            },
        },
        {
            "@type": "Question",
            name: "How do longer videos impact revenue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Longer videos (over 8 minutes) allow for mid-roll ads, increasing ad impressions and overall revenue potential.",
            },
        },
    ],
};

export default function YouTubeRevenueCalculatorPage() {
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
            <RevenueCalculatorClient />
            <Footer />
        </div>
    );
}
