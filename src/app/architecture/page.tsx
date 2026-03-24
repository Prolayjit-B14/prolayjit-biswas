"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Cpu, Cloud, Shield, Share2, Layers, Server, Database, Monitor } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-[#020617] pb-24 relative overflow-hidden">
            <PageHero
                badge="High-Fidelity · System Design"
                badgeIconName="Share2"
                title="System Architecture"
                description="Orchestrating the deterministic flow between physical silicon logic and global cloud telemetry systems. Focused on resilient, low-latency edge computing."
                accentColor="blue"
            />
            
            <Container>

                <div className="grid grid-cols-1 gap-32">
                    
                    {/* Section 1: IoT Architecture */}
                    <section>
                        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <Layers className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-white tracking-tight uppercase">
                                        IoT Stack <span className="text-zinc-500">Hierarchy</span>
                                    </h2>
                                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">End-to-End Data Lifecycle</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ArchCard step="PHASE 01" title="Sensor Layer" items={["BME280/SHT31 Sensors", "I2C 400kHz Bus", "Low-Pass Filtering"]} icon={Cpu} color="text-emerald-400" />
                            <ArchCard step="PHASE 02" title="Edge Processor" items={["ESP32 Dual-Core (C++)", "FreeRTOS Scheduling", "Internal DAC Control"]} icon={Cpu} color="text-amber-400" />
                            <ArchCard step="PHASE 03" title="Telemetry" items={["MQTT Over TLS 1.2", "QoS 1 Deliverability", "Heartbeat Monitor"]} icon={Share2} color="text-blue-400" />
                            <ArchCard step="PHASE 04" title="Ingress Layer" items={["Node.js / Express", "Firebase Admin SDK", "JWT Authentication"]} icon={Server} color="text-violet-400" />
                            <ArchCard step="PHASE 05" title="Data Store" items={["Firestore DB Cache", "Real-time State Tree", "TimeSeries Analytics"]} icon={Database} color="text-rose-400" />
                            <ArchCard step="PHASE 06" title="Control Surface" items={["Next.js Responsive UI", "WebSocket Streams", "Device Shadow Sync"]} icon={Monitor} color="text-emerald-400" />
                        </div>
                    </section>

                    {/* Section 2: Embedded System Architecture */}
                    <section>
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-12 w-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Cpu className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight uppercase">
                                    Logic <span className="text-zinc-500">Pipeline</span>
                                </h2>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Hardware-in-the-Loop Logic</p>
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-[#0b1220]/50 border border-white/10 rounded-[40px] p-12 overflow-hidden backdrop-blur-md">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                                    <FlowItem label="Sensor" bg="bg-blue-600/10" border="border-blue-500/20" text="text-blue-400" />
                                    <FlowArrow />
                                    <FlowItem label="Op-Amp/ADC" bg="bg-emerald-600/10" border="border-emerald-500/20" text="text-emerald-400" />
                                    <FlowArrow />
                                    <FlowItem label="Decision Engine" bg="bg-violet-600/10" border="border-violet-500/20" text="text-violet-400" />
                                    <FlowArrow />
                                    <FlowItem label="Firmware (C++)" bg="bg-amber-600/10" border="border-amber-500/20" text="text-amber-400" />
                                    <FlowArrow />
                                    <FlowItem label="Actionable Output" bg="bg-rose-600/10" border="border-rose-500/20" text="text-rose-400" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Data Security */}
                    <section className="mb-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="h-12 w-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-8">
                                    <Shield className="w-6 h-6 text-rose-400" />
                                </div>
                                <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-6">
                                    Hardened <br />
                                    <span className="text-rose-500">Security Layer</span>
                                </h2>
                                <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
                                    Ensuring full integrity from the hardware level up to the user interface with end-to-end encryption protocols.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <SecurityFeature title="Hardware Trust" desc="Device authentication via SHA-256 signatures and hardware encryption blocks on MCU." />
                                <SecurityFeature title="Protocol Security" desc="TLS 1.2/1.3 encrypted tunnels for all MQTT and cloud-side API communications." />
                                <SecurityFeature title="IAM & Access" desc="Role-based access control with Firebase Auth and isolated API endpoints." />
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    );
}

function ArchCard({ step, title, items, icon: Icon, color = "text-emerald-400" }: any) {
    return (
        <div className="bg-[#0b1220]/50 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all hover:border-white/20 group">
            <div className="flex items-center justify-between mb-8">
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${color}`}>{step}</span>
                <Icon className={`w-5 h-5 ${color} opacity-40 group-hover:opacity-100 transition-opacity`} />
            </div>
            <h3 className="text-white text-xl font-black mb-4 uppercase tracking-tighter">{title}</h3>
            <ul className="space-y-3">
                {items.map((it: string) => (
                    <li key={it} className="text-xs text-zinc-500 flex items-center gap-3">
                        <div className={`w-1 h-1 rounded-full ${color.replace('text-', 'bg-')} opacity-40`} /> {it}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FlowItem({ label, bg, border, text }: any) {
    return (
        <div className={`px-6 py-4 rounded-2xl border ${bg} ${border} ${text} font-black uppercase text-[10px] tracking-widest min-w-[140px] text-center shadow-xl shadow-black/40`}>
            {label}
        </div>
    );
}

function FlowArrow() {
    return (
        <div className="hidden md:flex items-center justify-center h-px w-8 bg-zinc-800 relative">
            <div className="absolute right-0 w-1.5 h-1.5 border-r border-t border-zinc-800 rotate-45 -translate-y-px" />
        </div>
    );
}

function SecurityFeature({ title, desc }: any) {
    return (
        <div className="p-8 bg-[#0b1220]/50 border border-white/10 rounded-3xl hover:border-rose-500/30 transition-all group">
            <h3 className="text-white font-black text-sm mb-3 flex items-center gap-3 uppercase tracking-tighter">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" /> {title}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">{desc}</p>
        </div>
    );
}
