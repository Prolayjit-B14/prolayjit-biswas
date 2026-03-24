"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { hackathons } from "@/data/hackathons";
import {
    Trophy, Code2, Users, MapPin, Calendar, CheckCircle2, ExternalLink
} from "lucide-react";

export default function HackathonsPage() {
    return (
        <div className="relative bg-[#030712] min-h-screen">
            <PageHero
                badge="Competitive Building"
                badgeIconName="Trophy"
                title="Hackathons & Competitions"
                description="Prototyping under pressure — turning ideas into working hardware and software MVPs in 24–48 hours with brilliant teams."
                accentColor="amber"
            />

            <Container>
                <div className="py-14 space-y-8">
                    {hackathons.map((h, i) => (
                        <motion.div
                            key={h.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                            className="glass-card border border-white/5 hover:border-amber-500/30 hover:shadow-[0_8px_40px_rgba(245,158,11,0.08)] transition-all rounded-3xl overflow-hidden"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="lg:w-2/5 relative h-56 lg:h-auto min-h-[280px] bg-[#0a0f1c] overflow-hidden flex-shrink-0">
                                    {h.imageUrl ? (
                                        <>
                                            <Image src={h.imageUrl} alt={h.name} fill
                                                className="object-cover opacity-55 group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent" />
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-900/20">
                                            <Trophy className="w-20 h-20 text-amber-500/20" />
                                        </div>
                                    )}
                                    {/* Project built label */}
                                    <div className="absolute bottom-5 left-5 right-5">
                                        <div className="glass-card p-3.5 rounded-xl border border-white/10 inline-block">
                                            <p className="text-[10px] text-[#94a3b8] font-bold uppercase tracking-widest mb-1">Project Built</p>
                                            <p className="text-base font-bold text-amber-400 flex items-center gap-2">
                                                <Code2 className="w-4 h-4" /> {h.project}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                                    {/* Meta row */}
                                    <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-semibold text-[#94a3b8]">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-amber-400" />{h.date}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" />{h.organizer}</span>
                                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/8 border border-white/10">
                                            <Users className="w-3.5 h-3.5" />{h.role}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#f8fafc] mb-4">{h.name}</h2>
                                    <p className="text-[#cbd5e1] leading-relaxed mb-7 text-[15px]">{h.description}</p>

                                    {/* Tech stack */}
                                    <div className="mb-7">
                                        <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest mb-3">Technologies Used</p>
                                        <div className="flex flex-wrap gap-2">
                                            {h.technologies.map(t => (
                                                <span key={t} className="px-3 py-1 rounded-lg bg-[#0f172a] border border-white/5 text-sm font-medium text-[#cbd5e1] hover:border-amber-500/30 hover:text-amber-300 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Awards */}
                                    {h.awards && h.awards.length > 0 && (
                                        <div className="pt-6 border-t border-white/5">
                                            <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest mb-3">🏆 Achievements</p>
                                            <div className="flex flex-col gap-2">
                                                {h.awards.map(a => (
                                                    <div key={a} className="flex items-center gap-2 text-amber-400 font-medium text-sm">
                                                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" /> {a}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
