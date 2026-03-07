"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Cpu, Zap, Library, Target } from "lucide-react";

export function About() {
    const cards = [
        {
            title: "Embedded Systems",
            icon: Cpu,
            description: "Building hardware-software integrated systems using ESP32, Arduino, sensors, and cloud APIs.",
        },
        {
            title: "IoT Platforms",
            icon: Zap,
            description: "Developing interconnected devices for real-time monitoring and smart automation.",
        },
        {
            title: "PCB Design",
            icon: Library,
            description: "Designing custom printed circuit boards for robust hardware prototyping and production.",
        },
        {
            title: "Hackathon Builder",
            icon: Target,
            description: "Actively participating in engineering challenges, crafting rapid prototypes and winning solutions.",
        },
    ];

    return (
        <section id="about" className="relative py-24 bg-background z-10">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-glow">
                            Engineering the Future
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I am a B.Tech student in Electronics Engineering (VLSI Design & Technology) at MAKAUT.
                            My focus is on transforming conceptual ideas into tangible, smart solutions. By bridging the gap
                            between low-level firmware and high-level cloud architecture, I construct devices that learn,
                            communicate, and interact with the physical world.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-6 glass-card hover:bg-white/5 transition-all overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                                <Icon className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
