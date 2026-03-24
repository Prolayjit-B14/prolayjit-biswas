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
    Sun, Moon, FlaskConical, Microscope, GitBranch, Award,
    type LucideIcon,
} from "lucide-react";

const ECOSYSTEM_ITEMS = [
    { href: "/hardware-lab", label: "Hardware Lab", icon: FlaskConical, color: "text-rose-400" },
    { href: "/research",     label: "Research",     icon: Microscope,   color: "text-blue-400" },
    { href: "/workflow",     label: "Workflow",     icon: GitBranch,    color: "text-emerald-400" },
    { href: "/gallery",      label: "Gallery",      icon: ImageIcon,    color: "text-purple-400" },
    { href: "/achievements", label: "Achievements", icon: Award,        color: "text-amber-400" },
];

export function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [labOpen, setLabOpen] = useState(false);
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
                className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                    scrolled
                        ? "border-b border-white/10 bg-[#020617]/95 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                        : "border-b border-transparent bg-transparent"
                }`}
            >
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">

                    {/* Logo - Vibrant Gradient */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
                        <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 p-[1px] group-hover:scale-110 transition-transform duration-500">
                            <div className="h-full w-full rounded-xl bg-[#020617] flex items-center justify-center">
                                <Cpu className="h-6 w-6 text-white group-hover:text-emerald-400 transition-colors" />
                            </div>
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">PB<span className="text-emerald-500 animate-pulse">.</span></span>
                    </Link>

                    {/* Desktop Navigation - Colorful Icons */}
                    <div className="hidden lg:flex items-center gap-1.5 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                        {[
                            { href: "/#projects",    label: "Projects",     icon: Blocks, color: "text-rose-400" },
                            { href: "/architecture", label: "Architecture", icon: LayoutDashboard, color: "text-blue-400" },
                            { href: "/#skills",      label: "Skills",       icon: TerminalIcon, color: "text-emerald-400" },
                            { href: "/#experience",  label: "Experience",   icon: GraduationCap, color: "text-amber-400" },
                        ].map(({ href, label, icon: Icon, color }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "relative flex items-center gap-2 rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300",
                                    isActive(href)
                                        ? "text-white"
                                        : "text-zinc-500 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {isActive(href) && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-xl bg-white/10 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <Icon className={cn("relative z-10 h-3.5 w-3.5", isActive(href) ? color : "text-zinc-500 group-hover:" + color)} />
                                <span className={cn("relative z-10", isActive(href) ? "opacity-100" : "opacity-70")}>{label}</span>
                            </Link>
                        ))}

                        {/* Lab Dropdown */}
                        <div 
                            className="relative group/lab"
                            onMouseEnter={() => setLabOpen(true)}
                            onMouseLeave={() => setLabOpen(false)}
                        >
                            <button className="relative flex items-center gap-2 rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-all cursor-pointer">
                                <FlaskConical className="h-3.5 w-3.5 text-rose-400" />
                                <span>Lab</span>
                            </button>

                            <AnimatePresence>
                                {labOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-2 w-48 p-2 rounded-2xl bg-[#0b1220]/95 border border-white/10 backdrop-blur-3xl shadow-2xl z-50"
                                    >
                                        {ECOSYSTEM_ITEMS.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-center gap-3 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                                            >
                                                <item.icon className={cn("h-3.5 w-3.5", item.color)} />
                                                {item.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 md:gap-4">
                            <button
                                onClick={toggleTheme}
                                className="hidden sm:flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-zinc-500 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                            >
                                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </button>

                            <a
                                href="mailto:prolayjitbiswas2004@gmail.com"
                                className="hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2.5 text-xs font-black text-white transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] uppercase tracking-widest"
                            >
                                <Send className="h-3.5 w-3.5" />
                                Hire Me
                            </a>

                            <button
                                onClick={() => setOpen((p) => !p)}
                                className="flex lg:hidden items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-zinc-500 hover:text-white transition-colors"
                            >
                                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
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
                        className="fixed top-20 inset-x-0 z-40 border-b border-white/5 bg-[#030712]/98 backdrop-blur-3xl px-6 pt-4 pb-8 md:hidden overflow-y-auto max-h-[85vh] custom-scrollbar"
                    >
                        <div className="grid gap-6">
                            <div className="grid gap-1">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 px-2">Navigation</p>
                                {[
                                    { href: "/#projects",    label: "Projects",     icon: Blocks, color: "text-rose-400" },
                                    { href: "/architecture", label: "Architecture", icon: LayoutDashboard, color: "text-blue-400" },
                                    { href: "/#skills",      label: "Skills",       icon: TerminalIcon, color: "text-emerald-400" },
                                    { href: "/#experience",  label: "Experience",   icon: GraduationCap, color: "text-amber-400" },
                                ].map(({ href, label, icon: Icon, color }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "flex items-center gap-4 rounded-2xl px-4 py-4 text-xs font-black uppercase tracking-widest transition-all",
                                            isActive(href) ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5"
                                        )}
                                    >
                                        <Icon className={cn("h-4 w-4", color)} />
                                        {label}
                                    </Link>
                                ))}
                            </div>

                            <div className="grid gap-1">
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 px-2">Engineering Ecosystem</p>
                                {ECOSYSTEM_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-4 rounded-2xl px-4 py-4 text-xs font-black uppercase tracking-widest text-zinc-400 hover:bg-white/5 transition-all"
                                    >
                                        <item.icon className={cn("h-4 w-4", item.color)} />
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            
                            <div className="h-px bg-white/5 mx-2" />

                            <div className="grid gap-2">
                                <button
                                    onClick={() => { toggleTheme(); setOpen(false); }}
                                    className="w-full flex items-center gap-4 rounded-2xl px-4 py-4 text-xs font-black uppercase tracking-widest text-zinc-400 hover:bg-white/5 transition-all"
                                >
                                    {theme === "dark" ? <Sun className="h-4 w-4 text-emerald-400" /> : <Moon className="h-4 w-4 text-blue-400" />}
                                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                                </button>

                                <a
                                    href="mailto:prolayjitbiswas2004@gmail.com"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-center gap-3 rounded-2xl px-4 py-5 text-xs font-black uppercase tracking-[0.2em] text-[#020617] bg-white shadow-xl"
                                >
                                    <Send className="h-4 w-4" />
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
