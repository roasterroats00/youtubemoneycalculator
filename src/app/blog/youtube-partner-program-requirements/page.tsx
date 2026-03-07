import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import {
    CalendarDays, Clock, TrendingUp, DollarSign,
    ArrowRight, ChevronRight, Zap, CheckCircle, Shield, HelpCircle, Users, AlertTriangle
} from "lucide-react";

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
    title: "YouTube Partner Program 2026: NEW Requirements, Application & Everything You Need to Know",
    description:
        "Complete 2026 guide to the YouTube Partner Program (YPP). New eligibility requirements (500 subscribers, 3K watch hours), step-by-step application process, common rejection reasons, and tips to get monetized faster.",
    keywords: [
        "youtube partner program requirements",
        "youtube partner program 2026",
        "YPP requirements",
        "youtube monetization requirements",
        "how to get monetized on youtube",
        "youtube partner program apply",
        "youtube monetization 2026",
        "youtube 500 subscribers monetization",
        "how to join youtube partner program",
    ],
    openGraph: {
        title: "YouTube Partner Program 2026: Requirements & Application Guide",
        description: "Complete guide to YPP eligibility, application process, and monetization tips for 2026.",
        type: "article",
        images: [{ url: "/upload/blog/youtube-partner-program-requirements.png", width: 1200, height: 630, alt: "YouTube Partner Program Requirements 2026" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Partner Program 2026 Requirements",
        description: "Everything you need to know about getting monetized on YouTube in 2026.",
        images: ["/upload/blog/youtube-partner-program-requirements.png"],
    },
    alternates: { canonical: "https://youtubemoneycalculator.net/blog/youtube-partner-program-requirements" },
};

/* ─── Structured Data ─── */
const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: "YouTube Partner Program 2026: NEW Requirements, Application & Everything You Need to Know",
    description: "Complete guide to the YouTube Partner Program in 2026 including eligibility requirements, application steps, and monetization tips.",
    image: "https://youtubemoneycalculator.net/upload/blog/youtube-partner-program-requirements.png",
    author: { "@type": "Organization", name: "YouTube Money Calculator" },
    publisher: { "@type": "Organization", name: "YouTube Money Calculator", logo: { "@type": "ImageObject", url: "https://youtubemoneycalculator.net/upload/youtubemoneycalculator.net.png" } },
    datePublished: "2026-03-07", dateModified: "2026-03-07",
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://youtubemoneycalculator.net/blog/youtube-partner-program-requirements" },
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Join the YouTube Partner Program in 2026",
    description: "Step-by-step guide to applying for and getting accepted into the YouTube Partner Program.",
    step: [
        { "@type": "HowToStep", name: "Meet Eligibility Requirements", text: "Reach 500 subscribers and 3,000 public watch hours in the last 12 months, OR 3 million YouTube Shorts views in the last 90 days." },
        { "@type": "HowToStep", name: "Enable 2-Step Verification", text: "Set up 2-step verification on your Google account for security." },
        { "@type": "HowToStep", name: "Apply Through YouTube Studio", text: "Go to YouTube Studio > Earn > Apply Now, and follow the application steps." },
        { "@type": "HowToStep", name: "Set Up AdSense Account", text: "Link or create a Google AdSense account to receive payments." },
        { "@type": "HowToStep", name: "Wait for Review", text: "YouTube reviews your channel for policy compliance. This typically takes 2-4 weeks." },
    ],
};

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What are the YouTube Partner Program requirements in 2026?", acceptedAnswer: { "@type": "Answer", text: "In 2026, you need: 500 subscribers + 3,000 public watch hours in the last 12 months (or 3 million Shorts views in 90 days) for limited monetization. For full monetization (ads), you need 1,000 subscribers + 4,000 public watch hours (or 10 million Shorts views in 90 days)." } },
        { "@type": "Question", name: "How long does it take to get approved for YPP?", acceptedAnswer: { "@type": "Answer", text: "The review process typically takes 2-4 weeks, but can take up to 1-2 months during peak application periods. YouTube reviews your channel for community guidelines compliance, copyright strikes, and content quality." } },
        { "@type": "Question", name: "Can you get monetized with YouTube Shorts only?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can qualify for YPP with 500 subscribers + 3 million Shorts views in 90 days (limited access) or 1,000 subscribers + 10 million Shorts views in 90 days (full access), without needing any long-form watch hours." } },
        { "@type": "Question", name: "What happens if you get rejected from YPP?", acceptedAnswer: { "@type": "Answer", text: "If rejected, YouTube provides a reason. You can reapply after 30 days. Common rejection reasons include reused content, insufficient original content, community guideline violations, or copyright issues." } },
        { "@type": "Question", name: "How much can you earn once monetized?", acceptedAnswer: { "@type": "Answer", text: "Earnings vary widely. A channel with 10K views/month might earn $20-$100. With 100K views/month, expect $200-$1,500. Use our YouTube Money Calculator for personalized estimates based on your niche and audience." } },
    ],
};

