export interface CountryData {
    name: string;
    slug: string;
    flag: string;
    continent: string;
    tier: "premium" | "high" | "mid" | "low";
    cpmMedian: number;
    cpmMin: number;
    cpmMax: number;
    rpmEstimate: number;
    currency: string;
    topNiches: string[];
    population: string;
    internetPenetration: string;
    youtubeUsers: string;
    notableCreators: string[];
    faq: { q: string; a: string }[];
}

function mkSlug(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

interface RawCountry {
    name: string; flag: string; continent: string; tier: CountryData["tier"];
    cpmMedian: number; cpmMin: number; cpmMax: number;
    currency: string; topNiches: string[]; population: string;
    internetPenetration: string; youtubeUsers: string; notableCreators: string[];
}

const raw: RawCountry[] = [
    { name: "United States", flag: "🇺🇸", continent: "North America", tier: "premium", cpmMedian: 10.26, cpmMin: 7.51, cpmMax: 15.76, currency: "USD", topNiches: ["Finance", "Tech", "Real Estate", "Business"], population: "334M", internetPenetration: "92%", youtubeUsers: "240M", notableCreators: ["MrBeast", "Mark Rober", "Dude Perfect", "SSSniperWolf"] },
    { name: "Australia", flag: "🇦🇺", continent: "Oceania", tier: "premium", cpmMedian: 7.67, cpmMin: 5.03, cpmMax: 13.11, currency: "AUD", topNiches: ["Finance", "Tech", "Travel", "Education"], population: "26M", internetPenetration: "96%", youtubeUsers: "20M", notableCreators: ["HowRidiculous", "Lazar Beam", "Fairbairn Films"] },
    { name: "Canada", flag: "🇨🇦", continent: "North America", tier: "premium", cpmMedian: 5.71, cpmMin: 3.89, cpmMax: 10.82, currency: "CAD", topNiches: ["Finance", "Tech", "Education", "Lifestyle"], population: "40M", internetPenetration: "94%", youtubeUsers: "30M", notableCreators: ["Linus Tech Tips", "Unbox Therapy", "AsapSCIENCE"] },
    { name: "United Kingdom", flag: "🇬🇧", continent: "Europe", tier: "premium", cpmMedian: 6.53, cpmMin: 4.22, cpmMax: 12.34, currency: "GBP", topNiches: ["Finance", "Tech", "Cars", "Education"], population: "68M", internetPenetration: "95%", youtubeUsers: "55M", notableCreators: ["KSI", "Ali Abdaal", "TommyInnit", "DanTDM"] },
    { name: "Germany", flag: "🇩🇪", continent: "Europe", tier: "premium", cpmMedian: 4.85, cpmMin: 2.52, cpmMax: 11.42, currency: "EUR", topNiches: ["Tech", "Cars", "Finance", "Gaming"], population: "84M", internetPenetration: "93%", youtubeUsers: "65M", notableCreators: ["Kurzgesagt", "BibisBeautyPalace", "Gronkh"] },
    { name: "Switzerland", flag: "🇨🇭", continent: "Europe", tier: "premium", cpmMedian: 8.50, cpmMin: 5.10, cpmMax: 16.00, currency: "CHF", topNiches: ["Finance", "Luxury", "Travel", "Tech"], population: "9M", internetPenetration: "96%", youtubeUsers: "7M", notableCreators: ["Typical Swiss", "Swiss View"] },
    { name: "Norway", flag: "🇳🇴", continent: "Europe", tier: "premium", cpmMedian: 7.20, cpmMin: 4.50, cpmMax: 14.00, currency: "NOK", topNiches: ["Tech", "Gaming", "Music", "Outdoor"], population: "5.5M", internetPenetration: "98%", youtubeUsers: "4.5M", notableCreators: ["Alan Walker", "TIX", "PelleK"] },
    { name: "Denmark", flag: "🇩🇰", continent: "Europe", tier: "premium", cpmMedian: 6.80, cpmMin: 4.00, cpmMax: 13.50, currency: "DKK", topNiches: ["Tech", "Business", "Lifestyle", "Gaming"], population: "5.9M", internetPenetration: "98%", youtubeUsers: "4.8M", notableCreators: ["Alexander Husum", "AlexPLAYS"] },
    { name: "Sweden", flag: "🇸🇪", continent: "Europe", tier: "premium", cpmMedian: 6.20, cpmMin: 3.80, cpmMax: 12.00, currency: "SEK", topNiches: ["Gaming", "Music", "Tech", "Education"], population: "10.5M", internetPenetration: "97%", youtubeUsers: "8.5M", notableCreators: ["PewDiePie", "RobinSamse", "therese lindgren"] },
    { name: "Netherlands", flag: "🇳🇱", continent: "Europe", tier: "premium", cpmMedian: 5.50, cpmMin: 3.20, cpmMax: 11.00, currency: "EUR", topNiches: ["Tech", "Gaming", "Music", "Education"], population: "17.9M", internetPenetration: "96%", youtubeUsers: "14M", notableCreators: ["Spinnin Records", "Kwebbelkop", "Enzo Knol"] },
    { name: "Austria", flag: "🇦🇹", continent: "Europe", tier: "premium", cpmMedian: 5.30, cpmMin: 3.00, cpmMax: 10.50, currency: "EUR", topNiches: ["Music", "Lifestyle", "Tech", "Travel"], population: "9.1M", internetPenetration: "93%", youtubeUsers: "7M", notableCreators: ["KSFreak", "Wiener Schmäh"] },
    { name: "New Zealand", flag: "🇳🇿", continent: "Oceania", tier: "premium", cpmMedian: 5.80, cpmMin: 3.50, cpmMax: 11.50, currency: "NZD", topNiches: ["Travel", "Adventure", "Tech", "Film"], population: "5.2M", internetPenetration: "95%", youtubeUsers: "4M", notableCreators: ["How to DAD", "Jordan Watson"] },
    { name: "Ireland", flag: "🇮🇪", continent: "Europe", tier: "premium", cpmMedian: 5.05, cpmMin: 2.30, cpmMax: 16.56, currency: "EUR", topNiches: ["Tech", "Comedy", "Education", "Music"], population: "5.1M", internetPenetration: "92%", youtubeUsers: "4M", notableCreators: ["Jacksepticeye", "CallMeKevin", "RTÉ"] },
    { name: "Finland", flag: "🇫🇮", continent: "Europe", tier: "premium", cpmMedian: 5.70, cpmMin: 3.20, cpmMax: 12.00, currency: "EUR", topNiches: ["Gaming", "Tech", "Music", "Education"], population: "5.6M", internetPenetration: "96%", youtubeUsers: "4.5M", notableCreators: ["Hydraulic Press Channel", "Duudsonit"] },
    { name: "Belgium", flag: "🇧🇪", continent: "Europe", tier: "high", cpmMedian: 4.80, cpmMin: 2.80, cpmMax: 10.50, currency: "EUR", topNiches: ["Tech", "Gaming", "Comedy", "Music"], population: "11.7M", internetPenetration: "92%", youtubeUsers: "9M", notableCreators: ["Average Rob", "Acid"] },
    { name: "France", flag: "🇫🇷", continent: "Europe", tier: "high", cpmMedian: 4.20, cpmMin: 2.10, cpmMax: 9.80, currency: "EUR", topNiches: ["Gaming", "Comedy", "Tech", "Beauty"], population: "68M", internetPenetration: "93%", youtubeUsers: "52M", notableCreators: ["Squeezie", "Cyprien", "Norman fait des vidéos"] },
    { name: "Japan", flag: "🇯🇵", continent: "Asia", tier: "high", cpmMedian: 4.50, cpmMin: 2.50, cpmMax: 10.00, currency: "JPY", topNiches: ["Gaming", "Tech", "Entertainment", "Music"], population: "124M", internetPenetration: "93%", youtubeUsers: "78M", notableCreators: ["ISSEI", "HikakinTV", "Fischer's"] },
    { name: "South Korea", flag: "🇰🇷", continent: "Asia", tier: "high", cpmMedian: 3.80, cpmMin: 2.00, cpmMax: 9.00, currency: "KRW", topNiches: ["K-Pop", "Gaming", "Beauty", "Tech"], population: "52M", internetPenetration: "98%", youtubeUsers: "46M", notableCreators: ["BLACKPINK", "BTS", "KIMPRO"] },
    { name: "Israel", flag: "🇮🇱", continent: "Asia", tier: "high", cpmMedian: 4.85, cpmMin: 2.20, cpmMax: 12.81, currency: "ILS", topNiches: ["Tech", "Business", "Education", "Comedy"], population: "9.9M", internetPenetration: "90%", youtubeUsers: "7M", notableCreators: ["Nas Daily", "Noy Alooshe"] },
    { name: "Singapore", flag: "🇸🇬", continent: "Asia", tier: "high", cpmMedian: 4.70, cpmMin: 2.50, cpmMax: 10.50, currency: "SGD", topNiches: ["Finance", "Tech", "Food", "Travel"], population: "6M", internetPenetration: "96%", youtubeUsers: "5M", notableCreators: ["JianHao Tan", "NightOwlCinematics"] },
    { name: "United Arab Emirates", flag: "🇦🇪", continent: "Asia", tier: "high", cpmMedian: 4.30, cpmMin: 2.00, cpmMax: 10.00, currency: "AED", topNiches: ["Luxury", "Cars", "Tech", "Travel"], population: "10M", internetPenetration: "99%", youtubeUsers: "9M", notableCreators: ["Mo Vlogs", "AboFlah"] },
    { name: "Saudi Arabia", flag: "🇸🇦", continent: "Asia", tier: "high", cpmMedian: 3.50, cpmMin: 1.50, cpmMax: 8.00, currency: "SAR", topNiches: ["Entertainment", "Gaming", "Comedy", "Cars"], population: "36M", internetPenetration: "99%", youtubeUsers: "30M", notableCreators: ["Anasala Family", "SaudiReporters"] },
    { name: "Italy", flag: "🇮🇹", continent: "Europe", tier: "high", cpmMedian: 3.80, cpmMin: 1.80, cpmMax: 8.50, currency: "EUR", topNiches: ["Food", "Fashion", "Cars", "Comedy"], population: "59M", internetPenetration: "88%", youtubeUsers: "43M", notableCreators: ["Me contro Te", "FavijTV", "iPantellas"] },
    { name: "Spain", flag: "🇪🇸", continent: "Europe", tier: "high", cpmMedian: 3.50, cpmMin: 1.60, cpmMax: 8.00, currency: "EUR", topNiches: ["Gaming", "Comedy", "Music", "Sports"], population: "48M", internetPenetration: "94%", youtubeUsers: "38M", notableCreators: ["ElRubius", "Mikecrack", "AuronPlay"] },
    { name: "Portugal", flag: "🇵🇹", continent: "Europe", tier: "high", cpmMedian: 3.20, cpmMin: 1.50, cpmMax: 7.50, currency: "EUR", topNiches: ["Football", "Music", "Comedy", "Tech"], population: "10.4M", internetPenetration: "85%", youtubeUsers: "7.5M", notableCreators: ["Cristiano Ronaldo", "Windoh", "SirKazzio"] },
    { name: "Poland", flag: "🇵🇱", continent: "Europe", tier: "mid", cpmMedian: 2.80, cpmMin: 1.30, cpmMax: 6.50, currency: "PLN", topNiches: ["Gaming", "Education", "Comedy", "Tech"], population: "38M", internetPenetration: "88%", youtubeUsers: "28M", notableCreators: ["Blowek", "Gimper", "Krzysztof Gonciarz"] },
    { name: "Czech Republic", flag: "🇨🇿", continent: "Europe", tier: "mid", cpmMedian: 2.60, cpmMin: 1.20, cpmMax: 6.00, currency: "CZK", topNiches: ["Gaming", "Comedy", "Music", "Tech"], population: "10.8M", internetPenetration: "89%", youtubeUsers: "8M", notableCreators: ["FIZIstyle", "Jmenuju Se Martin"] },
    { name: "Romania", flag: "🇷🇴", continent: "Europe", tier: "mid", cpmMedian: 2.30, cpmMin: 1.00, cpmMax: 5.50, currency: "RON", topNiches: ["Music", "Gaming", "Comedy", "Kids"], population: "19M", internetPenetration: "84%", youtubeUsers: "13M", notableCreators: ["LooLoo Kids", "5GANG", "BRomania"] },
    { name: "Turkey", flag: "🇹🇷", continent: "Europe/Asia", tier: "mid", cpmMedian: 1.50, cpmMin: 0.60, cpmMax: 4.00, currency: "TRY", topNiches: ["Entertainment", "Music", "Comedy", "Food"], population: "85M", internetPenetration: "83%", youtubeUsers: "58M", notableCreators: ["Enes Batur", "Orkun Işıtmak", "Burak Özdemir"] },
    { name: "Russia", flag: "🇷🇺", continent: "Europe/Asia", tier: "mid", cpmMedian: 1.80, cpmMin: 0.80, cpmMax: 4.50, currency: "RUB", topNiches: ["Gaming", "Music", "Entertainment", "Kids"], population: "144M", internetPenetration: "88%", youtubeUsers: "99M", notableCreators: ["A4", "Like Nastya", "Masha and The Bear"] },
    { name: "Mexico", flag: "🇲🇽", continent: "North America", tier: "mid", cpmMedian: 1.80, cpmMin: 0.80, cpmMax: 4.50, currency: "MXN", topNiches: ["Entertainment", "Comedy", "Gaming", "Music"], population: "130M", internetPenetration: "78%", youtubeUsers: "82M", notableCreators: ["Luisito Comunica", "Kimberly Loaiza", "Fede Vigevani"] },
    { name: "Brazil", flag: "🇧🇷", continent: "South America", tier: "mid", cpmMedian: 1.20, cpmMin: 0.50, cpmMax: 3.50, currency: "BRL", topNiches: ["Gaming", "Music", "Comedy", "Entertainment"], population: "215M", internetPenetration: "81%", youtubeUsers: "142M", notableCreators: ["Canal KondZilla", "Felipe Neto", "Whindersson Nunes"] },
    { name: "Argentina", flag: "🇦🇷", continent: "South America", tier: "mid", cpmMedian: 1.40, cpmMin: 0.60, cpmMax: 3.80, currency: "ARS", topNiches: ["Gaming", "Entertainment", "Comedy", "Music"], population: "46M", internetPenetration: "87%", youtubeUsers: "35M", notableCreators: ["Alejo Igoa", "Lyna", "Coscu"] },
    { name: "Colombia", flag: "🇨🇴", continent: "South America", tier: "mid", cpmMedian: 1.30, cpmMin: 0.50, cpmMax: 3.50, currency: "COP", topNiches: ["Music", "Entertainment", "Comedy", "Education"], population: "52M", internetPenetration: "73%", youtubeUsers: "30M", notableCreators: ["Shakira", "Pautips", "La Liendra"] },
    { name: "Chile", flag: "🇨🇱", continent: "South America", tier: "mid", cpmMedian: 1.50, cpmMin: 0.60, cpmMax: 3.80, currency: "CLP", topNiches: ["Gaming", "Entertainment", "Comedy", "Tech"], population: "19.5M", internetPenetration: "90%", youtubeUsers: "15M", notableCreators: ["HolaSoyGerman", "Fernanfloo"] },
    { name: "Peru", flag: "🇵🇪", continent: "South America", tier: "mid", cpmMedian: 1.10, cpmMin: 0.40, cpmMax: 3.00, currency: "PEN", topNiches: ["Entertainment", "Gaming", "Comedy", "Music"], population: "34M", internetPenetration: "76%", youtubeUsers: "22M", notableCreators: ["Whatdafaqshow", "Mox"] },
    { name: "Malaysia", flag: "🇲🇾", continent: "Asia", tier: "mid", cpmMedian: 2.00, cpmMin: 0.80, cpmMax: 5.00, currency: "MYR", topNiches: ["Tech", "Food", "Gaming", "Education"], population: "34M", internetPenetration: "97%", youtubeUsers: "24M", notableCreators: ["Didi & Friends", "JinnyBoyTV"] },
    { name: "Thailand", flag: "🇹🇭", continent: "Asia", tier: "mid", cpmMedian: 1.80, cpmMin: 0.70, cpmMax: 4.50, currency: "THB", topNiches: ["Entertainment", "Gaming", "Food", "Music"], population: "72M", internetPenetration: "85%", youtubeUsers: "40M", notableCreators: ["PANDA BOI", "Bie The Ska"] },
    { name: "Taiwan", flag: "🇹🇼", continent: "Asia", tier: "high", cpmMedian: 3.00, cpmMin: 1.50, cpmMax: 7.00, currency: "TWD", topNiches: ["Tech", "Gaming", "Education", "Food"], population: "24M", internetPenetration: "93%", youtubeUsers: "19M", notableCreators: ["PAPAYA", "Joeman"] },
    { name: "Hong Kong", flag: "🇭🇰", continent: "Asia", tier: "high", cpmMedian: 3.50, cpmMin: 1.80, cpmMax: 8.00, currency: "HKD", topNiches: ["Finance", "Tech", "Food", "Travel"], population: "7.5M", internetPenetration: "93%", youtubeUsers: "6M", notableCreators: ["蕭叔叔", "屎萊姆"] },
    { name: "India", flag: "🇮🇳", continent: "Asia", tier: "low", cpmMedian: 0.80, cpmMin: 0.30, cpmMax: 2.50, currency: "INR", topNiches: ["Entertainment", "Music", "Comedy", "Education"], population: "1.44B", internetPenetration: "52%", youtubeUsers: "462M", notableCreators: ["T-Series", "CarryMinati", "Cocomelon Hindi"] },
    { name: "Indonesia", flag: "🇮🇩", continent: "Asia", tier: "low", cpmMedian: 0.60, cpmMin: 0.20, cpmMax: 2.00, currency: "IDR", topNiches: ["Entertainment", "Music", "Gaming", "Education"], population: "277M", internetPenetration: "77%", youtubeUsers: "139M", notableCreators: ["Atta Halilintar", "Ria Ricis", "Baim Paula"] },
    { name: "Philippines", flag: "🇵🇭", continent: "Asia", tier: "low", cpmMedian: 0.55, cpmMin: 0.20, cpmMax: 1.80, currency: "PHP", topNiches: ["Entertainment", "Gaming", "Vlog", "Music"], population: "115M", internetPenetration: "73%", youtubeUsers: "58M", notableCreators: ["Alex Gonzaga", "Cong TV", "Ivana Alawi"] },
    { name: "Vietnam", flag: "🇻🇳", continent: "Asia", tier: "low", cpmMedian: 0.50, cpmMin: 0.15, cpmMax: 1.50, currency: "VND", topNiches: ["Entertainment", "Music", "Gaming", "Education"], population: "100M", internetPenetration: "79%", youtubeUsers: "63M", notableCreators: ["ToRung", "Sơn Tùng M-TP"] },
    { name: "Pakistan", flag: "🇵🇰", continent: "Asia", tier: "low", cpmMedian: 0.50, cpmMin: 0.15, cpmMax: 1.50, currency: "PKR", topNiches: ["Entertainment", "Music", "News", "Education"], population: "230M", internetPenetration: "37%", youtubeUsers: "72M", notableCreators: ["HAR PAL GEO", "ARY Digital", "Ducky Bhai"] },
    { name: "Bangladesh", flag: "🇧🇩", continent: "Asia", tier: "low", cpmMedian: 0.35, cpmMin: 0.10, cpmMax: 1.20, currency: "BDT", topNiches: ["Entertainment", "Music", "Education", "Religion"], population: "170M", internetPenetration: "40%", youtubeUsers: "45M", notableCreators: ["Tawhid Afridi", "Salman Muqtadir"] },
    { name: "Sri Lanka", flag: "🇱🇰", continent: "Asia", tier: "low", cpmMedian: 0.45, cpmMin: 0.15, cpmMax: 1.40, currency: "LKR", topNiches: ["Entertainment", "Music", "Education", "Cooking"], population: "22M", internetPenetration: "52%", youtubeUsers: "10M", notableCreators: ["Voice of Sanka"] },
    { name: "Nepal", flag: "🇳🇵", continent: "Asia", tier: "low", cpmMedian: 0.35, cpmMin: 0.10, cpmMax: 1.00, currency: "NPR", topNiches: ["Music", "Entertainment", "Education", "Vlog"], population: "30M", internetPenetration: "55%", youtubeUsers: "12M", notableCreators: ["Colleges Nepal"] },
    { name: "South Africa", flag: "🇿🇦", continent: "Africa", tier: "mid", cpmMedian: 2.00, cpmMin: 0.80, cpmMax: 5.00, currency: "ZAR", topNiches: ["Entertainment", "Music", "Comedy", "Education"], population: "60M", internetPenetration: "72%", youtubeUsers: "28M", notableCreators: ["Lasizwe", "Trevor Noah", "Caspar Lee"] },
    { name: "Nigeria", flag: "🇳🇬", continent: "Africa", tier: "low", cpmMedian: 0.60, cpmMin: 0.20, cpmMax: 2.00, currency: "NGN", topNiches: ["Music", "Comedy", "Entertainment", "Education"], population: "220M", internetPenetration: "55%", youtubeUsers: "48M", notableCreators: ["Mark Angel Comedy", "Burna Boy"] },
    { name: "Kenya", flag: "🇰🇪", continent: "Africa", tier: "low", cpmMedian: 0.50, cpmMin: 0.15, cpmMax: 1.60, currency: "KES", topNiches: ["Education", "Music", "Entertainment", "News"], population: "55M", internetPenetration: "42%", youtubeUsers: "18M", notableCreators: ["Njugush", "Wabosha Maxine"] },
    { name: "Ghana", flag: "🇬🇭", continent: "Africa", tier: "low", cpmMedian: 0.45, cpmMin: 0.12, cpmMax: 1.50, currency: "GHS", topNiches: ["Music", "Entertainment", "Education", "Comedy"], population: "33M", internetPenetration: "53%", youtubeUsers: "12M", notableCreators: ["Wode Maya", "Kwame"] },
    { name: "Egypt", flag: "🇪🇬", continent: "Africa", tier: "low", cpmMedian: 0.50, cpmMin: 0.15, cpmMax: 1.80, currency: "EGP", topNiches: ["Comedy", "Entertainment", "Music", "Education"], population: "105M", internetPenetration: "72%", youtubeUsers: "50M", notableCreators: ["AboFlah", "Ahmed Hassan"] },
    { name: "Morocco", flag: "🇲🇦", continent: "Africa", tier: "low", cpmMedian: 0.55, cpmMin: 0.18, cpmMax: 1.80, currency: "MAD", topNiches: ["Comedy", "Entertainment", "Music", "Education"], population: "37M", internetPenetration: "85%", youtubeUsers: "22M", notableCreators: ["ZAMZAM Brothers"] },
    { name: "Greece", flag: "🇬🇷", continent: "Europe", tier: "mid", cpmMedian: 2.50, cpmMin: 1.00, cpmMax: 6.00, currency: "EUR", topNiches: ["Music", "Entertainment", "Comedy", "Gaming"], population: "10.4M", internetPenetration: "83%", youtubeUsers: "7.5M", notableCreators: ["The Olympians", "Unboxholics"] },
    { name: "Hungary", flag: "🇭🇺", continent: "Europe", tier: "mid", cpmMedian: 2.20, cpmMin: 0.90, cpmMax: 5.50, currency: "HUF", topNiches: ["Gaming", "Comedy", "Education", "Tech"], population: "9.7M", internetPenetration: "89%", youtubeUsers: "7M", notableCreators: ["Videómánia", "TheVR"] },
    { name: "Ukraine", flag: "🇺🇦", continent: "Europe", tier: "low", cpmMedian: 0.80, cpmMin: 0.30, cpmMax: 2.50, currency: "UAH", topNiches: ["Kids", "Entertainment", "Music", "Gaming"], population: "37M", internetPenetration: "75%", youtubeUsers: "23M", notableCreators: ["Kids Diana Show", "Mak"] },
    { name: "Qatar", flag: "🇶🇦", continent: "Asia", tier: "high", cpmMedian: 4.00, cpmMin: 1.80, cpmMax: 9.50, currency: "QAR", topNiches: ["Luxury", "Cars", "Tech", "Travel"], population: "2.7M", internetPenetration: "99%", youtubeUsers: "2.5M", notableCreators: ["Qatari Creators Hub"] },
    { name: "Kuwait", flag: "🇰🇼", continent: "Asia", tier: "high", cpmMedian: 3.80, cpmMin: 1.60, cpmMax: 9.00, currency: "KWD", topNiches: ["Cars", "Lifestyle", "Tech", "Entertainment"], population: "4.3M", internetPenetration: "99%", youtubeUsers: "4M", notableCreators: ["Khalid AlAmeri"] },
    { name: "Honduras", flag: "🇭🇳", continent: "Central America", tier: "low", cpmMedian: 0.80, cpmMin: 0.30, cpmMax: 2.50, currency: "HNL", topNiches: ["Entertainment", "Comedy", "Music", "Vlogs"], population: "10M", internetPenetration: "49%", youtubeUsers: "4M", notableCreators: ["Alans Universe"] },
    { name: "El Salvador", flag: "🇸🇻", continent: "Central America", tier: "low", cpmMedian: 0.70, cpmMin: 0.25, cpmMax: 2.00, currency: "USD", topNiches: ["Gaming", "Entertainment", "Vlogs", "Music"], population: "6.3M", internetPenetration: "63%", youtubeUsers: "3.5M", notableCreators: ["Fernanfloo"] },
    { name: "Luxembourg", flag: "🇱🇺", continent: "Europe", tier: "premium", cpmMedian: 9.20, cpmMin: 6.00, cpmMax: 15.50, currency: "EUR", topNiches: ["Finance", "Business", "Tech", "Lifestyle"], population: "0.66M", internetPenetration: "99%", youtubeUsers: "0.5M", notableCreators: ["Lux Creators"] },
    { name: "Iceland", flag: "🇮🇸", continent: "Europe", tier: "premium", cpmMedian: 8.80, cpmMin: 5.50, cpmMax: 14.80, currency: "ISK", topNiches: ["Travel", "Photography", "Nature", "Tech"], population: "0.38M", internetPenetration: "99%", youtubeUsers: "0.3M", notableCreators: ["Icelandic Vlogs"] },
    { name: "Monaco", flag: "🇲🇨", continent: "Europe", tier: "premium", cpmMedian: 11.50, cpmMin: 8.00, cpmMax: 22.00, currency: "EUR", topNiches: ["Luxury", "Cars", "Finance", "Travel"], population: "0.04M", internetPenetration: "99%", youtubeUsers: "0.03M", notableCreators: ["Nico Rosberg"] },
    { name: "Estonia", flag: "🇪🇪", continent: "Europe", tier: "high", cpmMedian: 4.50, cpmMin: 2.20, cpmMax: 10.00, currency: "EUR", topNiches: ["Tech", "Business", "e-Governance", "Gaming"], population: "1.3M", internetPenetration: "96%", youtubeUsers: "1M", notableCreators: ["Roomet Poom"] },
    { name: "Latvia", flag: "🇱🇻", continent: "Europe", tier: "mid", cpmMedian: 3.20, cpmMin: 1.50, cpmMax: 7.50, currency: "EUR", topNiches: ["Music", "Gaming", "Entertainment"], population: "1.9M", internetPenetration: "91%", youtubeUsers: "1.5M", notableCreators: ["Latvian Guys"] },
    { name: "Lithuania", flag: "🇱🇹", continent: "Europe", tier: "mid", cpmMedian: 3.40, cpmMin: 1.60, cpmMax: 8.00, currency: "EUR", topNiches: ["Tech", "Gaming", "Basketball"], population: "2.8M", internetPenetration: "90%", youtubeUsers: "2.2M", notableCreators: ["Whydotas"] },
    { name: "Slovenia", flag: "🇸🇮", continent: "Europe", tier: "high", cpmMedian: 4.10, cpmMin: 2.00, cpmMax: 9.50, currency: "EUR", topNiches: ["Sports", "Travel", "Tech"], population: "2.1M", internetPenetration: "91%", youtubeUsers: "1.7M", notableCreators: ["Slovenian Creators"] },
    { name: "Slovakia", flag: "🇸🇰", continent: "Europe", tier: "mid", cpmMedian: 2.90, cpmMin: 1.40, cpmMax: 7.00, currency: "EUR", topNiches: ["Gaming", "Comedy", "Cars"], population: "5.4M", internetPenetration: "90%", youtubeUsers: "4M", notableCreators: ["GogoManTV"] },
    { name: "Croatia", flag: "🇭🇷", continent: "Europe", tier: "mid", cpmMedian: 2.70, cpmMin: 1.20, cpmMax: 6.50, currency: "EUR", topNiches: ["Tourism", "Sports", "Music"], population: "3.9M", internetPenetration: "85%", youtubeUsers: "3M", notableCreators: ["JoomBoos"] },
    { name: "Bulgaria", flag: "🇧🇬", continent: "Europe", tier: "mid", cpmMedian: 2.10, cpmMin: 0.90, cpmMax: 5.00, currency: "BGN", topNiches: ["Music", "Entertainment", "Gaming"], population: "6.5M", internetPenetration: "75%", youtubeUsers: "4.5M", notableCreators: ["The Clashers"] },
    { name: "Serbia", flag: "🇷🇸", continent: "Europe", tier: "mid", cpmMedian: 1.90, cpmMin: 0.80, cpmMax: 4.80, currency: "RSD", topNiches: ["Entertainment", "Gaming", "Music"], population: "6.7M", internetPenetration: "82%", youtubeUsers: "5M", notableCreators: ["Baka Prase"] },
    { name: "Cyprus", flag: "🇨🇾", continent: "Europe", tier: "high", cpmMedian: 3.80, cpmMin: 1.80, cpmMax: 8.50, currency: "EUR", topNiches: ["Finance", "Business", "Tourism"], population: "1.2M", internetPenetration: "93%", youtubeUsers: "1M", notableCreators: ["2J"] },
    { name: "Malta", flag: "🇲🇹", continent: "Europe", tier: "high", cpmMedian: 4.20, cpmMin: 2.00, cpmMax: 9.00, currency: "EUR", topNiches: ["Finance", "Gaming", "Travel"], population: "0.5M", internetPenetration: "95%", youtubeUsers: "0.4M", notableCreators: ["Grandayy"] },
    { name: "Kazakhstan", flag: "🇰🇿", continent: "Asia/Europe", tier: "mid", cpmMedian: 1.60, cpmMin: 0.70, cpmMax: 4.20, currency: "KZT", topNiches: ["Entertainment", "Music", "Tech"], population: "19M", internetPenetration: "92%", youtubeUsers: "15M", notableCreators: ["Bake"] },
    { name: "Uzbekistan", flag: "🇺🇿", continent: "Asia", tier: "low", cpmMedian: 0.70, cpmMin: 0.25, cpmMax: 1.80, currency: "UZS", topNiches: ["Music", "Comedy", "Education"], population: "36M", internetPenetration: "77%", youtubeUsers: "25M", notableCreators: ["Mittivine"] },
    { name: "Jordan", flag: "🇯🇴", continent: "Asia", tier: "mid", cpmMedian: 1.40, cpmMin: 0.60, cpmMax: 3.50, currency: "JOD", topNiches: ["Entertainment", "Comedy", "Education"], population: "11M", internetPenetration: "88%", youtubeUsers: "8M", notableCreators: ["Sabaaneh"] },
    { name: "Lebanon", flag: "🇱🇧", continent: "Asia", tier: "mid", cpmMedian: 1.20, cpmMin: 0.50, cpmMax: 3.20, currency: "LBP", topNiches: ["Music", "Comedy", "Food"], population: "5.5M", internetPenetration: "85%", youtubeUsers: "4M", notableCreators: ["Lebanese Creators"] },
    { name: "Oman", flag: "🇴🇲", continent: "Asia", tier: "high", cpmMedian: 3.20, cpmMin: 1.50, cpmMax: 7.50, currency: "OMR", topNiches: ["Travel", "Cars", "Tech"], population: "4.6M", internetPenetration: "95%", youtubeUsers: "4M", notableCreators: ["Omani Vlogs"] },
    { name: "Bahrain", flag: "🇧🇭", continent: "Asia", tier: "high", cpmMedian: 3.50, cpmMin: 1.60, cpmMax: 8.00, currency: "BHD", topNiches: ["Finance", "Tech", "Lifestyle"], population: "1.5M", internetPenetration: "99%", youtubeUsers: "1.4M", notableCreators: ["Bahraini Creators"] },
    { name: "Georgia", flag: "🇬🇪", continent: "Asia/Europe", tier: "mid", cpmMedian: 1.50, cpmMin: 0.60, cpmMax: 3.80, currency: "GEL", topNiches: ["Tourism", "Music", "Tech"], population: "3.7M", internetPenetration: "80%", youtubeUsers: "2.8M", notableCreators: ["Georgian Creators"] },
    { name: "Armenia", flag: "🇦🇲", continent: "Asia/Europe", tier: "mid", cpmMedian: 1.40, cpmMin: 0.55, cpmMax: 3.60, currency: "AMD", topNiches: ["Entertainment", "Music", "Chess"], population: "3M", internetPenetration: "77%", youtubeUsers: "2.2M", notableCreators: ["Armenian Creators"] },
    { name: "Azerbaijan", flag: "🇦🇿", continent: "Asia/Europe", tier: "mid", cpmMedian: 1.30, cpmMin: 0.50, cpmMax: 3.40, currency: "AZN", topNiches: ["Music", "Cooking", "Entertainment"], population: "10M", internetPenetration: "85%", youtubeUsers: "7.5M", notableCreators: ["Azeri Creators"] },
    { name: "Iraq", flag: "🇮🇶", continent: "Asia", tier: "low", cpmMedian: 0.65, cpmMin: 0.20, cpmMax: 1.80, currency: "IQD", topNiches: ["News", "Comedy", "Music"], population: "44M", internetPenetration: "75%", youtubeUsers: "30M", notableCreators: ["Iraqi Creators"] },
    { name: "Yemen", flag: "🇾🇪", continent: "Asia", tier: "low", cpmMedian: 0.40, cpmMin: 0.10, cpmMax: 1.20, currency: "YER", topNiches: ["News", "Poetry", "Music"], population: "33M", internetPenetration: "30%", youtubeUsers: "8M", notableCreators: ["Yemeni Voices"] },
    { name: "Mongolia", flag: "🇲🇳", continent: "Asia", tier: "low", cpmMedian: 0.60, cpmMin: 0.20, cpmMax: 1.80, currency: "MNT", topNiches: ["Music", "Nature", "Vlogs"], population: "3.4M", internetPenetration: "85%", youtubeUsers: "2M", notableCreators: ["Mongolian Vlogs"] },
    { name: "Myanmar", flag: "🇲🇲", continent: "Asia", tier: "low", cpmMedian: 0.35, cpmMin: 0.10, cpmMax: 1.00, currency: "MMK", topNiches: ["Entertainment", "Vlogs", "Gaming"], population: "54M", internetPenetration: "45%", youtubeUsers: "22M", notableCreators: ["Myanmar Creators"] },
    { name: "Cambodia", flag: "🇰🇭", continent: "Asia", tier: "low", cpmMedian: 0.45, cpmMin: 0.15, cpmMax: 1.50, currency: "KHR", topNiches: ["Travel", "Food", "Entertainment"], population: "17M", internetPenetration: "75%", youtubeUsers: "12M", notableCreators: ["Cambodian Food Vlogs"] },
    { name: "Laos", flag: "🇱🇦", continent: "Asia", tier: "low", cpmMedian: 0.40, cpmMin: 0.12, cpmMax: 1.30, currency: "LAK", topNiches: ["Nature", "Travel", "Culture"], population: "7.5M", internetPenetration: "60%", youtubeUsers: "4M", notableCreators: ["Lao Vlogs"] },
    { name: "Kyrgyzstan", flag: "🇰🇬", continent: "Asia", tier: "low", cpmMedian: 0.55, cpmMin: 0.18, cpmMax: 1.60, currency: "KGS", topNiches: ["Nature", "Vlogs", "Adventure"], population: "6.7M", internetPenetration: "80%", youtubeUsers: "4.5M", notableCreators: ["Kyrgyz Creators"] },
    { name: "Puerto Rico", flag: "🇵🇷", continent: "Americas", tier: "high", cpmMedian: 4.50, cpmMin: 2.20, cpmMax: 9.50, currency: "USD", topNiches: ["Music", "Entertainment", "Comedy"], population: "3.2M", internetPenetration: "85%", youtubeUsers: "2.5M", notableCreators: ["Bad Bunny", "Chente Ydrach"] },
    { name: "Costa Rica", flag: "🇨🇷", continent: "Americas", tier: "mid", cpmMedian: 2.50, cpmMin: 1.20, cpmMax: 6.00, currency: "CRC", topNiches: ["Travel", "Nature", "Tech"], population: "5.2M", internetPenetration: "85%", youtubeUsers: "4M", notableCreators: ["Nacho Rodríguez"] },
    { name: "Panama", flag: "🇵🇦", continent: "Americas", tier: "mid", cpmMedian: 2.30, cpmMin: 1.00, cpmMax: 5.50, currency: "PAB", topNiches: ["Finance", "Travel", "Business"], population: "4.4M", internetPenetration: "75%", youtubeUsers: "3M", notableCreators: ["WindyGirk"] },
    { name: "Uruguay", flag: "🇺🇾", continent: "Americas", tier: "mid", cpmMedian: 2.10, cpmMin: 0.90, cpmMax: 5.00, currency: "UYU", topNiches: ["Football", "Entertainment", "Comedy"], population: "3.4M", internetPenetration: "90%", youtubeUsers: "2.8M", notableCreators: ["Uruguay Vlogs"] },
    { name: "Paraguay", flag: "🇵🇾", continent: "Americas", tier: "mid", cpmMedian: 1.80, cpmMin: 0.75, cpmMax: 4.20, currency: "PYG", topNiches: ["Music", "Culture", "Entertainment"], population: "6.8M", internetPenetration: "75%", youtubeUsers: "4.5M", notableCreators: ["Paraguay Vlogs"] },
    { name: "Ecuador", flag: "🇪🇨", continent: "Americas", tier: "mid", cpmMedian: 1.60, cpmMin: 0.65, cpmMax: 3.80, currency: "USD", topNiches: ["Drama", "Comedy", "Travel"], population: "18M", internetPenetration: "77%", youtubeUsers: "12M", notableCreators: ["Enchufe.tv"] },
    { name: "Bolivia", flag: "🇧🇴", continent: "Americas", tier: "low", cpmMedian: 0.90, cpmMin: 0.35, cpmMax: 2.50, currency: "BOB", topNiches: ["Culture", "Music", "Vlogs"], population: "12M", internetPenetration: "65%", youtubeUsers: "7M", notableCreators: ["Boliviano Vlogs"] },
    { name: "Dominican Republic", flag: "🇩🇴", continent: "Americas", tier: "mid", cpmMedian: 1.50, cpmMin: 0.60, cpmMax: 4.00, currency: "DOP", topNiches: ["Music", "Comedy", "Vlogs"], population: "11M", internetPenetration: "80%", youtubeUsers: "8M", notableCreators: ["Carlos Durán"] },
    { name: "Guatemala", flag: "🇬🇹", continent: "Americas", tier: "low", cpmMedian: 0.85, cpmMin: 0.30, cpmMax: 2.20, currency: "GTQ", topNiches: ["News", "Comedy", "Music"], population: "18M", internetPenetration: "55%", youtubeUsers: "9M", notableCreators: ["Guate Vlogs"] },
    { name: "Jamaica", flag: "🇯🇲", continent: "Americas", tier: "mid", cpmMedian: 1.90, cpmMin: 0.80, cpmMax: 4.50, currency: "JMD", topNiches: ["Music", "Lifestyle", "Sports"], population: "2.8M", internetPenetration: "70%", youtubeUsers: "1.8M", notableCreators: ["Wally British"] },
    { name: "Trinidad and Tobago", flag: "🇹🇹", continent: "Americas", tier: "mid", cpmMedian: 2.20, cpmMin: 1.00, cpmMax: 5.20, currency: "TTD", topNiches: ["Finance", "Music", "Travel"], population: "1.5M", internetPenetration: "85%", youtubeUsers: "1M", notableCreators: ["Trini Vlogs"] },
    { name: "Bahamas", flag: "🇧🇸", continent: "Americas", tier: "high", cpmMedian: 3.80, cpmMin: 1.80, cpmMax: 8.50, currency: "BSD", topNiches: ["Tourism", "Luxury", "Finance"], population: "0.4M", internetPenetration: "95%", youtubeUsers: "0.3M", notableCreators: ["Bahamas Vlogs"] },
    { name: "Barbados", flag: "🇧🇧", continent: "Americas", tier: "high", cpmMedian: 3.60, cpmMin: 1.70, cpmMax: 8.00, currency: "BBD", topNiches: ["Finance", "Music", "Tourism"], population: "0.28M", internetPenetration: "90%", youtubeUsers: "0.2M", notableCreators: ["Rihanna"] },
    { name: "Guyana", flag: "🇬🇾", continent: "Americas", tier: "low", cpmMedian: 0.95, cpmMin: 0.40, cpmMax: 2.80, currency: "GYD", topNiches: ["Culture", "Travel", "Nature"], population: "0.8M", internetPenetration: "60%", youtubeUsers: "0.5M", notableCreators: ["Guyana Vlogs"] },
    { name: "Ethiopia", flag: "🇪🇹", continent: "Africa", tier: "low", cpmMedian: 0.30, cpmMin: 0.10, cpmMax: 1.00, currency: "ETB", topNiches: ["News", "Music", "Religion"], population: "123M", internetPenetration: "25%", youtubeUsers: "8M", notableCreators: ["Abel Birhanu"] },
    { name: "Tanzania", flag: "🇹🇿", continent: "Africa", tier: "low", cpmMedian: 0.40, cpmMin: 0.15, cpmMax: 1.20, currency: "TZS", topNiches: ["Music", "Entertainment", "News"], population: "65M", internetPenetration: "50%", youtubeUsers: "15M", notableCreators: ["Millard Ayo"] },
    { name: "Uganda", flag: "🇺🇬", continent: "Africa", tier: "low", cpmMedian: 0.35, cpmMin: 0.12, cpmMax: 1.10, currency: "UGX", topNiches: ["Music", "Comedy", "News"], population: "47M", internetPenetration: "30%", youtubeUsers: "6M", notableCreators: ["Eddy Kenzo"] },
    { name: "Algeria", flag: "🇩🇿", continent: "Africa", tier: "low", cpmMedian: 0.50, cpmMin: 0.18, cpmMax: 1.60, currency: "DZD", topNiches: ["Entertainment", "Comedy", "Tech"], population: "45M", internetPenetration: "70%", youtubeUsers: "25M", notableCreators: ["Oussama Ammar"] },
    { name: "Tunisia", flag: "🇹🇳", continent: "Africa", tier: "low", cpmMedian: 0.55, cpmMin: 0.20, cpmMax: 1.80, currency: "TND", topNiches: ["Comedy", "Travel", "Vlogs"], population: "12M", internetPenetration: "80%", youtubeUsers: "8M", notableCreators: ["Tunisian Vlogs"] },
    { name: "Mauritius", flag: "🇲🇺", continent: "Africa", tier: "mid", cpmMedian: 1.80, cpmMin: 0.80, cpmMax: 4.50, currency: "MUR", topNiches: ["Tourism", "Lifestyle", "Music"], population: "1.3M", internetPenetration: "85%", youtubeUsers: "1M", notableCreators: ["Mauritian Creators"] },
    { name: "Senegal", flag: "🇸🇳", continent: "Africa", tier: "low", cpmMedian: 0.45, cpmMin: 0.15, cpmMax: 1.50, currency: "XOF", topNiches: ["Music", "Entertainment", "Religion"], population: "17M", internetPenetration: "60%", youtubeUsers: "8M", notableCreators: ["Senegal Vlogs"] },
    { name: "Cameroon", flag: "🇨🇲", continent: "Africa", tier: "low", cpmMedian: 0.40, cpmMin: 0.12, cpmMax: 1.40, currency: "XAF", topNiches: ["Comedy", "Music", "Education"], population: "28M", internetPenetration: "45%", youtubeUsers: "10M", notableCreators: ["Cameroon Comedy"] },
    { name: "Rwanda", flag: "🇷🇼", continent: "Africa", tier: "low", cpmMedian: 0.35, cpmMin: 0.10, cpmMax: 1.20, currency: "RWF", topNiches: ["News", "Music", "Tech"], population: "13M", internetPenetration: "35%", youtubeUsers: "4M", notableCreators: ["Rwanda Vlogs"] },
    { name: "Ivory Coast", flag: "🇨🇮", continent: "Africa", tier: "low", cpmMedian: 0.45, cpmMin: 0.15, cpmMax: 1.60, currency: "XOF", topNiches: ["Music", "Comedy", "Entertainment"], population: "28M", internetPenetration: "55%", youtubeUsers: "12M", notableCreators: ["Ivorian Stars"] },
];

function generateFaq(c: RawCountry): { q: string; a: string }[] {
    const rpm = (c.cpmMedian * 0.55).toFixed(2);
    const earn1m = Math.round(c.cpmMedian * 0.55 * 1000);
    return [
        { q: `What is the average YouTube CPM in ${c.name}?`, a: `The average YouTube CPM in ${c.name} is $${c.cpmMedian.toFixed(2)} in 2026, with a range from $${c.cpmMin.toFixed(2)} to $${c.cpmMax.toFixed(2)} depending on the content niche.` },
        { q: `How much does YouTube pay for 1 million views in ${c.name}?`, a: `With ${c.name}'s average CPM of $${c.cpmMedian.toFixed(2)}, 1 million views earns approximately $${earn1m.toLocaleString()} after YouTube's 45% cut (based on ~55% monetized views).` },
        { q: `What is the RPM in ${c.name}?`, a: `The estimated RPM (Revenue Per Mille after YouTube's cut) in ${c.name} is approximately $${rpm}, meaning creators keep about $${rpm} per 1,000 monetized views.` },
        { q: `What are the best YouTube niches in ${c.name}?`, a: `The highest-paying niches in ${c.name} are ${c.topNiches.join(", ")}. These niches attract premium advertisers willing to pay higher CPMs.` },
    ];
}

export const countries: CountryData[] = raw.map((c) => ({
    name: c.name,
    slug: mkSlug(c.name),
    flag: c.flag,
    continent: c.continent,
    tier: c.tier,
    cpmMedian: c.cpmMedian,
    cpmMin: c.cpmMin,
    cpmMax: c.cpmMax,
    rpmEstimate: parseFloat((c.cpmMedian * 0.55).toFixed(2)),
    currency: c.currency,
    topNiches: c.topNiches,
    population: c.population,
    internetPenetration: c.internetPenetration,
    youtubeUsers: c.youtubeUsers,
    notableCreators: c.notableCreators,
    faq: generateFaq(c),
}));

export function getCountryBySlug(slug: string): CountryData | undefined {
    return countries.find((c) => c.slug === slug);
}

export function getCountriesByTier(tier: CountryData["tier"]): CountryData[] {
    return countries.filter((c) => c.tier === tier);
}

export function getCountriesByContinent(continent: string): CountryData[] {
    return countries.filter((c) => c.continent.includes(continent));
}
