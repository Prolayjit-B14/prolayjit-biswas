"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Briefcase, GraduationCap, Trophy, Calendar } from "lucide-react";

export function Timeline() {
    const events = [
        {
            year: "2023 - Present",
            title: "B.Tech Electronics Engineering (VLSI)",
            subtitle: "MAKAUT, Kolkata",
            description: "Specializing in embedded systems, PCB design, VLSI circuitry, and IoT architecture.",
            icon: GraduationCap,
            color: "text-blue-400"
        },
        {
            year: "Aug 2024",
            title: "Smart India Hackathon (SIH) Participant",
            subtitle: "National Level Innovation",
            description: "Developed 'She Shield' wearable safety device with BLE, GPS tracking, and shock defense mechanism.",
            icon: Trophy,
            color: "text-yellow-400"
        },
        {
            year: "Mar 2024",
            title: "Frontend Developer & UI/UX Design",
            subtitle: "SargamAI Platform",
            description: "Built an AI-powered music analysis platform using Next.js, Web Audio API, and Gemini AI.",
            icon: Briefcase,
            color: "text-primary"
        },
        {
            year: "2021 - 2023",
            title: "Higher Secondary Education (Science)",
            subtitle: "Physics, Chemistry, Mathematics",
            description: "Developed strong foundational skills in physics and applied mathematics crucial for hardware engineering.",
            icon: GraduationCap,
            color: "text-blue-400"
        }
    ];

    return (
        <section id="timeline" className="relative py-24 bg-background overflow-hidden">
            <Container>
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-glow mb-4">
                        Career & Education
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A timeline of my academic background, professional experience, and key hackathon achievements.
                    </p>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

                    <div className="space-y-12">
                        {events.map((event, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center justify-between md:justify-normal gap-8 w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
                                >
                                    {/* Empty Space for Desktop layout */}
                                    <div className="hidden md:block w-5/12" />

                                    {/* Center Node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-[#0f172a] shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 text-glow">
                                        <event.icon className={`h-5 w-5 ${event.color}`} />
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-full pl-20 md:pl-0 md:w-5/12">
                                        <div className={`glass-card p-6 border border-white/5 hover:border-white/20 transition-colors ${isEven ? "md:text-right" : "md:text-left"
                                            }`}>
                                            <div className={`flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider ${event.color} ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                                                <Calendar className="h-3 w-3" />
                                                {event.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-[#f8fafc] mb-1">{event.title}</h3>
                                            <h4 className="text-sm font-semibold text-[#94a3b8] mb-3">{event.subtitle}</h4>
                                            <p className="text-sm text-[#6b7280] leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
