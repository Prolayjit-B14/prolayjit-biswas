"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Server, CircuitBoard, Wifi, LayoutTemplate, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const domains = [
    {
        title: "Embedded Systems",
        subtitle: "Engineer",
        desc: "Programming microcontrollers (ESP32, STM32, Arduino) with C/C++ and bare-metal RTOS. From sensor interfacing to interrupt-driven state machines.",
        icon: Cpu,
        color: "text-blue-400",
        bg: "from-blue-500/15 to-blue-500/5",
        border: "border-blue-500/20 hover:border-blue-400/50",
        glow: "hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]",
        size: "large",          // col-span-2 on desktop
        accent: "#3b82f6",
    },
    {
        title: "VLSI & Digital Logic",
        subtitle: "Designer",
        desc: "Designing logic architectures in Verilog, VHDL, and synthesizing for FPGAs. RTL simulation, timing analysis, and gate-level verification.",
        icon: Zap,
        color: "text-yellow-400",
        bg: "from-yellow-500/15 to-yellow-500/5",
        border: "border-yellow-500/20 hover:border-yellow-400/50",
        glow: "hover:shadow-[0_8px_40px_rgba(234,179,8,0.15)]",
        size: "large",
        accent: "#eab308",
    },
    {
        title: "PCB & Hardware",
        subtitle: "Designer",
        desc: "End-to-end schematic capture, 4-layer routing, and 3D verification in KiCAD.",
        icon: CircuitBoard,
        color: "text-emerald-400",
        bg: "from-emerald-500/15 to-emerald-500/5",
        border: "border-emerald-500/20 hover:border-emerald-400/50",
        glow: "hover:shadow-[0_8px_40px_rgba(16,185,129,0.12)]",
        size: "small",
        accent: "#10b981",
    },
    {
        title: "IoT Architecture",
        subtitle: "Builder",
        desc: "Edge-to-cloud pipelines with BLE, WiFi, MQTT, and real-time dashboards.",
        icon: Wifi,
        color: "text-violet-400",
        bg: "from-violet-500/15 to-violet-500/5",
        border: "border-violet-500/20 hover:border-violet-400/50",
        glow: "hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]",
        size: "small",
        accent: "#8b5cf6",
    },
    {
        title: "Full-Stack Web",
        subtitle: "Developer",
        desc: "High-performance apps in Next.js, React, TypeScript, and Tailwind CSS.",
        icon: LayoutTemplate,
        color: "text-rose-400",
        bg: "from-rose-500/15 to-rose-500/5",
        border: "border-rose-500/20 hover:border-rose-400/50",
        glow: "hover:shadow-[0_8px_40px_rgba(244,63,94,0.12)]",
        size: "small",
        accent: "#f43f5e",
    },
    {
        title: "Backend Services",
        subtitle: "Architect",
        desc: "Scalable REST APIs, WebSockets, cloud deployments, and database management.",
        icon: Server,
        color: "text-cyan-400",
        bg: "from-cyan-500/15 to-cyan-500/5",
        border: "border-cyan-500/20 hover:border-cyan-400/50",
        glow: "hover:shadow-[0_8px_40px_rgba(6,182,212,0.12)]",
        size: "small",
        accent: "#06b6d4",
    },
];

export function DomainRoles() {
    const large = domains.filter((d) => d.size === "large");
    const small = domains.filter((d) => d.size === "small");

    return (
        <section className="relative py-16 md:py-24 bg-[#030712] border-t border-white/5 z-10 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                        <Cpu className="w-3 h-3" /> Core Domains
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-glow">
                        What I Do Best
                    </h2>
                    <p className="text-[#94a3b8] text-sm max-w-2xl">
                        Bridging the gap between low-level hardware design and high-level software architectures — from FPGA logic gates to production web apps.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
                    {/* 2 large cards — span 2 columns each */}
                    {large.map((domain, i) => {
                        const Icon = domain.icon;
                        return (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={cn(
                                    "group relative md:col-span-2 rounded-3xl border p-7 overflow-hidden transition-all duration-300",
                                    "bg-gradient-to-br", domain.bg,
                                    domain.border, domain.glow,
                                    "backdrop-blur-sm"
                                )}
                            >
                                {/* Radial glow on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                                    style={{ background: `radial-gradient(ellipse at 20% 20%, ${domain.accent}18 0%, transparent 65%)` }}
                                />

                                <div className={cn("inline-flex p-3.5 rounded-2xl mb-5 bg-white/5 border border-white/10", domain.color)}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <p className={cn("text-[10px] font-black uppercase tracking-[0.2em] mb-1", domain.color)}>
                                    {domain.subtitle}
                                </p>
                                <h3 className="text-xl font-black text-[#f8fafc] mb-3 leading-tight group-hover:text-white transition-colors">
                                    {domain.title}
                                </h3>
                                <p className="text-sm text-[#94a3b8] leading-relaxed">
                                    {domain.desc}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* 4 small cards — span 1 column each */}
                    {small.map((domain, i) => {
                        const Icon = domain.icon;
                        return (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                                className={cn(
                                    "group relative rounded-3xl border p-6 overflow-hidden transition-all duration-300",
                                    "bg-gradient-to-br", domain.bg,
                                    domain.border, domain.glow,
                                    "backdrop-blur-sm"
                                )}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                                    style={{ background: `radial-gradient(ellipse at 30% 30%, ${domain.accent}15 0%, transparent 65%)` }}
                                />

                                <div className={cn("inline-flex p-3 rounded-xl mb-4 bg-white/5 border border-white/10", domain.color)}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <p className={cn("text-[9px] font-black uppercase tracking-[0.2em] mb-1", domain.color)}>
                                    {domain.subtitle}
                                </p>
                                <h3 className="text-base font-bold text-[#f8fafc] mb-2 leading-tight group-hover:text-white transition-colors">
                                    {domain.title}
                                </h3>
                                <p className="text-xs text-[#6b7280] leading-relaxed">
                                    {domain.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
