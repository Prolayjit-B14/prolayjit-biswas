"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Github, ExternalLink, GitMerge, Star, Code2, BookOpen } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { BlogPost } from "@/lib/blog";

const LINKEDIN_POSTS = [
    {
        text: "🔌 Just finished designing a 4-layer PCB for a GPS + GSM tracking module using KiCAD. Routing differential pairs for the GSM antenna was tricky but I got the impedance right. Next up — soldering and testing! #PCBDesign #KiCAD",
        date: "Feb 2025",
        link: "https://www.linkedin.com/in/prolayjit-biswas",
    },
    {
        text: "🚀 Excited to share that our team 'She Shield' made it to the national level of Smart India Hackathon 2024! We built a wearable safety device using ESP32, BLE & GPS. The 36-hour build was intense but rewarding. 💪 #SIH2024",
        date: "Aug 2024",
        link: "https://www.linkedin.com/in/prolayjit-biswas",
    }
];

const X_POSTS = [
    {
        text: "built an IoT sensor node on ESP32 that pushes live soil moisture + temp data to a cloud dashboard. sub-$5 BOM. farms of the future are open-source 🌱 #IoT #ESP32 #OpenHardware",
        date: "Mar 2025",
        link: "https://x.com/pro_lay04",
    },
    {
        text: "soldering at 2am while debugging a UART handshake issue is my cardio 💀 turns out TX and RX were swapped. two hours of my life, gone. but hey, it works now 🔧 #EmbeddedLife",
        date: "Dec 2024",
        link: "https://x.com/pro_lay04",
    }
];

export function CommunitySection({ repos, posts }: { repos: any[]; posts: BlogPost[] }) {
    
    // Fallback if GitHub API fails
    const totalStars = repos?.reduce((acc, r) => acc + (r.stargazers_count || 0), 0) || 12;

    return (
        <section className="relative py-12 lg:py-16 bg-background border-y border-white/5" id="community">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col mb-10 md:text-center items-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 text-glow">
                        Community & Knowledge Sharing
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col gap-6">
                    
                    {/* ROW 1: GITHUB ACTIVITY (Wide Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8 hover:border-white/20 transition-colors"
                    >
                        <div className="flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <Github className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
                            </div>
                            
                            <div className="flex gap-6 mb-6">
                                <div>
                                    <div className="text-2xl font-black text-white">32</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Repositories</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-white">{totalStars}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Total Stars</div>
                                </div>
                                <div>
                                    <div className="text-xl font-black text-emerald-400 mt-1 flex items-center gap-1.5">
                                        TypeScript, C++
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Top Languages</div>
                                </div>
                            </div>
                            
                            <a href="https://github.com/Prolayjit-B14" target="_blank" rel="noreferrer" className="mt-auto px-5 py-2.5 bg-white text-black font-bold text-sm rounded-lg hover:bg-zinc-200 transition-colors inline-block w-fit">
                                View GitHub →
                            </a>
                        </div>
                        
                        <div className="md:w-1/2 bg-black/40 border border-white/5 rounded-xl p-5 flex flex-col justify-center">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-3">Top Open Source Projects</span>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                                    <Code2 className="w-4 h-4 text-emerald-500" /> AgriSense IoT Framework
                                </li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                                    <GitMerge className="w-4 h-4 text-blue-400" /> VLSI 32-bit ALU Design
                                </li>
                                <li className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                                    <Star className="w-4 h-4 text-amber-400" /> LoRa Mesh Network Nodes
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* ROW 2: BLOG ARTICLES (2 Cards) */}
                    {posts && posts.length >= 2 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.slice(0, 2).map((post, i) => (
                                <motion.a
                                    key={i}
                                    href={post.link}
                                    target="_blank" rel="noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="group flex flex-col bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px] uppercase tracking-widest">
                                            <BookOpen className="w-4 h-4" /> Dev.to
                                        </div>
                                        <span className="text-[11px] font-medium text-zinc-500">{post.readingTime} min read</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-zinc-400 line-clamp-2 mb-4">
                                        {post.contentSnippet}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 font-semibold text-sm text-zinc-300 group-hover:text-emerald-400 transition-colors">
                                        Read more → <span className="text-xs text-zinc-500">{post.pubDate || "2024"}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    )}

                    {/* ROW 3: LINKEDIN + TWITTER (2 Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* LinkedIn Post - 1st index from LINKEDIN_POSTS */}
                        <motion.a
                            href={LINKEDIN_POSTS[0].link}
                            target="_blank" rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="bg-[#0077b5]/5 border border-[#0077b5]/20 rounded-2xl p-6 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/40 transition-all group flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FaLinkedin className="w-5 h-5 text-[#0077b5]" />
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Professional Signal</span>
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed line-clamp-4 flex-1 mb-4 group-hover:text-white transition-colors">
                                {LINKEDIN_POSTS[0].text}
                            </p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold text-zinc-500">
                                View Post <ExternalLink className="w-3.5 h-3.5 group-hover:text-[#0077b5]" />
                            </div>
                        </motion.a>

                        {/* Twitter Post - 1st index from X_POSTS */}
                        <motion.a
                            href={X_POSTS[0].link}
                            target="_blank" rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/30 transition-all group flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FaXTwitter className="w-5 h-5 text-zinc-300" />
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Engineering Insights</span>
                            </div>
                            <p className="text-sm text-zinc-300 leading-relaxed line-clamp-4 flex-1 mb-4 group-hover:text-white transition-colors">
                                {X_POSTS[0].text}
                            </p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold text-zinc-500">
                                View Post <ExternalLink className="w-3.5 h-3.5 group-hover:text-white" />
                            </div>
                        </motion.a>
                    </div>

                </div>
            </Container>
        </section>
    );
}
