"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Bookmark,
    Youtube,
    Play,
    Calculator,
    ChevronDown,
    ChevronUp,
    DollarSign,
    TrendingUp,
    Globe,
    BarChart3,
    Target,
    Lightbulb,
    Star,
    Zap,
    Send,
    ArrowRight,
    HelpCircle,
} from "lucide-react";

/* ---------- Tab types ---------- */
type Tab = "channel" | "video" | "views";

/* ---------- FAQ data ---------- */
const faqs = [
    {
        q: "How much money does YouTube pay per 1,000 views?",
        a: "YouTube pays an average of $1 to $30 per 1,000 views, depending on factors like CPM, niche, and audience location. High-paying niches like finance or technology can significantly increase your earnings.",
    },
    {
        q: "How many views do I need to start earning money on YouTube?",
        a: "To earn money on YouTube, you must join the YouTube Partner Program, which requires at least 1,000 subscribers and 4,000 hours of watch time in the last 12 months. Once monetized, even a few hundred views can generate revenue.",
    },
    {
        q: "What is CPM, and how does it affect my YouTube income?",
        a: "CPM (Cost Per Mille) refers to the amount advertisers pay per 1,000 ad impressions. A higher CPM means more revenue for your channel. CPM varies by niche, audience demographics, and advertiser demand.",
    },
    {
        q: "How much money can I make with 1 million YouTube views?",
        a: "Earnings for 1 million views typically range from $4,000 to $60,000, depending on your niche, audience engagement, and geographic location.",
    },
    {
        q: "Do all YouTube views generate revenue?",
        a: "No, not all views result in earnings. Only views with ads displayed, engaged viewers, or YouTube Premium subscribers contribute to revenue. Ad blockers and skipped ads can reduce monetized views.",
    },
    {
        q: "Can I earn money on YouTube without ads?",
        a: "Yes, you can earn money without ads through sponsorships, affiliate marketing, merchandise sales, channel memberships, and fan contributions via Super Chats or Patreon.",
    },
];

/* ---------- RPM niche data ---------- */
const nicheRPMs = [
    { niche: "Finance & Investment", rpm: "$12–$18", color: "from-emerald-500 to-emerald-600" },
    { niche: "Technology & Gadgets", rpm: "$10–$15", color: "from-blue-500 to-blue-600" },
    { niche: "Health & Fitness", rpm: "$8–$12", color: "from-rose-500 to-rose-600" },
    { niche: "Education & E-Learning", rpm: "$10–$14", color: "from-violet-500 to-violet-600" },
    { niche: "Beauty & Fashion", rpm: "$6–$10", color: "from-pink-500 to-pink-600" },
    { niche: "Food & Cooking", rpm: "$4–$8", color: "from-orange-500 to-orange-600" },
    { niche: "Travel & Lifestyle", rpm: "$5–$9", color: "from-cyan-500 to-cyan-600" },
    { niche: "Gaming", rpm: "$2–$5", color: "from-indigo-500 to-indigo-600" },
    { niche: "Entertainment & Comedy", rpm: "$1–$4", color: "from-amber-500 to-amber-600" },
    { niche: "Music & Dance", rpm: "$1–$3", color: "from-fuchsia-500 to-fuchsia-600" },
];

/* ---------- Geo RPM data ---------- */
const geoRPMs = [
    { country: "🇺🇸 United States", rpm: "$8–$12" },
    { country: "🇳🇴 Norway", rpm: "$10–$15" },
    { country: "🇦🇺 Australia", rpm: "$9–$13" },
    { country: "🇬🇧 United Kingdom", rpm: "$7–$11" },
    { country: "🇩🇪 Germany", rpm: "$6–$10" },
    { country: "🇮🇳 India", rpm: "$0.50–$2" },
    { country: "🇵🇭 Philippines", rpm: "$0.50–$1.50" },
];

