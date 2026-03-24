"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { projects, Project } from "@/data/projects";
import { Cpu, Globe, Zap, Box, Binary, CircuitBoard, Layers, Wrench, Microscope } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import Link from "next/link";

const CATEGORIES = [
    { id: "Hardware", label: "Hardware", icon: Box },
    { id: "Embedded", label: "Embedded", icon: Cpu },
    { id: "PCB", label: "PCB Design", icon: CircuitBoard },
    { id: "VLSI", label: "VLSI", icon: Layers },
    { id: "IoT", label: "IoT", icon: Zap },
    { id: "Software", label: "Software", icon: Globe },
    { id: "AI", label: "AI", icon: Binary },
    { id: "CAD", label: "CAD/3D", icon: Wrench },
];

export function UnifiedProjects() {
    const [activeTab, setActiveTab] = useState("Hardware");

    // Filter logic: Filter by category directly
    const filteredProjects = projects
        .filter(p => p.category === activeTab)
        .slice(0, 3);

    return (
        <section id="projects" className="py-20 bg-[#020617] overflow-hidden">
            <Container>
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                        Engineering <span className="text-zinc-500">Portfolio</span>
                    </h2>

                    {/* Desktop Tabs */}
                    <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-2xl">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all relative
                                    ${activeTab === cat.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"}
                                `}
                            >
                                {activeTab === cat.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-blue-600 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {(() => {
                                        const Icon = cat.icon;
                                        return <Icon className="w-4 h-4" />;
                                    })()}
                                    {cat.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Tabs (Scrollable) */}
                    <div className="flex md:hidden w-full overflow-x-auto pb-4 gap-2 no-scrollbar">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`
                                    flex-none flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap border
                                    ${activeTab === cat.id 
                                        ? "bg-blue-600 border-blue-500 text-white" 
                                        : "bg-white/5 border-white/10 text-zinc-500"}
                                `}
                            >
                                {(() => {
                                    const Icon = cat.icon;
                                    return <Icon className="w-3 h-3" />;
                                })()}
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, i) => (
                                    <ProjectCard key={project.slug} project={project} index={i} />
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center py-20 text-zinc-500 border border-dashed border-white/10 rounded-3xl bg-white/5">
                                    <Cpu className="w-12 h-12 mb-4 opacity-20" />
                                    <p className="font-mono text-sm uppercase tracking-widest">No primary projects in {activeTab}</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/case-studies"
                        className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                    >
                        View Full Case Study Archive
                        <Zap className="w-4 h-4 group-hover:text-blue-500 transition-colors" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
