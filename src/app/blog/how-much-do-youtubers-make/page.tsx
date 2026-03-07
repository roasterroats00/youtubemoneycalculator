import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import {
    CalendarDays, Clock, TrendingUp, DollarSign,
    BarChart3, ArrowRight, ChevronRight, Users, Zap, Video, Globe, HelpCircle
} from "lucide-react";

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
    title: "How Much Do YouTubers ACTUALLY Make? (2026 Income Data Revealed)",
    description:
        "Real 2026 data on how much YouTubers make. From small channels ($200/mo) to mega creators ($8M/mo). Breakdown by subscriber count, niche, and revenue stream. Free calculator included.",
    keywords: [
        "how much do youtubers make",
        "youtuber salary",
        "youtube income 2026",
        "average youtuber income",
        "how much money youtubers make",
        "youtube creator earnings",
        "youtuber pay",
        "youtube channel income",
        "how much does a youtuber make",
    ],
    openGraph: {
        title: "How Much Do YouTubers ACTUALLY Make? (2026 Income Data)",
        description:
            "Complete income breakdown for YouTubers in 2026. See real earnings data by subscriber count, niche, and revenue stream.",
        type: "article",
        images: [
            {
                url: "/upload/blog/how-much-do-youtubers-make.png",
                width: 1200, height: 630,
                alt: "How Much Do YouTubers Make in 2026 – Income Data Breakdown",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "How Much Do YouTubers Make? (2026 Data)",
        description: "Real income data from nano to mega creators.",
        images: ["/upload/blog/how-much-do-youtubers-make.png"],
    },
    alternates: {
        canonical: "https://youtubemoneycalculator.net/blog/how-much-do-youtubers-make",
    },
};

/* ─── Structured Data ─── */
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Do YouTubers ACTUALLY Make? (2026 Income Data Revealed)",
    description: "Comprehensive 2026 income data for YouTubers, from small channels to mega creators, broken down by subscriber tier, niche, and revenue stream.",
    image: "https://youtubemoneycalculator.net/upload/blog/how-much-do-youtubers-make.png",
    author: { "@type": "Organization", name: "YouTube Money Calculator" },
    publisher: {
        "@type": "Organization", name: "YouTube Money Calculator",
        logo: { "@type": "ImageObject", url: "https://youtubemoneycalculator.net/upload/youtubemoneycalculator.net.png" },
    },
    datePublished: "2026-03-07",
    dateModified: "2026-03-07",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://youtubemoneycalculator.net/blog/how-much-do-youtubers-make" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question", name: "How much does the average YouTuber make?",
            acceptedAnswer: { "@type": "Answer", text: "The average full-time YouTuber with 100K–500K subscribers makes $2,000–$15,000 per month from ad revenue alone. Including sponsorships, merchandise, and affiliates, total income can be $5,000–$30,000 monthly. However, most YouTubers (95%+) earn less than $500/month." },
        },
        {
            "@type": "Question", name: "How much do YouTubers make per 1,000 views?",
            acceptedAnswer: { "@type": "Answer", text: "YouTubers earn between $1 and $25 per 1,000 views (RPM), with the average being $3–$5 RPM. Finance channels can earn $15–$25 RPM, while gaming and entertainment channels typically earn $2–$5 RPM." },
        },
        {
            "@type": "Question", name: "How many subscribers do you need to make money on YouTube?",
            acceptedAnswer: { "@type": "Answer", text: "You need at least 500 subscribers and 3,000 watch hours (or 3 million Shorts views) to join the YouTube Partner Program and start earning ad revenue. However, meaningful income ($1,000+/month) typically requires 50,000+ subscribers." },
        },
        {
            "@type": "Question", name: "Do YouTubers get paid monthly?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. YouTube pays creators monthly through AdSense, typically between the 21st and 26th of each month, for the previous month's earnings. The minimum payment threshold is $100." },
        },
        {
            "@type": "Question", name: "Can you make a living from YouTube?",
            acceptedAnswer: { "@type": "Answer", text: "Yes, but it requires consistent effort. Most full-time YouTubers have 100K+ subscribers and diversify income across ads, sponsorships, merchandise, and memberships. Channels in high-CPM niches like finance or tech can go full-time earlier, sometimes with as few as 30,000–50,000 subscribers." },
        },
    ],
};

