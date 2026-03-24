"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Mail, Download, Github, Linkedin, ExternalLink, Code2, CircuitBoard, Trophy, Blocks } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialLinks = [
    { href: "https://github.com/Prolayjit-B14", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:prolayjitbiswas2004@gmail.com", icon: Mail, label: "Email" },
    { href: "https://x.com/pro_lay04", icon: ExternalLink, label: "Twitter/X" },
];

const trustIndicators = [
    { label: "SIH National Finalist", icon: Trophy, color: "text-[#ff0055]" },
    { label: "MAKATHON '25 Winner", icon: Trophy, color: "text-[#00f2ff]" },
    { label: "Hardware-to-Cloud Expert", icon: Blocks, color: "text-zinc-400" },
];

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#020617]">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#020617]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,242,255,0.05)_0,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,85,0.05)_0,transparent_50%)]" />
                <motion.div 
                    animate={{ opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" 
                />
            </div>

            <Container className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    
                    {/* Trust Signals Badge Row */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap justify-center gap-2 mb-6"
                    >
                        {trustIndicators.map((trust, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                                {(() => {
                                    const Icon = trust.icon;
                                    return <Icon className={`w-3 h-3 ${trust.color}`} />;
                                })()}
                                <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{trust.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Main Identity Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full bg-[#0b1220]/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden group"
                    >
                        {/* Decorative Corner Glow */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[60px] group-hover:bg-blue-500/30 transition-all" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-4 flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]"
                            >
                                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                SYSTEM ARCHITECT & HARDWARE ENGINEER
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.85]"
                            >
                                Prolayjit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#00f2ff] to-[#ff0055]">Biswas</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap justify-center gap-3 mb-6"
                            >
                                {[
                                    { tag: 'VLSI Synthesis', color: 'text-[#ff0055]' },
                                    { tag: 'Embedded IoT', color: 'text-[#00f2ff]' },
                                    { tag: 'Cloud Systems', color: 'text-[#00f2ff]' }
                                ].map((item, idx) => (
                                    <span key={item.tag} className={cn(
                                        "flex items-center font-mono text-[9px] uppercase tracking-[0.3em] last:border-0 border-r border-white/10 pr-4 last:pr-0",
                                        item.color
                                    )}>
                                        {item.tag}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed mb-10 font-medium"
                            >
                                Synthesizing <span className="text-[#ff0055] font-black italic">high-performance silicon</span> & <span className="text-[#00f2ff] font-black italic">distributed cloud telemetry</span>. Engineering the next generation of industrial edge intelligence.
                            </motion.p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                                <Link
                                    href="#projects"
                                    className="relative group/btn flex items-center justify-center gap-2 rounded-xl bg-white text-[#020617] px-10 py-4 text-xs font-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto uppercase tracking-widest overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Exploration Lab
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff] to-[#ff0055] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                </Link>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 px-8 py-3.5 text-xs font-black text-white transition-all w-full sm:w-auto uppercase tracking-widest"
                                >
                                    <Download className="h-4 w-4 text-emerald-400" />
                                    Hardware specs
                                </a>
                            </div>

                            {/* Social Grid - Colorful Hovers */}
                            <div className="flex items-center gap-2 p-1.5 px-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                                {[
                                    { ...socialLinks[0], color: "hover:text-white hover:bg-zinc-800" }, // GitHub
                                    { ...socialLinks[1], color: "hover:text-[#0077b5] hover:bg-[#0077b5]/10" }, // LinkedIn
                                    { ...socialLinks[2], color: "hover:text-emerald-400 hover:bg-emerald-500/10" }, // Email
                                    { ...socialLinks[3], color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10" }, // Twitter
                                ].map(({ href, icon: Icon, label, color }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className={cn(
                                            "text-zinc-500 transition-all p-2.5 rounded-xl",
                                            color
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Engineering Meta Info Overlay (Subtle) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-8 mt-8 opacity-20 hover:opacity-100 transition-opacity duration-700 md:flex hidden"
                    >
                        {[
                            { icon: CircuitBoard, label: "Altium/KiCAD" },
                            { icon: Cpu, label: "Verilog RTL" },
                            { icon: Code2, label: "RTOS/C++" }
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2">
                                 <Icon className="w-4 h-4" />
                                 <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-medium">{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
