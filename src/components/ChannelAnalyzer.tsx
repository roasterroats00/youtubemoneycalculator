"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueCard } from "@/components/RevenueCard";
import { AnalysisSummary } from "@/components/AnalysisSummary";
import { formatNumber } from "@/lib/utils";
import { Search, Loader2, Youtube, Globe, Info, Zap } from "lucide-react";

export interface ChannelAnalyzeResult {
  channel: {
    channelId: string;
    title: string;
    subscribers: number;
    totalViews: number;
    totalVideos: number;
    avgViews: number;
    country: string | null;
    niche: string | null;
  };
  analysis: {
    estimatedCPM: number;
    estimatedRPM: number;
    grossRevenue: number;
    netRevenue: number;
    aiSummary: string;
    sponsorEstimate: number;
    monthlyProjection: number;
    yearlyProjection: number;
  };
}

export function ChannelAnalyzer() {
  const [channelUrl, setChannelUrl] = useState("");
  const [result, setResult] = useState<ChannelAnalyzeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/analyze/channel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: channelUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Failed to analyze channel");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Analysis error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
        <Card className="relative bg-background/60 backdrop-blur-2xl border-border/50 rounded-[2rem] overflow-hidden shadow-2xl">
          <CardHeader className="pb-8 border-b border-border/10 bg-muted/5">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-black tracking-tight">Channel Revenue Analyzer</CardTitle>
                <CardDescription className="text-muted-foreground font-medium">
                  Enter a YouTube channel URL to analyze revenue potential
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleAnalyze} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="channelUrl" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                  YouTube Channel URL
                </Label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="channelUrl"
                      type="text"
                      value={channelUrl}
                      onChange={(e) => setChannelUrl(e.target.value)}
                      placeholder="https://www.youtube.com/@MrBeast"
                      className="pl-12 h-14 bg-muted/20 border-border/50 rounded-2xl focus:ring-primary/20 transition-all font-bold"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading || !channelUrl}
                    className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Analyzing
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Analyze
                      </div>
                    )}
                  </Button>
                </div>
                <div className="flex items-center gap-2 ml-1 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                  <Info className="h-3 w-3" />
                  Supports @username, channel IDs, and full URLs
                </div>
              </div>
            </form>

            {error && (
              <div className="mt-6 p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-sm text-destructive font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
                {error}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Channel Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <RevenueCard
              title="Subscribers"
              value={result.channel.subscribers}
              type="number"
              icon="users"
            />
            <RevenueCard
              title="Total Views"
              value={result.channel.totalViews}
              type="views"
              icon="video"
            />
            <RevenueCard
              title="Total Videos"
              value={result.channel.totalVideos}
              type="number"
              icon="video"
            />
            <RevenueCard
              title="Avg Views/Video"
              value={result.channel.avgViews}
              type="views"
              description="Based on recent uploads"
              icon="trend"
            />
          </div>

          {/* Channel Breadcrumb Info */}
          <Card className="bg-background/40 backdrop-blur-md border border-border/50 rounded-[2rem] p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Youtube className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">{result.channel.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      {result.channel.country || "Global"}
                    </span>
                    <span className="opacity-30">•</span>
                    <span>{formatNumber(result.channel.subscribers)} Subscribers</span>
                  </p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                Channel Verified & Analyzed
              </div>
            </div>
          </Card>

          {/* Detailed AI Analysis */}
          <AnalysisSummary
            aiSummary={result.analysis.aiSummary}
            estimatedCPM={result.analysis.estimatedCPM}
            estimatedRPM={result.analysis.estimatedRPM}
            sponsorEstimate={result.analysis.sponsorEstimate}
            monthlyProjection={result.analysis.monthlyProjection}
            yearlyProjection={result.analysis.yearlyProjection}
          />
        </div>
      )}
    </div>
  );
}
