"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FileText, ArrowRight, CheckCircle2, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FEATURED_STUDIES = [
    {
        title: "AgriSense IoT",
        slug: "smart-agriculture",
        tag: "IoT + Cloud",
        problem: "Farmers lack real-time soil data, leading to inefficient irrigation.",
        solution: "Built an ESP32 sensor node with MQTT cloud telemetry and real-time dashboard.",
        metrics: ["98% Connectivity Uptime", "30% Water Savings", "Sub-5s Latency"],
        icon: Globe
    },
    {
        title: "Women Safety Device",
        slug: "she-shield",
        tag: "Embedded + GPS",
        problem: "Need for a discrete, low-latency emergency alert system.",
        solution: "Wearable ESP32 unit with GPS, BLE, and cellular fallback via secondary bridge.",
        metrics: ["SIH National Finalist", "10s Response Time", "Wearable Form Factor"],
        icon: Shield
    }
];

function Shield(props: any) {
  return <CheckCircle2 {...props} />
}

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[#020617] pt-24 pb-16">
            <Container>
                {/* Hero Section */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <FileText className="w-3 h-3" /> Technical Narratives
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Engineering Case Studies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        A deep dive into complexity, architecture, and real-world outcomes for flagship systems.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {FEATURED_STUDIES.map((study, idx) => (
                        <motion.div
                            key={study.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0b1220] border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col group hover:border-emerald-500/30 transition-all"
                        >
                            {/* Visual Header */}
                            <div className="h-64 bg-black/40 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <study.icon className="w-16 h-16 text-emerald-400/50 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="p-10 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                        {study.tag}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-4">{study.title}</h2>
                                
                                <div className="space-y-6 mb-10 flex-1 text-sm leading-relaxed">
                                    <div>
                                        <h4 className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">The Problem</h4>
                                        <p className="text-zinc-300">{study.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-2">The Solution</h4>
                                        <p className="text-zinc-300">{study.solution}</p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-2">
                                        {study.metrics.map(m => (
                                            <div key={m} className="flex items-center gap-2 text-emerald-400/80 font-bold">
                                                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                                                {m}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link 
                                    href={`/projects/${study.slug}`}
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-[#020617] font-black rounded-2xl hover:bg-emerald-400 transition-all group/btn"
                                >
                                    View Full Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </main>
    );
}