/* ---------- Views Calculator ---------- */
function ViewsCalculator() {
    const [views, setViews] = useState("");
    const [cpm, setCpm] = useState("5");
    const [monetized, setMonetized] = useState("50");
    const [result, setResult] = useState<{ gross: number; net: number } | null>(null);

    const calculate = () => {
        const v = parseFloat(views) || 0;
        const c = parseFloat(cpm) || 0;
        const m = parseFloat(monetized) || 50;
        const gross = (v * (m / 100) * c) / 1000;
        const net = gross * 0.55;
        setResult({ gross, net });
    };

    return (
        <div className="space-y-5">
            <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                    Total Video Views
                </label>
                <input
                    type="number"
                    value={views}
                    onChange={(e) => setViews(e.target.value)}
                    placeholder="e.g. 1000000"
                    className="w-full h-14 px-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                        CPM ($)
                    </label>
                    <input
                        type="number"
                        value={cpm}
                        onChange={(e) => setCpm(e.target.value)}
                        placeholder="5"
                        className="w-full h-14 px-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all"
                    />
                </div>
                <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                        Monetized Views (%)
                    </label>
                    <input
                        type="number"
                        value={monetized}
                        onChange={(e) => setMonetized(e.target.value)}
                        placeholder="50"
                        className="w-full h-14 px-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all"
                    />
                </div>
            </div>
            <button
                onClick={calculate}
                className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
                <Calculator className="h-4 w-4" /> Calculate Earnings
            </button>
            {result && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Gross Revenue
                        </p>
                        <p className="text-2xl font-black text-primary">
                            ${result.gross.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Creator Earnings (55%)
                        </p>
                        <p className="text-2xl font-black text-primary">
                            ${result.net.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- Main Component ---------- */
export default function ViewsToMoneyClient() {
    const [activeTab, setActiveTab] = useState<Tab>("channel");
    const [channelUrl, setChannelUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const tabs: { id: Tab; label: string; shortLabel: string; icon: React.ReactNode }[] = [
        { id: "channel", label: "Channel URL or @username", shortLabel: "Channel URL", icon: <Youtube className="h-4 w-4" /> },
        { id: "video", label: "Video URL", shortLabel: "Video URL", icon: <Play className="h-4 w-4" /> },
        { id: "views", label: "Calculate by Views", shortLabel: "By Views", icon: <Calculator className="h-4 w-4" /> },
    ];

    return (
        <main>
            {/* ─── Hero Section ─── */}
            <section className="relative w-full overflow-hidden border-b bg-gradient-to-b from-muted/30 to-background">
                <div className="container mx-auto max-w-4xl px-4 pt-12 pb-4 text-center">
                    {/* Bookmark Prompt */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-muted/40 border border-border/50 mb-10">
                        <div className="flex items-center gap-1.5">
                            <kbd className="px-2.5 py-1 rounded-lg bg-card border border-border/50 shadow-sm text-sm font-bold">ctrl</kbd>
                            <span className="text-muted-foreground font-bold">+</span>
                            <kbd className="px-2.5 py-1 rounded-lg bg-card border border-border/50 shadow-sm text-sm font-bold">D</kbd>
                        </div>
                        <span className="text-sm font-bold text-muted-foreground flex items-center gap-1.5">
                            <Bookmark className="h-3.5 w-3.5" /> Bookmark Us!
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6">
                        Youtube Views To{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                            Money Calculator
                        </span>
                    </h1>
                    <h2 className="text-sm md:text-base text-muted-foreground font-medium max-w-lg mx-auto">
                        Estimate Your YouTube Earnings Instantly — Enter Views, CPM & Get Real-Time Revenue Predictions for Free!
                    </h2>
                </div>
            </section>

            {/* ─── Calculator Widget ─── */}
            <section className="container mx-auto max-w-2xl px-4 -mt-2 mb-24">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                    <div className="relative bg-card border border-border/50 rounded-[2rem] p-6 md:p-8 shadow-2xl">
                        {/* Tabs */}
                        <div className="flex rounded-2xl bg-muted/30 border border-border/50 p-1 mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                                            ? "bg-card shadow-lg text-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {tab.icon}
                                    <span className="hidden md:inline">{tab.label}</span>
                                    <span className="md:hidden text-xs">{tab.shortLabel}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab: Channel URL */}
                        {activeTab === "channel" && (
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="relative flex-1">
                                        <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <input
                                            type="text"
                                            value={channelUrl}
                                            onChange={(e) => setChannelUrl(e.target.value)}
                                            placeholder="Paste the YouTube channel URL or @username"
                                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-muted/20 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all placeholder:font-normal placeholder:text-sm"
                                        />
                                    </div>
                                    <Link
                                        href="/"
                                        className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap"
                                    >
                                        <Zap className="h-4 w-4" /> Analyze Channel
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Tab: Video URL */}
                        {activeTab === "video" && (
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="relative flex-1">
                                        <Play className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <input
                                            type="text"
                                            value={videoUrl}
                                            onChange={(e) => setVideoUrl(e.target.value)}
                                            placeholder="Paste the YouTube video URL"
                                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-muted/20 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all placeholder:font-normal placeholder:text-sm"
                                        />
                                    </div>
                                    <Link
                                        href="/"
                                        className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap"
                                    >
                                        <Zap className="h-4 w-4" /> Analyze Video
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Tab: Calculate by Views */}
                        {activeTab === "views" && <ViewsCalculator />}
                    </div>
                </div>
            </section>

            {/* ─── Article Content ─── */}
            <article className="container mx-auto max-w-3xl px-4">
                {/* Section: How Revenue is Calculated */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <DollarSign className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">How YouTube Revenue is Calculated</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            Ad impressions and CPM (Cost Per Mille){" "}
                            <Link href="/" className="text-primary hover:underline font-bold">
                                calculate YouTube revenue
                            </Link>
                            . CPM is the amount advertisers pay for 1,000 ad impressions. For example, if your video generates 10,000
                            ad impressions at a $10 CPM, you earn $100. Not all views include ads, so factors like ad blockers and
                            skipped ads reduce earnings. Focus on creating engaging content to improve ad impressions and boost
                            revenue.
                        </p>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="font-black text-foreground text-lg">
                                💡 Revenue = (Total Ad Impressions ÷ 1,000) × CPM
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section: Niche Impact */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Target className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            The Impact of Niches on YouTube Earnings
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed mb-8">
                        <p>
                            Your content niche affects how much YouTube pays per 1,000 views. High-demand niches, like finance or
                            technology, often have RPM rates between $10 and $15. In contrast, entertainment or gaming niches average
                            $3 to $5 RPM. Choosing the right niche and optimizing content can significantly increase your earnings.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {nicheRPMs.map((n) => (
                            <div
                                key={n.niche}
                                className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all"
                            >
                                <span className="font-bold text-sm">{n.niche}</span>
                                <span className="font-black text-primary text-sm">{n.rpm} RPM</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                        <strong>Note:</strong> RPM reflects the actual revenue a creator earns per 1,000 views, factoring in ad
                        revenue, channel memberships, YouTube Premium earnings, and other monetization methods. It&apos;s typically
                        lower than CPM because not every view produces an ad impression.
                    </p>
                </section>

                {/* Section: Geo RPM */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Globe className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Geographical Influence on YouTube RPM Rates
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                        The location of your viewers plays a major role in determining your revenue. Countries with higher
                        advertiser demand tend to offer higher RPM rates. For example:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {geoRPMs.map((g) => (
                            <div
                                key={g.country}
                                className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border/50"
                            >
                                <span className="font-bold text-sm">{g.country}</span>
                                <span className="font-black text-primary text-sm">{g.rpm} RPM</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed text-sm">
                        Targeting audiences in high-RPM regions through SEO, subtitles, and language-specific content can
                        significantly increase your YouTube earnings. RPM reflects actual revenue per 1,000 views, making it the
                        most accurate metric for earnings potential.
                    </p>
                </section>

                {/* Section: Tips */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <TrendingUp className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Tips to Increase Your YouTube Earnings per View
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                        Increasing your earnings per view requires optimizing content and monetization strategies:
                    </p>
                    <div className="space-y-4">
                        {[
                            { title: "Focus on High-RPM Niches", desc: "Create videos in profitable niches, such as finance, technology, or health. These topics attract higher-paying ads, boosting your RPM." },
                            { title: "Engage Viewers with Quality Content", desc: "High engagement leads to better ad placements and more revenue. Use clear visuals, professional editing, and compelling storytelling." },
                            { title: "Enable All Ad Formats", desc: "Allow skippable ads, non-skippable ads, display ads, and mid-roll ads. Longer videos (10+ minutes) allow multiple ad breaks." },
                            { title: "Target High-RPM Regions", desc: "Use subtitles or produce content in English to attract viewers from high-RPM countries like the U.S., Norway, or Australia." },
                            { title: "Increase Viewer Retention", desc: "Create content that hooks viewers in the first 15 seconds. Higher retention improves your channel's ad performance." },
                            { title: "Promote YouTube Premium", desc: "You earn a share of revenue from Premium viewers who watch your content, regardless of ads." },
                            { title: "Optimize Keywords for Monetization", desc: "Use SEO-friendly titles and tags targeting keywords that attract advertisers. 'How to Invest in Stocks' earns higher RPM than 'Funny Stock Memes.'" },
                            { title: "Leverage Multiple Revenue Streams", desc: "Add memberships, affiliate marketing, and merchandise to supplement ad revenue." },
                            { title: "Analyze Performance Metrics", desc: "Use YouTube Analytics to monitor RPM, retention rates, and audience demographics. Adjust your strategy based on data." },
                        ].map((tip, i) => (
                            <div
                                key={i}
                                className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all"
                            >
                                <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="font-black text-sm mb-1">{tip.title}</h3>
                                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: Content Quality */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Star className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Why Content Quality Matters for YouTube Revenue
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-medium leading-relaxed mb-6">
                        Creating high-quality content directly impacts your revenue by attracting more viewers, increasing
                        engagement, and opening up better monetization opportunities:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {[
                            { title: "Higher Viewer Retention", desc: "Longer engagement increases the likelihood of ads being displayed and watched." },
                            { title: "Increased Subscriber Growth", desc: "Consistent quality drives repeat views and a steady income stream." },
                            { title: "Attracts Premium Advertisers", desc: "Advertisers pay more for ads on professional, high-quality videos." },
                            { title: "Brand Sponsorship Opportunities", desc: "Brands prefer creators who maintain a professional standard." },
                            { title: "Improved Viewer Trust", desc: "High-quality visuals and clear audio build credibility with your audience." },
                        ].map((item, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-card border border-border/50">
                                <h3 className="font-black text-sm mb-2 flex items-center gap-2">
                                    <Lightbulb className="h-4 w-4 text-primary" />
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-black mb-4">How to Improve Content Quality</h3>
                    <div className="space-y-3">
                        {[
                            { title: "Invest in Equipment", desc: "Use a good camera, microphone, and lighting for a professional look." },
                            { title: "Script Your Videos", desc: "Plan your content to ensure clarity and avoid rambling." },
                            { title: "Edit Professionally", desc: "Remove unnecessary parts, add transitions, and include engaging graphics." },
                            { title: "Focus on Value", desc: "Create content that solves problems, educates, or entertains your audience effectively." },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/20 border border-border/50">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <p className="text-sm text-muted-foreground">
                                    <strong className="text-foreground">{item.title}:</strong> {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section: What is Views to Money */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <BarChart3 className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            What is YouTube Views to Money?
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            <strong className="text-foreground">YouTube Views to Money</strong> refers to the process of earning
                            revenue from the views your videos receive on YouTube. Creators make money when ads are displayed to
                            viewers, and revenue is calculated based on metrics like{" "}
                            <strong className="text-foreground">RPM (Revenue Per Mille)</strong> and ad impressions.
                        </p>
                        <div className="space-y-3">
                            {[
                                { title: "RPM (Revenue Per 1,000 Views)", desc: "Reflects the actual earnings per 1,000 views, including ad revenue, memberships, and YouTube Premium income." },
                                { title: "Ad Impressions", desc: "Not all views show ads. Revenue comes only from views that include ad interactions or YouTube Premium subscribers." },
                                { title: "Audience Demographics", desc: "Viewers from high-paying regions like the U.S. or Norway contribute more revenue compared to low-CPM regions." },
                                { title: "Content Niche", desc: "Videos in niches like finance or technology earn more due to higher advertiser demand." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50">
                                    <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-xs shrink-0">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm">
                                        <strong className="text-foreground">{item.title}:</strong> {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mt-4">
                            <p className="font-black text-foreground">
                                Example: If a creator&apos;s video earns an <strong>RPM of $5</strong>, and it receives 100,000 views:
                            </p>
                            <p className="font-black text-primary text-lg mt-2">100,000 ÷ 1,000 × $5 = $500</p>
                        </div>
                        <p>
                            Understanding how{" "}
                            <Link href="/youtube-pay-per-view" className="text-primary hover:underline font-bold">
                                YouTube converts views to money
                            </Link>{" "}
                            allows creators to optimize their content, target the right audience, and maximize their earnings.
                        </p>
                    </div>
                </section>
            </article>

            {/* ─── Newsletter Section ─── */}
            <section className="container mx-auto max-w-4xl px-4 my-24">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-16">
                    Subscribe to Our Newsletter
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Illustration placeholder */}
                    <div className="w-64 h-52 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                        <Send className="h-20 w-20 text-primary/30" />
                    </div>
                    {/* Form */}
                    <div className="p-8 rounded-[2rem] bg-card border border-border/50 w-full max-w-sm shadow-xl">
                        <p className="text-xl font-black mb-6">Enter your email address to stay in touch</p>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="w-full h-12 px-4 rounded-xl border border-border/50 bg-muted/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-medium mb-4 transition-all"
                        />
                        <button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20 active:scale-[0.98]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* ─── FAQ Section ─── */}
            <section className="container mx-auto max-w-3xl px-4 my-24">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
                        <HelpCircle className="h-3 w-3" /> FAQ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border transition-all ${openFaq === i
                                    ? "bg-primary/5 border-primary/20"
                                    : "bg-card border-border/50 hover:border-primary/10"
                                }`}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                            >
                                <h3 className="font-bold text-sm md:text-base">{faq.q}</h3>
                                <div
                                    className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? "bg-primary/20 text-primary" : "bg-muted/40 text-muted-foreground"
                                        }`}
                                >
                                    {openFaq === i ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </div>
                            </button>
                            {openFaq === i && (
                                <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-1 duration-300">
                                    <div className="h-px bg-border/50 mb-4" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-4 rounded-full bg-muted/20 border border-border/50 flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
                    <span className="text-muted-foreground">Didn&apos;t find the answer you&apos;re looking for?</span>
                    <Link href="/contact" className="text-primary font-bold hover:underline flex items-center gap-1">
                        Contact us <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
