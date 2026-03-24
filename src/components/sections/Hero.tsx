"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Mail, Download, Github, Linkedin, ExternalLink, Code2, CircuitBoard } from "lucide-react";
import Link from "next/link";

const socialLinks = [
    { href: "https://github.com/Prolayjit-B14", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/pro_lay04", icon: ExternalLink, label: "Twitter/X" },
];

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden py-12 lg:py-16 bg-[#020617]">
            {/* Minimal ambient glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

            <Container className="relative z-10 w-full flex flex-col items-center justify-center text-center">
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-8"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Available for Engineering Roles
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl"
                >
                    Prolayjit Biswas
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-300 font-medium tracking-wide mb-6"
                >
                    VLSI | Embedded Systems | Fullstack IoT
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I engineer end-to-end hardware architectures and telemetry systems. From rigorous custom PCB layout and FPGA synthesis to scalable cloud dashboards and real-time edge processing.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-10"
                >
                    <span className="flex items-center gap-1.5"><CircuitBoard className="w-4 h-4 text-emerald-500" /> PCB Design</span>
                    <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-blue-500" /> FPGA/VLSI</span>
                    <span className="flex items-center gap-1.5"><Code2 className="w-4 h-4 text-purple-500" /> Firmware</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <Link
                        href="#projects"
                        className="flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-zinc-200 w-full sm:w-auto"
                    >
                        View Engineering Portfolio
                    </Link>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-sm font-bold text-white transition-all w-full sm:w-auto"
                    >
                        <Download className="h-4 w-4" />
                        Download Resume
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center justify-center gap-6 mt-12 border-t border-white/10 pt-8 w-full max-w-md"
                >
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="text-zinc-500 transition-colors hover:text-white"
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
