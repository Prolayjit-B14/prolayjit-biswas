"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Briefcase, GraduationCap, Trophy, Zap, LucideIcon } from "lucide-react";

type TimelineEvent = {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bg: string;
    border: string;
    dot: string;
    side: "left" | "right";
    achievement?: string;
    link?: string;
};

const events: TimelineEvent[] = [
    {
        year: "2021 – 2023",
        title: "Higher Secondary (Science)",
        subtitle: "Physics, Chemistry, Mathematics",
        description: "Strong foundation in electronics and mathematics — the bedrock of hardware engineering.",
        icon: GraduationCap,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        dot: "bg-blue-400",
        side: "right",
    },
    {
        year: "2023 – Present",
        title: "B.Tech Electronics (VLSI)",
        subtitle: "MAKAUT, Kolkata",
        description: "Specializing in embedded systems, PCB design, VLSI circuitry, and IoT development.",
        icon: GraduationCap,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/30",
        dot: "bg-primary",
        side: "left",
    },
    {
        year: "Mar 2024",
        title: "SargamAI — Frontend Developer",
        subtitle: "AI Music Platform",
        description: "Built the full frontend and UI/UX of an AI-powered platform for Indian classical music using Next.js and Gemini API.",
        icon: Briefcase,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
        dot: "bg-purple-400",
        side: "right",
        achievement: "Frontend Architecture",
        link: "https://github.com/Prolayjit-B14"
    },
    {
        year: "Aug 2024",
        title: "Smart India Hackathon",
        subtitle: "National Level — She Shield",
        description: "Designed a wearable safety device with BLE & GPS from PCB schematic to working prototype in 36 hours.",
        icon: Trophy,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30",
        dot: "bg-yellow-400",
        side: "left",
        achievement: "National Finalist",
    },
    {
        year: "Feb 2025",
        title: "MAKATHON'25",
        subtitle: "Hackathon Winner",
        description: "Won MAKAUT's annual hackathon building an IoT environmental monitoring system with cloud integration.",
        icon: Trophy,
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/30",
        dot: "bg-rose-400",
        side: "right",
        achievement: "1st Prize Winner",
    },
    {
        year: "2025 – Now",
        title: "Portfolio & Open Source",
        subtitle: "Building in public",
        description: "Shipping this portfolio, contributing to hardware open source, and building smarter IoT systems every day.",
        icon: Zap,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        dot: "bg-cyan-400",
        side: "left",
    },
];

export function Timeline() {
    return (
        <section id="timeline" className="relative py-16 md:py-24 bg-background overflow-hidden border-t border-white/5">
            {/* Background grid */}
            <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                        <Trophy className="w-3 h-3" /> Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-glow mb-3">
                        Career & Education
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                        Key milestones across my academic path, hackathon wins, and engineering projects.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 hidden md:block" />

                    <div className="flex flex-col gap-0">
                        {events.map((event, index) => {
                            const Icon = event.icon;
                            const isLeft = event.side === "left";

                            return (
                                <div key={event.title} className="relative flex items-center md:justify-center">
                                    {/* Mobile — single column */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.07 }}
                                        className="md:hidden flex gap-4 items-start py-4 w-full"
                                    >
                                        <div className={`flex-shrink-0 mt-1 p-2.5 rounded-xl ${event.bg} ${event.color} border ${event.border}`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex flex-col gap-1 w-full">
                                            <p className={`text-[10px] font-bold uppercase tracking-wider ${event.color}`}>{event.year}</p>
                                            <h3 className="font-bold text-[#f8fafc] text-sm leading-tight">{event.title}</h3>
                                            <p className="text-xs text-muted-foreground">{event.subtitle}</p>
                                            <p className="text-xs text-[#6b7280] leading-relaxed mb-2">{event.description}</p>
                                            
                                            <div className="flex items-center gap-3">
                                                {event.achievement && (
                                                    <span className={`inline-flex items-center px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold ${event.color}`}>
                                                        {event.achievement}
                                                    </span>
                                                )}
                                                {event.link && (
                                                    <a href={event.link} target="_blank" rel="noreferrer" className="text-[10px] text-white/60 hover:text-primary transition-colors uppercase tracking-wider font-bold flex flex-row items-center gap-1">
                                                        View <span className="text-lg leading-none">&rarr;</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Desktop — alternating layout */}
                                    <div className="hidden md:grid grid-cols-2 w-full gap-8 py-5">
                                        {/* Left slot */}
                                        <div className="flex justify-end">
                                            {isLeft && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -40 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: index * 0.07 }}
                                                    className={`glass-card border ${event.border} p-5 rounded-2xl max-w-sm w-full group hover:border-opacity-60 transition-all`}
                                                >
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className={`p-2 rounded-xl ${event.bg} ${event.color}`}>
                                                            <Icon className="w-4 h-4" />
                                                        </div>
                                                        <p className={`text-[10px] font-bold uppercase tracking-wider ${event.color}`}>{event.year}</p>
                                                    </div>
                                                    <h3 className="font-bold text-[#f8fafc] text-sm leading-tight mb-1">{event.title}</h3>
                                                    <p className="text-xs text-muted-foreground mb-2">{event.subtitle}</p>
                                                    <p className="text-xs text-[#6b7280] leading-relaxed mb-3">{event.description}</p>
                                                    
                                                    <div className="flex items-center gap-3">
                                                        {event.achievement && (
                                                            <span className={`inline-flex items-center px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold ${event.color}`}>
                                                                {event.achievement}
                                                            </span>
                                                        )}
                                                        {event.link && (
                                                            <a href={event.link} target="_blank" rel="noreferrer" className="text-[10px] text-white/60 hover:text-primary transition-colors uppercase tracking-wider font-bold flex flex-row items-center gap-1">
                                                                View <span className="text-lg leading-none">&rarr;</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Center dot */}
                                        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center" style={{ top: "50%", marginTop: "-12px" }}>
                                            <div className={`w-5 h-5 rounded-full ${event.dot} border-4 border-background animate-timeline-pulse shadow-[0_0_12px_currentColor] z-10`} />
                                        </div>

                                        {/* Right slot */}
                                        <div className="flex justify-start">
                                            {!isLeft && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 40 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: index * 0.07 }}
                                                    className={`glass-card border ${event.border} p-5 rounded-2xl max-w-sm w-full group hover:border-opacity-60 transition-all`}
                                                >
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className={`p-2 rounded-xl ${event.bg} ${event.color}`}>
                                                            <Icon className="w-4 h-4" />
                                                        </div>
                                                        <p className={`text-[10px] font-bold uppercase tracking-wider ${event.color}`}>{event.year}</p>
                                                    </div>
                                                    <h3 className="font-bold text-[#f8fafc] text-sm leading-tight mb-1">{event.title}</h3>
                                                    <p className="text-xs text-muted-foreground mb-2">{event.subtitle}</p>
                                                    <p className="text-xs text-[#6b7280] leading-relaxed mb-3">{event.description}</p>
                                                    
                                                    <div className="flex items-center gap-3">
                                                        {event.achievement && (
                                                            <span className={`inline-flex items-center px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold ${event.color}`}>
                                                                {event.achievement}
                                                            </span>
                                                        )}
                                                        {event.link && (
                                                            <a href={event.link} target="_blank" rel="noreferrer" className="text-[10px] text-white/60 hover:text-primary transition-colors uppercase tracking-wider font-bold flex flex-row items-center gap-1">
                                                                View <span className="text-lg leading-none">&rarr;</span>
                                                            </a>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
