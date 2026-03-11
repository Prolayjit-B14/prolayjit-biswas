import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { GithubStats } from "@/components/dashboard/GithubStats";
import { RepoCards } from "@/components/dashboard/RepoCards";
import { getGithubData } from "@/lib/github";
import { Github, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Dashboard | Prolayjit Biswas",
    description: "Live developer analytics, GitHub contributions, and technical activity.",
};

export const revalidate = 3600;

export default async function DashboardPage() {
    const { user, repos } = await getGithubData("Prolayjit-B14");

    return (
        <div className="min-h-screen bg-[#030712]">
            <PageHero
                badge="Live Sync · GitHub API"
                badgeIconName="LayoutDashboard"
                title="Developer Dashboard"
                description="Real-time analytics and repository activity — fetched live from the GitHub API with ISR revalidation every hour."
                accentColor="primary"
            >
                {user && (
                    <a
                        href={user.html_url}
                        target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-green-400 transition-colors font-medium"
                    >
                        <Github className="h-4 w-4" />
                        @{user.login}
                        <ExternalLink className="h-3 w-3" />
                    </a>
                )}
            </PageHero>

            <Container>
                <div className="py-14 space-y-16">
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-0.5 w-8 bg-gradient-to-r from-primary to-transparent rounded-full" />
                            <h2 className="text-xl font-bold text-[#f8fafc] flex items-center gap-2">
                                <Github className="h-5 w-5 text-[#f8fafc]" /> GitHub Analytics
                            </h2>
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
