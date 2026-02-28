import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import PayPerViewClient from "./PayPerViewClient";

export const metadata: Metadata = {
    title: "YouTube Pay Per View – How Much Does YouTube Pay? (2026)",
    description:
        "Discover how much YouTube pays per view! Our guide breaks down RPM, CPM, and key earning factors. Learn the real pay per view rates.",
    keywords: [
        "youtube pay per view",
        "how much does youtube pay per view",
        "youtube earnings per view",
        "youtube pay rate",
        "youtube revenue per view",
        "youtube cpm per view",
        "youtube rpm per view",
        "youtube money per view",
    ],
    openGraph: {
        title: "YouTube Pay Per View – How Much Does YouTube Pay?",
        description:
            "Discover how much YouTube pays per view. Learn RPM, CPM, and key factors that affect your earnings.",
        type: "website",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.net/youtube-pay-per-view",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does YouTube pay for every view?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No, YouTube does not pay for every view. Only views with monetized ads or from YouTube Premium subscribers generate revenue.",
            },
        },
        {
            "@type": "Question",
            name: "How much does YouTube pay per view on average?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "YouTube pays between $0.003 and $0.01 per view on average, depending on factors like RPM, niche, and audience location.",
            },
        },
        {
            "@type": "Question",
            name: "What is the highest pay per view on YouTube?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Channels in high-paying niches, such as finance or tech, can earn up to $0.01 per view or higher with premium audiences and optimal monetization.",
            },
        },
        {
            "@type": "Question",
            name: "How can I increase my pay per view on YouTube?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can increase your pay per view by targeting high-RPM niches, optimizing viewer retention, enabling mid-roll ads, and focusing on audiences from high-paying regions.",
            },
        },
        {
            "@type": "Question",
            name: "Does content type affect pay per view?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, content type significantly impacts pay per view. High-demand topics with active advertisers, like health or business, usually pay more per view.",
            },
        },
        {
            "@type": "Question",
            name: "Why do earnings vary across regions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Earnings vary because advertisers in high-income regions are willing to pay more for ads, increasing CPM and RPM rates in those areas.",
            },
        },
    ],
};

export default function YouTubePayPerViewPage() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "YouTube Pay Per View", item: "/youtube-pay-per-view" },
    ]);

    const appSchema = SchemaFactory.softwareApplication(
        "YouTube Pay Per View Rate Guide",
        "Discover how much YouTube pays per view and calculate your earnings.",
        "/youtube-pay-per-view"
    );

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={faqSchema} />
            <Schema data={breadcrumbData} />
            <Schema data={appSchema} />
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>
            <Header />
            <PayPerViewClient />
            <Footer />
        </div>
    );
}
