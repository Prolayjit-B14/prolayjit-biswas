"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Trophy, LucideIcon } from "lucide-react";

type TimelineEvent = {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    border: string;
    achievement?: string;
    type: "education" | "experience";
};

const events: TimelineEvent[] = [
    {
        year: "2023 – Present",
        title: "B.Tech Electronics (VLSI)",
        subtitle: "MAKAUT, Kolkata",
        description: "Focusing on hardware architectures, signal processing, and integrated cloud telemetry.",
        icon: GraduationCap,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        type: "education",
    },
    {
        year: "Feb 2025",
        title: "MAKATHON '25 winner",
        subtitle: "Industrial IoT Hackathon",
        description: "Engineered a scalable environmental analytics node with real-time industrial telemetry.",
        icon: Trophy,
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        type: "experience",
        achievement: "1st Position",
    },
    {
        year: "Aug 2024",
        title: "SIH National Finalist",
        subtitle: "Smart India Hackathon",
        description: "Developed a wearable safety interface with embedded firmware and localized GSM uplink.",
        icon: Trophy,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        type: "experience",
        achievement: "National Finalist",
    },
    {
        year: "Mar 2024",
        title: "SargamAI Core Engineering",
        subtitle: "AI Platform Infrastructure",
        description: "Architected modern frontend systems for large-scale AI service orchestration.",
        icon: Briefcase,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        type: "experience",
    },
];

export function Timeline() {
    return (
        <section id="experience" className="relative h-screen min-h-[750px] bg-[#02050a] flex items-center overflow-hidden py-20">
            {/* Background Narrative */}
            <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none select-none overflow-hidden h-full rotate-12">
                <span className="text-[200px] font-black leading-none text-white whitespace-nowrap">TIMELINE_LOG_0x4F</span>
            </div>

            <Container className="h-full flex flex-col justify-center">
                <div className="flex flex-col items-center mb-16 text-center shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4"
                    >
                        Succession Plan
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">Milestones</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full" />
                </div>

                <div className="relative max-w-5xl mx-auto w-full px-4">
                    {/* Pulsing Vertical Stem */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-white/10 to-rose-500/0 -translate-x-1/2 hidden md:block">
                        <motion.div 
                            animate={{ opacity: [0.2, 0.5, 0.2], scaleY: [0.8, 1, 0.8] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="h-full w-full bg-blue-500/50 blur-sm"
                        />
                    </div>

                    <div className="space-y-12">
                        {events.map((event, i) => (
                            <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Chromatic Connector Indicator */}
                                <motion.div 
                                    whileInView={{ scale: [0, 1.2, 1] }}
                                    className={`absolute left-1/2 w-4 h-4 rounded-full z-20 -translate-x-1/2 hidden md:flex items-center justify-center border-4 border-[#02050a] ${event.bg.replace('/10', '')} shadow-lg`}
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full bg-white opacity-40 animate-ping`} />
                                </motion.div>

                                {/* Event Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="w-full md:w-[45%]"
                                >
                                    <div className={cn(
                                        "group relative p-8 rounded-[2.5rem] border bg-[#0b1220]/40 backdrop-blur-2xl transition-all duration-500 overflow-hidden",
                                        "hover:bg-[#0b1220]/60",
                                        event.border.replace('/20', '/10'),
                                        `hover:${event.border.replace('/20', '/40')}`
                                    )}>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={cn("p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform", event.color)}>
                                                <event.icon className="w-5 h-5" />
                                            </div>
                                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{event.year}</span>
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="text-xl font-black text-white leading-tight uppercase tracking-tighter">
                                                {event.title}
                                            </h4>
                                            <p className={cn("text-[11px] font-black uppercase tracking-widest", event.color)}>
                                                {event.subtitle}
                                            </p>
                                            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                                                {event.description}
                                            </p>

                                            {event.achievement && (
                                                <div className={cn("mt-6 flex items-center gap-2.5 px-4 py-2 rounded-xl border w-fit", event.bg, event.border)}>
                                                    <Trophy className={cn("w-3 h-3", event.color)} />
                                                    <span className={cn("text-[10px] font-black uppercase tracking-widest", event.color)}>
                                                        {event.achievement}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Spacing Component */}
                                <div className="hidden md:block w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
