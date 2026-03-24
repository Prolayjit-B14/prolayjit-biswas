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
        <section className="relative h-screen min-h-[850px] bg-[#02050a] flex items-center overflow-hidden py-20" id="community">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col mb-12 text-center items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-emerald-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20"
                    >
                        Active Pulse
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-2 uppercase leading-none">
                        COMMUNITY & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 font-black">KNOWLEDGE SHARING</span>
                    </h2>
                    <p className="text-zinc-500 font-medium text-xs max-w-xl mx-auto mt-4 px-4 leading-relaxed tracking-wide">
                        Insights, experiments, and engineering learnings shared across open-source and professional platforms.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex flex-col gap-6 scale-[0.95] origin-top">
                    
                    {/* ROW 1: GITHUB ACTIVITY (MOST IMPORTANT) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0b1220]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 flex flex-col md:flex-row gap-10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden"
                    >
                        {/* Kinetic Background Accent */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full group-hover:bg-emerald-500/10 transition-colors" />

                        <div className="flex-1 flex flex-col relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">GitHub Activity</h3>
                                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mt-1">prolayjit-b14 // core_telemetry</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-10 mb-8">
                                <div>
                                    <div className="text-3xl font-black text-white tracking-tighter">34</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Repositories</div>
                                </div>
                                <div className="h-10 w-px bg-white/10" />
                                <div>
                                    <div className="text-3xl font-black text-white tracking-tighter">{totalStars}</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Global Stars</div>
                                </div>
                                <div className="h-10 w-px bg-white/10" />
                                <div>
                                    <div className="text-xl font-black text-emerald-400 mt-1 uppercase tracking-tighter">
                                        C++, TS, Verilog
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mt-1">Tier-1 Stack</div>
                                </div>
                            </div>
                            
                            <a href="https://github.com/Prolayjit-B14" target="_blank" rel="noreferrer" className="mt-auto px-8 py-3.5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-emerald-400 transition-all duration-300 inline-block w-fit shadow-2xl">
                                View Full Profile
                            </a>
                        </div>
                        
                        <div className="md:w-[40%] bg-black/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-8 flex flex-col relative z-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-white/5 pb-4 block">Primary Repositories</span>
                            <ul className="space-y-4">
                                {[
                                    { name: "AgriSense IoT", color: "text-emerald-400", icon: Code2 },
                                    { name: "VLSI CPU Core", color: "text-blue-400", icon: GitMerge },
                                    { name: "LoRa Mesh Network", color: "text-amber-400", icon: Star }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xs font-black text-zinc-400 uppercase tracking-widest hover:text-white transition-colors cursor-default">
                                        <div className={cn("p-2 rounded-lg bg-white/5 border border-white/5", item.color)}>
                                            <item.icon className="w-3.5 h-3.5" />
                                        </div>
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* ROW 2: BLOG ARTICLES (2 Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(posts && posts.length >= 1 ? posts.slice(0, 2) : [
                            { title: "My First Year in Engineering", contentSnippet: "A deep dive into the transition from high school to building full-scale hardware systems.", readingTime: "5", link: "#" },
                            { title: "Introduction to Git & GitHub", contentSnippet: "Demystifying version control for hardware engineers and embedded developers.", readingTime: "4", link: "#" }
                        ]).map((post, i) => (
                            <motion.a
                                key={i}
                                href={post.link}
                                target="_blank" rel="noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="group relative bg-[#0b1220]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 hover:border-emerald-400/30 transition-all duration-500 h-full flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                            <BookOpen className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/80">Engineering Blog</span>
                                    </div>
                                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">{post.readingTime} MIN READ</span>
                                </div>
                                <h3 className="text-xl font-black text-white mb-4 leading-tight uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-zinc-500 line-clamp-2 mb-8 font-medium leading-relaxed">
                                    {post.contentSnippet}
                                </p>
                                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/5 px-3 py-1 rounded-lg">Read more →</span>
                                    <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest tracking-widest">{ (post as any).pubDate || "2025" }</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* ROW 3: LINKEDIN + TWITTER (2 Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.a
                            href={LINKEDIN_POSTS[0].link}
                            target="_blank" rel="noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-[#0b1220]/40 backdrop-blur-2xl border border-[#0077b5]/20 rounded-[2.5rem] p-8 hover:border-[#0077b5]/50 transition-all group flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2.5 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5]">
                                    <FaLinkedin className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Professional Signal</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1 mb-8 font-medium">
                                "{LINKEDIN_POSTS[0].text}"
                            </p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-6 text-[10px] font-black uppercase tracking-widest text-zinc-700">
                                View Full Intelligence <ExternalLink className="w-3 h-3 text-[#0077b5]" />
                            </div>
                        </motion.a>

                        <motion.a
                            href={X_POSTS[0].link}
                            target="_blank" rel="noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="bg-[#0b1220]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 hover:border-white/30 transition-all group flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white">
                                    <FaXTwitter className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Technical Brief</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1 mb-8 font-medium italic">
                                "{X_POSTS[0].text}"
                            </p>
                            <div className="flex items-center justify-between border-t border-white/5 pt-6 text-[10px] font-black uppercase tracking-widest text-zinc-700">
                                View X-Stream <ExternalLink className="w-3 h-3 text-white" />
                            </div>
                        </motion.a>
                    </div>

                </div>
            </Container>
        </section>
    );
}
