"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, TerminalSquare, Layers, Database, Box, Play } from "lucide-react";

const technologies = [
    { name: "ESP32", icon: Cpu, color: "text-primary border-primary/20 bg-primary/5" },
    { name: "KiCAD", icon: Layers, color: "text-blue-400 border-blue-400/20 bg-blue-400/5" },
    { name: "Verilog", icon: Database, color: "text-purple-400 border-purple-400/20 bg-purple-400/5" },
    { name: "Next.js", icon: TerminalSquare, color: "text-zinc-200 border-zinc-200/20 bg-zinc-200/5" },
    { name: "Docker", icon: Box, color: "text-sky-400 border-sky-400/20 bg-sky-400/5" },
    { name: "TensorFlow", icon: Play, color: "text-amber-400 border-amber-400/20 bg-amber-400/5" },
];

export function TrustBar() {
    return (
        <section className="relative py-10 bg-[#02050a] border-y border-white/5 overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
                    <span className="text-muted-foreground font-medium whitespace-nowrap uppercase tracking-widest text-[#6b7280] text-[10px] md:text-xs">
                        Worked with technologies
                    </span>
                    
                    {/* Marquee or flex wrapper */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, i) => {
                            const Icon = tech.icon;
                            return (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${tech.color} glass-card hover:bg-white/10 transition-colors cursor-default`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    <span className="font-semibold tracking-wide">{tech.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
