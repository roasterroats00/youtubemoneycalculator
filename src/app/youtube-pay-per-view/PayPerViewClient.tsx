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
    Zap,
    Send,
    ArrowRight,
    HelpCircle,
    Clock,
    Users,
    Globe,
    Eye,
    Film,
    CalendarDays,
} from "lucide-react";

type Tab = "channel" | "video" | "views";

const faqs = [
    {
        q: "Does YouTube pay for every view?",
        a: "No, YouTube does not pay for every view. Only views with monetized ads or from YouTube Premium subscribers generate revenue.",
    },
    {
        q: "How much does YouTube pay per view on average?",
        a: "YouTube pays between $0.003 and $0.01 per view on average, depending on factors like RPM, niche, and audience location.",
    },
    {
        q: "What is the highest pay per view on YouTube?",
        a: "Channels in high-paying niches, such as finance or tech, can earn up to $0.01 per view or higher with premium audiences and optimal monetization.",
    },
    {
        q: "How can I increase my pay per view on YouTube?",
        a: "You can increase your pay per view by targeting high-RPM niches, optimizing viewer retention, enabling mid-roll ads, and focusing on audiences from high-paying regions.",
    },
    {
        q: "Does content type affect pay per view?",
        a: "Yes, content type significantly impacts pay per view. High-demand topics with active advertisers, like health or business, usually pay more per view.",
    },
    {
        q: "Why do earnings vary across regions?",
        a: "Earnings vary because advertisers in high-income regions are willing to pay more for ads, increasing CPM and RPM rates in those areas.",
    },
];

