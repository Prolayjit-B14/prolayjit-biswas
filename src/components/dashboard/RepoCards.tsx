"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

export function RepoCards({ repos }: { repos: any[] }) {
    if (!repos || repos.length === 0) return null;

    return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Star className="text-primary h-6 w-6" /> Top Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo, idx) => (
                    <motion.a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative flex flex-col justify-between glass-card p-6 h-full border border-white/5 hover:border-primary/50 transition-colors"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-lg text-glow group-hover:text-primary transition-colors truncate">
                                    {repo.name}
                                </h4>
                                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                {repo.description || "No description provided."}
                            </p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                            {repo.language && (
                                <span className="flex items-center gap-1">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    {repo.language}
                                </span>
                            )}
                            <span className="flex items-center gap-1">
                                <Star className="h-3 w-3" /> {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1">
                                <GitFork className="h-3 w-3" /> {repo.forks_count}
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
