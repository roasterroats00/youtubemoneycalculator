1️⃣ Product Overview
Product Name

YouTube Money Calculator (AI Revenue Intelligence)

Core Value

Estimate YouTube earnings

AI-powered CPM prediction

Channel revenue analysis

Sponsor value estimator

Revenue projection

2️⃣ Tech Stack
Frontend

Next.js 14+ (App Router)

TypeScript

TailwindCSS

ShadCN UI

React Query / Server Actions

Backend

Next.js Route Handlers (API routes)

PostgreSQL

Prisma ORM

External APIs

YouTube Data API v3

Gemini 1.5 Pro

Auth

Supabase Auth OR NextAuth

Hosting

Vercel (Frontend + API)

Supabase (Postgres)

3️⃣ System Architecture
Client (Next.js)
   ↓
API Route (Next.js backend)
   ↓
YouTube API → Fetch channel data
   ↓
Gemini AI → Analyze revenue potential
   ↓
PostgreSQL → Save results
   ↓
Return structured JSON to frontend
4️⃣ Database Schema (Prisma)
📦 users
model User {
  id            String   @id @default(uuid())
  email         String   @unique
  password      String?
  plan          Plan     @default(FREE)
  createdAt     DateTime @default(now())
  channels      Channel[]
  analyses      Analysis[]
}
📦 channels
model Channel {
  id                String   @id @default(uuid())
  userId            String
  user              User     @relation(fields: [userId], references: [id])
  channelId         String
  title             String
  subscribers       Int
  totalViews        Int
  totalVideos       Int
  avgViews          Int
  country           String?
  niche             String?
  createdAt         DateTime @default(now())
  analyses          Analysis[]
}
📦 analyses
model Analysis {
  id                    String   @id @default(uuid())
  userId                String?
  user                  User?    @relation(fields: [userId], references: [id])
  channelId             String?
  views                 Int
  estimatedCPM          Float
  estimatedRPM          Float
  grossRevenue          Float
  netRevenue            Float
  aiSummary             String
  sponsorEstimate       Float?
  monthlyProjection     Float?
  yearlyProjection      Float?
  createdAt             DateTime @default(now())
}
📦 plans
enum Plan {
  FREE
  PRO
  AGENCY
}
5️⃣ Core Feature Modules
MODULE 1 – Basic Calculator
Endpoint
POST /api/calculate/views
Input
{
  "views": 100000,
  "cpm": 5,
  "monetizedRate": 0.5
}
Logic
monetizedViews = views × monetizedRate
gross = (monetizedViews / 1000) × cpm
net = gross × 0.55
rpm = net / views × 1000
MODULE 2 – Channel URL Analyzer
Endpoint
POST /api/analyze/channel
Steps

Extract channel ID

Call YouTube API

Calculate avg views

Send structured data to Gemini

Save to DB

Return result

MODULE 3 – Gemini AI Integration
Prompt Structure (IMPORTANT)

Gunakan output JSON agar clean.

You are a YouTube revenue expert.

Return STRICT JSON in this format:

{
  "estimated_cpm_min": number,
  "estimated_cpm_max": number,
  "recommended_rpm": number,
  "monthly_revenue_estimate": number,
  "yearly_revenue_estimate": number,
  "sponsor_value_estimate": number,
  "analysis_summary": "string"
}

Channel Data:
Subscribers: 120000
Avg Views: 20000
Country: United States
Niche: Tech Reviews
API Route Example
// /api/analyze/channel

import { GoogleGenerativeAI } from "@google/generative-ai"

export async function POST(req: Request) {
  const body = await req.json()

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" })

  const prompt = buildPrompt(body)

  const result = await model.generateContent(prompt)
  const text = result.response.text()

  const parsed = JSON.parse(text)

  return Response.json(parsed)
}
MODULE 4 – Sponsor Calculator

Formula:

sponsorRate = (avgViews / 1000) × nicheSponsorCPM

High-tier niches:

Finance: $30–$60

Tech: $20–$40

Gaming: $10–$25

MODULE 5 – Revenue Projection

Projection formula:

monthly = avgViews × uploadFrequency × rpm
yearly = monthly × 12

AI can refine projection.

6️⃣ Frontend Structure (App Router)
/app
  /page.tsx (Homepage)
  /dashboard
  /pricing
  /api
     /calculate
     /analyze
     /gemini
/components
  EarningsInput.tsx
  RevenueCard.tsx
  AnalysisSummary.tsx
/lib
  prisma.ts
  youtube.ts
  gemini.ts
7️⃣ State Flow

User Input →
Call API →
Loading →
Receive structured JSON →
Render:

Estimated Earnings

Revenue Range

AI Summary

Sponsor Estimate

Projection Graph

8️⃣ Rate Limiting (IMPORTANT)

Free:

3 channel analysis/day

Implement:

Middleware

Count analyses per IP

Or require login

9️⃣ Security

Validate YouTube URL

Sanitize Gemini JSON

Limit token usage

Protect API keys via env

🔟 Performance Strategy

Cache YouTube API results (24h)

Store analysis results

Revalidate daily

11️⃣ SEO Structure

Static pages:

/youtube-earnings-calculator

/youtube-cpm-calculator

/youtube-sponsor-calculator

/youtube-channel-value

Programmatic:

/youtube-cpm-united-states

/youtube-cpm-gaming

etc.

12️⃣ Monetization Logic

FREE:

Basic calculator

Limited analysis

No AI explanation depth

PRO:

Unlimited channel analysis

AI breakdown

Sponsor calculator

Revenue projection

Export PDF

AGENCY:

Bulk lookup

CSV export

API access

13️⃣ Environment Variables
DATABASE_URL=
YOUTUBE_API_KEY=
GEMINI_API_KEY=
NEXTAUTH_SECRET=
14️⃣ MVP Build Order (Very Important)

Phase 1 (Week 1)

Basic calculator

Channel analyzer

YouTube API integration

Phase 2 (Week 2)

Gemini AI structured output

Save to DB

Result UI

Phase 3

Auth

Dashboard

Plan restriction

15️⃣ Future Expansion

TikTok calculator

Instagram calculator

Creator marketplace valuation

🔥 Final Strategic Advice

Jangan langsung over-engineer.

Launch:

Basic + AI summary

SEO optimize

Collect traffic

Add premium later

