import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flag } from "@/components/Flag";
import { Schema, SchemaFactory } from "@/components/Schema";
import { CalendarDays, Clock, TrendingUp, DollarSign, Users, BarChart3, Star, ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Top 20 Highest-Paid YouTubers 2026 – Revenue, Earnings & Net Worth",
    description:
        "Discover the highest-paid YouTubers in 2026. See how much MrBeast, T-Series, Cocomelon, and other top creators earn from ads, sponsorships, and merchandise. Complete revenue breakdown with CPM data.",
    keywords: [
        "highest paid youtubers 2026",
        "top youtuber earnings",
        "youtuber revenue",
        "how much do youtubers make",
        "mrbeast earnings",
        "youtube income",
        "youtuber net worth",
        "youtube ad revenue",
        "top youtube channels by revenue",
        "richest youtubers",
    ],
    openGraph: {
        title: "Top 20 Highest-Paid YouTubers 2026 – Revenue & Earnings Breakdown",
        description:
            "Complete breakdown of the top 20 highest-earning YouTube creators in 2026. See ad revenue, sponsorships, and total income data.",
        type: "article",
        images: [
            {
                url: "/upload/blog/top-youtuber-revenue-2026.png",
                width: 1200,
                height: 630,
                alt: "Top YouTuber Revenue 2026 - Earnings Breakdown",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Top 20 Highest-Paid YouTubers 2026",
        description: "Complete revenue breakdown of the world's top YouTube creators.",
        images: ["/upload/blog/top-youtuber-revenue-2026.png"],
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.net/blog/top-youtuber-revenue",
    },
};

// Structured Data
const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 20 Highest-Paid YouTubers 2026 – Revenue, Earnings & Net Worth",
    description:
        "Discover the highest-paid YouTubers in 2026 with a complete revenue breakdown including ad earnings, sponsorships, and merchandise income.",
    image: "https://youtubemoneycalculator.net/upload/blog/top-youtuber-revenue-2026.png",
    author: {
        "@type": "Organization",
        name: "YouTube Money Calculator",
    },
    publisher: {
        "@type": "Organization",
        name: "YouTube Money Calculator",
        logo: {
            "@type": "ImageObject",
            url: "https://youtubemoneycalculator.net/upload/youtubemoneycalculator.net.png",
        },
    },
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://youtubemoneycalculator.net/blog/top-youtuber-revenue",
    },
};

