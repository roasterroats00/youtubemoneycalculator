import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flag } from "@/components/Flag";
import { youtubers, getEstimatedRevenue } from "@/data/youtubers";
import { TrendingUp, Search, DollarSign } from "lucide-react";

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
    return (
        <div className="min-h-screen bg-background text-foreground">
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
                                    <Flag emoji={yt.flag} size={18} /> {yt.name}
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
