"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between glass-card p-6 h-full border border-white/5 hover:border-primary/50 transition-colors"
        >
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold tracking-tight text-glow group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <Cpu className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm font-medium text-primary mb-3">{project.tagline}</p>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-muted-foreground">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>

            <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors mt-auto"
            >
                <Code className="h-4 w-4" />
                View Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );
}
