"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Briefcase, GraduationCap, Trophy, Calendar } from "lucide-react";

export function Timeline() {
    const events = [
        {
            year: "2023 - Present",
            title: "B.Tech Electronics (VLSI)",
            subtitle: "MAKAUT, Kolkata",
            description: "Embedded systems, PCB design, VLSI circuitry, and IoT.",
            icon: GraduationCap,
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        },
        {
            year: "Aug 2024",
            title: "Smart India Hackathon",
            subtitle: "National Level",
            description: "Developed 'She Shield' wearable safety device with BLE & GPS.",
            icon: Trophy,
            color: "text-yellow-400",
            bg: "bg-yellow-400/10"
        },
        {
            year: "Mar 2024",
            title: "Frontend & UI/UX Design",
            subtitle: "SargamAI",
            description: "Built an AI-powered music platform via Next.js & Gemini.",
            icon: Briefcase,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            year: "2021 - 2023",
            title: "Higher Secondary (Science)",
            subtitle: "Physics, Chem, Math",
            description: "Foundational skills for hardware engineering.",
            icon: GraduationCap,
            color: "text-blue-400",
            bg: "bg-blue-400/10"
        }
    ];

    return (
        <section id="timeline" className="relative py-16 bg-background overflow-hidden border-t border-white/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-glow mb-2">
                            Career & Education
                        </h2>
                        <p className="text-muted-foreground text-sm max-w-xl">
                            Key milestones in my academic and professional journey.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-card p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex gap-4 items-start group"
                        >
                            <div className={`p-3 rounded-xl ${event.bg} ${event.color} shrink-0 group-hover:scale-110 transition-transform`}>
                                <event.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <div className={`flex items-center gap-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider ${event.color}`}>
                                    <Calendar className="h-3 w-3" />
                                    {event.year}
                                </div>
                                <h3 className="text-base font-bold text-[#f8fafc] leading-tight mb-1">{event.title}</h3>
                                <h4 className="text-xs font-semibold text-[#94a3b8] mb-2">{event.subtitle}</h4>
                                <p className="text-xs text-[#6b7280] leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
