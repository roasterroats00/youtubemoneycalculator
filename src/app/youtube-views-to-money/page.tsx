import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import ViewsToMoneyClient from "./ViewsToMoneyClient";

export const metadata: Metadata = {
    title: "YouTube Views to Money Calculator – Estimate Earnings Per View (2026)",
    description:
        "Estimate your YouTube earnings instantly. Enter views, CPM & get real-time revenue predictions. Calculate how much YouTube pays per 1,000 views for free.",
    keywords: [
        "youtube views to money",
        "youtube money calculator",
        "how much youtube pays per view",
        "youtube earnings calculator",
        "youtube revenue estimator",
        "youtube pay per 1000 views",
        "youtube cpm calculator",
        "youtube income calculator",
    ],
    openGraph: {
        title: "YouTube Views to Money Calculator – Free Revenue Estimator",
        description: "Enter your views and CPM to instantly calculate YouTube earnings.",
        type: "website",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.com/youtube-views-to-money",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much money does YouTube pay per 1,000 views?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "YouTube pays an average of $1 to $30 per 1,000 views, depending on factors like CPM, niche, and audience location. High-paying niches like finance or technology can significantly increase your earnings.",
            },
        },
        {
            "@type": "Question",
            name: "How many views do I need to start earning money on YouTube?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "To earn money on YouTube, you must join the YouTube Partner Program, which requires at least 1,000 subscribers and 4,000 hours of watch time in the last 12 months.",
            },
        },
        {
            "@type": "Question",
            name: "What is CPM, and how does it affect my YouTube income?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CPM (Cost Per Mille) refers to the amount advertisers pay per 1,000 ad impressions. A higher CPM means more revenue for your channel.",
            },
        },
        {
            "@type": "Question",
            name: "How much money can I make with 1 million YouTube views?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Earnings for 1 million views typically range from $4,000 to $60,000, depending on your niche, audience engagement, and geographic location.",
            },
        },
        {
            "@type": "Question",
            name: "Do all YouTube views generate revenue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No, not all views result in earnings. Only views with ads displayed, engaged viewers, or YouTube Premium subscribers contribute to revenue.",
            },
        },
        {
            "@type": "Question",
            name: "Can I earn money on YouTube without ads?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, you can earn money without ads through sponsorships, affiliate marketing, merchandise sales, channel memberships, and fan contributions via Super Chats or Patreon.",
            },
        },
    ],
};

export default function YouTubeViewsToMoneyPage() {
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
            <ViewsToMoneyClient />
            <Footer />
        </div>
    );
}
