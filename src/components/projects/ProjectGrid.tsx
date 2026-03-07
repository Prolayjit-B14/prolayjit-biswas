"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

export function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
            ))}
        </div>
    );
}