export default function YouTubePartnerProgramPage() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Blog", item: "/blog" },
        { name: "YouTube Partner Program Requirements", item: "/blog/youtube-partner-program-requirements" },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={articleSchema} />
            <Schema data={howToSchema} />
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
                    <Image src="/upload/blog/youtube-partner-program-requirements.png" alt="YouTube Partner Program Requirements 2026 – Complete Guide" fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="container mx-auto max-w-4xl">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest"><Shield className="h-3 w-3" /> Monetization Guide</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest"><CalendarDays className="h-3 w-3" /> March 7, 2026</span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/40 border border-border/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest"><Clock className="h-3 w-3" /> 11 min read</span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase">
                                YouTube Partner <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">Program 2026</span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* Quick Answer */}
                    <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 mb-16">
                        <div className="flex items-center gap-3 mb-4"><Zap className="h-6 w-6 text-primary" /><h2 className="text-lg font-black uppercase tracking-tight">Quick Answer</h2></div>
                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            The YouTube Partner Program (YPP) in 2026 has <strong className="text-foreground">two tiers</strong>:
                            {" "}<strong className="text-foreground">Limited access</strong> requires 500 subscribers + 3,000 watch hours (or 3M Shorts views).
                            {" "}<strong className="text-foreground">Full access</strong> requires 1,000 subscribers + 4,000 watch hours (or 10M Shorts views).
                            Application review takes <strong className="text-foreground">2–4 weeks</strong>.
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            Getting into the YouTube Partner Program is the <strong className="text-foreground">first milestone</strong>{" "}
                            for any aspiring creator. It unlocks ad revenue, Super Chats, memberships, and other monetization features.
                            In this comprehensive guide, we cover the <strong className="text-foreground">exact 2026 requirements</strong>,
                            the step-by-step application process, common rejection reasons, and proven strategies to reach eligibility faster.
                        </p>
                    </div>

                    {/* TOC */}
                    <div className="p-8 rounded-[2rem] bg-muted/20 border border-border/50 mb-16">
                        <h2 className="text-lg font-black uppercase tracking-tight mb-6 flex items-center gap-3"><ChevronRight className="h-5 w-5 text-primary" /> Table of Contents</h2>
                        <nav><ol className="space-y-3 text-sm font-medium text-muted-foreground list-decimal list-inside">
                            <li><a href="#requirements" className="hover:text-primary transition-colors">YPP Requirements 2026: Two-Tier System</a></li>
                            <li><a href="#application" className="hover:text-primary transition-colors">Step-by-Step Application Process</a></li>
                            <li><a href="#what-you-unlock" className="hover:text-primary transition-colors">What You Unlock with YPP Access</a></li>
                            <li><a href="#rejection" className="hover:text-primary transition-colors">Common Rejection Reasons & How to Avoid Them</a></li>
                            <li><a href="#faster" className="hover:text-primary transition-colors">How to Reach YPP Requirements Faster</a></li>
                            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                            <li><a href="#calculate" className="hover:text-primary transition-colors">Estimate Your Future Earnings</a></li>
                        </ol></nav>
                    </div>

                    {/* Section 1: Requirements */}
                    <section id="requirements" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><Shield className="h-7 w-7 text-primary" /> YPP Requirements 2026: Two-Tier System</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 font-medium">
                            YouTube introduced a <strong className="text-foreground">two-tier monetization system</strong> that gives creators early access to some features before meeting the full requirements:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-8 rounded-[2rem] bg-card border border-border/50">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-6">Tier 1 — Limited Access</div>
                                <h3 className="text-xl font-black uppercase mb-6">Early Monetization</h3>
                                <div className="space-y-3 text-sm text-muted-foreground font-medium">
                                    <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span><strong className="text-foreground">500 subscribers</strong></span></div>
                                    <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span><strong className="text-foreground">3,000 public watch hours</strong> (last 12 months)</span></div>
                                    <div className="flex items-center gap-3"><span className="text-xs text-muted-foreground ml-8">OR</span></div>
                                    <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span><strong className="text-foreground">3 million Shorts views</strong> (last 90 days)</span></div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-border/50">
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-3">Unlocks:</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Super Thanks, Super Chats, Super Stickers</li>
                                        <li>• Channel Memberships</li>
                                        <li>• YouTube Shopping</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">Tier 2 — Full Access</div>
                                <h3 className="text-xl font-black uppercase mb-6">Full Monetization</h3>
                                <div className="space-y-3 text-sm text-muted-foreground font-medium">
                                    <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span><strong className="text-foreground">1,000 subscribers</strong></span></div>
                                    <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span><strong className="text-foreground">4,000 public watch hours</strong> (last 12 months)</span></div>
                                    <div className="flex items-center gap-3"><span className="text-xs text-muted-foreground ml-8">OR</span></div>
                                    <div className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-primary shrink-0" /><span><strong className="text-foreground">10 million Shorts views</strong> (last 90 days)</span></div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-primary/20">
                                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-3">Unlocks Everything Above +</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• <strong className="text-foreground">Ad Revenue (AdSense)</strong></li>
                                        <li>• YouTube Premium revenue share</li>
                                        <li>• Shorts revenue sharing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                            <p className="text-sm text-muted-foreground font-medium">
                                <strong className="text-foreground">Additional Requirements (Both Tiers):</strong> Active Google
                                AdSense account, no active community guideline strikes, 2-step verification enabled, compliance
                                with YouTube monetization policies, and residing in an{" "}
                                <strong className="text-foreground">eligible country/region</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Application */}
                    <section id="application" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><CheckCircle className="h-7 w-7 text-primary" /> Step-by-Step Application Process</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                { step: "1", title: "Check Your Eligibility", desc: "Go to YouTube Studio → Earn tab. YouTube will show your progress toward the requirements (subscriber count and watch hours or Shorts views).", time: "1 min" },
                                { step: "2", title: "Enable 2-Step Verification", desc: "Go to your Google Account settings and enable 2-step verification. This is mandatory for all YPP applicants.", time: "5 min" },
                                { step: "3", title: "Accept YouTube's Terms", desc: "Read and accept the YouTube Partner Program terms of service and monetization policies.", time: "2 min" },
                                { step: "4", title: "Set Up Google AdSense", desc: "Link your existing AdSense account or create a new one. You'll need to provide tax information and payment details.", time: "10 min" },
                                { step: "5", title: "Submit Your Application", desc: "Click 'Apply Now' in the Earn tab. Your channel will be added to the review queue.", time: "2 min" },
                                { step: "6", title: "Wait for Review (2–4 Weeks)", desc: "YouTube's team reviews your channel for compliance with community guidelines, copyright policies, and content quality. You'll receive an email with the decision.", time: "2–4 weeks" },
                            ].map((item) => (
                                <div key={item.step} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm shrink-0">{item.step}</div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                            <h3 className="font-black text-sm text-foreground">{item.title}</h3>
                                            <span className="text-xs text-muted-foreground font-bold px-2 py-0.5 rounded-full bg-muted/50">{item.time}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: What You Unlock */}
                    <section id="what-you-unlock" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><DollarSign className="h-7 w-7 text-primary" /> What You Unlock with YPP Access</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { feature: "Ad Revenue", desc: "Earn money from pre-roll, mid-roll, display, and overlay ads on your videos. The primary income source.", earn: "$1–$25 RPM", icon: "📺" },
                                { feature: "Shorts Revenue Sharing", desc: "Earn from the pooled Shorts ad revenue based on your views. Lower RPM than long-form.", earn: "$0.04–$0.20 RPM", icon: "📱" },
                                { feature: "Channel Memberships", desc: "Offer monthly subscriptions ($1–$100) with exclusive perks like badges, emojis, and content.", earn: "$1–$100/member/mo", icon: "⭐" },
                                { feature: "Super Chats & Stickers", desc: "Viewers can pay to highlight their messages during live streams. Popular for engagement.", earn: "$1–$500/chat", icon: "💬" },
                                { feature: "YouTube Shopping", desc: "Tag and sell products directly in your videos and channel. Great for merch integration.", earn: "Variable", icon: "🛍️" },
                                { feature: "YouTube Premium Revenue", desc: "Earn a share of Premium subscription fees when Premium members watch your content.", earn: "Based on watch time", icon: "💎" },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <h3 className="font-black text-sm">{item.feature}</h3>
                                    </div>
                                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                                    <span className="inline-block font-black text-primary text-xs px-2 py-1 rounded-full bg-primary/10">{item.earn}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Rejection Reasons */}
                    <section id="rejection" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><AlertTriangle className="h-7 w-7 text-primary" /> Common Rejection Reasons</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                { reason: "Reused Content", desc: "Uploading content that's not original — compilations, re-uploads, or slightly modified third-party content without significant value added.", fix: "Create 100% original content. Add unique commentary, editing, and perspective." },
                                { reason: "Insufficient Original Content", desc: "Too few videos, or videos that are too short or low-effort to demonstrate a pattern of original creation.", fix: "Have at least 10–15 substantial original videos before applying." },
                                { reason: "Community Guidelines Strikes", desc: "Active strikes for violence, harassment, hate speech, or other policy violations.", fix: "Ensure zero active strikes before applying. Review all content for compliance." },
                                { reason: "Copyright Issues", desc: "Videos with copyright claims or strikes indicating unauthorized use of copyrighted material.", fix: "Use only original content, licensed music, or content under Creative Commons." },
                                { reason: "Misleading Metadata", desc: "Clickbait titles, misleading thumbnails, or keyword-stuffed descriptions.", fix: "Ensure all titles and thumbnails accurately represent your content." },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-card border border-border/50">
                                    <h3 className="font-black text-sm text-foreground mb-2 flex items-center gap-2"><span className="text-primary">✕</span> {item.reason}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">✓ Fix:</strong> {item.fix}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: Faster */}
                    <section id="faster" className="mb-20 scroll-mt-24">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-3"><TrendingUp className="h-7 w-7 text-primary" /> How to Reach YPP Requirements Faster</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { title: "Use Shorts to Grow Subscribers", desc: "Shorts can go viral quickly and are the fastest way to gain subscribers. Even one viral Short can add 1,000+ subscribers overnight.", icon: "📱" },
                                { title: "Make Longer Videos (10+ Min)", desc: "Longer videos accumulate more watch hours per view. A 15-minute video with 1,000 views = 250 watch hours vs 25 hours for a 1.5-min video.", icon: "⏱️" },
                                { title: "Pick a Searchable Niche", desc: "Choose topics people actively search for. Tutorial and how-to content gets consistent search traffic over time.", icon: "🔍" },
                                { title: "Upload Consistently", desc: "Aim for 2–3 videos per week. Consistency signals quality to YouTube's algorithm and keeps your audience engaged.", icon: "📅" },
                                { title: "Optimize Thumbnails & Titles", desc: "Higher CTR means more views from recommendations. Invest time in eye-catching thumbnails and curiosity-driven titles.", icon: "🎨" },
                                { title: "Engage Your Community", desc: "Reply to every comment in your first 48 hours. Create Community posts. Build loyalty that drives watch time.", icon: "💬" },
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
                                { q: "What are the YouTube Partner Program requirements in 2026?", a: "Two tiers: Limited (500 subs + 3K watch hours or 3M Shorts views) for memberships/Super Chats. Full (1,000 subs + 4K watch hours or 10M Shorts views) for ad revenue." },
                                { q: "How long does YPP review take?", a: "Typically 2–4 weeks, up to 1–2 months during peak periods. YouTube reviews community guidelines compliance, copyright, and content quality." },
                                { q: "Can you get monetized with Shorts only?", a: "Yes. 500 subs + 3M Shorts views (90 days) for limited access, or 1,000 subs + 10M Shorts views (90 days) for full access." },
                                { q: "What if my YPP application gets rejected?", a: "YouTube provides a reason. You can reapply after 30 days. Common reasons include reused content, guideline violations, copyright issues, or misleading metadata." },
                                { q: "How much can you earn once monetized?", a: "Earnings vary: 10K views/month = $20–$100, 100K views = $200–$1,500, 1M views = $1,000–$30,000. Use our free calculator for personalized estimates." },
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
                                <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Estimate Your Future Earnings</h2>
                                <p className="text-white/80 mb-8 font-medium max-w-lg mx-auto">
                                    Once you&apos;re monetized, how much could you earn? Use our free YouTube Money Calculator to project your revenue based on views, CPM, and niche.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <Link href="/" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]">
                                        <ArrowRight className="h-5 w-5 mr-2" /> Open Calculator
                                    </Link>
                                    <Link href="/blog/how-much-do-youtubers-make" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white/10 text-white font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20">
                                        YouTuber Income Guide
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Author */}
                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-muted/20 border border-border/50 mt-12">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center"><Shield className="h-6 w-6 text-primary" /></div>
                        <div>
                            <p className="font-black text-sm">YouTube Money Calculator Research Team</p>
                            <p className="text-xs text-muted-foreground">Last updated: <time dateTime="2026-03-07">March 7, 2026</time> · Based on official YouTube documentation</p>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
