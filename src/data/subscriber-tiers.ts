export interface SubscriberTier {
    slug: string;
    label: string;
    subscribers: number;
    title: string;
    description: string;
    estMonthlyAds: {
        low: number;
        high: number;
    };
    estMonthlySponsors: {
        low: number;
        high: number;
    };
    milestoneName: string;
    milestoneDescription: string;
    advice: string[];
    faq: {
        q: string;
        a: string;
    }[];
}

export const subscriberTiers: SubscriberTier[] = [
    {
        slug: "100-subscribers",
        label: "100 Subscribers",
        subscribers: 100,
        title: "How Much Does a YouTuber with 100 Subscribers Make? (2026)",
        description: "Explore the reality of earnings for creators with 100 subscribers. Focus on growth, initial monetization steps, and building a foundation.",
        estMonthlyAds: { low: 0, high: 0 },
        estMonthlySponsors: { low: 0, high: 20 },
        milestoneName: "The Starting Line",
        milestoneDescription: "At 100 subscribers, you are just beginning to build your community. Ad revenue is usually non-existent as you haven't hit YPP requirements yet.",
        advice: [
            "Focus 100% on content quality and finding your niche.",
            "Don't worry about the money yet; focus on the first 1,000.",
            "Start building an email list or social presence elsewhere.",
            "Experiment with different thumbnails and titles."
        ],
        faq: [
            { q: "Can I get monetized with 100 subscribers?", a: "No, the standard requirement for the YouTube Partner Program is 1,000 subscribers and 4,000 watch hours." },
            { q: "How can I make money with 100 subs?", a: "Affiliate marketing and selling digital products are the best ways to earn early on." }
        ]
    },
    {
        slug: "500-subscribers",
        label: "500 Subscribers",
        subscribers: 500,
        title: "YouTube Money with 500 Subscribers: Early Monetization 2026",
        description: "Breaking down revenue for channels with 500 subscribers. Features info on Super Chats, Memberships, and Brand Deals.",
        estMonthlyAds: { low: 0, high: 0 },
        estMonthlySponsors: { low: 10, high: 100 },
        milestoneName: "Micro-Community",
        milestoneDescription: "At 500 subscribers, you qualify for early monetization features like Fan Funding (Super Chats, Memberships) if you have 3,000 watch hours.",
        advice: [
            "Enable Super Chats if you go live.",
            "Test out channel memberships for your most loyal fans.",
            "Begin reaching out to small brands for affiliate partnerships.",
            "Maintain a consistent upload schedule."
        ],
        faq: [
            { q: "Is 500 subscribers enough to make money?", a: "Yes, via Fan Funding and Affiliate links, though it's usually pocket money." },
            { q: "How many views do I need at 500 subs?", a: "Engagement matters more than just views at this stage." }
        ]
    },
    {
        slug: "1000-subscribers",
        label: "1,000 Subscribers",
        subscribers: 1000,
        title: "How Much Does a YouTuber with 1,000 Subscribers Make? (2026 Data)",
        description: "The big milestone! Real data on ad revenue, sponsorships, and total income for newly monetized YouTube channels.",
        estMonthlyAds: { low: 20, high: 150 },
        estMonthlySponsors: { low: 50, high: 300 },
        milestoneName: "The Professional Threshold",
        milestoneDescription: "1,000 subscribers is the 'Golden Ticket'. You finally enter the YouTube Partner Program (YPP) and start earning from ads.",
        advice: [
            "Optimize your older high-performing videos for ads.",
            "Look for mid-tier affiliate programs.",
            "Refine your 'Brand Identity' to attract sponsors.",
            "Double down on what got you to 1k."
        ],
        faq: [
            { q: "How much is 1,000 subscribers worth?", a: "Roughly $50 - $400 per month depending on your niche and views." },
            { q: "When do I get my first YouTube check?", a: "Once your balance hits $100." }
        ]
    },
    {
        slug: "5k-subscribers",
        label: "5,000 Subscribers",
        subscribers: 5000,
        title: "5,000 Subscribers on YouTube: Revenue & Growth Report 2026",
        description: "Detailed analysis of earnings for channels with 5k subscribers. See how sponsorships begin to pick up at this level.",
        estMonthlyAds: { low: 100, high: 500 },
        estMonthlySponsors: { low: 200, high: 1000 },
        milestoneName: "Rising Creator",
        milestoneDescription: "At 5,000 subscribers, you have a solid audience. Brands begin to see you as a 'Micro-Influencer' with high engagement rates.",
        advice: [
            "Create a Media Kit for sponsors.",
            "Focus on increasing your Average Percentage Viewed (APV).",
            "Consider small digital products (guides, presets).",
            "Engage deeply with your community tab."
        ],
        faq: [
            { q: "Can I do full-time YouTube with 5k subs?", a: "Only in very high-CPM niches (Finance/Business) or with high-ticket sales." },
            { q: "What is the average RPM at 5k subs?", a: "Usually $2 - $15 depending on niche." }
        ]
    },
    {
        slug: "10k-subscribers",
        label: "10,000 Subscribers",
        subscribers: 10000,
        title: "YouTube 10,000 Subscribers Earnings: The Real Income (2026)",
        description: "How much does a 10k sub channel make? Breaking down the $1,000/month dream and how to achieve it.",
        estMonthlyAds: { low: 300, high: 1500 },
        estMonthlySponsors: { low: 500, high: 2500 },
        milestoneName: "The Milestone Marker",
        milestoneDescription: "10,000 subscribers is where many creators reach 'Part-Time Income' levels. You are now established in your niche.",
        advice: [
            "Negotiate higher rates for brand deals.",
            "Set up an automated sales funnel for your products.",
            "Test different ad placements (mid-rolls are key).",
            "Start thinking about content systems and outsourcing."
        ],
        faq: [
            { q: "Is 10k subscribers a lot?", a: "It's the top 3% of all channels on YouTube." },
            { q: "How much does YouTube pay for 10k subs?", a: "YouTube pays for views, not subs, but 10k subs usually generates $500–$2k." }
        ]
    },
    {
        slug: "20k-subscribers",
        label: "20,000 Subscribers",
        subscribers: 20000,
        title: "20,000 Subscribers YouTube Earnings: Growth & Revenue 2026",
        description: "Revenue analysis for 20k sub channels. At this stage, sponsorship consistency becomes your primary focus.",
        estMonthlyAds: { low: 500, high: 2500 },
        estMonthlySponsors: { low: 800, high: 4000 },
        milestoneName: "Rising Star",
        milestoneDescription: "20,000 subscribers is a high-growth phase. Your data is now reliable enough for long-term sponsorship contracts.",
        advice: [
            "Start a weekly newsletter to own your audience.",
            "Optimize your 'About' page for business inquiries.",
            "A/B test your thumbnails more aggressively.",
            "Look for recurring monthly sponsorships."
        ],
        faq: [
            { q: "Can I quit my job with 20k subs?", a: "If you have a high-CPM niche and low expenses, yes." },
            { q: "How many views do 20k sub channels get?", a: "Usually 50k to 200k monthly views." }
        ]
    },
    {
        slug: "50k-subscribers",
        label: "50,000 Subscribers",
        subscribers: 50000,
        title: "50,000 Subscribers Earnings: Full-Time Creator Reality 2026",
        description: "Comprehensive revenue data for channels with 50k subs. Ad revenue vs sponsorships vs digital sales.",
        estMonthlyAds: { low: 1000, high: 5000 },
        estMonthlySponsors: { low: 2000, high: 8000 },
        milestoneName: "Authority Figure",
        milestoneDescription: "At 50,000 subscribers, you are an authority. Many creators quit their day jobs at this stage.",
        advice: [
            "Hire an editor to scale content quality.",
            "Diversify into a newsletter or premium community.",
            "Focus on brand longevity over quick bucks.",
            "Analyze your audience demographics deeply."
        ],
        faq: [
            { q: "Can 50k subs support a family?", a: "Yes, in many regions, especially with diverse revenue streams." },
            { q: "How many views do 50k sub channels get?", a: "Typically 100k to 500k monthly views." }
        ]
    },
    {
        slug: "100k-subscribers",
        label: "100,000 Subscribers",
        subscribers: 100000,
        title: "How Much Does a YouTuber with 100,000 Subscribers Make? (2026)",
        description: "The Silver Play Button milestone! See the actual revenue ranges for channels hitting 100k subs.",
        estMonthlyAds: { low: 2500, high: 12000 },
        estMonthlySponsors: { low: 4000, high: 15000 },
        milestoneName: "The Silver Milestone",
        milestoneDescription: "Hitting 100,000 subscribers earns you the Silver Creator Award. You are now a major player in your category.",
        advice: [
            "Streamline your production workflow.",
            "Expect higher-tier brand collaborations.",
            "Invest back into the channel (equipment, team).",
            "Keep the community personal despite the size."
        ],
        faq: [
            { q: "Is 100k subs full-time?", a: "Almost always, unless views are extremely low." },
            { q: "What is the Silver Play Button?", a: "An award from YouTube for reaching 100,000 subscribers." }
        ]
    },
    {
        slug: "200k-subscribers",
        label: "200,000 Subscribers",
        subscribers: 200000,
        title: "YouTube 200,000 Subscribers Revenue: Scaling Profit 2026",
        description: "What does a 200k sub channel earn? Growth strategies and revenue diversification at scale.",
        estMonthlyAds: { low: 4000, high: 20000 },
        estMonthlySponsors: { low: 6000, high: 25000 },
        milestoneName: "Industry Leader",
        milestoneDescription: "At 200,000 subscribers, you are influential enough to start your own meaningful ventures (SaaS, Physical Goods).",
        advice: [
            "Delegate community management.",
            "Focus on multi-platform growth (TikTok/IG).",
            "Negotiate multi-video sponsor deals.",
            "Monitor your audience churn rate."
        ],
        faq: [
            { q: "How much does a 200k sub creator make?", a: "$8k to $30k+ per month is common." },
            { q: "Can I get a manager at 200k subs?", a: "Yes, this is the ideal time to look for talent management." }
        ]
    },
    {
        slug: "500k-subscribers",
        label: "500,000 Subscribers",
        subscribers: 500000,
        title: "500,000 Subscribers Earnings: Scaling a Content Empire (2026)",
        description: "Revenue breakdown for half-a-million subscriber channels. High-end sponsorships and massive ad revenue.",
        estMonthlyAds: { low: 8000, high: 45000 },
        estMonthlySponsors: { low: 10000, high: 50000 },
        milestoneName: "Mid-Tier Giant",
        milestoneDescription: "With 500,000 subscribers, you have massive reach and influence. You likely have a small team working for you.",
        advice: [
            "Focus on 'Event' style content for bigger spikes.",
            "Consider launching a standalone physical brand.",
            "Optimize for global audiences (translations/dubbing).",
            "Be selective with brand partnerships."
        ],
        faq: [
            { q: "How much does a 500k sub channel earn?", a: "$20k to $100k+ per month is common." },
            { q: "How many employees does a 500k sub channel have?", a: "Usually 1-4 part-time or full-time staff." }
        ]
    },
    {
        slug: "1m-subscribers",
        label: "1 Million Subscribers",
        subscribers: 1000000,
        title: "How Much Does a YouTuber with 1 Million Subscribers Make? (2026)",
        description: "The Gold Play Button! Discover the lifestyle and revenue of channels with 1 Million subscribers.",
        estMonthlyAds: { low: 15000, high: 100000 },
        estMonthlySponsors: { low: 25000, high: 150000 },
        milestoneName: "The Gold Standard",
        milestoneDescription: "1 Million subscribers is the dream. You are now a public figure with worldwide influence.",
        advice: [
            "Leverage your status for mainstream opportunities.",
            "Diversify heavily into investments and businesses.",
            "Focus on long-term brand legacy.",
            "Maintain your 'Core' authenticity."
        ],
        faq: [
            { q: "Are 1 million subscribers rich?", a: "Most are high earners, but business expenses can be very high." },
            { q: "How much is the Gold Play Button worth?", a: "The prestige is worth more than the physical gold-plated award." }
        ]
    },
    {
        slug: "2m-subscribers",
        label: "2 Million Subscribers",
        subscribers: 2000000,
        title: "2 Million Subscribers on YouTube: Revenue & Impact 2026",
        description: "The double-million milestone. Analyzing the exponential growth of earnings and cultural impact.",
        estMonthlyAds: { low: 25000, high: 180000 },
        estMonthlySponsors: { low: 40000, high: 250000 },
        milestoneName: "Mega Creator",
        milestoneDescription: "2 Million subscribers is where you transition from a 'YouTuber' to a 'Cultural Influencer'.",
        advice: [
            "Start a secondary channel to diversify risk.",
            "Invest in multi-channel networking.",
            "Hire a dedicated business development manager.",
            "Master your community's feedback loop."
        ],
        faq: [
            { q: "How much does 2m subscribers pay?", a: "$50k to $300k+ per month including all streams." },
            { q: "Do 2m sub channels grow faster?", a: "Network effects and authority usually accelerate growth." }
        ]
    },
    {
        slug: "5m-subscribers",
        label: "5 Million Subscribers",
        subscribers: 5000000,
        title: "5 Million Subscribers Earnings: The High-Elite Revenue (2026)",
        description: "What does it take to sustain 5 Million subscribers? Revenue data and production scaling info.",
        estMonthlyAds: { low: 50000, high: 400000 },
        estMonthlySponsors: { low: 80000, high: 600000 },
        milestoneName: "High-Elite Authority",
        milestoneDescription: "At 5 Million subscribers, you are in the top 0.1% of global creators. You have massive negotiating power.",
        advice: [
            "Establish your own product ecosystem (SaaS, FMCG).",
            "Focus on high-production value 'Viral' concepts.",
            "Build a robust IP (Intellectual Property) strategy.",
            "Collaborate with other mega-creators."
        ],
        faq: [
            { q: "How much do 5 million subs earn?", a: "$100k to $800k+ per month." },
            { q: "Is 5 million subs considered famous?", a: "Yes, you are likely recognized in public frequently." }
        ]
    },
    {
        slug: "10m-subscribers",
        label: "10 Million Subscribers",
        subscribers: 10000000,
        title: "10 Million Subscribers Earnings: The Diamond Tier 2026",
        description: "Revealing the astronomical revenue for channels with 10 Million subscribers. Top 0.01% of YouTube.",
        estMonthlyAds: { low: 100000, high: 800000 },
        estMonthlySponsors: { low: 200000, high: 1500000 },
        milestoneName: "The Diamond Elite",
        milestoneDescription: "10 Million subscribers puts you in the elite Diamond tier. You are running a multi-million dollar corporation.",
        advice: [
            "Build a full-scale media company.",
            "Expand into multiple languages and channels.",
            "Influence industry trends and platform features.",
            "Protect your brand with a legal and PR team."
        ],
        faq: [
            { q: "How much does MrBeast make with 10M subs?", a: "At 10M he was already making millions; at 200M it's hundreds of millions." },
            { q: "What is the Diamond Play Button?", a: "A massive crystal-like award for 10 million subscribers." }
        ]
    },
    {
        slug: "20m-subscribers",
        label: "20 Million Subscribers",
        subscribers: 20000000,
        title: "20 Million Subscribers YouTube Money: Giant Revenue 2026",
        description: "The business of 20 Million subscribers. Global reach, billion-view months, and massive payrolls.",
        estMonthlyAds: { low: 180000, high: 1500000 },
        estMonthlySponsors: { low: 350000, high: 2500000 },
        milestoneName: "Global Powerhouse",
        milestoneDescription: "With 20 Million subscribers, you are reaching tens of millions of people every month across every continent.",
        advice: [
            "Globalize your brand with local operations.",
            "Focus on philanthropic or legacy-building projects.",
            "Be a thought leader in the digital economy.",
            "Maintain extreme focus on creative innovation."
        ],
        faq: [
            { q: "Who has 20 million subscribers?", a: "Creators like Markiplier, Dream, and top-tier entertainers." },
            { q: "How much is 20m views worth at this scale?", a: "Millions, as ad inventory is premium at this size." }
        ]
    },
    {
        slug: "50m-subscribers",
        label: "50,000,000 Subscribers",
        subscribers: 50000000,
        title: "50 Million Subscribers Earnings: The Titans of YouTube 2026",
        description: "What happens when you hit 50 million subscribers? Revenue, fame, and the future of your brand.",
        estMonthlyAds: { low: 350000, high: 3000000 },
        estMonthlySponsors: { low: 600000, high: 5000000 },
        milestoneName: "Legendary Titan",
        milestoneDescription: "50 Million subscribers is rarefied air. You are essentially a major television network by yourself.",
        advice: [
            "Focus on multi-generational appeal.",
            "Create sustainable systems that don't rely only on you.",
            "Lobby for creator rights and platform changes.",
            "Balance fame with mental health."
        ],
        faq: [
            { q: "How many 50m sub channels exist?", a: "Fewer than 50 channels worldwide have achieved this." },
            { q: "What is the Custom Play Button?", a: "A unique award designed for creators hitting 50 million subs." }
        ]
    },
    {
        slug: "100m-subscribers",
        label: "100,000,000 Subscribers",
        subscribers: 100000000,
        title: "How Much Does 100 Million Subscribers Make? (The Top 0.001%)",
        description: "The Red Diamond milestone. Analyzing the revenue of the biggest channels on Earth: MrBeast, T-Series, and PewDiePie.",
        estMonthlyAds: { low: 800000, high: 10000000 },
        estMonthlySponsors: { low: 1500000, high: 20000000 },
        milestoneName: "The Red Diamond King",
        milestoneDescription: "100 Million subscribers represents the absolute pinnacle of human attention in the digital age.",
        advice: [
            "Define the next decade of digital media.",
            "Use your platform for global positive impact.",
            "Revolutionize how products and content intersect.",
            "Stay humble despite reaching the top."
        ],
        faq: [
            { q: "Does MrBeast make $100M a month?", a: "Including merchandise and businesses, it is highly likely." },
            { q: "What is the Red Diamond Play Button?", a: "The rarest award on YouTube, for 100 million subscribers." }
        ]
    }
];
