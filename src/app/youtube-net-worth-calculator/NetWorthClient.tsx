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
    Users,
    Globe,
    Gem,
    Briefcase,
    LineChart,
    Heart,
    ShieldCheck,
} from "lucide-react";

type Tab = "channel" | "video" | "views";

const faqs = [
    {
        q: "How is YouTube net worth calculated?",
        a: "YouTube net worth is calculated by multiplying a channel's annual revenue by a valuation multiplier (typically 2–5x). Additional factors like niche demand, engagement, and growth potential also influence the valuation.",
    },
    {
        q: "What is a valuation multiplier?",
        a: "A valuation multiplier is a number used to estimate a channel's worth based on its niche, engagement, and revenue streams. High-demand niches typically have higher multipliers.",
    },
    {
        q: "Does subscriber count affect net worth?",
        a: "Yes, a large and loyal subscriber base adds value to a channel by increasing its potential for long-term revenue and partnerships.",
    },
    {
        q: "Can I sell my YouTube channel?",
        a: "Yes, YouTube channels can be sold as assets. Platforms like Flippa or private agreements allow creators to monetize their channels' net worth.",
    },
    {
        q: "What is the average net worth of a successful YouTube channel?",
        a: "The net worth varies widely. Small channels earning $1,000 monthly may be worth $30,000–$60,000, while larger channels earning $10,000+ monthly can exceed $500,000 in value.",
    },
    {
        q: "How do sponsorships impact net worth?",
        a: "Sponsorships significantly increase net worth by providing additional revenue streams and highlighting the channel's value to brands.",
    },
];

