"use client";

import { useState, useMemo } from "react";
import { formatDistanceToNow } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
    const [search, setSearch] = useState("");

    // Extract unique categories from all posts
    const allCategories = useMemo(() => {
        const catSet = new Set<string>();
        posts.forEach(p => p.categories.forEach(c => catSet.add(c)));
        return ["All", ...Array.from(catSet)].slice(0, 6); // Top 6 categories
    }, [posts]);

    const [category, setCategory] = useState<string>("All");

    const filteredPosts = useMemo(() => {
        return posts.filter((p) => {
            const matchesSearch =
                p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.categories.some(c => c.toLowerCase().includes(search.toLowerCase())) ||
                p.contentSnippet.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = category === "All" || p.categories.includes(category);

            return matchesSearch && matchesCategory;
        });
    }, [posts, search, category]);

    return (
        <div className="space-y-8">
            {/* Filters & Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-2 backdrop-blur-md">

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1 w-full md:w-auto p-1">
                    {allCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 z-10 capitalize ${category === cat ? "text-primary" : "text-[#94a3b8] hover:text-[#f8fafc]"
                                }`}
                        >
                            {category === cat && (
                                <motion.div
                                    layoutId="blog-category"
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
                        placeholder="Search posts, tags..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2.5 bg-[#0f172a]/50 border border-white/10 rounded-xl text-sm placeholder:text-[#6b7280] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#0f172a] transition-all"
                    />
                </div>
            </div>

            {/* Results Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, i) => (
                            <motion.a
                                key={post.link + i}
                                layout
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col glass-card overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(74,222,128,0.1)] h-full"
                            >
                                {/* Cover Image - Optional, not all blogs have it */}
                                {post.coverImage && (
                                    <div className="relative w-full h-40 overflow-hidden bg-[#0a0f1c]">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
                                    </div>
                                )}

                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-center justify-between gap-4 mb-3 text-xs font-semibold text-[#6b7280]">
                                        <span className="uppercase tracking-wider text-primary">
                                            {post.pubDate ? formatDistanceToNow(new Date(post.pubDate), { addSuffix: true }) : "Recent"}
                                        </span>
                                        {post.readingTime && post.readingTime > 0 && (
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {post.readingTime} min read
                                            </span>
                                        )}
                                    </div>

                                    <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2 mb-3 text-[#f8fafc]">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-[#94a3b8] line-clamp-3 mb-6 leading-relaxed">
                                        {post.contentSnippet}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                        {post.categories.slice(0, 3).map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md bg-[#1e293b] border border-white/5 px-2 py-1 text-xs font-medium text-[#cbd5e1] capitalize"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="inline-flex items-center justify-between pt-5 border-t border-white/5 text-sm font-semibold text-[#f8fafc] group-hover:text-primary transition-colors w-full">
                                        Read Article
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
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
                            <p className="text-[#f8fafc] font-medium text-lg">No posts found</p>
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
