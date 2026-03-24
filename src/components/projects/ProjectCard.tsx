"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, ExternalLink, Calendar, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex flex-col justify-between glass-card overflow-hidden h-full border border-white/5 hover:border-primary/50 transition-all hover:shadow-[0_8px_32px_rgba(74,222,128,0.1)] hover:-translate-y-1"
        >
            {/* Image Banner */}
            {project.imageUrl && (
                <div className="relative w-full h-48 overflow-hidden bg-[#0a0f1c]">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#f8fafc]">
                        {project.category === "Hardware" ? <Cpu className="h-3 w-3 text-primary" /> : <Code className="h-3 w-3 text-primary" />}
                        {project.category}
                    </div>
                </div>
            )}

            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-[#f8fafc] group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                    </h3>
                </div>

                <div className="flex items-center gap-4 mb-4 text-xs font-medium text-[#6b7280]">
                    <span className="flex items-center gap-1.5 text-primary">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    {project.role && <span className="line-clamp-1 border-l border-white/10 pl-4">{project.role}</span>}
                </div>

                <p className="text-sm text-[#94a3b8] mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-[#1e293b] px-2 py-1 text-xs font-medium text-[#cbd5e1] border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="inline-flex items-center rounded-md bg-[#1e293b] px-2 py-1 text-xs font-medium text-[#6b7280]">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-white/5">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#f8fafc] hover:text-primary transition-colors"
                    >
                        View Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-3">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[#6b7280] hover:text-[#f8fafc] transition-colors" aria-label="Source Code">
                                <Github className="h-4 w-4" />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-[#6b7280] hover:text-[#f8fafc] transition-colors" aria-label="Live Demo">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
