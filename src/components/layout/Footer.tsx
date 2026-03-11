"use client";

import Link from "next/link";
import { Container } from "./Container";
import {
    Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Cpu, ArrowUpRight,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const LINKS = {
    explore: [
        { href: "/projects",   label: "Projects" },
        { href: "/hackathons", label: "Hackathons" },
        { href: "/hardware",   label: "Hardware Lab" },
        { href: "/gallery",    label: "Gallery" },
        { href: "/education",  label: "Education" },
        { href: "/dashboard",  label: "Dashboard" },
        { href: "/blog",       label: "Blog" },
        { href: "/terminal",   label: "Terminal" },
    ],
    connect: [
        { href: "https://github.com/Prolayjit-B14",               label: "GitHub" },
        { href: "https://www.linkedin.com/in/prolayjit-biswas",   label: "LinkedIn" },
        { href: "https://x.com/pro_lay04",                        label: "Twitter / X" },
        { href: "https://devfolio.co/@pro_lay04",                 label: "DevFolio" },
        { href: "https://dev.to/pro_lay04",                       label: "Dev.to" },
        { href: "https://github.com/Prolayjit-B14/prolayjit-biswas", label: "Source Code" },
    ],
};

export function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#020810] overflow-hidden">
            {/* Glow orb behind brand */}
            <div className="absolute -top-32 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 gap-12 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="space-y-5">
                        <Link href="/" className="flex items-center gap-2.5 group w-fit">
                            <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                                <Cpu className="h-4 w-4 text-primary" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-glow">PB.</span>
                        </Link>

                        <p className="text-sm text-[#6b7280] leading-relaxed max-w-[220px]">
                            From Hello World to Hardware — building smart systems with code and circuits.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-2.5 pt-1">
                            {[
                                { href: "https://github.com/Prolayjit-B14",             icon: Github,      label: "GitHub",   color: "hover:text-[#f0f6ff] hover:border-white/30 hover:bg-white/10" },
                                { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: Linkedin,    label: "LinkedIn", color: "hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:bg-[#0077b5]/10" },
                                { href: "https://x.com/pro_lay04",                      icon: FaXTwitter,  label: "X",        color: "hover:text-white hover:border-white/30 hover:bg-white/8" },
                                { href: "mailto:prolayjitbiswas14112004@gmail.com",     icon: Mail,        label: "Email",    color: "hover:text-primary hover:border-primary/40 hover:bg-primary/10" },
                            ].map(({ href, icon: Icon, label, color }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel="noreferrer"
                                    aria-label={label}
                                    className={`h-9 w-9 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center text-[#6b7280] transition-all duration-200 ${color}`}
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary mb-5">Explore</p>
                        <ul className="space-y-2.5">
                            {LINKS.explore.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-sm text-[#6b7280] hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="h-px w-3 bg-primary/40 group-hover:w-5 transition-all duration-200 rounded-full flex-shrink-0" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary mb-5">Connect</p>
                        <ul className="space-y-2.5">
                            {LINKS.connect.map(({ href, label }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        target="_blank" rel="noreferrer"
                                        className="text-sm text-[#6b7280] hover:text-[#f1f5f9] transition-colors flex items-center gap-1.5 group"
                                    >
                                        <ArrowUpRight className="h-3.5 w-3.5 text-primary/40 group-hover:text-primary transition-colors flex-shrink-0" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-primary mb-5">Get In Touch</p>
                        <div className="space-y-4">
                            <a
                                href="mailto:prolayjitbiswas14112004@gmail.com"
                                className="flex items-start gap-3 group"
                            >
                                <div className="h-8 w-8 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all">
                                    <Mail className="h-3.5 w-3.5 text-[#6b7280] group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-[#4b5563] mb-0.5 font-medium">Email</p>
                                    <p className="text-xs text-[#6b7280] group-hover:text-primary transition-colors break-all leading-snug">
                                        prolayjitbiswas14112004@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center flex-shrink-0">
                                    <Phone className="h-3.5 w-3.5 text-[#6b7280]" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-[#4b5563] mb-0.5 font-medium">Phone</p>
                                    <p className="text-xs text-[#6b7280]">+91 9339615464</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-8 w-8 rounded-lg border border-white/8 bg-white/4 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-3.5 w-3.5 text-[#6b7280]" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-[#4b5563] mb-0.5 font-medium">Location</p>
                                    <p className="text-xs text-[#6b7280]">Kolkata, West Bengal, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#4b5563] text-center sm:text-left">
                        © {new Date().getFullYear()} Prolayjit Biswas · Built with Next.js, Framer Motion & ❤️
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://prolayjit-biswas.vercel.app"
                            target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-primary transition-colors"
                        >
                            <ExternalLink className="h-3 w-3" /> Live Site
                        </a>
                        <a
                            href="https://github.com/Prolayjit-B14/prolayjit-biswas"
                            target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#6b7280] hover:text-primary transition-colors"
                        >
                            <Github className="h-3 w-3" /> Source
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
