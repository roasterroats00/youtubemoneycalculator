"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Calculator, Zap, TrendingUp, DollarSign, BarChart2 } from "lucide-react";

export interface EarningsInputProps {
  onCalculate?: (result: EarningsResult) => void;
}

export interface EarningsResult {
  monetizedViews: number;
  grossRevenue: number;
  netRevenue: number;
  rpm: number;
}

export function EarningsInput({ onCalculate }: EarningsInputProps) {
  const [views, setViews] = useState<string>("10000");
  const [cpm, setCpm] = useState<string>("5");
  const [monetizedRate, setMonetizedRate] = useState<string>("50");
  const [result, setResult] = useState<EarningsResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/calculate/views", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          views: parseInt(views) || 0,
          cpm: parseFloat(cpm) || 0,
          monetizedRate: parseFloat(monetizedRate) / 100,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
        onCalculate?.(data);
      }
    } catch (error) {
      console.error("Calculation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

      <Card className="relative bg-background/60 backdrop-blur-2xl border-border/50 rounded-[2rem] overflow-hidden shadow-2xl">
        <CardHeader className="pb-8 border-b border-border/10 bg-muted/5">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <Calculator className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-black tracking-tight">Basic Earnings Calculator</CardTitle>
              <CardDescription className="text-muted-foreground font-medium">
                Calculate estimated YouTube earnings based on views and CPM
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-8 space-y-8">
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="views" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                  Total Views
                </Label>
                <div className="relative">
                  <BarChart2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="views"
                    type="number"
                    value={views}
                    onChange={(e) => setViews(e.target.value)}
                    placeholder="10000"
                    min="0"
                    className="pl-12 h-14 bg-muted/20 border-border/50 rounded-2xl focus:ring-primary/20 transition-all font-bold text-lg"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="cpm" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                  CPM ($)
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="cpm"
                    type="number"
                    value={cpm}
                    onChange={(e) => setCpm(e.target.value)}
                    placeholder="5"
                    min="0"
                    step="0.1"
                    className="pl-12 h-14 bg-muted/20 border-border/50 rounded-2xl focus:ring-primary/20 transition-all font-bold text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="monetizedRate" className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                Monetized Views (%)
              </Label>
              <div className="relative">
                <Zap className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="monetizedRate"
                  type="number"
                  value={monetizedRate}
                  onChange={(e) => setMonetizedRate(e.target.value)}
                  placeholder="50"
                  min="0"
                  max="100"
                  className="pl-12 h-14 bg-muted/20 border-border/50 rounded-2xl focus:ring-primary/20 transition-all font-bold text-lg"
                />
              </div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider ml-1">
                Typically 40-60% of views are monetized
              </p>
            </div>

            <Button
              type="submit"
              className="w-full h-16 rounded-2xl text-lg font-black tracking-widest uppercase bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-[0.98]"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Calculating...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Calculate Earnings
                </div>
              )}
            </Button>
          </form>

          {result && (
            <div className="mt-12 pt-8 border-t border-border/10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group/res rounded-[2rem] bg-gradient-to-br from-primary to-primary/80 p-[1px] shadow-lg shadow-primary/10">
                  <div className="bg-background/95 rounded-[calc(2rem-1px)] p-6 group-hover/res:bg-background/90 transition-colors">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Gross Revenue</p>
                    <p className="text-3xl font-black text-foreground">{formatCurrency(result.grossRevenue)}</p>
                    <div className="absolute right-6 top-6 opacity-10 group-hover/res:opacity-20 transition-opacity">
                      <DollarSign className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </div>

                <div className="relative group/res rounded-[2rem] bg-gradient-to-br from-primary to-primary/60 p-[1px] shadow-lg shadow-primary/5">
                  <div className="bg-primary/10 backdrop-blur-sm rounded-[calc(2rem-1px)] p-6 group-hover/res:bg-primary/20 transition-colors">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 mb-2">Net Creator Earnings</p>
                    <p className="text-3xl font-black text-primary">{formatCurrency(result.netRevenue)}</p>
                    <div className="absolute right-6 top-6 opacity-20">
                      <Zap className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-muted/20 rounded-2xl border border-border/50 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-background/50 flex items-center justify-center text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground font-medium">Monetized Views:</span>
                  <span className="font-black text-foreground">{result.monetizedViews.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-background/50 flex items-center justify-center text-muted-foreground">
                    <BarChart2 className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground font-medium">Calculated RPM:</span>
                  <span className="font-black text-foreground">${result.rpm.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
