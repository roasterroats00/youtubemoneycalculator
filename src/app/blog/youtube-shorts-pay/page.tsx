import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import {
    CalendarDays, Clock, TrendingUp, DollarSign,
    BarChart3, ArrowRight, ChevronRight, Zap, Video, HelpCircle, Smartphone
} from "lucide-react";

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
    title: "YouTube Shorts Pay in 2026: How Much Can You REALLY Earn? (RPM Data Inside)",
    description:
        "Complete guide to YouTube Shorts monetization in 2026. Real RPM data ($0.04–$0.20), how the revenue sharing model works, Shorts vs long-form earnings comparison, and strategies to maximize your Shorts income.",
    keywords: [
        "youtube shorts pay",
        "youtube shorts rpm",
        "youtube shorts monetization",
        "youtube shorts earnings",
        "how much do youtube shorts pay",
        "youtube shorts revenue",
        "shorts monetization 2026",
        "youtube shorts money",
        "shorts vs long form earnings",
    ],
    openGraph: {
        title: "YouTube Shorts Pay in 2026: How Much Can You Earn?",
        description: "Real RPM data and earnings breakdown for YouTube Shorts monetization in 2026.",
        type: "article",
        images: [{ url: "/upload/blog/youtube-shorts-pay.png", width: 1200, height: 630, alt: "YouTube Shorts Pay 2026 – RPM & Earnings Guide" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Shorts Pay 2026 (RPM Data Inside)",
        description: "How much do YouTube Shorts actually pay? Real data revealed.",
        images: ["/upload/blog/youtube-shorts-pay.png"],
    },
    alternates: { canonical: "https://youtubemoneycalculator.net/blog/youtube-shorts-pay" },
};

/* ─── Structured Data ─── */
const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "YouTube Shorts Pay in 2026: How Much Can You REALLY Earn?",
    description: "Complete guide to YouTube Shorts monetization in 2026 with real RPM data, revenue sharing model explanation, and earning strategies.",
    image: "https://youtubemoneycalculator.net/upload/blog/youtube-shorts-pay.png",
    author: { "@type": "Organization", name: "YouTube Money Calculator" },
    publisher: { "@type": "Organization", name: "YouTube Money Calculator", logo: { "@type": "ImageObject", url: "https://youtubemoneycalculator.net/upload/youtubemoneycalculator.net.png" } },
    datePublished: "2026-03-07", dateModified: "2026-03-07",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://youtubemoneycalculator.net/blog/youtube-shorts-pay" },
};

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How much does YouTube Shorts pay per 1,000 views?", acceptedAnswer: { "@type": "Answer", text: "YouTube Shorts typically pay $0.04–$0.20 per 1,000 views (RPM), meaning 1,000 views earns approximately $0.04–$0.20. This is significantly lower than long-form content which earns $3–$15 RPM." } },
        { "@type": "Question", name: "How does YouTube Shorts monetization work?", acceptedAnswer: { "@type": "Answer", text: "YouTube pools ad revenue from ads displayed between Shorts in the feed, then distributes it to creators based on their share of total Shorts views. Creators receive 45% of their allocated revenue (vs 55% for long-form content)." } },
        { "@type": "Question", name: "Can you make a living from YouTube Shorts?", acceptedAnswer: { "@type": "Answer", text: "Making a living from Shorts alone is very difficult. Even with 10 million monthly Shorts views, you'd earn roughly $400–$2,000/month. Most successful Shorts creators use them as a funnel to drive traffic to higher-paying long-form content." } },
        { "@type": "Question", name: "How many Shorts views do you need to make $100?", acceptedAnswer: { "@type": "Answer", text: "At the average Shorts RPM of $0.05–$0.10, you'd need approximately 1–2 million Shorts views to earn $100. For comparison, you'd only need 10,000–30,000 long-form views to earn the same amount." } },
    ],
};