/* ─── Income Tier Data ─── */
const incomeTiers = [
    { tier: "Nano Creator", subs: "1K – 10K", monthly: "$20 – $200", yearly: "$240 – $2,400", adRevenue: "Minimal", sponsorship: "$100 – $500/video", color: "bg-muted/50" },
    { tier: "Micro Creator", subs: "10K – 50K", monthly: "$200 – $2,000", yearly: "$2.4K – $24K", adRevenue: "Growing", sponsorship: "$500 – $3,000/video", color: "bg-muted/50" },
    { tier: "Mid-Tier Creator", subs: "50K – 500K", monthly: "$2K – $15K", yearly: "$24K – $180K", adRevenue: "Primary income", sponsorship: "$3K – $20K/video", color: "bg-primary/5" },
    { tier: "Macro Creator", subs: "500K – 5M", monthly: "$15K – $100K", yearly: "$180K – $1.2M", adRevenue: "Strong", sponsorship: "$20K – $100K/video", color: "bg-primary/5" },
    { tier: "Mega Creator", subs: "5M – 50M", monthly: "$100K – $1M", yearly: "$1.2M – $12M", adRevenue: "Massive", sponsorship: "$100K – $500K/video", color: "bg-primary/10" },
    { tier: "Ultra Creator", subs: "50M+", monthly: "$1M – $8M+", yearly: "$12M – $96M+", adRevenue: "Record-breaking", sponsorship: "$500K – $3M/video", color: "bg-primary/10" },
];

const revenueStreams = [
    { stream: "YouTube AdSense", percentage: "30–50%", desc: "Ad revenue based on CPM/RPM. Paid monthly by Google.", icon: "📺" },
    { stream: "Brand Sponsorships", percentage: "25–40%", desc: "Dedicated integrations, often the highest-paying single source.", icon: "🤝" },
    { stream: "Merchandise & Products", percentage: "10–20%", desc: "T-shirts, courses, apps, and creator-owned brands.", icon: "🛍️" },
    { stream: "Affiliate Marketing", percentage: "5–15%", desc: "Commission from product links in descriptions.", icon: "🔗" },
    { stream: "Memberships & Super Chats", percentage: "3–10%", desc: "Monthly subscriber perks and live stream donations.", icon: "⭐" },
    { stream: "YouTube Premium", percentage: "2–5%", desc: "Share of Premium subscription fees based on watch time.", icon: "💎" },
];

