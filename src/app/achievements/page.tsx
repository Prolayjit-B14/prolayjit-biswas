"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Trophy, Award, Star, Medal, GraduationCap, Users } from "lucide-react";

const ACHIEVEMENTS = [
    {
        title: "Smart India Hackathon Finalist",
        org: "Ministry of Education, Govt. of India",
        year: "2023",
        desc: "Nationwide competition focusing on solving real-world government problems through technology.",
        color: "from-amber-500/20 to-transparent",
        border: "border-amber-500/30",
        icon: Trophy
    },
    {
        title: "MAKATHON Winner",
        org: "Institutional Innovation Council",
        year: "2022",
        desc: "1st Place for building a low-cost IoT sensor node for precision agriculture.",
        color: "from-blue-500/20 to-transparent",
        border: "border-blue-500/30",
        icon: Medal
    },
    {
        title: "Academic Excellence Award",
        org: "University Foundation",
        year: "2021-2024",
        desc: "Consistent top-tier GPA within the Electronics and Communication Engineering department.",
        color: "from-emerald-500/20 to-transparent",
        border: "border-emerald-500/30",
        icon: GraduationCap
    },
    {
        title: "Leadership — Tech Lead",
        org: "College Tech Club",
        year: "2023",
        desc: "Mentored over 50+ students in Embedded C and PCB design fundamentals.",
        color: "from-violet-500/20 to-transparent",
        border: "border-violet-500/30",
        icon: Users
    }
];

export default function AchievementsPage() {
    return (
        <main className="min-h-screen bg-[#020617] pt-24 pb-16">
            <Container>
                {/* Hero Section */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        <Award className="w-3 h-3" /> External Validation
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        Achievements & Recognition
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Compiling awards, leadership roles, and academic validations from top-tier institutions and government bodies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {ACHIEVEMENTS.map((ach, idx) => (
                        <motion.div
                            key={ach.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative group bg-[#0b1220] border ${ach.border} rounded-3xl p-8 lg:p-10 overflow-hidden hover:shadow-[0_0_40px_rgba(245,158,11,0.05)] transition-all`}
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${ach.color} blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity`} />
                            
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                                    <ach.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                                            {ach.year} — {ach.org}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                                        {ach.title}
                                    </h2>
                                    <p className="text-zinc-400 leading-relaxed text-sm">
                                        {ach.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Certifications List - Simple Row */}
                <div className="mt-20">
                    <h3 className="text-xl font-bold text-white mb-8 px-4 border-l-4 border-amber-500">Technical Certifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <CertItem name="Embedded Systems Specialization" issuer="Coursera" />
                        <CertItem name="FPGA Design with Verilog" issuer="NPTEL" />
                        <CertItem name="IoT Architecture & Security" issuer="Cisco" />
                        <CertItem name="Full-Stack Web Dev" issuer="Udemy" />
                    </div>
                </div>
            </Container>
        </main>
    );
}

function CertItem({ name, issuer }: any) {
    return (
        <div className="p-5 rounded-2xl bg-[#0b1220] border border-white/5 hover:border-white/20 transition-all flex flex-col gap-2">
            <span className="text-white font-bold text-sm tracking-tight">{name}</span>
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">{issuer}</span>
        </div>
    );
}
