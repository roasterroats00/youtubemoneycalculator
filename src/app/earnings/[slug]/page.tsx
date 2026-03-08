import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import { subscriberTiers } from "@/data/subscriber-tiers";
import {
    TrendingUp,
    Users,
    DollarSign,
    Target,
    ArrowRight,
    ChevronRight,
    CheckCircle2,
    Lightbulb,
    Award,
    Zap,
    BarChart3,
    Globe
} from "lucide-react";

export function generateStaticParams() {
    return subscriberTiers.map((tier) => ({
        slug: tier.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const tier = subscriberTiers.find((t) => t.slug === slug);

    if (!tier) return { title: "Tier Not Found" };

    const adsAvg = (tier.estMonthlyAds.low + tier.estMonthlyAds.high) / 2;
    const sponsorsAvg = (tier.estMonthlySponsors.low + tier.estMonthlySponsors.high) / 2;
    const totalAvg = adsAvg + sponsorsAvg;

    return {
        title: tier.title,
        description: tier.description,
        keywords: [
            `youtube earnings ${tier.label}`,
            `how much does a youtuber with ${tier.label} make`,
            `youtube money ${tier.subscribers} subscribers`,
            `youtube revenue for beginners`,
            `youtube monetization 2026`,
        ],
        openGraph: {
            title: tier.title,
            description: tier.description,
            type: "article",
            images: [
                {
                    url: "/upload/blog/youtube-subscriber-earnings-hero.png",
                    width: 1200,
                    height: 630,
                    alt: tier.title,
                },
            ],
        },
        alternates: {
            canonical: `https://youtubemoneycalculator.net/earnings/${slug}`,
        },
    };
}

const fmt = (n: number) => {
    if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
    return `$${n}`;
};

export default async function SubscriberTierPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const tier = subscriberTiers.find((t) => t.slug === slug);

    if (!tier) notFound();

    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: tier.label, item: `/earnings/${tier.slug}` },
    ]);

    const faqSchema = SchemaFactory.faq(tier.faq);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: tier.title,
        description: tier.description,
        image: "https://youtubemoneycalculator.net/upload/blog/youtube-subscriber-earnings-hero.png",
        author: { "@type": "Organization", name: "YouTube Money Calculator" },
        publisher: { "@type": "Organization", name: "YouTube Money Calculator" },
        datePublished: "2026-03-08",
        dateModified: "2026-03-08",
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={breadcrumbData} />
            <Schema data={faqSchema} />
            <Schema data={articleSchema} />

            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 border-b overflow-hidden bg-gradient-to-b from-muted/50 to-background">
                    <div className="container mx-auto max-w-6xl px-4 relative z-10">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                    <Award className="h-3 w-3" /> {tier.milestoneName} Milestone
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
                                {tier.label} on <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                    YouTube Earnings 2026
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8 leading-relaxed">
                                {tier.milestoneDescription} Discover the realistic revenue potential, ad rates, and growth strategies for channels at this size.
                            </p>
                        </div>

                        {/* Quick Earnings Card */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                            <div className="p-8 rounded-[2rem] bg-card border border-border/50 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <BarChart3 className="h-16 w-16" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Est. Ad Revenue</p>
                                <p className="text-4xl font-black text-primary mb-2">
                                    {fmt(tier.estMonthlyAds.low)} – {fmt(tier.estMonthlyAds.high)}
                                </p>
                                <p className="text-xs text-muted-foreground font-bold">Monthly Average (USD)</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-card border border-border/50 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <Users className="h-16 w-16" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Est. Sponsorships</p>
                                <p className="text-4xl font-black text-primary mb-2">
                                    {fmt(tier.estMonthlySponsors.low)} – {fmt(tier.estMonthlySponsors.high)}
                                </p>
                                <p className="text-xs text-muted-foreground font-bold">Monthly Average (USD)</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary to-primary/80 border border-primary/20 shadow-xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                                    <TrendingUp className="h-16 w-16" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-4">Growth Potential</p>
                                <p className="text-4xl font-black mb-2">High</p>
                                <p className="text-xs text-white/70 font-bold">Target next milestone: {subscriberTiers[subscriberTiers.indexOf(tier) + 1]?.label || 'Elite'}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 container mx-auto max-w-6xl px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            {/* Analysis */}
                            <div className="prose prose-invert max-w-none mb-16">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Expert Revenue Analysis</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                                    Reaching <strong className="text-foreground">{tier.label}</strong> is a major feat. In 2026, the YouTube landscape is more competitive but also more lucrative for those who leverage multiple revenue streams. AdSense is rarely the primary income source at this stage—smart creators focus on high-impact sponsorships and direct-to-consumer sales.
                                </p>
                                <div className="p-8 rounded-[2.5rem] bg-muted/30 border border-border/50 mb-10">
                                    <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                                        <Lightbulb className="h-6 w-6 text-primary" /> Roadmap to Success
                                    </h3>
                                    <ul className="space-y-4">
                                        {tier.advice.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 group">
                                                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                </div>
                                                <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="mb-16">
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {tier.faq.map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                                            <h3 className="font-black text-lg mb-2">{item.q}</h3>
                                            <p className="text-muted-foreground font-medium">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="p-8 rounded-[2rem] bg-primary text-white sticky top-24 overflow-hidden shadow-2xl shadow-primary/20">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Zap className="h-32 w-32" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-black uppercase tracking-tight mb-4">Calculate Your Specific Earnings</h3>
                                    <p className="text-white/80 text-sm font-medium mb-8">
                                        Our AI algorithm estimates your revenue based on your niche, country, and view count for 2026.
                                    </p>
                                    <Link
                                        href="/"
                                        className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-white text-primary font-black uppercase text-xs tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-95"
                                    >
                                        Go to Calculator <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-card border border-border/50">
                                <h3 className="text-lg font-black uppercase tracking-tight mb-6">Other Milestones</h3>
                                <div className="space-y-3">
                                    {subscriberTiers.slice(0, 8).map((t) => (
                                        <Link
                                            key={t.slug}
                                            href={`/earnings/${t.slug}`}
                                            className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-all group border border-transparent hover:border-border/50"
                                        >
                                            <span className="font-bold text-sm text-muted-foreground group-hover:text-foreground">{t.label}</span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <section className="bg-muted/30 py-20 border-t">
                    <div className="container mx-auto max-w-6xl px-4 text-center">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">More YouTube Earning Insights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link
                                href="/cpm-by-country"
                                className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 transition-all text-left group"
                            >
                                <Globe className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-black text-lg mb-2">Global CPM Rates</h3>
                                <p className="text-sm text-muted-foreground font-medium">How much YouTube pays in 100+ different countries around the world.</p>
                            </Link>
                            <Link
                                href="/blog/how-much-do-youtubers-make"
                                className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 transition-all text-left group"
                            >
                                <DollarSign className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-black text-lg mb-2">Income Reports</h3>
                                <p className="text-sm text-muted-foreground font-medium">Detailed revenue breakdowns for the world&apos;s biggest creators.</p>
                            </Link>
                            <Link
                                href="/blog/youtube-shorts-pay"
                                className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 transition-all text-left group"
                            >
                                <Zap className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-black text-lg mb-2">Shorts Revenue</h3>
                                <p className="text-sm text-muted-foreground font-medium">Everything you need to know about monetizing vertical video in 2026.</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
