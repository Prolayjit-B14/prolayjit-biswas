"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Wifi, Zap, LayoutTemplate, CircuitBoard, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERTISE = [
    {
        title: "Embedded Systems",
        desc: "Programming microcontrollers with C/C++ and RTOS.",
        tools: "C/C++ • FreeRTOS • STM32",
        icon: Cpu,
        color: "text-blue-400",
        bg: "from-blue-500/10 to-transparent",
        border: "border-blue-500/20 hover:border-blue-400/40",
    },
    {
        title: "IoT Systems",
        desc: "Sensor to cloud architecture using MQTT.",
        tools: "MQTT • BLE • Edge Compute",
        icon: Wifi,
        color: "text-violet-400",
        bg: "from-violet-500/10 to-transparent",
        border: "border-violet-500/20 hover:border-violet-400/40",
    },
    {
        title: "PCB Design",
        desc: "High-density multi-layer board routing and fab.",
        tools: "KiCAD • Impedance • SMT",
        icon: CircuitBoard,
        color: "text-emerald-400",
        bg: "from-emerald-500/10 to-transparent",
        border: "border-emerald-500/20 hover:border-emerald-400/40",
    },
    {
        title: "VLSI Design",
        desc: "Digital logic design using RTL and FPGA synthesis.",
        tools: "Verilog • FPGA • Vivado",
        icon: Zap,
        color: "text-yellow-400",
        bg: "from-yellow-500/10 to-transparent",
        border: "border-yellow-500/20 hover:border-yellow-400/40",
    },
    {
        title: "Fullstack Web",
        desc: "Scalable telemetry dashboards and backend APIs.",
        tools: "Next.js • Node.js • SQL",
        icon: LayoutTemplate,
        color: "text-cyan-400",
        bg: "from-cyan-500/10 to-transparent",
        border: "border-cyan-500/20 hover:border-cyan-400/40",
    },
    {
        title: "AI Integration",
        desc: "LLMs and Computer Vision for edge analytics.",
        tools: "TensorFlow • GenAI • OpenCV",
        icon: Bot,
        color: "text-rose-400",
        bg: "from-rose-500/10 to-transparent",
        border: "border-rose-500/20 hover:border-rose-400/40",
    },
];

export function DomainRoles() {
    return (
        <section className="relative py-12 lg:py-16 bg-[#02050a] overflow-hidden" id="expertise">
            <Container>
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
                        Core Expertise
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                        Hardware-to-Cloud engineering spanning low-level silicon logic to highly scalable web architectures.
                    </p>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-fr">
                    {EXPERTISE.map((domain, i) => {
                        const Icon = domain.icon;
                        return (
                            <motion.div
                                key={domain.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={cn(
                                    "flex flex-col p-5 rounded-2xl border transition-colors bg-[#0b1220]",
                                    domain.border
                                )}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={cn("p-2 rounded-lg bg-black/40 border border-white/5", domain.color)}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-wide">
                                        {domain.title}
                                    </h3>
                                </div>
                                
                                <p className="text-zinc-400 leading-relaxed mb-4 flex-1 text-sm">
                                    {domain.desc}
                                </p>
                                
                                <p className={cn("text-[10px] font-bold uppercase tracking-widest mt-auto", domain.color)}>
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
