"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Wifi, Server, Database, LayoutDashboard, ArrowRight } from "lucide-react";

const ARCHITECTURE_NODES = [
    { id: "esp32", label: "ESP32 Edge", icon: Cpu, color: "text-blue-400", border: "border-blue-500/30" },
    { id: "mqtt", label: "MQTT Broker", icon: Wifi, color: "text-violet-400", border: "border-violet-500/30" },
    { id: "nodejs", label: "Node.js API", icon: Server, color: "text-emerald-400", border: "border-emerald-500/30" },
    { id: "db", label: "Database", icon: Database, color: "text-amber-400", border: "border-amber-500/30" },
    { id: "ui", label: "Dashboard UI", icon: LayoutDashboard, color: "text-rose-400", border: "border-rose-500/30" },
];

export function ProjectArchitecture() {
    return (
        <section className="relative py-24 bg-[#030712] overflow-hidden" id="architecture">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <Container>
                <div className="flex flex-col items-center text-center mb-20 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                        System Architecture
                    </h2>
                    <p className="text-[#94a3b8] text-lg max-w-2xl">
                        A typical full-stack IoT flow demonstrating seamless hardware-to-cloud data ingestion and visualization.
                    </p>
                </div>

                {/* Diagram Container */}
                <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto z-10 gap-8 md:gap-0">
                    
                    {/* Continuous glowing line behind nodes on Desktop */}
                    <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-rose-500/20 -translate-y-1/2 z-0" />

                    {ARCHITECTURE_NODES.map((node, i) => {
                        const Icon = node.icon;
                        return (
                            <div key={node.id} className="relative z-10 flex flex-col items-center group">
                                {/* Node Circle */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className={`relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#050b14] border-2 ${node.border} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                                >
                                    {/* Neon Glow */}
                                    <div className={`absolute inset-0 rounded-full blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-300 bg-current ${node.color}`} />
                                    
                                    <Icon className={`w-8 h-8 md:w-10 md:h-10 ${node.color} drop-shadow-md`} />
                                </motion.div>

                                {/* Label */}
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.15 + 0.2 }}
                                    className="mt-4 text-sm font-semibold text-zinc-300 tracking-wide text-center"
                                >
                                    {node.label}
                                </motion.span>

                                {/* Mobile Arrow (except last) */}
                                {i !== ARCHITECTURE_NODES.length - 1 && (
                                    <div className="md:hidden mt-6 text-white/20">
                                        <ArrowRight className="w-6 h-6 rotate-90" />
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Animated Data Packets (Desktop only) */}
                    <div className="hidden md:block absolute top-[calc(50%-4px)] left-0 right-0 h-2 z-20 pointer-events-none">
                        <motion.div
                            animate={{ x: ["0%", "1000%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                        />
                         <motion.div
                            animate={{ x: ["0%", "1000%"] }}
                            transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
