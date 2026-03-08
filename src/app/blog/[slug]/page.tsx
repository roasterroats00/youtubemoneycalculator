import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flag } from "@/components/Flag";
import { Schema, SchemaFactory } from "@/components/Schema";
import { youtubers, getYoutuberBySlug, getEstimatedRevenue } from "@/data/youtubers";
import { DollarSign, Users, BarChart3, TrendingUp, Globe, CalendarDays, Clock, ArrowRight, ChevronRight, Star } from "lucide-react";

export function generateStaticParams() {
    return youtubers.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const yt = getYoutuberBySlug(slug);
    if (!yt) return { title: "Channel Not Found" };
    const rev = getEstimatedRevenue(yt);
    const niche = yt.niche.split("/")[0].trim();

    // 10 unique title templates — rotated by rank to ensure variety across all 100 pages
    const titleTemplates = [
        `${yt.name} YouTube Earnings Revealed: ${rev.fmtMonthly}/Month in 2026`,
        `How Much Does ${yt.name} Really Make? ${yt.subscribers} Subs, ${rev.fmtMonthly}/Mo`,
        `${yt.name}'s YouTube Income Breakdown — ${rev.fmtYearly} Per Year (2026)`,
        `Inside ${yt.name}'s Revenue: From ${yt.monthlyViews} Views to ${rev.fmtMonthly}`,
        `${yt.name} Net Worth from YouTube: ${rev.fmtYearly} Annual Revenue Estimate`,
        `What ${yt.name} Earns on YouTube — Full 2026 Revenue Analysis`,
        `${yt.name} YouTube Money: ${rev.fmtMonthly}/Month with ${yt.monthlyViews} Views`,
        `${yt.name}'s Real YouTube Revenue (2026) — CPM, Views & Earnings Data`,
        `Exactly How Much ${yt.name} Makes from YouTube Ads in 2026`,
        `${yt.name} Earnings Report: #${yt.rank} Most Profitable ${niche} Channel`,
    ];

    // 10 unique description templates — different angles for each
    const descTemplates = [
        `Discover how ${yt.name} (${yt.channel}) earns an estimated ${rev.fmtMonthly} per month from YouTube ads alone. Full CPM breakdown, ${yt.subscribers} subscriber analysis, and revenue projections for 2026.`,
        `${yt.name} ranks #${yt.rank} globally with ${yt.monthlyViews} monthly views. We break down the exact ad revenue, CPM rates (${yt.cpmRange}), and what makes this ${niche} channel so profitable in 2026.`,
        `With ${yt.subscribers} subscribers and growing, ${yt.name} pulls in ${rev.fmtMonthly} monthly from YouTube. See the full ${yt.name} revenue analysis including niche CPM data and yearly earnings forecast.`,
        `How does ${yt.name}'s ${yt.country}-based channel turn ${yt.monthlyViews} monthly views into ${rev.fmtMonthly}? Our 2026 revenue report covers CPM, ad rates, and income streams in detail.`,
        `Our data-driven analysis reveals ${yt.name}'s estimated YouTube income: ${rev.fmtYearly} per year from ads. Compare with other ${niche} creators and understand the CPM factors behind the numbers.`,
        `${yt.name}'s YouTube channel generates roughly ${rev.fmtMonthly} monthly. This in-depth 2026 report covers subscriber growth, view trends, CPM analysis (${yt.cpmRange}), and revenue methodology.`,
        `Want to know ${yt.name}'s real YouTube earnings? With ${yt.monthlyViews} views/month and a ${yt.cpmRange} CPM, the channel earns an estimated ${rev.fmtYearly} annually. Full breakdown inside.`,
        `${yt.name} is one of the highest-earning ${niche} channels on YouTube, making ${rev.fmtMonthly}/month. See how ${yt.subscribers} subscribers and ${yt.country} audience demographics drive this revenue.`,
        `From ${yt.monthlyViews} monthly views to an estimated ${rev.fmtYearly}/year — this is the complete ${yt.name} YouTube revenue report for 2026, with CPM analysis and comparison data.`,
        `Curious about ${yt.name}'s YouTube paycheck? Ranked #${yt.rank} globally, this ${niche} powerhouse earns ${rev.fmtMonthly} per month. Get the full story: CPM, views, and yearly revenue estimates.`,
    ];

    // Rotate template based on rank
    const titleIdx = (yt.rank - 1) % titleTemplates.length;
    const descIdx = (yt.rank - 1) % descTemplates.length;
    // OG title uses a different rotation for extra variety
    const ogTitleIdx = (yt.rank + 4) % titleTemplates.length;

    return {
        title: titleTemplates[titleIdx],
        description: descTemplates[descIdx],
        keywords: [
            `${yt.name} youtube earnings`,
            `${yt.name} net worth`,
            `how much does ${yt.name} make`,
            `${yt.name} youtube income`,
            `${yt.name} revenue 2026`,
            `${yt.name} monthly earnings`,
            `${yt.name} youtube money`,
            `${niche} youtube earnings`,
        ],
        openGraph: {
            title: titleTemplates[ogTitleIdx],
            description: descTemplates[descIdx],
            type: "article",
            images: [{ url: "/upload/blog/top-youtuber-revenue-2026.png", width: 1200, height: 630 }],
        },
        alternates: {
            canonical: `https://youtubemoneycalculator.net/blog/${slug}`,
        },
    };
}


