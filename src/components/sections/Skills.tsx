"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skills } from "@/data/skills";
import {
    Cpu, CircuitBoard, Wifi, Zap, FileCode2, Server, Layers,
    Watch, Navigation, Activity, Code2, Wrench, Box, Compass,
    Printer, Boxes, BarChart2, Layers3, Settings, PenTool,
    BrainCircuit, Database, Cloud, Shield, Smartphone, Globe
} from "lucide-react";
import {
    SiArduino, SiRaspberrypi, SiCplusplus, SiPython,
    SiJavascript, SiNextdotjs, SiTailwindcss, SiNodedotjs,
    SiGithub, SiFirebase, SiLinux, SiDocker, SiFigma,
    SiTensorflow, SiOpencv, SiMongodb, SiPostgresql, SiVercel
} from "react-icons/si";

const ICON_MAP: Record<string, React.ReactNode> = {
    SiArduino:      <SiArduino className="w-4 h-4" />,
    SiRaspberrypi:  <SiRaspberrypi className="w-4 h-4" />,
    SiCplusplus:    <SiCplusplus className="w-4 h-4" />,
    SiPython:       <SiPython className="w-4 h-4" />,
    SiJavascript:   <SiJavascript className="w-4 h-4" />,
    SiNextdotjs:    <SiNextdotjs className="w-4 h-4" />,
    SiTailwindcss:  <SiTailwindcss className="w-4 h-4" />,
    SiNodedotjs:    <SiNodedotjs className="w-4 h-4" />,
    SiGithub:       <SiGithub className="w-4 h-4" />,
    SiFirebase:     <SiFirebase className="w-4 h-4" />,
    SiLinux:        <SiLinux className="w-4 h-4" />,
    SiDocker:       <SiDocker className="w-4 h-4" />,
    SiFigma:        <SiFigma className="w-4 h-4" />,
    SiTensorflow:   <SiTensorflow className="w-4 h-4" />,
    SiOpencv:       <SiOpencv className="w-4 h-4" />,
    SiMongodb:      <SiMongodb className="w-4 h-4" />,
    SiPostgresql:   <SiPostgresql className="w-4 h-4" />,
    SiVercel:       <SiVercel className="w-4 h-4" />,
    Cpu:        <Cpu className="w-4 h-4" />,
    CircuitBoard:<CircuitBoard className="w-4 h-4" />,
    Wifi:       <Wifi className="w-4 h-4" />,
    Zap:        <Zap className="w-4 h-4" />,
    FileCode2:  <FileCode2 className="w-4 h-4" />,
    Server:     <Server className="w-4 h-4" />,
    Layers:     <Layers className="w-4 h-4" />,
    Watch:      <Watch className="w-4 h-4" />,
    Navigation: <Navigation className="w-4 h-4" />,
    Activity:   <Activity className="w-4 h-4" />,
    Code2:      <Code2 className="w-4 h-4" />,
    Wrench:     <Wrench className="w-4 h-4" />,
    Box:        <Box className="w-4 h-4" />,
    Compass:    <Compass className="w-4 h-4" />,
    Printer:    <Printer className="w-4 h-4" />,
    Boxes:      <Boxes className="w-4 h-4" />,
    BarChart2:  <BarChart2 className="w-4 h-4" />,
    Layers3:    <Layers3 className="w-4 h-4" />,
    Settings:   <Settings className="w-4 h-4" />,
    PenTool:    <PenTool className="w-4 h-4" />,
    BrainCircuit:<BrainCircuit className="w-4 h-4" />,
    Database:   <Database className="w-4 h-4" />,
    Cloud:      <Cloud className="w-4 h-4" />,
    Shield:     <Shield className="w-4 h-4" />,
    Smartphone: <Smartphone className="w-4 h-4" />,
    Globe:      <Globe className="w-4 h-4" />,
};

function getIcon(name: string) { return ICON_MAP[name] ?? <Cpu className="w-4 h-4" />; }

// Extra categories not in skills.ts
const AI_ML = [
    { name: "Gemini API", icon: "BrainCircuit" },
    { name: "TensorFlow", icon: "SiTensorflow" },
    { name: "OpenCV", icon: "SiOpencv" },
    { name: "Machine Learning", icon: "Activity" },
    { name: "NLP / LLMs", icon: "Globe" },
    { name: "Computer Vision", icon: "Shield" },
];

const DATABASES = [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Firebase DB", icon: "SiFirebase" },
    { name: "Supabase", icon: "Database" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "Cloud / AWS", icon: "Cloud" },
];

