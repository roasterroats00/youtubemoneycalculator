# YouTube Money Calculator

AI-powered YouTube revenue intelligence platform. Estimate earnings, analyze channels, and get sponsor value predictions.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- **YouTube Data API v3 Key** (see [YOUTUBE_API_SETUP.md](./YOUTUBE_API_SETUP.md))
- **Google Gemini API Key**

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd youtubemoneycalculator
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Environment Variables**

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/youtubemoneycalculator"

# YouTube API (REQUIRED)
# Get from: https://console.cloud.google.com/apis/credentials
YOUTUBE_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# Google Gemini AI (REQUIRED)
# Get from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

> 📚 **Detailed YouTube API setup guide**: See [YOUTUBE_API_SETUP.md](./YOUTUBE_API_SETUP.md)

4. **Generate Prisma Client**
```bash
npm run db:generate
```

5. **Setup Database**
```bash
# Push schema to database (development)
npm run db:push

# Or run migrations (production)
npm run db:migrate
```

6. **Start Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## API Endpoints

### POST /api/calculate/views

Calculate earnings based on views and CPM.

**Request:**
```json
{
  "views": 100000,
  "cpm": 5,
  "monetizedRate": 0.5
}
```

**Response:**
```json
{
  "monetizedViews": 50000,
  "grossRevenue": 250,
  "netRevenue": 137.5,
  "rpm": 1.38
}
```

### POST /api/analyze/channel

Analyze a YouTube channel for revenue potential.

**Request:**
```json
{
  "url": "https://www.youtube.com/@MrBeast"
}
```

**Response:**
```json
{
  "channel": {
    "channelId": "...",
    "title": "MrBeast",
    "subscribers": 200000000,
    "totalViews": 30000000000,
    "totalVideos": 700,
    "avgViews": 50000000,
    "country": "US",
    "niche": null
  },
  "analysis": {
    "estimatedCPM": 15,
    "estimatedRPM": 8.25,
    "grossRevenue": 206250,
    "netRevenue": 113437.5,
    "aiSummary": "...",
    "sponsorEstimate": 75000,
    "monthlyProjection": 1650000,
    "yearlyProjection": 19800000
  }
}
```

## Project Structure

```
youtubemoneycalculator/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── analyze/
│   │   │   │   └── channel/
│   │   │   │       └── route.ts
│   │   │   └── calculate/
│   │   │       └── views/
│   │   │           └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   ├── AnalysisSummary.tsx
│   │   ├── ChannelAnalyzer.tsx
│   │   ├── EarningsInput.tsx
│   │   └── RevenueCard.tsx
│   ├── lib/
│   │   ├── gemini.ts          # Gemini AI integration
│   │   ├── prisma.ts          # Prisma client
│   │   ├── ratelimit.ts       # Rate limiting
│   │   ├── utils.ts           # Utility functions
│   │   └── youtube.ts         # YouTube API integration
│   └── middleware.ts          # Rate limiting middleware
├── .env.example
├── next.config.ts
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Database Schema

- **User** - User accounts with subscription plans (FREE, PRO, AGENCY)
- **Channel** - Saved YouTube channels
- **Analysis** - Revenue analysis results

## Rate Limiting

Free users are limited to 3 channel analyses per 24 hours. Rate limiting is implemented via middleware.

## Monetization Plans

- **FREE**: Basic calculator, limited channel analysis
- **PRO**: Unlimited analysis, AI breakdown, sponsor calculator, projections
- **AGENCY**: Bulk lookup, CSV export, API access

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio

## License

MIT
