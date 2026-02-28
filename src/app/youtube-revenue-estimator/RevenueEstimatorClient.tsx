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
    BarChart3,
    Target,
    Lightbulb,
    CheckCircle,
    Zap,
    Send,
    ArrowRight,
    HelpCircle,
    PieChart,
    Clock,
    Users,
} from "lucide-react";

/* ---------- Tab types ---------- */
type Tab = "channel" | "video" | "views";

/* ---------- FAQ data ---------- */
const faqs = [
    {
        q: "What is a YouTube Revenue Estimator?",
        a: "A YouTube Revenue Estimator is a tool that predicts potential earnings from YouTube channels or videos. It uses metrics such as views, RPM (Revenue Per Mille), and audience demographics to provide an estimate of revenue.",
    },
    {
        q: "Can I trust the estimates provided by these tools?",
        a: "While YouTube Revenue Estimators provide helpful approximations, their accuracy depends on factors such as ad blockers, engagement levels, and viewer demographics. They are reliable for general insights but should not be treated as exact figures.",
    },
    {
        q: "How does a YouTube Revenue Estimator calculate earnings?",
        a: "A YouTube Revenue Estimator calculates earnings by multiplying the total views by RPM, then dividing by 1,000. For example, if a video has 10,000 views and an RPM of $5, the estimated revenue would be $50.",
    },
    {
        q: "How much money can I earn per 1,000 views?",
        a: "The amount of money you can earn per 1,000 views depends on your RPM, which typically ranges from $1 to $30. The exact value varies by niche, audience location, and engagement levels.",
    },
    {
        q: "What is the difference between CPM and RPM?",
        a: "CPM refers to the cost advertisers pay per 1,000 ad impressions, while RPM is the actual revenue earned by creators per 1,000 views. RPM accounts for all revenue sources, including ads, memberships, and YouTube Premium income.",
    },
    {
        q: "What factors influence my YouTube revenue the most?",
        a: "Factors that influence YouTube revenue include RPM rates, audience demographics, content niche, video length, and viewer engagement. Higher RPM rates and engaging content generate more revenue.",
    },
];

