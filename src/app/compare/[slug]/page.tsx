import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    TrendingUp,
    Users,
    BarChart3,
    ArrowRight,
    ChevronRight,
    Globe,
    Zap,
    Award,
    Crown
} from "lucide-react";
import { youtubers, getEstimatedRevenue } from "@/data/youtubers";
import { comparisons } from "@/data/comparisons";
import { Schema, SchemaFactory } from "@/components/Schema";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return comparisons.map((c) => ({
        slug: c.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const matchup = comparisons.find((c) => c.slug === slug);
    if (!matchup) return {};

    const a = youtubers.find((y) => y.slug === matchup.a);
    const b = youtubers.find((y) => y.slug === matchup.b);
    if (!a || !b) return {};

    const title = `${a.name} vs ${b.name} YouTube Earnings (2026 Comparison)`;
    const description = `Detailed YouTube revenue comparison: ${a.name} vs ${b.name}. Compare subscribers, monthly views, and AdSense earnings for 2026. Who earns more?`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: ["/upload/blog/youtube-comparison-hero.png"],
        },
    };
}

const MetricRow = ({ label, icon: Icon, valA, valB, winner }: {
    label: string,
    icon: any,
    valA: string | number,
    valB: string | number,
    winner?: 'a' | 'b' | 'draw'
}) => (
    <div className="group border-b border-border/40 last:border-0">
        <div className="grid grid-cols-1 md:grid-cols-3 py-6 px-4 items-center gap-4 transition-colors hover:bg-muted/30">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground">{label}</span>
            </div>

            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <span className={`text-xl font-black ${winner === 'a' ? 'text-primary' : 'text-foreground'}`}>
                    {valA}
                </span>
                {winner === 'a' && <span className="text-[10px] font-black bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">Leader</span>}
            </div>

            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <span className={`text-xl font-black ${winner === 'b' ? 'text-primary' : 'text-foreground'}`}>
                    {valB}
                </span>
                {winner === 'b' && <span className="text-[10px] font-black bg-primary/20 text-primary px-2 py-0.5 rounded-full uppercase tracking-tighter">Leader</span>}
            </div>
        </div>
    </div>
)

