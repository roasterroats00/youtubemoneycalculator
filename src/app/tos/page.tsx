import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, Scale, Lock, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, SchemaFactory } from "@/components/Schema";

export const metadata: Metadata = {
    title: "Terms of Service - YouTube Money Calculator",
    description: "Read our Terms of Service. YouTube Money Calculator provides AI-powered revenue projections for educational purposes. Understand how our platform works and your responsibilities.",
    openGraph: {
        title: "Terms of Service - YouTube Money Calculator",
        description: "Understand the terms of using YouTube Money Calculator's AI revenue intelligence platform.",
        type: "website",
    },
};

const sections = [
    {
        title: "1. Acceptance of Terms",
        icon: "globe",
        content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
    },
    {
        title: "2. Service Nature",
        icon: "shield",
        content: "YouTube Money Calculator is a data-driven prediction tool. All metrics provided including but not limited to CPM, RPM, and estimated earnings are projections based on historical data and AI modeling. These figures should be used for educational and planning purposes only and do not constitute financial advice.",
    },
    {
        title: "3. Accuracy of Data",
        icon: "file",
        content: "While we strive for maximum precision, we cannot guarantee 100% accuracy of our projections. Actual YouTube earnings are influenced by numerous real-time factors including viewer location, ad-blocker usage, seasonality, and Google's internal algorithm adjustments.",
    },
    {
        title: "4. User Conduct",
        icon: "scale",
        content: "Users agree not to use the service for any purpose that is prohibited by these terms of service. You are responsible for all of your activity in connection with the site and the service.",
    },
    {
        title: "5. Intellectual Property",
        icon: "lock",
        content: "Our predictive algorithms, specialized design elements, and original content are protected by intellectual property laws. Reproduction, redistribution, or data scraping without explicit permission is strictly prohibited.",
    },
];

function SectionIcon({ type }: { type: string }) {
    const cls = "h-6 w-6";
    if (type === "shield") return <Shield className={cls} />;
    if (type === "file") return <FileText className={cls} />;
    if (type === "scale") return <Scale className={cls} />;
    if (type === "lock") return <Lock className={cls} />;
    return <Globe className={cls} />;
}

export default function TOSPage() {
    const breadcrumbData = SchemaFactory.breadcrumb([
        { name: "Home", item: "/" },
        { name: "Terms of Service", item: "/tos" },
    ]);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Schema data={breadcrumbData} />
            {/* Background */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-primary/2 rounded-full blur-[150px]" />
            </div>

            <Header />

            <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
                        Terms of <span className="text-primary italic">Service</span>
                    </h1>
                    <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-xs">
                        Effective Date: February 2026
                    </p>
                </div>

                <div className="space-y-12">
                    {sections.map((section, idx) => (
                        <div key={idx} className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:bg-muted/10 transition-colors">
                            <div className="flex items-start gap-6">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                                    <SectionIcon type={section.icon} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black mb-4 uppercase tracking-tight">{section.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed font-medium">{section.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="p-12 rounded-[2.5rem] bg-muted/20 border border-border/10 text-center">
                        <h3 className="text-lg font-black uppercase mb-4">Questions about these terms?</h3>
                        <p className="text-muted-foreground mb-8 font-medium">
                            If you have any inquiries regarding our Terms of Service, please reach out to our legal department.
                        </p>
                        <Link href="/contact" className="inline-flex h-12 items-center justify-center px-8 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all">
                            Contact Legal
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
