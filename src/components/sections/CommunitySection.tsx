"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
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
    const totalStars = repos?.reduce((acc, r) => acc + (r.stargazers_count || 0), 0) || 12;

    return (
        <section className="relative min-h-screen bg-[#020617] flex items-center overflow-hidden py-32" id="community">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col mb-20 text-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-[#00f2ff] font-black text-[10px] uppercase tracking-[0.4em] mb-6 bg-[#00f2ff]/5 px-5 py-2 rounded-full border border-[#00f2ff]/10"
                    >
                        Active Pulse
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-none"
                    >
                        Community & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ff0055] font-black">Knowledge</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f2ff] to-[#ff0055] rounded-full mb-8" />
                </div>

                <div className="max-w-5xl mx-auto flex flex-col gap-6 scale-[0.95] origin-top">
                    
                    {/* ROW 1: GITHUB ACTIVITY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0b1220]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 lg:p-14 flex flex-col md:flex-row gap-12 hover:border-[#00f2ff]/30 transition-all duration-500 overflow-hidden shadow-2xl"
                    >
                        <div className="flex-1 flex flex-col relative z-10">
                            <div className="flex items-center gap-6 mb-10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                    <Github className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter">GitHub Pulse</h3>
                                    <p className="text-[10px] font-black text-[#00f2ff] uppercase tracking-[0.3em] mt-2">@prolayjit-b14 // systems_architect</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-12 mb-10">
                                <div>
                                    <div className="text-4xl font-black text-white tracking-tighter">34</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mt-2">Commits/Repos</div>
                                </div>
                                <div className="h-12 w-px bg-white/5" />
                                <div>
                                    <div className="text-4xl font-black text-white tracking-tighter">{totalStars}</div>
                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mt-2">Global Stars</div>
                                </div>
                            </div>
                            
                            <a href="https://github.com/Prolayjit-B14" target="_blank" rel="noreferrer" className="mt-auto px-10 py-4 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-[1.5rem] hover:bg-[#00f2ff] hover:text-white transition-all duration-500 inline-block w-fit shadow-2xl">
                                Access Source
                            </a>
                        </div>
                        
                        <div className="md:w-[45%] bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-8 border-b border-white/2 pb-6 block">Target Repositories</span>
                            <ul className="space-y-6">
                                {[
                                    { name: "AgriSense IoT", color: "#00f2ff", icon: Code2 },
                                    { name: "VLSI CPU Core", color: "#ff0055", icon: GitMerge },
                                    { name: "LoRa Mesh Network", color: "#00f2ff", icon: Star }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 text-sm font-black text-zinc-400 uppercase tracking-widest hover:text-white transition-all group/repo cursor-pointer">
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 transition-all group-hover/repo:scale-110" style={{ color: item.color }}>
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {(posts && posts.length >= 1 ? posts.slice(0, 2) : [
                            { title: "Silicon Synthesis: 0 to 1", contentSnippet: "A comprehensive guide to chip design and verification for modern sub-nanometer nodes.", readingTime: "8", link: "#" },
                            { title: "Embedded Edge AI Architecture", contentSnippet: "Optimizing neural networks for low-power microcontrollers without sacrificing accuracy.", readingTime: "6", link: "#" }
                        ]).map((post, i) => (
                            <motion.a
                                key={i}
                                href={post.link}
                                target="_blank" rel="noreferrer"
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative bg-[#0b1220]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 hover:border-[#ff0055]/30 transition-all duration-500 h-full flex flex-col shadow-xl"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#ff0055]">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff0055]/80">Technical Journal</span>
                                    </div>
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.3em]">{post.readingTime} MIN ANALYSIS</span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-6 leading-[1.1] uppercase tracking-tighter group-hover:text-[#ff0055] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-zinc-500 line-clamp-2 mb-10 font-medium leading-relaxed">
                                    {post.contentSnippet}
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff0055]">Read Transmission →</span>
                                    <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">PRO.SYNC // 2025</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.a
                            href={LINKEDIN_POSTS[0].link}
                            target="_blank" rel="noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-[#0b1220]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 hover:border-[#0077b5]/30 transition-all duration-500 group flex flex-col shadow-xl"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-500">
                                    <FaLinkedin className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Professional Feed</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1 mb-8 font-medium">
                                "{LINKEDIN_POSTS[0].text}"
                            </p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
                                View Intel <ExternalLink className="w-3.5 h-3.5 text-[#0077b5]" />
                            </div>
                        </motion.a>

                        <motion.a
                            href={X_POSTS[0].link}
                            target="_blank" rel="noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-[#0b1220]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] p-10 hover:border-[#00f2ff]/30 transition-all duration-500 group flex flex-col shadow-xl"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <FaXTwitter className="w-6 h-6" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Digital Transmission</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1 mb-8 font-medium italic">
                                "{X_POSTS[0].text}"
                            </p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700">
                                View Stream <ExternalLink className="w-3.5 h-3.5 text-[#00f2ff]" />
                            </div>
                        </motion.a>
                    </div>

                </div>
            </Container>
        </section>
    );
}
