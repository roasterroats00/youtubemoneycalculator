import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import RevenueEstimatorClient from "./RevenueEstimatorClient";

export const metadata: Metadata = {
    title: "YouTube Revenue Estimator – Calculate Your Earnings Potential (2026)",
    description:
        "Use our YouTube Revenue Estimator to calculate potential earnings. Enter views, CPM & instantly get real-time revenue predictions for your channel or videos.",
    keywords: [
        "youtube revenue estimator",
        "youtube earnings estimator",
        "youtube income estimator",
        "youtube revenue calculator",
        "estimate youtube earnings",
        "youtube money estimator",
        "youtube channel revenue",
        "how much does youtube pay",
    ],
    openGraph: {
        title: "YouTube Revenue Estimator – Free Earnings Calculator",
        description: "Enter views and CPM to instantly estimate your YouTube channel revenue.",
        type: "website",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.net/youtube-revenue-estimator",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a YouTube Revenue Estimator?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A YouTube Revenue Estimator is a tool that predicts potential earnings from YouTube channels or videos. It uses metrics such as views, RPM (Revenue Per Mille), and audience demographics to provide an estimate of revenue.",
            },
        },
        {
            "@type": "Question",
            name: "Can I trust the estimates provided by these tools?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "While YouTube Revenue Estimators provide helpful approximations, their accuracy depends on factors such as ad blockers, engagement levels, and viewer demographics. They are reliable for general insights but should not be treated as exact figures.",
            },
        },
        {
            "@type": "Question",
            name: "How does a YouTube Revenue Estimator calculate earnings?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A YouTube Revenue Estimator calculates earnings by multiplying the total views by RPM, then dividing by 1,000. For example, if a video has 10,000 views and an RPM of $5, the estimated revenue would be $50.",
            },
        },
        {
            "@type": "Question",
            name: "How much money can I earn per 1,000 views?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The amount of money you can earn per 1,000 views depends on your RPM, which typically ranges from $1 to $30. The exact value varies by niche, audience location, and engagement levels.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between CPM and RPM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CPM refers to the cost advertisers pay per 1,000 ad impressions, while RPM is the actual revenue earned by creators per 1,000 views. RPM accounts for all revenue sources, including ads, memberships, and YouTube Premium income.",
            },
        },
        {
            "@type": "Question",
            name: "What factors influence my YouTube revenue the most?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Factors that influence YouTube revenue include RPM rates, audience demographics, content niche, video length, and viewer engagement. Higher RPM rates and engaging content generate more revenue.",
            },
        },
    ],
};

export default function YouTubeRevenueEstimatorPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>
            <Header />
            <RevenueEstimatorClient />
            <Footer />
        </div>
    );
}
