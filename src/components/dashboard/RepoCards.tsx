"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, GitFork, ExternalLink, Search, Filter, Code2 } from "lucide-react";

export function RepoCards({ repos }: { repos: any[] }) {
    const [search, setSearch] = useState("");

    // Extract unique languages, filtering out nulls
    const allLanguages = useMemo(() => {
        if (!repos) return ["All"];
        const langSet = new Set<string>();
        repos.forEach(r => { if (r.language) langSet.add(r.language); });
        return ["All", ...Array.from(langSet)].slice(0, 6);
    }, [repos]);

    const [language, setLanguage] = useState<string>("All");

    if (!repos || repos.length === 0) return null;

    const filteredRepos = repos.filter((r) => {
        const matchesSearch =
            r.name.toLowerCase().includes(search.toLowerCase()) ||
            (r.description && r.description.toLowerCase().includes(search.toLowerCase())) ||
            (r.topics && r.topics.some((t: string) => t.toLowerCase().includes(search.toLowerCase())));

        const matchesLanguage = language === "All" || r.language === language;

        return matchesSearch && matchesLanguage;
    });

    return (
        <div className="space-y-8">
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <h3 className="text-2xl font-bold flex items-center gap-3 text-[#f8fafc]">
                    <Code2 className="text-primary h-7 w-7 p-1.5 bg-primary/10 rounded-lg border border-primary/20" />
                    Top Repositories
                </h3>

                <div className="flex flex-col md:flex-row gap-4 items-center bg-white/[0.02] border border-white/5 rounded-2xl p-2 backdrop-blur-md">
                    {/* Language Pills */}
                    <div className="flex flex-wrap items-center gap-1 w-full md:w-auto p-1">
                        {allLanguages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setLanguage(lang)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 z-10 ${language === lang ? "text-primary" : "text-[#94a3b8] hover:text-[#f8fafc]"
                                    }`}
                            >
                                {language === lang && (
                                    <motion.div
                                        layoutId="repo-lang"
                                        className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                {lang}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:max-w-[240px] group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-[#6b7280] group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Find a repository..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2.5 bg-[#0f172a]/50 border border-white/10 rounded-xl text-sm placeholder:text-[#6b7280] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#0f172a] transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Results Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredRepos.length > 0 ? (
                        filteredRepos.map((repo, idx) => (
                            <motion.a
                                key={repo.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                href={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative flex flex-col justify-between glass-card p-6 h-full border border-white/5 hover:border-primary/50 transition-all hover:shadow-[0_8px_32px_rgba(74,222,128,0.1)] hover:-translate-y-1"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h4 className="font-bold text-lg text-glow group-hover:text-primary transition-colors truncate text-[#f8fafc]">
                                            {repo.name}
                                        </h4>
                                        <ExternalLink className="h-4 w-4 text-[#6b7280] group-hover:text-primary transition-colors flex-shrink-0" />
                                    </div>
                                    <p className="text-sm text-[#94a3b8] line-clamp-3 mb-6 leading-relaxed">
                                        {repo.description || "No description provided. This repository might contain custom configurations or scripts without a formal readme."}
                                    </p>

                                    {/* Topics */}
                                    {repo.topics && repo.topics.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {repo.topics.slice(0, 3).map((topic: string) => (
                                                <span key={topic} className="inline-flex items-center rounded-md bg-[#1e293b] border border-white/5 px-2 py-1 text-xs font-medium text-[#cbd5e1]">
                                                    {topic}
                                                </span>
                                            ))}
                                            {repo.topics.length > 3 && (
                                                <span className="inline-flex items-center rounded-md bg-[#1e293b] border border-white/5 px-2 py-1 text-xs font-medium text-[#6b7280]">
                                                    +{repo.topics.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center gap-5 text-sm font-medium text-[#6b7280] pt-4 border-t border-white/5 mt-auto">
                                    {repo.language && (
                                        <span className="flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                                            {repo.language}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                        <Star className="h-4 w-4" /> {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1.5 hover:text-[#f8fafc] transition-colors">
                                        <GitFork className="h-4 w-4" /> {repo.forks_count}
                                    </span>
                                </div>
                            </motion.a>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full py-20 text-center flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
                        >
                            <Filter className="h-8 w-8 text-[#6b7280] mb-3" />
                            <p className="text-[#f8fafc] font-medium text-lg">No repositories match that filter</p>
                            <p className="text-[#6b7280] text-sm">Try using a different keyword or language.</p>
                            <button
                                onClick={() => { setSearch(""); setLanguage("All"); }}
                                className="mt-4 text-primary text-sm font-semibold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
