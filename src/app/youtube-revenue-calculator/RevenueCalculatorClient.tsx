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
    Clock,
    Users,
    Film,
} from "lucide-react";

/* ---------- Tab types ---------- */
type Tab = "channel" | "video" | "views";

/* ---------- FAQ data ---------- */
const faqs = [
    {
        q: "How does a YouTube Revenue Calculator work?",
        a: "A YouTube Revenue Calculator estimates earnings by multiplying your views by your RPM and dividing by 1,000. It accounts for ads, memberships, and YouTube Premium revenue.",
    },
    {
        q: "What is RPM in YouTube revenue?",
        a: "RPM stands for Revenue Per Mille, representing how much revenue a creator earns per 1,000 views, including ads, memberships, and YouTube Premium earnings.",
    },
    {
        q: "How much money can I make per 1,000 views?",
        a: "Earnings per 1,000 views depend on RPM, which can range from $1 to $30. High-demand niches and regions typically yield higher RPMs.",
    },
    {
        q: "Does the content niche affect revenue?",
        a: "Yes, niches like finance, health, and tech often have higher RPMs due to advertiser demand. Gaming or comedy content tends to have lower RPMs.",
    },
    {
        q: "Can YouTube Shorts earn revenue?",
        a: "Yes, Shorts can earn revenue through the Shorts Fund or ads, depending on their monetization setup.",
    },
    {
        q: "How do longer videos impact revenue?",
        a: "Longer videos (over 8 minutes) allow for mid-roll ads, increasing ad impressions and overall revenue potential.",
    },
];

