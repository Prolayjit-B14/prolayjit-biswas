"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { CircuitBackground } from "@/components/animations/CircuitBackground";
import { ParticleField } from "@/components/animations/ParticleField";
import { Waveform } from "@/components/animations/Waveform";
import { ArrowRight, Download, Github, Linkedin, ExternalLink, Cpu } from "lucide-react";
import Link from "next/link";

const ROLES = [
    "Electronics Engineer",
    "Embedded Systems Dev",
    "IoT Builder",
    "PCB Designer",
    "Full-Stack Developer",
];

function TypeWriter({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[index % words.length];

        if (!deleting && subIndex === current.length) {
            const timeout = setTimeout(() => setDeleting(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
            return;
        }

        const timeout = setTimeout(
            () => setSubIndex((s) => s + (deleting ? -1 : 1)),
            deleting ? 50 : 80
        );
        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, words]);

    return (
        <span className="text-primary">
            {words[index % words.length].substring(0, subIndex)}
            <span className="animate-pulse">|</span>
        </span>
    );
}

const socialLinks = [
    { href: "https://github.com/Prolayjit-B14", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/pro_lay04", icon: ExternalLink, label: "Twitter/X" },
];

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <CircuitBackground />
            <ParticleField />

            <Container className="relative z-10 flex flex-col items-center text-center gap-6 pb-24">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary shadow-[0_0_20px_rgba(74,222,128,0.15)]"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <Cpu className="h-4 w-4" />
                    System Online — Open to Opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-glow"
                >
                    Prolayjit Biswas
                </motion.h1>

                {/* Typewriter tag */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-2xl md:text-3xl font-light tracking-wide"
                >
                    <TypeWriter words={ROLES} />
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-xl text-lg text-muted-foreground leading-relaxed"
                >
                    From Hello World to Hardware — Building Smart Systems with Code and Circuits.
                    <br />
                    <span className="text-sm opacity-70">B.Tech Electronics (VLSI) · MAKAUT · Kolkata, India</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.65 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2.5 rounded-lg bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]"
                    >
                        View Projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30"
                    >
                        <Download className="h-4 w-4 text-muted-foreground" />
                        Download Resume
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.85 }}
                    className="flex items-center gap-5 mt-2"
                >
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Icon className="h-5 w-5" />
                        </a>
                    ))}
                </motion.div>
            </Container>

            {/* Waveform accent at bottom */}
            <Waveform />

            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
        </section>
    );
}
