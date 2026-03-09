import { ChevronRight } from "lucide-react";

interface NicheCardProps {
    title: string;
    cpm: string;
    color: string;
    description: string;
    icon: string;
}

export function NicheCard({ title, cpm, color, description, icon }: NicheCardProps) {
    return (
        <div className="group relative bg-card border border-border/50 rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            {/* High-tech scanning line effect on hover */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-x-full group-hover:animate-[scan_2s_linear_infinite] z-20 pointer-events-none" />

            {/* Background Glow */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />

            {/* CPM Badge - High Tech Look */}
            <div className="flex items-center justify-between mb-8">
                <div className="text-4xl bg-muted/50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">Estimated CPM</span>
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-black bg-gradient-to-r ${color} text-white shadow-lg shadow-primary/20`}>
                        {cpm}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3 relative z-10">
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Interactive Footer */}
            <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs font-bold text-primary tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-500">
                    View Detail Analysis
                </span>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ChevronRight className="h-4 w-4" />
                </div>
            </div>
        </div>
    );
}