/* ---------- Views Calculator ---------- */
function ViewsCalculator() {
    const [views, setViews] = useState("");
    const [rpm, setRpm] = useState("5");
    const [result, setResult] = useState<{
        estimated: number;
        perView: number;
        monthly: number;
        yearly: number;
    } | null>(null);

    const calculate = () => {
        const v = parseFloat(views) || 0;
        const r = parseFloat(rpm) || 0;
        const estimated = (v * r) / 1000;
        const perView = v > 0 ? estimated / v : 0;
        setResult({ estimated, perView, monthly: estimated, yearly: estimated * 12 });
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
                <Calculator className="h-4 w-4" /> Calculate Pay Per View
            </button>
            {result && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Per View</p>
                        <p className="text-lg font-black text-primary">${result.perView.toFixed(5)}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Estimated</p>
                        <p className="text-lg font-black text-primary">${result.estimated.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Monthly</p>
                        <p className="text-lg font-black text-primary">${result.monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Yearly</p>
                        <p className="text-lg font-black text-primary">${result.yearly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- Main Component ---------- */
export default function PayPerViewClient() {
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
                            Pay Per View
                        </span>
                    </h1>
                    <h2 className="text-sm md:text-base text-muted-foreground font-medium max-w-lg mx-auto">
                        Discover how much YouTube pays per view! Our guide breaks down RPM, CPM, and key earning factors.
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
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? "bg-card shadow-lg text-foreground" : "text-muted-foreground hover:text-foreground"}`}
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

                {/* Section 1: What Is YouTube Pay Per View */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><HelpCircle className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">What Is YouTube Pay Per View?</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            YouTube Pay Per View refers to the estimated earnings a creator receives for each view on their content. While YouTube doesn&apos;t pay a fixed amount per view, the revenue generated per view depends on factors such as ad impressions, RPM, and viewer engagement.
                        </p>
                        <h3 className="text-lg font-black text-foreground pt-2">Key Metrics That Influence Pay Per View:</h3>
                        <div className="space-y-3">
                            {[
                                { icon: <DollarSign className="h-4 w-4" />, title: "RPM (Revenue Per Mille)", desc: "The actual revenue a creator earns per 1,000 views." },
                                { icon: <Eye className="h-4 w-4" />, title: "Ad Impressions", desc: "Not all views show ads; only monetized views contribute to revenue." },
                                { icon: <Globe className="h-4 w-4" />, title: "Viewer Demographics", desc: "Audiences in high-paying regions generate more revenue." },
                                { icon: <Target className="h-4 w-4" />, title: "Content Niche", desc: "High-demand topics, like finance or tech, yield better pay per view." },
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
                            <p className="text-sm mb-2"><strong className="text-foreground">Example:</strong> If a video generates 10,000 views and the RPM is $5, the creator earns $50.</p>
                            <p className="font-black text-primary text-lg">Pay Per View = $50 ÷ 10,000 = $0.005</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: How Much Does YouTube Pay Per View */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><DollarSign className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">How Much Does YouTube Pay Per View?</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            YouTube&apos;s pay per view varies significantly depending on several factors. On average, creators earn between <strong className="text-foreground">$0.003 and $0.01 per view</strong>. However, high-performing niches and premium audiences can exceed this range.
                        </p>
                        <h3 className="text-lg font-black text-foreground pt-2">Example Scenarios:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-2xl bg-card border border-border/50">
                                <div className="flex items-center gap-2 mb-3">
                                    <BarChart3 className="h-4 w-4 text-primary" />
                                    <h4 className="font-black text-sm text-foreground">Standard RPM ($5)</h4>
                                </div>
                                <p className="text-sm mb-2">100,000 views × $5 RPM</p>
                                <p className="font-black text-primary">= $500 (<span className="text-sm">$0.005/view</span>)</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-card border border-primary/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="h-4 w-4 text-primary" />
                                    <h4 className="font-black text-sm text-foreground">High-RPM Niche ($10)</h4>
                                </div>
                                <p className="text-sm mb-2">100,000 views × $10 RPM</p>
                                <p className="font-black text-primary">= $1,000 (<span className="text-sm">$0.01/view</span>)</p>
                            </div>
                        </div>
                        <p>While individual views generate only fractions of a cent, the cumulative effect of large view counts creates significant revenue.</p>
                    </div>
                </section>

                {/* Section 3: Factors That Affect */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Target className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Factors That Affect YouTube Pay Per View</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>Several variables impact how much YouTube pays per view. Understanding these factors can help creators strategize effectively.</p>
                        <div className="space-y-3">
                            {[
                                { icon: <Globe className="h-4 w-4" />, title: "Audience Location", desc: "Viewers from regions like the U.S., Canada, and Australia contribute more revenue than viewers in regions like India or Southeast Asia." },
                                { icon: <Film className="h-4 w-4" />, title: "Ad Type and Placement", desc: "Non-skippable ads and mid-roll ads pay more compared to skippable ads. Videos with multiple ad breaks generate higher earnings." },
                                { icon: <Target className="h-4 w-4" />, title: "Content Niche", desc: "Advertisers pay higher rates for niches like finance, technology, and health compared to lifestyle or entertainment." },
                                { icon: <Users className="h-4 w-4" />, title: "Engagement and Retention", desc: "Videos with higher retention rates and more interactions (likes, comments, shares) tend to generate better pay per view." },
                                { icon: <CalendarDays className="h-4 w-4" />, title: "Seasonality", desc: "During peak seasons, such as holidays, advertisers spend more, increasing CPM and RPM rates." },
                            ].map((f, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{f.icon}</div>
                                    <div>
                                        <h4 className="font-black text-sm mb-1 text-foreground">{f.title}</h4>
                                        <p className="text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: How to Calculate */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Calculator className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">How to Calculate YouTube Pay Per View</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>You can calculate your approximate pay per view by using the RPM metric. The formula is simple:</p>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                            <p className="text-sm text-muted-foreground mb-2">Formula</p>
                            <p className="font-black text-primary text-xl md:text-2xl">Pay Per View = RPM ÷ 1,000</p>
                        </div>
                        <h3 className="text-lg font-black text-foreground pt-2">Example Calculations:</h3>
                        <div className="space-y-3">
                            {[
                                { rpm: "$5", result: "$5 ÷ 1,000 = $0.005 per view" },
                                { rpm: "$10", result: "$10 ÷ 1,000 = $0.01 per view" },
                            ].map((ex, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{i + 1}</div>
                                    <div>
                                        <h4 className="font-black text-sm mb-1 text-foreground">RPM of {ex.rpm}</h4>
                                        <p className="text-sm font-bold text-primary">{ex.result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>
                            Understanding this formula helps creators set realistic expectations and plan their content strategies. Use our{" "}
                            <Link href="/" className="text-primary hover:underline font-bold">YouTube money calculator</Link> to estimate revenue instantly.
                        </p>
                    </div>
                </section>

                {/* Section 5: Tips to Maximize */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Zap className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Tips to Maximize Your YouTube Pay Per View</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>Increasing your pay per view requires optimizing multiple aspects of your channel and content. Here&apos;s how you can improve:</p>
                        <div className="space-y-3">
                            {[
                                { icon: <Target className="h-4 w-4" />, title: "Target High-RPM Niches", desc: "Create content on topics like personal finance, education, or technology to attract higher-paying ads." },
                                { icon: <Users className="h-4 w-4" />, title: "Engage Viewers Longer", desc: "Focus on quality storytelling and professional editing to retain viewers and increase ad impressions." },
                                { icon: <Clock className="h-4 w-4" />, title: "Optimize Video Length", desc: "Videos over 8 minutes allow for mid-roll ads, significantly boosting earnings per view." },
                                { icon: <Globe className="h-4 w-4" />, title: "Reach Premium Regions", desc: "Use subtitles or create English content to attract audiences from high-paying regions like the U.S. or Europe." },
                                { icon: <Film className="h-4 w-4" />, title: "Enable All Ad Formats", desc: "Use skippable ads, non-skippable ads, and mid-roll ads for diverse monetization." },
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
