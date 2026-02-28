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
    Zap,
    Send,
    ArrowRight,
    HelpCircle,
    Clock,
    Users,
    Globe,
    Shield,
    Star,
    CreditCard,
    MessageSquare,
    MapPin,
} from "lucide-react";

type Tab = "channel" | "video" | "views";

const faqs = [
    {
        q: "What is CPM in YouTube's pay scale?",
        a: "CPM stands for Cost Per Mille, which is the amount advertisers pay per 1,000 ad impressions. It varies based on factors like audience location, content niche, and seasonality.",
    },
    {
        q: "What is RPM, and how does it differ from CPM?",
        a: "RPM (Revenue Per Mille) represents the actual revenue a creator earns per 1,000 views, while CPM measures what advertisers pay per 1,000 ad impressions. RPM accounts for YouTube's revenue share and includes all monetization streams.",
    },
    {
        q: "How does YouTube Premium impact earnings?",
        a: "YouTube Premium contributes to creator earnings by sharing subscription revenue based on the watch time of Premium members.",
    },
    {
        q: "What factors affect RPM?",
        a: "RPM is influenced by audience demographics, content niche, engagement levels, ad types, and seasonal trends.",
    },
    {
        q: "How do I increase my earnings under YouTube's pay scale?",
        a: "Focus on creating high-quality content in lucrative niches, improving viewer retention, targeting high-paying regions, and diversifying revenue streams through memberships and merchandise.",
    },
    {
        q: "Why do earnings vary by region?",
        a: "Earnings vary because advertisers pay more for impressions in regions with higher purchasing power and advertiser demand, such as the U.S. and Europe.",
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
                <Calculator className="h-4 w-4" /> Calculate Earnings
            </button>
            {result && (
                <div className="grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Estimated
                        </p>
                        <p className="text-xl font-black text-primary">
                            ${result.estimated.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Monthly
                        </p>
                        <p className="text-xl font-black text-primary">
                            ${result.monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                            Yearly
                        </p>
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
export default function PayScaleClient() {
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
            {/* ─── Hero ─── */}
            <section className="relative w-full overflow-hidden border-b bg-gradient-to-b from-muted/30 to-background">
                <div className="container mx-auto max-w-4xl px-4 pt-12 pb-4 text-center">
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
                        YouTube{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                            Pay Scale
                        </span>
                    </h1>
                    <h2 className="text-sm md:text-base text-muted-foreground font-medium max-w-lg mx-auto">
                        Understand the YouTube Pay Scale! Learn CPM, RPM, and maximize your YouTube earnings effortlessly.
                    </h2>
                </div>
            </section>

            {/* ─── Calculator Widget ─── */}
            <section className="container mx-auto max-w-2xl px-4 -mt-2 mb-24">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                    <div className="relative bg-card border border-border/50 rounded-[2rem] p-6 md:p-8 shadow-2xl">
                        <div className="flex rounded-2xl bg-muted/30 border border-border/50 p-1 mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? "bg-card shadow-lg text-foreground" : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {tab.icon}
                                    <span className="hidden md:inline">{tab.label}</span>
                                    <span className="md:hidden text-xs">{tab.shortLabel}</span>
                                </button>
                            ))}
                        </div>
                        {activeTab === "channel" && (
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <input type="text" value={channelUrl} onChange={(e) => setChannelUrl(e.target.value)} placeholder="Paste the YouTube channel URL or username" className="w-full h-14 pl-12 pr-4 rounded-2xl bg-muted/20 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all placeholder:font-normal placeholder:text-sm" />
                                </div>
                                <Link href="/" className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap">
                                    <Zap className="h-4 w-4" /> Analyze Channel
                                </Link>
                            </div>
                        )}
                        {activeTab === "video" && (
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Play className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <input type="text" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="Paste the YouTube video URL" className="w-full h-14 pl-12 pr-4 rounded-2xl bg-muted/20 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all placeholder:font-normal placeholder:text-sm" />
                                </div>
                                <Link href="/" className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap">
                                    <Zap className="h-4 w-4" /> Analyze Video
                                </Link>
                            </div>
                        )}
                        {activeTab === "views" && <ViewsCalculator />}
                    </div>
                </div>
            </section>

            {/* ─── Article ─── */}
            <article className="container mx-auto max-w-3xl px-4">
                {/* Section 1: What Is the YouTube Pay Scale */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><HelpCircle className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">What Is the YouTube Pay Scale?</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            The YouTube pay scale refers to the structure used by YouTube to compensate creators for their content. This includes revenue from ads, memberships, Super Chats, and YouTube Premium. The amount creators earn depends on metrics like total views, RPM (Revenue Per Mille), and CPM (Cost Per Mille).
                        </p>
                        <h3 className="text-lg font-black text-foreground pt-2">Key Elements of the YouTube Pay Scale:</h3>
                        <div className="space-y-3">
                            {[
                                { icon: <BarChart3 className="h-4 w-4" />, title: "CPM (Cost Per Mille)", desc: "The amount advertisers pay per 1,000 ad impressions. CPM varies by niche, audience demographics, and location." },
                                { icon: <DollarSign className="h-4 w-4" />, title: "RPM (Revenue Per Mille)", desc: "The actual revenue creators earn per 1,000 views after YouTube's share is deducted." },
                                { icon: <TrendingUp className="h-4 w-4" />, title: "Revenue Streams", desc: "Includes ad revenue, memberships, merchandise sales, YouTube Premium income, and Super Chats during live streams." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="font-black text-sm text-foreground">{item.title}</h4>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm mb-2"><strong className="text-foreground">Example:</strong> If a video generates 100,000 views with an RPM of $5:</p>
                            <p className="font-black text-primary text-lg">(100,000 ÷ 1,000) × $5 = $500</p>
                        </div>
                        <p>Understanding these elements helps creators set realistic expectations and plan content strategies.</p>
                    </div>
                </section>

                {/* Section 2: How YouTube Pays Creators */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><CreditCard className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">How YouTube Pays Creators</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            YouTube compensates creators through a revenue-sharing model. Creators receive <strong className="text-foreground">55% of ad revenue</strong>, while YouTube retains 45%. Earnings are influenced by various factors, including viewer engagement, region, and content type.
                        </p>
                        <h3 className="text-lg font-black text-foreground pt-2">How Payments Are Calculated:</h3>
                        <div className="space-y-3">
                            {[
                                { icon: <BarChart3 className="h-4 w-4" />, title: "Ad Revenue", desc: "Creators earn a share of revenue from ads displayed on their videos. The more views and ad impressions, the higher the earnings." },
                                { icon: <Users className="h-4 w-4" />, title: "Memberships", desc: "Fans can subscribe to channels for exclusive perks, contributing to monthly revenue." },
                                { icon: <Star className="h-4 w-4" />, title: "YouTube Premium", desc: "Creators earn a share of subscription revenue from Premium members who watch their content." },
                                { icon: <MessageSquare className="h-4 w-4" />, title: "Super Chats and Stickers", desc: "Live stream viewers can make payments to interact with creators, adding another revenue stream." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="font-black text-sm mb-1 text-foreground">{item.title}</h4>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-5 rounded-2xl bg-muted/20 border border-border/50 flex items-start gap-3">
                            <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <p className="text-sm">Creators receive payments monthly through AdSense once they meet the payment threshold of <strong className="text-foreground">$100</strong>.</p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Factors That Affect */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Target className="h-5 w-5" /></div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight">Factors That Affect the YouTube Pay Scale</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>Several factors influence how much a creator earns on YouTube. These include:</p>
                        <div className="space-y-3">
                            {[
                                { icon: <MapPin className="h-4 w-4" />, title: "Audience Location", desc: "Viewers in high-paying regions like the U.S., Norway, and Australia generate higher RPMs compared to viewers in lower-paying regions like India or Southeast Asia." },
                                { icon: <Target className="h-4 w-4" />, title: "Content Niche", desc: "Niches with high advertiser demand, such as finance, technology, and health, typically have higher CPMs and RPMs." },
                                { icon: <Users className="h-4 w-4" />, title: "Viewer Engagement", desc: "High retention rates and frequent interactions (likes, comments, shares) improve ad performance and revenue." },
                                { icon: <Clock className="h-4 w-4" />, title: "Video Length", desc: "Videos over 8 minutes allow for mid-roll ads, increasing the total ad impressions and earnings." },
                                { icon: <Lightbulb className="h-4 w-4" />, title: "Ad Types", desc: "Non-skippable ads and bumper ads often generate higher CPMs than skippable ads." },
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{f.icon}</div>
                                    <div>
                                        <h4 className="font-black text-sm mb-1 text-foreground">{f.title}</h4>
                                        <p className="text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>By optimizing these factors, creators can significantly increase their earnings potential.</p>
                    </div>
                </section>

                {/* Section 4: Pay Scale by Region */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Globe className="h-5 w-5" /></div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight">YouTube Pay Scale by Region</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>The amount creators earn on YouTube varies significantly by region. Advertiser demand and viewer demographics play a major role in determining RPM and CPM rates.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-card border border-primary/20">
                                <h4 className="font-black text-sm text-foreground mb-4 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> High-Paying Regions</h4>
                                <div className="space-y-3">
                                    {[
                                        { country: "United States", rpm: "$8–$15" },
                                        { country: "Norway", rpm: "$10–$20" },
                                        { country: "Australia", rpm: "$9–$15" },
                                        { country: "United Kingdom", rpm: "$7–$12" },
                                    ].map((r, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                                            <span className="text-sm font-bold text-foreground">{r.country}</span>
                                            <span className="text-sm font-black text-primary">{r.rpm} RPM</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-5 rounded-2xl bg-card border border-border/50">
                                <h4 className="font-black text-sm text-foreground mb-4 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-muted-foreground" /> Lower-Paying Regions</h4>
                                <div className="space-y-3">
                                    {[
                                        { country: "India", rpm: "$0.50–$2" },
                                        { country: "Philippines", rpm: "$0.50–$1.50" },
                                        { country: "Indonesia", rpm: "$0.50–$1" },
                                    ].map((r, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-border/30 last:border-0">
                                            <span className="text-sm font-bold text-foreground">{r.country}</span>
                                            <span className="text-sm font-black text-muted-foreground">{r.rpm} RPM</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p>
                            Targeting audiences in high-paying regions through content localization or subtitles can help boost revenue. Use our{" "}
                            <Link href="/cpm-by-country" className="text-primary hover:underline font-bold">CPM by Country</Link> tool for detailed rates.
                        </p>
                    </div>
                </section>

                {/* Section 5: How to Maximize */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Zap className="h-5 w-5" /></div>
                        <h3 className="text-2xl md:text-3xl font-black tracking-tight">How to Maximize Your Earnings on YouTube</h3>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>To get the most out of YouTube&apos;s pay scale, creators should focus on strategies that improve both views and RPM.</p>
                        <div className="space-y-3">
                            {[
                                { icon: <Target className="h-4 w-4" />, title: "Create Content in High-RPM Niches", desc: "Focus on topics with high advertiser demand, such as finance, education, or technology." },
                                { icon: <Users className="h-4 w-4" />, title: "Optimize Audience Retention", desc: "Engage viewers with high-quality content and calls-to-action to keep them watching longer." },
                                { icon: <DollarSign className="h-4 w-4" />, title: "Enable All Ad Formats", desc: <>Use <Link href="/" className="text-primary hover:underline font-bold">YouTube money calculator</Link> to estimate revenue from skippable ads, non-skippable ads, and mid-roll ads.</> },
                                { icon: <Globe className="h-4 w-4" />, title: "Target High-Paying Regions", desc: "Use English or add subtitles to reach audiences in countries with higher RPMs." },
                                { icon: <TrendingUp className="h-4 w-4" />, title: "Diversify Revenue Streams", desc: "Explore memberships, Super Chats, and merchandise to supplement ad revenue." },
                            ].map((tip, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{tip.icon}</div>
                                    <div>
                                        <h4 className="font-black text-sm mb-1 text-foreground">{tip.title}</h4>
                                        <p className="text-sm">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>Consistency, audience engagement, and a data-driven approach are key to maximizing your YouTube earnings.</p>
                    </div>
                </section>
            </article>

            {/* ─── Newsletter ─── */}
            <section className="container mx-auto max-w-4xl px-4 my-24">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-16">Subscribe to Our Newsletter</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <div className="w-64 h-52 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                        <Send className="h-20 w-20 text-primary/30" />
                    </div>
                    <div className="p-8 rounded-[2rem] bg-card border border-border/50 w-full max-w-sm shadow-xl">
                        <p className="text-xl font-black mb-6">Enter your email address to stay in touch</p>
                        <input type="email" placeholder="example@gmail.com" className="w-full h-12 px-4 rounded-xl border border-border/50 bg-muted/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-medium mb-4 transition-all" />
                        <button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20 active:scale-[0.98]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="container mx-auto max-w-3xl px-4 my-24">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
                        <HelpCircle className="h-3 w-3" /> FAQ
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`rounded-2xl border transition-all ${openFaq === i ? "bg-primary/5 border-primary/20" : "bg-card border-border/50 hover:border-primary/10"}`}>
                            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                                <h3 className="font-bold text-sm md:text-base">{faq.q}</h3>
                                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? "bg-primary/20 text-primary" : "bg-muted/40 text-muted-foreground"}`}>
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
