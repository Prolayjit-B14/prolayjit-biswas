"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Code2, BrainCircuit, Wrench, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
    {
        title: "Hardware",
        icon: Cpu,
        color: "text-blue-400 border-blue-400/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        skills: ["ESP32", "STM32", "Arduino", "Raspberry Pi", "FPGA", "Verilog", "VHDL", "PCB Design", "Soldering", "Oscilloscopes"]
    },
    {
        title: "Software",
        icon: Code2,
        color: "text-emerald-400 border-emerald-400/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        skills: ["C/C++", "Python", "JavaScript", "TypeScript", "Next.js", "React", "Node.js", "Tailwind CSS", "SQL", "MongoDB"]
    },
    {
        title: "AI",
        icon: BrainCircuit,
        color: "text-purple-400 border-purple-400/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
        skills: ["TensorFlow", "PyTorch", "OpenCV", "Machine Learning", "NLP", "Gemini API", "Computer Vision", "Data Analysis"]
    },
    {
        title: "Tools",
        icon: Wrench,
        color: "text-amber-400 border-amber-400/30 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]",
        skills: ["KiCAD", "Altium", "MATLAB", "Git/GitHub", "Docker", "VS Code", "Figma", "Linux", "Postman", "Vercel"]
    }
];

export function Skills() {
    return (
        <section className="relative py-12 lg:py-16 bg-[#02050a] border-y border-white/5" id="skills">
            <Container>
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
                        Skills & Technologies
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                        A rigorous stack of modern languages and legacy engineering tools.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {CATEGORIES.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon className={cn("w-6 h-6", category.color.split(' ')[0])} />
                                    <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                                </div>
                                
                                <motion.div 
                                    variants={{
                                        hidden: {},
                                        show: { transition: { staggerChildren: 0.12 } }
                                    }}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {category.skills.map(skill => (
                                        <motion.div
                                            key={skill}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                show: { opacity: 1, y: 0 }
                                            }}
                                            whileHover={{ scale: 1.04, y: -5, transition: { type: "spring", stiffness: 200 } }}
                                            className={cn(
                                                "px-4 py-2 text-sm font-medium rounded-full border bg-white/5 backdrop-blur-sm text-zinc-300 shadow-sm",
                                                category.color
                                            )}
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