/* ---------- Views Calculator ---------- */
function ViewsCalculator() {
    const [views, setViews] = useState("");
    const [rpm, setRpm] = useState("5");
    const [result, setResult] = useState<{ estimated: number; monthly: number; yearly: number } | null>(null);

    const calculate = () => {
        const v = parseFloat(views) || 0;
        const r = parseFloat(rpm) || 0;
        const estimated = (v * r) / 1000;
        const monthly = estimated;
        const yearly = estimated * 12;
        setResult({ estimated, monthly, yearly });
    };

    return (
        <div className="space-y-5">
            <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                    Total Views
                </label>
                <input
                    type="number"
                    value={views}
                    onChange={(e) => setViews(e.target.value)}
                    placeholder="e.g. 500000"
                    className="w-full h-14 px-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all"
                />
            </div>
            <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                    RPM ($) — Revenue Per 1,000 Views
                </label>
                <input
                    type="number"
                    value={rpm}
                    onChange={(e) => setRpm(e.target.value)}
                    placeholder="5"
                    className="w-full h-14 px-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all"
                />
            </div>
            <button
                onClick={calculate}
                className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
                <Calculator className="h-4 w-4" /> Estimate Revenue
            </button>
            {result && (
                <div className="grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Estimated</p>
                        <p className="text-xl font-black text-primary">
                            ${result.estimated.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Monthly</p>
                        <p className="text-xl font-black text-primary">
                            ${result.monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Yearly</p>
                        <p className="text-xl font-black text-primary">
                            ${result.yearly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- Main Component ---------- */
export default function RevenueEstimatorClient() {
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
                        Youtube{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                            Revenue Estimator
                        </span>
                    </h1>
                    <h2 className="text-sm md:text-base text-muted-foreground font-medium max-w-lg mx-auto">
                        Use our YouTube Revenue Estimator! Enter views, CPM & instantly calculate your potential YouTube earnings.
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
                {/* Section 1: What Is a YouTube Revenue Estimator */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <HelpCircle className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            What Is a YouTube Revenue Estimator and How Does It Work?
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            A <strong className="text-foreground">YouTube Revenue Estimator</strong> is a tool that helps content
                            creators predict potential earnings from their YouTube videos or channels. By inputting specific metrics,
                            these estimators provide an approximate revenue figure. Here&apos;s how they function:
                        </p>

                        {/* Input Metrics */}
                        <div className="p-5 rounded-2xl bg-card border border-border/50">
                            <h3 className="font-black text-foreground text-sm mb-3 flex items-center gap-2">
                                <BarChart3 className="h-4 w-4 text-primary" /> Input Metrics
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Average views per video or channel.</span></li>
                                <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Estimated CPM (Cost Per Mille) or RPM (Revenue Per Mille).</span></li>
                                <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Engagement rates, such as likes, comments, and shares.</span></li>
                            </ul>
                        </div>

                        {/* Calculation Process */}
                        <div className="p-5 rounded-2xl bg-card border border-border/50">
                            <h3 className="font-black text-foreground text-sm mb-3 flex items-center gap-2">
                                <Calculator className="h-4 w-4 text-primary" /> Calculation Process
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>The estimator multiplies the number of views by the CPM or RPM to determine potential earnings.</span></li>
                                <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>For instance, with a CPM of $5 and 10,000 views:</span></li>
                            </ul>
                            <div className="mt-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                                <p className="font-black text-primary text-center">(10,000 views ÷ 1,000) × $5 CPM = $50</p>
                            </div>
                        </div>

                        {/* Considerations */}
                        <div className="p-5 rounded-2xl bg-card border border-border/50">
                            <h3 className="font-black text-foreground text-sm mb-3 flex items-center gap-2">
                                <Lightbulb className="h-4 w-4 text-primary" /> Considerations
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Actual earnings can vary due to factors like ad engagement, viewer demographics, and YouTube&apos;s revenue-sharing policies.</span></li>
                                <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>These tools provide estimates and should be used as general guides rather than exact figures.</span></li>
                            </ul>
                        </div>

                        <p>
                            Utilizing a YouTube Revenue Estimator allows creators to set realistic financial goals and tailor their
                            content strategies accordingly.
                        </p>
                    </div>
                </section>

                {/* Section 2: Calculate Earnings Based on Views */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <DollarSign className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Calculate Your YouTube Earnings Based on Views
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            Estimating your{" "}
                            <Link href="/youtube-earnings-calculator" className="text-primary hover:underline font-bold">
                                YouTube earnings
                            </Link>{" "}
                            based on views involves understanding key metrics and applying them to your channel&apos;s data.
                            Here&apos;s a step-by-step guide:
                        </p>

                        <div className="space-y-3">
                            {[
                                {
                                    title: "Understand RPM (Revenue Per Mille)",
                                    desc: "RPM represents the revenue earned per 1,000 views, encompassing all income sources, including ads, channel memberships, and YouTube Premium revenue.",
                                },
                                {
                                    title: "Gather Your Data",
                                    desc: "Determine the total number of views for the period you wish to analyze. Identify your channel's average RPM, which can be found in YouTube Analytics.",
                                },
                                {
                                    title: "Apply the Formula",
                                    desc: "(Total Views ÷ 1,000) × RPM = Estimated Earnings.",
                                },
                                {
                                    title: "Consider Influencing Factors",
                                    desc: "Audience demographics: Viewers from countries with higher ad rates can increase RPM. Content niche: Topics with high advertiser demand often yield higher RPMs.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm mb-1 text-foreground">{item.title}</h3>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm mb-2">
                                <strong className="text-foreground">Example:</strong> With 500,000 views and an RPM of $2.50:
                            </p>
                            <p className="font-black text-primary text-lg">(500,000 ÷ 1,000) × $2.50 = $1,250</p>
                        </div>
                    </div>
                </section>

                {/* Section 3: How Accurate Are Revenue Estimators */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Target className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            How Accurate Are YouTube Revenue Estimators?
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            YouTube revenue estimators provide a close approximation of earnings but are not 100% accurate due to
                            variable factors. These tools use average metrics like RPM or CPM to calculate potential revenue.
                        </p>

                        <h3 className="text-lg font-black text-foreground pt-2">Factors Influencing Accuracy:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { icon: <PieChart className="h-4 w-4" />, title: "Ad Impressions vs. Views", desc: "Not every view generates an ad impression. Revenue depends on the number of ad impressions rather than total views." },
                                { icon: <TrendingUp className="h-4 w-4" />, title: "RPM Variability", desc: "RPM fluctuates based on content type, viewer demographics, and seasonal trends in advertiser spending." },
                                { icon: <DollarSign className="h-4 w-4" />, title: "Additional Revenue Streams", desc: "Revenue from memberships, Super Chats, or YouTube Premium views might not be included in some estimators." },
                                { icon: <Users className="h-4 w-4" />, title: "Ad Blockers", desc: "A significant number of viewers may use ad blockers, reducing potential revenue." },
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-card border border-border/50">
                                    <h4 className="font-black text-sm mb-1 flex items-center gap-2 text-foreground">
                                        <span className="text-primary">{item.icon}</span> {item.title}
                                    </h4>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-lg font-black text-foreground pt-2">How to Use Estimators Effectively:</h3>
                        <div className="space-y-2">
                            {[
                                "Treat them as general guides to help with financial planning.",
                                "Cross-check with YouTube Analytics for more precise figures.",
                                "Focus on improving content quality and engagement to maximize revenue potential.",
                            ].map((tip, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-muted/20 border border-border/50">
                                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                    <p className="text-sm">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Factors That Influence Revenue */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <BarChart3 className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Factors That Influence Your YouTube Revenue
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            Your YouTube revenue is influenced by multiple factors beyond just the number of views. Understanding
                            these factors can help you optimize your earnings:
                        </p>
                        <div className="space-y-3">
                            {[
                                { title: "RPM (Revenue Per Mille)", desc: "Represents the revenue per 1,000 views, factoring in ads, memberships, and YouTube Premium earnings.", icon: <DollarSign className="h-4 w-4" /> },
                                { title: "Audience Demographics", desc: "Viewers from high-paying regions (e.g., U.S., U.K.) generate higher revenue. Languages and localization also affect revenue potential.", icon: <Users className="h-4 w-4" /> },
                                { title: "Content Niche", desc: "Finance, technology, and health often attract higher-paying advertisers. Entertainment or gaming may yield lower RPMs.", icon: <Target className="h-4 w-4" /> },
                                { title: "Ad Types and Engagement", desc: "Skippable ads, non-skippable ads, and display ads impact earnings differently. Higher engagement (likes, comments) improves ad performance.", icon: <BarChart3 className="h-4 w-4" /> },
                                { title: "Video Length", desc: "Videos longer than 8 minutes allow mid-roll ads, increasing revenue opportunities.", icon: <Clock className="h-4 w-4" /> },
                                { title: "Seasonality", desc: "Ad rates typically increase during holiday seasons due to higher advertiser demand.", icon: <TrendingUp className="h-4 w-4" /> },
                            ].map((factor, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {factor.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm mb-1 text-foreground">{factor.title}</h3>
                                        <p className="text-sm">{factor.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>
                            By focusing on these factors, you can strategically improve your YouTube revenue over time.
                        </p>
                    </div>
                </section>

                {/* Section 5: Estimate by Video, Channel, or View Count */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <PieChart className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Estimate Earnings by Video, Channel, or View Count
                        </h2>
                    </div>
                    <div className="space-y-6 text-muted-foreground font-medium leading-relaxed">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-2xl bg-card border border-border/50">
                                <h3 className="font-black text-sm mb-3 text-foreground flex items-center gap-2">
                                    <Play className="h-4 w-4 text-primary" /> For a Single Video
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Gather data on total views, RPM, and ad engagement.</span></li>
                                    <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>(Total Views ÷ 1,000) × RPM = Estimated Revenue</span></li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-2xl bg-card border border-border/50">
                                <h3 className="font-black text-sm mb-3 text-foreground flex items-center gap-2">
                                    <Youtube className="h-4 w-4 text-primary" /> For an Entire Channel
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Calculate total views across all videos during a specific period.</span></li>
                                    <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Apply the average RPM for the channel.</span></li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-2xl bg-card border border-border/50">
                                <h3 className="font-black text-sm mb-3 text-foreground flex items-center gap-2">
                                    <Calculator className="h-4 w-4 text-primary" /> For a View Count
                                </h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Enter the view count into the estimator with a relevant RPM range.</span></li>
                                    <li className="flex items-start gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span>Adjust for region and niche to refine the estimate.</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Example 1</p>
                                <p className="text-sm mb-1">A video with 50,000 views and an RPM of $5:</p>
                                <p className="font-black text-primary">(50,000 ÷ 1,000) × $5 = $250</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Example 2</p>
                                <p className="text-sm mb-1">A channel with 1M total views and an RPM of $2:</p>
                                <p className="font-black text-primary">(1,000,000 ÷ 1,000) × $2 = $2,000</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Why Use a Revenue Estimator */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Lightbulb className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Why Use a YouTube Revenue Estimator?
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            A YouTube Revenue Estimator is a valuable tool for creators and advertisers to understand the financial
                            potential of YouTube content.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Set Realistic Expectations", desc: "Helps creators predict potential earnings and plan content strategies accordingly." },
                                { title: "Budget Planning", desc: "Advertisers can estimate the cost of campaigns based on expected views and CPMs." },
                                { title: "Optimize Content", desc: "Creators can identify high-performing videos or niches and focus on replicating their success." },
                                { title: "Transparency", desc: "Provides insights into how metrics like RPM and views translate into revenue." },
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <h3 className="font-black text-sm mb-2 text-foreground flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" /> {item.title}
                                    </h3>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p>Using an estimator regularly can help you track progress and refine your monetization strategies.</p>
                    </div>
                </section>

                {/* Section 7: Understanding RPM */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <TrendingUp className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Understanding RPM: The Key to Accurate Revenue Estimation
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            RPM (Revenue Per Mille) is a crucial metric for estimating YouTube revenue accurately. Unlike CPM, RPM
                            reflects the actual revenue earned per 1,000 views, including ads, memberships, and YouTube Premium income.
                        </p>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm mb-2"><strong className="text-foreground">How to Calculate RPM:</strong></p>
                            <p className="font-black text-primary text-lg">(Total Revenue ÷ Total Views) × 1,000 = RPM</p>
                        </div>

                        <h3 className="text-lg font-black text-foreground pt-2">Why RPM Matters:</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <p className="text-sm"><strong className="text-foreground">Reflects Actual Earnings:</strong> Provides a holistic view of income sources beyond ad revenue.</p>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                <p className="text-sm"><strong className="text-foreground">Identifies Growth Opportunities:</strong> Helps pinpoint areas where additional revenue streams can be optimized.</p>
                            </div>
                        </div>

                        <h3 className="text-lg font-black text-foreground pt-2">Tips to Improve RPM:</h3>
                        <div className="space-y-2">
                            {[
                                "Target high-paying niches (finance, technology).",
                                "Create longer videos to enable mid-roll ads.",
                                "Engage audiences from high-RPM regions like the U.S. and Europe.",
                            ].map((tip, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-muted/20 border border-border/50">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-sm">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 8: Tips to Maximize Earnings */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Zap className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Tips to Maximize Earnings with a YouTube Revenue Estimator
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>Using a YouTube Revenue Estimator effectively can help you unlock higher earnings.</p>
                        <div className="space-y-3">
                            {[
                                { title: "Input Accurate Data", desc: "Use precise views, RPM, and engagement metrics to get better estimates." },
                                { title: "Experiment with Scenarios", desc: "Adjust variables like view counts and RPM to explore potential earnings for different strategies." },
                                {
                                    title: "Track Trends",
                                    desc: "Use the YouTube money calculator periodically to track how seasonal changes or content updates affect your revenue.",
                                    link: true,
                                },
                                { title: "Combine with Analytics", desc: "Supplement the estimator's predictions with insights from YouTube Analytics to create a comprehensive growth plan." },
                            ].map((tip, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm mb-1 text-foreground">{tip.title}</h3>
                                        <p className="text-sm">
                                            {tip.link ? (
                                                <>
                                                    Use the{" "}
                                                    <Link href="/" className="text-primary hover:underline font-bold">
                                                        YouTube money calculator
                                                    </Link>{" "}
                                                    periodically to track how seasonal changes or content updates affect your revenue.
                                                </>
                                            ) : (
                                                tip.desc
                                            )}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>These tips ensure you make the most of revenue estimators for strategic decision-making.</p>
                    </div>
                </section>
            </article>

            {/* ─── Newsletter Section ─── */}
            <section className="container mx-auto max-w-4xl px-4 my-24">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-16">
                    Subscribe to Our Newsletter
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <div className="w-64 h-52 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                        <Send className="h-20 w-20 text-primary/30" />
                    </div>
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
                            className={`rounded-2xl border transition-all ${openFaq === i ? "bg-primary/5 border-primary/20" : "bg-card border-border/50 hover:border-primary/10"
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