const topYoutubers = [
    { rank: 1, name: "MrBeast (Jimmy Donaldson)", channel: "@MrBeast", subs: "380M+", monthlyViews: "2.5B", estimatedMonthly: "$5M – $8M", estimatedYearly: "$60M – $96M", niche: "Entertainment / Philanthropy", country: "🇺🇸", cpm: "$6 – $12" },
    { rank: 2, name: "T-Series", channel: "@tsaboreshorts", subs: "280M+", monthlyViews: "3.8B", estimatedMonthly: "$3.5M – $6M", estimatedYearly: "$42M – $72M", niche: "Music / Entertainment", country: "🇮🇳", cpm: "$1.5 – $4" },
    { rank: 3, name: "Cocomelon – Nursery Rhymes", channel: "@cocomelon", subs: "180M+", monthlyViews: "2.8B", estimatedMonthly: "$4M – $7M", estimatedYearly: "$48M – $84M", niche: "Children / Education", country: "🇺🇸", cpm: "$5 – $10" },
    { rank: 4, name: "SET India", channel: "@SETIndia", subs: "175M+", monthlyViews: "2.2B", estimatedMonthly: "$2M – $4M", estimatedYearly: "$24M – $48M", niche: "Entertainment / TV", country: "🇮🇳", cpm: "$1.2 – $3" },
    { rank: 5, name: "PewDiePie (Felix Kjellberg)", channel: "@PewDiePie", subs: "111M+", monthlyViews: "180M", estimatedMonthly: "$500K – $1.5M", estimatedYearly: "$6M – $18M", niche: "Gaming / Commentary", country: "🇸🇪", cpm: "$5 – $12" },
    { rank: 6, name: "Like Nastya", channel: "@LikeNastyaofficial", subs: "120M+", monthlyViews: "1.5B", estimatedMonthly: "$3M – $5.5M", estimatedYearly: "$36M – $66M", niche: "Children / Entertainment", country: "🇷🇺", cpm: "$4 – $8" },
    { rank: 7, name: "Kids Diana Show", channel: "@KidsDianaShow", subs: "125M+", monthlyViews: "1.2B", estimatedMonthly: "$2.5M – $4.5M", estimatedYearly: "$30M – $54M", niche: "Children / Entertainment", country: "🇺🇦", cpm: "$3.5 – $7" },
    { rank: 8, name: "Vlad and Niki", channel: "@VladandNiki", subs: "118M+", monthlyViews: "1.1B", estimatedMonthly: "$2M – $4M", estimatedYearly: "$24M – $48M", niche: "Children / Entertainment", country: "🇺🇸", cpm: "$4 – $8" },
    { rank: 9, name: "Dude Perfect", channel: "@DudePerfect", subs: "60M+", monthlyViews: "350M", estimatedMonthly: "$1.5M – $3M", estimatedYearly: "$18M – $36M", niche: "Sports / Entertainment", country: "🇺🇸", cpm: "$7 – $15" },
    { rank: 10, name: "Ryan's World", channel: "@RyansWorld", subs: "37M+", monthlyViews: "600M", estimatedMonthly: "$1.8M – $3.5M", estimatedYearly: "$21M – $42M", niche: "Children / Toys", country: "🇺🇸", cpm: "$4 – $9" },
    { rank: 11, name: "Markiplier (Mark Fischbach)", channel: "@markiplier", subs: "37M+", monthlyViews: "300M", estimatedMonthly: "$800K – $2M", estimatedYearly: "$9.6M – $24M", niche: "Gaming", country: "🇺🇸", cpm: "$5 – $10" },
    { rank: 12, name: "Logan Paul", channel: "@LoganPaul", subs: "24M+", monthlyViews: "200M", estimatedMonthly: "$600K – $1.5M", estimatedYearly: "$7.2M – $18M", niche: "Entertainment / Sports", country: "🇺🇸", cpm: "$6 – $12" },
    { rank: 13, name: "Jake Paul", channel: "@jakepaul", subs: "21M+", monthlyViews: "150M", estimatedMonthly: "$400K – $1M", estimatedYearly: "$4.8M – $12M", niche: "Entertainment / Sports", country: "🇺🇸", cpm: "$5 – $10" },
    { rank: 14, name: "Rhett & Link (Good Mythical Morning)", channel: "@GoodMythicalMorning", subs: "18.5M+", monthlyViews: "250M", estimatedMonthly: "$700K – $1.8M", estimatedYearly: "$8.4M – $21.6M", niche: "Comedy / Talk Show", country: "🇺🇸", cpm: "$6 – $14" },
    { rank: 15, name: "Preston (PrestonPlayz)", channel: "@Preston", subs: "22M+", monthlyViews: "400M", estimatedMonthly: "$1M – $2.5M", estimatedYearly: "$12M – $30M", niche: "Gaming / Entertainment", country: "🇺🇸", cpm: "$5 – $10" },
    { rank: 16, name: "Unspeakable", channel: "@Unspeakable", subs: "18M+", monthlyViews: "350M", estimatedMonthly: "$900K – $2M", estimatedYearly: "$10.8M – $24M", niche: "Gaming / Challenge", country: "🇺🇸", cpm: "$5 – $9" },
    { rank: 17, name: "Jeffree Star", channel: "@JeffreeStar", subs: "16M+", monthlyViews: "120M", estimatedMonthly: "$400K – $1M", estimatedYearly: "$4.8M – $12M", niche: "Beauty / Lifestyle", country: "🇺🇸", cpm: "$8 – $18" },
    { rank: 18, name: "DanTDM (Daniel Middleton)", channel: "@DanTDM", subs: "28M+", monthlyViews: "200M", estimatedMonthly: "$500K – $1.5M", estimatedYearly: "$6M – $18M", niche: "Gaming", country: "🇬🇧", cpm: "$5 – $10" },
    { rank: 19, name: "Ninja (Tyler Blevins)", channel: "@Ninja", subs: "24M+", monthlyViews: "80M", estimatedMonthly: "$250K – $800K", estimatedYearly: "$3M – $9.6M", niche: "Gaming / Streaming", country: "🇺🇸", cpm: "$6 – $14" },
    { rank: 20, name: "SSSniperWolf (Alia Shelesh)", channel: "@SSSniperWolf", subs: "35M+", monthlyViews: "400M", estimatedMonthly: "$1M – $2.5M", estimatedYearly: "$12M – $30M", niche: "Reaction / Gaming", country: "🇺🇸", cpm: "$5 – $10" },
];

