import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import { countries, getCountryBySlug } from "@/data/countries";
import {
    Globe, TrendingUp, DollarSign, Zap, Users, Shield,
    ArrowRight, ChevronRight, BarChart3, Star, Info, HelpCircle
} from "lucide-react";

/* ─── Static Params ─── */
export async function generateStaticParams() {
    return countries.map((c) => ({ slug: c.slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const country = getCountryBySlug(slug);
    if (!country) return { title: "Not Found" };

    const title = `YouTube CPM in ${country.name} 2026: Average Earnings & Revenue Guide`;
    const description = `Discover the average YouTube CPM in ${country.name} for 2026. See how much creators earn per 1,000 views, RPM data, top-paying niches, and income for 1M views in ${country.name}.`;

    return {
        title,
        description,
        keywords: [
            `youtube cpm ${country.name}`,
            `youtube earnings ${country.name}`,
            `how much youtube pays in ${country.name}`,
            `youtube revenue per 1000 views ${country.name}`,
            `cpm rates ${country.name} 2026`,
            `youtube rpm ${country.name}`,
        ],
        openGraph: {
            title,
            description,
            type: "article",
            images: [{ url: "/upload/blog/youtube-global-earnings-hero.png", width: 1200, height: 630, alt: `YouTube CPM in ${country.name}` }],
            url: `https://youtubemoneycalculator.net/cpm/${country.slug}`,
        },
        alternates: { canonical: `https://youtubemoneycalculator.net/cpm/${country.slug}` },
    };
}

/* ─── Page Component ─── */
export default async function CountryCPMPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const country = getCountryBySlug(slug);
    if (!country) notFound();

    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "CPM by Country", item: "/cpm-by-country" },
        { name: country.name, item: `/cpm/${country.slug}` },
    ]);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `YouTube CPM in ${country.name} 2026: Average Earnings Guide`,
        "description": `Comprehensive guide to YouTube CPM rates in ${country.name}, including RPM estimates and niche breakdowns for 2026.`,
        "image": "https://youtubemoneycalculator.net/upload/blog/youtube-global-earnings-hero.png",
        "author": { "@type": "Organization", "name": "YouTube Money Calculator" },
        "publisher": { "@type": "Organization", "name": "YouTube Money Calculator" },
        "datePublished": "2026-03-08",
        "dateModified": "2026-03-08"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": country.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Schema data={breadcrumbData} />
            <Schema data={articleSchema} />
            <Schema data={faqSchema} />

            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
                    <Image src="/upload/blog/youtube-global-earnings-hero.png" alt={`YouTube CPM ${country.name} 2026`} fill priority className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="container mx-auto max-w-5xl">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                                    <Globe className="h-3 w-3" /> {country.continent} Guide
                                </span>
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${country.tier === 'premium' ? 'bg-yellow-400/20 border-yellow-400/30 text-yellow-600' :
                                        country.tier === 'high' ? 'bg-emerald-400/20 border-emerald-400/30 text-emerald-600' :
                                            'bg-blue-400/20 border-blue-400/30 text-blue-600'
                                    } border`}>
                                    <Shield className="h-3 w-3" /> Tier: {country.tier}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                                {country.flag} YouTube CPM in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                    {country.name} 2026
                                </span>
                            </h1>
                        </div>
                    </div>
                </section>

                <article className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex flex-col justify-center">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Estimated Avg. CPM</p>
                            <div className="text-4xl font-black text-primary">${country.cpmMedian.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">Per 1,000 views (gross)</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 flex flex-col justify-center">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">CPM Range</p>
                            <div className="text-2xl font-black">${country.cpmMin.toFixed(2)} – ${country.cpmMax.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">Varies by niche and season</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 flex flex-col justify-center">
                            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">Est. Creator RPM</p>
                            <div className="text-2xl font-black text-emerald-600">${country.rpmEstimate.toFixed(2)}</div>
                            <p className="text-xs text-muted-foreground mt-2 font-medium">Net earnings after YT cut</p>
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Summary Section */}
                            <section>
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <BarChart3 className="h-6 w-6 text-primary" /> Market Overview: {country.name}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    For creators in <strong className="text-foreground">{country.name}</strong>, the YouTube monetization landscape in 2026 is
                                    shaped by a strong digital economy and high internet penetration of <strong className="text-foreground">{country.internetPenetration}</strong>.
                                    With a population of <strong className="text-foreground">{country.population}</strong> and over <strong className="text-foreground">{country.youtubeUsers}</strong> monthly YouTube users,
                                    it remains a vital market for both local and global advertisers.
                                </p>
                                <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
                                    <div className="flex items-start gap-3">
                                        <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-bold uppercase mb-1">Creators Note</p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Advertisers in {country.name} pay an average of <strong className="text-foreground">${country.cpmMedian.toFixed(2)}</strong> per 1,000 views.
                                                If you aim to maximize your revenue, focus on high-paying niches as CPC (Cost Per Click) and CPM significantly differ between entertainment and business content.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Top Niches */}
                            <section>
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Zap className="h-6 w-6 text-primary" /> Top Paying Niches in {country.name}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {country.topNiches.map((niche, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-sm">{i + 1}</div>
                                            <span className="font-bold text-foreground group-hover:text-primary transition-colors">{niche}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Notable Creators */}
                            <section>
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <Star className="h-6 w-6 text-primary" /> Notable Creators from {country.name}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Many successful creators have leveraged the {country.name} audience to build massive media brands.
                                    Some of the most influential channels in this region include:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {country.notableCreators.map((creator) => (
                                        <span key={creator} className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-bold text-foreground">
                                            {creator}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            {/* FAQ Section */}
                            <section id="faq" className="mt-12">
                                <h2 className="text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                                    <HelpCircle className="h-6 w-6 text-primary" /> Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {country.faq.map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all">
                                            <h3 className="font-black text-sm text-foreground mb-3">{item.q}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="space-y-6">
                            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary to-primary/60 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                                <div className="relative z-10">
                                    <TrendingUp className="h-10 w-10 mb-6 opacity-80" />
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">Project Your <br /> {country.name} Earnings</h3>
                                    <p className="text-white/80 text-sm mb-8 font-medium">
                                        Use our specialized calculator to estimate how much your channel can earn based on your specific niche and audience in {country.name}.
                                    </p>
                                    <Link href="/" className="inline-flex h-12 items-center justify-center px-6 rounded-xl bg-white text-primary font-black uppercase text-xs tracking-widest hover:bg-white/90 transition-all shadow-lg active:scale-[0.98]">
                                        Open Calculator <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>
                                </div>
                                <div className="absolute bottom-[-20%] right-[-10%] opacity-10">
                                    <Globe className="h-48 w-48" />
                                </div>
                            </div>

                            <div className="p-6 rounded-[2rem] bg-muted/20 border border-border/50">
                                <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Market Stats</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground">Currency</span>
                                        <span className="text-sm font-black">{country.currency}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground">Population</span>
                                        <span className="text-sm font-black">{country.population}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground">YT Users</span>
                                        <span className="text-sm font-black">{country.youtubeUsers}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground">Web Access</span>
                                        <span className="text-sm font-black text-primary">{country.internetPenetration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
