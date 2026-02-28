import { NextRequest, NextResponse } from "next/server";
import { checkRateLimitSync, rateLimitResponse, RATE_LIMIT } from "@/lib/ratelimit";

/**
 * Middleware for rate limiting
 * Applies to /api/analyze/channel endpoint
 */
export function middleware(request: NextRequest) {
  // Only apply rate limiting to channel analysis endpoint
  if (request.nextUrl.pathname.startsWith("/api/analyze/channel")) {
    // Only apply to POST requests
    if (request.method !== "POST") {
      return NextResponse.next();
    }

    const response = checkRateLimitSync(request);
    
    if (!response.success) {
      return rateLimitResponse(response.reset);
    }

    const nextResponse = NextResponse.next();
    nextResponse.headers.set("X-RateLimit-Limit", RATE_LIMIT.maxRequests.toString());
    nextResponse.headers.set("X-RateLimit-Remaining", response.remaining.toString());
    nextResponse.headers.set("X-RateLimit-Reset", response.reset.toString());
    
    return nextResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
