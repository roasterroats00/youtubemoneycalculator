import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Zap, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "YouTube Earnings FAQ - Frequently Asked Questions 2026",
  description: "Get answers to common questions about YouTube earnings, CPM, RPM, monetization, and revenue calculations. Learn how much YouTubers make per view.",
  keywords: [
    "youtube earnings faq",
    "how much do youtubers make",
    "youtube cpm questions",
    "youtube monetization faq",
    "youtube revenue questions",
  ],
  openGraph: {
    title: "YouTube Earnings FAQ - Frequently Asked Questions 2026",
    description: "Get answers to common questions about YouTube earnings, CPM, RPM, and monetization.",
    type: "website",
  },
};

const faqs = [
  {
    question: "How much does YouTube pay per 1,000 views?",
    answer: "YouTube typically pays between $1–$5 per 1,000 views (RPM) after YouTube's 45% cut. The actual amount depends on your niche, audience location, and engagement. Finance and business channels can earn $10–$20 CPM, while entertainment channels earn $2–$8 CPM.",
    category: "Earnings",
  },
  {
    question: "How much does 1 million views earn on YouTube?",
    answer: "1 million views can earn between $1,000–$10,000 depending on CPM. With an average $5 CPM: (1,000,000 / 1,000) × $5 = $5,000 gross revenue. After YouTube's 45% cut, creators keep approximately $2,750. Sponsorships and other revenue streams can significantly increase this amount.",
    category: "Earnings",
  },
  {
    question: "What is a good CPM on YouTube?",
    answer: "A good CPM ranges from $5–$20. Finance & Business: $20–$50. Tech: $10–$30. Health & Fitness: $10–$25. Education: $10–$25. Entertainment: $2–$8. Gaming: $3–$10. US, UK, and Australian audiences typically generate higher CPMs.",
    category: "CPM",
  },
  {
    question: "Do YouTube subscribers generate income?",
    answer: "Subscribers don't directly generate income, but they boost engagement and watch time, leading to more views and higher ad revenue. A channel with 1 million subscribers can earn $5,000–$50,000 monthly depending on content type, upload frequency, and audience engagement.",
    category: "Channel Growth",
  },
  {
    question: "What is the difference between CPM and RPM?",
    answer: "CPM (Cost Per Mille) is what advertisers pay per 1,000 ad impressions. RPM (Revenue Per Mille) is what creators earn per 1,000 views after YouTube's 45% cut. RPM is typically 50–60% of CPM. For example, a $10 CPM results in approximately $5–$6 RPM.",
    category: "CPM",
  },
  {
    question: "How do I qualify for YouTube monetization?",
    answer: "To join the YouTube Partner Program (YPP), you need: 500+ subscribers, AND either 3,000 public watch hours in the last 12 months OR 3 million YouTube Shorts views in the last 90 days. You must also follow all YouTube's policies and guidelines.",
    category: "Monetization",
  },
  {
    question: "What percentage does YouTube take from earnings?",
    answer: "YouTube takes 45% of ad revenue, leaving creators with 55%. For example, if an ad generates $100, the creator receives $55. YouTube Premium revenue, Super Chats, and memberships have different revenue splits.",
    category: "Monetization",
  },
  {
    question: "Which YouTube niche has the highest CPM?",
    answer: "Finance & Investing has the highest CPM ($20–$50), followed by Business & Entrepreneurship ($15–$40), Real Estate ($15–$35), Tech & Gadgets ($10–$30), Health & Fitness ($10–$25), and Education ($10–$25). Entertainment and gaming typically have lower CPMs.",
    category: "CPM",
  },
  {
    question: "How much do YouTubers make from sponsorships?",
    answer: "Sponsorship rates vary widely. A general formula is $10–$30 per 1,000 average views. A channel with 100K average views can charge $1,000–$3,000 per sponsored video. Mid-size creators (100K–500K subscribers) often earn $1,000–$10,000 per sponsored video.",
    category: "Earnings",
  },
  {
    question: "What countries have the highest YouTube CPM?",
    answer: "Top CPM countries: United States ($10.26 median), Australia ($7.67), Norway ($7.03), Switzerland ($6.89), United Kingdom ($6.53), Denmark ($6.38), New Zealand ($5.77), Canada ($5.71), Belgium ($5.60), and Netherlands ($5.54).",
    category: "CPM",
  },
  {
    question: "How is YouTube ad revenue calculated?",
    answer: "YouTube earnings = (Total Views ÷ 1,000) × CPM × Monetized View Rate. Not all views are monetized (typically 40–60%). After calculating gross revenue, YouTube takes 45%, leaving creators with 55% of ad earnings.",
    category: "Earnings",
  },
  {
    question: "Can I earn money from YouTube Shorts?",
    answer: "Yes! YouTube Shorts can generate revenue through the Shorts Feed ads revenue sharing program. Creators receive 45% of allocated ad revenue from Shorts views. Shorts also help grow your channel and drive traffic to long-form content.",
    category: "Monetization",
  },
];

const categoryColors: Record<string, string> = {
  Earnings: "from-emerald-500 to-teal-600",
  CPM: "from-blue-500 to-cyan-600",
  Monetization: "from-violet-500 to-purple-600",
  "Channel Growth": "from-orange-500 to-amber-600",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <Header />

      <main className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        {/* Hero */}
        <div className="text-center mb-20 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/5 text-8xl font-black select-none pointer-events-none">
            FAQ
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
            <Zap className="h-3 w-3" />
            INTELLIGENCE BRIEFING
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-none">
            Creator <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              Intelligence Hub
            </span>
          </h1>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
            Everything you need to know about YouTube earnings, CPM, RPM, and monetization strategy.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-6">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${categoryColors[faq.category] ?? "from-primary to-primary/60"} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-gradient-to-r ${categoryColors[faq.category] ?? "from-primary to-primary/60"} text-white`}>
                      {faq.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-black mb-3 uppercase tracking-tight leading-tight">{faq.question}</h2>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm">{faq.answer}</p>
                </div>
              </div>
              {/* Hover accent */}
              <div className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="h-5 w-5 text-primary/40" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-primary to-primary/60 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute top-0 right-0 opacity-10 p-6">
            <Zap className="h-40 w-40 rotate-12" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Ready to Calculate?</h3>
            <p className="text-white/80 mb-8 font-medium max-w-md mx-auto">
              Use our free YouTube Money Calculator to get AI-powered earnings projections for your channel.
            </p>
            <Link
              href="/"
              className="inline-flex h-14 items-center justify-center px-10 rounded-2xl bg-white text-primary font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-[0.98]"
            >
              Open Calculator
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
