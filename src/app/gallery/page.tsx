import { Container } from "@/components/layout/Container";
import { Image as ImageIcon } from "lucide-react";
import { hackathons } from "@/data/hackathons";
import { projects } from "@/data/projects";

export const metadata = {
    title: "Gallery | Prolayjit Biswas",
    description: "Visual showcase of hardware projects, hackathon achievements, and prototypes.",
};

export default function GalleryPage() {
    // Combine hackathons and projects that have images
    const galleryItems = [
        ...hackathons.map(h => ({
            title: h.name,
            subtitle: h.project,
            imageUrl: h.imageUrl,
            category: "Hackathon",
            date: h.date
        })),
        ...projects.filter(p => p.imageUrl).map(p => ({
            title: p.title,
            subtitle: p.role,
            imageUrl: p.imageUrl,
            category: p.category,
            date: p.date
        }))
    ].filter(item => item.imageUrl); // Ensure they all have images

    return (
        <div className="relative py-24 bg-background min-h-screen">
            <Container>
                {/* Header */}
                <div className="mb-16 max-w-2xl text-center mx-auto">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit tracking-widest uppercase mb-4">
                        <ImageIcon className="h-3 w-3" />
                        Visual Portfolio
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-glow">
                        Projects & Achievements Gallery
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A visual journey through my hardware prototypes, hackathon wins, and software deployments.
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 aspect-video md:aspect-[4/5] lg:aspect-square flex items-center justify-center cursor-pointer"
                        >
                            {item.imageUrl ? (
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                                />
                            ) : null}

                            {/* Hover Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/5 text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                                    {item.category}
                                </div>
                                <h3 className="text-lg font-bold text-[#f8fafc] mb-1">{item.title}</h3>
                                <div className="flex items-center justify-between text-xs font-medium text-[#94a3b8]">
                                    <span>{item.subtitle}</span>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
