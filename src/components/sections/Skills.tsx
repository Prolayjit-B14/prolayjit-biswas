"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skills } from "@/data/skills";
import * as LucideIcons from "lucide-react";
import * as SiIcons from "react-icons/si";

function getIcon(iconName: string) {
    if (iconName.startsWith("Si")) {
        const Icon = (SiIcons as any)[iconName];
        return Icon ? <Icon className="w-5 h-5" /> : null;
    }
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : <LucideIcons.Cpu className="w-5 h-5" />;
}

function SkillBadge({ name, icon, index }: { name: string; icon: string; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-[#0f172a]/40 backdrop-blur-md p-4 text-center transition-all hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(74,222,128,0.15)] h-28 w-full"
        >
            <div className="text-[#94a3b8] group-hover:text-primary transition-colors duration-300">
                {getIcon(icon)}
            </div>
            <span className="text-[#f8fafc] text-xs font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                {name}
            </span>
        </motion.div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="relative py-16 bg-[#030712] border-t border-white/5 z-10">
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

            <Container className="relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3 text-glow">
                        Technical Arsenal
                    </h2>
                    <p className="text-[#94a3b8] text-sm max-w-2xl mx-auto">
                        Precision tools and languages forming my fundamental engineering stack.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {/* Hardware Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <LucideIcons.Cpu className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-bold text-[#f8fafc] uppercase tracking-wider">Hardware & Embedded</h3>
                            <LucideIcons.Cpu className="w-5 h-5 text-primary" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {skills.hardware.map((skill, i) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Software Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <LucideIcons.Code2 className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-bold text-[#f8fafc] uppercase tracking-wider">Software Engineering</h3>
                            <LucideIcons.Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {skills.software.map((skill, i) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* CAD Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <LucideIcons.Wrench className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-bold text-[#f8fafc] uppercase tracking-wider">CAD & Design Tools</h3>
                            <LucideIcons.Wrench className="w-5 h-5 text-primary" />
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {skills.tools.map((skill, i) => (
                                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
