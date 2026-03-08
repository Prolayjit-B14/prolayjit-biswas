import { Container } from "@/components/layout/Container";
import { Trophy, Code2, Users, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { hackathons } from "@/data/hackathons";
import Image from "next/image";

export const metadata = {
    title: "Hackathons & Competitions | Prolayjit Biswas",
    description: "My journey through hackathons, prototyping under pressure, and building fast solutions.",
};

export default function HackathonsPage() {
    return (
        <div className="relative py-24 bg-background min-h-screen">
            <Container>
                {/* Header */}
                <div className="mb-16 max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit tracking-widest uppercase mb-4">
                        <Trophy className="h-3 w-3" />
                        Competitive Building
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-glow">
                        Hackathons & Competitions
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Prototyping under pressure, collaborating with brilliant minds, and turning concepts into functional hardware and software MVPs in record time.
                    </p>
                </div>

                {/* Timeline Layout */}
                <div className="space-y-12">
                    {hackathons.map((hackathon, index) => (
                        <div
                            key={hackathon.slug}
                            className="glass-card overflow-hidden border border-white/5 hover:border-primary/30 transition-all rounded-3xl"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image / Banner Side */}
                                <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px] bg-[#0a0f1c] overflow-hidden">
                                    {hackathon.imageUrl ? (
                                        <>
                                            <img
                                                src={hackathon.imageUrl}
                                                alt={hackathon.name}
                                                className="absolute inset-0 w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#030712] via-[#030712]/50 to-transparent" />
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-blue-900/20">
                                            <Trophy className="w-24 h-24 text-primary/20" />
                                        </div>
                                    )}

                                    {/* Project Badge */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 inline-block">
                                            <span className="text-xs text-[#94a3b8] font-semibold uppercase tracking-wider mb-1 block">Project Built</span>
                                            <span className="text-xl font-bold text-primary flex items-center gap-2">
                                                <Code2 className="w-5 h-5" />
                                                {hackathon.project}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-l from-white/[0.01] to-transparent">
                                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#94a3b8] mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /> {hackathon.date}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> {hackathon.organizer}</span>
                                        <span className="flex items-center gap-1.5 text-white bg-white/10 px-3 py-1 rounded-full"><Users className="w-4 h-4" /> {hackathon.role}</span>
                                    </div>

                                    <h2 className="text-3xl font-bold tracking-tight text-[#f8fafc] mb-6">
                                        {hackathon.name}
                                    </h2>

                                    <p className="text-[#cbd5e1] leading-relaxed mb-8 text-lg">
                                        {hackathon.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-8">
                                        <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-wider mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {hackathon.technologies.map(tech => (
                                                <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#0f172a] border border-white/5 text-sm font-medium text-[#f8fafc]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Awards/Achievements */}
                                    {hackathon.awards && hackathon.awards.length > 0 && (
                                        <div className="pt-6 border-t border-white/5">
                                            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-wider mb-3">Achievements</h3>
                                            <div className="flex flex-col gap-2">
                                                {hackathon.awards.map(award => (
                                                    <div key={award} className="flex items-center gap-2 text-primary font-medium">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        {award}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