export default async function ComparisonPage({ params }: PageProps) {
    const { slug } = await params;
    const matchup = comparisons.find((c) => c.slug === slug);
    if (!matchup) notFound();

    const a = youtubers.find((y) => y.slug === matchup.a);
    const b = youtubers.find((y) => y.slug === matchup.b);
    if (!a || !b) notFound();

    const revA = getEstimatedRevenue(a);
    const revB = getEstimatedRevenue(b);

    const crumbs = [
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: `${a.name} vs ${b.name}`, item: `/compare/${matchup.slug}` }
    ];

    const faq = [
        {
            q: `Who earns more on YouTube, ${a.name} or ${b.name}?`,
            a: `Based on current projections for 2026, ${revA.monthlyHigh > revB.monthlyHigh ? a.name : b.name} has a higher estimated revenue potential due to their ${revA.monthlyHigh > revB.monthlyHigh ? 'higher monthly views and CPM niche' : 'massive scale and engagement'}.`
        },
        {
            q: `What is ${a.name}'s estimated monthly income?`,
            a: `${a.name} earns an estimated ${revA.fmtMonthly} per month from YouTube AdSense alone, not including sponsorships.`
        },
        {
            q: `How do their subscriber counts compare?`,
            a: `${a.name} has ${a.subscribers} subscribers compared to ${b.name}'s ${b.subscribers} subscribers.`
        }
    ];

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `${a.name} vs ${b.name} YouTube Earnings Comparison 2026`,
        description: `Detailed revenue and viewership breakdown for ${a.name} and ${b.name}.`,
        image: "https://youtubemoneycalculator.net/upload/blog/youtube-comparison-hero.png",
        author: { "@type": "Organization", name: "YouTube Money Calculator" },
        publisher: { "@type": "Organization", name: "YouTube Money Calculator" },
        datePublished: "2026-03-09",
        dateModified: "2026-03-09"
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={SchemaFactory.breadcrumb(crumbs)} />
            <Schema data={SchemaFactory.faq(faq)} />
            <Schema data={articleSchema} />

            <Header />

            <main className="relative overflow-hidden pt-12">
                {/* Premium Animated Background */}
                <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />

                <div className="max-w-6xl mx-auto px-4 py-12">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
                            <Users className="h-3 w-3" />
                            YouTube Comparison Battle
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-tight uppercase">
                            {a.name} <span className="text-primary tracking-normal italic">vs</span> {b.name}
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                            {matchup.tagline}. Detailed breakdown of revenue, views, and influence for 2026.
                        </p>
                    </div>

                    {/* Main Comparison Card */}
                    <div className="rounded-[2.5rem] border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden mb-16">
                        <div className="grid grid-cols-2 md:grid-cols-3 bg-muted/20 border-b border-border/40">
                            {/* Creator A */}
                            <div className="p-8 flex flex-col items-center gap-4 text-center border-r border-border/40">
                                <div className="relative">
                                    <div className="h-24 w-24 md:h-32 md:w-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-4xl font-black">
                                        {a.name.charAt(0)}
                                    </div>
                                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center text-xl shadow-lg">
                                        <span className="text-xl">🇺🇸</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black lowercase">{a.name}</h2>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{a.niche}</p>
                                </div>
                            </div>

                            {/* VS Center */}
                            <div className="hidden md:flex flex-col items-center justify-center p-8 relative">
                                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-2xl z-10">
                                    VS
                                </div>
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
                                </div>
                            </div>

                            {/* Creator B */}
                            <div className="p-8 flex flex-col items-center gap-4 text-center">
                                <div className="relative">
                                    <div className="h-24 w-24 md:h-32 md:w-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-4xl font-black">
                                        {b.name.charAt(0)}
                                    </div>
                                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center text-xl shadow-lg">
                                        <span className="text-xl">🌍</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black lowercase">{b.name}</h2>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{b.niche}</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Table */}
                        <div className="p-2 md:p-8">
                            <div className="hidden md:grid grid-cols-3 px-4 mb-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                                <div>Metric</div>
                                <div>{a.name}</div>
                                <div>{b.name}</div>
                            </div>

                            <MetricRow
                                label="Subscribers"
                                icon={Users}
                                valA={a.subscribers}
                                valB={b.subscribers}
                                winner={parseFloat(a.subscribers) > parseFloat(b.subscribers) ? 'a' : 'b'}
                            />
                            <MetricRow
                                label="Monthly Views"
                                icon={TrendingUp}
                                valA={a.monthlyViews}
                                valB={b.monthlyViews}
                                winner={a.monthlyViewsNum > b.monthlyViewsNum ? 'a' : 'b'}
                            />
                            <MetricRow
                                label="Monthly AdSense"
                                icon={Zap}
                                valA={revA.fmtMonthly}
                                valB={revB.fmtMonthly}
                                winner={revA.monthlyHigh > revB.monthlyHigh ? 'a' : 'b'}
                            />
                            <MetricRow
                                label="Yearly AdSense"
                                icon={BarChart3}
                                valA={revA.fmtYearly}
                                valB={revB.fmtYearly}
                                winner={revA.yearlyHigh > revB.yearlyHigh ? 'a' : 'b'}
                            />
                        </div>
                    </div>

                    {/* Analysis Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <div className="p-10 rounded-[2.5rem] bg-card border border-border/50">
                            <div className="flex items-center gap-3 mb-6">
                                <Crown className="h-6 w-6 text-primary" />
                                <h3 className="text-xl font-black uppercase">Revenue Analysis</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                While <strong className="text-foreground">{a.name}</strong> dominates the {a.niche} niche with {a.subscribers} subscribers,
                                <strong className="text-foreground"> {b.name}</strong> holds a strong position in {b.niche}.
                                Their revenue comparison shows a gap of roughly <strong className="text-primary">${Math.abs(revA.monthlyHigh - revB.monthlyHigh).toLocaleString()} per month</strong> in estimated AdSense earnings for 2026.
                            </p>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-card border border-border/50 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="h-6 w-6 text-primary" />
                                <h3 className="text-xl font-black uppercase">Winner Verdict</h3>
                            </div>
                            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20">
                                <p className="font-bold text-lg mb-2">
                                    {revA.monthlyHigh > revB.monthlyHigh ? a.name : b.name} leads in potential!
                                </p>
                                <p className="text-xs text-muted-foreground leading-relaxed italic">
                                    Based on 2026 projections, {revA.monthlyHigh > revB.monthlyHigh ? a.name : b.name} is poised for higher AdSense returns.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div className="border-t border-border/40 pt-10 px-4">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">More Matchups</h3>
                            <Link href="/blog" className="text-xs font-bold text-primary flex items-center gap-1">
                                All Reports <ChevronRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {comparisons.filter(c => c.slug !== matchup.slug).slice(0, 8).map(c => (
                                <Link
                                    key={c.slug}
                                    href={`/compare/${c.slug}`}
                                    className="px-4 py-2 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/50 text-xs font-bold transition-all"
                                >
                                    {c.slug.replace(/-/g, " ")}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
