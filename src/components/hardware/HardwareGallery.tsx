"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize, Filter, Search, Layers } from "lucide-react";

const LAB_ITEMS = [
    {
        id: "esp-board",
        title: "ESP32 Custom Board",
        category: "PCB Design",
        description: "Custom routed 2-layer PCB for IoT sensor aggregation with power management.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    {
        id: "sensor-node",
        title: "Sensor Node Breadboard",
        category: "Prototyping",
        description: "Initial breadboard testing of I2C sensors before committing to a PCB layout.",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80"
    },
    {
        id: "logic-analyzer",
        title: "Logic Analyzer Output",
        category: "Analysis",
        description: "Debugging SPI communication protocols between MCU and SD card module.",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80"
    },
    {
        id: "wearable-assembly",
        title: "She Shield Assembly",
        category: "Hardware",
        description: "Final 3D printed casing and component assembly for the wearable safety device.",
        image: "https://images.unsplash.com/photo-1598327105655-bfa766547144?w=800&q=80"
    },
    {
        id: "motor-driver",
        title: "L298N Motor Control",
        category: "Prototyping",
        description: "Testing dual H-bridge motor drivers for autonomous robot movement.",
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
    },
    {
        id: "rfid-module",
        title: "RFID Access Control",
        category: "Hardware",
        description: "Integrating MFRC522 tags with solenoid locks for secure door access.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
    }
];

export function HardwareGallery() {
    const [search, setSearch] = useState("");

    const allCategories = useMemo(() => {
        const catSet = new Set<string>();
        LAB_ITEMS.forEach(item => catSet.add(item.category));
        return ["All", ...Array.from(catSet)];
    }, []);

    const [category, setCategory] = useState<string>("All");

    const filteredItems = useMemo(() => {
        return LAB_ITEMS.filter((item) => {
            const matchesSearch =
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.description.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = category === "All" || item.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [search, category]);

    return (
        <div className="space-y-8">
            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white/[0.02] border border-white/5 rounded-2xl p-2 backdrop-blur-md">

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1 w-full md:w-auto p-1">
                    {allCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 z-10 ${category === cat ? "text-primary" : "text-[#94a3b8] hover:text-[#f8fafc]"
                                }`}
                        >
                            {category === cat && (
                                <motion.div
                                    layoutId="lab-category"
                                    className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                />
                            )}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:max-w-[240px] group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-[#6b7280] group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search gallery..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="block w-full pl-10 pr-3 py-2.5 bg-[#0f172a]/50 border border-white/10 rounded-xl text-sm placeholder:text-[#6b7280] focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:bg-[#0f172a] transition-all"
                    />
                </div>
            </div>

            {/* Gallery Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="relative h-72 rounded-2xl border border-white/10 overflow-hidden group bg-[#0a0f1c] cursor-zoom-in"
                            >
                                {/* Image Background */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                                />

                                {/* Overlay icon */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <Maximize className="text-primary w-10 h-10 drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                                </div>

                                {/* Content Tag */}
                                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#f8fafc]">
                                    <Layers className="h-3 w-3 text-primary" />
                                    {item.category}
                                </div>

                                {/* Bottom Info */}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-[#f8fafc] group-hover:text-primary transition-colors mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full py-20 text-center flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
                        >
                            <Filter className="h-8 w-8 text-[#6b7280] mb-3" />
                            <p className="text-[#f8fafc] font-medium text-lg">No prototypes found</p>
                            <p className="text-[#6b7280] text-sm">Try adjusting your search or category filter.</p>
                            <button
                                onClick={() => { setSearch(""); setCategory("All"); }}
                                className="mt-4 text-primary text-sm font-semibold hover:underline"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
