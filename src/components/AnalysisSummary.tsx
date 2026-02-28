"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { Brain, DollarSign, TrendingUp } from "lucide-react";

export interface AnalysisSummaryProps {
  aiSummary: string;
  estimatedCPM: number;
  estimatedRPM: number;
  sponsorEstimate: number;
  monthlyProjection: number;
  yearlyProjection: number;
}

export function AnalysisSummary({
  aiSummary,
  estimatedCPM,
  estimatedRPM,
  sponsorEstimate,
  monthlyProjection,
  yearlyProjection,
}: AnalysisSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI Revenue Analysis
        </CardTitle>
        <CardDescription>
          Intelligent revenue estimates powered by Gemini AI
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm leading-relaxed">{aiSummary}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              Estimated CPM
            </div>
            <p className="mt-2 text-2xl font-bold">${estimatedCPM.toFixed(2)}</p>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              Estimated RPM
            </div>
            <p className="mt-2 text-2xl font-bold">${estimatedRPM.toFixed(2)}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground">Sponsor/Video</p>
            <p className="mt-1 text-xl font-bold">{formatCurrency(sponsorEstimate)}</p>
          </div>

          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground">Monthly</p>
            <p className="mt-1 text-xl font-bold">{formatCurrency(monthlyProjection)}</p>
          </div>

          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground">Yearly</p>
            <p className="mt-1 text-xl font-bold">{formatCurrency(yearlyProjection)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
