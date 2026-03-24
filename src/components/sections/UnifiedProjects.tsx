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
    { id: "Hardware", label: "Hardware", icon: Box, color: "bg-rose-500", text: "text-rose-400" },
    { id: "Software", label: "Software", icon: Globe, color: "bg-blue-500", text: "text-blue-400" },
    { id: "IoT",      label: "IoT",      icon: Zap,   color: "bg-emerald-500", text: "text-emerald-400" },
    { id: "AI",       label: "AI",       icon: Binary, color: "bg-purple-500", text: "text-purple-400" },
    { id: "VLSI",     label: "VLSI",     icon: Layers, color: "bg-amber-500", text: "text-amber-400" },
    { id: "Embedded", label: "Embedded", icon: Cpu,    color: "bg-indigo-500", text: "text-indigo-400" },
    { id: "PCB",      label: "PCB Hub",  icon: CircuitBoard, color: "bg-cyan-500", text: "text-cyan-400" },
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
                    
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase text-center">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-blue-400 to-emerald-400">Project Matrix</span>
                    </h2>

                    {/* Industrial Tab Control */}
                    <div className="w-full max-w-4xl overflow-x-auto no-scrollbar pb-2">
                        <div className="flex items-center justify-center min-w-max gap-1 p-1.5 bg-[#0b1220] border border-white/10 rounded-2xl">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={cn(
                                        "group flex items-center gap-2.5 px-5 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap",
                                        activeTab === cat.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                                    )}
                                >
                                    {activeTab === cat.id && (
                                        <motion.div
                                            layoutId="projectTabGlow"
                                            className={cn("absolute inset-0 rounded-xl shadow-2xl opacity-20", cat.color)}
                                        />
                                    )}
                                    {activeTab === cat.id && (
                                        <motion.div
                                            layoutId="projectTabActive"
                                            className={cn("absolute inset-0 rounded-xl border border-white/20", cat.color)}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <cat.icon className={cn("relative z-10 w-3.5 h-3.5 transition-colors", activeTab === cat.id ? "text-white" : "group-hover:" + cat.text)} />
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
                                        <div className="absolute inset-0 blur-3xl opacity-20 bg-blue-500 animate-pulse" />
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
