import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flag } from "@/components/Flag";
import { CalendarDays, Clock, TrendingUp, DollarSign, Users, BarChart3, Star, ArrowRight, ChevronRight, Music, Globe, Mic2 } from "lucide-react";
import { artists } from "./data";

export const metadata: Metadata = {
    title: "Top 100 Music Artists YouTube Earnings 2026 – Revenue & Income Report",
    description:
        "Complete revenue breakdown of the 100 highest-earning music artists on YouTube in 2026. See estimated ad earnings, monthly views, and CPM data for T-Series, BLACKPINK, Ed Sheeran, Taylor Swift, and 96 more global artists.",
    keywords: [
        "top music artists youtube earnings",
        "youtube music revenue 2026",
        "highest paid musicians youtube",
        "artist youtube income",
        "music channel youtube earnings",
        "how much do artists earn youtube",
        "youtube ad revenue musicians",
        "kpop youtube earnings",
        "latin music youtube revenue",
        "top 100 youtube music channels",
    ],
    openGraph: {
        title: "Top 100 Music Artists YouTube Earnings 2026",
        description:
            "Complete revenue breakdown of the world's highest-earning music artists on YouTube. Ad revenue, CPM data, and income estimates.",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top 100 Music Artists YouTube Earnings 2026",
        description: "How much do the world's biggest artists earn from YouTube?",
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.net/blog/top-artist-youtube-earnings",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 100 Music Artists YouTube Earnings 2026 – Revenue & Income Report",
    description: "Complete revenue breakdown of the 100 highest-earning music artists on YouTube in 2026.",
    author: { "@type": "Organization", name: "YouTube Money Calculator" },
    publisher: {
        "@type": "Organization",
        name: "YouTube Money Calculator",
        logo: { "@type": "ImageObject", url: "https://youtubemoneycalculator.net/upload/youtubemoneycalculator.net.png" },
    },
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://youtubemoneycalculator.net/blog/top-artist-youtube-earnings" },
};

// Genre aggregation for analysis section
const genreStats = (() => {
    const map: Record<string, { count: number; examples: string[] }> = {};
    artists.forEach((a) => {
        const g = a.genre.split("/")[0].trim();
        if (!map[g]) map[g] = { count: 0, examples: [] };
        map[g].count++;
        if (map[g].examples.length < 3) map[g].examples.push(a.name);
    });
    return Object.entries(map)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 8);
})();

