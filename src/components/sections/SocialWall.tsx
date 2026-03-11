"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Linkedin, Twitter, ExternalLink, BookOpen } from "lucide-react";

export function SocialWall({ posts }: { posts: any[] }) {
    // If we have blog posts, we map them. If not, we fallback to a LinkedIn/Twitter connect CTA.

    return (
        <section id="social" className="relative py-16 bg-[#030712] border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-glow"
                        >
                            Community & Articles
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#94a3b8] text-sm max-w-2xl"
                        >
                            Latest technical writing, tutorials, and engineering updates from my blog and social feeds.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap items-center gap-3"
                    >
                        <a href="https://www.linkedin.com/in/prolayjit-biswas" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 hover:bg-[#0077b5] hover:text-white transition-all text-sm font-semibold">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <a href="https://x.com/pro_lay04" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1da1f2]/10 text-[#1da1f2] border border-[#1da1f2]/20 hover:bg-[#1da1f2] hover:text-white transition-all text-sm font-semibold">
                            <Twitter className="w-4 h-4" />
                            Twitter
                        </a>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.length > 0 ? posts.map((post, i) => (
                        <motion.a
                            href={post.link}
                            target="_blank"
                            rel="noreferrer"
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="group flex flex-col justify-between glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 h-full"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                                            <BookOpen className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-semibold text-[#f8fafc] uppercase tracking-wider">Dev.to Article</span>
                                    </div>
                                    <span className="text-[10px] text-[#6b7280] font-bold uppercase tracking-widest">
                                        {post.readingTime} Min Read
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-[#f8fafc] leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-xs text-[#94a3b8] leading-relaxed mb-6 line-clamp-3">
                                    {post.contentSnippet}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-bold text-[#6b7280] group-hover:text-primary transition-colors mt-auto uppercase tracking-wider">
                                Read Article
                                <ExternalLink className="h-3.5 w-3.5" />
                            </div>
                        </motion.a>
                    )) : (
                        <div className="col-span-full py-12 text-center text-muted-foreground border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
                            No recent updates found. Check out my GitHub or LinkedIn explicitly!
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
