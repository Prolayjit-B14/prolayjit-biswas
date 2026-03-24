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
    { label: "SIH Finalist", icon: Trophy, color: "text-rose-400" },
    { label: "MAKATHON Winner", icon: Trophy, color: "text-amber-400" },
    { label: "6+ Projects", icon: Blocks, color: "text-emerald-400" },
];

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#020617]">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px]" 
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-emerald-500/15 rounded-full blur-[120px]" 
                />
                <motion.div 
                    animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[100px]" 
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
                                className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-4 leading-[0.95]"
                            >
                                Prolayjit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Biswas</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap justify-center gap-3 mb-6"
                            >
                                {[
                                    { tag: 'VLSI Design', color: 'text-rose-400' },
                                    { tag: 'Embedded IoT', color: 'text-blue-400' },
                                    { tag: 'Cloud Systems', color: 'text-emerald-400' }
                                ].map((item, idx) => (
                                    <span key={item.tag} className={cn(
                                        "flex items-center font-mono text-[10px] uppercase tracking-widest last:border-0 border-r border-white/10 pr-3 last:pr-0",
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
                                className="text-zinc-400 text-sm md:text-lg max-w-xl leading-relaxed mb-8 font-medium"
                            >
                                Synthesizing <span className="text-rose-400 font-black italic">silicon logic</span> & <span className="text-blue-400 font-black italic">cloud telemetry</span>. From FPGA prototyping to real-time industrial dashboards.
                            </motion.p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                                <Link
                                    href="#projects"
                                    className="relative group/btn flex items-center justify-center gap-2 rounded-xl bg-white text-[#020617] px-8 py-3.5 text-xs font-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto uppercase tracking-widest overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2 text-primary-foreground">
                                        Explore Lab
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
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
