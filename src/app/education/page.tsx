"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { GraduationCap, BookOpen, CheckCircle2, Award, Rocket } from "lucide-react";

const EDUCATION = [
    {
        degree: "B.Tech in Electronics Engineering (VLSI)",
        institution: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
        location: "Kolkata, West Bengal",
        period: "2023 – Present",
        gpa: "Current",
        color: "border-primary/40 hover:border-primary/60 hover:shadow-[0_8px_40px_rgba(74,222,128,0.08)]",
        badgeColor: "bg-primary/10 text-primary border-primary/30",
        details: "Specializing in embedded systems, microcontrollers, VLSI circuitry, and digital logic design with a strong focus on practical hardware–software integration.",
        coursework: [
            "Digital Electronics & VLSI",
            "Computer Architecture",
            "Analog Circuit Design",
            "Microprocessors & Microcontrollers",
            "Signals & Systems",
            "OOP with C++",
            "Data Structures",
            "PCB Design",
        ]
    },
    {
        degree: "Higher Secondary Education (Class XII)",
        institution: "Science Stream — Physics, Chemistry, Mathematics",
        location: "West Bengal Board",
        period: "2021 – 2023",
        gpa: "Completed",
        color: "border-blue-500/30 hover:border-blue-500/50 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)]",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        details: "Built a strong foundation in Physics, Advanced Mathematics, and Computer Science — fundamental to circuit analysis and embedded systems programming.",
        coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
    }
];

const CERTS = [
    { title: "ESP32 & IoT Development", org: "Self-Taught + hands-on", color: "text-cyan-400" },
    { title: "PCB Design with KiCAD", org: "Project-Based Learning", color: "text-blue-400" },
    { title: "Next.js & React Development", org: "Online + Projects", color: "text-green-400" },
    { title: "3D Printing & CAD (Fusion 360)", org: "Self-Taught", color: "text-amber-400" },
];

export default function EducationPage() {
    return (
        <div className="relative bg-[#030712] min-h-screen">
            <PageHero
                badge="Academic Profile"
                badgeIconName="GraduationCap"
                title="Education & Training"
                description="Formal academic background supporting practical engineering — from circuit design and microcontrollers to full-stack software architecture."
                accentColor="cyan"
            />

            <Container>
                <div className="py-14 max-w-4xl">
                    {/* Education timeline */}
                    <div className="relative border-l-2 border-gradient-to-b border-primary/20 pl-8 ml-2 md:ml-4 space-y-10 mb-16">
                        {EDUCATION.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.1 }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[41px] top-2 h-5 w-5 rounded-full bg-[#030712] border-4 border-primary shadow-[0_0_12px_rgba(74,222,128,0.5)]" />

                                <div className={`glass-card p-7 rounded-2xl border transition-all ${edu.color}`}>
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                                        <div>
                                            <h2 className="text-xl font-bold text-[#f8fafc] mb-1">{edu.degree}</h2>
                                            <p className="text-sm font-semibold text-primary/80">{edu.institution}</p>
                                            <p className="text-xs text-[#6b7280] mt-0.5">{edu.location}</p>
                                        </div>
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap h-fit ${edu.badgeColor}`}>
                                            {edu.period}
                                        </span>
                                    </div>

                                    <p className="text-[#94a3b8] leading-relaxed text-sm mb-6">{edu.details}</p>

                                    <div>
                                        <p className="flex items-center gap-2 text-[10px] font-bold text-[#6b7280] uppercase tracking-widest mb-3">
                                            <BookOpen className="w-3.5 h-3.5" /> Relevant Coursework
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map(c => (
                                                <span key={c} className="flex items-center gap-1.5 text-xs text-[#cbd5e1] bg-white/[0.03] border border-white/8 px-3 py-1.5 rounded-full">
                                                    <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" /> {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Self-learning */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-7 rounded-2xl border border-white/8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                                <Rocket className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#f8fafc]">Self-Directed Learning & Certifications</h3>
                                <p className="text-xs text-[#6b7280]">Practical skills developed through hands-on projects</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {CERTS.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all"
                                >
                                    <Award className={`w-4 h-4 ${cert.color} flex-shrink-0 mt-0.5`} />
                                    <div>
                                        <p className="text-sm font-semibold text-[#f8fafc]">{cert.title}</p>
                                        <p className="text-xs text-[#6b7280]">{cert.org}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
