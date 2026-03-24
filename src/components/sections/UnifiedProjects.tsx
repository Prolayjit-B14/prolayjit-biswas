"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { projects, Project } from "@/data/projects";
import { Cpu, Globe, Zap, Box, Binary, CircuitBoard, Layers, Wrench, Microscope } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import Link from "next/link";

const CATEGORIES = [
    { id: "Hardware", label: "SILICON & SYSTEMS", icon: Box, accent: "#ff0055" },
    { id: "Software", label: "CLOUD & SOFTWARE", icon: Globe, accent: "#00f2ff" },
    { id: "IoT",      label: "EDGE INTELLIGENCE", icon: Zap,   accent: "#00f2ff" },
    { id: "AI",       label: "NEURAL NETWORKS",  icon: Binary, accent: "#ff0055" },
    { id: "VLSI",     label: "CHIP SYNTHESIS",   icon: Layers, accent: "#ff0055" },
];

export function UnifiedProjects() {
    const [activeTab, setActiveTab] = useState("Hardware");

    const filteredProjects = projects
        .filter(p => p.category === activeTab)
        .slice(0, 3);

    return (
        <section id="projects" className="h-screen min-h-[750px] flex items-center bg-[#02050a] overflow-hidden py-12">
            <Container className="h-full flex flex-col">
                <div className="flex flex-col items-center mb-10 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-6"
                    >
                        Engineering Portfolio
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tighter uppercase text-center leading-none"
                    >
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#00f2ff] to-[#ff0055]">Matrix</span>
                    </motion.h2>

                    {/* Industrial Tab Control */}
                    <div className="w-full max-w-5xl overflow-x-auto no-scrollbar pb-4">
                        <div className="flex items-center justify-center min-w-max gap-2 p-2 bg-[#0b1220]/40 border border-white/5 rounded-[2rem] backdrop-blur-3xl">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={cn(
                                        "group flex items-center gap-3 px-6 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap",
                                        activeTab === cat.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    {activeTab === cat.id && (
                                        <motion.div
                                            layoutId="projectTabActive"
                                            className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.03]"
                                            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                                        />
                                    )}
                                    <div 
                                        className="relative z-10 w-2 h-2 rounded-full transition-all"
                                        style={{ backgroundColor: activeTab === cat.id ? cat.accent : '#27272a' }}
                                    />
                                    <span className="relative z-10">{cat.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 min-h-0 flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full h-full max-w-7xl"
                        >
                            {filteredProjects.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
                                    {filteredProjects.map((project, i) => (
                                        <motion.div 
                                            key={project.slug} 
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="h-full"
                                        >
                                            <ProjectCard project={project} index={i} />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-full min-h-[300px] flex flex-col items-center justify-center p-12 text-center rounded-[3rem] border-2 border-dashed border-white/5 bg-white/[0.02]">
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 blur-3xl opacity-20 bg-[#00f2ff] animate-pulse" />
                                        <Microscope className="relative w-16 h-16 text-zinc-700" />
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.3em] mb-2">Technical Analysis Complete</p>
                                    <h4 className="text-xl font-black text-zinc-500 uppercase tracking-tighter">No active telemetry for {activeTab}</h4>
                                    <p className="text-xs text-zinc-700 mt-4 max-w-xs mx-auto">Selected domain is currently in R&D or awaiting full documentation sync.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* View Full Archive */}
                <div className="mt-10 shrink-0 flex justify-center pb-4">
                    <Link
                        href="/projects"
                        className="group relative px-8 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 transition-all hover:bg-white/10 hover:border-blue-500/50"
                    >
                        <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-white transition-colors">Digital Archive Access</span>
                        <Zap className="relative w-3.5 h-3.5 text-blue-500 group-hover:scale-125 transition-transform" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
