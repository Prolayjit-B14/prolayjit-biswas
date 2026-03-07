"use client";

import { motion } from "framer-motion";
import { Cpu, Maximize } from "lucide-react";

export function HardwareGallery() {
    const items = [
        { title: "ESP32 Custom Board", type: "PCB Layout", bg: "bg-gradient-to-br from-green-900/40 to-black" },
        { title: "Sensor Node Breadboard", type: "Prototype", bg: "bg-gradient-to-br from-blue-900/40 to-black" },
        { title: "Logic Analyzer Output", type: "Experiment", bg: "bg-gradient-to-br from-purple-900/40 to-black" },
        { title: "Wearable Device Assembly", type: "Hardware", bg: "bg-gradient-to-br from-orange-900/40 to-black" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {items.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative h-64 rounded-2xl border border-white/10 overflow-hidden group ${item.bg}`}
                >
                    {/* Simulated Image Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
                        <Cpu className="w-24 h-24 text-white/20" />
                    </div>

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize className="text-primary w-8 h-8" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                        <p className="text-primary text-xs font-bold tracking-wider mb-1 uppercase">{item.type}</p>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
