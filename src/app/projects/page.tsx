import { Container } from "@/components/layout/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata = {
    title: "Projects | Prolayjit Biswas",
    description: "Explore my interactive engineering projects, embedded systems, and software platforms.",
};

export default function ProjectsPage() {
    return (
        <div className="relative py-24 bg-background min-h-screen">
            <Container>
                <div className="mb-16 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-glow">
                        Engineering Projects
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        A comprehensive showcase of hardware integration, software architecture, and real-world solutions.
                    </p>
                </div>

                <ProjectGrid projects={projects} />
            </Container>
        </div>
    );
}
