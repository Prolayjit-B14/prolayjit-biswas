import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";
import { Blocks } from "lucide-react";

export const metadata = {
    title: "Projects | Prolayjit Biswas",
    description: "Explore my hardware, software, and IoT engineering projects.",
};

export default function ProjectsPage() {
    return (
        <div className="relative bg-[#030712] min-h-screen">
            <PageHero
                badge="Engineering Work"
                badgeIconName="Blocks"
                title="Projects"
                description="Hardware, software, and IoT solutions — from PCB schematics to full-stack dashboards. Explore the systems I've built."
                accentColor="primary"
            />
            <Container>
                <div className="py-14">
                    <ProjectGrid projects={projects} />
                </div>
            </Container>
        </div>
    );
}
