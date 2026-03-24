"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Trophy, Blocks, Cpu } from "lucide-react";

export function TrustBar() {
    const indicators = [
        { label: "Smart India Hackathon Finalist", icon: Trophy, bg: "bg-rose-500/10", border: "border-rose-500/20", color: "text-rose-400" },
        { label: "MAKATHON Winner", icon: Trophy, bg: "bg-amber-500/10", border: "border-amber-500/20", color: "text-amber-400" },
        { label: "6+ Projects", icon: Blocks, bg: "bg-emerald-500/10", border: "border-emerald-500/20", color: "text-emerald-400" },
        { label: "ESP32 | FPGA | KiCAD", icon: Cpu, bg: "bg-blue-500/10", border: "border-blue-500/20", color: "text-blue-400" },
    ];

    return (
        <section className="relative py-8 bg-[#02050a] border-y border-white/5 overflow-hidden">
            <Container>
                <div className="flex flex-wrap justify-center gap-4">
                    {indicators.map((indicator, i) => {
                        const Icon = indicator.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${indicator.bg} ${indicator.border}`}
                            >
                                <Icon className={`w-3.5 h-3.5 ${indicator.color}`} />
                                <span className="text-xs md:text-sm font-bold tracking-wide text-zinc-300 pointer-events-none">{indicator.label}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
