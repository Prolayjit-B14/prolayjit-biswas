"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
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
        description: "Specializing in embedded systems, PCB design, VLSI circuitry, and IoT development.",
        icon: GraduationCap,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
        type: "education",
    },
    {
        year: "2021 – 2023",
        title: "Higher Secondary (Science)",
        subtitle: "Physics, Chemistry, Mathematics",
        description: "Strong foundation in electronics and mathematics — the bedrock of hardware engineering.",
        icon: GraduationCap,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        type: "education",
    },
    {
        year: "Feb 2025",
        title: "MAKATHON'25",
        subtitle: "Hackathon Winner",
        description: "Won MAKAUT's annual hackathon building an IoT environmental monitoring system with cloud integration.",
        icon: Trophy,
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        type: "experience",
        achievement: "1st Prize",
    },
    {
        year: "Aug 2024",
        title: "Smart India Hackathon",
        subtitle: "National Level",
        description: "Designed a wearable safety device with BLE & GPS from PCB schematic to working prototype.",
        icon: Trophy,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        type: "experience",
        achievement: "National Finalist",
    },
    {
        year: "Mar 2024",
        title: "SargamAI Frontend Developer",
        subtitle: "AI Platform",
        description: "Built the full frontend and UI of an AI-powered platform using Next.js and Gemini.",
        icon: Briefcase,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        type: "experience",
    },
];

export function Timeline() {
    const educationEvents = events.filter(e => e.type === "education");
    const experienceEvents = events.filter(e => e.type === "experience");

    return (
        <section id="timeline" className="relative py-12 lg:py-16 bg-background border-t border-white/5">
            <Container>
                {/* Header */}
                <div className="flex flex-col mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
                        Experience
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-primary" /> Education
                        </h3>
                        <div className="flex flex-col gap-4">
                            {educationEvents.map((event, i) => (
                                <TimelineCard key={i} event={event} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-primary" /> Experience & Achievements
                        </h3>
                        <div className="flex flex-col gap-4">
                            {experienceEvents.map((event, i) => (
                                <TimelineCard key={i} event={event} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function TimelineCard({ event, index }: { event: TimelineEvent, index: number }) {
    const Icon = event.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`flex flex-col p-5 rounded-2xl border ${event.border} bg-[#0b1220] hover:bg-[#10192b] transition-colors`}
        >
            <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${event.color}`}>
                    {event.year}
                </span>
                {event.achievement && (
                    <span className={`px-2 py-0.5 rounded border border-white/10 text-[9px] uppercase font-bold bg-white/5 ${event.color}`}>
                        {event.achievement}
                    </span>
                )}
            </div>
            
            <h4 className="font-bold text-white text-sm md:text-base mb-1">
                {event.title}
            </h4>
            <p className="text-zinc-400 text-xs font-semibold mb-3">
                {event.subtitle}
            </p>
            <p className="text-zinc-500 text-xs leading-relaxed">
                {event.description}
            </p>
        </motion.div>
    );
}
