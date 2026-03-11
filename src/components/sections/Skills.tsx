"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skills } from "@/data/skills";
// Named lucide imports — no wildcards to avoid bundler issues
import {
    Cpu, CircuitBoard, Wifi, Zap, FileCode2, Server, Layers,
    Watch, Navigation, Activity, Code2, Wrench, Box, Compass,
    Printer, Boxes, BarChart2, Layers3, Settings, PenTool
} from "lucide-react";
// Named react-icons/si imports
import {
    SiArduino, SiRaspberrypi, SiCplusplus, SiPython,
    SiJavascript, SiNextdotjs, SiTailwindcss, SiNodedotjs,
    SiGithub, SiFirebase, SiLinux, SiDocker, SiFigma
} from "react-icons/si";

// Static icon map — avoids dynamic wildcard resolve at build time
const ICON_MAP: Record<string, React.ReactNode> = {
    SiArduino: <SiArduino className="w-4 h-4" />,
    SiRaspberrypi: <SiRaspberrypi className="w-4 h-4" />,
    SiCplusplus: <SiCplusplus className="w-4 h-4" />,
    SiPython: <SiPython className="w-4 h-4" />,
    SiJavascript: <SiJavascript className="w-4 h-4" />,
    SiNextdotjs: <SiNextdotjs className="w-4 h-4" />,
    SiTailwindcss: <SiTailwindcss className="w-4 h-4" />,
    SiNodedotjs: <SiNodedotjs className="w-4 h-4" />,
    SiGithub: <SiGithub className="w-4 h-4" />,
    SiFirebase: <SiFirebase className="w-4 h-4" />,
    SiLinux: <SiLinux className="w-4 h-4" />,
    SiDocker: <SiDocker className="w-4 h-4" />,
    SiFigma: <SiFigma className="w-4 h-4" />,
    Cpu: <Cpu className="w-4 h-4" />,
    CircuitBoard: <CircuitBoard className="w-4 h-4" />,
    Wifi: <Wifi className="w-4 h-4" />,
    Zap: <Zap className="w-4 h-4" />,
    FileCode2: <FileCode2 className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    Layers: <Layers className="w-4 h-4" />,
    Watch: <Watch className="w-4 h-4" />,
    Navigation: <Navigation className="w-4 h-4" />,
    Activity: <Activity className="w-4 h-4" />,
    Code2: <Code2 className="w-4 h-4" />,
    Wrench: <Wrench className="w-4 h-4" />,
    Box: <Box className="w-4 h-4" />,
    Compass: <Compass className="w-4 h-4" />,
    Printer: <Printer className="w-4 h-4" />,
    Boxes: <Boxes className="w-4 h-4" />,
    BarChart2: <BarChart2 className="w-4 h-4" />,
    Layers3: <Layers3 className="w-4 h-4" />,
    Settings: <Settings className="w-4 h-4" />,
    PenTool: <PenTool className="w-4 h-4" />,
};

function getIcon(iconName: string) {
    return ICON_MAP[iconName] ?? <Cpu className="w-4 h-4" />;
}

// Color palettes per category
const HARDWARE_COLORS = [
    "border-blue-500/30 bg-blue-500/10 text-blue-300 hover:border-blue-400/60",
    "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400/60",
    "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:border-indigo-400/60",
    "border-sky-500/30 bg-sky-500/10 text-sky-300 hover:border-sky-400/60",
    "border-violet-500/30 bg-violet-500/10 text-violet-300 hover:border-violet-400/60",
];
const SOFTWARE_COLORS = [
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400/60",
    "border-green-500/30 bg-green-500/10 text-green-300 hover:border-green-400/60",
    "border-teal-500/30 bg-teal-500/10 text-teal-300 hover:border-teal-400/60",
    "border-lime-500/30 bg-lime-500/10 text-lime-300 hover:border-lime-400/60",
];
const TOOLS_COLORS = [
    "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:border-amber-400/60",
    "border-orange-500/30 bg-orange-500/10 text-orange-300 hover:border-orange-400/60",
    "border-rose-500/30 bg-rose-500/10 text-rose-300 hover:border-rose-400/60",
    "border-pink-500/30 bg-pink-500/10 text-pink-300 hover:border-pink-400/60",
];

function assignColors(items: { name: string; icon: string }[], palette: string[]) {
    return items.map((item, i) => ({ ...item, color: palette[i % palette.length] }));
}

function SkillChip({ name, icon, color }: { name: string; icon: string; color: string }) {
    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap select-none font-medium text-sm transition-all duration-200 hover:scale-105 ${color}`}>
            {getIcon(icon)}
            <span>{name}</span>
        </div>
    );
}

function MarqueeRow({ chips, reverse = false }: { chips: { name: string; icon: string; color: string }[]; reverse?: boolean }) {
    const doubled = [...chips, ...chips];
    return (
        <div className="overflow-hidden w-full relative">
            <motion.div
                className="flex gap-3 w-max"
                animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {doubled.map((chip, i) => (
                    <SkillChip key={`${chip.name}-${i}`} {...chip} />
                ))}
            </motion.div>
        </div>
    );
}

const categories = [
    {
        label: "Hardware & Embedded",
        icon: <Cpu className="w-4 h-4" />,
        iconColor: "text-blue-400",
        chips: assignColors(skills.hardware, HARDWARE_COLORS),
        reverse: false,
    },
    {
        label: "Software Engineering",
        icon: <Code2 className="w-4 h-4" />,
        iconColor: "text-emerald-400",
        chips: assignColors(skills.software, SOFTWARE_COLORS),
        reverse: true,
    },
    {
        label: "CAD & Design Tools",
        icon: <Wrench className="w-4 h-4" />,
        iconColor: "text-amber-400",
        chips: assignColors(skills.tools, TOOLS_COLORS),
        reverse: false,
    },
];

export function Skills() {
    const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} id="skills" className="relative py-14 bg-[#030712] border-t border-white/5 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
            {/* Edge fades */}
            <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

            <Container className="relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-glow">
                        Technical Arsenal
                    </h2>
                    <p className="text-[#94a3b8] text-sm">
                        Every tool, language, and domain — from PCB to production.
                    </p>
                </motion.div>
            </Container>

            <div className="flex flex-col gap-5">
                {categories.map((cat, ci) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, x: cat.reverse ? 40 : -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: ci * 0.1 }}
                    >
                        <div className={`flex items-center gap-2 mb-3 px-8 ${cat.iconColor}`}>
                            {cat.icon}
                            <span className="text-xs font-bold uppercase tracking-widest text-[#6b7280]">{cat.label}</span>
                        </div>
                        <MarqueeRow chips={cat.chips} reverse={cat.reverse} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
