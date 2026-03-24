"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { 
    SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, 
    SiDocker, SiFirebase, SiPostman, SiFigma, 
    SiGit, SiLinux, SiGithub, SiCplusplus,
    SiEspressif, SiStmicroelectronics,
    SiTensorflow, SiPytorch, SiOpencv, SiPython,
    SiRust, SiGo, SiPostgresql, SiMongodb, SiRedis,
    SiAmazonaws, SiGooglecloud, SiKubernetes,
    SiArduino, SiRaspberrypi
} from "react-icons/si";
import { Cpu, Layers, BrainCircuit, Wrench, CircuitBoard, Wifi, Database, Cloud, Code2, Cpu as MicrochipTube } from "lucide-react";
import { cn } from "@/lib/utils";

const SKILL_GROUPS = [
    {
        title: "Silicon & VLSI",
        icon: Cpu,
        accent: "#ff0055",
        items: [
            { name: "Verilog RTL", icon: Code2 },
            { name: "VLSI Design", icon: CircuitBoard },
            { name: "FPGA Synth", icon: Cpu },
            { name: "ASIC Arch", icon: Layers },
            { name: "PCB Layout", icon: CircuitBoard },
            { name: "Altium Designer", icon: CircuitBoard }
        ]
    },
    {
        title: "Embedded Systems",
        icon: Wifi,
        accent: "#00f2ff",
        items: [
            { name: "ESP32/S3", icon: SiEspressif },
            { name: "STM32/HAL", icon: SiStmicroelectronics },
            { name: "FreeRTOS", icon: Cpu },
            { name: "ArduinoIDE", icon: SiArduino },
            { name: "RaspberryPi", icon: SiRaspberrypi },
            { name: "ARM Cortex", icon: MicrochipTube }
        ]
    },
    {
        title: "System Software",
        icon: Cloud,
        accent: "#00f2ff",
        items: [
            { name: "Next.js 15", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Rust/Go", icon: SiRust },
            { name: "AWS/GCP", icon: SiAmazonaws },
            { name: "K8s/Docker", icon: SiDocker }
        ]
    },
    {
        title: "Intelligence & Data",
        icon: BrainCircuit,
        accent: "#ff0055",
        items: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "Edge AI", icon: BrainCircuit },
            { name: "Python", icon: SiPython },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb }
        ]
    }
];

export function Skills() {
    return (
        <section className="relative h-screen min-h-[700px] bg-[#020617] flex items-center overflow-hidden py-10" id="skills">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.03)_0,transparent_70%)] pointer-events-none" />

            <Container className="relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-4 mt-[-4vh]">
                    <div className="flex flex-col mb-10 text-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="h-px w-8 bg-zinc-800" />
                            <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.5em]">Technical_Repository [32_Units]</span>
                            <div className="h-px w-8 bg-zinc-800" />
                        </motion.div>
                        <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#00f2ff] to-[#ff0055]">Intelligence</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SKILL_GROUPS.map((group, gIdx) => (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: gIdx * 0.05 }}
                                className="group relative bg-[#0b1220]/50 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-6 hover:border-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                                    <group.icon className="w-4 h-4" style={{ color: group.accent }} />
                                    <h3 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">{group.title}</h3>
                                </div>

                                <div className="grid grid-cols-2 gap-2">
                                    {group.items.map((skill, sIdx) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.05] transition-all group/skill"
                                        >
                                            <div className="text-zinc-600 group-hover/skill:text-white transition-colors duration-300">
                                                <skill.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest line-clamp-1 group-hover/skill:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div 
                                        className="w-1 h-1 rounded-full animate-pulse shadow-[0_0_8px_currentColor]"
                                        style={{ color: group.accent, backgroundColor: group.accent }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
