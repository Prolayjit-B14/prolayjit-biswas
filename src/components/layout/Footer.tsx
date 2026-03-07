import Link from "next/link";
import { Container } from "./Container";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/50 py-12 backdrop-blur-lg">
            <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <Link href="/" className="text-xl font-bold tracking-tight text-glow">
                        PB.
                    </Link>
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        From Hello World to Hardware — Building Smart Systems with Code and Circuits.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/Prolayjit-B14"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/prolayjit-biswas"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://x.com/pro_lay04"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a
                        href="mailto:prolayjitbiswas14112004@gmail.com"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </Container>
        </footer>
    );
}
