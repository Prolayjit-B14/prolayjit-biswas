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
    { label: "SIH National Finalist", icon: Trophy, color: "text-[#00ff9f]" },
    { label: "MAKATHON '25 Winner", icon: Trophy, color: "text-[#00f2ff]" },
    { label: "Senior Hardware Engineer", icon: Blocks, color: "text-zinc-500" },
];

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#020617]">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[#020617]" />
                
                {/* Architectural Grid Overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.05]" 
                    style={{ 
                        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }} 
                />

                {/* Cyber-Industrial Accents */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,242,255,0.08)_0,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,85,0.08)_0,transparent_50%)]" />
                
                <motion.div 
                    animate={{ opacity: [0.05, 0.12, 0.05] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" 
                />

                {/* Professional Status Watermarks */}
                <div className="absolute top-20 left-10 text-[8px] font-mono text-zinc-800 uppercase tracking-[0.5em] vertical-text select-none">
                    ENGINEERING_AUTH_ACTIVE // SYSTEM_STABILITY_0.999 // PROTOCOL_V21_READY
                </div>
                <div className="absolute bottom-20 right-10 text-[8px] font-mono text-zinc-800 uppercase tracking-[0.5em] vertical-text select-none">
                    CORE_AVL_ACTIVE // CLOUD_SYNC_NOMINAL // DEPLOYMENT_SECURE
                </div>
            </div>

            <Container className="relative z-10 w-full flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-5xl bg-[#0b1220]/70 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden group"
                >
                    {/* Integrated Trust Indicators (Top-Left) */}
                    <div className="absolute top-6 left-8 flex flex-col gap-2">
                        {trustIndicators.map((trust, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <trust.icon className="w-2.5 h-2.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                                <span className="text-[7px] font-mono text-zinc-700 uppercase tracking-widest">{trust.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Integrated Meta Info (Top-Right) */}
                    <div className="absolute top-6 right-8 flex flex-col items-end gap-2 text-right">
                        {[
                            { icon: CircuitBoard, label: "Altium/KiCAD" },
                            { icon: Cpu, label: "Verilog RTL" },
                            { icon: Code2, label: "RTOS/C++" }
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2">
                                <span className="text-[7px] font-mono text-zinc-700 uppercase tracking-widest">{label}</span>
                                <Icon className="w-2.5 h-2.5 text-zinc-600 group-hover:text-blue-400 transition-colors" />
                            </div>
                        ))}
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.h1 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-display text-5xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.8]"
                        >
                            Prolayjit <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#00f2ff] to-[#ff0055]">Biswas</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap justify-center gap-4 mb-4"
                        >
                            {[
                                { tag: 'Silicon Architect', color: 'text-[#ff0055]' },
                                { tag: 'Embedded Systems', color: 'text-[#00f2ff]' },
                                { tag: 'System Engineering', color: 'text-[#00ff9f]' }
                            ].map((item, idx) => (
                                <span key={item.tag} className={cn(
                                    "flex items-center font-mono text-[10px] uppercase tracking-[0.4em] last:border-0 border-r border-white/10 pr-4 last:pr-0",
                                    item.color
                                )}>
                                    {item.tag}
                                </span>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mb-4 font-medium"
                        >
                            Synthesizing <span className="text-[#ff0055] font-black underline decoration-2 underline-offset-4">high-performance silicon</span> & <span className="text-[#00f2ff] font-black underline decoration-2 underline-offset-4">cloud telemetry</span>. Engineering the next generation of industrial edge intelligence.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <Link
                                href="#projects"
                                className="relative group/btn flex items-center justify-center gap-3 rounded-2xl bg-white text-[#020617] px-12 py-5 text-[10px] font-black transition-all hover:scale-105 active:scale-95 w-full sm:w-auto uppercase tracking-[0.3em] overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Project Portfolio
                                    <ExternalLink className="w-4 h-4" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff] to-[#ff0055] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                            </Link>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 px-10 py-4.5 text-[10px] font-black text-white transition-all w-full sm:w-auto uppercase tracking-[0.3em]"
                            >
                                <Download className="h-4 w-4 text-[#00ff9f]" />
                                Technical CV [PDF]
                            </a>
                        </div>

                        {/* Social Dashboard */}
                        <div className="flex items-center gap-4 p-2 px-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                            {[
                                { ...socialLinks[0], color: "hover:text-white" },
                                { ...socialLinks[1], color: "hover:text-[#0077b5]" },
                                { ...socialLinks[2], color: "hover:text-emerald-400" },
                                { ...socialLinks[3], color: "hover:text-[#1DA1F2]" },
                            ].map(({ href, icon: Icon, label, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className={cn(
                                        "text-zinc-600 transition-all p-2 hover:scale-125",
                                        color
                                    )}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Industrial Bottom Footer Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>
            </Container>
        </section>
    );
}