export default function YouTubeShortsPay() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: "YouTube Shorts Pay", item: "/blog/youtube-shorts-pay" },
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
                    <Image src="/upload/blog/youtube-shorts-pay.png" alt="YouTube Shorts Pay 2026 – Complete RPM & Monetization Guide" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="container mx-auto max-w-4xl">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest"><Smartphone className="h-3 w-3" /> Shorts Guide</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest"><CalendarDays className="h-3 w-3" /> March 7, 2026</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest"><Clock className="h-3 w-3" /> 9 min read</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase">
                                YouTube Shorts Pay <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">RPM Data Revealed</span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* Quick Answer */}
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-16">
                        <div className="flex items-center gap-3 mb-4"><Zap className="h-6 w-6 text-primary" /><h2 className="text-lg font-black uppercase tracking-tight">Quick Answer</h2></div>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            YouTube Shorts pay <strong className="text-foreground">$0.04–$0.20 per 1,000 views</strong> (RPM) in 2026, which translates to{" "}
                            <strong className="text-foreground">$50–$200 per 1 million views</strong>. This is{" "}
                            <strong className="text-foreground">20–150x less than long-form content</strong>. Shorts use a pooled ad revenue model where creators receive 45% of their allocated share.
                        </p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {[
                            { icon: DollarSign, label: "Shorts RPM", value: "$0.04–$0.20", sub: "Per 1K Views" },
                            { icon: BarChart3, label: "Long-Form RPM", value: "$3–$15", sub: "Per 1K Views" },
                            { icon: Video, label: "Revenue Share", value: "45%", sub: "Creator Cut" },
                            { icon: TrendingUp, label: "1M Shorts Views", value: "$50–$200", sub: "Est. Earnings" },
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
                        <h2 className="text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-3"><ChevronRight className="h-5 w-5 text-primary" /> Table of Contents</h2>
                        <nav><ol className="space-y-3 text-sm font-medium text-muted-foreground list-decimal list-inside">
                            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How YouTube Shorts Monetization Works</a></li>
                            <li><a href="#rpm-breakdown" className="hover:text-primary transition-colors">YouTube Shorts RPM Breakdown</a></li>
                            <li><a href="#shorts-vs-longform" className="hover:text-primary transition-colors">Shorts vs Long-Form: Side-by-Side Comparison</a></li>
                            <li><a href="#earning-benchmarks" className="hover:text-primary transition-colors">How Much Can You Earn? View-to-Dollar Benchmarks</a></li>
                            <li><a href="#maximize-shorts" className="hover:text-primary transition-colors">7 Strategies to Maximize Shorts Revenue</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                            <li><a href="#calculate" className="hover:text-primary transition-colors">Calculate Your Earnings</a></li>
                        </ol></nav>
                    </div>

                    {/* Section 1: How It Works */}
                    <section id="how-it-works" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><BarChart3 className="h-7 w-7 text-primary" /> How YouTube Shorts Monetization Works</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed font-medium mb-8">
                            <p>YouTube Shorts monetization works <strong className="text-foreground">fundamentally differently</strong> from long-form content. Here&apos;s the step-by-step process:</p>
                        </div>
                        <div className="space-y-4 mb-8">
                            {[
                                { step: "1", title: "Ads Appear Between Shorts", desc: "YouTube inserts ads between Shorts as users scroll through the Shorts feed. These are not attached to specific videos." },
                                { step: "2", title: "Revenue Gets Pooled", desc: "All ad revenue from the Shorts feed is collected into a single pool for that time period." },
                                { step: "3", title: "Views Determine Your Share", desc: "Your share of the pool is based on your Shorts views as a percentage of total Shorts views during that period." },
                                { step: "4", title: "Music Licensing Deduction", desc: "If your Short uses licensed music, a portion goes to music rights holders before your share is calculated." },
                                { step: "5", title: "Creator Gets 45%", desc: "After the music deduction and pool allocation, you receive 45% of your share (vs 55% for long-form content)." },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{item.step}</div>
                                    <div>
                                        <h3 className="font-black text-sm text-foreground mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm text-muted-foreground font-medium">
                                <strong className="text-foreground">Important:</strong> Using copyrighted music reduces your earnings significantly. Original audio Shorts keep 100% of the creator pool allocation, while music Shorts may lose 50%+ to rights holders.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: RPM Breakdown */}
                    <section id="rpm-breakdown" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><DollarSign className="h-7 w-7 text-primary" /> YouTube Shorts RPM Breakdown</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            RPM (Revenue Per Mille) for Shorts varies based on audience geography, content niche, and whether you use original audio. Here&apos;s the current data:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { category: "US/UK/AU Audience", rpm: "$0.08 – $0.20", note: "Highest-paying Shorts audiences" },
                                { category: "European Audience", rpm: "$0.05 – $0.15", note: "Strong but lower than US" },
                                { category: "Latin America", rpm: "$0.02 – $0.08", note: "High volume, lower RPM" },
                                { category: "India/SE Asia", rpm: "$0.01 – $0.04", note: "Massive views, lowest RPM" },
                                { category: "Original Audio", rpm: "+30–50% RPM", note: "No music licensing deduction" },
                                { category: "Licensed Music", rpm: "−30–50% RPM", note: "Revenue shared with rights holders" },
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-black text-sm">{item.category}</h3>
                                        <span className="font-black text-primary text-sm">{item.rpm}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{item.note}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Shorts vs Long-Form */}
                    <section id="shorts-vs-longform" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><Video className="h-7 w-7 text-primary" /> Shorts vs Long-Form: Side-by-Side</h2>
                        <div className="hidden md:block rounded-[2rem] border border-border/50 overflow-hidden bg-card shadow-xl mb-8">
                            <table className="w-full">
                                <thead><tr className="bg-muted/30">
                                    <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Metric</th>
                                    <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">📱 YouTube Shorts</th>
                                    <th className="text-left py-4 px-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">📺 Long-Form</th>
                                </tr></thead>
                                <tbody className="text-sm">
                                    {[
                                        ["RPM (per 1K views)", "$0.04 – $0.20", "$3 – $15"],
                                        ["1M Views Earnings", "$50 – $200", "$1,000 – $30,000"],
                                        ["Revenue Share", "45% to creator", "55% to creator"],
                                        ["Ad Type", "Pooled in-feed ads", "Pre-roll, mid-roll, display"],
                                        ["Monetization Model", "Pooled revenue sharing", "Direct per-video ads"],
                                        ["Viral Potential", "Very High ⚡", "Moderate"],
                                        ["Watch Time Credit", "No", "Yes"],
                                        ["Mid-Roll Ads", "No", "Yes (8+ min videos)"],
                                    ].map(([metric, shorts, longform], i) => (
                                        <tr key={i} className="border-t border-border/30 hover:bg-muted/20 transition-colors">
                                            <td className="py-3 px-6 font-bold text-foreground">{metric}</td>
                                            <td className="py-3 px-6 text-muted-foreground">{shorts}</td>
                                            <td className="py-3 px-6 text-muted-foreground">{longform}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Mobile */}
                        <div className="md:hidden space-y-3 mb-8">
                            {[
                                { m: "RPM", s: "$0.04–$0.20", l: "$3–$15" },
                                { m: "1M Views", s: "$50–$200", l: "$1K–$30K" },
                                { m: "Revenue Share", s: "45%", l: "55%" },
                                { m: "Viral Potential", s: "Very High ⚡", l: "Moderate" },
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-2xl bg-card border border-border/50">
                                    <p className="font-bold text-xs text-foreground mb-2">{item.m}</p>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div><p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Shorts</p><p className="font-bold">{item.s}</p></div>
                                        <div><p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Long-Form</p><p className="font-bold">{item.l}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Earning Benchmarks */}
                    <section id="earning-benchmarks" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8">How Much Can You Earn? View-to-Dollar Benchmarks</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">Here&apos;s what to expect at various Shorts view levels (using average $0.08 RPM):</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { views: "100K views", earn: "$4 – $20", note: "A single viral Short" },
                                { views: "500K views", earn: "$20 – $100", note: "Moderately viral content" },
                                { views: "1M views", earn: "$50 – $200", note: "Strong performing Short" },
                                { views: "5M views", earn: "$250 – $1,000", note: "Viral hit territory" },
                                { views: "10M views", earn: "$500 – $2,000", note: "Mega-viral Short" },
                                { views: "50M views", earn: "$2,500 – $10,000", note: "Top 0.01% of Shorts" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div>
                                        <p className="font-black text-sm">{item.views}</p>
                                        <p className="text-xs text-muted-foreground">{item.note}</p>
                                    </div>
                                    <span className="font-black text-primary text-sm">{item.earn}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: Maximize */}
                    <section id="maximize-shorts" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><TrendingUp className="h-7 w-7 text-primary" /> 7 Strategies to Maximize Shorts Revenue</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Use Original Audio", desc: "Avoid licensed music to keep 100% of your creator pool share instead of splitting with rights holders.", icon: "🎙️" },
                                { title: "Target Tier-1 Countries", desc: "Create English-language content targeting US, UK, AU audiences for the highest Shorts RPM.", icon: "🌍" },
                                { title: "Funnel to Long-Form", desc: "Use Shorts as top-of-funnel to drive subscribers to your long-form content where RPM is 20–150x higher.", icon: "📺" },
                                { title: "Post Consistently", desc: "Shorts reward volume. Aim for 1–3 Shorts per day to maximize algorithmic push and total views.", icon: "📅" },
                                { title: "Hook in First 1 Second", desc: "Shorts auto-play. If viewers don't engage immediately, they swipe. Front-load the value.", icon: "⚡" },
                                { title: "Build for Re-watches", desc: "Shorts that loop well and trigger re-watches count additional views, boosting your pool share.", icon: "🔄" },
                                { title: "Monetize Beyond Ads", desc: "Use Shorts for affiliate marketing, course promotion, or merchandise since ad revenue is low.", icon: "💰" },
                            ].map((tip, i) => (
                                <div key={i} className="p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all group">
                                    <div className="text-2xl mb-4">{tip.icon}</div>
                                    <h3 className="font-black text-sm mb-2 group-hover:text-primary transition-colors">{tip.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><HelpCircle className="h-7 w-7 text-primary" /> Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "How much does YouTube Shorts pay per 1,000 views?", a: "YouTube Shorts typically pay $0.04–$0.20 per 1,000 views (RPM). This is significantly lower than long-form content which earns $3–$15 RPM per 1,000 views." },
                                { q: "How does YouTube Shorts monetization work?", a: "Youtube pools all ad revenue from ads shown between Shorts, then distributes it based on each creator's share of total Shorts views. Creators get 45% of their allocated share." },
                                { q: "Can you make a living from YouTube Shorts?", a: "Very difficult from Shorts alone. Even 10 million monthly Shorts views earns only $400–$2,000/month. Successful creators use Shorts as a funnel to long-form content." },
                                { q: "How many Shorts views do you need to make $100?", a: "Approximately 1–2 million Shorts views at the average RPM. For comparison, only 10,000–30,000 long-form views earn the same amount." },
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
                            <div className="absolute top-0 right-0 opacity-10 p-6"><TrendingUp className="h-40 w-40 rotate-12" /></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Calculate Your YouTube Earnings</h2>
                                <p className="text-white/80 mb-8 font-medium max-w-lg mx-auto">
                                    Want to know what your Shorts or long-form views are worth? Use our free YouTube Money Calculator for instant estimates.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]">
                                        <ArrowRight className="h-5 w-5 mr-2" /> Open Calculator
                                    </Link>
                                    <Link href="/youtube-views-to-money" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white/10 text-white font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20">
                                        Views to Money
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Author */}
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/20 border border-border/50 mt-12">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"><DollarSign className="h-6 w-6 text-primary" /></div>
                        <div>
                            <p className="font-black text-sm">YouTube Money Calculator Research Team</p>
                            <p className="text-xs text-muted-foreground">Last updated: <time dateTime="2026-03-07">March 7, 2026</time> · Data compiled from public sources & revenue modeling</p>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
