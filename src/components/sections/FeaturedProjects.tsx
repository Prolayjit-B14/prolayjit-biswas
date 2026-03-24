"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ExternalLink, Github, Trophy, FileText } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

export function FeaturedProjects() {
    // Top tier IoT/VLSI showcases according to the new hierarchy requirements
    const featuredSlugs = ["smart-agriculture", "fpga-32bit-alu"];
    const featuredWork = projects.filter(p => featuredSlugs.includes(p.slug));
    
    const displayProjects = featuredWork.length === 2 ? featuredWork : projects.slice(0, 2);

    return (
        <section className="relative py-20 bg-background border-t border-white/5" id="projects">
            <Container>
                <div className="flex flex-col mb-16 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit uppercase mb-4 tracking-wider mx-auto md:mx-0">
                        <Trophy className="h-3 w-3" />
                        Featured Work
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                        Engineered Systems
                    </h2>
                </div>

                <div className="flex flex-col gap-12">
                    {displayProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group relative flex flex-col lg:flex-row gap-0 lg:gap-8 bg-[#0b1220] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors shadow-2xl"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                            {/* Image Section */}
                            <div className="relative w-full lg:w-[45%] aspect-video lg:aspect-auto bg-black/50 z-10 border-b lg:border-b-0 lg:border-r border-white/10">
                                {project.imageUrl ? (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-primary font-mono text-sm bg-black/80 bg-[url('/circuit-pattern.svg')] bgOverlay">
                                        [ {project.category.toUpperCase()} SYSTEM SCHEMATICS ]
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col justify-center flex-1 p-6 md:p-8 lg:p-10 z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                
                                <div className="space-y-5 my-6">
                                    {/* Problem */}
                                    {project.problem && (
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-[#8b5cf6] mb-1 block">Problem</span>
                                            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{project.problem}</p>
                                        </div>
                                    )}

                                    {/* Solution */}
                                    {project.solution && (
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">Solution</span>
                                            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{project.solution}</p>
                                        </div>
                                    )}

                                    {/* Tech Stack */}
                                    {project.technologies && (
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Tech Stack</span>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 5).map(tech => (
                                                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded bg-white/5 border border-white/10 text-[#3b82f6]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Architecture */}
                                    {project.architecture && (
                                        <div className="bg-black/30 p-4 rounded-xl border border-white/5 font-mono text-xs md:text-sm text-zinc-400">
                                            <span className="text-[#3b82f6]">&gt;</span> Architecture: <span className="text-primary">{project.architecture}</span>
                                        </div>
                                    )}

                                    {/* Outcome */}
                                    {project.outcome && (
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1 block">Outcome</span>
                                            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-semibold">{project.outcome}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 mt-4">
                                    {project.demoUrl && (
                                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-primary text-[#020617] font-bold rounded-lg hover:bg-primary/90 transition-colors text-xs md:text-sm shadow-[0_0_15px_rgba(0,255,159,0.3)]">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </a>
                                    )}
                                    
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-[#1e293b] border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-xs md:text-sm">
                                            <Github className="w-4 h-4" /> GitHub
                                        </a>
                                    )}

                                    <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#3b82f6]/50 text-[#3b82f6] font-bold rounded-lg hover:bg-[#3b82f6]/10 transition-colors text-xs md:text-sm ml-auto">
                                        <FileText className="w-4 h-4" /> Case Study
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