function fmtCurrency(n: number): string {
    if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
    if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
    return `$${n}`;
}

export default async function YouTuberPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const yt = getYoutuberBySlug(slug);
    if (!yt) notFound();
    const rev = getEstimatedRevenue(yt);

    // Find related channels (same niche, exclude self)
    const related = youtubers
        .filter((y) => y.slug !== yt.slug && y.niche.split("/")[0].trim() === yt.niche.split("/")[0].trim())
        .slice(0, 4);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `How Much Does ${yt.name} Make on YouTube? (2026 Revenue)`,
        description: `${yt.name} earns an estimated ${rev.fmtMonthly} per month on YouTube.`,
        image: "https://youtubemoneycalculator.net/upload/blog/top-youtuber-revenue-2026.png",
        author: { "@type": "Organization", name: "YouTube Money Calculator" },
        publisher: { "@type": "Organization", name: "YouTube Money Calculator" },
        datePublished: "2026-02-28",
        dateModified: "2026-02-28",
    };

    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: yt.name, item: `/blog/${yt.slug}` },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={articleSchema} />
            <Schema data={breadcrumbData} />

            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Header />

            <main>
                {/* Hero */}
                <section className="relative w-full overflow-hidden border-b bg-gradient-to-b from-muted/30 to-background">
                    <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                                <TrendingUp className="h-3 w-3" /> Revenue Analysis
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                <CalendarDays className="h-3 w-3" /> February 2026
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                #{yt.rank} Global Rank
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6">
                            How Much Does <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                {yt.name}
                            </span>{" "}
                            Make on YouTube?
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium max-w-2xl">
                            <span className="text-xl">{yt.flag}</span> {yt.name} ({yt.channel}) has <strong className="text-foreground">{yt.subscribers} subscribers</strong> and generates
                            an estimated <strong className="text-primary">{rev.fmtMonthly} per month</strong> from YouTube ad revenue alone.
                        </p>
                    </div>
                </section>

                <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 text-center">
                            <Users className="h-5 w-5 text-primary mx-auto mb-2" />
                            <p className="text-2xl font-black text-primary">{yt.subscribers}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subscribers</p>
                        </div>
                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 text-center">
                            <BarChart3 className="h-5 w-5 text-primary mx-auto mb-2" />
                            <p className="text-2xl font-black text-primary">{yt.monthlyViews}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly Views</p>
                        </div>
                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 text-center">
                            <DollarSign className="h-5 w-5 text-primary mx-auto mb-2" />
                            <p className="text-2xl font-black text-primary">{rev.fmtMonthly}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly Revenue</p>
                        </div>
                        <div className="p-6 rounded-[1.5rem] bg-card border border-border/50 text-center">
                            <Globe className="h-5 w-5 text-primary mx-auto mb-2" />
                            <p className="text-2xl font-black text-primary">{yt.cpmRange}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. CPM</p>
                        </div>
                    </div>

                    {/* About */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
                            About {yt.name}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed font-medium text-lg mb-6">{yt.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { label: "Country", value: yt.country },
                                { label: "Niche", value: yt.niche },
                                { label: "YouTube Handle", value: yt.channel },
                                { label: "Global Rank", value: `#${yt.rank}` },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/20 border border-border/50">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground w-28 shrink-0">{item.label}</p>
                                    <p className="font-bold">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Highlights */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Key Highlights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {yt.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50">
                                    <Star className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <p className="text-sm font-medium text-muted-foreground">{h}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Revenue Breakdown */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
                            {yt.name} Revenue Breakdown
                        </h2>
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-primary">{fmtCurrency(rev.monthlyLow)}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly (Low)</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-primary">{fmtCurrency(rev.monthlyHigh)}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly (High)</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-primary">{fmtCurrency(rev.yearlyLow)}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Yearly (Low)</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-primary">{fmtCurrency(rev.yearlyHigh)}</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Yearly (High)</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                            <h3 className="text-xl font-black uppercase text-foreground">How Is This Calculated?</h3>
                            <p>
                                Revenue estimates for <strong className="text-foreground">{yt.name}</strong> are based on the channel&apos;s estimated
                                <strong className="text-foreground"> {yt.monthlyViews} monthly views</strong>, a CPM range of
                                <strong className="text-foreground"> {yt.cpmRange}</strong> typical for the{" "}
                                <strong className="text-foreground">{yt.niche}</strong> niche, and an assumed 40–60% monetized view rate.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">CPM Range:</strong> {yt.cpmRange} (based on {yt.niche} niche and {yt.country} audience)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Monetized Views:</strong> 40–60% of total views generate ad impressions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">YouTube&apos;s Cut:</strong> YouTube retains 45% of ad revenue; creators receive 55%</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                    <span><strong className="text-foreground">Additional Income:</strong> Sponsorships, merch, and memberships are not included in these estimates</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* CPM Analysis */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-6">
                            CPM Analysis: {yt.niche}
                        </h2>
                        <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                            <p>
                                The <strong className="text-foreground">{yt.niche}</strong> niche typically commands a CPM of{" "}
                                <strong className="text-foreground">{yt.cpmRange}</strong>. This means advertisers pay between{" "}
                                {yt.cpmRange} for every 1,000 ad impressions on {yt.name}&apos;s videos.
                            </p>
                            <p>
                                Since {yt.name}&apos;s audience is primarily based in <strong className="text-foreground">{yt.country}</strong>,
                                the CPM reflects the advertising market in that region. Channels with US-based audiences tend to command
                                higher CPMs ($6–$15), while channels in South Asia typically see lower CPMs ($1–$4).
                            </p>
                            <p>
                                For a complete breakdown of CPM rates by country, see our{" "}
                                <Link href="/cpm-by-country" className="text-primary hover:underline font-bold">
                                    Global CPM Rates guide
                                </Link>.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mb-16">
                        <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/60 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                            <div className="absolute top-0 right-0 opacity-10 p-6">
                                <TrendingUp className="h-32 w-32 rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">
                                    Calculate Your Own YouTube Revenue
                                </h2>
                                <p className="text-white/80 mb-6 font-medium max-w-md mx-auto text-sm">
                                    Use our AI-powered calculator to estimate your channel&apos;s earnings based on views, CPM, and niche.
                                </p>
                                <Link
                                    href="/"
                                    className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]"
                                >
                                    <ArrowRight className="h-5 w-5 mr-2" /> Open Calculator
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Related Channels */}
                    {related.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
                                Related {yt.niche.split("/")[0].trim()} Channels
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {related.map((r) => {
                                    const rRev = getEstimatedRevenue(r);
                                    return (
                                        <Link key={r.slug} href={`/blog/${r.slug}`} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="font-black group-hover:text-primary transition-colors"><span className="text-xl">{r.flag}</span> {r.name}</p>
                                                <span className="text-xs font-black text-primary">#{r.rank}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mb-2">{r.subscribers} subscribers · {r.niche}</p>
                                            <p className="text-sm font-bold text-primary">{rRev.fmtMonthly}/mo</p>
                                        </Link>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {/* Back to Rankings */}
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/20 border border-border/50 mt-8">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="font-black text-sm">YouTube Money Calculator Research Team</p>
                            <p className="text-xs text-muted-foreground">Last updated: February 28, 2026</p>
                        </div>
                        <Link href="/blog/top-youtuber-revenue" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                            Full Top 100 <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
