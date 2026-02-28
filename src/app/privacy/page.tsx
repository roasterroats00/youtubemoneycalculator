import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Eye, Shield, Database, Bell } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";

export const metadata: Metadata = {
    title: "Privacy Policy - YouTube Money Calculator",
    description: "Our privacy commitment. YouTube Money Calculator collects minimal data to improve our AI revenue models. We never sell your data. Read our full transparency manifesto.",
    openGraph: {
        title: "Privacy Policy - YouTube Money Calculator",
        description: "Read our privacy manifesto. We are committed to data transparency and protecting all our users.",
        type: "website",
    },
};

const sections = [
    {
        title: "Data We Collect",
        icon: "database",
        content: "We do not require user accounts to use our primary tools. We collect minimal informational data such as browser type, general geography, and tool usage patterns to improve our AI models and service delivery.",
    },
    {
        title: "How We Use Data",
        icon: "eye",
        content: "Information collected is used strictly for technical performance monitoring, security diagnostics, and refining our revenue prediction algorithms. We do not sell user data to third parties.",
    },
    {
        title: "Third-Party Services",
        icon: "shield",
        content: "Our site uses standard analytics and advertising services that may use cookies. Additionally, we integrate with YouTube APIs to fetch public metrics. Your interactions with those services are governed by their respective privacy policies.",
    },
    {
        title: "Cookies Protocol",
        icon: "lock",
        content: "We use essential cookies to maintain session state and preferences. You can manage cookie settings through your browser interface, though some features may be limited.",
    },
];

function SectionIcon({ type }: { type: string }) {
    const cls = "h-5 w-5";
    if (type === "eye") return <Eye className={cls} />;
    if (type === "shield") return <Shield className={cls} />;
    if (type === "lock") return <Lock className={cls} />;
    return <Database className={cls} />;
}

export default function PrivacyPage() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Privacy Policy", item: "/privacy" },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Schema data={breadcrumbData} />
            <Header />

            <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-6">
                        <Bell className="h-3 w-3" /> Latest Update: Feb 2026
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase leading-none">
                        Transparency <br />
                        <span className="text-primary italic">Manifesto</span>
                    </h1>
                    <p className="text-lg text-muted-foreground font-medium max-w-xl">
                        At YouTube Money Calculator, we believe your privacy is a fundamental digital right. Below is our commitment to data integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections.map((section, idx) => (
                        <div key={idx} className="p-8 rounded-[2rem] bg-muted/20 border border-border/50 hover:border-primary/30 transition-all group">
                            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <SectionIcon type={section.icon} />
                            </div>
                            <h2 className="text-lg font-black uppercase mb-3 tracking-tight">{section.title}</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed font-medium">{section.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-[2rem] border border-primary/20 bg-primary/5">
                    <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        Encryption Standards
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        All data processed through our AI engine is transmitted via secure, encrypted channels. We implement industry-standard security protocols to protect our infrastructure and your browsing experience.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}
