"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Send, Zap, Shield, HelpCircle, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            {/* Modern Header */}
            <Header />

            <main className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                                <MessageSquare className="h-3 w-3" />
                                GET IN TOUCH
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
                                Connect with our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
                                    Analytics Team
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-medium">
                                Have questions about our revenue models or business inquiries? Our team is standing by to assist you with creator-focused intelligence.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 p-6 rounded-3xl bg-muted/30 border border-border/50 group hover:border-primary/30 transition-all">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Email Support</h3>
                                    <a href="mailto:hello@ytmoney.ai" className="text-xl font-black hover:text-primary transition-colors">hello@ytmoney.ai</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 rounded-3xl bg-muted/30 border border-border/50 group hover:border-primary/30 transition-all">
                                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Zap className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Business Inquiries</h3>
                                    <a href="mailto:partners@ytmoney.ai" className="text-xl font-black hover:text-primary transition-colors">partners@ytmoney.ai</a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-[2.5rem] bg-muted/40 border border-border/50">
                            <div className="flex items-center gap-4 mb-4">
                                <HelpCircle className="h-6 w-6 text-primary" />
                                <h3 className="text-lg font-black uppercase">Frequently Asked</h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                                Looking for quick answers? Check our <Link href="/faq" className="text-primary hover:underline">FAQ section</Link> for detailed documentation on our revenue models and data sources.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000" />
                        <div className="relative bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
                            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
                                <Send className="h-8 w-8 text-primary" />
                                Send Message
                            </h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full h-14 bg-muted/20 border border-border/50 rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-bold outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full h-14 bg-muted/20 border border-border/50 rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-bold outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Inquiry Type</label>
                                    <select className="w-full h-14 bg-muted/20 border border-border/50 rounded-2xl px-6 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-bold outline-none appearance-none cursor-pointer">
                                        <option>General Support</option>
                                        <option>Business Partnership</option>
                                        <option>Data Correction</option>
                                        <option>Feature Request</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                                    <textarea
                                        placeholder="How can we help your creator journey?"
                                        rows={5}
                                        className="w-full bg-muted/20 border border-border/50 rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-bold outline-none resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black tracking-widest uppercase shadow-xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                                >
                                    <Send className="h-5 w-5" />
                                    Broadcast Message
                                </button>
                            </form>

                            <div className="mt-8 flex items-center justify-center gap-3 text-muted-foreground">
                                <Shield className="h-4 w-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Secure &amp; Encrypted Transmission</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
