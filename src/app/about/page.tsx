import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Heart, Zap, Award, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";

export const metadata: Metadata = {
    title: "About Us - YouTube Money Calculator AI Revenue Platform",
    description: "Learn about YouTube Money Calculator's mission to democratize revenue intelligence for creators. Our AI engine analyzes millions of data points to empower YouTubers worldwide.",
    openGraph: {
        title: "About Us - YouTube Money Calculator",
        description: "We are a team of data scientists and content creators dedicated to bringing institutional-grade financial analytics to every YouTuber.",
        type: "website",
    },
};

const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@id": "https://youtubemoneycalculator.net/#organization"
    }
};

const breadcrumbData = SchemaFactory.breadcrumb([
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
]);

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Schema data={aboutPageSchema} />
            <Schema data={breadcrumbData} />
            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/2 rounded-full blur-[100px]" />
            </div>

            <Header />

            <main className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
                {/* Hero Section */}
                <div className="text-center mb-24 relative">
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary/5 text-9xl font-black select-none pointer-events-none">
                        GENESIS
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                        <Zap className="h-3 w-3" />
                        THE FUTURE OF CREATOR ECONOMY
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
                        Democratizing <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                            Revenue Intelligence
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                        We are a team of data scientists and content creators dedicated to bringing institutional-grade financial analytics to every YouTuber on the planet.
                    </p>
                </div>

                {/* Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="group relative p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Heart className="h-32 w-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Heart className="h-7 w-7" />
                            </div>
                            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                To empower creators with accurate, transparent, and predictive financial data. We believe that when creators understand their worth, they can build more sustainable and impactful businesses.
                            </p>
                        </div>
                    </div>

                    <div className="group relative p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Award className="h-32 w-32" />
                        </div>
                        <div className="relative z-10">
                            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Award className="h-7 w-7" />
                            </div>
                            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Our Technology</h2>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                                Our proprietary AI engine analyzes millions of data points across diverse niches and geographies to deliver benchmarks that go beyond simple averages, providing true revenue intelligence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="prose prose-light dark:prose-invert max-w-none space-y-12">
                    <div className="p-8 md:p-12 rounded-[3rem] bg-muted/20 border border-border/40 backdrop-blur-sm">
                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                            <Globe className="h-8 w-8 text-primary" />
                            Global Impact
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-black text-primary mb-2">1M+</div>
                                <div className="text-xs uppercase font-black tracking-widest text-muted-foreground">Calculations Yearly</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-primary mb-2">150+</div>
                                <div className="text-xs uppercase font-black tracking-widest text-muted-foreground">Countries Covered</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-primary mb-2">24/7</div>
                                <div className="text-xs uppercase font-black tracking-widest text-muted-foreground">AI Monitoring</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-black">Why We Exist</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            In an era where the creator economy is valued at over $250 billion, financial transparency remains surprisingly elusive. Creators often struggle to determine their value for sponsorship deals or predict their ad revenue for business planning.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            <strong>YouTube Money Calculator</strong> was founded to bridge this gap. By combining public API data with sophisticated machine learning models, we provide a reliable baseline for financial discussions in the creator ecosystem.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-32 p-12 rounded-[3.5rem] bg-gradient-to-br from-primary to-primary/60 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                        <Zap className="h-48 w-48" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Join the Revolution</h3>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto font-medium">
                            Start making data-driven decisions for your channel today with our AI-powered analytics.
                        </p>
                        <Link href="/" className="inline-flex h-16 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]">
                            Get Started Now
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
