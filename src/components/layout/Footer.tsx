"use client";

import Link from "next/link";
import { Container } from "./Container";
import {
    Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Cpu, ArrowUpRight,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const LINKS = {
    explore: [
        { href: "/",               label: "System Home" },
        { href: "/projects",       label: "Project Matrix" },
        { href: "/hardware-lab",   label: "Hardware Lab" },
        { href: "/research",       label: "Research Ops" },
        { href: "/blog",           label: "Engineering Blog" },
        { href: "/dashboard",      label: "Ops Dashboard" },
    ],
    deepDives: [
        { href: "/architecture",  label: "System Architecture" },
        { href: "/workflow",      label: "Operational Workflow" },
        { href: "/case-studies",  label: "Technical Case Studies" },
        { href: "/hackathons",    label: "Hackathon Builds" },
        { href: "/open-source",   label: "Open Source Contribs" },
        { href: "/lab-notes",     label: "Experimental Logs" },
        { href: "/achievements",  label: "Awards & Recognition" },
        { href: "/gallery",       label: "Hardware Gallery" },
        { href: "/tech-map",      label: "Tech Stack Map" },
        { href: "/terminal",      label: "Interactive Terminal" },
        { href: "/education",     label: "Academic Background" },
    ],
    connect: [
        { href: "https://github.com/Prolayjit-B14",               label: "GitHub" },
        { href: "https://www.linkedin.com/in/prolayjit-biswas",   label: "LinkedIn" },
        { href: "https://x.com/pro_lay04",                        label: "Twitter / X" },
        { href: "https://devfol.io/@pro_lay04",                  label: "DevFolio" },
        { href: "https://dev.to/pro_lay04",                       label: "Dev.to" },
    ],
};

export function Footer() {
    return (
        <footer className="relative border-t border-white/5 bg-[#020617] overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            
            <Container>
                <div className="grid grid-cols-1 gap-12 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand & Identity */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="h-10 w-10 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-400 transition-all duration-500">
                                <Cpu className="h-5 w-5 text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-white">PB<span className="text-blue-500">.</span></span>
                        </Link>

                        {/* Engineering Availability Tracking */}
                        <div className="inline-flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 px-4 py-2 w-fit">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 leading-none">Status: Ready for R&D</span>
                        </div>

                        <p className="text-xs text-[#94a3b8] leading-relaxed max-w-[240px] font-medium">
                            Synthesizing silicon logic and cloud telemetry systems. Focused on the intersection of hardware and scalable software.
                        </p>

                        {/* Social Matrix */}
                        <div className="flex items-center gap-3">
                            {[
                                { href: "https://github.com/Prolayjit-B14",             icon: Github,      label: "GitHub" },
                                { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: Linkedin,    label: "LinkedIn" },
                                { href: "https://x.com/pro_lay04",                      icon: FaXTwitter,  label: "X" },
                                { href: "mailto:prolayjitbiswas2004@gmail.com",         icon: Mail,        label: "Email" },
                            ].map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="h-10 w-10 rounded-xl border border-white/5 bg-white/[0.03] flex items-center justify-center text-[#6b7280] hover:text-white hover:border-white/20 transition-all"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Laboratory</p>
                        <ul className="space-y-3">
                            {LINKS.explore.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="h-px w-3 bg-zinc-800 group-hover:w-5 group-hover:bg-blue-600 transition-all duration-300" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Technical Deep Dives</p>
                        <ul className="grid grid-cols-1 gap-y-3">
                            {LINKS.deepDives.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowUpRight className="h-3 w-3 text-zinc-800 group-hover:text-blue-500 transition-colors" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Direct Uplink */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Direct Uplink</p>
                        <div className="space-y-6">
                            <a
                                href="mailto:prolayjitbiswas2004@gmail.com"
                                className="flex items-start gap-3 group"
                            >
                                <div className="h-9 w-9 rounded-xl border border-white/5 bg-white/[0.03] flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all">
                                    <Mail className="h-4 w-4 text-[#6b7280] group-hover:text-blue-400 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-[#6b7280] mb-0.5 font-black uppercase tracking-widest">Protocol: SMTP</p>
                                    <p className="text-xs text-zinc-400 group-hover:text-white transition-colors break-all leading-snug font-mono">
                                        prolayjitbiswas2004@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-start gap-3">
                                <div className="h-9 w-9 rounded-xl border border-white/5 bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                                    <MapPin className="h-4 w-4 text-[#6b7280]" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-[#6b7280] mb-0.5 font-black uppercase tracking-widest">Region</p>
                                    <p className="text-xs text-zinc-400 font-mono">Kolkata, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Stats Bar */}
                <div className="border-t border-white/5 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p className="text-[11px] font-black text-white uppercase tracking-widest">Prolayjit Biswas</p>
                        <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em]">Built for high-fidelity Engineering impact</p>
                    </div>
                    
                    {/* Meta Tags */}
                    <div className="flex items-center gap-3">
                        {['Next.js', 'TypeScript', 'Motion', 'Vercel'].map((stat) => (
                            <div key={stat} className="px-3 py-1 rounded-lg border border-white/5 bg-white/[0.03] text-[9px] font-black uppercase tracking-widest text-[#6b7280]">
                                {stat}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-8">
                        <p className="text-[9px] text-zinc-700 font-mono">v4.0.0-STABLE</p>
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="p-3 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all group"
                        >
                            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 -rotate-45" />
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
