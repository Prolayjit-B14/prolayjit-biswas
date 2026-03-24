"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Wifi, Zap, LayoutTemplate, CircuitBoard, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERTISE = [
    {
        title: "Embedded Systems",
        desc: "High-performance firmware development with C/C++ and Real-Time Operating Systems.",
        tools: "ARM • FreeRTOS • STM32",
        icon: Cpu,
        accent: "#ff0055",
    },
    {
        title: "IoT Architecture",
        desc: "End-to-end sensor-to-cloud security, data pipelines, and edge compute nodes.",
        tools: "MQTT • LoRaWAN • Azure",
        icon: Wifi,
        accent: "#00f2ff",
    },
    {
        title: "PCB Engineering",
        desc: "Multi-layer high-speed digital design, impedance matching, and DFM optimization.",
        tools: "KiCAD • Altium • SMT",
        icon: CircuitBoard,
        accent: "#ff0055",
    },
    {
        title: "VLSI & RTL",
        desc: "Digital logic synthesis, Verilog modeling, and FPGA hardware acceleration.",
        tools: "Verilog • FPGA • Vivado",
        icon: Zap,
        accent: "#ff0055",
    },
    {
        title: "Fullstack Systems",
        desc: "Scalable real-time telemetry dashboards and industrial automation backends.",
        tools: "Next.js • Node.js • Grafana",
        icon: LayoutTemplate,
        accent: "#00f2ff",
    },
    {
        title: "Edge Intelligence",
        desc: "Integrating neural networks and computer vision for autonomous edge analytics.",
        tools: "TinyML • OpenCV • PyTorch",
        icon: Bot,
        accent: "#00f2ff",
    },
];

export function DomainRoles() {
    return (
        <section className="relative py-32 bg-[#020617] overflow-hidden" id="expertise">
            <Container>
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-[#00f2ff] font-black text-[10px] uppercase tracking-[0.4em] mb-6 bg-[#00f2ff]/5 px-5 py-2 rounded-full border border-[#00f2ff]/10"
                    >
                        Versatile Systems Engineer
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-none"
                    >
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ff0055] font-black">Expertise</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00f2ff] to-[#ff0055] rounded-full" />
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
                    {EXPERTISE.map((domain, i) => {
                        const Icon = domain.icon;
                        return (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={cn(
                                    "group relative flex flex-col p-8 lg:p-10 rounded-[2.5rem] border border-white/5 transition-all duration-500 bg-[#0b1220]/40 backdrop-blur-3xl hover:border-white/10 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                                )}
                            >
                                <div className="flex items-center gap-5 mb-8">
                                    <div 
                                        className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shadow-2xl transition-transform group-hover:scale-110"
                                        style={{ color: domain.accent }}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase leading-none">
                                        {domain.title}
                                    </h3>
                                </div>
                                
                                <p className="text-xs text-zinc-400 leading-relaxed mb-8 flex-1 font-medium italic">
                                    "{domain.desc}"
                                </p>
                                
                                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: domain.accent }} />
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                        {domain.tools}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
