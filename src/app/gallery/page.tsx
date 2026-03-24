"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { hackathons } from "@/data/hackathons";
import { projects } from "@/data/projects";
import { Image as ImageIcon, Layers } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
    Hackathon: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    Hardware:  "bg-blue-500/15 text-blue-300 border-blue-500/30",
    Software:  "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    IoT:       "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    AI:        "bg-purple-500/15 text-purple-300 border-purple-500/30",
};

export default function GalleryPage() {
    const galleryItems = [
        ...hackathons.map(h => ({
            title: h.name, subtitle: h.project,
            imageUrl: h.imageUrl, category: "Hackathon", date: h.date
        })),
        ...projects.filter(p => p.imageUrl).map(p => ({
            title: p.title, subtitle: p.role,
            imageUrl: p.imageUrl, category: p.category, date: p.date
        }))
    ].filter(item => item.imageUrl);

    return (
        <div className="relative bg-[#030712] min-h-screen">
            <PageHero
                badge="Visual Portfolio"
                badgeIconName="ImageIcon"
                title="Project Gallery"
                description="A visual journey through hardware prototypes, hackathon projects, wearable builds, and software deployments."
                accentColor="amber"
                align="center"
            />

            <Container>
                <div className="py-14">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { label: "Total Showcase", value: galleryItems.length },
                            { label: "Hackathon Projects", value: hackathons.length },
                            { label: "Engineering Projects", value: projects.length },
                            { label: "Categories", value: 5 },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="glass-card p-5 rounded-2xl border border-white/5 text-center"
                            >
                                <p className="text-3xl font-black text-glow mb-1">{stat.value}</p>
                                <p className="text-xs text-[#6b7280] font-semibold uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {galleryItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                                whileHover={{ y: -6 }}
                                className="group relative rounded-2xl overflow-hidden border border-white/8 aspect-[4/3] cursor-pointer"
                            >
                                <Image
                                    src={item.imageUrl!}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-75 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
                                />
                                {/* Always-visible category chip */}
                                <div className="absolute top-3 left-3">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${CATEGORY_COLORS[item.category] ?? "bg-white/10 text-white border-white/20"}`}>
                                        <Layers className="w-3 h-3" /> {item.category}
                                    </span>
                                </div>
                                {/* Hover slide-up overlay */}
                                <motion.div
                                    className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
                                    initial={{ y: "100%", opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <h3 className="text-base font-bold text-white leading-snug mb-1">{item.title}</h3>
                                    <div className="flex justify-between text-xs text-[#94a3b8]">
                                        <span>{item.subtitle}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
