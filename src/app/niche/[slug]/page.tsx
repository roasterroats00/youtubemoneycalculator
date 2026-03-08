import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import { niches, getNicheBySlug } from "@/data/niches";
import {
    TrendingUp, DollarSign, Zap, Users, BarChart3, Star, Info, HelpCircle,
    ArrowRight, ChevronRight, Target, Activity, Rocket
} from "lucide-react";
import * as LucideIcons from "lucide-react";

/* ─── Static Params ─── */
export async function generateStaticParams() {
    return niches.map((n) => ({ slug: n.slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const niche = getNicheBySlug(slug);
    if (!niche) return { title: "Niche Not Found" };

    const title = `${niche.name} YouTube Earnings 2026: CPM, RPM & Revenue Guide`;
    const description = `Discover how much ${niche.name} YouTubers make in 2026. See average CPM rates, RPM data, top creators, and income benchmarks for the ${niche.name} niche.`;

    return {
        title,
        description,
        keywords: [
            `${niche.name} youtube earnings`,
            `${niche.name} youtube cpm`,
            `how much do ${niche.name} youtubers make`,
            `${niche.name} youtube revenue`,
            `highest paying youtube niches 2026`,
            `${niche.name} youtube rpm`,
        ],
        openGraph: {
            title,
            description,
            type: "article",
            images: [{ url: "/upload/blog/youtube-niche-earnings-hero.png", width: 1200, height: 630, alt: `${niche.name} YouTube Earnings` }],
            url: `https://youtubemoneycalculator.net/niche/${niche.slug}`,
        },
        alternates: { canonical: `https://youtubemoneycalculator.net/niche/${niche.slug}` },
    };
}

/* ─── Helper for Dynamic Icons ─── */
const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const IconComponent = (LucideIcons as any)[name];
    if (!IconComponent) return <TrendingUp className={className} />;
    return <IconComponent className={className} />;
};

/* ─── Page Component ─── */
export default async function NicheEarningsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const niche = getNicheBySlug(slug);
    if (!niche) notFound();

    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Niches", item: "/blog" },
        { name: niche.name, item: `/niche/${niche.slug}` },
    ]);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${niche.name} YouTube Earnings 2026: How Much Do They Make?`,
        "description": `A detailed guide on YouTube CPM and RPM for the ${niche.name} niche in 2026. Learn about revenue potential and top earners.`,
        "image": "https://youtubemoneycalculator.net/upload/blog/youtube-niche-earnings-hero.png",
        "author": { "@type": "Organization", "name": "YouTube Money Calculator" },
        "publisher": { "@type": "Organization", "name": "YouTube Money Calculator" },
        "datePublished": "2026-03-08",
        "dateModified": "2026-03-08"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": niche.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={breadcrumbData} />
            <Schema data={articleSchema} />
            <Schema data={faqSchema} />

            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
                    <Image src="/upload/blog/youtube-niche-earnings-hero.png" alt={`${niche.name} Earnings 2026`} fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="container mx-auto max-w-5xl">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                                    <Target className="h-3 w-3" /> Niche Revenue Guide
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/30 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                                    <Activity className="h-3 w-3" /> 2026 Updated
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                                <span className="flex items-center gap-4 mb-2">
                                    <DynamicIcon name={niche.icon} className="h-8 w-8 md:h-12 md:w-12 text-primary" />
                                    {niche.name}
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                    YouTube Earnings
                                </span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex flex-col justify-center">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Estimated Median CPM</p>
                            <div className="text-4xl font-black text-primary">${niche.cpmMedian.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">Industry Benchmark</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 flex flex-col justify-center">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">CPM Range</p>
                            <div className="text-2xl font-black">${niche.cpmMin.toFixed(2)} – ${niche.cpmMax.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">Depends on Audience Tier</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 flex flex-col justify-center">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Projected RPM</p>
                            <div className="text-2xl font-black text-emerald-600">${niche.rpmEstimate.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">After YouTube's 45% cut</p>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Summary Section */}
                            <section>
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <BarChart3 className="h-6 w-6 text-primary" /> Niche Overview
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    The <strong className="text-foreground">{niche.name}</strong> niche on YouTube remains one of the most dynamic sectors for 2026.
                                    With an average CPM of <strong className="text-foreground">${niche.cpmMedian.toFixed(2)}</strong>, creators in this space benefit from a focused advertiser base.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    {niche.description}
                                </p>
                            </section>

                            {/* Revenue Drivers */}
                            <section>
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Zap className="h-6 w-6 text-primary" /> Key Revenue Growth Factors
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {niche.revenueFactors.map((factor, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm">{i + 1}</div>
                                            <span className="font-bold text-foreground group-hover:text-primary transition-colors text-sm">{factor}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Top Creators */}
                            <section>
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Star className="h-6 w-6 text-primary" /> Benchmark Creators
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Success in the {niche.name} niche is demonstrated by these industry-leading channels.
                                    They have mastered the balance between high-value content and strong monetization strategies.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {niche.topCreators.map((creator) => (
                                        <span key={creator} className="px-5 py-2.5 rounded-2xl bg-muted/50 border border-border/50 text-sm font-bold text-foreground flex items-center gap-2">
                                            <Users className="h-4 w-4 text-primary" /> {creator}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* FAQ Section */}
                            <section id="faq" className="pt-12 border-t border-border/30">
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                                    <HelpCircle className="h-6 w-6 text-primary" /> Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {niche.faq.map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                            <h3 className="font-black text-sm text-foreground mb-3">{item.q}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="space-y-6">
                            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/60 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                                <div className="relative z-10">
                                    <Rocket className="h-10 w-10 mb-6 opacity-80" />
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">Scale Your <br /> {niche.name} Channel</h3>
                                    <p className="text-white/80 text-sm mb-8 font-medium">
                                        Discover your exact revenue potential. Plug in your views and see your estimated monthly income.
                                    </p>
                                    <Link href="/" className="inline-flex h-12 items-center justify-center px-6 rounded-xl bg-white text-primary font-black uppercase text-xs tracking-widest hover:bg-white/90 transition-all shadow-lg active:scale-[0.98]">
                                        Calculate Revenue <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>
                                </div>
                                <div className="absolute bottom-[-10%] right-[-10%] opacity-10">
                                    <DynamicIcon name={niche.icon} className="h-48 w-48" />
                                </div>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-muted/20 border border-border/50">
                                <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Quick Stats</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground text-xs uppercase tracking-wider">Avg. CPM</span>
                                        <span className="text-sm font-black text-primary">${niche.cpmMedian.toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground text-xs uppercase tracking-wider">RPM Potential</span>
                                        <span className="text-sm font-black text-emerald-600">${niche.rpmEstimate.toFixed(2)}</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                                        <span className="text-sm font-medium text-muted-foreground text-xs uppercase tracking-wider">Monetization Rank</span>
                                        <span className="text-sm font-black">
                                            {niche.cpmMedian > 15 ? "🔥 Platinum" : niche.cpmMedian > 8 ? "💎 High" : "✅ Standard"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