/* ---------- Views Calculator ---------- */
function ViewsCalculator() {
    const [views, setViews] = useState("");
    const [rpm, setRpm] = useState("5");
    const [result, setResult] = useState<{
        estimated: number;
        monthly: number;
        yearly: number;
    } | null>(null);

    const calculate = () => {
        const v = parseFloat(views) || 0;
        const r = parseFloat(rpm) || 0;
        const estimated = (v * r) / 1000;
        setResult({ estimated, monthly: estimated, yearly: estimated * 12 });
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
                    placeholder="e.g. 100000"
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
                <Calculator className="h-4 w-4" /> Calculate Revenue
            </button>
            {result && (
                <div className="grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Estimated
                        </p>
                        <p className="text-xl font-black text-primary">
                            $
                            {result.estimated.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })}
                        </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Monthly
                        </p>
                        <p className="text-xl font-black text-primary">
                            $
                            {result.monthly.toLocaleString(undefined, {
                                maximumFractionDigits: 0,
                            })}
                        </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Yearly
                        </p>
                        <p className="text-xl font-black text-primary">
                            $
                            {result.yearly.toLocaleString(undefined, {
                                maximumFractionDigits: 0,
                            })}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- Main Component ---------- */
export default function RevenueCalculatorClient() {
    const [activeTab, setActiveTab] = useState<Tab>("channel");
    const [channelUrl, setChannelUrl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const tabs: {
        id: Tab;
        label: string;
        shortLabel: string;
        icon: React.ReactNode;
    }[] = [
            {
                id: "channel",
                label: "Channel URL or @username",
                shortLabel: "Channel URL",
                icon: <Youtube className="h-4 w-4" />,
            },
            {
                id: "video",
                label: "Video URL",
                shortLabel: "Video URL",
                icon: <Play className="h-4 w-4" />,
            },
            {
                id: "views",
                label: "Calculate by Views",
                shortLabel: "By Views",
                icon: <Calculator className="h-4 w-4" />,
            },
        ];

    return (
        <main>
            {/* ─── Hero Section ─── */}
            <section className="relative w-full overflow-hidden border-b bg-gradient-to-b from-muted/30 to-background">
                <div className="container mx-auto max-w-4xl px-4 pt-12 pb-4 text-center">
                    {/* Bookmark Prompt */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-muted/40 border border-border/50 mb-10">
                        <div className="flex items-center gap-1.5">
                            <kbd className="px-2.5 py-1 rounded-lg bg-card border border-border/50 shadow-sm text-sm font-bold">
                                ctrl
                            </kbd>
                            <span className="text-muted-foreground font-bold">+</span>
                            <kbd className="px-2.5 py-1 rounded-lg bg-card border border-border/50 shadow-sm text-sm font-bold">
                                D
                            </kbd>
                        </div>
                        <span className="text-sm font-bold text-muted-foreground flex items-center gap-1.5">
                            <Bookmark className="h-3.5 w-3.5" /> Bookmark Us!
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6">
                        YouTube{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                            Revenue Calculator
                        </span>
                    </h1>
                    <h2 className="text-sm md:text-base text-muted-foreground font-medium max-w-lg mx-auto">
                        Use our YouTube Revenue Calculator! Enter views, RPM &amp; get
                        instant, accurate earnings estimates for free.
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
                                            placeholder="Paste the YouTube channel URL or username"
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
                {/* Section 1: What Is a YouTube Revenue Calculator */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <HelpCircle className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            What Is a YouTube Revenue Calculator?
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            A YouTube Revenue Calculator is a simple yet powerful tool for
                            estimating how much revenue your YouTube channel or video can
                            generate. By inputting key metrics like total views and RPM
                            (Revenue Per Mille), the calculator provides a revenue estimate
                            based on YouTube&apos;s monetization model.
                        </p>

                        <h3 className="text-lg font-black text-foreground pt-2">
                            How It Works:
                        </h3>
                        <div className="space-y-3">
                            {[
                                {
                                    icon: <BarChart3 className="h-4 w-4" />,
                                    title: "Views",
                                    desc: "Total views from your videos or channel.",
                                },
                                {
                                    icon: <DollarSign className="h-4 w-4" />,
                                    title: "RPM",
                                    desc: "The revenue you earn per 1,000 views, reflecting ad revenue, memberships, and YouTube Premium earnings.",
                                },
                                {
                                    icon: <Calculator className="h-4 w-4" />,
                                    title: "Formula",
                                    desc: "(Total Views ÷ 1,000) × RPM = Estimated Revenue.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50"
                                >
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-sm text-foreground">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm mb-2">
                                <strong className="text-foreground">Example:</strong> If your
                                video has 100,000 views and an RPM of $5:
                            </p>
                            <p className="font-black text-primary text-lg">
                                (100,000 ÷ 1,000) × $5 = $500
                            </p>
                        </div>

                        <p>
                            While these tools are estimates, they provide valuable insights
                            into your earning potential and help creators plan content
                            strategies.
                        </p>
                    </div>
                </section>

                {/* Section 2: How to Calculate Your YouTube Earnings */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Calculator className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            How to Calculate Your YouTube Earnings
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            Calculating your YouTube earnings is easy with the right data.
                            The primary factors you&apos;ll need are total views and RPM.
                        </p>

                        <div className="space-y-3">
                            {[
                                {
                                    title: "Gather Data",
                                    desc: "Look at your video's or channel's total views and find the RPM in YouTube Analytics.",
                                },
                                {
                                    title: "Apply the Formula",
                                    desc: "Use (Total Views ÷ 1,000) × RPM to estimate revenue.",
                                },
                                {
                                    title: "Understand Variables",
                                    desc: "Earnings vary based on niche, region, and viewer engagement.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50"
                                >
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm mb-1 text-foreground">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm mb-2">
                                <strong className="text-foreground">Example:</strong> If a
                                channel gets 500,000 views in a month and has an RPM of $3:
                            </p>
                            <p className="font-black text-primary text-lg">
                                (500,000 ÷ 1,000) × $3 = $1,500
                            </p>
                        </div>

                        <p>
                            Knowing these numbers allows creators to focus on optimizing
                            views, improving RPM, and targeting high-earning niches.
                        </p>
                    </div>
                </section>

                {/* Section 3: Factors That Impact YouTube Revenue */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <TrendingUp className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Factors That Impact YouTube Revenue
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            Several factors influence your{" "}
                            <Link
                                href="/youtube-revenue-estimator"
                                className="text-primary hover:underline font-bold"
                            >
                                YouTube revenue
                            </Link>
                            , from the type of content you produce to the audience watching
                            it. Understanding these variables can help you maximize your
                            income.
                        </p>

                        <div className="space-y-3">
                            {[
                                {
                                    icon: <DollarSign className="h-4 w-4" />,
                                    title: "RPM and CPM",
                                    desc: "RPM is what you earn per 1,000 views, while CPM refers to what advertisers pay per 1,000 ad impressions. Higher RPMs mean better revenue.",
                                },
                                {
                                    icon: <Users className="h-4 w-4" />,
                                    title: "Audience Location",
                                    desc: "Regions like the U.S., Norway, and Australia typically generate higher RPMs compared to regions like India or Southeast Asia.",
                                },
                                {
                                    icon: <Target className="h-4 w-4" />,
                                    title: "Content Niche",
                                    desc: "Niches such as finance, health, and technology often have higher RPMs due to advertiser demand. Gaming or comedy content may yield lower RPMs.",
                                },
                                {
                                    icon: <BarChart3 className="h-4 w-4" />,
                                    title: "Viewer Engagement",
                                    desc: "Higher retention rates and interaction (likes, comments, shares) improve ad performance and revenue.",
                                },
                                {
                                    icon: <Clock className="h-4 w-4" />,
                                    title: "Video Length",
                                    desc: "Videos over 8 minutes allow for mid-roll ads, increasing earning potential.",
                                },
                            ].map((factor, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all"
                                >
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">
                                        {factor.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm mb-1 text-foreground">
                                            {factor.title}
                                        </h3>
                                        <p className="text-sm">{factor.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p>
                            By optimizing these factors, you can increase both views and
                            revenue per view.
                        </p>
                    </div>
                </section>

                {/* Section 4: Why Use a YouTube Revenue Calculator */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Lightbulb className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Why Use a YouTube Revenue Calculator?
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            A YouTube Revenue Calculator is an essential tool for creators
                            and advertisers alike. It provides accurate estimates of
                            earnings, helping creators set realistic expectations and
                            advertisers plan campaigns effectively.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "Content Strategy Planning",
                                    desc: "See which videos perform best and focus on profitable topics.",
                                },
                                {
                                    title: "Monetization Insights",
                                    desc: "Understand how much each view is worth.",
                                },
                                {
                                    title: "Transparency",
                                    desc: "Gain a clear picture of your earning potential.",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all"
                                >
                                    <h3 className="font-black text-sm mb-2 text-foreground flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />{" "}
                                        {item.title}
                                    </h3>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p>
                            Using a{" "}
                            <Link
                                href="/"
                                className="text-primary hover:underline font-bold"
                            >
                                YouTube money calculator
                            </Link>{" "}
                            regularly can guide decisions, helping creators grow their
                            channels more effectively.
                        </p>
                    </div>
                </section>

                {/* Section 5: Tips to Maximize Your YouTube Earnings */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Zap className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                            Tips to Maximize Your YouTube Earnings
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            To increase your YouTube revenue, focus on strategies that
                            improve both views and RPM:
                        </p>

                        <div className="space-y-3">
                            {[
                                {
                                    icon: <Target className="h-4 w-4" />,
                                    title: "Target High-RPM Niches",
                                    desc: "Create videos in lucrative niches like finance, tech, or education.",
                                },
                                {
                                    icon: <Users className="h-4 w-4" />,
                                    title: "Engage Your Audience",
                                    desc: "Use storytelling, quality visuals, and calls-to-action to retain viewers.",
                                },
                                {
                                    icon: <Clock className="h-4 w-4" />,
                                    title: "Optimize for Longer Watch Times",
                                    desc: "Videos over 8 minutes allow mid-roll ads, which boost revenue.",
                                },
                                {
                                    icon: <Film className="h-4 w-4" />,
                                    title: "Enable Multiple Ad Formats",
                                    desc: "Use skippable ads, non-skippable ads, and display ads for diverse monetization.",
                                },
                                {
                                    icon: <TrendingUp className="h-4 w-4" />,
                                    title: "Expand to High-RPM Regions",
                                    desc: "Use subtitles or produce content in English to attract viewers from high-paying countries.",
                                },
                            ].map((tip, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all"
                                >
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">
                                        {tip.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-sm mb-1 text-foreground">
                                            {tip.title}
                                        </h3>
                                        <p className="text-sm">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p>
                            Consistency, data analysis, and understanding your audience are
                            key to improving YouTube earnings.
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
                    <div className="w-64 h-52 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                        <Send className="h-20 w-20 text-primary/30" />
                    </div>
                    <div className="p-8 rounded-[2rem] bg-card border border-border/50 w-full max-w-sm shadow-xl">
                        <p className="text-xl font-black mb-6">
                            Enter your email address to stay in touch
                        </p>
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
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                        Frequently Asked Questions
                    </h2>
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
                                    className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openFaq === i
                                            ? "bg-primary/20 text-primary"
                                            : "bg-muted/40 text-muted-foreground"
                                        }`}
                                >
                                    {openFaq === i ? (
                                        <ChevronUp className="h-4 w-4" />
                                    ) : (
                                        <ChevronDown className="h-4 w-4" />
                                    )}
                                </div>
                            </button>
                            {openFaq === i && (
                                <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-1 duration-300">
                                    <div className="h-px bg-border/50 mb-4" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-4 rounded-full bg-muted/20 border border-border/50 flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
                    <span className="text-muted-foreground">
                        Didn&apos;t find the answer you&apos;re looking for?
                    </span>
                    <Link
                        href="/contact"
                        className="text-primary font-bold hover:underline flex items-center gap-1"
                    >
                        Contact us <ArrowRight className="h-3 w-3" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
