"use client";

import { useState } from "react";
import Link from "next/link";
import { EarningsInput } from "@/components/EarningsInput";
import { ChannelAnalyzer } from "@/components/ChannelAnalyzer";
import { Button } from "@/components/ui/button";
import { Calculator, BarChart3, DollarSign, Zap, Shield, TrendingUp, Users, Video, Globe, Lightbulb, Youtube, Twitter, Instagram, Linkedin, Github, Mail, ChevronRight, AtSign, Link as LinkIcon, Calculator as CalculatorIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";
import { NicheCard } from "@/components/NicheCard";

type Tab = "calculator" | "analyzer";

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "YouTube Money Calculator",
  "description": "Free YouTube Money Calculator with AI-powered revenue estimates. Calculate YouTube earnings by views, CPM, or channel URL.",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "featureList": "YouTube earnings calculator, CPM calculator, RPM calculator, Channel analyzer, Sponsor value estimator, Revenue projections",
  "screenshot": "https://youtubemoneycalculator.net/upload/youtubemoneycalculator.net.png",
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does YouTube pay per 1,000 views?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "YouTube typically pays between $1-$5 per 1,000 views (RPM) after YouTube's 45% cut. CPM rates vary by niche, with finance content earning $10-$20 CPM and entertainment earning $2-$8 CPM.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does 1 million views earn on YouTube?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 million views can earn between $1,000-$10,000 depending on CPM. With an average $5 CPM, creators earn approximately $2,750 after YouTube's 45% cut.",
      },
    },
    {
      "@type": "Question",
      "name": "What is a good CPM on YouTube?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A good CPM ranges from $5-$20. Finance and business niches have the highest CPM ($20-$50), while gaming and entertainment have lower CPM ($3-$10).",
      },
    },
    {
      "@type": "Question",
      "name": "Do YouTube subscribers generate income?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Subscribers don't directly generate income but boost engagement and watch time, leading to more views and higher ad revenue. A channel with 1M subscribers can earn $5,000-$50,000 monthly.",
      },
    },
  ],
};


