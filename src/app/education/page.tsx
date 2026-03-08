import { Container } from "@/components/layout/Container";
import { GraduationCap, BookOpen, Award, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Education & Certifications | Prolayjit Biswas",
    description: "Academic background, coursework, and formal training in electronics and software.",
};

const EDUCATION = [
    {
        degree: "B.Tech in Electronics Engineering (VLSI)",
        institution: "Maulana Abul Kalam Azad University of Technology (MAKAUT), Kolkata",
        period: "2023 - Present",
        details: "Specializing in embedded systems, microcontrollers, VLSI circuitry, and digital logic design. Maintaining a rigorous focus on practical hardware-software integration.",
        coursework: [
            "Digital Electronics",
            "Computer Architecture",
            "Analog Circuit Design",
            "Microprocessors & Microcontrollers",
            "Signals & Systems",
            "Object Oriented Programming (C++)"
        ]
    },
    {
        degree: "Higher Secondary Education (Class XII)",
        institution: "Science Stream (PCM)",
        period: "2021 - 2023",
        details: "Developed a strong foundation in Physics, Chemistry, and Advanced Mathematics which continues to support complex architectural logic and signal processing concepts.",
        coursework: ["Physics", "Mathematics", "Computer Science"]
    }
];

export default function EducationPage() {
    return (
        <div className="relative py-24 bg-background min-h-screen">
            <Container>
                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit tracking-widest uppercase mb-4">
                        <GraduationCap className="h-3 w-3" />
                        Academic Profile
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-glow">
                        Education & Training
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Formal academic foundation supporting my practical engineering skills in hardware design and full-stack software development.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl border-l-2 border-primary/20 pl-8 ml-4 md:ml-8 space-y-16">
                    {EDUCATION.map((edu, index) => (
                        <div key={index} className="relative">
                            {/* Dot */}
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(74,222,128,0.5)]" />

                            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#f8fafc] mb-1">{edu.degree}</h2>
                                        <p className="text-lg font-semibold text-primary/80">{edu.institution}</p>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f172a] text-[#94a3b8] text-sm font-medium whitespace-nowrap h-fit border border-white/5">
                                        {edu.period}
                                    </div>
                                </div>

                                <p className="text-[#cbd5e1] leading-relaxed mb-8">
                                    {edu.details}
                                </p>

                                <div>
                                    <h3 className="flex items-center gap-2 text-sm font-bold text-[#6b7280] uppercase tracking-wider mb-4">
                                        <BookOpen className="w-4 h-4" />
                                        Relevant Coursework
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                        {edu.coursework.map(course => (
                                            <div key={course} className="flex items-center gap-2 text-sm text-[#f8fafc] bg-white/[0.02] border border-white/5 p-2 rounded-lg">
                                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                                <span className="truncate">{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
