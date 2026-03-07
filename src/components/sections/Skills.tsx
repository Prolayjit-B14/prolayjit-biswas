"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skills } from "@/data/skills";

function SkillBadge({ name, index }: { name: string; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary hover:border-primary/50"
        >
            {name}
        </motion.div>
    );
}

export function Skills() {
    const categories = [
        { title: "Hardware & Embedded Systems", data: skills.hardware },
        { title: "Programming Languages", data: skills.programming },
        { title: "Software & Tools", data: skills.tools },
        { title: "Engineering Skills", data: skills.technical },
    ];

    return (
        <section id="skills" className="relative py-24 bg-background/50 border-t border-white/5 z-10">
            <Container>
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-glow"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-primary rounded-full box-shadow-[0_0_10px_#4ade80]"
                    />
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.data.map((skill, i) => (
                                    <SkillBadge key={skill} name={skill} index={i} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
