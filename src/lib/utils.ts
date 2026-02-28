import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency values
 */
export function formatCurrency(value: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format large numbers with K, M, B suffixes
 */
export function formatNumber(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }
  return value.toString();
}

/**
 * Calculate earnings based on views, CPM, and monetization rate
 */
export interface EarningsCalculation {
  monetizedViews: number;
  grossRevenue: number;
  netRevenue: number;
  rpm: number;
}

export function calculateEarnings(
  views: number,
  cpm: number,
  monetizedRate: number = 0.5
): EarningsCalculation {
  const monetizedViews = Math.round(views * monetizedRate);
  const grossRevenue = (monetizedViews / 1000) * cpm;
  const netRevenue = grossRevenue * 0.55; // YouTube takes 45%
  const rpm = netRevenue / views * 1000;

  return {
    monetizedViews,
    grossRevenue,
    netRevenue,
    rpm,
  };
}

/**
 * Calculate revenue projections
 */
export interface RevenueProjection {
  monthly: number;
  yearly: number;
}

export function calculateProjection(
  avgViews: number,
  uploadFrequency: number, // videos per month
  rpm: number
): RevenueProjection {
  const monthly = avgViews * uploadFrequency * (rpm / 1000);
  const yearly = monthly * 12;

  return {
    monthly: Math.round(monthly),
    yearly: Math.round(yearly),
  };
}
