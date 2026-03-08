"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

export function SocialWall() {
    const posts = [
        {
            platform: "linkedin",
            text: "Excited to share that our team won the Smart India Hackathon 2024! Building the 'She Shield' wearable was an incredible journey blending PCB design, embedded C++, and BLE...",
            date: "Aug 2024",
            link: "https://www.linkedin.com/in/prolayjit-biswas"
        },
        {
            platform: "linkedin",
            text: "Just completed routing a custom ESP32 breakout board for agricultural IoT sensors. Always satisfying to see a completely 3D-rendered PCB come together in KiCad.",
            date: "June 2024",
            link: "https://www.linkedin.com/in/prolayjit-biswas"
        },
        {
            platform: "twitter",
            text: "Writing firmware is 10% coding, 90% staring at a logic analyzer wondering why the SPI bus is behaving like an offended cat. #EmbeddedSystems #IOT #Hardware",
            date: "May 2024",
            link: "https://github.com/Prolayjit-B14" // Placeholder link
        }
    ];

    return (
        <section id="social" className="relative py-24 bg-[#030712] border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-glow"
                        >
                            Community & Updates
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#94a3b8] text-lg max-w-2xl"
                        >
                            Insights, project updates, and engineering thoughts from my social feeds.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4"
                    >
                        <a href="https://www.linkedin.com/in/prolayjit-biswas" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 hover:bg-[#0077b5] hover:text-white transition-all">
                            <Linkedin className="w-4 h-4" />
                            Connect
                        </a>
                        <a href="https://github.com/Prolayjit-B14" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1da1f2]/10 text-[#1da1f2] border border-[#1da1f2]/20 hover:bg-[#1da1f2] hover:text-white transition-all">
                            <Twitter className="w-4 h-4" />
                            Follow
                        </a>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, i) => (
                        <motion.a
                            href={post.link}
                            target="_blank"
                            rel="noreferrer"
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group block glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${post.platform === "linkedin" ? "bg-[#0077b5]/20 text-[#0077b5]" : "bg-[#1da1f2]/20 text-[#1da1f2]"}`}>
                                        {post.platform === "linkedin" ? <Linkedin className="w-4 h-4" /> : <Twitter className="w-4 h-4" />}
                                    </div>
                                    <span className="text-sm font-semibold text-[#f8fafc] capitalize">{post.platform}</span>
                                </div>
                                <span className="text-xs text-[#6b7280] font-medium">{post.date}</span>
                            </div>

                            <p className="text-sm text-[#94a3b8] leading-relaxed mb-6 group-hover:text-[#cbd5e1] transition-colors">
                                "{post.text}"
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-semibold text-[#f8fafc] group-hover:text-primary transition-colors">
                                View Post
                                <ExternalLink className="h-3 w-3" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </section>
    );
}
