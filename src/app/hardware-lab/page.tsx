"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PCBViewer } from "@/components/hardware/PCBViewer";
import { HardwareGallery } from "@/components/hardware/HardwareGallery";
import { Cpu, Box, Radio, Camera, Compass, GitMerge, Star, Code2 } from "lucide-react";

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
        <main className="min-h-screen bg-[#020617] pb-20">
            <PageHero
                badge="R&D Environment · Physical Logic"
                badgeIconName="Cpu"
                title="Hardware Lab"
                description="Synthesizing high-performance silicon logic, custom board architectures, and edge intelligence systems."
                accentColor="blue"
            />

            <Container>
                <div className="py-14 space-y-32">
                    
                    {/* 3D INTERACTIVE VIEWER */}
                    <section>
                        <div className="flex flex-col mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-0.5 w-12 bg-blue-500 rounded-full" />
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Interactive PCB Artifacts</h2>
                            </div>
                            <p className="text-zinc-500 text-sm max-w-xl font-medium">
                                High-fidelity 3D renderings of custom board designs. Interact with the models to inspect component placement and trace routing.
                            </p>
                        </div>
                        <div className="bg-[#0b1220]/40 border border-white/10 rounded-[2.5rem] p-4 lg:p-8 backdrop-blur-2xl">
                             <PCBViewer />
                        </div>
                    </section>

                    {/* CATEGORIZED STACK */}
                    <div className="grid grid-cols-1 gap-24">
                        {HARDWARE_CATEGORIES.map((cat, idx) => (
                            <section key={cat.id}>
                                <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                                        {cat.title}
                                    </h2>
                                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Section // 0{idx + 1}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {cat.items.map((item, i) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group relative bg-[#0b1220]/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                                        >
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-blue-400 transition-colors">{item.name}</h3>
                                                    <span className="text-[9px] font-black px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">{item.tag}</span>
                                                </div>
                                                <p className="text-xs text-zinc-500 leading-relaxed font-medium">{item.note}</p>
                                            </div>
                                            {/* Decorative Background Icon */}
                                            <Cpu className="absolute -bottom-4 -right-4 w-24 h-24 text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors -rotate-12" />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* PROTOTYPING GALLERY */}
                    <section>
                        <div className="flex flex-col mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-0.5 w-12 bg-emerald-500 rounded-full" />
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Prototyping Gallery</h2>
                            </div>
                            <p className="text-zinc-500 text-sm max-w-xl font-medium">
                                A visual log of the hands-on engineering cycle — from rapid breadboarding to finalized industrial assemblies.
                            </p>
                        </div>
                        <HardwareGallery />
                    </section>

                    {/* EXPERIMENT STREAM */}
                    <section>
                        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
                            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
                                RF & Logic Experiments
                            </h2>
                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Status // LIVE_CAPTURE</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <ExperimentMini icon={Radio} title="LoRa Mesh" color="text-amber-400" />
                            <ExperimentMini icon={Compass} title="GPS Telemetry" color="text-blue-400" />
                            <ExperimentMini icon={Camera} title="ESP32-CAM" color="text-rose-400" />
                            <ExperimentMini icon={Cpu} title="BLE Beacons" color="text-emerald-400" />
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    );
}

function ExperimentMini({ icon: Icon, title, color }: any) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0b1220]/40 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] flex flex-col items-center gap-6 hover:border-white/20 transition-all text-center group"
        >
            <div className={cn("w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-2xl", color)}>
                <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
            </div>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">{title}</span>
        </motion.div>
    );
}

// Utility for merging classes (local fallback if needed)
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
