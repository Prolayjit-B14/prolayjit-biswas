"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Github, Star, GitFork, ExternalLink, Code2, Heart, Share2 } from "lucide-react";

const FEATURED_REPOS = [
    {
        name: "AgriSense IoT",
        desc: "Full-stack IoT solution for soil monitoring using ESP32, MQTT, and Next.js.",
        stars: 12,
        forks: 4,
        lang: "TypeScript",
        color: "bg-blue-500",
        link: "https://github.com/Prolayjit-B14"
    },
    {
        name: "VLSI-ALU-Verilog",
        desc: "High-performance 32-bit arithmetic logic unit designed strictly in Verilog RTL.",
        stars: 8,
        forks: 2,
        lang: "Verilog",
        color: "bg-amber-500",
        link: "https://github.com/Prolayjit-B14"
    },
    {
        name: "Technical Portfolio",
        desc: "Custom Next.js 14 engineering portfolio with dynamic case-study generation.",
        stars: 15,
        forks: 1,
        lang: "TSX / Tailwind",
        color: "bg-emerald-500",
        link: "https://github.com/Prolayjit-B14"
    }
];

export default function OpenSourcePage() {
    return (
        <main className="min-h-screen bg-[#020617] pt-24 pb-16">
            <Container>
                {/* Hero Section */}
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Heart className="w-3 h-3 fill-emerald-500" /> Community Contribution
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Open Source
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Sharing production-grade code and hardware designs to help the engineering community build faster and more reliably.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {FEATURED_REPOS.map((repo, idx) => (
                        <motion.div
                            key={repo.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0b1220] border border-white/10 rounded-[2.5rem] p-8 hover:border-emerald-500/30 transition-all flex flex-col group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-emerald-500/10 group-hover:scale-110 transition-all">
                                    <Github className="w-6 h-6 text-white group-hover:text-emerald-400" />
                                </div>
                                <div className="flex gap-4 text-zinc-500 text-xs font-bold">
                                    <span className="flex items-center gap-1.5"><Star className="w-3 h-3" /> {repo.stars}</span>
                                    <span className="flex items-center gap-1.5"><GitFork className="w-3 h-3" /> {repo.forks}</span>
                                </div>
                            </div>
                            
                            <h2 className="text-xl font-bold text-white mb-3 tracking-tight">{repo.name}</h2>
                            <p className="text-sm text-zinc-400 leading-relaxed mb-8 flex-1">{repo.desc}</p>
                            
                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${repo.color}`} />
                                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{repo.lang}</span>
                                </div>
                                <a 
                                    href={repo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-white transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Git Philosophy / Contribution Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#0b1220] border border-white/10 rounded-[3rem] p-10 lg:p-16">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-6 block">Contribution Philosophy</span>
                        <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Code should be clean, modular, and <span className="text-glow text-emerald-400">highly documented.</span></h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                            I believe the best way to validate an engineering solution is to make it public. My repositories focus on clear folder structures, comprehensive READMEs, and stable build configurations.
                        </p>
                        <div className="flex flex-col gap-4">
                            <Benefit icon={Code2} text="Modular architecture for easy integration." />
                            <Benefit icon={Share2} text="Standardized Git-flow for collaboration." />
                        </div>
                    </div>
                    <div className="bg-black/40 rounded-3xl p-8 border border-white/5 flex flex-col items-center justify-center text-center gap-6 group hover:border-emerald-500/20 transition-all">
                        <Github className="w-16 h-16 text-emerald-400/20 group-hover:scale-110 group-hover:text-emerald-400/40 transition-all duration-500" />
                        <div>
                            <p className="text-xl font-bold text-white mb-2">32+ Total Repositories</p>
                            <p className="text-xs text-zinc-500 font-medium">Spanning IoT, VLSI, and Web Systems</p>
                        </div>
                        <a 
                            href="https://github.com/Prolayjit-B14" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black text-white hover:bg-white/10 transition-all tracking-widest uppercase"
                        >
                            Visit Full Profile
                        </a>
                    </div>
                </div>
            </Container>
        </main>
    );
}

function Benefit({ icon: Icon, text }: any) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-zinc-300">{text}</span>
        </div>
    );
}