/* ---------- Views / Net Worth Calculator ---------- */
function NetWorthCalc() {
    const [monthlyRev, setMonthlyRev] = useState("");
    const [multiplier, setMultiplier] = useState("3");
    const [result, setResult] = useState<{
        annual: number;
        netWorth: number;
        low: number;
        high: number;
    } | null>(null);

    const calculate = () => {
        const m = parseFloat(monthlyRev) || 0;
        const x = parseFloat(multiplier) || 3;
        const annual = m * 12;
        const netWorth = annual * x;
        setResult({ annual, netWorth, low: annual * 2, high: annual * 5 });
    };

    return (
        <div className="space-y-5">
            <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                    Average Monthly Revenue ($)
                </label>
                <input
                    type="number"
                    value={monthlyRev}
                    onChange={(e) => setMonthlyRev(e.target.value)}
                    placeholder="e.g. 5000"
                    className="w-full h-14 px-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all"
                />
            </div>
            <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 block">
                    Valuation Multiplier (2–5x)
                </label>
                <input
                    type="number"
                    value={multiplier}
                    onChange={(e) => setMultiplier(e.target.value)}
                    placeholder="3"
                    min="1"
                    max="10"
                    step="0.5"
                    className="w-full h-14 px-4 rounded-2xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none font-bold transition-all"
                />
            </div>
            <button
                onClick={calculate}
                className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
                <Gem className="h-4 w-4" /> Calculate Net Worth
            </button>
            {result && (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Estimated Net Worth</p>
                        <p className="text-3xl font-black text-primary">${result.netWorth.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="p-4 rounded-2xl bg-card border border-border/50 text-center">
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Annual Rev</p>
                            <p className="text-lg font-black text-foreground">${result.annual.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-card border border-border/50 text-center">
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">Low (2x)</p>
                            <p className="text-lg font-black text-foreground">${result.low.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-card border border-border/50 text-center">
                            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mb-1">High (5x)</p>
                            <p className="text-lg font-black text-foreground">${result.high.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ---------- Main Component ---------- */
export default function NetWorthClient() {
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
                            Net Worth Calculator
                        </span>
                    </h1>
                    <h2 className="text-sm md:text-base text-muted-foreground font-medium max-w-lg mx-auto">
                        Uncover your YouTube channel&apos;s true worth! Learn key factors, valuation methods, and maximize your value.
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
                        {activeTab === "views" && <NetWorthCalc />}
                    </div>
                </div>
            </section>

            {/* ─── Article ─── */}
            <article className="container mx-auto max-w-3xl px-4">

                {/* Section 1: What Is YouTube Net Worth */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Gem className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">What Is YouTube Net Worth?</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            YouTube net worth refers to the total value of a channel, considering its revenue streams, audience reach, brand partnerships, and future earning potential. It&apos;s an estimate of how much a channel is worth if it were to be sold or evaluated as an asset.
                        </p>
                        <h3 className="text-lg font-black text-foreground pt-2">Key Factors That Contribute to YouTube Net Worth:</h3>
                        <div className="space-y-3">
                            {[
                                { icon: <DollarSign className="h-4 w-4" />, title: "Earnings", desc: "Revenue from ads, memberships, merchandise, sponsorships, and YouTube Premium." },
                                { icon: <Users className="h-4 w-4" />, title: "Audience Size", desc: "The number of subscribers and consistent viewership levels." },
                                { icon: <Heart className="h-4 w-4" />, title: "Engagement Rates", desc: "Metrics like likes, comments, and shares that show audience loyalty." },
                                { icon: <Target className="h-4 w-4" />, title: "Niche Demand", desc: "Channels in high-demand niches like finance or health often have higher valuations." },
                                { icon: <TrendingUp className="h-4 w-4" />, title: "Growth Potential", desc: "The channel's ability to scale earnings through additional content and partnerships." },
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
                            <p className="text-sm mb-2"><strong className="text-foreground">Example:</strong> A channel earning $10,000 monthly with a high growth rate and strong audience engagement could be worth:</p>
                            <p className="font-black text-primary text-lg">$10,000 × 12 × 3x = $360,000</p>
                        </div>
                    </div>
                </section>

                {/* Section 2: How to Calculate */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Calculator className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">How to Calculate the Net Worth of a YouTube Channel</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>
                            Calculating a YouTube channel&apos;s net worth involves estimating its annual revenue and applying a multiplier based on its niche, audience, and growth potential.
                        </p>
                        <h3 className="text-lg font-black text-foreground pt-2">Step-by-Step Process:</h3>
                        <div className="space-y-3">
                            {[
                                { step: "1", title: "Determine Annual Revenue", desc: "Multiply the channel's average monthly income by 12." },
                                { step: "2", title: "Apply a Valuation Multiplier", desc: "Use a multiplier of 2–5x, depending on the niche and engagement." },
                                { step: "3", title: "Consider Other Revenue Streams", desc: "Include sponsorships, affiliate marketing, and merchandise sales." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border/50">
                                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{item.step}</div>
                                    <div>
                                        <h4 className="font-black text-sm text-foreground">{item.title}</h4>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm font-black text-foreground mb-3">Example Calculation:</p>
                            <div className="space-y-1 text-sm">
                                <p>Monthly Revenue: <strong className="text-foreground">$5,000</strong></p>
                                <p>Annual Revenue: <strong className="text-foreground">$5,000 × 12 = $60,000</strong></p>
                                <p>Multiplier: <strong className="text-foreground">3x</strong> (high-demand niche with strong engagement)</p>
                            </div>
                            <p className="font-black text-primary text-xl mt-3">Net Worth: $60,000 × 3 = $180,000</p>
                        </div>
                        <p>
                            <Link href="/" className="text-primary hover:underline font-bold">YouTube Money</Link> calculation provides a general estimate but may vary based on market trends and buyer interest.
                        </p>
                    </div>
                </section>

                {/* Section 3: Factors That Affect */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><BarChart3 className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Factors That Affect YouTube Net Worth</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>The value of a YouTube channel depends on multiple variables that go beyond just revenue. Here are the most important factors:</p>
                        <div className="space-y-3">
                            {[
                                { icon: <DollarSign className="h-4 w-4" />, title: "Revenue Streams", desc: "Channels with diversified income sources (e.g., ads, memberships, merchandise) are more valuable." },
                                { icon: <Users className="h-4 w-4" />, title: "Subscriber Base", desc: "A large, loyal subscriber base increases a channel's worth." },
                                { icon: <Heart className="h-4 w-4" />, title: "Engagement Metrics", desc: "High engagement rates indicate an active audience, boosting channel valuation." },
                                { icon: <Target className="h-4 w-4" />, title: "Content Niche", desc: "Channels in niches like personal finance, tech reviews, or health command higher net worths due to advertiser demand." },
                                { icon: <LineChart className="h-4 w-4" />, title: "Growth Trends", desc: "Consistent growth in subscribers and revenue makes a channel more attractive to buyers or investors." },
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
                    </div>
                </section>

                {/* Section 4: Why Knowing Net Worth Matters */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><ShieldCheck className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Why Knowing Your YouTube Net Worth Matters</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>Understanding your channel&apos;s net worth is important for creators who want to plan their next steps effectively. Here&apos;s why it matters:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: <Briefcase className="h-4 w-4" />, title: "Attracting Investors", desc: "Knowing your channel's value helps secure investments or partnerships." },
                                { icon: <DollarSign className="h-4 w-4" />, title: "Selling Your Channel", desc: "A calculated net worth allows you to set a fair market price if you choose to sell." },
                                { icon: <TrendingUp className="h-4 w-4" />, title: "Business Expansion", desc: "Assessing net worth helps creators plan for scaling content or launching new revenue streams." },
                                { icon: <Target className="h-4 w-4" />, title: "Strategic Planning", desc: "It helps creators focus on improving areas that increase valuation, like engagement or audience size." },
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">{item.icon}</div>
                                        <h4 className="font-black text-sm text-foreground">{item.title}</h4>
                                    </div>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Tips to Increase */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Zap className="h-5 w-5" /></div>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Tips to Increase Your YouTube Net Worth</h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground font-medium leading-relaxed">
                        <p>Looking to boost the value of your YouTube channel? Here are some proven strategies:</p>
                        <div className="space-y-3">
                            {[
                                { icon: <Globe className="h-4 w-4" />, title: "Diversify Revenue Streams", desc: "Explore sponsorships, merchandise, affiliate marketing, and memberships." },
                                { icon: <Heart className="h-4 w-4" />, title: "Increase Subscriber Loyalty", desc: "Focus on building a strong connection with your audience to improve retention and engagement." },
                                { icon: <Target className="h-4 w-4" />, title: "Target High-Value Niches", desc: "Create content in lucrative niches like finance, education, or health." },
                                { icon: <ShieldCheck className="h-4 w-4" />, title: "Invest in Content Quality", desc: "Use professional equipment, editing, and SEO optimization to attract more viewers and advertisers." },
                                { icon: <BarChart3 className="h-4 w-4" />, title: "Analyze and Adjust", desc: "Regularly review analytics to identify areas for improvement, such as viewer retention or underperforming content." },
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
