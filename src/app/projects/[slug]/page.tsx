import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { projects } from "@/data/projects";
import { ArrowLeft, Cpu, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudy({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="relative py-24 bg-background min-h-screen">
            <Container>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-12 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>

                <div className="max-w-4xl">
                    <div className="mb-8 flex items-center justify-between">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-glow">
                            {project.title}
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl font-light text-primary mb-6">
                        {project.tagline}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-white/10 pb-8">
                        {project.role && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                                Role: {project.role}
                            </span>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                                <Github className="h-4 w-4" /> Source Code
                            </a>
                        )}
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                                <ExternalLink className="h-4 w-4" /> Live Demo
                            </a>
                        )}
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <h2>Overview</h2>
                        <p>{project.description}</p>

                        <h3 className="flex items-center gap-2 mt-8 mb-4 text-2xl font-semibold">
                            <Cpu className="h-6 w-6 text-primary" /> Architecture & Features
                        </h3>
                        <ul>
                            {project.features.map((feature) => (
                                <li key={feature} className="text-muted-foreground">{feature}</li>
                            ))}
                        </ul>

                        <h3 className="mt-8 mb-4 text-2xl font-semibold">Hardware & Software Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Extended content simulating a full case study */}
                        <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-white/5 glass-card">
                            <h4 className="text-xl font-bold mb-4">Engineering Documentation</h4>
                            <p className="text-muted-foreground text-sm">
                                Detailed architecture diagrams, schematics, and code snippets would be rendered here,
                                pulled natively or dynamically based on project complexity.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
