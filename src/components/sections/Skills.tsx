"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { 
    SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, 
    SiDocker, SiFirebase, SiPostman, SiFigma, 
    SiGit, SiLinux, SiGithub, SiCplusplus,
    SiEspressif, SiStmicroelectronics,
    SiTensorflow, SiPytorch, SiOpencv, SiPython
} from "react-icons/si";
import { Cpu, Layers, BrainCircuit, Wrench, CircuitBoard } from "lucide-react";
import { cn } from "@/lib/utils";

const SKILL_GROUPS = [
    {
        title: "Systems Hardware",
        icon: Cpu,
        accent: "#ff0055", // Rose
        items: [
            { name: "Verilog RTL", icon: CircuitBoard },
            { name: "PCB Design", icon: Cpu }, // Custom fallback
            { name: "FPGA Synthesis", icon: CircuitBoard },
            { name: "VLSI Architecture", icon: Cpu }
        ]
    },
    {
        title: "Embedded & IoT",
        icon: Layers,
        accent: "#00f2ff", // Cyan
        items: [
            { name: "ESP32/S3", icon: SiEspressif },
            { name: "STM32/HAL", icon: SiStmicroelectronics },
            { name: "FreeRTOS", icon: Cpu },
            { name: "MQTT/HTTP", icon: Layers }
        ]
    },
    {
        title: "Software & Cloud",
        icon: Wrench,
        accent: "#00f2ff", // Cyan
        items: [
            { name: "Next.js 15", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Node.js/Express", icon: SiNodedotjs },
            { name: "Docker/Vercel", icon: SiDocker }
        ]
    },
    {
        title: "Intelligence",
        icon: BrainCircuit,
        accent: "#ff0055", // Rose
        items: [
            { name: "Edge AI", icon: SiTensorflow },
            { name: "OpenCV", icon: SiOpencv },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Python", icon: SiPython }
        ]
    }
];

export function Skills() {
    return (
        <section className="relative h-screen min-h-[800px] bg-[#020617] flex items-center overflow-hidden py-14" id="skills">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.02)_0,transparent_70%)] pointer-events-none" />

            <Container className="relative z-10 w-full">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header Section */}
                    <div className="flex flex-col mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-0.5 w-12 bg-[#00f2ff] rounded-full" />
                            <span className="text-[10px] font-black text-[#00f2ff] uppercase tracking-[0.4em]">Core Technical Stack</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ff0055]">Intelligence</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {SKILL_GROUPS.map((group, gIdx) => (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: gIdx * 0.1 }}
                                className="group relative bg-[#0b1220]/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
                            >
                                {/* Group Title & Icon */}
                                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                                    <div 
                                        className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform"
                                        style={{ color: group.accent }}
                                    >
                                        <group.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em]">{group.title}</h3>
                                </div>

                                {/* Skills Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {group.items.map((skill, sIdx) => (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ y: -3 }}
                                            className="flex flex-col items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all"
                                        >
                                            <div className="text-zinc-500 group-hover:text-white transition-colors">
                                                <skill.icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest line-clamp-1 leading-tight group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative Watermark */}
                                <span className="absolute -bottom-2 -right-2 text-[60px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-colors">
                                    0{gIdx + 1}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
