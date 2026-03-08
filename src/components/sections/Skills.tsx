"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skills } from "@/data/skills";
import * as LucideIcons from "lucide-react";
import * as SiIcons from "react-icons/si";

function getIcon(iconName: string) {
    // Check Simple Icons first (for brand logos)
    if (iconName.startsWith("Si")) {
        const Icon = (SiIcons as any)[iconName];
        return Icon ? <Icon className="w-4 h-4" /> : null;
    }
    // Fallback to Lucide Icons
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-4 h-4" /> : <LucideIcons.Cpu className="w-4 h-4" />;
}

function SkillBadge({ name, icon, index }: { name: string; icon: string; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
            className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0f172a]/50 backdrop-blur-sm px-4 py-2.5 text-sm font-semibold transition-all hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(74,222,128,0.15)]"
        >
            <span className="text-[#94a3b8] group-hover:text-primary transition-colors">
                {getIcon(icon)}
            </span>
            <span className="text-[#f8fafc] group-hover:text-primary transition-colors">{name}</span>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="relative py-24 bg-[#030712] border-t border-white/5 z-10">
            {/* Background grids */}
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

            <Container className="relative">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mb-16">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-glow"
                        >
                            Technical Arsenal
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#94a3b8] text-lg"
                        >
                            A comprehensive toolkit spanning custom hardware design, low-level embedded programming, and modern full-stack web architectures.
                        </motion.p>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Hardware & Embedded */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors h-full"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-[#f8fafc]">Hardware & Embedded</h3>
                            <LucideIcons.Cpu className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skills.hardware.map((skill, i) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Software Engineering */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors h-full"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-[#f8fafc]">Software Engineering</h3>
                            <LucideIcons.Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skills.software.map((skill, i) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                            ))}
                        </div>
                    </motion.div>

                    {/* CAD & Engineering Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors h-full"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-[#f8fafc]">CAD & Tools</h3>
                            <LucideIcons.Wrench className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {skills.tools.map((skill, i) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
