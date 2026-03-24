import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { 
    ArrowLeft, Github, ExternalLink, Target, Lightbulb, TrendingUp, 
    Cpu, Code2, Server, ServerCrash, 
    Image as ImageIcon, BookOpen, TriangleAlert, Rocket
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudy({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) notFound();

    return (
        <div className="relative pt-32 pb-24 bg-[#02050a] min-h-screen">
            <Container>
                
                {/* BACK BUTTON */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-500 hover:text-white mb-16 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>

                {/* 1. HERO SECTION */}
                <div className="max-w-4xl mb-20">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-10 leading-snug">
                        {project.tagline}
                    </p>
                    
                    {/* LINKS */}
                    <div className="flex flex-wrap items-center gap-4">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all">
                                <Github className="h-4 w-4" /> Source Code
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-[#020617] hover:bg-emerald-400 transition-all">
                                <ExternalLink className="h-4 w-4" /> Live Demo
                            </a>
                        )}
                        {project.docUrl && (
                            <a href={project.docUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-bold text-zinc-300 hover:text-white hover:border-white/40 transition-all">
                                <BookOpen className="h-4 w-4" /> Documentation PDF
                            </a>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* LEFT COLUMN: Main Content Flow */}
                    <div className="lg:col-span-8 flex flex-col gap-16">
                        
                        {/* 2. OVERVIEW */}
                        {project.overview && (
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">Project Overview</h2>
                                <p className="text-zinc-400 leading-relaxed text-lg">{project.overview}</p>
                            </section>
                        )}

                        {/* 3 & 4. PROBLEM & SOLUTION */}
                        {(project.problem || project.solution) && (
                            <section className="grid md:grid-cols-2 gap-6">
                                {project.problem && (
                                    <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Target className="w-5 h-5 text-rose-400" />
                                            <h3 className="text-lg font-bold text-rose-100">Problem Statement</h3>
                                        </div>
                                        <div className="text-sm text-rose-200/70 leading-relaxed whitespace-pre-wrap">{project.problem}</div>
                                    </div>
                                )}
                                {project.solution && (
                                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Lightbulb className="w-5 h-5 text-emerald-400" />
                                            <h3 className="text-lg font-bold text-emerald-100">Solution Approach</h3>
                                        </div>
                                        <div className="text-sm text-emerald-200/70 leading-relaxed whitespace-pre-wrap">{project.solution}</div>
                                    </div>
                                )}
                            </section>
                        )}

                        {/* 5. SYSTEM ARCHITECTURE */}
                        {project.systemArchitecture && (
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">System Architecture</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {Object.entries(project.systemArchitecture).map(([key, items]) => (
                                        <div key={key} className="bg-white/5 border border-white/10 rounded-xl p-5">
                                            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">{key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                            <ul className="flex flex-col gap-1">
                                                {items.map(item => (
                                                    <li key={item} className="text-sm text-zinc-300 flex items-center gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-zinc-500" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* 6 & 7. HARDWARE & SOFTWARE DESIGN */}
                        <section className="flex flex-col gap-8">
                            {project.hardwareDesign && (
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                                        <Cpu className="w-6 h-6 text-zinc-400" /> Hardware Design
                                    </h2>
                                    <div className="bg-black/40 border border-white/5 rounded-2xl p-6 lg:p-8">
                                        <ul className="space-y-4">
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Microcontroller</span> <span className="text-zinc-300">{project.hardwareDesign.microcontroller}</span></li>
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Sensors</span> <span className="text-zinc-300">{project.hardwareDesign.sensors}</span></li>
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Power</span> <span className="text-zinc-300">{project.hardwareDesign.power}</span></li>
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Layout</span> <span className="text-zinc-300">{project.hardwareDesign.pcb}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {project.softwareDesign && (
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                                        <Code2 className="w-6 h-6 text-zinc-400" /> Software Design
                                    </h2>
                                    <div className="bg-black/40 border border-white/5 rounded-2xl p-6 lg:p-8">
                                        <ul className="space-y-4">
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Firmware</span> <span className="text-zinc-300">{project.softwareDesign.firmware}</span></li>
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Core Logic</span> <span className="text-zinc-300 flex flex-wrap gap-2">{project.softwareDesign.functions.join(", ")}</span></li>
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Backend</span> <span className="text-zinc-300">{project.softwareDesign.backend}</span></li>
                                            <li className="flex gap-4"><span className="text-zinc-500 w-32 font-medium">Frontend</span> <span className="text-zinc-300">{project.softwareDesign.frontend}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 11. GALLERY */}
                        {project.gallery && project.gallery.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                                    <ImageIcon className="w-6 h-6 text-zinc-400" /> Project Gallery
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.gallery.map((img, i) => (
                                        <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50">
                                            <Image src={img} alt={`Gallery Image ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                        
                        {/* 12 & 13. POST-MORTEM (Challenges & Future) */}
                        <section className="grid md:grid-cols-2 gap-6">
                            {(project.challenges || project.learnings) && (
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <TriangleAlert className="w-5 h-5 text-yellow-500" /> Challenges & Learnings
                                    </h3>
                                    {project.challenges && (
                                        <ul className="mb-4 space-y-2">
                                            {project.challenges.map(c => <li key={c} className="text-sm text-zinc-400">• {c}</li>)}
                                        </ul>
                                    )}
                                    {project.learnings && (
                                        <ul className="space-y-2 pt-4 border-t border-white/10">
                                            {project.learnings.map(l => <li key={l} className="text-sm text-emerald-400">• {l}</li>)}
                                        </ul>
                                    )}
                                </div>
                            )}
                            {project.futureImprovements && (
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <Rocket className="w-5 h-5 text-blue-400" /> Future Improvements
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.futureImprovements.map(f => <li key={f} className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 border border-zinc-500 rounded-full" /> {f}</li>)}
                                    </ul>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* RIGHT COLUMN: Sidebar (Tech Stack, Impact, Features) */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        
                        {/* 10. RESULTS / IMPACT */}
                        {(project.impact || project.outcome) && (
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 relative overflow-hidden">
                                <TrendingUp className="absolute -bottom-4 -right-4 w-24 h-24 text-emerald-500/10 pointer-events-none" />
                                <h3 className="text-lg font-bold text-emerald-400 mb-4">Results & Impact</h3>
                                {project.outcome && <p className="text-emerald-100 font-medium mb-3">{project.outcome}</p>}
                                {project.impact && <div className="text-sm text-emerald-200/70 whitespace-pre-wrap">{project.impact}</div>}
                            </div>
                        )}

                        {/* 9. KEY FEATURES */}
                        {project.features && (
                            <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {project.features.map(f => (
                                        <li key={f} className="text-sm text-zinc-400 flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            <span className="leading-snug">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* 8. TECH STACK (Detailed) */}
                        {(project.techStackDetailed || project.technologies) && (
                            <div className="bg-[#0b1220] border border-white/10 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-white mb-6">Technologies</h3>
                                
                                {project.techStackDetailed ? (
                                    <div className="flex flex-col gap-4">
                                        {Object.entries(project.techStackDetailed).map(([category, techs]) => (
                                            <div key={category}>
                                                <h4 className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">{category}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {techs.map(t => (
                                                        <span key={t} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 border border-white/10 text-zinc-300">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(t => (
                                            <span key={t} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-white/5 border border-white/10 text-zinc-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </Container>
        </div>
    );
}
