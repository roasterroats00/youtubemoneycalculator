import Link from "next/link";
import Image from "next/image";
import { DollarSign, Mail, Twitter, Youtube, Instagram, Linkedin, Github } from "lucide-react";
import React from "react";

export function Footer() {
    return (
        <footer className="border-t bg-background relative overflow-hidden">
            {/* Decorative Background for Footer */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 py-16 text-foreground relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src="/upload/youtubemoneycalculator.net.png"
                                    alt="YouTube Money Calculator"
                                    width={300}
                                    height={75}
                                    className="h-16 w-auto"
                                />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                                The industry's most accurate YouTube revenue forecasting engine. Leveraging machine learning benchmarks to empower a new generation of digital entrepreneurs.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {[Twitter, Youtube, Instagram, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" aria-label="Social Link" className="h-10 w-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group focus:outline-none">
                                    <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {/* Tools Column */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-foreground/80">Tools</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                            <li><Link href="/" className="hover:text-primary transition-colors focus:outline-none">Money Calculator</Link></li>
                            <li><Link href="/youtube-views-to-money" className="hover:text-primary transition-colors focus:outline-none">Views to Money</Link></li>
                            <li><Link href="/youtube-revenue-estimator" className="hover:text-primary transition-colors focus:outline-none">Revenue Estimator</Link></li>
                            <li><Link href="/youtube-revenue-calculator" className="hover:text-primary transition-colors focus:outline-none">Revenue Calculator</Link></li>
                            <li><Link href="/youtube-pay-scale" className="hover:text-primary transition-colors focus:outline-none">Pay Scale</Link></li>
                            <li><Link href="/youtube-pay-per-view" className="hover:text-primary transition-colors focus:outline-none">Pay Per View</Link></li>
                            <li><Link href="/youtube-pay-calculator" className="hover:text-primary transition-colors focus:outline-none">Pay Calculator</Link></li>
                            <li><Link href="/youtube-net-worth-calculator" className="hover:text-primary transition-colors focus:outline-none">Net Worth Calculator</Link></li>
                            <li><Link href="/cpm-by-country" className="hover:text-primary transition-colors focus:outline-none">CPM by Country</Link></li>
                        </ul>
                    </div>

                    {/* Platform Column */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-foreground/80">Platform</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                            <li><Link href="/#calculator" className="hover:text-primary transition-colors focus:outline-none">Channel Analyzer</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors focus:outline-none">Blog</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors focus:outline-none">About</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-foreground/80">Support</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                            <li><Link href="/faq" className="hover:text-primary transition-colors focus:outline-none">Documentation</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors focus:outline-none">Get Support</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors focus:outline-none">Privacy Protocol</Link></li>
                            <li><Link href="/tos" className="hover:text-primary transition-colors focus:outline-none">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-foreground/80">Contact</h4>
                            <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl border border-border/50">
                                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h5 className="text-[10px] font-bold uppercase text-muted-foreground">Inquiries</h5>
                                    <Link href="/contact" className="text-sm font-bold hover:text-primary transition-colors focus:outline-none">Get In Touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/50 bg-muted/20 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-xs text-muted-foreground font-bold">
                            &copy; {new Date().getFullYear()} YouTube Money Calculator. All rights reserved. <span className="text-primary/40 mx-2">|</span> DESIGNED BY ANTIGRAVITY
                        </div>
                        <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <Link href="/tos" className="hover:text-primary transition-colors focus:outline-none">Protocol</Link>
                            <Link href="/about" className="hover:text-primary transition-colors focus:outline-none">Identity</Link>
                            <Link href="/privacy" className="hover:text-primary transition-colors focus:outline-none">Cookies</Link>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-border/50">
                        <p className="text-[10px] text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto opacity-60">
                            DISCLAIMER: Projections are based on historical market data and recursive AI modeling. Actual payouts are subject to Google T&C, ad-blocker penetration, and advertiser fulfillment rates. We are not officially affiliated with Google LLC.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
