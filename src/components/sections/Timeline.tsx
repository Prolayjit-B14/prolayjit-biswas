"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { Briefcase, GraduationCap, Trophy, Terminal, Code2, Cpu } from "lucide-react";

interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    company: string;
    description: string;
    tags: string[];
    icon: any;
    accent: string;
}

const timelineEvents: TimelineEvent[] = [
    {
        id: "01",
        date: "2023 – PRESENT",
        title: "B.Tech Electronics (VLSI)",
        company: "MAKAUT, Kolkata",
        description: "Specializing in hardware-software co-design, silicon synthesis, and distributed IoT architectures.",
        tags: ["VLSI", "FPGA", "Embedded C"],
        icon: GraduationCap,
        accent: "#00f2ff"
    },
    {
        id: "02",
        date: "FEB 2025",
        title: "MAKATHON '25 WINNER",
        company: "Industrial IoT Hackathon",
        description: "Architected a real-time environmental telemetry node with industrial-grade reliability and cloud sync.",
        tags: ["IoT", "MQTT", "Node.js"],
        icon: Trophy,
        accent: "#ff0055"
    },
    {
        id: "03",
        date: "AUG 2024",
        title: "SIH NATIONAL FINALIST",
        company: "Smart India Hackathon",
        description: "Developed a wearable safety system featuring low-latency firmware and GSM-based emergency uplink.",
        tags: ["Firmware", "Hardware", "GSM"],
        icon: Trophy,
        accent: "#00f2ff"
    },
    {
        id: "04",
        date: "MAR 2024",
        title: "SargamAI Engineering",
        company: "AI Platform Infrastructure",
        description: "Optimized large-scale frontend orchestration for AI services, focusing on performance and UX.",
        tags: ["React", "UI/UX", "Vercel"],
        icon: Briefcase,
        accent: "#ff0055"
    }
];

export function Timeline() {
    return (
        <section id="experience" className="relative h-screen min-h-[850px] bg-[#020617] flex items-center overflow-hidden py-14">
            {/* Architectural Grid Watermark */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <Container className="relative z-10 w-full">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Section Header */}
                    <div className="flex flex-col mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-0.5 w-12 bg-[#ff0055] rounded-full" />
                            <span className="text-[10px] font-black text-[#ff0055] uppercase tracking-[0.4em]">Chronological Log</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] to-[#00f2ff]">Journey</span>
                        </h2>
                    </div>

                    {/* Timeline Log Grid */}
                    <div className="relative pl-8 md:pl-12 border-l border-white/5">
                        {timelineEvents.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative mb-14 last:mb-0"
                            >
                                {/* Event Node Marker */}
                                <div 
                                    className="absolute -left-[41px] md:-left-[53px] top-0 w-4 h-4 rounded-sm border-2 border-[#020617] rotate-45 z-20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                    style={{ backgroundColor: event.accent }}
                                >
                                    <div className="absolute inset-0 animate-pulse bg-white/20" />
                                </div>

                                {/* Event Header */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2 group">
                                            <span className="text-[10px] font-mono text-zinc-600 tracking-widest">[IDX_{event.id}]</span>
                                            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-[#00f2ff] transition-colors">{event.title}</h3>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] bg-white/5 px-4 py-1.5 rounded-lg border border-white/10 w-fit">
                                        {event.date}
                                    </span>
                                </div>

                                {/* Event Content Card */}
                                <div className="bg-[#0b1220]/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 md:p-8 hover:border-white/20 transition-all group">
                                    <div className="flex items-start gap-6">
                                        <div 
                                            className="hidden md:flex p-4 rounded-2xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-110 transition-transform"
                                            style={{ color: event.accent }}
                                        >
                                            <event.icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-4">
                                            <p className="text-[11px] font-black uppercase tracking-[0.4em]" style={{ color: event.accent }}>{event.company}</p>
                                            <p className="text-sm text-zinc-400 font-medium leading-relaxed max-w-2xl">
                                                {event.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {event.tags.map(tag => (
                                                    <span key={tag} className="text-[9px] font-black text-zinc-600 uppercase tracking-widest bg-white/5 border border-white/5 px-3 py-1 rounded-md">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector Thread (Desktop) */}
                                <div className="absolute left-[-40px] md:left-[-52px] top-4 bottom-[-56px] w-[1px] bg-gradient-to-b from-white/10 to-transparent hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
