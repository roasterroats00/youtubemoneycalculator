export interface NicheData {
    name: string;
    slug: string;
    icon: string;
    cpmMedian: number;
    cpmMin: number;
    cpmMax: number;
    rpmEstimate: number;
    description: string;
    topCreators: string[];
    revenueFactors: string[];
    faq: { q: string; a: string }[];
}

function mkSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

interface RawNiche {
    name: string;
    icon: string;
    cpmMedian: number;
    cpmMin: number;
    cpmMax: number;
    description: string;
    topCreators: string[];
    revenueFactors: string[];
}

const raw: RawNiche[] = [
    {
        name: "Finance & Investing",
        icon: "Wallet",
        cpmMedian: 22.50,
        cpmMin: 12.00,
        cpmMax: 45.00,
        description: "Finance is the gold standard of YouTube CPMs. Advertisers in banking, insurance, and stock trading are willing to pay massive premiums for a high-intent audience.",
        topCreators: ["Graham Stephan", "Andrei Jikh", "Meet Kevin", "Jaspreet Singh"],
        revenueFactors: ["High advertiser competition", "Valuable user demographic", "Strong affiliate potential", "Long-term evergreen content"]
    },
    {
        name: "Tech & Software",
        icon: "Laptop",
        cpmMedian: 15.80,
        cpmMin: 8.00,
        cpmMax: 30.00,
        description: "Technology channels benefit from high-ticket hardware and SaaS (Software as a Service) advertisers. Reviewing expensive gadgets often leads to high CPMs.",
        topCreators: ["MKBHD", "Linus Tech Tips", "Mrwhosetheboss", "Dave2D"],
        revenueFactors: ["High hardware costs", "B2B advertising spend", "Product launch cycles", "App and software sponsorships"]
    },
    {
        name: "Gaming",
        icon: "Gamepad2",
        cpmMedian: 2.50,
        cpmMin: 1.00,
        cpmMax: 6.00,
        description: "While Gaming has lower average CPMs due to a younger audience, the massive volume of views and community engagement makes it a powerhouse for sponsorships.",
        topCreators: ["PewDiePie", "Markiplier", "Jacksepticeye", "Dream"],
        revenueFactors: ["Younger demographic", "Massive view counts", "Heavy focus on sponsorships", "Merchandise and fan support"]
    },
    {
        name: "Beauty & Fashion",
        icon: "Sparkles",
        cpmMedian: 6.50,
        cpmMin: 3.50,
        cpmMax: 12.00,
        description: "Beauty and fashion niches are driven by high-margin cosmetic brands and clothing lines. Sponsorships are a massive part of this economy.",
        topCreators: ["James Charles", "Jeffree Star", "NikkieTutorials", "Emma Chamberlain"],
        revenueFactors: ["Strong seasonal peaks (Q4)", "Visual product placement", "High influencer marketing spend", "Affiliate links for products"]
    },
    {
        name: "Fitness & Health",
        icon: "Dumbbell",
        cpmMedian: 8.20,
        cpmMin: 4.00,
        cpmMax: 18.00,
        description: "Fitness creators earn from supplement brands, gym apparel, and workout programs. CPMs peak in January during 'New Year, New Me' resolutions.",
        topCreators: ["Chloe Ting", "Jeff Nippard", "Pamela Reif", "Athlean-X"],
        revenueFactors: ["Supplement sponsorships", "Digital training programs", "Strong seasonal peaks (Q1)", "Appetite for wellness products"]
    },
    {
        name: "Cooking & Food",
        icon: "Utensils",
        cpmMedian: 4.50,
        cpmMin: 2.00,
        cpmMax: 9.00,
        description: "Food content is universally popular with a wide advertiser base ranging from kitchenware to grocery delivery services.",
        topCreators: ["Joshua Weissman", "Babish", "Gordon Ramsay", "Uncle Roger"],
        revenueFactors: ["Wide audience appeal", "Kitchenware partnerships", "Grocery and delivery ads", "Cookbook and merchandise sales"]
    },
    {
        name: "Travel & Lifestyle",
        icon: "Plane",
        cpmMedian: 7.80,
        cpmMin: 3.50,
        cpmMax: 15.00,
        description: "Travel channels attract airlines, hotel chains, and booking platforms. High production value often correlates with higher-paying ads.",
        topCreators: ["Lost LeBlanc", "Kara and Nate", "Mark Wiens", "Drew Binsky"],
        revenueFactors: ["High-ticket travel ads", "Tourism board partnerships", "Expensed travel costs", "Visual 'dream' content focus"]
    },
    {
        name: "Business & Entrepreneurship",
        icon: "Briefcase",
        cpmMedian: 18.50,
        cpmMin: 10.00,
        cpmMax: 35.00,
        description: "Business channels target decision-makers and professionals. B2B software and consulting services drive these high CPM rates.",
        topCreators: ["Ali Abdaal", "Iman Gadzhi", "Noah Kagan", "Alex Hormozi"],
        revenueFactors: ["Enterprise/B2B ad spend", "High-value audience", "Consulting and kurs potential", "Brand authority for premium ads"]
    },
    {
        name: "Education & Science",
        icon: "GraduationCap",
        cpmMedian: 5.50,
        cpmMin: 2.50,
        cpmMax: 12.00,
        description: "Educational content attracts learning platforms and institutional advertisers. High retention rates often help with algorithm performance.",
        topCreators: ["Veritasium", "Kurzgesagt", "Mark Rober", "Vsauce"],
        revenueFactors: ["Institutional ad spend", "Learning platform sponsorships", "High viewer retention", "Long evergreen life cycle"]
    },
    {
        name: "Real Estate",
        icon: "Home",
        cpmMedian: 20.00,
        cpmMin: 10.00,
        cpmMax: 40.00,
        description: "Real estate content features high-value transactions, attracting mortgage lenders, agents, and investment firms.",
        topCreators: ["Ryan Serhant", "Enes Yilmazer", "Graham Stephan"],
        revenueFactors: ["Luxury property ads", "Mortgage/Banking spend", "Lead generation potential", "High demographic net worth"]
    },
    {
        name: "Cryptocurrency",
        icon: "Bitcoin",
        cpmMedian: 25.00,
        cpmMin: 15.00,
        cpmMax: 60.00,
        description: "Crypto is highly volatile but currently holds some of the highest CPMs due to intense competition among exchanges and trading platforms.",
        topCreators: ["Coin Bureau", "BitBoy Crypto", "Altcoin Daily"],
        revenueFactors: ["Extreme exchange competition", "Venture capital ad spend", "High-risk high-reward ads", "Niche expert audience"]
    },
    {
        name: "Automotive & Cars",
        icon: "Car",
        cpmMedian: 9.50,
        cpmMin: 4.50,
        cpmMax: 20.00,
        description: "Car channels benefit from automotive parts, insurance, and new vehicle release campaigns. Enthusiast audiences are very loyal.",
        topCreators: ["Doug DeMuro", "Supercar Blondie", "ChrisFix", "Donut Media"],
        revenueFactors: ["Manufacturer ad campaigns", "Car insurance and parts", "High production value", "Loyal enthusiast base"]
    },
    {
        name: "Comedy & Entertainment",
        icon: "Laugh",
        cpmMedian: 3.20,
        cpmMin: 1.50,
        cpmMax: 7.00,
        description: "Comedy has broad appeal but lower CPMs as ads are less targeted. Volume and viral potential are the primary drivers here.",
        topCreators: ["Ryan Higa", "Lilly Singh", "Dude Perfect", "MrBeast"],
        revenueFactors: ["Massive viral reach", "Broad brand safety", "Merchandise-heavy model", "High sponsorship volume"]
    },
    {
        name: "DIY & Craft",
        icon: "Hammer",
        cpmMedian: 5.20,
        cpmMin: 2.50,
        cpmMax: 11.00,
        description: "DIY creators earn from home improvement stores, tool brands, and craft supply companies.",
        topCreators: ["5-Minute Crafts", "ZHC", "Bobby Duke Arts"],
        revenueFactors: ["Home improvement ad spend", "Product/Tool placement", "Skill-based long-form watch time", "Amazon Associate revenue"]
    },
    {
        name: "ASMR",
        icon: "Mic2",
        cpmMedian: 3.50,
        cpmMin: 1.50,
        cpmMax: 8.00,
        description: "ASMR has extreme watch time but specialized ads. Many creators rely on fan support and highly specific sleep-aid advertisers.",
        topCreators: ["Gibi ASMR", "ASMR Darling", "Zach Choi ASMR"],
        revenueFactors: ["Long session durations", "Sleep/Mental health ads", "Specialized mic/gear focus", "High repeat viewership"]
    },
    {
        name: "Pets & Animals",
        icon: "Dog",
        cpmMedian: 4.20,
        cpmMin: 2.00,
        cpmMax: 9.00,
        description: "Animal content is wholesome and brand-safe, attracting pet food, insurance, and toy brands.",
        topCreators: ["The Dodo", "Brave Wilderness", "Girl With The Dogs"],
        revenueFactors: ["Wholesome brand safety", "Pet product subscriptions", "Emotional engagement", "Global audience appeal"]
    },
    {
        name: "Music",
        icon: "Music",
        cpmMedian: 2.80,
        cpmMin: 1.20,
        cpmMax: 6.50,
        description: "Music CPMs are often lower due to licensing issues and passive consumption, but superstars make it up through sheer volume.",
        topCreators: ["Justin Bieber", "Ed Sheeran", "Marshmello", "Taylor Swift"],
        revenueFactors: ["Content ID revenue", "Tour and ticket marketing", "Streaming synergy", "High replay value"]
    },
    {
        name: "News & Politics",
        icon: "Newspaper",
        cpmMedian: 3.80,
        cpmMin: 1.80,
        cpmMax: 8.50,
        description: "News content is highly relevant but sometimes risky for advertisers. CPMs vary based on the 'brand safety' of the topics covered.",
        topCreators: ["Philip DeFranco", "The Young Turks", "Daily Wire"],
        revenueFactors: ["High daily engagement", "Membership-driven models", "Urgent/Timely ad spend", "Demographic-specific targeting"]
    },
    {
        name: "Toys & Kids",
        icon: "Baby",
        cpmMedian: 3.00,
        cpmMin: 1.00,
        cpmMax: 6.00,
        description: "Kids content is strictly regulated (COPPA) which limits targeted ads, but the volume is virtually infinite.",
        topCreators: ["Ryan's World", "Cocomelon", "Like Nastya"],
        revenueFactors: ["COPPA regulations", "Infinite loop viewership", "Global merchandise empires", "Toy industry ad spend"]
    },
    {
        name: "Photography & Videography",
        icon: "Camera",
        cpmMedian: 12.50,
        cpmMin: 6.00,
        cpmMax: 25.00,
        description: "Photography channels attract high-end camera manufacturers and editing software companies. Masterclasses and presets serve as secondary revenue.",
        topCreators: ["Peter McKinnon", "Casey Neistat", "Matti Haapoja"],
        revenueFactors: ["High-ticket gear ads", "Editing software SaaS", "Workshop and preset sales", "Brand name loyalty"]
    },
    {
        name: "Art & Animation",
        icon: "Palette",
        cpmMedian: 4.80,
        cpmMin: 2.00,
        cpmMax: 10.00,
        description: "Art channels have high visual engagement. Revenue comes from tablet manufacturers, art supplies, and digital brush packs.",
        topCreators: ["ZHC", "Jazza", "Ross Draws"],
        revenueFactors: ["Art supply partnerships", "Digital product sales", "Patreon/Crowdfunding", "High watch time"]
    },
    {
        name: "Gardening & Homesteading",
        icon: "Sprout",
        cpmMedian: 6.20,
        cpmMin: 3.00,
        cpmMax: 13.00,
        description: "Gardening is seasonal but attracts home improvement and tool brands. Replay value for 'how-to' guides is extremely high.",
        topCreators: ["Garden Answer", "Epic Gardening", "Roots and Refuge Farm"],
        revenueFactors: ["Seasonal tool spend", "Seed and supply affiliate", "Evergreen 'how-to' value", "Wholesome brand safety"]
    },
    {
        name: "Language Learning",
        icon: "Languages",
        cpmMedian: 5.80,
        cpmMin: 2.50,
        cpmMax: 12.00,
        description: "Language channels are supported by app developers (Duolingo, Babbel) and online tutoring platforms.",
        topCreators: ["Easy Languages", "English with Lucy", "Language Simp"],
        revenueFactors: ["EdTech ad spend", "Sponsorship from apps", "Digital course sales", "High global audience"]
    },
    {
        name: "History & Documentaries",
        icon: "History",
        cpmMedian: 6.50,
        cpmMin: 3.00,
        cpmMax: 14.00,
        description: "Historical content has deep engagement and longer watch times, attracting educational and streaming service advertisers.",
        topCreators: ["OverSimplified", "Timeline", "RealLifeLore"],
        revenueFactors: ["Streaming service ads", "Educational sponsorships", "High average watch time", "Strong community support"]
    },
    {
        name: "Psychology & Mental Health",
        icon: "Brain",
        cpmMedian: 7.20,
        cpmMin: 3.50,
        cpmMax: 15.00,
        description: "Mental health content is increasingly popular, attracting online therapy platforms (BetterHelp) and wellness apps.",
        topCreators: ["Psych2Go", "Dr. Julie", "HealthyGamerGG"],
        revenueFactors: ["Therapy platform spend", "Wellness app sponsorships", "High emotional resonance", "Demographic-targeted ads"]
    },
    {
        name: "Podcasts & Talk Shows",
        icon: "Mic",
        cpmMedian: 8.50,
        cpmMin: 4.00,
        cpmMax: 20.00,
        description: "Podcasts often have extremely high sponsorship revenue and dedicated fanbases, making them highly profitable despite varying CPMs.",
        topCreators: ["Joe Rogan", "Diary of a CEO", "H3 Podcast"],
        revenueFactors: ["Direct brand sponsorships", "Long-form ad slots", "Merchandise and events", "Host-read ad premiums"]
    },
    {
        name: "Parenting & Family Vlogs",
        icon: "Heart",
        cpmMedian: 6.00,
        cpmMin: 2.80,
        cpmMax: 13.50,
        description: "Parenting channels target a high-spending demographic: parents. CPG (Consumer Packaged Goods) and toy brands dominate this space.",
        topCreators: ["The Ace Family", "Cole and Sav", "Eh Bee Family"],
        revenueFactors: ["CPG brand partnerships", "High household spending", "Family-centric sponsorships", "Strong brand safety"]
    },
    {
        name: "Self Improvement & Productivity",
        icon: "Zap",
        cpmMedian: 14.50,
        cpmMin: 7.00,
        cpmMax: 28.00,
        description: "Productivity content targets ambitious individuals, attracting SaaS, book summaries, and professional course advertisers.",
        topCreators: ["Ali Abdaal", "Matt D'Avella", "Thomas Frank"],
        revenueFactors: ["SaaS/App sponsorships", "Course and book sales", "High-value demographic", "Evergreen self-help intent"]
    },
    {
        name: "AI & Generative Art",
        icon: "Cpu",
        cpmMedian: 19.00,
        cpmMin: 10.00,
        cpmMax: 40.00,
        description: "AI is the fastest-growing niche, attracting massive B2B and SaaS spend from tech giants and startups.",
        topCreators: ["Matt Wolfe", "The Rundown AI", "Two Minute Papers"],
        revenueFactors: ["B2B SaaS ad spend", "Fastest growing sector", "High technical intent", "Massive corporate interest"]
    },
    {
        name: "Software Engineering & Coding",
        icon: "Code2",
        cpmMedian: 16.50,
        cpmMin: 9.00,
        cpmMax: 35.00,
        description: "Coding channels target high-earning professionals. Cloud providers and developer tools pay huge premiums.",
        topCreators: ["Fireship", "Kevin Powell", "The Net Ninja"],
        revenueFactors: ["Cloud/Dev tool ad spend", "High professional salary", "Recruitment/Hiring ads", "Education platform spend"]
    },
    {
        name: "Cybersecurity & Hacking",
        icon: "ShieldAlert",
        cpmMedian: 18.20,
        cpmMin: 10.00,
        cpmMax: 38.00,
        description: "Cybersecurity is a high-priority niche for VPNs, password managers, and enterprise security solutions.",
        topCreators: ["NetworkChuck", "John Hammond", "LiveOverflow"],
        revenueFactors: ["VPN/Security ad spend", "Enterprise lead gen", "Highly technical audience", "B2B security focus"]
    },
    {
        name: "Luxury & High-End Lifestyle",
        icon: "Gem",
        cpmMedian: 20.50,
        cpmMin: 11.00,
        cpmMax: 45.00,
        description: "Luxury content targets ultra-high-net-worth individuals. Watch brands, real estate, and yacht charters dominate the ads.",
        topCreators: ["Erik Conover", "ProducerMichael", "Enes Yilmazer"],
        revenueFactors: ["UHNW target audience", "Luxury brand partnerships", "High affiliate commissions", "Aspirational 'dream' content"]
    },
    {
        name: "Outdoor & Survival",
        icon: "Mountain",
        cpmMedian: 5.50,
        cpmMin: 2.50,
        cpmMax: 12.00,
        description: "Outdoor content attracts gear brands and seasonal travel advertisers. High emotional engagement and loyal followings.",
        topCreators: ["Outdoor Boys", "Joe Robinet", "Survival Lilly"],
        revenueFactors: ["Outdoor gear affiliate", "Seasonal equipment sales", "Hard-to-reach male demo", "Sponsorship reliability"]
    },
    {
        name: "Fishing & Hunting",
        icon: "Fish",
        cpmMedian: 4.80,
        cpmMin: 2.20,
        cpmMax: 10.50,
        description: "Fishing and hunting channels have dedicated, enthusiast audiences. Tackles, boats, and gear brands provide consistent revenue.",
        topCreators: ["BlacktipH", "Jon B", "Googan Squad"],
        revenueFactors: ["Enthusiast gear spend", "Boat/Vehicle sponsorships", "Tournament/Media rights", "Apparel line potential"]
    }
];

