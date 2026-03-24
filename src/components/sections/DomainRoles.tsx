"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Wifi, Zap, LayoutTemplate } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERTISE = [
    {
        title: "Embedded Systems",
        desc: "Programming ESP32, STM32 with C/C++ and RTOS",
        tools: "C/C++ • FreeRTOS • Microcontrollers",
        icon: Cpu,
        color: "text-blue-400",
        bg: "from-blue-500/10 to-transparent",
        border: "border-blue-500/20 hover:border-blue-400/40",
        glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
        accent: "#3b82f6",
    },
    {
        title: "IoT Systems",
        desc: "Sensor to cloud architecture using MQTT and APIs",
        tools: "MQTT • BLE • Cloud Integration",
        icon: Wifi,
        color: "text-violet-400",
        bg: "from-violet-500/10 to-transparent",
        border: "border-violet-500/20 hover:border-violet-400/40",
        glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]",
        accent: "#8b5cf6",
    },
    {
        title: "VLSI Design",
        desc: "Digital logic design using Verilog and FPGA",
        tools: "Verilog • FPGA • Digital Logic",
        icon: Zap,
        color: "text-yellow-400",
        bg: "from-yellow-500/10 to-transparent",
        border: "border-yellow-500/20 hover:border-yellow-400/40",
        glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]",
        accent: "#eab308",
    },
    {
        title: "Fullstack Development",
        desc: "Next.js, Node.js backend with database integration",
        tools: "Next.js • Node.js • React • SQL",
        icon: LayoutTemplate,
        color: "text-emerald-400",
        bg: "from-emerald-500/10 to-transparent",
        border: "border-emerald-500/20 hover:border-emerald-400/40",
        glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
        accent: "#10b981",
    },
];

export function DomainRoles() {
    return (
        <section className="relative py-24 bg-[#02050a] overflow-hidden" id="expertise">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                        Core Expertise
                    </h2>
                    <p className="text-[#94a3b8] text-lg max-w-2xl">
                        Hardware-to-Cloud engineering spanning low-level silicon logic to highly scalable frontend web architectures.
                    </p>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
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
                                    "group relative flex flex-col p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md overflow-hidden bg-white/5",
                                    domain.border, domain.glow
                                )}
                            >
                                {/* Radial gradient background on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at top right, ${domain.accent}15 0%, transparent 70%)` }}
                                />

                                <div className={cn("inline-flex p-4 rounded-2xl mb-6 bg-black/40 border border-white/5 w-fit shadow-md", domain.color)}>
                                    <Icon className="w-8 h-8 drop-shadow-md" />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                                    {domain.title}
                                </h3>
                                
                                <p className="text-[#94a3b8] leading-relaxed mb-6 flex-1 text-lg">
                                    {domain.desc}
                                </p>
                                
                                <p className={cn("text-xs font-bold uppercase tracking-widest mt-auto", domain.color)}>
                                    {domain.tools}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
