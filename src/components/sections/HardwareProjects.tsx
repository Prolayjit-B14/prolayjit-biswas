"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ExternalLink, Github, FileText } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

export function HardwareProjects() {
    // Select Hardware / VLSI projects
    const hardwareSlugs = ["custom-esp32-dev-board", "fpga-32bit-alu", "she-shield"];
    const hardwareWork = projects.filter(p => hardwareSlugs.includes(p.slug) || p.category === "Hardware" || p.category === "VLSI");
    
    const displayProjects = hardwareWork.slice(0, 3);

    return (
        <section className="relative py-12 lg:py-16 bg-[#02050a] border-t border-white/5" id="hardware">
            <Container>
                <div className="flex flex-col mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                        Hardware & VLSI
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
                        Bare-metal engineering, custom PCB design, and FPGA logic synthesis.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col bg-[#0b1220] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors"
                        >
                            {/* Compact Image Section */}
                            <div className="relative w-full aspect-video bg-black/50 border-b border-white/10">
                                {project.imageUrl ? (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-90"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-emerald-400 font-mono text-xs bg-black/80 bg-[url('/circuit-pattern.svg')] bgOverlay">
                                        [ {project.category.toUpperCase()} ]
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-1 p-5 z-10">
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {project.title}
                                </h3>
                                
                                <p className="text-zinc-400 text-[13px] leading-relaxed mb-4 line-clamp-3 flex-1">
                                    {project.problem && <span className="block mb-1"><strong className="text-zinc-300">Problem:</strong> {project.problem}</span>}
                                    {project.solution && <span className="block"><strong className="text-zinc-300">Solution:</strong> {project.solution}</span>}
                                </p>
                                
                                {/* Micro Tech Stack */}
                                {project.technologies && (
                                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                                        {project.technologies.slice(0, 4).map(tech => (
                                            <span key={tech} className="px-2 py-0.5 text-[10px] font-semibold rounded bg-white/5 border border-white/10 text-zinc-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Compact Action Buttons */}
                                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                    {project.demoUrl ? (
                                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-500 text-[#020617] font-bold rounded hover:bg-emerald-400 transition-colors text-xs">
                                            <ExternalLink className="w-3 h-3" /> Live
                                        </a>
                                    ) : (
                                        <Link href={`/projects/${project.slug}`} className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-emerald-500 text-[#020617] font-bold rounded hover:bg-emerald-400 transition-colors text-xs">
                                            <FileText className="w-3 h-3" /> Case Study
                                        </Link>
                                    )}
                                    
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#1e293b] border border-white/10 text-white font-bold rounded hover:bg-white/10 transition-colors text-xs">
                                            <Github className="w-3 h-3" /> Source
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