function generateFaq(n: RawNiche): { q: string; a: string }[] {
    const rpm = (n.cpmMedian * 0.55).toFixed(2);
    return [
        { q: `What is the average YouTube CPM for ${n.name}?`, a: `In 2026, the average YouTube CPM for the ${n.name} niche is estimated at $${n.cpmMedian.toFixed(2)}. This can range from $${n.cpmMin.toFixed(2)} to $${n.cpmMax.toFixed(2)} depending on the specific sub-topic and viewer location.` },
        { q: `How much can I earn per 1,000 views in the ${n.name} niche?`, a: `Creators in ${n.name} typically earn an RPM (Revenue Per Mille) of around $${rpm}. This means you keep approximately $${rpm} for every 1,000 monetized views after YouTube's 45% cut.` },
        { q: `Why does the ${n.name} niche have this CPM rate?`, a: `${n.description} Main factors include: ${n.revenueFactors.slice(0, 2).join(" and ")}.` },
        { q: `Who are the top creators in the ${n.name} niche?`, a: `Some of the most successful channels in this space include ${n.topCreators.join(", ")}, who have built massive audiences and multiple revenue streams.` }
    ];
}

export const niches: NicheData[] = raw.map((n) => ({
    ...n,
    slug: mkSlug(n.name),
    rpmEstimate: parseFloat((n.cpmMedian * 0.55).toFixed(2)),
    faq: generateFaq(n),
}));

export function getNicheBySlug(slug: string): NicheData | undefined {
    return niches.find((n) => n.slug === slug);
}