export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("calculator");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* SEO Structured Data */}
      <Schema data={SchemaFactory.organization()} />
      <Schema data={SchemaFactory.website()} />
      <Schema data={structuredData} />
      <Schema data={faqData} />

      <Header />

      {/* Hero Section */}
      <main>
        <section className="container mx-auto px-4 py-16 md:py-24 relative overflow-hidden" aria-labelledby="hero-heading">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 animate-pulse">
              <Zap className="h-3 w-3" />
              <span>POWERED BY ADVANCED NEURAL PREDICTIONS</span>
            </div>
            <h1 id="hero-heading" className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
              Calculate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 glow-text">
                YouTube Earnings
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Unlock precise revenue insights with our industry-leading AI projection engine.
              Real-time CPM benchmarks and channel performance metrics at your fingertips.
            </p>

            {/* Tab Switcher - Redesigned */}
            <div id="calculator" className="inline-flex p-1.5 bg-muted/50 backdrop-blur-md rounded-2xl border shadow-2xl relative">
              <div
                className={`absolute top-1.5 bottom-1.5 transition-all duration-300 ease-in-out bg-background rounded-[10px] shadow-sm border border-border/50 ${activeTab === "calculator" ? "left-1.5 w-[calc(50%-0.375rem)]" : "left-[calc(50%+0.1875rem)] w-[calc(50%-0.375rem)]"
                  }`}
              />
              <button
                onClick={() => setActiveTab("calculator")}
                className={`relative z-10 flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold transition-colors ${activeTab === "calculator" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Calculator className={`h-4 w-4 transition-transform ${activeTab === "calculator" ? "scale-110" : ""}`} />
                Basic Calculator
              </button>
              <button
                onClick={() => setActiveTab("analyzer")}
                className={`relative z-10 flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold transition-colors ${activeTab === "analyzer" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <BarChart3 className={`h-4 w-4 transition-transform ${activeTab === "analyzer" ? "scale-110" : ""}`} />
                Channel Analyzer
              </button>
            </div>
          </div>

          {/* Main Calculator */}
          <div className="max-w-4xl mx-auto mb-16">
            {activeTab === "calculator" ? <EarningsInput /> : <ChannelAnalyzer />}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-[1180px] mx-auto px-4 md:px-0 py-24 md:py-32 space-y-16" id="how-to-use" aria-labelledby="how-it-works-heading">
          <div className="text-center relative overflow-hidden">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/5 text-8xl font-black select-none pointer-events-none whitespace-nowrap">
              WORKFLOW
            </div>
            <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Calculate <span className="text-primary italic">YouTube Revenue</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Three intelligent vectors to analyze your digital assets and optimize monetization strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0">
            {/* Card 1: Channel URL */}
            <div className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <AtSign className="h-24 w-24" />
              </div>
              <div className="relative z-10">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <AtSign className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">Channel Identity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Deep analysis via <span className="text-foreground font-medium">Channel URL</span> or <span className="text-foreground font-medium">@username</span>.
                    Extract engagement ratios, subscriber growth, and legacy earnings benchmarks.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Video URL */}
            <div className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <LinkIcon className="h-24 w-24" />
              </div>
              <div className="relative z-10">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <LinkIcon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">Content Specifics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Isolate potential with <span className="text-foreground font-medium">Video URL</span> tracking.
                    Predict viral revenue velocity and individual asset performance in the current market.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Calculate by Views */}
            <div className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CalculatorIcon className="h-24 w-24" />
              </div>
              <div className="relative z-10">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <CalculatorIcon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">Metric Modeler</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Precision <span className="text-foreground font-medium">View-to-Value</span> computation.
                    Simulate earnings based on historical CPM data and custom audience engagement variables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section aria-labelledby="what-is-heading" className="container mx-auto px-4 py-16 bg-background rounded-3xl border mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 id="what-is-heading" className="text-3xl font-bold mb-6">What is a YouTube Money Calculator?</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground">
                YouTube Money Calculator is a tool that estimates earnings for YouTube channels and videos.
                It uses simple data like view counts and estimated cost per thousand impressions (CPM) to
                provide an income approximation. The tool shows an estimate for an entire channel or individual videos.
              </p>
              <p className="text-muted-foreground">
                Many users ask, &quot;how much someone is making on YouTube?&quot; This tool answers that question.
                It takes the number of views and applies an average CPM value. For example, many creators in the
                United States earn between $1 and $5 per 1,000 views after YouTube takes its share. Some reports
                indicate that CPM rates can range from $1 to $20, depending on factors such as the audience
                location and the type of content.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">The calculator works as follows:</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>It accepts the total view count or video-specific view counts.</li>
                <li>It uses typical CPM values to calculate an estimated income.</li>
                <li>It updates its estimates with recent data and trends in the YouTube industry.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This tool provides a straightforward way to understand potential earnings based on the
                channel&apos;s performance and is helpful for both new and experienced creators.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="container mx-auto px-4 py-8 mb-16">
          <div className="max-w-5xl mx-auto">
            <img
              src="/upload/youtubemoneycalculator.net.png"
              alt="YouTube Money Calculator - How It Works"
              width={1024}
              height={576}
              className="w-full h-auto rounded-2xl shadow-lg"
              draggable={false}
            />
          </div>
        </section>

        {/* How to Use Section */}
        <section id="how-to-use" className="container mx-auto px-4 py-16 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Use the YouTube Earnings Calculator</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-card border group hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Channel URL/Username</h3>
              <p className="text-muted-foreground">
                Enter the channel URL or username in the provided input field. Use the full URL
                (e.g., https://www.youtube.com/@username) or simply the username. The tool retrieves
                data such as total views and subscriber count to estimate earnings for the entire channel.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border group hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video URL</h3>
              <p className="text-muted-foreground">
                Input the specific video URL in the designated field. The tool focuses on the chosen
                video to calculate earnings based on its individual view count. This method helps
                estimate income for content that may perform differently from the overall channel.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border group hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">View Count</h3>
              <p className="text-muted-foreground">
                Enter the view count number in the input box. The calculator uses this number and
                an average CPM value to estimate earnings. For instance, with 100,000 views and an
                average CPM of $2 per 1,000 views, the estimated earnings are approximately $200.
              </p>
            </div>
          </div>
        </section>

        {/* How Earnings Work Section */}
        <section id="earnings-guide" className="container mx-auto px-4 py-16 bg-muted/30 rounded-3xl mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How Do YouTube Earnings Work?</h2>
            <p className="text-muted-foreground mb-6">
              YouTube earnings are primarily driven by ad revenue, which comes from the YouTube Partner
              Program (YPP). Creators who meet YouTube&apos;s eligibility requirements of at least{" "}
              <strong>500 subscribers, 3,000 public watch hours in the last year, or 3 million YouTube
                Shorts views in the last 90 days</strong> can monetize their content.
            </p>
            <p className="text-muted-foreground mb-8">
              Once a channel is monetized, YouTube places ads on videos, and revenue is generated based
              on views, audience engagement, and ad types. But, not all views are monetized. Several
              factors impact how much a creator earns.
            </p>

            <h3 className="text-2xl font-semibold mb-4">How Do We Calculate YouTube Earnings?</h3>
            <div className="bg-primary/10 rounded-lg p-6 mb-6">
              <p className="text-lg font-mono font-bold text-center">
                Estimated Earnings = (Total Views ÷ 1,000) × CPM
              </p>
            </div>

            <p className="text-muted-foreground mb-4">
              But there&apos;s more to it than just views. YouTube&apos;s revenue model includes{" "}
              <strong>multiple monetization streams</strong>, including:
            </p>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground mb-8">
              <li><strong>Ad Revenue</strong> (CPM & RPM)</li>
              <li><strong>YouTube Premium Earnings</strong></li>
              <li><strong>Channel Memberships & Super Chats</strong></li>
              <li><strong>Merchandise Sales</strong></li>
            </ol>

            <h4 className="text-xl font-semibold mb-3">Ad Revenue: CPM vs. RPM</h4>
            <ul className="space-y-4 list-disc list-inside text-muted-foreground mb-6">
              <li>
                <strong>CPM (Cost per Thousand Impressions):</strong> This is what advertisers pay per
                1,000 ad views. CPM can vary widely based on content type, audience, and location.
                <ul className="mt-2 ml-6 space-y-1">
                  <li><strong>Tech & Finance content:</strong> $10–$20 CPM</li>
                  <li><strong>Entertainment & Vlogs:</strong> $2–$8 CPM</li>
                  <li><strong>Gaming Content:</strong> $1–$4 CPM</li>
                  <li><strong>Global Average CPM:</strong> $1–$5</li>
                </ul>
              </li>
              <li>
                <strong>RPM (Revenue per Thousand Views):</strong> This is what the creator earns{" "}
                <strong>after</strong> YouTube takes its 45% cut. It accounts for all revenue streams,
                not just ads. On average, RPM is <strong>50% to 60% of CPM</strong>.
              </li>
            </ul>

            <div className="bg-card border rounded-lg p-6 mb-6">
              <p className="font-semibold mb-2">📌 Example Calculation:</p>
              <p className="text-muted-foreground">
                If a video gets <strong>100,000 views</strong> and has a <strong>$5 CPM</strong>:
              </p>
              <p className="font-mono text-sm mt-2">(100,000 / 1,000) × 5 = $500</p>
              <p className="text-muted-foreground mt-2">
                Since YouTube takes <strong>45%</strong>, the creator keeps:
              </p>
              <p className="font-mono text-sm">$500 - ($500 × 0.45) = $275</p>
            </div>

            <h4 className="text-xl font-semibold mb-3">YouTube Premium Earnings</h4>
            <p className="text-muted-foreground mb-6">
              Subscribers of <strong>YouTube Premium</strong> (ad-free service) generate revenue for
              creators based on watch time. YouTube distributes a portion of the{" "}
              <strong>Premium subscription fees</strong> to creators whose content is watched by Premium users.
            </p>

            <h4 className="text-xl font-semibold mb-3">Channel Memberships & Super Chats</h4>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground mb-6">
              <li>
                <strong>Memberships:</strong> Viewers pay a <strong>monthly fee ($1–$100)</strong> for
                perks like exclusive content and badges.
              </li>
              <li>
                <strong>Super Chats & Super Stickers:</strong> Fans can donate during{" "}
                <strong>live streams</strong>, often between <strong>$1–$500 per chat</strong>.
              </li>
            </ul>

            <h4 className="text-xl font-semibold mb-3">Merchandise Sales & Brand Deals</h4>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
              <li>
                <strong>Merchandise:</strong> Creators can link their store via{" "}
                <strong>YouTube Shopping</strong> and earn from direct sales.
              </li>
              <li>
                <strong>Brand Deals & Sponsorships:</strong> Often more profitable than ad revenue.
                A mid-size creator (100K–500K subscribers) can make{" "}
                <strong>$1,000–$10,000 per sponsored video</strong>, depending on the niche.
              </li>
            </ul>
          </div>
        </section>

        {/* Pay Per View Section */}
        <section className="container mx-auto px-4 py-16 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How Much Does YouTube Pay Per View & Subscriber?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Revenue Per View</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Only 40–60% of total views are monetized</strong> (not all views get ads)</li>
                  <li>• Monetized views typically generate <strong>$0.003–$0.02 per view</strong></li>
                  <li>• <strong>100,000 monetized views</strong> can earn <strong>$300–$2,000</strong></li>
                </ul>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Revenue Per Subscriber</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Subscribers don&apos;t directly generate income</strong>, but boost engagement</li>
                  <li>• A channel with <strong>1 million subscribers</strong> can earn{" "}
                    <strong>$5,000–$50,000 per month</strong></li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Key Metrics & Terms</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-semibold">CPM (Cost Per Thousand Impressions)</p>
                <p className="text-sm text-muted-foreground">What advertisers pay per 1,000 ad views</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-semibold">RPM (Revenue Per Thousand Views)</p>
                <p className="text-sm text-muted-foreground">What a creator earns per 1,000 views after YouTube&apos;s cut</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-semibold">Monetized Views</p>
                <p className="text-sm text-muted-foreground">Views where ads are shown</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-semibold">Ad Fill Rate</p>
                <p className="text-sm text-muted-foreground">The percentage of views that get ads (typically 40–60%)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Country CPM Section */}
        <section id="cpm-rates" className="container mx-auto px-4 py-16 bg-background rounded-3xl border mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Country-Specific Earnings</h2>

            <h3 className="text-2xl font-semibold mb-4">Top 10 Countries with Highest YouTube CPM (2026)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-3 px-4 font-semibold">Rank</th>
                    <th className="py-3 px-4 font-semibold">Country</th>
                    <th className="py-3 px-4 font-semibold">Median CPM</th>
                    <th className="py-3 px-4 font-semibold">Range</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4 font-medium text-foreground">United States</td>
                    <td className="py-3 px-4">$10.26</td>
                    <td className="py-3 px-4">$7.51 – $15.76</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4 font-medium text-foreground">Australia</td>
                    <td className="py-3 px-4">$7.67</td>
                    <td className="py-3 px-4">$5.03 – $13.11</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4 font-medium text-foreground">Norway</td>
                    <td className="py-3 px-4">$7.03</td>
                    <td className="py-3 px-4">$3.00 – $17.63</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4 font-medium text-foreground">Switzerland</td>
                    <td className="py-3 px-4">$6.89</td>
                    <td className="py-3 px-4">$2.86 – $19.64</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">5</td>
                    <td className="py-3 px-4 font-medium text-foreground">United Kingdom</td>
                    <td className="py-3 px-4">$6.53</td>
                    <td className="py-3 px-4">$4.53 – $12.27</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4 font-medium text-foreground">Denmark</td>
                    <td className="py-3 px-4">$6.38</td>
                    <td className="py-3 px-4">$2.60 – $24.65</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">7</td>
                    <td className="py-3 px-4 font-medium text-foreground">New Zealand</td>
                    <td className="py-3 px-4">$5.77</td>
                    <td className="py-3 px-4">$2.60 – $20.43</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4 font-medium text-foreground">Canada</td>
                    <td className="py-3 px-4">$5.71</td>
                    <td className="py-3 px-4">$3.53 – $11.46</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">9</td>
                    <td className="py-3 px-4 font-medium text-foreground">Belgium</td>
                    <td className="py-3 px-4">$5.60</td>
                    <td className="py-3 px-4">$2.67 – $20.33</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4 font-medium text-foreground">Netherlands</td>
                    <td className="py-3 px-4">$5.54</td>
                    <td className="py-3 px-4">$3.00 – $18.40</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Other High CPM Countries</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                <span className="font-medium">Sweden</span>
                <span className="text-primary font-bold">$18.18</span>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                <span className="font-medium">Finland</span>
                <span className="text-primary font-bold">$14.90</span>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                <span className="font-medium">South Korea</span>
                <span className="text-primary font-bold">$17.00</span>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                <span className="font-medium">Ireland</span>
                <span className="text-primary font-bold">€16.56</span>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 flex justify-between items-center">
                <span className="font-medium">Israel</span>
                <span className="text-primary font-bold">€12.81</span>
              </div>
            </div>
          </div>
        </section>

        {/* Factors Section */}
        <section id="factors" className="container mx-auto px-4 py-24 mb-16 relative">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Earnings <span className="text-primary italic">Determinants</span></h2>
              <p className="text-muted-foreground text-lg">Multi-dimensional variables that calibrate your ultimate revenue output.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Impression Velocity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Raw view counts are just the surface. We analyze <span className="text-foreground font-semibold">Impression Quality</span> and ad-fill efficiency to determine true monetization potential.
                </p>
              </div>

              <div className="group bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Geo-Demographics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Audience localization significantly shifts CPM benchmarks. Tier-1 geography engagement commands <span className="text-foreground font-semibold">Premium Ad Inventory</span> rates.
                </p>
              </div>

              <div className="group bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Retention Matrix</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Algorithmic favor is earned through <span className="text-foreground font-semibold">Average View Duration</span>. High engagement signals quality, unlocking mid-roll ad slots.
                </p>
              </div>

              <div className="group bg-card/40 backdrop-blur-sm border border-border/50 rounded-[2.5rem] p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Video className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Niche Liquidity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Content categories dictate advertiser bidding wars. High-liquidity niches like <span className="text-foreground font-semibold">FinTech & SaaS</span> yield 10x ROI vs standard entertainment.
                </p>
              </div>
            </div>

            <div className="mt-16 p-10 bg-muted/30 rounded-[2.5rem] border border-dashed border-border/50">
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Additional Global Factors</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Seasonality", desc: "Ad rates peak in Q4 due to retail demand." },
                  { label: "Content Quality", desc: "High production value boosts completion rates." },
                  { label: "Video Length", desc: "8min+ videos allow high-yield mid-rolls." },
                  { label: "Posting Frequency", desc: "Consistency stabilizes your RPM baseline." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-1 shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{item.label}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 1 Million Views Section */}
        <section className="container mx-auto px-4 py-24 bg-primary/[0.02] rounded-[3rem] border border-primary/5 mb-16 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 blur-[80px] rounded-full" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">The <span className="text-primary italic">1 Million View</span> Milestone</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Achieving 1,000,000 views is a significant scaling event. With a standard network average of <strong>$5.00 CPM</strong>, the gross yield approximates:
            </p>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="p-6 bg-background border border-primary/20 rounded-2xl shadow-xl shadow-primary/5">
                  <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-2">Gross Revenue Projection</div>
                  <div className="text-4xl font-black text-primary">$5,000.00</div>
                  <div className="text-xs text-muted-foreground mt-2">1,000 CPM Units @ $5.00/unit</div>
                </div>
                <div className="p-6 bg-primary text-white rounded-2xl shadow-xl shadow-primary/20">
                  <div className="text-sm uppercase tracking-widest font-bold mb-2 opacity-80">Net Creator Earnings</div>
                  <div className="text-4xl font-black">$2,750.00</div>
                  <div className="text-xs mt-2 opacity-80">Post-YouTube 45% Revenue Share Adjustment</div>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>💡 <strong className="text-foreground">Scale Potential:</strong> Beyond ad-sense, 1M views typically generate an additional 2-3x revenue through affiliate integration and direct brand partnerships.</p>
                <p>🚀 <strong className="text-foreground">Velocity:</strong> High-retention content at this scale triggers aggressive algorithmic pushes, often doubling the view count within 72 hours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section id="tips" className="container mx-auto px-4 py-24 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">
                  <Lightbulb className="h-4 w-4" />
                  Optimization Guide
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Maximize Your <span className="text-primary italic">Revenue Velocity</span></h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Smart SEO", desc: "Keyword mapping for high-intent queries.", icon: Globe },
                { title: "Deep Engagement", desc: "Interactive community triggers.", icon: Users },
                { title: "Asset Quality", desc: "High bitrate, professional fidelity.", icon: Video },
                { title: "Revenue Mix", desc: "Sub-based income streams.", icon: Shield },
                { title: "Velocity Tuning", desc: "Consistent upload cadence.", icon: Zap },
                { title: "Market Targeting", desc: "High-CPM audience localization.", icon: Globe },
                { title: "CTR Mastery", desc: "Psychological thumbnail design.", icon: TrendingUp },
                { title: "Short Form", desc: "Top-of-funnel traffic scaling.", icon: Video }
              ].map((tip, i) => (
                <div key={i} className="p-6 bg-card border border-border/50 rounded-3xl hover:border-primary/50 transition-all group cursor-default">
                  <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <tip.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">{tip.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Niches Section */}
        <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-transparent to-primary/[0.03] rounded-[3rem] mb-16 border border-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Premium <span className="text-primary italic">Niche Benchmarks</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Target high-liquidity categories to capture premium advertiser budgets and maximize your average CPM.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <NicheCard
                title="Finance & Investing"
                cpm="$20–$50"
                color="from-emerald-500 to-teal-600"
                description="High-intent audience seeking financial instruments and investment vehicles."
                icon="📈"
              />

              <NicheCard
                title="Business & SaaS"
                cpm="$15–$40"
                color="from-blue-600 to-indigo-700"
                description="B2B focuses with high customer lifetime value, driving massive ad competition."
                icon="💼"
              />

              <NicheCard
                title="Real Estate"
                cpm="$15–$35"
                color="from-orange-500 to-red-600"
                description="High-ticket items and luxury services command tier-1 advertiser interest."
                icon="🏠"
              />

              <NicheCard
                title="Tech & AI"
                cpm="$10–$30"
                color="from-cyan-500 to-blue-600"
                description="Reviews and tutorials on high-ticket hardware and enterprise software."
                icon="📱"
              />

              <NicheCard
                title="Health & Wellness"
                cpm="$10–$25"
                color="from-rose-500 to-pink-600"
                description="Pharma and supplement industries spend heavily on targeted demographics."
                icon="💪"
              />

              <NicheCard
                title="EdTech"
                cpm="$10–$25"
                color="from-violet-500 to-fuchsia-600"
                description="Online learning and career advancement sectors yield stable, high-value returns."
                icon="📚"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
