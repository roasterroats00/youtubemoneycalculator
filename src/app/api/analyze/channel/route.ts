import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  extractChannelId,
  getChannelById,
  getChannelByHandle,
  getChannelVideos,
  calculateAvgViews,
} from "@/lib/youtube";
import { analyzeChannel, calculateSponsorValue } from "@/lib/gemini";
import { calculateEarnings, calculateProjection } from "@/lib/utils";

export interface AnalyzeChannelRequest {
  url?: string;
  channelId?: string;
  handle?: string;
}

export interface AnalyzeChannelResponse {
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

/**
 * POST /api/analyze/channel
 * Analyze a YouTube channel and provide revenue estimates
 */
export async function POST(request: NextRequest) {
  try {
    const body: AnalyzeChannelRequest = await request.json();

    // Validate input
    if (!body.url && !body.channelId && !body.handle) {
      return NextResponse.json(
        { error: "Channel URL, Channel ID, or Handle is required" },
        { status: 400 }
      );
    }

    let channelId: string | undefined = body.channelId || undefined;
    let handle: string | undefined = body.handle || undefined;

    // Extract channel ID from URL if provided
    if (body.url && !channelId) {
      const extractedId = extractChannelId(body.url);
      if (extractedId) {
        channelId = extractedId;
      }
      
      // If we couldn't extract ID, it might be a handle URL
      if (!channelId) {
        try {
          const urlObj = new URL(body.url);
          const handleMatch = urlObj.pathname.match(/\/(?:c\/|@)([a-zA-Z0-9_-]+)/);
          if (handleMatch) {
            handle = handleMatch[1];
          }
        } catch {
          return NextResponse.json(
            { error: "Invalid URL format" },
            { status: 400 }
          );
        }
      }
    }

    // Fetch channel data
    let channelData;
    if (channelId) {
      channelData = await getChannelById(channelId);
    } else if (handle) {
      channelData = await getChannelByHandle(handle);
    }

    if (!channelData) {
      return NextResponse.json(
        { error: "Channel not found. Please check the URL or channel ID." },
        { status: 404 }
      );
    }

    // Fetch recent videos to calculate average views
    const videos = await getChannelVideos(channelData.channelId);
    const avgViews = calculateAvgViews(videos);

    // Use average views from recent videos, or fallback to estimated
    const effectiveAvgViews = avgViews > 0 ? avgViews : Math.round(channelData.totalViews / channelData.totalVideos);

    // Analyze with Gemini AI
    const aiAnalysis = await analyzeChannel({
      subscribers: channelData.subscribers,
      avgViews: effectiveAvgViews,
      totalViews: channelData.totalViews,
      totalVideos: channelData.totalVideos,
      country: channelData.country,
      niche: undefined, // Could be enhanced with AI niche detection
    });

    // Calculate earnings based on AI recommendations
    const earnings = calculateEarnings(
      effectiveAvgViews,
      aiAnalysis.recommended_rpm,
      0.5
    );

    // Calculate projections (assuming 4 videos per month)
    const projection = calculateProjection(
      effectiveAvgViews,
      4,
      aiAnalysis.recommended_rpm
    );

    // Calculate sponsor value
    const sponsorEstimate = calculateSponsorValue(effectiveAvgViews);

    // Save analysis to database (optional - can be enabled when auth is set up)
    // await prisma.analysis.create({
    //   data: {
    //     views: effectiveAvgViews,
    //     estimatedCPM: aiAnalysis.estimated_cpm_min,
    //     estimatedRPM: aiAnalysis.recommended_rpm,
    //     grossRevenue: earnings.grossRevenue,
    //     netRevenue: earnings.netRevenue,
    //     aiSummary: aiAnalysis.analysis_summary,
    //     sponsorEstimate,
    //     monthlyProjection: projection.monthly,
    //     yearlyProjection: projection.yearly,
    //   },
    // });

    const response: AnalyzeChannelResponse = {
      channel: {
        channelId: channelData.channelId,
        title: channelData.title,
        subscribers: channelData.subscribers,
        totalViews: channelData.totalViews,
        totalVideos: channelData.totalVideos,
        avgViews: effectiveAvgViews,
        country: channelData.country,
        niche: null,
      },
      analysis: {
        estimatedCPM: Math.round((aiAnalysis.estimated_cpm_min + aiAnalysis.estimated_cpm_max) / 2),
        estimatedRPM: Math.round(aiAnalysis.recommended_rpm * 100) / 100,
        grossRevenue: Math.round(earnings.grossRevenue * 100) / 100,
        netRevenue: Math.round(earnings.netRevenue * 100) / 100,
        aiSummary: aiAnalysis.analysis_summary,
        sponsorEstimate,
        monthlyProjection: projection.monthly,
        yearlyProjection: projection.yearly,
      },
    };

    return NextResponse.json(response);
  } catch (error: any) {
    console.error("Channel analysis error:", error);
    
    if (error.message?.includes("API key")) {
      return NextResponse.json(
        { error: "API key not configured. Please set up YouTube and Gemini API keys." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: error.message || "Failed to analyze channel" },
      { status: 500 }
    );
  }
}
