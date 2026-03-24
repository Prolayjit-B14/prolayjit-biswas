"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/layout/ThemeProvider";
import {
    LayoutDashboard, FileText, Cpu, Blocks, Menu, X, Send,
    Terminal as TerminalIcon, Trophy, GraduationCap, Image as ImageIcon,
    Sun, Moon, type LucideIcon,
} from "lucide-react";

interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
    { href: "/#projects",    label: "Projects",   icon: Blocks },
    { href: "/#hardware",    label: "Hardware",   icon: Cpu },
    { href: "/#skills",      label: "Skills",     icon: TerminalIcon },
    { href: "/#experience",  label: "Experience", icon: GraduationCap },
    { href: "/#writing",     label: "Blog",       icon: FileText },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isActive = (href: string) =>
        pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <>
            {/* Global Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-blue-500 origin-left z-[100]"
            />

            <nav
                aria-label="Main navigation"
                className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                    scrolled
                        ? "border-b border-white/10 bg-[#030712]/92 backdrop-blur-2xl shadow-[0_1px_30px_rgba(0,0,0,0.5)]"
                        : "border-b border-white/5 bg-[#030712]/80 backdrop-blur-2xl"
                }`}
            >
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
                                aria-current={isActive(href) ? "page" : undefined}
                                className={cn(
                                    "relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
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
                        {/* Social Links */}
                        <a href="https://github.com/Prolayjit-B14" target="_blank" rel="noreferrer" className="hidden md:flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-[#94a3b8] hover:text-white transition-all">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                        </a>
                        <a href="https://linkedin.com/in/prolayjit-biswas" target="_blank" rel="noreferrer" className="hidden md:flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-[#94a3b8] hover:text-[#0077b5] transition-all">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                        </a>

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            className="hidden md:flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-[#94a3b8] hover:text-primary transition-all"
                        >
                            {theme === "dark"
                                ? <Sun className="h-4 w-4" />
                                : <Moon className="h-4 w-4" />
                            }
                        </button>

                        {/* Hire Me */}
                        <a
                            href="mailto:prolayjitbiswas14112004@gmail.com"
                            className="hidden md:flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_16px_rgba(74,222,128,0.4)] duration-200 whitespace-nowrap"
                        >
                            <Send className="h-3.5 w-3.5" />
                            Hire Me
                        </a>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setOpen((p) => !p)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            className="flex md:hidden items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
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
                        id="mobile-nav"
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
                                    aria-current={isActive(href) ? "page" : undefined}
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

                            {/* Theme toggle mobile */}
                            <button
                                onClick={() => { toggleTheme(); setOpen(false); }}
                                className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5 transition-colors"
                            >
                                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                                {theme === "dark" ? "Light Mode" : "Dark Mode"}
                            </button>

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