export default function HowMuchDoYoutubersMakePage() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: "How Much Do YouTubers Make", item: "/blog/how-much-do-youtubers-make" },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={articleSchema} />
            <Schema data={faqSchema} />
            <Schema data={breadcrumbData} />

            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Header />

            <main>
                {/* Hero */}
                <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                    <Image
                        src="/upload/blog/how-much-do-youtubers-make.png"
                        alt="How Much Do YouTubers Make in 2026 – Complete Income Breakdown by Subscriber Tier"
                        fill priority className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="container mx-auto max-w-4xl">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                                    <TrendingUp className="h-3 w-3" /> Income Report
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                    <CalendarDays className="h-3 w-3" /> March 7, 2026
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
                                    <Clock className="h-3 w-3" /> 12 min read
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase">
                                How Much Do <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                    YouTubers Make?
                                </span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* Quick Answer */}
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="h-6 w-6 text-primary" />
                            <h2 className="text-lg font-black uppercase tracking-tight">Quick Answer</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            YouTuber income ranges from <strong className="text-foreground">$20/month for small creators</strong> to{" "}
                            <strong className="text-foreground">$8M+/month for mega creators</strong> like MrBeast. The average
                            full-time YouTuber with 100K–500K subscribers earns{" "}
                            <strong className="text-foreground">$2,000–$15,000/month from ads</strong>, with total income
                            (including sponsorships) reaching $5,000–$30,000 monthly. However,{" "}
                            <strong className="text-foreground">95% of YouTubers earn less than $500/month</strong>.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            &quot;How much do YouTubers make?&quot; — it&apos;s the question everyone asks but few get a straight
                            answer to. The truth is, YouTube income is{" "}
                            <strong className="text-foreground">wildly variable</strong>, depending on your subscriber count,
                            content niche, audience location, and how well you diversify revenue. In this data-driven report,
                            we break down real income figures across every creator tier, from hobbyist channels to
                            multi-million-dollar empires.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { icon: DollarSign, label: "Top Monthly", value: "$8M+", sub: "MrBeast" },
                            { icon: Users, label: "Full-Time Viable", value: "100K+", sub: "Subscribers" },
                            { icon: BarChart3, label: "Avg RPM", value: "$3–$5", sub: "Per 1K Views" },
                            { icon: Globe, label: "Revenue Streams", value: "6+", sub: "Income Sources" },
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
                            <ChevronRight className="h-5 w-5 text-primary" /> Table of Contents
                        </h2>
                        <nav>
                            <ol className="space-y-3 text-sm font-medium text-muted-foreground list-decimal list-inside">
                                <li><a href="#income-tiers" className="hover:text-primary transition-colors">YouTuber Income by Subscriber Count</a></li>
                                <li><a href="#revenue-streams" className="hover:text-primary transition-colors">6 Ways YouTubers Make Money</a></li>
                                <li><a href="#earnings-by-niche" className="hover:text-primary transition-colors">Which YouTube Niches Pay the Most?</a></li>
                                <li><a href="#reality-check" className="hover:text-primary transition-colors">The Reality: What Most YouTubers Actually Earn</a></li>
                                <li><a href="#go-fulltime" className="hover:text-primary transition-colors">When Can You Go Full-Time on YouTube?</a></li>
                                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                                <li><a href="#calculate" className="hover:text-primary transition-colors">Calculate Your Potential Earnings</a></li>
                            </ol>
                        </nav>
                    </div>

                    {/* Section 1: Income Tiers */}
                    <section id="income-tiers" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <BarChart3 className="h-7 w-7 text-primary" />
                            YouTuber Income by Subscriber Count
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            The most reliable predictor of YouTube income is a combination of{" "}
                            <strong className="text-foreground">subscriber count</strong> and{" "}
                            <strong className="text-foreground">monthly views</strong>. Here&apos;s the 2026 income breakdown
                            across every creator tier:
                        </p>

                        {/* Desktop Table */}
                        <div className="hidden md:block rounded-[2rem] border border-border/50 overflow-hidden bg-card shadow-xl mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-muted/30">
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Creator Tier</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Subscribers</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Monthly (Ads)</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Yearly (Ads)</th>
                                            <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Sponsorship Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {incomeTiers.map((t, i) => (
                                            <tr key={i} className={`border-t border-border/30 hover:bg-muted/20 transition-colors ${t.color}`}>
                                                <td className="py-4 px-6 font-black text-sm">{t.tier}</td>
                                                <td className="py-4 px-6 font-bold text-sm">{t.subs}</td>
                                                <td className="py-4 px-6 font-black text-primary text-sm">{t.monthly}</td>
                                                <td className="py-4 px-6 font-bold text-sm">{t.yearly}</td>
                                                <td className="py-4 px-6 text-sm text-muted-foreground">{t.sponsorship}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-3 mb-8">
                            {incomeTiers.map((t, i) => (
                                <div key={i} className={`p-5 rounded-2xl border border-border/50 ${t.color}`}>
                                    <h3 className="font-black text-sm mb-2">{t.tier}</h3>
                                    <p className="text-xs text-muted-foreground mb-3">{t.subs} subscribers</p>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Monthly</p>
                                            <p className="font-black text-primary">{t.monthly}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Yearly</p>
                                            <p className="font-bold">{t.yearly}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-muted-foreground italic">
                            * Ad revenue estimates only. Total income including sponsorships, merchandise, and other streams can be 2–5x higher.
                        </p>
                    </section>

                    {/* Section 2: Revenue Streams */}
                    <section id="revenue-streams" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <DollarSign className="h-7 w-7 text-primary" />
                            6 Ways YouTubers Make Money
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            Successful YouTubers in 2026 don&apos;t rely on a single income source. Here&apos;s
                            how the <strong className="text-foreground">typical revenue mix</strong> breaks down for
                            a full-time creator:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {revenueStreams.map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{item.icon}</span>
                                            <h3 className="font-black text-sm">{item.stream}</h3>
                                        </div>
                                        <span className="font-black text-primary text-sm">{item.percentage}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm text-muted-foreground font-medium">
                                <strong className="text-foreground">Pro Tip:</strong> The wealthiest YouTubers earn only
                                30–50% from ads. The remaining 50–70% comes from sponsorships, products, and other
                                diversified income. Use our{" "}
                                <Link href="/" className="text-primary hover:underline font-bold">YouTube Money Calculator</Link>{" "}
                                to estimate your ad-only revenue, then multiply by 2–3x for a total income estimate.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Earnings by Niche */}
                    <section id="earnings-by-niche" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <Video className="h-7 w-7 text-primary" />
                            Which YouTube Niches Pay the Most?
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            Your content niche determines your CPM, which directly impacts how much you earn per view.
                            Here&apos;s how estimated <strong className="text-foreground">monthly income</strong> compares
                            for a creator with <strong className="text-foreground">500K subscribers</strong> across different niches:
                        </p>

                        <div className="space-y-3 mb-8">
                            {[
                                { niche: "Finance & Investing", monthly: "$15K – $50K", cpm: "$20–$50", icon: "📈" },
                                { niche: "Business & SaaS", monthly: "$12K – $40K", cpm: "$15–$40", icon: "💼" },
                                { niche: "Tech & Gadgets", monthly: "$8K – $25K", cpm: "$10–$30", icon: "📱" },
                                { niche: "Health & Fitness", monthly: "$6K – $20K", cpm: "$10–$25", icon: "💪" },
                                { niche: "Education", monthly: "$5K – $18K", cpm: "$10–$25", icon: "📚" },
                                { niche: "Beauty & Fashion", monthly: "$4K – $15K", cpm: "$8–$18", icon: "💄" },
                                { niche: "Entertainment & Vlogs", monthly: "$2K – $8K", cpm: "$2–$8", icon: "🎬" },
                                { niche: "Gaming", monthly: "$2K – $10K", cpm: "$3–$10", icon: "🎮" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <span className="text-2xl shrink-0">{item.icon}</span>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm">{item.niche}</p>
                                        <p className="text-xs text-muted-foreground">CPM: {item.cpm}</p>
                                    </div>
                                    <span className="font-black text-primary text-sm whitespace-nowrap">{item.monthly}/mo</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-muted-foreground leading-relaxed font-medium">
                            For a deeper dive into CPM rates, see our{" "}
                            <Link href="/cpm-by-country" className="text-primary hover:underline font-bold">CPM by Country</Link>{" "}
                            and{" "}
                            <Link href="/blog/how-much-youtube-pay-1-million-views" className="text-primary hover:underline font-bold">
                                1 Million Views Earnings
                            </Link>{" "}
                            guides.
                        </p>
                    </section>

                    {/* Section 4: Reality Check */}
                    <section id="reality-check" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">
                            The Reality: What Most YouTubers Actually Earn
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium mb-8">
                            <p>
                                The headline numbers can be misleading. Here are some{" "}
                                <strong className="text-foreground">sobering statistics</strong> about YouTube income in 2026:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-8 rounded-[2rem] bg-card border border-border/50 text-center">
                                <p className="text-5xl font-black text-primary mb-2">97.5%</p>
                                <p className="text-sm text-muted-foreground font-medium">
                                    of YouTube channels earn <strong className="text-foreground">less than $1,000/year</strong> from ads
                                </p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-card border border-border/50 text-center">
                                <p className="text-5xl font-black text-primary mb-2">$0</p>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Most channels <strong className="text-foreground">never reach monetization</strong> requirements
                                </p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-card border border-border/50 text-center">
                                <p className="text-5xl font-black text-primary mb-2">1–2 yrs</p>
                                <p className="text-sm text-muted-foreground font-medium">
                                    Average time to reach <strong className="text-foreground">1,000 subscribers</strong>
                                </p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-card border border-border/50 text-center">
                                <p className="text-5xl font-black text-primary mb-2">Top 3%</p>
                                <p className="text-sm text-muted-foreground font-medium">
                                    of creators earn <strong className="text-foreground">96% of all YouTube ad revenue</strong>
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm text-muted-foreground font-medium">
                                <strong className="text-foreground">The takeaway:</strong> YouTube is a viable career, but
                                it requires <strong className="text-foreground">consistent effort over 1–3 years</strong>{" "}
                                before generating meaningful income. The creators who succeed treat it as a business,
                                not a hobby.
                            </p>
                        </div>
                    </section>

                    {/* Section 5: Go Full-Time */}
                    <section id="go-fulltime" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <TrendingUp className="h-7 w-7 text-primary" />
                            When Can You Go Full-Time on YouTube?
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium mb-8">
                            <p>
                                Going full-time on YouTube depends on your{" "}
                                <strong className="text-foreground">niche, location, and lifestyle costs</strong>.
                                Here&apos;s a general guideline:
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {[
                                { milestone: "500 subscribers", income: "$0–$50/mo", status: "Hobby stage. Focus on content quality and consistency.", emoji: "🌱" },
                                { milestone: "10K subscribers", income: "$200–$1,000/mo", status: "Side income. You're producing good content. Keep refining.", emoji: "📈" },
                                { milestone: "50K subscribers", income: "$1K–$5K/mo", status: "Part-time viable. Consider reducing day job hours if possible.", emoji: "⚡" },
                                { milestone: "100K subscribers", income: "$3K–$15K/mo", status: "Full-time ready in most countries. Diversify income streams.", emoji: "🚀" },
                                { milestone: "500K+ subscribers", income: "$10K–$50K+/mo", status: "Professional creator. Build a team and scale operations.", emoji: "👑" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
                                    <div className="text-2xl shrink-0">{item.emoji}</div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                            <h3 className="font-black text-sm text-foreground">{item.milestone}</h3>
                                            <span className="font-black text-primary text-sm">{item.income}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{item.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 6: FAQ */}
                    <section id="faq" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                            <HelpCircle className="h-7 w-7 text-primary" />
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4">
                            {[
                                { q: "How much does the average YouTuber make?", a: "The average full-time YouTuber with 100K–500K subscribers makes $2,000–$15,000/month from ads. Total income (including sponsorships, merch, affiliates) can reach $5,000–$30,000 monthly. However, 95%+ of YouTubers earn less than $500/month." },
                                { q: "How much do YouTubers make per 1,000 views?", a: "Between $1 and $25 RPM (Revenue Per Mille), averaging $3–$5. Finance channels earn $15–$25 RPM while gaming/entertainment typically earns $2–$5 RPM." },
                                { q: "How many subscribers do you need to make money?", a: "500 subscribers + 3,000 watch hours (or 3M Shorts views) to join YPP. Meaningful income ($1,000+/month) usually requires 50,000+ subscribers." },
                                { q: "Do YouTubers get paid monthly?", a: "Yes, YouTube pays monthly through AdSense (21st–26th of each month) for the previous month's earnings. Minimum threshold is $100." },
                                { q: "Can you make a living from YouTube?", a: "Yes, with consistent effort. Most full-time creators have 100K+ subscribers and diversify income. High-CPM niches (finance, tech) can go full-time with 30,000–50,000 subscribers." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-card border border-border/50">
                                    <h3 className="font-black text-sm text-foreground mb-3">{item.q}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section id="calculate" className="mb-8 scroll-mt-24">
                        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-primary to-primary/60 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                            <div className="absolute top-0 right-0 opacity-10 p-6">
                                <TrendingUp className="h-40 w-40 rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">
                                    How Much Could YOU Make?
                                </h2>
                                <p className="text-white/80 mb-8 font-medium max-w-lg mx-auto">
                                    Enter your channel stats into our free YouTube Money Calculator and get an instant estimate
                                    of your potential earnings based on views, CPM, and niche data.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]">
                                        <ArrowRight className="h-5 w-5 mr-2" /> Open Calculator
                                    </Link>
                                    <Link href="/blog/top-youtuber-revenue" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white/10 text-white font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20">
                                        Top Earners 2026
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Author */}
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/20 border border-border/50 mt-12">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-black text-sm">YouTube Money Calculator Research Team</p>
                            <p className="text-xs text-muted-foreground">
                                Last updated: <time dateTime="2026-03-07">March 7, 2026</time> · Data compiled from public sources & AI modeling
                            </p>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
