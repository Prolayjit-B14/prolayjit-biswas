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
    { id: "Hardware", label: "SILICON & SYSTEMS", icon: Box, accent: "#ff0055", sector: "SEC_01" },
    { id: "Software", label: "CLOUD & SOFTWARE", icon: Globe, accent: "#00f2ff", sector: "SEC_02" },
    { id: "IoT",      label: "EDGE INTELLIGENCE", icon: Zap,   accent: "#00f2ff", sector: "SEC_03" },
    { id: "AI",       label: "NEURAL NETWORKS",  icon: Binary, accent: "#ff0055", sector: "SEC_04" },
    { id: "VLSI",     label: "CHIP SYNTHESIS",   icon: Layers, accent: "#ff0055", sector: "SEC_05" },
];

export function UnifiedProjects() {
    const [activeTab, setActiveTab] = useState("Hardware");

    const filteredProjects = projects
        .filter(p => p.category === activeTab)
        .slice(0, 3);

    return (
        <section id="projects" className="h-screen min-h-[700px] flex items-center bg-[#02050a] overflow-hidden py-6">
            <Container className="h-full flex flex-col">
                <div className="flex flex-col items-center mb-6 shrink-0 mt-[-2vh]">
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[8px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4"
                    >
                        Project_Matrix.v2
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase text-center leading-none"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0055] via-[#00f2ff] to-[#ff0055]">Showcase</span>
                    </motion.h2>

                    {/* Industrial Tab Control - Compressed */}
                    <div className="w-full max-w-4xl overflow-x-auto no-scrollbar">
                        <div className="flex items-center justify-center min-w-max gap-1.5 p-1.5 bg-[#0b1220]/60 border border-white/5 rounded-2xl backdrop-blur-3xl">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={cn(
                                        "group flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap",
                                        activeTab === cat.id ? "text-white" : "text-zinc-600 hover:text-zinc-400"
                                    )}
                                >
                                    {activeTab === cat.id && (
                                        <motion.div
                                            layoutId="projectTabActive"
                                            className="absolute inset-0 rounded-xl border border-white/5 bg-white/[0.02]"
                                            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                                        />
                                    )}
                                    <div className="relative z-10 flex items-center gap-2">
                                        <div 
                                            className="w-1 h-1 rounded-full transition-all"
                                            style={{ backgroundColor: activeTab === cat.id ? cat.accent : '#27272a' }}
                                        />
                                        <span className="relative z-10">{cat.label}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 min-h-0 flex flex-col items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="w-full h-full max-w-7xl"
                        >
                            {filteredProjects.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 h-full max-h-[45vh]">
                                    {filteredProjects.map((project, i) => (
                                        <motion.div 
                                            key={project.slug} 
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="h-full"
                                        >
                                            <ProjectCard project={project} index={i} />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-full min-h-[250px] flex flex-col items-center justify-center p-8 text-center rounded-[2.5rem] border border-dashed border-white/5 bg-white/[0.01]">
                                    <Microscope className="w-12 h-12 text-zinc-800 mb-4" />
                                    <p className="text-[9px] font-black uppercase text-zinc-700 tracking-[0.3em]">ANALYSIS_IDLE</p>
                                    <h4 className="text-lg font-black text-zinc-600 uppercase tracking-tighter">DATA UNAVAILABLE</h4>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-6 shrink-0 flex justify-center pb-4">
                    <Link
                        href="/projects"
                        className="group relative px-6 py-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5 transition-all hover:border-white/10"
                    >
                        <span className="relative text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300 transition-colors">Digital Archive Access</span>
                        <Zap className="relative w-3 h-3 text-[#ff0055] group-hover:scale-110 transition-transform" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
