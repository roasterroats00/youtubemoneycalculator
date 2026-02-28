import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.warn("GEMINI_API_KEY is not configured");
}

export interface GeminiAnalysisInput {
  subscribers: number;
  avgViews: number;
  totalViews: number;
  totalVideos: number;
  country?: string | null;
  niche?: string | null;
  engagement?: {
    avgLikes: number;
    avgComments: number;
  };
}

export interface GeminiAnalysisOutput {
  estimated_cpm_min: number;
  estimated_cpm_max: number;
  recommended_rpm: number;
  monthly_revenue_estimate: number;
  yearly_revenue_estimate: number;
  sponsor_value_estimate: number;
  analysis_summary: string;
}

/**
 * Build the prompt for Gemini AI analysis
 */
export function buildAnalysisPrompt(data: GeminiAnalysisInput): string {
  const nicheInfo = data.niche ? `Niche: ${data.niche}` : "Niche: Not specified";
  const countryInfo = data.country ? `Country: ${data.country}` : "Country: Not specified";
  const engagementInfo = data.engagement
    ? `Avg Likes: ${data.engagement.avgLikes}, Avg Comments: ${data.engagement.avgComments}`
    : "Engagement data not available";

  return `You are a YouTube revenue expert. Analyze this channel and provide revenue estimates.

Channel Data:
- Subscribers: ${data.subscribers.toLocaleString()}
- Average Views per Video: ${data.avgViews.toLocaleString()}
- Total Views: ${data.totalViews.toLocaleString()}
- Total Videos: ${data.totalVideos}
- ${countryInfo}
- ${nicheInfo}
- ${engagementInfo}

Based on industry standards and the provided data, calculate:
1. Estimated CPM range (min-max) based on niche and country
2. Recommended RPM (Revenue Per Mille)
3. Monthly revenue estimate (assuming 4 videos/month)
4. Yearly revenue estimate
5. Sponsor integration value estimate

Consider these factors:
- Higher CPM for: Finance ($30-60), Tech ($20-40), Business ($25-50)
- Medium CPM for: Lifestyle ($10-25), Education ($15-30), Gaming ($10-25)
- Lower CPM for: Entertainment ($5-15), Music ($3-10)
- Country multiplier: US/UK/CA/AU = 1.0, EU = 0.7, Other = 0.3-0.5

Return STRICT JSON in this exact format (no markdown, no code blocks):
{
  "estimated_cpm_min": number,
  "estimated_cpm_max": number,
  "recommended_rpm": number,
  "monthly_revenue_estimate": number,
  "yearly_revenue_estimate": number,
  "sponsor_value_estimate": number,
  "analysis_summary": "string"
}`;
}

/**
 * Parse JSON response from Gemini
 */
