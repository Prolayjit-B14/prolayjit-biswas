"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, ExternalLink, Calendar, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    const isHardware = ["Hardware", "IoT", "VLSI", "Embedded", "PCB"].includes(project.category);
    const accentColor = isHardware ? "#ff0055" : "#00f2ff";
    const accentClass = isHardware ? "text-[#ff0055]" : "text-[#00f2ff]";
    const borderClass = isHardware ? "hover:border-[#ff0055]/40" : "hover:border-[#00f2ff]/40";
    const shadowClass = isHardware ? "hover:shadow-[0_0_30px_rgba(255,0,85,0.15)]" : "hover:shadow-[0_0_30px_rgba(0,242,255,0.15)]";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={cn(
                "group flex flex-col justify-between bg-[#0b1220]/50 backdrop-blur-3xl overflow-hidden h-full border border-white/5 transition-all duration-300 rounded-3xl",
                borderClass,
                shadowClass
            )}
        >
            {/* Ultra-Compact Image Banner */}
            {project.imageUrl && (
                <div className="relative w-full h-32 overflow-hidden bg-[#020617]">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-4 flex flex-col gap-0.5 z-20">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#020617]/90 border border-white/5 text-[7px] font-black uppercase tracking-[0.2em] text-white">
                            <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                            {project.category}
                        </div>
                        <span className="text-[6px] font-mono text-white/10 uppercase tracking-[0.2em] ml-0.5">SPEC_{project.slug.slice(0, 4).toUpperCase()}</span>
                    </div>

                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 blur-[1px] animate-scan" />
                    </div>
                </div>
            )}

            <div className="flex flex-col flex-1 p-5 md:p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-black tracking-tight text-white group-hover:text-white transition-colors leading-[1.1] uppercase">
                        {project.title}
                    </h3>
                </div>

                <div className="flex items-center gap-3 mb-3 text-[8px] font-black uppercase tracking-widest text-zinc-600">
                    <span className="flex items-center gap-1.5" style={{ color: accentColor }}>
                        <Calendar className="h-2.5 w-2.5" />
                        {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    {project.role && <span className="line-clamp-1 border-l border-white/10 pl-3 lowercase opacity-50">{project.role}</span>}
                </div>

                <p className="text-[10px] text-zinc-500 mb-4 line-clamp-2 leading-relaxed font-medium">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-white/[0.02] px-2 py-0.5 text-[7px] font-black uppercase tracking-widest text-zinc-600 border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-[8px] font-black uppercase tracking-[0.2em] text-white hover:opacity-70 transition-all group/link"
                    >
                        ANALYSIS
                        <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover/link:translate-x-1" style={{ color: accentColor }} />
                    </Link>

                    <div className="flex items-center gap-3">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors">
                                <Github className="h-3 w-3" />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors">
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
