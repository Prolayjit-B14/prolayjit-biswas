"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ParticleField } from "@/components/animations/ParticleField";
import { Waveform } from "@/components/animations/Waveform";
import { ArrowRight, Download, Github, Linkedin, ExternalLink, Cpu, Star, FolderGit2, TerminalSquare, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";

const ROLES = [
    "Electronics Engineer",
    "Embedded Systems Dev",
    "IoT Builder",
    "PCB Designer",
    "Full-Stack Developer",
];

function TypeWriter({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[index % words.length];

        if (!deleting && subIndex === current.length) {
            const timeout = setTimeout(() => setDeleting(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }

        const timeout = setTimeout(
            () => setSubIndex((s) => s + (deleting ? -1 : 1)),
            deleting ? 50 : 80
        );
        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, words]);

    return (
        <span className="text-primary font-medium">
            {words[index % words.length].substring(0, subIndex)}
            <span className="animate-pulse opacity-70">|</span>
        </span>
    );
}

const socialLinks = [
    { href: "https://github.com/Prolayjit-B14", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/pro_lay04", icon: ExternalLink, label: "Twitter/X" },
];

export function Hero({ stats }: { stats?: { stars: number, repos: number } }) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20 bg-[#030712]">
            <ParticleField />
            
            {/* Ambient glows */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <Container className="relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Column: Typography & CTAs */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary/90 shadow-[0_0_20px_rgba(74,222,128,0.15)] uppercase tracking-wider"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                            <Cpu className="h-3.5 w-3.5" />
                            System Online — Ready to Build
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="flex flex-col gap-2"
                        >
                            <span className="font-mono text-primary text-sm font-medium tracking-wide">
                                $ ./hello --world
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-glow leading-[1.1]">
                                Prolayjit <br className="hidden lg:block"/> Biswas
                            </h1>
                        </motion.div>

                        {/* Typewriter tag */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="text-2xl md:text-3xl font-light tracking-wide text-white"
                        >
                            <TypeWriter words={ROLES} />
                        </motion.h2>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="max-w-xl text-[#94a3b8] leading-relaxed text-lg"
                        >
                            Bridging the gap between low-level hardware design and high-level software architectures. Currently engineering at the edge of embedded logic and full-stack web.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.65 }}
                            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
                        >
                            <Link
                                href="#projects"
                                className="group flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]"
                            >
                                <Sparkles className="h-4 w-4" />
                                View Projects
                            </Link>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
                            >
                                <Download className="h-4 w-4 text-[#94a3b8]" />
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.85 }}
                            className="flex items-center gap-5 mt-4"
                        >
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="p-2.5 rounded-lg border border-white/5 bg-white/5 text-[#94a3b8] transition-all hover:text-primary hover:border-primary/30 hover:bg-primary/10"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                    
                    {/* Right Column: Visual Terminal / Stats Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0"
                    >
                        {/* Apple-style floating terminal card */}
                        <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl backdrop-blur-xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 opacity-50 pointer-events-none" />
                            
                            {/* Mac window header */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/40">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="ml-2 text-[10px] font-mono text-[#6b7280] uppercase tracking-widest">
                                    ~/portfolio/telemetry
                                </span>
                            </div>
                            
                            <div className="p-6 md:p-8 space-y-8 font-mono text-sm relative z-10">
                                
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-emerald-400">
                                        <TerminalSquare className="w-4 h-4" />
                                        <span className="font-semibold">git status --short</span>
                                    </div>
                                    <p className="text-[#94a3b8] pl-6 text-xs md:text-sm">
                                        <span className="text-emerald-400 mr-2">M</span>
                                        knowledge_graph.cpp<br/>
                                        <span className="text-emerald-400 mr-2">A</span>
                                        pcb_schematics/main.kicad_sch<br/>
                                        <span className="text-emerald-400 mr-2">M</span>
                                        nextjs_dashboard/page.tsx
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <Code2 className="w-4 h-4" />
                                        <span className="font-semibold">query github_telemetry</span>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4 pl-6">
                                        <div className="bg-black/40 border border-white/5 rounded-xl p-4 transition-colors group-hover:border-primary/20">
                                            <div className="flex shadow-sm items-center gap-2 text-[#94a3b8] mb-2">
                                                <Star className="w-4 h-4" /> Stars
                                            </div>
                                            <div className="text-2xl font-bold text-white">
                                                {stats?.stars ?? "-"}
                                            </div>
                                        </div>
                                        <div className="bg-black/40 border border-white/5 rounded-xl p-4 transition-colors group-hover:border-blue-400/20">
                                            <div className="flex shadow-sm items-center gap-2 text-[#94a3b8] mb-2">
                                                <FolderGit2 className="w-4 h-4" /> Repos
                                            </div>
                                            <div className="text-2xl font-bold text-white">
                                                {stats?.repos ?? "-"}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-xs text-[#6b7280]">
                                    <span className="animate-pulse bg-emerald-500 w-2 h-2 rounded-full" />
                                    Connection secured. Pulling live data...
                                </div>
                            </div>
                        </div>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 top-10 border border-white/10 bg-white/5 backdrop-blur-md rounded-lg p-3 text-xs font-mono text-emerald-400 shadow-xl"
                        >
                            ✓ Compiled
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-6 bottom-12 border border-white/10 bg-black/60 backdrop-blur-md rounded-lg p-3 text-xs font-mono text-blue-400 shadow-xl"
                        >
                            sys.check()
                        </motion.div>
                    </motion.div>
                </div>
            </Container>

            <Waveform />
            
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none" />
        </section>
    );
}