const PALETTE: Record<string, string[]> = {
    blue: ["border-blue-500/30 bg-blue-500/10 text-blue-300 hover:border-blue-400/60",
           "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400/60",
           "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:border-indigo-400/60",
           "border-sky-500/30 bg-sky-500/10 text-sky-300 hover:border-sky-400/60",
           "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-400/60"],
    green: ["border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/60",
            "border-green-500/30 bg-green-500/10 text-green-300 hover:border-green-400/60",
            "border-teal-500/30 bg-teal-500/10 text-teal-300 hover:border-teal-400/60",
            "border-lime-500/30 bg-lime-500/10 text-lime-300 hover:border-lime-400/60"],
    amber: ["border-amber-500/30 bg-amber-500/10 text-amber-300 hover:border-amber-400/60",
            "border-orange-500/30 bg-orange-500/10 text-orange-300 hover:border-orange-400/60",
            "border-rose-500/30 bg-rose-500/10 text-rose-300 hover:border-rose-400/60",
            "border-pink-500/30 bg-pink-500/10 text-pink-300 hover:border-pink-400/60"],
    purple: ["border-purple-500/30 bg-purple-500/10 text-purple-300 hover:border-purple-400/60",
             "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 hover:border-fuchsia-400/60",
             "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-400/60",
             "border-pink-500/30 bg-pink-500/10 text-pink-300 hover:border-pink-400/60"],
};

function colored(items: {name:string;icon:string}[], palette: string[]) {
    return items.map((x, i) => ({ ...x, color: palette[i % palette.length] }));
}

const CATEGORIES = [
    { label: "Hardware & Embedded", icon: <Cpu className="w-3.5 h-3.5"/>, iconColor:"text-blue-400", items: colored(skills.hardware, PALETTE.blue), reverse: false },
    { label: "Software Engineering", icon: <Code2 className="w-3.5 h-3.5"/>, iconColor:"text-emerald-400", items: colored(skills.software, PALETTE.green), reverse: true },
    { label: "AI / ML & Data",       icon: <BrainCircuit className="w-3.5 h-3.5"/>, iconColor:"text-purple-400", items: colored(AI_ML, PALETTE.purple), reverse: false },
    { label: "CAD & Design Tools",   icon: <Wrench className="w-3.5 h-3.5"/>, iconColor:"text-amber-400", items: colored(skills.tools, PALETTE.amber), reverse: true },
    { label: "Databases & Cloud",    icon: <Database className="w-3.5 h-3.5"/>, iconColor:"text-cyan-400", items: colored(DATABASES, PALETTE.blue), reverse: false },
];

// Fixed marquee: forward row scrolls left (0 → -50%), reverse row scrolls right (-50% → 0)
function MarqueeRow({ items, reverse = false }: { items: {name:string;icon:string;color:string}[]; reverse?: boolean }) {
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-3 w-max"
                animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            >
                {doubled.map((chip, i) => (
                    <div
                        key={`${chip.name}-${i}`}
                        className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap select-none font-medium text-sm transition-all duration-200 ${chip.color}`}
                    >
                        {getIcon(chip.icon)}
                        <span>{chip.name}</span>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#020810] border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase rounded flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none drop-shadow-2xl z-50">
                            Proficient
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#020810] border-r border-b border-white/10 transform rotate-45" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

// Divider with gradient line
function SectionDivider({ label, icon, iconColor }: { label:string; icon:React.ReactNode; iconColor:string }) {
    return (
        <div className="flex items-center gap-4 px-6 md:px-8 mb-3">
            <div className={`flex items-center gap-2 ${iconColor} shrink-0`}>
                {icon}
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#6b7280]">{label}</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>
    );
}

export function Skills() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} id="skills" className="relative py-14 bg-[#030712] border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
            {/* Edge fades */}
            <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

            <Container className="relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                        <Cpu className="w-3 h-3" /> Technical Arsenal
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-glow">
                        Skills & Technologies
                    </h2>
                    <p className="text-[#94a3b8] text-sm max-w-xl mx-auto">
                        Every tool, language, and discipline — from PCB schematic to production deployment.
                    </p>
                </motion.div>
            </Container>

            {/* 5 scrolling rows */}
            <div className="flex flex-col gap-6 relative z-0">
                {CATEGORIES.map((cat, ci) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, x: cat.reverse ? 48 : -48 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.55, delay: ci * 0.09 }}
                    >
                        <SectionDivider label={cat.label} icon={cat.icon} iconColor={cat.iconColor} />
                        <MarqueeRow items={cat.items} reverse={cat.reverse} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
