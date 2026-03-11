// src/components/layout/PageHero.tsx
// Shared animated page header — Server-compatible (no "use client") 
// Uses framer-motion's whileInView via motion.div which is fine in server components
"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
// Named badge icons used via a string lookup — avoids passing functions across server/client boundary
import {
    Blocks, FileText, Image as ImageIcon, Trophy, GraduationCap,
    Cpu, LayoutDashboard, Terminal as TerminalIconComp, Code2, Newspaper,
    type LucideIcon
} from "lucide-react";

// icon name → component lookup (all static)
const ICONS: Record<string, LucideIcon> = {
    Blocks, FileText, ImageIcon, Trophy, GraduationCap,
    Cpu, LayoutDashboard, TerminalIcon: TerminalIconComp, Code2, Newspaper,
};

interface PageHeroProps {
    badge: string;
    badgeIconName: string; // e.g. "Blocks", "Trophy" — resolved via ICONS map
    title: string;
    description: string;
    accentColor?: string;
    align?: "left" | "center";
    children?: React.ReactNode;
}

const ACCENT: Record<string, { badge: string; bar: string }> = {
    primary: { badge: "border-primary/30 bg-primary/10 text-primary",         bar: "from-primary to-transparent" },
    blue:    { badge: "border-blue-500/30 bg-blue-500/10 text-blue-400",       bar: "from-blue-500 to-transparent" },
    purple:  { badge: "border-purple-500/30 bg-purple-500/10 text-purple-400", bar: "from-purple-500 to-transparent" },
    amber:   { badge: "border-amber-500/30 bg-amber-500/10 text-amber-400",    bar: "from-amber-500 to-transparent" },
    rose:    { badge: "border-rose-500/30 bg-rose-500/10 text-rose-400",       bar: "from-rose-500 to-transparent" },
    cyan:    { badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",       bar: "from-cyan-500 to-transparent" },
};

export function PageHero({
    badge, badgeIconName, title, description,
    accentColor = "primary", align = "left", children
}: PageHeroProps) {
    const accent = ACCENT[accentColor] ?? ACCENT.primary;
    const centered = align === "center";
    const BadgeIcon = ICONS[badgeIconName] ?? Cpu;

    return (
        <div className="relative overflow-hidden border-b border-white/5 bg-[#030712]">
            {/* Gradient orb */}
            <div className={`absolute -top-40 ${centered ? "left-1/2 -translate-x-1/2" : "-left-20"} w-[560px] h-[560px] rounded-full bg-gradient-to-br ${accent.bar} opacity-[0.05] blur-3xl pointer-events-none`} />
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <Container>
                <div className={`py-20 pt-28 ${centered ? "flex flex-col items-center text-center" : "max-w-3xl"}`}>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest w-fit mb-5 ${accent.badge}`}
                    >
                        <BadgeIcon className="h-3 w-3" />
                        {badge}
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-glow"
                    >
                        {title}
                    </motion.h1>

                    {/* Accent bar */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className={`${centered ? "mx-auto" : ""} origin-left h-1 w-20 rounded-full bg-gradient-to-r ${accent.bar} mb-5`}
                    />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-[#94a3b8] leading-relaxed max-w-2xl"
                    >
                        {description}
                    </motion.p>

                    {children && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="mt-6"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </Container>
        </div>
    );
}
