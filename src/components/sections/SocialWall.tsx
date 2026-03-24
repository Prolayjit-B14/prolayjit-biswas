"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heart, MessageCircle, Repeat2, ExternalLink, BookOpen } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { BlogPost } from "@/lib/blog";

// Hardcoded realistic posts — LinkedIn/X don't have open public post APIs
const LINKEDIN_POSTS = [
    {
        text: "🚀 Excited to share that our team 'She Shield' made it to the national level of Smart India Hackathon 2024! We built a wearable safety device using ESP32, BLE & GPS that can call for help with a single button press. The 36-hour build was intense but rewarding. 💪 #SIH2024 #EmbeddedSystems #WearableTech",
        likes: 142,
        comments: 23,
        date: "Aug 2024",
        link: "https://www.linkedin.com/in/prolayjit-biswas",
    },
    {
        text: "🔌 Just finished designing a 4-layer PCB for a GPS + GSM tracking module using KiCAD. Routing differential pairs for the GSM antenna was tricky but I got the impedance right. Next up — soldering and testing! #PCBDesign #KiCAD #HardwareEngineering",
        likes: 87,
        comments: 11,
        date: "Feb 2025",
        link: "https://www.linkedin.com/in/prolayjit-biswas",
    },
    {
        text: "🎓 Currently deep-diving into VHDL and FPGA design as part of my Electronics Engineering coursework at MAKAUT. It's fascinating how logic synthesis turns abstract RTL code into actual circuits. #VLSI #FPGA #DigitalDesign #MAKAUT",
        likes: 65,
        comments: 9,
        date: "Jan 2025",
        link: "https://www.linkedin.com/in/prolayjit-biswas",
    },
];

const X_POSTS = [
    {
        text: "built an IoT sensor node on ESP32 that pushes live soil moisture + temp data to a cloud dashboard. sub-$5 BOM. farms of the future are open-source 🌱 #IoT #ESP32 #OpenHardware",
        likes: 234,
        retweets: 67,
        date: "Mar 2025",
        link: "https://x.com/pro_lay04",
    },
    {
        text: "lenis + framer motion is the combo no one talks about enough. buttery scroll + declarative animation = chef's kiss 🤌 my portfolio finally feels like it's alive",
        likes: 180,
        retweets: 44,
        date: "Feb 2025",
        link: "https://x.com/pro_lay04",
    },
    {
        text: "soldering at 2am while debugging a UART handshake issue is my cardio 💀 turns out TX and RX were swapped. two hours of my life, gone. but hey, it works now 🔧 #EmbeddedLife",
        likes: 312,
        retweets: 91,
        date: "Dec 2024",
        link: "https://x.com/pro_lay04",
    },
];

function LinkedInCard({ post, i }: { post: typeof LINKEDIN_POSTS[0]; i: number }) {
    return (
        <motion.a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col bg-[#0a1628] border border-[#0077b5]/20 rounded-2xl p-5 hover:border-[#0077b5]/60 hover:shadow-[0_8px_32px_rgba(0,119,181,0.15)] transition-all"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    P
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-[#f8fafc] truncate">Prolayjit Biswas</p>
                    <p className="text-[11px] text-[#94a3b8] truncate">B.Tech Electronics (VLSI) · MAKAUT</p>
                </div>
                <FaLinkedin className="w-5 h-5 text-[#0077b5] flex-shrink-0" />
            </div>

            {/* Post text */}
            <p className="text-sm text-[#cbd5e1] leading-relaxed line-clamp-4 flex-1 mb-4">
                {post.text}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/5 pt-3 text-xs text-[#6b7280]">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 hover:text-[#0077b5] transition-colors">
                        <Heart className="w-3.5 h-3.5" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-[#0077b5] transition-colors">
                        <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span>{post.date}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </motion.a>
    );
}

function XCard({ post, i }: { post: typeof X_POSTS[0]; i: number }) {
    return (
        <motion.a
            href={post.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group flex flex-col bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] transition-all"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    P
                </div>
                <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-[#f8fafc] truncate">Prolayjit Biswas</p>
                    <p className="text-[11px] text-[#6b7280] truncate">@pro_lay04</p>
                </div>
                <FaXTwitter className="w-4 h-4 text-[#f8fafc] flex-shrink-0" />
            </div>

            {/* Post text */}
            <p className="text-sm text-[#e2e8f0] leading-relaxed line-clamp-4 flex-1 mb-4">
                {post.text}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/5 pt-3 text-xs text-[#6b7280]">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 hover:text-rose-400 transition-colors">
                        <Heart className="w-3.5 h-3.5" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                        <Repeat2 className="w-3.5 h-3.5" /> {post.retweets}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span>{post.date}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </div>
        </motion.a>
    );
}

export function SocialWall({ posts }: { posts: BlogPost[] }) {
    const hasBlogs = posts && posts.length > 0;

    return (
        <section id="social" className="relative py-14 bg-[#030712] border-t border-white/5">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-glow">
                            Community & Articles
                        </h2>
                        <p className="text-[#94a3b8] text-sm max-w-lg">
                            Engineering posts, articles, and project updates shared across my social platforms.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <a href="https://www.linkedin.com/in/prolayjit-biswas" target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 hover:bg-[#0077b5] hover:text-white transition-all text-sm font-semibold">
                            <FaLinkedin className="w-4 h-4" /> LinkedIn
                        </a>
                        <a href="https://x.com/pro_lay04" target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 text-[#f8fafc] border border-white/10 hover:bg-white hover:text-black transition-all text-sm font-semibold">
                            <FaXTwitter className="w-4 h-4" /> Twitter / X
                        </a>
                    </div>
                </motion.div>

                {/* LinkedIn posts */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-5">
                        <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#6b7280]">LinkedIn</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {LINKEDIN_POSTS.map((post, i) => (
                            <LinkedInCard key={i} post={post} i={i} />
                        ))}
                    </div>
                </div>

                {/* X posts */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-5">
                        <FaXTwitter className="w-4 h-4 text-[#f8fafc]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#6b7280]">Twitter / X</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {X_POSTS.map((post, i) => (
                            <XCard key={i} post={post} i={i} />
                        ))}
                    </div>
                </div>

                {/* Blog posts (from Dev.to — if available) */}
                {hasBlogs && (
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#6b7280]">Latest Articles · Dev.to</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {posts.slice(0, 3).map((post, i) => (
                                <motion.a
                                    key={post.title}
                                    href={post.link}
                                    target="_blank" rel="noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    whileHover={{ y: -4 }}
                                    className="group flex flex-col bg-primary/5 border border-primary/20 rounded-2xl p-5 hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(74,222,128,0.1)] transition-all"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                                                <BookOpen className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider">Dev.to</span>
                                        </div>
                                        <span className="text-[10px] text-[#6b7280] font-medium">{post.readingTime} min read</span>
                                    </div>
                                    <h3 className="text-sm font-bold text-[#f8fafc] leading-snug line-clamp-2 flex-1 mb-4 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-xs text-[#6b7280] line-clamp-2 mb-4">{post.contentSnippet}</p>
                                    <div className="flex items-center justify-between border-t border-white/5 pt-3 text-xs text-[#6b7280] group-hover:text-primary transition-colors">
                                        Read Article <ExternalLink className="w-3 h-3" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
