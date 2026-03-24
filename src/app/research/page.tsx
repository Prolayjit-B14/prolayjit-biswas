"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { BookOpen, Beaker, Zap, Microchip, Binary } from "lucide-react";

const RESEARCH_PAPERS = [
    {
        title: "Optimized ALU Architectures for Low-Power VLSI",
        abstract: "Investigation into gate-level power reduction techniques for 32-bit arithmetic units using specialized carry-lookahead logic in Verilog.",
        method: "Behavioral modeling → Synthesis → Power analysis using Xilinx Power Estimator (XPE).",
        findings: "Achieved 15% reduction in dynamic power consumption while maintaining sub-10ns propagation delay.",
        category: "VLSI Architecture",
        icon: Microchip
    },
    {
        title: "Edge AI Implementation on ESP32 Microcontrollers",
        abstract: "Analyzing the feasibility of running quantized TensorFlow Lite models for real-time agricultural anomaly detection.",
        method: "Model training in Python → TOCO Quantization → C++ Inference on ESP32-S3.",
        findings: "Successful classification of 5 soil types with 92% accuracy and 120ms inference latency.",
        category: "Edge Intelligence",
        icon: Binary
    }
];

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-[#020617] pt-24 pb-16">
            <Container>
                {/* Hero Section */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <BookOpen className="w-3 h-3" /> Technical Exploration
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Research & Development
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Pushing the boundaries of hardware systems through rigorous experimentation, logic synthesis, and edge intelligence.
                    </motion.p>
                </div>

                <div className="space-y-12">
                    {RESEARCH_PAPERS.map((paper, idx) => (
                        <motion.section
                            key={paper.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#0b1220] border border-white/10 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden group hover:border-violet-500/30 transition-all"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <paper.icon className="w-32 h-32 text-violet-400" />
                            </div>

                            <div className="relative z-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-400 mb-6 block">
                                    {paper.category}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-2xl leading-tight">
                                    {paper.title}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-violet-400" /> Abstract
                                        </h4>
                                        <p className="text-sm text-zinc-300 leading-relaxed italic">{paper.abstract}</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-violet-400" /> Methodology
                                        </h4>
                                        <p className="text-sm text-zinc-300 leading-relaxed font-medium">{paper.method}</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-violet-400" /> Key Findings
                                        </h4>
                                        <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                                            <p className="text-sm text-violet-300 font-bold leading-relaxed">{paper.findings}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    ))}

                    {/* Experimental Log Snippet */}
                    <div className="mt-12 p-8 rounded-3xl bg-black/40 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                <Beaker className="w-6 h-6 text-zinc-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">R&D Pipeline</h3>
                                <p className="text-xs text-zinc-500">Continuous hardware simulation and model training...</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {["MATLAB", "SPICE", "Python", "Verilog"].map(tool => (
                                <span key={tool} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
