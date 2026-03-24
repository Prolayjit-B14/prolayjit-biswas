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
    { href: "/projects",    label: "Projects",   icon: Blocks },
    { href: "/hardware",    label: "Hardware",   icon: Cpu },
    { href: "/#skills",     label: "Skills",     icon: TerminalIcon },
    { href: "/#experience", label: "Experience", icon: GraduationCap },
    { href: "/blog",        label: "Blog",       icon: FileText },
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
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            className="hidden md:flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-[#94a3b8] hover:text-primary hover:border-primary/30 transition-all"
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
