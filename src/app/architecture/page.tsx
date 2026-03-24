"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Cloud, Shield, Share2, Layers, Server, Database, Monitor } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#020617] pt-24 pb-16">
            <Container>
                {/* Hero Section */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Share2 className="w-3 h-3" /> System Design
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        System Architecture
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Designing scalable hardware-software systems with deep integration from edge silicon to cloud dashboards.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:gap-20">
                    
                    {/* Section 1: IoT Architecture */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Layers className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-2xl font-bold text-white tracking-tight text-glow">
                                01 — IoT Architecture
                            </h2>
                        </div>
                        
                        <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-8 lg:p-12 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                                <ArchCard step="01" title="Sensor Layer" items={["Analog Sensors", "Calibration", "I2C/SPI Bus"]} icon={Cpu} />
                                <ArchCard step="02" title="Edge Compute" items={["ESP32 Dual-Core", "RTOS Tasks", "Data Filtering"]} icon={Cpu} />
                                <ArchCard step="03" title="Communication" items={["MQTT Protocol", "WPA2 Security", "Low Latency"]} icon={Share2} />
                                <ArchCard step="04" title="Cloud Backend" items={["Node.js Server", "Firebase Auth", "WebSockets"]} icon={Server} />
                                <ArchCard step="05" title="Data Persistence" items={["Firestore DB", "Redis Cache", "Time-series Storage"]} icon={Database} />
                                <ArchCard step="06" title="Frontend App" items={["Next.js 14", "Framer Motion", "Live Analytics"]} icon={Monitor} />
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Embedded System Architecture */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Cpu className="w-6 h-6 text-blue-400" />
                            <h2 className="text-2xl font-bold text-white tracking-tight text-glow">
                                02 — Embedded System Flow
                            </h2>
                        </div>
                        
                        <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-8 overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-center font-mono text-sm">
                                <FlowItem label="Sensor" bg="bg-blue-500/10" border="border-blue-500/30" text="text-blue-400" />
                                <FlowArrow />
                                <FlowItem label="ADC" bg="bg-emerald-500/10" border="border-emerald-500/30" text="text-emerald-400" />
                                <FlowArrow />
                                <FlowItem label="MCU (C++)" bg="bg-violet-500/10" border="border-violet-500/30" text="text-violet-400" />
                                <FlowArrow />
                                <FlowItem label="Firmware" bg="bg-amber-500/10" border="border-amber-500/30" text="text-amber-400" />
                                <FlowArrow />
                                <FlowItem label="Output" bg="bg-rose-500/10" border="border-rose-500/30" text="text-rose-400" />
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Cloud Integration Pipeline */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Cloud className="w-6 h-6 text-violet-400" />
                            <h2 className="text-2xl font-bold text-white tracking-tight text-glow">
                                03 — Cloud Integration Pipeline
                            </h2>
                        </div>
                        
                        <div className="bg-[#0b1220] border border-white/10 rounded-3xl p-8 lg:p-12">
                            <div className="relative h-64 flex items-center justify-center">
                                {/* SVG glowing lines would go here, using a simpler visual grid for now */}
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full h-full font-bold text-[10px] uppercase tracking-tighter">
                                    <PipelineNode icon={Cpu} name="ESP32" />
                                    <PipelineNode icon={Share2} name="WiFi" />
                                    <PipelineNode icon={Share2} name="MQTT Broker" />
                                    <PipelineNode icon={Server} name="API Gateway" />
                                    <PipelineNode icon={Database} name="DB / Cloud" />
                                    <PipelineNode icon={Monitor} name="Dashboard" color="text-emerald-400" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Security Layer */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Shield className="w-6 h-6 text-rose-400" />
                            <h2 className="text-2xl font-bold text-white tracking-tight text-glow">
                                04 — Security & Encryption
                            </h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <SecurityFeature title="Hardware Auth" desc="Device-unique keys stored in secure storage partitions." />
                            <SecurityFeature title="API Security" desc="Bearer tokens and strict CORS policies on Node.js middleware." />
                            <SecurityFeature title="Encryption" desc="TLS 1.2 for all MQTT and HTTPS cloud communication." />
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    );
}

function ArchCard({ step, title, items, icon: Icon }: any) {
    return (
        <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/[0.08] transition-all hover:border-white/20">
            <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">{step}</span>
                <Icon className="w-5 h-5 text-emerald-500/50" />
            </div>
            <h3 className="text-white font-bold mb-3">{title}</h3>
            <ul className="space-y-1.5">
                {items.map((it: string) => (
                    <li key={it} className="text-xs text-zinc-400 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-500/50" /> {it}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FlowItem({ label, bg, border, text }: any) {
    return (
        <div className={`px-4 py-2.5 rounded-xl border ${bg} ${border} ${text} font-bold min-w-[100px] shadow-lg shadow-black/20`}>
            {label}
        </div>
    );
}

function FlowArrow() {
    return <div className="hidden md:block text-zinc-600 font-bold">→</div>;
}

function PipelineNode({ icon: Icon, name, color = "text-white" }: any) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 group hover:border-white/30 transition-all">
            <Icon className={`w-6 h-6 ${color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform`} />
            <span className={`text-[10px] font-bold text-center ${color}`}>{name}</span>
        </div>
    );
}

function SecurityFeature({ title, desc }: any) {
    return (
        <div className="p-6 bg-[#0b1220] border border-white/10 rounded-2xl hover:border-rose-500/30 transition-colors">
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500" /> {title}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{desc}</p>
        </div>
    );
}
