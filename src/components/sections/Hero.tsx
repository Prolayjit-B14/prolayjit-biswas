"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Mail, Download, Github, Linkedin, ExternalLink, Code2, CircuitBoard, Trophy, Blocks } from "lucide-react";
import Link from "next/link";

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
        <section className="relative min-h-screen flex items-center overflow-hidden py-20 bg-[#020617]">
            {/* Engineering Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            
            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    
                    {/* Trust Signals Badge Row */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap justify-center gap-3 mb-10"
                    >
                        {trustIndicators.map((trust, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors shadow-xl">
                                <trust.icon className={`w-3 h-3 ${trust.color}`} />
                                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-tighter">{trust.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Main Identity Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full bg-[#0b1220]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden group"
                    >
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
                        
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]"
                            >
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Full-Stack Hardware Engineer
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.9]"
                            >
                                Prolayjit <span className="text-zinc-500">Biswas</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap justify-center gap-4 mb-8"
                            >
                                <span className="text-zinc-400 font-mono text-sm tracking-tight border-r border-white/10 pr-4">VLSI Design</span>
                                <span className="text-zinc-400 font-mono text-sm tracking-tight border-r border-white/10 pr-4">Embedded IoT</span>
                                <span className="text-zinc-400 font-mono text-sm tracking-tight">Cloud Systems</span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
                            >
                                Synthesizing <span className="text-white font-medium">high-performance silicon logic</span> and engineering <span className="text-white font-medium">full-stack telemetry architectures</span>. From RTL synthesis to cloud-connected IoT dashboards.
                            </motion.p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                                <Link
                                    href="#projects"
                                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-sm font-black text-white transition-all hover:bg-blue-500 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)] w-full sm:w-auto"
                                >
                                    Explore Portfolio
                                </Link>

                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-bold text-white transition-all w-full sm:w-auto"
                                >
                                    <Download className="h-4 w-4" />
                                    Resume.pdf
                                </a>
                            </div>

                            {/* Integrated Social Links */}
                            <div className="flex items-center gap-5 p-2 px-6 rounded-full bg-white/5 border border-white/10">
                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                        className="text-zinc-500 transition-all hover:text-white hover:scale-110"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Meta Info Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-12 mt-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    >
                        <div className="flex items-center gap-2">
                             <CircuitBoard className="w-5 h-5" />
                             <span className="text-xs font-mono uppercase tracking-widest">Altium/KiCAD</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <Cpu className="w-5 h-5" />
                             <span className="text-xs font-mono uppercase tracking-widest">Verilog RTL</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <Code2 className="w-5 h-5" />
                             <span className="text-xs font-mono uppercase tracking-widest">Firmware/RTOS</span>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
