import { NextRequest, NextResponse } from "next/server";
import { calculateEarnings } from "@/lib/utils";

export interface CalculateRequest {
  views: number;
  cpm: number;
  monetizedRate?: number;
}

export interface CalculateResponse {
  monetizedViews: number;
  grossRevenue: number;
  netRevenue: number;
  rpm: number;
}

/**
 * POST /api/calculate/views
 * Calculate YouTube earnings based on views, CPM, and monetization rate
 */
export async function POST(request: NextRequest) {
  try {
    const body: CalculateRequest = await request.json();

    // Validate input
    if (!body.views || !body.cpm) {
      return NextResponse.json(
        { error: "Views and CPM are required" },
        { status: 400 }
      );
    }

    if (body.views < 0 || body.cpm < 0) {
      return NextResponse.json(
        { error: "Views and CPM must be positive numbers" },
        { status: 400 }
      );
    }

    const monetizedRate = body.monetizedRate ?? 0.5; // Default 50% monetized views

    const result = calculateEarnings(body.views, body.cpm, monetizedRate);

    return NextResponse.json({
      monetizedViews: result.monetizedViews,
      grossRevenue: Math.round(result.grossRevenue * 100) / 100,
      netRevenue: Math.round(result.netRevenue * 100) / 100,
      rpm: Math.round(result.rpm * 100) / 100,
    });
  } catch (error) {
    console.error("Calculate API error:", error);
    return NextResponse.json(
      { error: "Failed to calculate earnings" },
      { status: 500 }
    );
  }
}
