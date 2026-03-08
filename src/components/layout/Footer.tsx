"use client";

import Link from "next/link";
import { Container } from "./Container";
import { motion } from "framer-motion";
import {
    Github, Linkedin, Twitter, Mail, MapPin,
    Phone, ExternalLink, Cpu, ArrowUpRight,
} from "lucide-react";

const LINKS = {
    explore: [
        { href: "/projects", label: "Projects" },
        { href: "/hardware", label: "Hardware Lab" },
        { href: "/dashboard", label: "Dashboard" },
        { href: "/terminal", label: "Terminal" },
        { href: "/blog", label: "Blog" },
    ],
    connect: [
        { href: "https://github.com/Prolayjit-B14", label: "GitHub", external: true },
        { href: "https://www.linkedin.com/in/prolayjit-biswas", label: "LinkedIn", external: true },
        { href: "https://devfolio.co/@pro_lay04", label: "DevFolio", external: true },
        { href: "https://dev.to/pro_lay04", label: "Dev.to", external: true },
        { href: "https://medium.com/@prolayjitbiswas14112004", label: "Medium", external: true },
    ],
};

const SOCIALS = [
    { href: "https://github.com/Prolayjit-B14", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/pro_lay04", icon: Twitter, label: "Twitter" },
    { href: "mailto:prolayjitbiswas14112004@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
    return (
        <footer className="border-t border-white/8 bg-[#020810] relative overflow-hidden">
            {/* Subtle background grid */}
            <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

            <Container>
                {/* Main grid */}
                <div className="grid grid-cols-1 gap-12 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-5">
                        <Link href="/" className="flex items-center gap-2.5 group w-fit">
                            <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                                <Cpu className="h-4.5 w-4.5 text-primary" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-glow">PB.</span>
                        </Link>
                        <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[220px]">
                            From Hello World to Hardware — building smart systems with code and circuits.
                        </p>
                        {/* Socials */}
                        <div className="flex items-center gap-3 pt-1">
                            {SOCIALS.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="h-9 w-9 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center text-[#94a3b8] hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Explore</p>
                        <ul className="space-y-3">
                            {LINKS.explore.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="h-px w-3 bg-primary/40 group-hover:w-5 transition-all duration-200" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Connect</p>
                        <ul className="space-y-3">
                            {LINKS.connect.map(({ href, label }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 group"
                                    >
                                        <ArrowUpRight className="h-3.5 w-3.5 text-primary/50 group-hover:text-primary transition-colors" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">Get In Touch</p>
                        <div className="space-y-4">
                            <a
                                href="mailto:prolayjitbiswas14112004@gmail.com"
                                className="flex items-start gap-3 group"
                            >
                                <div className="h-8 w-8 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all">
                                    <Mail className="h-3.5 w-3.5 text-[#94a3b8] group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280] mb-0.5">Email</p>
                                    <p className="text-xs text-[#94a3b8] group-hover:text-primary transition-colors break-all">
                                        prolayjitbiswas14112004@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-3.5 w-3.5 text-[#94a3b8]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280] mb-0.5">Phone</p>
                                    <p className="text-xs text-[#94a3b8]">+91 9339615464</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-3.5 w-3.5 text-[#94a3b8]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6b7280] mb-0.5">Location</p>
                                    <p className="text-xs text-[#94a3b8]">Kolkata, West Bengal, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#6b7280] text-center sm:text-left">
                        © {new Date().getFullYear()} Prolayjit Biswas. Built with Next.js, Three.js & ❤️
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://prolayjit-biswas.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-primary transition-colors"
                        >
                            <ExternalLink className="h-3 w-3" />
                            Live Portfolio
                        </a>
                        <a
                            href="https://github.com/Prolayjit-B14"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-primary transition-colors"
                        >
                            <Github className="h-3 w-3" />
                            Source Code
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
