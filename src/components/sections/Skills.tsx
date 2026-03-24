"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Code2, BrainCircuit, Wrench, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
    {
        title: "Systems Hardware",
        icon: Cpu,
        color: "text-rose-400",
        glow: "shadow-[0_0_20px_rgba(251,113,133,0.3)]",
        bg: "bg-rose-500/5 border-rose-500/20",
        skills: ["ESP32/STM32", "FPGA Verilog", "PCB Design", "RTOS", "VLSI RTL", "Altium/KiCAD"]
    },
    {
        title: "IoT & Cloud",
        icon: Layers,
        color: "text-blue-400",
        glow: "shadow-[0_0_20px_rgba(96,165,250,0.3)]",
        bg: "bg-blue-500/5 border-blue-500/20",
        skills: ["MQTT/HTTP", "Node.js", "Firebase", "Next.js", "TypeScript", "Docker"]
    },
    {
        title: "Intelligence",
        icon: BrainCircuit,
        color: "text-emerald-400",
        glow: "shadow-[0_0_20px_rgba(52,211,153,0.3)]",
        bg: "bg-emerald-500/5 border-emerald-500/20",
        skills: ["TensorFlow", "OpenCV", "PyTorch", "NLP", "Gemini AI", "Computer Vision"]
    },
    {
        title: "Engineering Tools",
        icon: Wrench,
        color: "text-amber-400",
        glow: "shadow-[0_0_20px_rgba(251,191,36,0.3)]",
        bg: "bg-amber-500/5 border-amber-500/20",
        skills: ["Git/GitHub", "Linux/Bash", "MATLAB", "Postman", "Vercel", "Figma"]
    }
];

export function Skills() {
    return (
        <section className="relative h-screen min-h-[700px] bg-[#02050a] flex items-center overflow-hidden py-20" id="skills">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0,transparent_70%)] pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                        >
                            Technical Intelligence
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white leading-none">
                            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">STACK</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {CATEGORIES.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={cn(
                                        "group relative p-6 rounded-[2rem] border transition-all duration-500 overflow-hidden",
                                        category.bg,
                                        "hover:bg-opacity-10 hover:shadow-2xl",
                                        category.glow
                                    )}
                                >
                                    {/* Decorative Icon Background */}
                                    <Icon className="absolute -bottom-4 -right-4 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity rotate-12" />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={cn("p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform shadow-lg", category.color)}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-black text-white tracking-wider uppercase">{category.title}</h3>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map(skill => (
                                                <motion.span
                                                    key={skill}
                                                    whileHover={{ scale: 1.05, x: 2 }}
                                                    className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg bg-black/40 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-default"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
