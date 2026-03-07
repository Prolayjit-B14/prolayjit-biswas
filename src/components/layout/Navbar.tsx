"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard, FileText, Cpu, Blocks, Menu, X, Send, type LucideIcon,
} from "lucide-react";

interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
    { href: "/projects", label: "Projects", icon: Blocks },
    { href: "/hardware", label: "Lab", icon: Cpu },
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/terminal", label: "Terminal", icon: FileText },
    { href: "/blog", label: "Blog", icon: FileText },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <>
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                            <Cpu className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-glow">PB.</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                                    isActive(href)
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {isActive(href) && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                <Icon className="relative z-10 h-3.5 w-3.5" />
                                <span className="relative z-10">{label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <a
                            href="mailto:prolayjitbiswas14112004@gmail.com"
                            className="hidden sm:flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
                        >
                            <Send className="h-3.5 w-3.5" />
                            Hire Me
                        </a>

                        {/* Hamburger (mobile) */}
                        <button
                            onClick={() => setOpen((p) => !p)}
                            className="flex md:hidden items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Toggle menu"
                        >
                            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 inset-x-0 z-40 border-b border-white/5 bg-background/95 backdrop-blur-xl px-4 pb-6 md:hidden"
                    >
                        <div className="mt-4 space-y-1">
                            {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                        isActive(href)
                                            ? "bg-primary/10 text-primary border border-primary/20"
                                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </Link>
                            ))}
                            <a
                                href="mailto:prolayjitbiswas14112004@gmail.com"
                                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-primary bg-primary/10 border border-primary/20 mt-2"
                            >
                                <Send className="h-4 w-4" />
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
