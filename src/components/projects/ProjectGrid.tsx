"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

const CATEGORIES = ["All", "Software", "Hardware", "IoT", "AI"] as const;
type Category = typeof CATEGORIES[number];

export function ProjectGrid({ projects }: { projects: Project[] }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState<Category>("All");

    const filteredProjects = useMemo(() => {
        return projects.filter((p) => {
            const matchesSearch =
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.technologies.some(tech => tech.toLowerCase().includes(search.toLowerCase())) ||
                p.description.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = category === "All" || p.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [projects, search, category]);

    return (
        <div className="space-y-8">
            {/* Filters & Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-2 backdrop-blur-md">

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1 w-full md:w-auto p-1">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 z-10 ${category === cat ? "text-primary" : "text-[#94a3b8] hover:text-[#f8fafc]"
                                }`}
                        >
                            {category === cat && (
                                <motion.div
                                    layoutId="project-category"
                                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                />
                            )}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:max-w-xs group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-[#6b7280] group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search projects, stack, keywords..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2.5 bg-[#0f172a]/50 border border-white/10 rounded-xl text-sm placeholder:text-[#6b7280] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#0f172a] transition-all"
                    />
                </div>
            </div>

            {/* Results Grid */}
            <motion.div
                layout
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full py-20 text-center flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
                        >
                            <Filter className="h-8 w-8 text-[#6b7280] mb-3" />
                            <p className="text-[#f8fafc] font-medium text-lg">No projects found</p>
                            <p className="text-[#6b7280] text-sm">Try adjusting your search or category filter.</p>
                            <button
                                onClick={() => { setSearch(""); setCategory("All"); }}
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
