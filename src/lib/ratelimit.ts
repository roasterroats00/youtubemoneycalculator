import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting for MVP
// For production, use Upstash Redis or similar
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const RATE_LIMIT = {
  maxRequests: 3, // 3 channel analyses per day for free users
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
};

export function getRateLimitKey(request: NextRequest): string {
  // Use IP address or fallback to anonymous identifier
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "anonymous";
  return `ratelimit:${ip}`;
}

export function rateLimitResponse(resetTime: number): NextResponse {
  const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
  
  return NextResponse.json(
    {
      error: "Rate limit exceeded",
      message: `You have exceeded the free tier limit of ${RATE_LIMIT.maxRequests} channel analyses per day.`,
      retryAfter,
    },
    {
      status: 429,
      headers: {
        "X-RateLimit-Limit": RATE_LIMIT.maxRequests.toString(),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": resetTime.toString(),
        "Retry-After": retryAfter.toString(),
      },
    }
  );
}

// Synchronous version for middleware (middleware can't be async)
export function checkRateLimitSync(
  request: NextRequest
): { success: boolean; remaining: number; reset: number } {
  const key = getRateLimitKey(request);
  const now = Date.now();

  const current = requestCounts.get(key);

  if (!current || now > current.resetTime) {
    requestCounts.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return {
      success: true,
      remaining: RATE_LIMIT.maxRequests - 1,
      reset: now + RATE_LIMIT.windowMs,
    };
  }

  if (current.count >= RATE_LIMIT.maxRequests) {
    return {
      success: false,
      remaining: 0,
      reset: current.resetTime,
    };
  }

  current.count++;
  requestCounts.set(key, current);

  return {
    success: true,
    remaining: RATE_LIMIT.maxRequests - current.count,
    reset: current.resetTime,
  };
}
