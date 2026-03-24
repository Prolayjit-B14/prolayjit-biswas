"use client";

import Link from "next/link";
import { Container } from "./Container";
import {
    Github, Linkedin, Mail, MapPin, Phone, ExternalLink, Cpu, ArrowUpRight,
} from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiDevdotto, SiDevpost } from "react-icons/si";

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
        { href: "/achievements",  label: "Awards & Recognition" },
        { href: "/terminal",      label: "Interactive Terminal" },
        { href: "/education",     label: "Academic Background" },
    ],
    connect: [
        { href: "https://github.com/Prolayjit-B14",               label: "GitHub", icon: FaGithub, color: "#ffffff" },
        { href: "https://www.linkedin.com/in/prolayjit-biswas",   label: "LinkedIn", icon: FaLinkedinIn, color: "#0077b5" },
        { href: "https://x.com/pro_lay04",                        label: "Twitter / X", icon: FaXTwitter, color: "#ffffff" },
        { href: "https://devfol.io/@pro_lay04",                  label: "DevFolio", icon: SiDevpost, color: "#3770FF" },
        { href: "https://dev.to/pro_lay04",                       label: "Dev.to", icon: SiDevdotto, color: "#ffffff" },
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
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00f2ff] group-hover:border-[#00f2ff] transition-all duration-500 shadow-2xl">
                                <Cpu className="h-6 w-6 text-[#00f2ff] group-hover:text-black transition-colors" />
                            </div>
                            <span className="text-3xl font-black tracking-tighter text-white uppercase">PB<span className="text-[#00f2ff] animate-pulse">.</span></span>
                        </Link>

                        {/* Engineering Availability Tracking */}
                        <div className="inline-flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-3 w-fit backdrop-blur-3xl shadow-2xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2ff]" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 leading-none">Node Status: Active</span>
                        </div>

                        <p className="text-xs text-zinc-500 leading-relaxed max-w-[280px] font-medium italic">
                            "Synthesizing silicon logic and cloud telemetry systems. Engineering for ultra-high fidelity impact."
                        </p>

                        {/* Social Matrix */}
                        <div className="flex items-center gap-4">
                            {[
                                { href: "https://github.com/Prolayjit-B14",             icon: FaGithub,      accent: "#ffffff" },
                                { href: "https://www.linkedin.com/in/prolayjit-biswas", icon: FaLinkedinIn,  accent: "#0077b5" },
                                { href: "https://x.com/pro_lay04",                      icon: FaXTwitter,  accent: "#ffffff" },
                                { href: "mailto:prolayjitbiswas2004@gmail.com",         icon: Mail,        accent: "#00f2ff" },
                            ].map(({ href, icon: Icon, accent }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-11 w-11 rounded-2xl border border-white/5 bg-[#0b1220]/40 backdrop-blur-3xl flex items-center justify-center text-zinc-500 hover:text-white transition-all hover:scale-110 shadow-2xl"
                                    style={{ color: accent }}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00f2ff] mb-8">Laboratory</p>
                        <ul className="space-y-4">
                            {LINKS.explore.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-xs font-black uppercase tracking-widest text-zinc-600 hover:text-white transition-all flex items-center gap-3 group"
                                    >
                                        <span className="h-0.5 w-4 bg-zinc-800 group-hover:w-6 group-hover:bg-[#00f2ff] transition-all duration-300" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff0055] mb-8">Deep Dives</p>
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
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00f2ff] mb-8">Direct Uplink</p>
                        <div className="space-y-8">
                            <a
                                href="mailto:prolayjitbiswas2004@gmail.com"
                                className="flex items-start gap-4 group"
                            >
                                <div className="h-11 w-11 rounded-2xl border border-white/5 bg-white/[0.03] flex items-center justify-center flex-shrink-0 group-hover:border-[#00f2ff]/30 group-hover:bg-[#00f2ff]/5 transition-all shadow-2xl">
                                    <Mail className="h-5 w-5 text-zinc-600 group-hover:text-[#00f2ff] transition-colors" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-zinc-600 mb-1 font-black uppercase tracking-widest">Protocol: SMTP</p>
                                    <p className="text-xs font-black text-zinc-400 group-hover:text-white transition-colors break-all leading-snug tracking-tighter">
                                        prolayjitbiswas2004@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4">
                                <div className="h-11 w-11 rounded-2xl border border-white/5 bg-white/[0.03] flex items-center justify-center flex-shrink-0 shadow-2xl font-black">
                                    <MapPin className="h-5 w-5 text-zinc-600" />
                                </div>
                                <div>
                                    <p className="text-[9px] text-zinc-600 mb-1 font-black uppercase tracking-widest">Region</p>
                                    <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">WB // IND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* System Stats Bar */}
                <div className="border-t border-white/5 py-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <p className="text-[12px] font-black text-white uppercase tracking-[0.3em]">Prolayjit Biswas</p>
                        <p className="text-[9px] text-zinc-600 uppercase tracking-[0.4em] font-black">Industrial Luxury Systems Architecture</p>
                    </div>
                    
                    {/* Meta Tags */}
                    <div className="flex items-center gap-4">
                        {['Next.js', 'TypeScript', 'Framer', 'Vercel'].map((stat) => (
                            <div key={stat} className="px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02] text-[9px] font-black uppercase tracking-widest text-zinc-600">
                                {stat}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-10">
                        <p className="text-[10px] text-zinc-700 font-black uppercase tracking-widest">CORE_VERSION_R.20</p>
                        <button 
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="p-4 rounded-2xl border border-white/10 hover:border-[#00f2ff] hover:bg-[#00f2ff]/5 transition-all group shadow-2xl"
                        >
                            <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#00f2ff] -rotate-45" />
                        </button>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
