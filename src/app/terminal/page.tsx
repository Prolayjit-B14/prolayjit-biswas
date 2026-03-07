import { Container } from "@/components/layout/Container";
import { Terminal } from "@/components/terminal/Terminal";
import { Terminal as TermIcon } from "lucide-react";

export const metadata = {
    title: "Terminal | Prolayjit Biswas",
    description: "Interactive command-line interface to explore my portfolio.",
};

export default function TerminalPage() {
    return (
        <div className="relative py-24 bg-background min-h-screen flex items-center justify-center">
            <Container>
                <div className="mb-12 text-center">
                    <h1 className="flex items-center justify-center gap-4 text-4xl md:text-5xl font-black tracking-tight mb-4 text-glow mx-auto">
                        <TermIcon className="h-8 w-8 text-primary" />
                        System Terminal
                    </h1>
                    <p className="text-muted-foreground">
                        Execute commands to explore my digital portfolio environment.
                    </p>
                </div>

                <Terminal />
            </Container>
        </div>
    );
}
