"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ClipboardList, FlaskConical, Wifi, Sun, Calculator, Terminal } from "lucide-react";

const LAB_LOGS = [
    {
        date: "MAR 24, 2024",
        title: "ESP32 WiFi Handshake Latency Test",
        experiment: "Measuring time-to-connect with WPA2-Enterprise vs WPA2-PSK for edge nodes.",
        result: "WPA2-PSK consistently achieved 1.2s faster handshake. Optimized WDT for sub-2s total wake-to-MQTT cycle.",
        icon: Wifi,
        tag: "Embedded"
    },
    {
        date: "MAR 18, 2024",
        title: "Soil Sensor Calibration Curve",
        experiment: "Mapping raw ADC values from capacitive sensor to volumetric water content (%) using dry vs saturated soil samples.",
        result: "Linear regression fit (R²=0.982) achieved. Implemented map() function adjustment in firmware.",
        icon: Calculator,
        tag: "IoT Fundamentals"
    },
    {
        date: "MAR 10, 2024",
        title: "Solar LiPo Charging Efficiency",
        experiment: "Testing TP4056 charging current under indirect sunlight using a 6V 2W panel.",
        result: "Average 150mA charge current achieved. Added 1000uF capacitor to handle surge during ESP32 WiFi transmission.",
        icon: Sun,
        tag: "Power"
    }
];

export default function LabNotesPage() {
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
                        <FlaskConical className="w-3 h-3" /> Experimental Logs
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Lab Notes
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Raw engineering data, daily experiments, and performance metrics captured during active development.
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {LAB_LOGS.map((log, idx) => (
                        <motion.div
                            key={log.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex gap-6 md:gap-10"
                        >
                            {/* Date Column */}
                            <div className="hidden md:flex flex-col items-end pt-2 w-32 shrink-0">
                                <span className="text-xs font-black text-zinc-500 tracking-tighter uppercase whitespace-nowrap">
                                    {log.date}
                                </span>
                                <div className="mt-4 w-px flex-1 bg-white/5 group-last:bg-transparent" />
                            </div>

                            {/* Content Bubble */}
                            <div className="flex-1 bg-[#0b1220] border border-white/5 rounded-3xl p-8 hover:border-blue-500/20 transition-all hover:bg-white/[0.02]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                                        <log.icon className="w-5 h-5 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                                                {log.tag}
                                            </span>
                                            <span className="md:hidden text-[9px] font-bold text-zinc-500">{log.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {log.title}
                                        </h3>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm leading-relaxed">
                                    <div className="space-y-2">
                                        <h4 className="text-[10px] uppercase font-black text-zinc-500 tracking-[0.2em] flex items-center gap-2">
                                            <Terminal className="w-3 h-3" /> Experiment
                                        </h4>
                                        <p className="text-zinc-400 italic">“{log.experiment}”</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-[10px] uppercase font-black text-emerald-500/70 tracking-[0.2em] flex items-center gap-2">
                                            <ClipboardList className="w-3 h-3" /> Outcome
                                        </h4>
                                        <p className="text-emerald-400/90 font-medium">{log.result}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Insight */}
                <div className="mt-20 text-center">
                    <p className="text-xs font-mono text-zinc-600">
                        [ RECURRING_TASKS: OSCILLOSCOPE_CALIBRATION, FIRMWARE_VERIFICATION, CLOUD_LATENCY_AUDIT ]
                    </p>
                </div>
            </Container>
        </main>
    );
}
