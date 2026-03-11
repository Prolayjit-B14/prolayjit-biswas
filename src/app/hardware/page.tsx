import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PCBViewer } from "@/components/hardware/PCBViewer";
import { HardwareGallery } from "@/components/hardware/HardwareGallery";
import { Cpu } from "lucide-react";

export const metadata = {
    title: "Hardware Lab | Prolayjit Biswas",
    description: "Interactive hardware dashboard, PCB 3D viewer, and prototyping gallery.",
};

export default function HardwareLabPage() {
    return (
        <div className="min-h-screen bg-[#030712]">
            <PageHero
                badge="Embedded Systems · PCB Design"
                badgeIconName="Cpu"
                title="Hardware Lab"
                description="Explore 3D PCB models, breadboard prototypes, circuit diagrams, and live experiments. From UART handshakes to wearable builds."
                accentColor="blue"
            />

            <Container>
                <div className="py-14 space-y-20">
                    {/* PCB Viewer */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                            <h2 className="text-xl font-bold text-[#f8fafc]">Interactive PCB Viewer</h2>
                            <span className="text-xs text-[#6b7280] font-medium">Drag · Orbit · Zoom</span>
                        </div>
                        <PCBViewer />
                    </section>

                    {/* Gallery */}
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                            <h2 className="text-xl font-bold text-[#f8fafc]">Prototyping Gallery</h2>
                        </div>
                        <p className="text-[#6b7280] max-w-2xl mb-8 text-sm">
                            A look into the hands-on engineering process — from initial breadboard sketches and logic analyzer outputs to finalized wearable assemblies.
                        </p>
                        <HardwareGallery />
                    </section>
                </div>
            </Container>
        </div>
    );
}