const countryStats = (() => {
    const map: Record<string, number> = {};
    artists.forEach((a) => { map[a.country] = (map[a.country] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 10);
})();

export default function TopArtistYouTubeEarningsPage() {
    const top10 = artists.slice(0, 10);
    const top50 = artists.slice(0, 50);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>
            <Header />

            <main>
                {/* Hero */}
                <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-4 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                                <Music className="h-3 w-3" /> Music Revenue Report
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                <CalendarDays className="h-3 w-3" /> February 28, 2026
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                <Clock className="h-3 w-3" /> 18 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase mb-6">
                            Top 100 Music Artists<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                YouTube Earnings 2026
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                            A comprehensive revenue analysis of the world&apos;s highest-earning music artists on YouTube &mdash; from Bollywood powerhouses to K-Pop icons, Latin hitmakers, and Western pop superstars.
                        </p>
                    </div>
                </section>

                <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* Introduction */}
                    <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            The music industry on YouTube is a <strong className="text-foreground">multi-billion dollar ecosystem</strong>. From T-Series&apos;s dominance in Bollywood to BLACKPINK&apos;s global K-Pop revolution, music artists collectively generate some of the highest view counts on the platform. This report breaks down the estimated YouTube ad revenue of the <strong className="text-foreground">top 100 music artists worldwide</strong>, analyzing how genre, geography, and audience demographics impact their earnings.
                        </p>
                        <p className="text-muted-foreground leading-relaxed font-medium">
                            Unlike our <Link href="/blog/top-youtuber-revenue" className="text-primary hover:underline font-bold">Top 20 YouTuber earnings report</Link>, this analysis focuses exclusively on <strong className="text-foreground">music artists and record labels</strong> &mdash; revealing how ad revenue scales differently across genres and regions.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { icon: DollarSign, label: "Top Earner Monthly", value: "$3.5M – $6M", sub: "T-Series" },
                            { icon: Users, label: "Most Subscribers", value: "280M+", sub: "T-Series" },
                            { icon: Globe, label: "Countries Represented", value: "20+", sub: "Global Diversity" },
                            { icon: Star, label: "Dominant Genre", value: "Pop", sub: "35 of Top 100" },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-[1.5rem] bg-card border border-border/50 text-center hover:border-primary/30 transition-all">
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
                            <ChevronRight className="h-5 w-5 text-primary" /> Table of Contents
                        </h2>
                        <nav>
                            <ol className="space-y-3 text-sm font-medium text-muted-foreground list-decimal list-inside">
                                <li><a href="#top-10" className="hover:text-primary transition-colors">Top 10 Highest-Earning Music Artists on YouTube</a></li>
                                <li><a href="#full-rankings" className="hover:text-primary transition-colors">Full Rankings: 100 Artists Breakdown</a></li>
                                <li><a href="#genre-analysis" className="hover:text-primary transition-colors">Revenue by Genre: Which Music Genres Earn the Most?</a></li>
                                <li><a href="#geography" className="hover:text-primary transition-colors">Geography of YouTube Music Revenue</a></li>
                                <li><a href="#cpm-music" className="hover:text-primary transition-colors">How CPM Varies Across Music Genres</a></li>
                                <li><a href="#views-vs-earnings" className="hover:text-primary transition-colors">Why Views Don&apos;t Always Equal Earnings</a></li>
                                <li><a href="#methodology" className="hover:text-primary transition-colors">Methodology &amp; Data Sources</a></li>
                                <li><a href="#calculate" className="hover:text-primary transition-colors">Calculate Your Own Music Channel Revenue</a></li>
                            </ol>
                        </nav>
                    </div>

                    {/* Section 1: Top 10 Deep Dive */}
                    <section id="top-10" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <Star className="h-7 w-7 text-primary" />
                            Top 10 Highest-Earning Music Artists on YouTube
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            The top 10 music artists on YouTube collectively generate an estimated <strong className="text-foreground">$143M – $340M in annual YouTube ad revenue</strong>. Here&apos;s the breakdown of each artist, including what makes their channel uniquely profitable.
                        </p>

                        <div className="space-y-6 mb-8">
                            {top10.map((a) => (
                                <div key={a.rank} className={`p-6 rounded-[1.5rem] border transition-all ${a.rank <= 3 ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20" : "bg-card border-border/50 hover:border-primary/20"}`}>
                                    <div className="flex items-start gap-4">
                                        <span className={`inline-flex items-center justify-center h-10 w-10 rounded-xl font-black text-sm shrink-0 ${a.rank === 1 ? "bg-yellow-400 text-yellow-900" : a.rank === 2 ? "bg-slate-300 text-slate-700" : a.rank === 3 ? "bg-amber-600 text-amber-100" : "bg-muted text-muted-foreground"}`}>
                                            {a.rank}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <h3 className="font-black text-lg"><Flag emoji={a.flag} size={18} /> {a.name}</h3>
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-muted/50 text-muted-foreground font-bold">{a.genre}</span>
                                            </div>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                                                <div>
                                                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Subscribers</p>
                                                    <p className="font-bold text-sm">{a.subs}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Monthly Views</p>
                                                    <p className="font-bold text-sm">{a.monthlyViews}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Est. Monthly</p>
                                                    <p className="font-black text-primary text-sm">{a.estMonthly}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">CPM Range</p>
                                                    <p className="font-bold text-sm">{a.cpm}</p>
                                                </div>
                                            </div>
                                            {a.highlight && (
                                                <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                                                    {a.highlight}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 2: Full Rankings Table */}
                    <section id="full-rankings" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <BarChart3 className="h-7 w-7 text-primary" />
                            Full Rankings: 100 Artists Breakdown
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            Based on our revenue analysis combining publicly available YouTube metrics, niche-specific CPM benchmarks, and regional ad demand data, here are the estimated YouTube ad earnings for the top 100 music artists worldwide.
                        </p>

                        {/* Desktop Table */}
                        <div className="hidden md:block rounded-[2rem] border border-border/50 overflow-hidden bg-card shadow-xl mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-muted/30">
                                            <th className="text-left py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">#</th>
                                            <th className="text-left py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Artist</th>
                                            <th className="text-left py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subs</th>
                                            <th className="text-left py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly Views</th>
                                            <th className="text-left py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. Monthly</th>
                                            <th className="text-left py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. Yearly</th>
                                            <th className="text-left py-4 px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Genre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {artists.map((a) => (
                                            <tr key={a.rank} className={`border-t border-border/30 hover:bg-muted/20 transition-colors ${a.rank <= 3 ? "bg-primary/[0.03]" : ""}`}>
                                                <td className="py-3 px-4">
                                                    <span className={`inline-flex items-center justify-center h-7 w-7 rounded-lg font-black text-xs ${a.rank === 1 ? "bg-yellow-400 text-yellow-900" : a.rank === 2 ? "bg-slate-300 text-slate-700" : a.rank === 3 ? "bg-amber-600 text-amber-100" : "bg-muted/50 text-muted-foreground"}`}>{a.rank}</span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <p className="font-black text-sm"><Flag emoji={a.flag} size={14} /> {a.name}</p>
                                                    <p className="text-xs text-muted-foreground">{a.channel}</p>
                                                </td>
                                                <td className="py-3 px-4 font-bold text-xs">{a.subs}</td>
                                                <td className="py-3 px-4 font-bold text-xs">{a.monthlyViews}</td>
                                                <td className="py-3 px-4 font-black text-primary text-xs">{a.estMonthly}</td>
                                                <td className="py-3 px-4 font-bold text-xs">{a.estYearly}</td>
                                                <td className="py-3 px-4 text-xs text-muted-foreground">{a.genre}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-3 mb-8">
                            {top50.map((a) => (
                                <div key={a.rank} className="p-4 rounded-2xl bg-card border border-border/50">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`inline-flex items-center justify-center h-8 w-8 rounded-lg font-black text-xs shrink-0 ${a.rank === 1 ? "bg-yellow-400 text-yellow-900" : a.rank === 2 ? "bg-slate-300 text-slate-700" : a.rank === 3 ? "bg-amber-600 text-amber-100" : "bg-muted/50 text-muted-foreground"}`}>{a.rank}</span>
                                        <div>
                                            <p className="font-black text-sm"><Flag emoji={a.flag} size={16} /> {a.name}</p>
                                            <p className="text-[10px] text-muted-foreground">{a.genre} · {a.subs} subs</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div><span className="text-muted-foreground">Monthly:</span> <span className="font-black text-primary">{a.estMonthly}</span></div>
                                        <div><span className="text-muted-foreground">Views:</span> <span className="font-bold">{a.monthlyViews}</span></div>
                                    </div>
                                </div>
                            ))}
                            <p className="text-center text-sm text-muted-foreground font-medium italic">Showing top 50 on mobile. View on desktop for full 100 rankings.</p>
                        </div>

                        <p className="text-xs text-muted-foreground italic">
                            * Estimates based on publicly available data, CPM benchmarks, and revenue modeling. Actual earnings may differ. Data compiled February 2026.
                        </p>
                    </section>

                    {/* Section 3: Genre Analysis */}
                    <section id="genre-analysis" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <Mic2 className="h-7 w-7 text-primary" />
                            Revenue by Genre: Which Music Genres Earn the Most?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            Genre plays a decisive role in YouTube ad revenue. While <strong className="text-foreground">Latin and Bollywood artists</strong> dominate in views, <strong className="text-foreground">Western pop and EDM artists</strong> often earn more per view due to higher CPMs from advertisers targeting premium markets.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {genreStats.map(([genre, data]) => (
                                <div key={genre} className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-black text-sm">{genre}</h3>
                                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{data.count} artists</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        e.g. {data.examples.join(", ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm text-muted-foreground font-medium">
                                <strong className="text-foreground">Key Insight:</strong> Reggaeton and Latin artists like Bad Bunny and Daddy Yankee generate massive view counts (often 200M–450M monthly), but their CPMs ($2–$5) are significantly lower than Western pop artists ($5–$12). This means an artist like Adele with 230M monthly views can earn <em>comparable</em> ad revenue to a Latin artist with 450M views.
                            </p>
                        </div>
                    </section>

                    {/* Section 4: Geography */}
                    <section id="geography" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <Globe className="h-7 w-7 text-primary" />
                            Geography of YouTube Music Revenue
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            YouTube music revenue is inherently global, but earning potential varies dramatically by where an artist&apos;s audience is located. Here&apos;s how the top 100 music artists are distributed geographically:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                            {countryStats.map(([country, count]) => (
                                <div key={country} className="p-4 rounded-2xl bg-card border border-border/50 text-center">
                                    <p className="text-2xl font-black text-primary">{count}</p>
                                    <p className="text-xs text-muted-foreground font-bold">{country}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium">
                            <p>
                                <strong className="text-foreground">The USA dominates</strong> with the most artists in the top 100, but the <strong className="text-foreground">Latin American and Caribbean bloc</strong> (Puerto Rico, Colombia, Mexico) collectively represents a massive share of YouTube&apos;s music views. <strong className="text-foreground">South Korea&apos;s K-Pop industry</strong> punches above its weight with fewer artists but exceptionally high engagement and global fanbases.
                            </p>
                            <p>
                                For a detailed breakdown of how CPM rates vary by country, see our <Link href="/cpm-by-country" className="text-primary hover:underline font-bold">CPM by Country</Link> guide.
                            </p>
                        </div>
                    </section>

                    {/* Section 5: CPM in Music */}
                    <section id="cpm-music" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            How CPM Varies Across Music Genres
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { genre: "Western Pop (USA/UK/AU)", cpm: "$5 – $12", icon: "🎤", note: "Premium advertisers, high purchasing-power audiences" },
                                { genre: "K-Pop", cpm: "$4 – $10", icon: "🇰🇷", note: "Strong global fanbase, brand-friendly content" },
                                { genre: "EDM / Electronic", cpm: "$4 – $11", icon: "🎧", note: "Festival and lifestyle brand advertising" },
                                { genre: "Hip-Hop / Rap", cpm: "$4 – $10", icon: "🎤", note: "High engagement but variable brand safety" },
                                { genre: "Latin / Reggaeton", cpm: "$2 – $7", icon: "🌴", note: "Massive views, lower regional CPM rates" },
                                { genre: "Bollywood / Indian", cpm: "$0.8 – $3", icon: "🇮🇳", note: "Extremely high volume, low per-view rates" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50">
                                    <span className="text-2xl">{item.icon}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <p className="font-bold text-sm">{item.genre}</p>
                                            <span className="font-black text-primary text-sm">{item.cpm}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">{item.note}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed font-medium">
                            Use our <Link href="/youtube-revenue-calculator" className="text-primary hover:underline font-bold">YouTube Revenue Calculator</Link> to estimate earnings for any views &amp; CPM combination, or explore <Link href="/youtube-pay-per-view" className="text-primary hover:underline font-bold">how much YouTube pays per view</Link>.
                        </p>
                    </section>

                    {/* Section 6: Views vs Earnings */}
                    <section id="views-vs-earnings" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            Why Views Don&apos;t Always Equal Earnings
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium mb-8">
                            <p>
                                One of the most common misconceptions about YouTube music revenue is that <strong className="text-foreground">more views = more money</strong>. The reality is far more nuanced:
                            </p>
                        </div>
                        <div className="space-y-4 mb-8">
                            {[
                                { title: "Audience Geography Matters", desc: "A view from the USA is worth 5–10x more than a view from India or Southeast Asia. T-Series has 3.8B monthly views but earns less per view than Ed Sheeran with 580M views." },
                                { title: "Monetization Rate", desc: "Not all views are monetized. Music videos using copyrighted samples may have ad restrictions. Youtube Shorts views monetize at lower rates than long-form content." },
                                { title: "Ad Format Mix", desc: "Pre-roll, mid-roll, and display ads pay differently. Longer music videos and lyric videos with high watch time earn more from mid-roll placements." },
                                { title: "Content ID Revenue", desc: "Artists earn additional revenue from Content ID claims when their music is used in other creators' videos — a significant but hard-to-estimate income stream." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/50">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{i + 1}</div>
                                    <div>
                                        <h3 className="font-black text-sm text-foreground">{item.title}</h3>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 7: Methodology */}
                    <section id="methodology" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Methodology &amp; Data Sources</h2>
                        <div className="p-8 rounded-[2rem] bg-muted/20 border border-border/50 space-y-4 text-sm text-muted-foreground leading-relaxed font-medium">
                            <p>Our revenue estimates are compiled using a multi-source methodology:</p>
                            <ul className="space-y-3">
                                {[
                                    ["YouTube API Data:", "Publicly available subscriber counts, view data, and upload frequencies for each artist's official channel."],
                                    ["Genre-Specific CPM Benchmarks:", "Using industry-standard CPM rates adjusted for genre, audience demographics, and regional ad demand."],
                                    ["Monetized View Rate:", "We assume 40–60% of total views generate monetized ad impressions, accounting for ad-blocker usage and non-monetizable content."],
                                    ["Industry Cross-Reference:", "Estimates are cross-referenced with Forbes, Billboard, and Music Business Worldwide data where available."],
                                ].map(([label, desc], i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                        <span><strong className="text-foreground">{label}</strong> {desc}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="italic">
                                Note: These estimates reflect <strong className="text-foreground">YouTube ad revenue only</strong>. Streaming royalties (Spotify, Apple Music), touring income, merchandise, and brand deals are NOT included.
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
                                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Calculate Your Music Channel Revenue</h2>
                                <p className="text-white/80 mb-8 font-medium max-w-lg mx-auto">
                                    Whether you&apos;re a music artist, label, or VEVO channel, use our calculator to estimate your YouTube earnings based on views, CPM, and audience data.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]">
                                        <ArrowRight className="h-5 w-5 mr-2" /> Open Calculator
                                    </Link>
                                    <Link href="/cpm-by-country" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white/10 text-white font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20">
                                        View CPM Rates
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Author */}
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/20 border border-border/50 mt-12">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Music className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-black text-sm">YouTube Money Calculator Research Team</p>
                            <p className="text-xs text-muted-foreground">Last updated: February 28, 2026 · Data compiled from public sources &amp; revenue modeling</p>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
