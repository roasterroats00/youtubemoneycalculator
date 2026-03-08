import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import { Flag } from "@/components/Flag";
import { youtubers, getEstimatedRevenue } from "@/data/youtubers";
import { countries } from "@/data/countries";
import { niches } from "@/data/niches";
import { subscriberTiers } from "@/data/subscriber-tiers";
import { TrendingUp, Search, DollarSign, Globe, ChevronRight, ArrowRight, Target, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "YouTube Earnings Blog – Revenue Reports & Creator Income Analysis",
    description:
        "Explore detailed revenue reports for the top 100 YouTube channels. See how much your favorite creators earn from ads, sponsorships, and more.",
    openGraph: {
        title: "YouTube Earnings Blog – Top Creator Revenue Reports",
        description: "Detailed revenue analysis of the world's top 100 YouTube channels.",
        type: "website",
    },
};

export default function BlogIndex() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={breadcrumbData} />
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Header />

            <main className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                        <TrendingUp className="h-3 w-3" />
                        REVENUE INTELLIGENCE REPORTS
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
                        YouTube Earnings <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                            Blog & Reports
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        In-depth revenue analysis of the world&apos;s top YouTube channels. Discover how much your favorite creators earn.
                    </p>
                </div>

                {/* Featured Article */}
                <Link
                    href="/blog/top-youtuber-revenue"
                    className="block p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-16 group hover:border-primary/40 transition-all"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest">
                            Featured Report
                        </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">
                        Top 20 Highest-Paid YouTubers 2026 – Complete Revenue Breakdown
                    </h2>
                    <p className="text-muted-foreground font-medium max-w-2xl">
                        From MrBeast&apos;s $8M/month empire to the dominance of kids content, see the full revenue analysis of YouTube&apos;s top earners.
                    </p>
                </Link>

                {/* SEO Article Guides */}
                <div className="mb-16">
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
                        YouTube Earnings Guides
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                title: "How Much YouTube Pays for 1 Million Views in 2026",
                                desc: "Real CPM data, niche breakdowns, and country comparisons for 1M views.",
                                href: "/blog/how-much-youtube-pay-1-million-views",
                                tag: "Revenue Analysis",
                            },
                            {
                                title: "How Much Do YouTubers Actually Make? (2026 Data)",
                                desc: "Income tiers from nano to mega creators with real earnings data.",
                                href: "/blog/how-much-do-youtubers-make",
                                tag: "Income Report",
                            },
                            {
                                title: "YouTube Shorts Pay: RPM Data Inside",
                                desc: "Shorts monetization model, RPM breakdown, and earning benchmarks.",
                                href: "/blog/youtube-shorts-pay",
                                tag: "Shorts Guide",
                            },
                            {
                                title: "YouTube Partner Program 2026: Requirements & Guide",
                                desc: "New eligibility tiers, application steps, and tips to get monetized.",
                                href: "/blog/youtube-partner-program-requirements",
                                tag: "Monetization",
                            },
                        ].map((article, i) => (
                            <Link
                                key={i}
                                href={article.href}
                                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all group"
                            >
                                <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-3">
                                    {article.tag}
                                </span>
                                <h3 className="font-black text-sm mb-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-xs text-muted-foreground">{article.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Global CPM Guides Section — [pSEO Theme 1] */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Globe className="h-6 w-6 text-primary" />
                        <h2 className="text-xl font-black uppercase tracking-widest">Global YouTube CPM Guides</h2>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-muted/30 border border-border/50">
                        <p className="text-sm text-muted-foreground font-medium mb-8 max-w-2xl leading-relaxed">
                            Explore localized YouTube earnings data for <strong className="text-foreground">114 countries</strong>.
                            Our 2026 data-backed guides cover average CPM, RPM estimates, and top-paying niches for creators worldwide.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {countries.slice(0, 8).map((country) => (
                                <Link
                                    key={country.slug}
                                    href={`/cpm/${country.slug}`}
                                    className="px-5 py-3 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all flex items-center gap-3 group"
                                >
                                    <span className="text-xl">{country.flag}</span>
                                    <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{country.name}</span>
                                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </Link>
                            ))}
                            <Link
                                href="/cpm-by-country"
                                className="px-5 py-3 rounded-2xl bg-primary text-white font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg"
                            >
                                View All 114 Countries <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Earnings by Niche Section — [pSEO Theme 2] */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Target className="h-6 w-6 text-primary" />
                        <h2 className="text-xl font-black uppercase tracking-widest">YouTube Earnings by Niche</h2>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
                        <p className="text-sm text-muted-foreground font-medium mb-8 max-w-2xl leading-relaxed">
                            How much do YouTubers in specific niches make? Discover CPM and RPM benchmarks for <strong className="text-foreground">35+ content categories</strong>.
                            Optimized for 2026 revenue projections.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {niches.slice(0, 15).map((niche) => (
                                <Link
                                    key={niche.slug}
                                    href={`/niche/${niche.slug}`}
                                    className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all flex flex-col items-center gap-3 group text-center"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <TrendingUp className="h-5 w-5" />
                                    </div>
                                    <span className="font-bold text-xs text-foreground group-hover:text-primary transition-colors">{niche.name}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-border/30 flex justify-center">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                                Scroll to see all niches or select a category above
                            </p>
                        </div>
                    </div>
                </section>

                {/* Earnings by Subscriber Count Section — [pSEO Theme 3] */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Zap className="h-6 w-6 text-primary" />
                        <h2 className="text-xl font-black uppercase tracking-widest">Earnings by Subscriber Milestone</h2>
                    </div>
                    <div className="p-8 rounded-[2.5rem] bg-muted/30 border border-border/50">
                        <p className="text-sm text-muted-foreground font-medium mb-8 max-w-2xl leading-relaxed">
                            How much does YouTube pay for different subscriber levels? Explore our <strong className="text-foreground">milestone-specific guides</strong> for 2026, from your first 100 to 100 million subscribers.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {subscriberTiers.map((tier) => (
                                <Link
                                    key={tier.slug}
                                    href={`/earnings/${tier.slug}`}
                                    className="px-4 py-2 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-bold flex items-center gap-2 group"
                                >
                                    <span className="text-primary group-hover:scale-110 transition-transform"><TrendingUp className="h-3 w-3" /></span>
                                    {tier.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Channel Grid */}
                <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
                    All 100 Channel Revenue Reports
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {youtubers.map((yt) => {
                        const rev = getEstimatedRevenue(yt);
                        return (
                            <Link
                                key={yt.slug}
                                href={`/blog/${yt.slug}`}
                                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all group"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg font-black text-xs bg-muted text-muted-foreground">
                                        {yt.rank}
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                                        {yt.niche.split("/")[0].trim()}
                                    </span>
                                </div>
                                <h3 className="font-black text-lg mb-1 group-hover:text-primary transition-colors">
                                    <span className="text-xl">{yt.flag}</span> {yt.name}
                                </h3>
                                <p className="text-xs text-muted-foreground mb-3">{yt.subscribers} subscribers · {yt.monthlyViews} views/mo</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-black text-primary text-sm">{rev.fmtMonthly}/mo</span>
                                    <span className="text-xs font-bold text-muted-foreground">CPM {yt.cpmRange}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
