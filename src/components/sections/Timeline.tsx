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
        description: "Focusing on Silicon Synthesis, Hardware-Software Co-design, and High-Speed Digital Architectures. Engineering low-latency edge computing solutions and FPGA-accelerated neural networks.",
        tags: ["VLSI", "FPGA", "Embedded C", "RTL"],
        icon: GraduationCap,
        accent: "#00f2ff"
    },
    {
        id: "02",
        date: "FEB 2025",
        title: "MAKATHON '25 WINNER",
        company: "Industrial IoT Hackathon",
        description: "Engineered a redundant environmental telemetry platform with dual-channel uplink and cloud-edge synchronization. Optimized for 99.9% reliability in high-interference industrial environments.",
        tags: ["IoT", "MQTT", "Node.js", "RTOS"],
        icon: Trophy,
        accent: "#ff0055"
    },
    {
        id: "03",
        date: "AUG 2024",
        title: "SIH NATIONAL FINALIST",
        company: "Smart India Hackathon",
        description: "Designed a distributed wearable safety mesh leveraging low-power cellular uplinks and advanced sensor fusion. Achieved deterministic latency and optimized battery lifecycle management.",
        tags: ["Firmware", "Sensor Fusion", "GSM"],
        icon: Trophy,
        accent: "#00f2ff"
    },
    {
        id: "04",
        date: "MAR 2024",
        title: "SargamAI Engineering",
        company: "AI Infrastructure Lab",
        description: "Engineered high-performance orchestration layers for large-scale AI service delivery. Optimized frontend telemetry and state replication for sub-100ms interaction latencies.",
        tags: ["React", "Infra", "Vercel", "UX"],
        icon: Briefcase,
        accent: "#ff0055"
    }
];

export function Timeline() {
    return (
        <section id="experience" className="relative h-screen min-h-[700px] bg-[#020617] flex items-center overflow-hidden py-4">
            <Container className="relative z-10 w-full">
                <div className="max-w-5xl mx-auto px-4 mt-[-2vh]">
                    <div className="flex flex-col mb-8 text-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center gap-2 mb-2"
                        >
                            <div className="h-px w-8 bg-zinc-800" />
                            <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.5em]">Professional_Milestones [v2.2]</span>
                            <div className="h-px w-8 bg-zinc-800" />
                        </motion.div>
                        <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#ff0055] to-[#00f2ff]">Journey</span>
                        </h2>
                    </div>

                    <div className="relative pl-6 md:pl-10 border-l border-white/5 space-y-4">
                        {timelineEvents.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="relative group"
                            >
                                <div 
                                    className="absolute -left-[27px] md:-left-[43px] top-1 w-2 h-2 rounded-full z-20 shadow-[0_0_10px_currentColor]"
                                    style={{ color: event.accent, backgroundColor: event.accent }}
                                />

                                <div className="bg-[#0b1220]/50 backdrop-blur-3xl border border-white/5 rounded-2xl p-4 md:p-6 hover:border-white/10 transition-all overflow-hidden relative">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[8px] font-mono text-zinc-700 tracking-widest">[LOG_{event.id}]</span>
                                            <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#00f2ff] transition-colors">{event.title}</h3>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-500">{event.company}</p>
                                            <span className="text-[8px] font-mono text-zinc-700">{event.date}</span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-4xl line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                        {event.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mt-3 opacity-60 group-hover:opacity-100 transition-opacity">
                                        {event.tags.map(tag => (
                                            <span key={tag} className="text-[7px] font-black text-zinc-500 uppercase tracking-widest bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
