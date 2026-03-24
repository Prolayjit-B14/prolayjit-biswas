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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group flex flex-col justify-between bg-[#0b1220]/40 backdrop-blur-3xl overflow-hidden h-full border border-white/5 transition-all duration-500 rounded-[2rem]",
                borderClass,
                shadowClass,
                "hover:-translate-y-2"
            )}
        >
            {/* Image Banner */}
            {project.imageUrl && (
                <div className="relative w-full h-44 overflow-hidden bg-[#020617]">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none" />

                    {/* Category Identifier */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#020617]/80 backdrop-blur-xl border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-white">
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                        {project.category}
                    </div>
                </div>
            )}

            <div className="flex flex-col flex-1 p-8">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-white transition-colors leading-[1.1]">
                        {project.title}
                    </h3>
                </div>

                <div className="flex items-center gap-4 mb-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                    <span className="flex items-center gap-2" style={{ color: accentColor }}>
                        <Calendar className="h-3 w-3" />
                        {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    {project.role && <span className="line-clamp-1 border-l border-white/10 pl-4">{project.role}</span>}
                </div>

                <p className="text-xs text-zinc-400 mb-8 line-clamp-3 leading-relaxed font-medium">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-lg bg-white/[0.03] px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-zinc-500 border border-white/5 group-hover:text-zinc-300 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:opacity-70 transition-all group/link"
                    >
                        Detailed Analysis
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" style={{ color: accentColor }} />
                    </Link>

                    <div className="flex items-center gap-4">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Source Code">
                                <Github className="h-4 h-4" />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Live Demo">
                                <ExternalLink className="h-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