export default function TopYoutuberRevenuePage() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: "Top 20 Highest-Paid YouTubers 2026", item: "/blog/top-youtuber-revenue" },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={articleStructuredData} />
            <Schema data={breadcrumbData} />

            {/* Background ambience */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Header />

            <main>
                {/* Featured Image Hero */}
                <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                    <Image
                        src="/upload/blog/top-youtuber-revenue-2026.png"
                        alt="Top YouTuber Revenue 2026 - Highest Paid YouTube Creators Earnings Breakdown"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="container mx-auto max-w-4xl">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                                    <TrendingUp className="h-3 w-3" />
                                    Revenue Report
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                    <CalendarDays className="h-3 w-3" />
                                    February 28, 2026
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                    <Clock className="h-3 w-3" />
                                    12 min read
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase">
                                Top 20 Highest-Paid <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                    YouTubers 2026
                                </span>
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Article Body */}
                <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* Introduction */}
                    <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            The YouTube creator economy has matured into a <strong className="text-foreground">multi-billion dollar industry</strong> in 2026.
                            From MrBeast&apos;s viral philanthropy to the unstoppable rise of children&apos;s content, the platform&apos;s highest earners
                            are generating revenue that rivals traditional media empires. This comprehensive report breaks down the estimated earnings
                            of the <strong className="text-foreground">top 20 highest-paid YouTubers</strong>, including ad revenue, sponsorships,
                            merchandise, and other income streams.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { icon: DollarSign, label: "Top Earner Monthly", value: "$5M – $8M", sub: "MrBeast" },
                            { icon: Users, label: "Most Subscribers", value: "380M+", sub: "MrBeast" },
                            { icon: BarChart3, label: "Highest CPM", value: "$18", sub: "Beauty Niche" },
                            { icon: Star, label: "Top Niche", value: "Kids", sub: "5 of Top 10" },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-[1.5rem] bg-card border border-border/50 text-center group hover:border-primary/30 transition-all">
                                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                                <p className="text-2xl font-black text-primary">{stat.value}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</p>
                                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* Table of Contents */}
                    <div className="p-8 rounded-[2rem] bg-muted/20 border border-border/50 mb-16">
                        <h2 className="text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                            <ChevronRight className="h-5 w-5 text-primary" />
                            Table of Contents
                        </h2>
                        <nav>
                            <ol className="space-y-3 text-sm font-medium text-muted-foreground list-decimal list-inside">
                                <li><a href="#revenue-breakdown" className="hover:text-primary transition-colors">Revenue Breakdown: How Top YouTubers Earn</a></li>
                                <li><a href="#top-20-list" className="hover:text-primary transition-colors">Top 20 Highest-Paid YouTubers 2026</a></li>
                                <li><a href="#mrbeast-analysis" className="hover:text-primary transition-colors">#1 MrBeast: The King of YouTube Revenue</a></li>
                                <li><a href="#kids-content" className="hover:text-primary transition-colors">Why Kids Content Dominates Revenue</a></li>
                                <li><a href="#cpm-impact" className="hover:text-primary transition-colors">How CPM Impacts YouTuber Earnings</a></li>
                                <li><a href="#beyond-adsense" className="hover:text-primary transition-colors">Revenue Beyond AdSense</a></li>
                                <li><a href="#methodology" className="hover:text-primary transition-colors">Methodology & Data Sources</a></li>
                                <li><a href="#calculate" className="hover:text-primary transition-colors">Calculate Your Own Revenue</a></li>
                            </ol>
                        </nav>
                    </div>

                    {/* Section 1: Revenue Breakdown */}
                    <section id="revenue-breakdown" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <DollarSign className="h-7 w-7 text-primary" />
                            Revenue Breakdown: How Top YouTubers Earn
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                            YouTube revenue is not a single income stream. The highest-paid creators in 2026 leverage multiple monetization
                            channels to maximize their total earnings. Here&apos;s how they stack up:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-[1.5rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                <h3 className="text-lg font-black uppercase mb-3">1. YouTube Ad Revenue (AdSense)</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    The primary income source. Creators earn a share of ad revenue based on CPM (Cost Per Mille).
                                    YouTube keeps 45%, creators receive 55%. For top channels, this alone can generate
                                    <strong className="text-foreground"> $1M–$8M per month</strong>.
                                </p>
                            </div>
                            <div className="p-6 rounded-[1.5rem] bg-muted/20 border border-border/50">
                                <h3 className="text-lg font-black uppercase mb-3">2. Brand Sponsorships</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    Dedicated sponsor integrations can pay <strong className="text-foreground">$500K–$3M per video</strong> for
                                    top creators. MrBeast reportedly charges up to $2.5M for a single brand deal in his main channel content.
                                </p>
                            </div>
                            <div className="p-6 rounded-[1.5rem] bg-muted/20 border border-border/50">
                                <h3 className="text-lg font-black uppercase mb-3">3. Merchandise & Products</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                    From Feastables (MrBeast) to PRIME Energy (Logan Paul), creator-brands generate
                                    <strong className="text-foreground"> $50M–$500M+ in annual revenue</strong>. Merchandise is often
                                    the biggest revenue multiplier.
                                </p>
                            </div>
                            <div className="p-6 rounded-[1.5rem] bg-muted/20 border border-border/50">
                                <h3 className="text-lg font-black uppercase mb-3">4. Other Revenue Streams</h3>
                                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                                    <li className="flex items-start gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <span><strong className="text-foreground">Super Chats & Memberships:</strong> $10K–$100K/month</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <span><strong className="text-foreground">YouTube Premium Revenue:</strong> Based on watch time</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                        <span><strong className="text-foreground">Licensing & Media Deals:</strong> TV shows, movies</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Top 20 Table */}
                    <section id="top-20-list" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <BarChart3 className="h-7 w-7 text-primary" />
                            Top 20 Highest-Paid YouTubers 2026
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            Based on our AI-powered revenue analysis combining publicly available metrics, CPM benchmarks,
                            and industry data, here are the estimated top earners on YouTube in 2026:
                        </p>

                        {/* Desktop Table */}
                        <div className="hidden md:block rounded-[2rem] border border-border/50 overflow-hidden bg-card shadow-xl mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-muted/30">
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">#</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Creator</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subscribers</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly Views</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. Monthly</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Niche</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topYoutubers.map((yt) => (
                                            <tr key={yt.rank} className={`border-t border-border/30 hover:bg-muted/20 transition-colors ${yt.rank <= 3 ? "bg-primary/3" : ""}`}>
                                                <td className="py-4 px-6">
                                                    <span className={`inline-flex items-center justify-center h-8 w-8 rounded-lg font-black text-sm ${yt.rank === 1 ? "bg-yellow-400 text-yellow-900" :
                                                        yt.rank === 2 ? "bg-slate-300 text-slate-700" :
                                                            yt.rank === 3 ? "bg-amber-600 text-amber-100" :
                                                                "bg-muted text-muted-foreground"
                                                        }`}>
                                                        {yt.rank}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div>
                                                        <p className="font-black text-sm"><Flag emoji={yt.country} size={16} /> {yt.name}</p>
                                                        <p className="text-xs text-muted-foreground">{yt.channel}</p>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 font-bold text-sm">{yt.subs}</td>
                                                <td className="py-4 px-6 font-bold text-sm">{yt.monthlyViews}</td>
                                                <td className="py-4 px-6">
                                                    <span className="font-black text-primary">{yt.estimatedMonthly}</span>
                                                </td>
                                                <td className="py-4 px-6 text-xs text-muted-foreground font-medium">{yt.niche}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-4 mb-8">
                            {topYoutubers.slice(0, 10).map((yt) => (
                                <div key={yt.rank} className="p-6 rounded-2xl bg-card border border-border/50">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className={`inline-flex items-center justify-center h-10 w-10 rounded-xl font-black text-sm ${yt.rank === 1 ? "bg-yellow-400 text-yellow-900" :
                                            yt.rank === 2 ? "bg-slate-300 text-slate-700" :
                                                yt.rank === 3 ? "bg-amber-600 text-amber-100" :
                                                    "bg-muted text-muted-foreground"
                                            }`}>
                                            {yt.rank}
                                        </span>
                                        <div>
                                            <p className="font-black"><Flag emoji={yt.country} size={18} /> {yt.name}</p>
                                            <p className="text-xs text-muted-foreground">{yt.subs} subscribers</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly</p>
                                            <p className="font-black text-primary">{yt.estimatedMonthly}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Views/Mo</p>
                                            <p className="font-bold">{yt.monthlyViews}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <p className="text-center text-sm text-muted-foreground font-medium italic">
                                Showing top 10 on mobile. View on desktop for full rankings.
                            </p>
                        </div>

                        <p className="text-xs text-muted-foreground italic">
                            * Estimates based on publicly available data, CPM benchmarks, and AI modeling. Actual earnings may differ based on sponsorships,
                            merchandise, and other undisclosed revenue. Data compiled February 2026.
                        </p>
                    </section>

                    {/* Section 3: MrBeast Deep Dive */}
                    <section id="mrbeast-analysis" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            #1 MrBeast: The King of YouTube Revenue
                        </h2>
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <p className="text-3xl font-black text-primary">380M+</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subscribers</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-primary">2.5B</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly Views</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-primary">$8M</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. Monthly (Ads)</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-primary">$700M+</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Feastables Revenue</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                            <p>
                                <strong className="text-foreground">Jimmy Donaldson</strong>, better known as MrBeast, continues to dominate YouTube
                                in 2026. His main channel alone brings in <strong className="text-foreground">estimated $5M–$8M monthly from AdSense</strong>,
                                making him the undisputed king of YouTube ad revenue.
                            </p>
                            <p>
                                But MrBeast&apos;s real financial empire extends far beyond YouTube. His snack brand
                                <strong className="text-foreground"> Feastables surpassed $700M in annual revenue</strong> in 2026,
                                his burger chain MrBeast Burger operates in thousands of locations, and his production company
                                is valued at over $1.5 billion.
                            </p>

                            <h3 className="text-xl font-black uppercase text-foreground pt-4">MrBeast&apos;s Revenue Streams</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">YouTube AdSense:</strong> $60M–$96M annually across multiple channels</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Brand Sponsorships:</strong> $2M–$3M per sponsored integration</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Feastables:</strong> $700M+ annual brand revenue</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">MrBeast Burger:</strong> Ghost kitchen franchise across 1,700+ locations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Amazon Series:</strong> &quot;Beast Games&quot; reality show deal worth $100M+</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4: Kids Content */}
                    <section id="kids-content" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            Why Kids Content Dominates Revenue
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                            <p>
                                A striking pattern in the 2026 rankings: <strong className="text-foreground">5 out of the top 10 highest-earning channels
                                    are kids&apos; content</strong>. Cocomelon, Like Nastya, Kids Diana Show, Vlad and Niki, and Ryan&apos;s World together
                                generate an estimated <strong className="text-foreground">$159M–$294M in annual YouTube ad revenue alone</strong>.
                            </p>

                            <h3 className="text-xl font-black uppercase text-foreground pt-4">Key Factors Driving Kids Content Revenue</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Repeat viewership:</strong> Children watch the same videos repeatedly, dramatically increasing total view counts and ad impressions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Global appeal:</strong> Content easily transcends language barriers thanks to visual storytelling and music</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Premium advertisers:</strong> Toy companies and family brands pay premium CPMs for family-friendly placement</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Licensing & merchandise:</strong> Characters and IP generate massive ancillary revenue (Cocomelon toys, Ryan&apos;s World at Walmart)</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 5: CPM Impact */}
                    <section id="cpm-impact" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            How CPM Impacts YouTuber Earnings
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                            <p>
                                CPM (Cost Per Mille) is the single most important metric that determines YouTube ad revenue.
                                It represents what advertisers pay per 1,000 ad impressions. In 2026, CPMs vary dramatically by niche:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            {[
                                { niche: "Finance & Business", cpm: "$20 – $50", icon: "💰" },
                                { niche: "Tech & Gadgets", cpm: "$10 – $30", icon: "💻" },
                                { niche: "Beauty & Fashion", cpm: "$8 – $18", icon: "💄" },
                                { niche: "Health & Fitness", cpm: "$10 – $25", icon: "🏋️" },
                                { niche: "Gaming", cpm: "$3 – $10", icon: "🎮" },
                                { niche: "Entertainment", cpm: "$2 – $8", icon: "🎬" },
                                { niche: "Kids Content", cpm: "$3 – $10", icon: "👶" },
                                { niche: "Education", cpm: "$10 – $25", icon: "📚" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm">{item.niche}</p>
                                    </div>
                                    <span className="font-black text-primary text-sm">{item.cpm}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                            <p>
                                <strong className="text-foreground">Important insight:</strong> A finance channel with 500K monthly views
                                and a $30 CPM can potentially earn more than a gaming channel with 10M views and a $5 CPM. This is why
                                <strong className="text-foreground"> niche selection is the most critical factor</strong> in YouTube revenue strategy.
                            </p>
                            <p>
                                For a detailed breakdown of CPM rates by country, see our{" "}
                                <Link href="/cpm-by-country" className="text-primary hover:underline font-bold">
                                    Global CPM Rates by Country guide
                                </Link>.
                            </p>
                        </div>
                    </section>

                    {/* Section 6: Beyond AdSense */}
                    <section id="beyond-adsense" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            Revenue Beyond AdSense
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                            <p>
                                While AdSense is the most visible income source, the wealthiest YouTubers in 2026
                                have diversified well beyond platform ad revenue. Here&apos;s how the industry&apos;s biggest earners
                                have built empires:
                            </p>

                            <h3 className="text-xl font-black uppercase text-foreground pt-4">Creator-Owned Brands</h3>
                            <p>
                                The most financially successful YouTubers in 2026 have launched their own consumer brands:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Feastables (MrBeast):</strong> Chocolate and snacks - $700M+ annual revenue</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">PRIME (Logan Paul + KSI):</strong> Energy drinks - $1.2B+ annual revenue</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Jeffree Star Cosmetics:</strong> Beauty brand - $200M+ annual revenue</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Cloak (Markiplier + Jacksepticeye):</strong> Apparel brand generating $10M+ annually</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-black uppercase text-foreground pt-4">Sponsorship Tiers in 2026</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse my-4">
                                    <thead>
                                        <tr className="border-b border-border/50">
                                            <th className="text-left py-3 px-4 font-black uppercase text-[10px] tracking-widest text-muted-foreground">Creator Tier</th>
                                            <th className="text-left py-3 px-4 font-black uppercase text-[10px] tracking-widest text-muted-foreground">Subscribers</th>
                                            <th className="text-left py-3 px-4 font-black uppercase text-[10px] tracking-widest text-muted-foreground">Rate Per Video</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-muted-foreground font-medium">
                                        <tr className="border-b border-border/30"><td className="py-3 px-4 font-bold text-foreground">Nano</td><td className="py-3 px-4">1K – 10K</td><td className="py-3 px-4 text-primary font-bold">$100 – $500</td></tr>
                                        <tr className="border-b border-border/30"><td className="py-3 px-4 font-bold text-foreground">Micro</td><td className="py-3 px-4">10K – 100K</td><td className="py-3 px-4 text-primary font-bold">$500 – $5,000</td></tr>
                                        <tr className="border-b border-border/30"><td className="py-3 px-4 font-bold text-foreground">Mid-Tier</td><td className="py-3 px-4">100K – 1M</td><td className="py-3 px-4 text-primary font-bold">$5K – $50K</td></tr>
                                        <tr className="border-b border-border/30"><td className="py-3 px-4 font-bold text-foreground">Macro</td><td className="py-3 px-4">1M – 10M</td><td className="py-3 px-4 text-primary font-bold">$50K – $500K</td></tr>
                                        <tr><td className="py-3 px-4 font-bold text-foreground">Mega</td><td className="py-3 px-4">10M+</td><td className="py-3 px-4 text-primary font-bold">$500K – $3M+</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section 7: Methodology */}
                    <section id="methodology" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            Methodology & Data Sources
                        </h2>
                        <div className="p-8 rounded-[2rem] bg-muted/20 border border-border/50 space-y-4 text-sm text-muted-foreground leading-relaxed font-medium">
                            <p>
                                Our revenue estimates are compiled using a multi-source methodology:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">YouTube API Data:</strong> Publicly available subscriber counts, view counts, and upload frequencies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">CPM Benchmarks:</strong> Industry-standard CPM rates by niche and geography from our proprietary dataset</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Monetized View Rate:</strong> We assume 40–60% of total views generate monetized ad impressions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Industry Reports:</strong> Cross-referenced with Forbes, Business Insider, and creator self-disclosures</span>
                                </li>
                            </ul>
                            <p className="italic">
                                Note: These estimates reflect <strong className="text-foreground">YouTube ad revenue only</strong> unless otherwise stated.
                                Brand deals, merchandise, and other income streams are discussed separately as they are not publicly verifiable.
                            </p>
                        </div>
                    </section>

                    {/* Section 8: CTA */}
                    <section id="calculate" className="mb-8 scroll-mt-24">
                        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-primary to-primary/60 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                            <div className="absolute top-0 right-0 opacity-10 p-6">
                                <TrendingUp className="h-40 w-40 rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
                                    Calculate Your Revenue Potential
                                </h2>
                                <p className="text-white/80 mb-8 font-medium max-w-lg mx-auto">
                                    Want to see where your channel stands? Use our AI-powered YouTube Money Calculator to estimate
                                    your earnings based on views, CPM, and niche.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link
                                        href="/"
                                        className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]"
                                    >
                                        <ArrowRight className="h-5 w-5 mr-2" />
                                        Open Calculator
                                    </Link>
                                    <Link
                                        href="/cpm-by-country"
                                        className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white/10 text-white font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
                                    >
                                        View CPM Rates
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Author / Last Updated */}
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/20 border border-border/50 mt-12">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-black text-sm">YouTube Money Calculator Research Team</p>
                            <p className="text-xs text-muted-foreground">Last updated: February 28, 2026 · Data compiled from public sources & AI modeling</p>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
