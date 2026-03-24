"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Github, Star, GitFork, GitCommit } from "lucide-react";
import { GitHubRepo } from "@/lib/github";

interface OpenSourceProps {
    repos: GitHubRepo[];
}

export function OpenSource({ repos }: OpenSourceProps) {
    return (
        <section className="relative py-12 lg:py-16 bg-[#02050a] border-t border-white/5" id="opensource">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                            Open Source
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base">
                            Recent activity and public engineering repositories.
                        </p>
                    </div>

                    <a
                        href="https://github.com/Prolayjit-B14"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                    >
                        <Github className="h-4 w-4" /> View Profile
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {repos.slice(0, 3).map((repo, idx) => (
                        <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group flex flex-col bg-[#0b1220] border border-white/10 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                                    {repo.name}
                                </h3>
                                {repo.language && (
                                    <span className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider rounded bg-zinc-800 text-zinc-300 ml-2 whitespace-nowrap">
                                        {repo.language}
                                    </span>
                                )}
                            </div>
                            
                            <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-1 line-clamp-3">
                                {repo.description || "Hardware and software engineering repository."}
                            </p>
                            
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold">
                                        <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-semibold">
                                        <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                                    </div>
                                </div>
                                <a 
                                    href={repo.html_url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-1"
                                >
                                    Source <GitCommit className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
