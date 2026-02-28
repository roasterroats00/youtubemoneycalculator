"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Calculator, BarChart3, Globe, Menu, X, PieChart, TrendingUp, Eye, Wallet, Gem, DollarSign } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const tools = [
    {
        label: "YouTube Money Calculator",
        href: "/",
        desc: "Estimate channel & video revenue",
        icon: <DollarSign className="h-4 w-4" />,
    },
    {
        label: "Views to Money Calculator",
        href: "/youtube-views-to-money",
        desc: "Convert views into earnings",
        icon: <Calculator className="h-4 w-4" />,
    },
    {
        label: "Revenue Estimator",
        href: "/youtube-revenue-estimator",
        desc: "Predict your YouTube income",
        icon: <BarChart3 className="h-4 w-4" />,
    },
    {
        label: "Revenue Calculator",
        href: "/youtube-revenue-calculator",
        desc: "Calculate earnings with RPM",
        icon: <PieChart className="h-4 w-4" />,
    },
    {
        label: "YouTube Pay Scale",
        href: "/youtube-pay-scale",
        desc: "CPM, RPM & earnings guide",
        icon: <TrendingUp className="h-4 w-4" />,
    },
    {
        label: "Pay Per View",
        href: "/youtube-pay-per-view",
        desc: "How much YouTube pays per view",
        icon: <Eye className="h-4 w-4" />,
    },
    {
        label: "Pay Calculator",
        href: "/youtube-pay-calculator",
        desc: "Estimate earnings instantly",
        icon: <Wallet className="h-4 w-4" />,
    },
    {
        label: "Net Worth Calculator",
        href: "/youtube-net-worth-calculator",
        desc: "Estimate your channel's value",
        icon: <Gem className="h-4 w-4" />,
    },
    {
        label: "CPM by Country",
        href: "/cpm-by-country",
        desc: "Global CPM & RPM rates",
        icon: <Globe className="h-4 w-4" />,
    },
];

const navLinks = [
    { label: "How to Use", href: "/#how-to-use" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
];

export function Header() {
    const [toolsOpen, setToolsOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setToolsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group cursor-pointer focus:outline-none">
                    <Image
                        src="/upload/youtubemoneycalculator.net.png"
                        alt="YouTube Money Calculator"
                        width={280}
                        height={70}
                        className="h-14 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {/* Tools Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setToolsOpen(!toolsOpen)}
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                        >
                            Tools
                            <ChevronDown
                                className={`h-3.5 w-3.5 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {toolsOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-card border border-border/50 rounded-2xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                                {tools.map((tool) => (
                                    <Link
                                        key={tool.href}
                                        href={tool.href}
                                        onClick={() => setToolsOpen(false)}
                                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                                    >
                                        <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0 mt-0.5">
                                            {tool.icon}
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold block">{tool.label}</span>
                                            <span className="text-xs text-muted-foreground">{tool.desc}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Regular Links */}
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group focus:outline-none"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden h-10 w-10 rounded-xl bg-muted/50 flex items-center justify-center"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="lg:hidden border-t bg-card animate-in slide-in-from-top-2 duration-200">
                    <div className="container mx-auto px-4 py-4 space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-3 pt-2 pb-1">
                            Tools
                        </p>
                        {tools.map((tool) => (
                            <Link
                                key={tool.href}
                                href={tool.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                            >
                                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {tool.icon}
                                </div>
                                <div>
                                    <span className="text-sm font-bold block">{tool.label}</span>
                                    <span className="text-xs text-muted-foreground">{tool.desc}</span>
                                </div>
                            </Link>
                        ))}
                        <div className="h-px bg-border/50 my-2" />
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-3 text-sm font-bold text-muted-foreground hover:text-primary transition-colors rounded-xl hover:bg-muted/50"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
