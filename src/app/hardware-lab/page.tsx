"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Box, Radio, Camera, Compass } from "lucide-react";
import Image from "next/image";

const HARDWARE_CATEGORIES = [
  {
    id: "pcb",
    title: "PCB Design & Fabrication",
    items: [
      { name: "ESP32 Dev Board", tag: "4-Layer Stackup", note: "Impedance controlled traces for GSM antenna." },
      { name: "IoT Sensor Node", tag: "2-Layer", note: "Optimized for sub-$5 BOM production." },
      { name: "Power Management", tag: "Heavy Copper", note: "Buck-boost converter for LiPo stability." }
    ]
  },
  {
    id: "vlsi",
    title: "FPGA & VLSI Synthesis",
    items: [
      { name: "32-bit RISC ALU", tag: "Verilog", note: "Synthesized for Xilinx Artix-7 series." },
      { name: "UART Controller", tag: "RTL", note: "Custom baud-rate generation and parity check." },
      { name: "State Machine", tag: "FSM", note: "Low-latency control logic for sensor polling." }
    ]
  }
];

export default function HardwareLabPage() {
    return (
        <main className="min-h-screen bg-[#020617] pt-24 pb-16">
            <Container>
                {/* Hero Section */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Cpu className="w-3 h-3" /> Electronics Workshop
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Hardware Lab
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Prototyping high-performance circuits and synthesizing silicon logic for edge intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-20">
                    
                    {/* Section 1 & 2: PCB & VLSI */}
                    {HARDWARE_CATEGORIES.map((cat, idx) => (
                        <section key={cat.id}>
                            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight border-b border-white/5 pb-4">
                                {cat.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cat.items.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
                                    >
                                        <div className="w-full aspect-video bg-black/40 rounded-xl mb-4 flex items-center justify-center border border-white/5 group-hover:bg-blue-500/5 transition-colors overflow-hidden relative">
                                            <span className="text-[10px] font-mono text-blue-400 tracking-tighter opacity-40 group-hover:opacity-100">[ HARDWARE_SNAPSHOT_RAW ]</span>
                                        </div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-white font-bold">{item.name}</h3>
                                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{item.tag}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-relaxed">{item.note}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Section 3: Component Experiments */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8 tracking-tight border-b border-white/5 pb-4">
                            RF & Component Prototyping
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <ExperimentMini icon={Radio} title="LoRa Mesh" />
                            <ExperimentMini icon={Compass} title="GPS Telemetry" />
                            <ExperimentMini icon={Camera} title="ESP32-CAM" />
                            <ExperimentMini icon={Cpu} title="BLE Beacons" />
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    );
}

function ExperimentMini({ icon: Icon, title }: any) {
    return (
        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/10 transition-colors text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs font-bold text-zinc-300">{title}</span>
        </div>
    );
}
