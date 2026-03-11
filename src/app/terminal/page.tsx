import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Terminal } from "@/components/terminal/Terminal";

export const metadata = {
    title: "Terminal | Prolayjit Biswas",
    description: "Interactive command-line interface to explore my portfolio.",
};

export default function TerminalPage() {
    return (
        <div className="relative bg-[#030712] min-h-screen">
            <PageHero
                badge="CLI · Interactive Shell"
                badgeIconName="TerminalIcon"
                title="System Terminal"
                description='Type commands to explore my portfolio environment. Try "help" to see what&#39;s available — projects, skills, contact, and more.'
                accentColor="primary"
                align="center"
            />
            <Container>
                <div className="py-10 max-w-4xl mx-auto">
                    <Terminal />
                </div>
            </Container>
        </div>
    );
}