export function parseGeminiResponse(text: string): GeminiAnalysisOutput {
  try {
    // Remove markdown code blocks if present
    const cleanedText = text
      .replace(/```json\s*/g, "")
      .replace(/```\s*/g, "")
      .trim();

    const parsed = JSON.parse(cleanedText);

    // Validate required fields
    const requiredFields = [
      "estimated_cpm_min",
      "estimated_cpm_max",
      "recommended_rpm",
      "monthly_revenue_estimate",
      "yearly_revenue_estimate",
      "sponsor_value_estimate",
      "analysis_summary"
    ];

    for (const field of requiredFields) {
      if (!(field in parsed)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    return parsed as GeminiAnalysisOutput;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Invalid AI response format");
  }
}

/**
 * Country-based CPM multiplier
 */
function getCountryMultiplier(country?: string | null): number {
  if (!country) return 0.5;
  const c = country.toUpperCase();
  const tier1 = ["US", "CA", "GB", "UK", "AU", "NZ", "NO", "CH", "DK", "SE"];
  const tier2 = ["DE", "FR", "NL", "BE", "AT", "IE", "FI", "IT", "ES", "PT", "JP", "KR", "SG"];
  const tier3 = ["BR", "MX", "AR", "PL", "CZ", "RO", "TR", "TH", "MY", "CO"];
  if (tier1.includes(c)) return 1.0;
  if (tier2.includes(c)) return 0.7;
  if (tier3.includes(c)) return 0.4;
  return 0.3;
}

/**
 * Local fallback analysis (no AI required)
 */
function analyzeChannelLocally(data: GeminiAnalysisInput): GeminiAnalysisOutput {
  const cpmRange = getNicheCPMRange(data.niche);
  const multiplier = getCountryMultiplier(data.country);

  const cpmMin = Math.round(cpmRange.min * multiplier * 100) / 100;
  const cpmMax = Math.round(cpmRange.max * multiplier * 100) / 100;
  const rpm = Math.round(((cpmMin + cpmMax) / 2) * 0.55 * 100) / 100; // 55% creator share

  const monthlyVideos = 4;
  const monetizedRate = 0.5;
  const monthlyRevenue = Math.round((data.avgViews * monthlyVideos * monetizedRate * rpm) / 1000);
  const yearlyRevenue = monthlyRevenue * 12;
  const sponsorValue = calculateSponsorValue(data.avgViews, data.niche);

  const subsFormatted = data.subscribers >= 1e6 ? `${(data.subscribers / 1e6).toFixed(1)}M` : `${(data.subscribers / 1e3).toFixed(0)}K`;
  const viewsFormatted = data.avgViews >= 1e6 ? `${(data.avgViews / 1e6).toFixed(1)}M` : `${(data.avgViews / 1e3).toFixed(0)}K`;

  const summary = `This channel has ${subsFormatted} subscribers with an average of ${viewsFormatted} views per video. ` +
    `Based on the ${data.niche || "general"} niche and ${data.country || "global"} audience, the estimated CPM range is $${cpmMin}–$${cpmMax}. ` +
    `With approximately ${monthlyVideos} uploads per month and a ${(monetizedRate * 100).toFixed(0)}% monetized view rate, ` +
    `the channel is estimated to earn $${monthlyRevenue.toLocaleString()}/month and $${yearlyRevenue.toLocaleString()}/year from ads alone. ` +
    `Individual sponsor integrations could be valued at approximately $${sponsorValue.toLocaleString()} per video.`;

  return {
    estimated_cpm_min: cpmMin,
    estimated_cpm_max: cpmMax,
    recommended_rpm: rpm,
    monthly_revenue_estimate: monthlyRevenue,
    yearly_revenue_estimate: yearlyRevenue,
    sponsor_value_estimate: sponsorValue,
    analysis_summary: summary,
  };
}

/**
 * Analyze channel with Gemini AI (with local fallback)
 */
export async function analyzeChannel(data: GeminiAnalysisInput): Promise<GeminiAnalysisOutput> {
  // Try Gemini AI first
  if (GEMINI_API_KEY) {
    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = buildAnalysisPrompt(data);
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      return parseGeminiResponse(text);
    } catch (error) {
      console.warn("Gemini API failed, using local fallback analysis:", (error as Error).message);
    }
  }

  // Fallback: use local analysis
  console.log("Using local revenue analysis (no AI)");
  return analyzeChannelLocally(data);
}

/**
 * Get niche-based CPM estimates (fallback without AI)
 */
export function getNicheCPMRange(niche?: string | null): { min: number; max: number } {
  const nicheLower = niche?.toLowerCase() || "";

  const cpmRanges: Record<string, { min: number; max: number }> = {
    finance: { min: 30, max: 60 },
    "business": { min: 25, max: 50 },
    "investing": { min: 35, max: 65 },
    "crypto": { min: 25, max: 55 },
    tech: { min: 20, max: 40 },
    "technology": { min: 20, max: 40 },
    "software": { min: 25, max: 45 },
    "programming": { min: 25, max: 50 },
    education: { min: 15, max: 30 },
    "tutorial": { min: 15, max: 30 },
    "how-to": { min: 15, max: 30 },
    lifestyle: { min: 10, max: 25 },
    "vlog": { min: 8, max: 20 },
    "fashion": { min: 10, max: 25 },
    "beauty": { min: 12, max: 28 },
    gaming: { min: 10, max: 25 },
    "game": { min: 10, max: 25 },
    entertainment: { min: 5, max: 15 },
    "comedy": { min: 5, max: 15 },
    "music": { min: 3, max: 10 },
    "sports": { min: 8, max: 20 },
    "fitness": { min: 12, max: 28 },
    "health": { min: 15, max: 35 },
    "food": { min: 8, max: 20 },
    "cooking": { min: 10, max: 22 },
    "travel": { min: 12, max: 28 },
  };

  // Find matching niche
  for (const [key, range] of Object.entries(cpmRanges)) {
    if (nicheLower.includes(key)) {
      return range;
    }
  }

  // Default range
  return { min: 5, max: 20 };
}

/**
 * Calculate sponsor value based on views and niche
 */
export function calculateSponsorValue(avgViews: number, niche?: string | null): number {
  const cpmRange = getNicheCPMRange(niche);
  const sponsorCPM = (cpmRange.min + cpmRange.max) / 2;

  // Sponsor rate = (avgViews / 1000) × sponsorCPM
  return Math.round((avgViews / 1000) * sponsorCPM);
}
