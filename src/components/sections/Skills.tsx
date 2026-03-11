"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { skills } from "@/data/skills";
import * as LucideIcons from "lucide-react";
import * as SiIcons from "react-icons/si";

function getIcon(iconName: string) {
    if (iconName.startsWith("Si")) {
        const Icon = (SiIcons as any)[iconName];
        return Icon ? <Icon className="w-4 h-4" /> : null;
    }
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-4 h-4" /> : <LucideIcons.Cpu className="w-4 h-4" />;
}

// Chip rendered inside scrolling marquee
function SkillChip({ name, icon, color }: { name: string; icon: string; color: string }) {
    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap cursor-default select-none font-medium text-sm transition-colors duration-200 hover:scale-105 active:scale-95 ${color}`}>
            {getIcon(icon)}
            <span>{name}</span>
        </div>
    );
}

// Auto-scrolling marquee row
function MarqueeRow({ chips, reverse = false }: { chips: { name: string; icon: string; color: string }[]; reverse?: boolean }) {
    // Double the chips so the loop is seamless
    const doubled = [...chips, ...chips];
    return (
        <div className="overflow-hidden w-full relative">
            <motion.div
                className="flex gap-3 w-max"
                animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
            >
                {doubled.map((chip, i) => (
                    <SkillChip key={`${chip.name}-${i}`} {...chip} />
                ))}
            </motion.div>
        </div>
    );
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

const categories = [
    {
        label: "Hardware & Embedded",
        icon: <LucideIcons.Cpu className="w-4 h-4" />,
        iconColor: "text-blue-400",
        chips: assignColors(skills.hardware, HARDWARE_COLORS),
        reverse: false,
    },
    {
        label: "Software Engineering",
        icon: <LucideIcons.Code2 className="w-4 h-4" />,
        iconColor: "text-emerald-400",
        chips: assignColors(skills.software, SOFTWARE_COLORS),
        reverse: true,
    },
    {
        label: "CAD & Design Tools",
        icon: <LucideIcons.Wrench className="w-4 h-4" />,
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
            {/* Subtle grid */}
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
                        Every tool, language, and domain I've mastered across hardware and software.
                    </p>
                </motion.div>
            </Container>

            {/* Marquee rows — full bleed, no container constraint */}
            <div className="flex flex-col gap-5">
                {categories.map((cat, ci) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, x: cat.reverse ? 40 : -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: ci * 0.12 }}
                    >
                        {/* Row label */}
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
