"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Server, CircuitBoard, Wifi, LayoutTemplate, Zap } from "lucide-react";

export function DomainRoles() {
    const domains = [
        {
            title: "Embedded Systems Engineer",
            desc: "Programming microcontrollers (ESP32, STM32) with C/C++ & RTOS.",
            icon: Cpu,
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            title: "PCB & Hardware Designer",
            desc: "End-to-end schematic capture and 3D routing in KiCAD/Altium.",
            icon: CircuitBoard,
            color: "text-green-400",
            bg: "bg-green-400/10"
        },
        {
            title: "IoT Solutions Architect",
            desc: "Building edge-to-cloud architectures with BLE, WiFi, and MQTT.",
            icon: Wifi,
            color: "text-purple-400",
            bg: "bg-purple-400/10"
        },
        {
            title: "VLSI & Digital Logic",
            desc: "Designing logic architectures with Verilog, VHDL, and FPGAs.",
            icon: Zap,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10"
        },
        {
            title: "Full-Stack Web Dev",
            desc: "Creating high-performance SaaS dashboards with Next.js & React.",
            icon: LayoutTemplate,
            color: "text-rose-400",
            bg: "bg-rose-400/10"
        },
        {
            title: "Backend Services",
            desc: "Building scalable REST/GraphQL APIs and managing databases.",
            icon: Server,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10"
        }
    ];

    return (
        <section className="relative py-16 bg-[#030712] border-t border-white/5 z-10">
            <Container>
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-glow">
                        Core Domains & Roles
                    </h2>
                    <p className="text-[#94a3b8] text-sm max-w-2xl">
                        Bridging the gap between low-level hardware design and high-level software architectures.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={domain.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all flex flex-col items-center text-center hover:-translate-y-1"
                        >
                            <div className={`p-4 rounded-2xl mb-4 ${domain.bg} ${domain.color} inline-flex shadow-[0_4px_15px_rgba(0,0,0,0.5)]`}>
                                <domain.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-[#f8fafc] font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                {domain.title}
                            </h3>
                            <p className="text-[#94a3b8] text-xs leading-relaxed">
                                {domain.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
