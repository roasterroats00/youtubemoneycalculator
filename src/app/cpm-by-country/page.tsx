import type { Metadata } from "next";
import Link from "next/link";
import { Globe, TrendingUp, DollarSign, Zap, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";

import { countries } from "@/data/countries";

export const metadata: Metadata = {
  title: "YouTube CPM Rates by Country 2026 - Highest Paying Countries",
  description: "Discover YouTube CPM rates by country. See which countries have the highest CPM rates in 2026. United States leads with $10.26 median CPM.",
  keywords: [
    "youtube cpm by country",
    "highest youtube cpm countries",
    "youtube cpm rates 2026",
    "youtube earnings by country",
    "cpm rates united states",
    "youtube revenue per country",
  ],
  openGraph: {
    title: "YouTube CPM Rates by Country 2026",
    description: "Discover which countries have the highest YouTube CPM rates in 2026.",
    type: "website",
  },
};

const medalColors: Record<number, string> = {
  1: "bg-yellow-400 text-yellow-900",
  2: "bg-slate-300 text-slate-700",
  3: "bg-amber-600 text-amber-100",
};

export default function CPMByCountryPage() {
  const breadcrumbData = SchemaFactory.breadcrumb([
    { name: "Home", item: "/" },
    { name: "CPM by Country", item: "/cpm-by-country" },
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Schema data={breadcrumbData} />
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-15%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-primary/4 rounded-full blur-[120px]" />
      </div>

      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/5 text-8xl font-black select-none pointer-events-none">
            GLOBAL
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
            <Globe className="h-3 w-3" />
            LIVE CPM BENCHMARKS 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-none">
            CPM by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Country
            </span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Discover which countries have the highest YouTube CPM rates and maximize your channel revenue by targeting high-value audiences.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Highest CPM</span>
            </div>
            <p className="text-3xl font-black mb-1">🇺🇸 $10.26</p>
            <p className="text-sm text-muted-foreground font-medium">United States leads globally with the highest median CPM for YouTube ad revenue.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-muted/30 border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Top-5 Average</span>
            </div>
            <p className="text-3xl font-black mb-1">$7.76</p>
            <p className="text-sm text-muted-foreground font-medium">The top 5 country average, significantly higher than the global $2–$5 average.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-muted/30 border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Revenue Multiplier</span>
            </div>
            <p className="text-3xl font-black mb-1">5×</p>
            <p className="text-sm text-muted-foreground font-medium">US audiences can generate up to 5× more revenue than low-CPM regions.</p>
          </div>
        </div>

        {/* CPM Table */}
        <div className="rounded-[2rem] border border-border/50 overflow-hidden bg-card shadow-xl mb-20">
          <div className="px-8 py-6 border-b border-border/50 bg-muted/20">
            <h2 className="text-lg font-black uppercase tracking-widest flex items-center gap-3">
              <Globe className="h-5 w-5 text-primary" />
              Global CPM Rankings
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/30">
                  <th className="text-left py-4 px-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Rank</th>
                  <th className="text-left py-4 px-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Country</th>
                  <th className="text-left py-4 px-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Median CPM</th>
                  <th className="text-left py-4 px-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">CPM Range</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country, index) => (
                  <tr
                    key={country.name}
                    className={`border-t border-border/30 hover:bg-muted/20 transition-colors group ${index < 3 ? "bg-primary/3" : ""}`}
                  >
                    <td className="py-5 px-8">
                      <span className={`inline-flex items-center justify-center h-9 w-9 rounded-xl font-black text-sm shadow-sm ${medalColors[index + 1] ?? "bg-muted text-muted-foreground"}`}>
                        {index + 1}
                      </span>
                    </td>
                    <td className="py-5 px-8">
                      <Link href={`/cpm/${country.slug}`} className="flex items-center gap-3 font-black text-lg hover:text-primary transition-all">
                        <span className="text-2xl">{country.flag}</span>
                        {country.name}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                      </Link>
                    </td>
                    <td className="py-5 px-8">
                      <span className="text-2xl font-black text-primary">
                        ${country.cpmMedian.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-5 px-8 text-muted-foreground font-bold">
                      <span className="bg-muted/40 px-3 py-1 rounded-full text-sm">
                        ${country.cpmMin.toFixed(2)} – ${country.cpmMax.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-[2rem] bg-card border border-border/50 space-y-4">
            <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              Why CPM Varies by Country?
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Economic Development:</strong> Wealthier countries have higher advertising budgets.</span></li>
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Advertiser Demand:</strong> More competition among advertisers drives up CPM.</span></li>
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Audience Value:</strong> Demographics with higher buying power attract premium bids.</span></li>
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Language:</strong> English-speaking countries typically command higher CPMs globally.</span></li>
            </ul>
          </div>
          <div className="p-8 rounded-[2rem] bg-card border border-border/50 space-y-4">
            <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              How to Target High CPM Countries
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Create in English:</strong> English content has global appeal and attracts high-CPM audiences.</span></li>
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Upload at optimal times:</strong> Schedule videos when your target audience is most active.</span></li>
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Use relevant keywords:</strong> Optimize for your target country's search terms.</span></li>
              <li className="flex items-start gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /><span><strong className="text-foreground">Engage with audience:</strong> Build community in your target region to boost retention.</span></li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="p-12 rounded-[3rem] bg-gradient-to-br from-primary to-primary/60 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 opacity-10 p-6"><Zap className="h-40 w-40 rotate-12" /></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4 uppercase">Calculate Your Revenue</h3>
            <p className="text-white/80 mb-8 font-medium max-w-md mx-auto">
              Use our AI-powered calculator to estimate earnings based on your country&apos;s CPM benchmark.
            </p>
            <Link href="/" className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]">
              Open Calculator
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
