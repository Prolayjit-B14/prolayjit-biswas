"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Globe, Cloud, Wrench as Tool, Binary, Code2, Zap, Settings } from "lucide-react";

// Using Wrench for the tool icon
const ToolIcon = Tool;

const TECH_CATEGORIES = [
    {
        title: "Micro-Architectures",
        icon: Cpu,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        skills: ["ESP32-S3 / C3", "STM32 (ARM Cortex)", "8051", "AVR (Arduino)", "Raspberry Pi", "RTOS (FreeRTOS)"]
    },
    {
        title: "Silicon & VLSI",
        icon: Binary,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        skills: ["Verilog HDL", "VHDL", "Digital Logic", "FPGA (Xilinx)", "RTL Simulation", "Vivado / Quartus"]
    },
    {
        title: "Fullstack & Cloud",
        icon: Globe,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
        skills: ["Next.js 14", "React", "Node.js", "Firebase", "MQTT Protocol", "REST / WebSockets"]
    },
    {
        title: "CAD & Engineering",
        icon: ToolIcon,
        color: "text-violet-400",
        bg: "bg-violet-400/10",
        skills: ["KiCAD (PCB)", "EasyEDA", "SolidWorks (Basic)", "MATLAB", "Proteus", "LTSpice"]
    },
    {
        title: "Languages",
        icon: Code2,
        color: "text-rose-400",
        bg: "bg-rose-400/10",
        skills: ["Embedded C / C++", "Python", "JavaScript", "TypeScript", "Assembly", "SQL"]
    }
];

export default function TechMapPage() {
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
                        <Zap className="w-3 h-3" /> Toolset Topological Map
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Technology Map
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        A comprehensive visualization of my cross-disciplinary engineering stack, bridging the gap between hardware and software.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {TECH_CATEGORIES.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0b1220] border border-white/10 rounded-[2.5rem] p-8 hover:border-white/20 transition-all group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-2xl ${cat.bg} flex items-center justify-center border border-white/5`}>
                                    <cat.icon className={`w-6 h-6 ${cat.color}`} />
                                </div>
                                <h2 className="text-xl font-bold text-white tracking-tight">{cat.title}</h2>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span 
                                        key={skill}
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[11px] font-bold text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Meta-Section - Methodology */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="col-span-full mt-12 p-10 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-transparent border border-white/10 rounded-[3rem] text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Interdisciplinary Synergy</h3>
                        <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
                            My expertise isn&apos;t confined to silos. I specialize in the <span className="text-white font-bold italic">transitional zones</span>—where C++ meets silicon, where MQTT meets cloud databases, and where PCB signal integrity meets real-time dashboard responsiveness.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </main>
    );
}
