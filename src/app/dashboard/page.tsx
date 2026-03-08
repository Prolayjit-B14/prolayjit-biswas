import { Container } from "@/components/layout/Container";
import { GithubStats } from "@/components/dashboard/GithubStats";
import { RepoCards } from "@/components/dashboard/RepoCards";
import { getGithubData } from "@/lib/github";
import { Github, LayoutDashboard, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Dashboard | Prolayjit Biswas",
    description: "Live developer analytics, GitHub contributions, and technical activity.",
};

export const revalidate = 3600;

export default async function DashboardPage() {
    const { user, repos } = await getGithubData("Prolayjit-B14");

    return (
        <div className="min-h-screen bg-[#030712]">
            {/* Page Header */}
            <div className="border-b border-white/5 bg-[#030712]/80 backdrop-blur-lg">
                <Container>
                    <div className="flex flex-col gap-2 py-16 pt-28">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit tracking-widest uppercase mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                            </span>
                            Live Sync · GitHub API
                        </div>
                        <h1 className="flex items-center gap-4 text-4xl md:text-6xl font-black tracking-tight text-glow">
                            <LayoutDashboard className="h-9 w-9 text-primary" />
                            Developer Dashboard
                        </h1>
                        <p className="text-lg text-[#6b7280] max-w-xl mt-2">
                            Real-time analytics and repository activity fetched directly from GitHub.
                        </p>
                        {user && (
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2 w-fit"
                            >
                                <Github className="h-4 w-4" />
                                @{user.login}
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        )}
                    </div>
                </Container>
            </div>

            {/* Stats Section */}
            <Container>
                <div className="py-16 space-y-16">
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Github className="h-6 w-6 text-[#f8fafc]" />
                            <h2 className="text-2xl font-bold text-[#f8fafc]">GitHub Analytics</h2>
                        </div>
                        <GithubStats user={user} />
                    </section>

                    <section>
                        <RepoCards repos={repos} />
                    </section>
                </div>
            </Container>
        </div>
    );
}
