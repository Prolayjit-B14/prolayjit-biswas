"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Github, Star, GitFork, GitCommit, GitMerge } from "lucide-react";
import { GitHubRepo } from "@/lib/github";

interface OpenSourceProps {
    repos: GitHubRepo[];
}

export function OpenSource({ repos }: OpenSourceProps) {
    const topRepos = repos.slice(0, 2);

    return (
        <section className="relative py-24 bg-[#02050a] border-t border-white/5" id="opensource">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit uppercase mb-4 tracking-wider">
                            <Github className="h-4 w-4" />
                            Open Source
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                            GitHub Activity
                        </h2>
                    </div>

                    <a
                        href="https://github.com/Prolayjit-B14"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                        View Profile <GitCommit className="h-4 w-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Stats Layout - spans 4 cols */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex-1"
                        >
                            <h3 className="text-lg font-bold text-white mb-6">Contributions</h3>
                            <div className="flex items-center justify-center py-6">
                                <div className="text-center">
                                    <h4 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                        500+
                                    </h4>
                                    <p className="text-zinc-400 mt-2 font-medium">Commits this year</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="bg-black/40 rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                                    <GitMerge className="w-6 h-6 text-purple-400 mb-2" />
                                    <span className="text-2xl font-bold text-white">15</span>
                                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">Repos</span>
                                </div>
                                <div className="bg-black/40 rounded-2xl p-4 flex flex-col items-center justify-center border border-white/5">
                                    <Star className="w-6 h-6 text-yellow-400 mb-2" />
                                    <span className="text-2xl font-bold text-white">20+</span>
                                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">Stars</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Repository Cards - span 8 cols */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {topRepos.map((repo, idx) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 gap-6"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                            {repo.name}
                                        </h3>
                                        {repo.language && (
                                            <span className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded bg-zinc-800 text-zinc-300">
                                                {repo.language}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-zinc-400 mb-6 text-sm md:text-base leading-relaxed max-w-2xl">
                                        {repo.description || "Open source project repository focused on hardware and software engineering solutions."}
                                    </p>
                                    
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                            <Star className="w-4 h-4" /> {repo.stargazers_count}
                                        </div>
                                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                                            <GitFork className="w-4 h-4" /> {repo.forks_count}
                                        </div>
                                    </div>
                                </div>
                                
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="md:self-center flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-black font-bold uppercase tracking-wider text-xs md:opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                                >
                                    Repo <GitCommit className="ml-2 w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
