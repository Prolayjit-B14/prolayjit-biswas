"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Search, PenTool, Cpu, Layers, Code, Cloud, CheckCircle, Rocket, ArrowRight } from "lucide-react";

const WORKFLOW_STEPS = [
    { icon: Search, title: "Problem & Research", desc: "Defining constraints, market research, and component selection." },
    { icon: PenTool, title: "Circuit Design", desc: "Schematic capture and electrical simulation." },
    { icon: Layers, title: "PCB Design", desc: "4-layer routing, impedance matching, and Gerber generation." },
    { icon: Code, title: "Firmware Coding", desc: "Low-level C++/Verilog development and logic synthesis." },
    { icon: Cloud, title: "Cloud Integration", desc: "MQTT bridge, API Gateway, and real-time dashboarding." },
    { icon: CheckCircle, title: "Rigorous Testing", desc: "OSC monitoring, thermal analysis, and edge-case validation." },
    { icon: Rocket, title: "Deployment", desc: "Final assembly, OTA updates, and production handoff." }
];

export default function WorkflowPage() {
    return (
        <main className="min-h-screen bg-[#020617] pb-20">
            <PageHero
                badge="Lifecycle · Engineering Protocol"
                badgeIconName="PenTool"
                title="System Workflow"
                description="A methodical approach to solving complex engineering problems, from raw silicon logic to cloud-connected hardware products."
                accentColor="amber"
            />

            <Container>

                <div className="max-w-4xl mx-auto relative px-6 md:px-0">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-blue-500/50 to-emerald-500/50 hidden md:block" />
                    
                    <div className="flex flex-col gap-12 lg:gap-20">
                        {WORKFLOW_STEPS.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${
                                    idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div className={`p-8 bg-[#0b1220] border border-white/10 rounded-3xl hover:border-amber-500/30 transition-all group ${
                                        idx % 2 === 0 ? "md:text-right" : "md:text-left"
                                    }`}>
                                        <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl ${
                                            idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                                        }`}>
                                            <step.icon className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {idx + 1}. {step.title}
                                        </h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Flow Node (Center Indicator) */}
                                <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#020617] bg-[#0b1220] shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-emerald-500/20 border border-white/5 backdrop-blur-3xl animate-pulse">
                        <div className="px-8 py-4 rounded-xl bg-[#0b1220]/80">
                            <span className="text-sm font-bold text-white tracking-widest flex items-center gap-3">
                                <ArrowRight className="w-4 h-4 text-emerald-400" /> ITERATION CYCLE COMPLETE
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
