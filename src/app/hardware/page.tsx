import { Container } from "@/components/layout/Container";
import { PCBViewer } from "@/components/hardware/PCBViewer";
import { HardwareGallery } from "@/components/hardware/HardwareGallery";
import { Cpu, Layers } from "lucide-react";

export const metadata = {
    title: "Hardware Lab | Prolayjit Biswas",
    description: "Interactive hardware dashboard, PCB 3D viewer, and prototyping gallery.",
};

export default function HardwareLabPage() {
    return (
        <div className="min-h-screen bg-[#030712]">
            {/* Page Header */}
            <div className="border-b border-white/5 bg-[#030712]/80 backdrop-blur-lg">
                <Container>
                    <div className="flex flex-col gap-2 py-16 pt-28">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit tracking-widest uppercase mb-4">
                            <Layers className="h-3 w-3" />
                            Embedded Systems · PCB Design
                        </div>
                        <h1 className="flex items-center gap-4 text-4xl md:text-6xl font-black tracking-tight text-glow">
                            <Cpu className="h-9 w-9 text-primary" />
                            Hardware Lab
                        </h1>
                        <p className="text-lg text-[#6b7280] max-w-xl mt-2">
                            Explore 3D PCB models, breadboard prototypes, circuit diagrams, and live experiments.
                        </p>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="py-16 space-y-24">
                    {/* PCB Viewer */}
                    <section>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-[#f8fafc] mb-1">Interactive PCB Viewer</h2>
                                <p className="text-sm text-[#6b7280]">Drag to orbit · Scroll to zoom · Auto-rotates</p>
                            </div>
                        </div>
                        <PCBViewer />
                    </section>

                    {/* Gallery */}
                    <section>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-[#f8fafc] mb-2">Prototyping Gallery</h2>
                            <p className="text-[#6b7280] max-w-2xl">
                                A look into the hands-on engineering process — from initial breadboard sketches and
                                logic analyzer outputs to finalized wearable assemblies.
                            </p>
                        </div>
                        <HardwareGallery />
                    </section>
                </div>
            </Container>
        </div>
    );
}
