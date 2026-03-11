import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { getBlogPosts } from "@/lib/blog";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { FileText, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Blog | Prolayjit Biswas",
    description: "Technical writing, hardware guides, and engineering notes.",
};

export const revalidate = 3600;

const FALLBACK_POSTS = [
    { title: "My Raw First Year in Engineering", link: "https://dev.to/pro_lay04", pubDate: "2024-09-01", categories: ["programming", "webdev"], contentSnippet: "One year ago, I started my journey as a first-year B.Tech Electronics Engineering student.", source: "dev.to" },
    { title: "Introduction to Git & GitHub", link: "https://dev.to/pro_lay04", pubDate: "2024-04-01", categories: ["github", "git", "opensource"], contentSnippet: "Git and GitHub are powerful tools for version control and collaboration.", source: "dev.to" },
    { title: "First Hackathon Experience", link: "https://dev.to/pro_lay04", pubDate: "2024-04-01", categories: ["hackathon", "beginners"], contentSnippet: "Writing about my first hackathon experience and what I learned.", source: "dev.to" },
];

export default async function BlogPage() {
    let posts = await getBlogPosts();
    if (posts.length === 0) posts = FALLBACK_POSTS as typeof posts;

    return (
        <div className="relative bg-[#030712] min-h-screen">
            <PageHero
                badge="Technical Writing · Dev.to"
                badgeIconName="FileText"
                title="Blog & Notes"
                description="Documenting my learning journey in electronics, software architecture, and artificial intelligence. Real experiments, real circuits, real code."
                accentColor="primary"
            >
                <a
                    href="https://dev.to/pro_lay04"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-green-400 transition-colors font-medium"
                >
                    View all on Dev.to <ExternalLink className="h-3.5 w-3.5" />
                </a>
            </PageHero>
            <Container>
                <div className="py-14">
                    <BlogGrid posts={posts} />
                </div>
            </Container>
        </div>
    );
}
