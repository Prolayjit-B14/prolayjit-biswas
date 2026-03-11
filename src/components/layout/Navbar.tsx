"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard, FileText, Cpu, Blocks, Menu, X, Send,
    Sun, Moon, Terminal as TerminalIcon, Trophy, GraduationCap, Image as ImageIcon, type LucideIcon,
} from "lucide-react";

interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
    { href: "/projects", label: "Projects", icon: Blocks },
    { href: "/hardware", label: "Lab", icon: Cpu },
    { href: "/hackathons", label: "Hackathons", icon: Trophy },
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/education", label: "Education", icon: GraduationCap },
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/terminal", label: "Terminal", icon: TerminalIcon },
    { href: "/blog", label: "Blog", icon: FileText },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { theme, toggle } = useTheme();

    const isActive = (href: string) =>
        pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <>
            <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030712]/70 backdrop-blur-2xl transition-all duration-300">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
                        <div className="h-8 w-8 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                            <Cpu className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-glow">PB.</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-0.5">
                        {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                                    isActive(href)
                                        ? "text-primary"
                                        : "text-[#94a3b8] hover:text-[#f1f5f9]"
                                )}
                            >
                                {isActive(href) && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                                    />
                                )}
                                <Icon className="relative z-10 h-3.5 w-3.5" />
                                <span className="relative z-10">{label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        {/* Theme toggle */}
                        <button
                            onClick={toggle}
                            aria-label="Toggle theme"
                            className="flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-[#94a3b8] hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200 flex-shrink-0"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={theme}
                                    initial={{ rotate: -30, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 30, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                                </motion.span>
                            </AnimatePresence>
                        </button>

                        {/* Hire Me (Hidden on mobile) */}
                        <a
                            href="mailto:prolayjitbiswas14112004@gmail.com"
                            className="hidden md:flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_16px_rgba(74,222,128,0.4)] duration-200 whitespace-nowrap"
                        >
                            <Send className="h-3.5 w-3.5" />
                            Hire Me
                        </a>

                        {/* Hamburger (Only visible on mobile) */}
                        <button
                            onClick={() => setOpen((p) => !p)}
                            className="flex md:hidden items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-[#94a3b8] hover:text-[#f1f5f9] transition-colors flex-shrink-0 ml-1"
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
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="fixed top-16 inset-x-0 z-40 border-b border-white/5 bg-[#030712]/95 backdrop-blur-2xl px-4 pt-3 pb-6 md:hidden"
                    >
                        <div className="space-y-1">
                            {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                                        isActive(href)
                                            ? "bg-primary/10 text-primary border border-primary/20"
                                            : "text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {label}
                                </Link>
                            ))}
                            <a
                                href="mailto:prolayjitbiswas14112004@gmail.com"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mt-2"
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
