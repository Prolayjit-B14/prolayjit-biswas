import { Container } from "@/components/layout/Container";
import { getBlogPosts } from "@/lib/blog";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { FileText, ExternalLink } from "lucide-react";

export const metadata = {
    title: "Blog | Prolayjit Biswas",
    description: "Technical writing, hardware guides, and engineering notes.",
};

export const revalidate = 3600;

const FALLBACK_POSTS = [
    {
        title: "My Raw First Year in Engineering",
        link: "https://dev.to/pro_lay04",
        pubDate: "2024-09-01",
        categories: ["programming", "webdev", "ai"],
        contentSnippet: "One year ago, I started my journey as a first-year B.Tech Electronics Engineering student. Here's what I learned.",
        source: "dev.to"
    },
    {
        title: "Introduction to Git & GitHub",
        link: "https://dev.to/pro_lay04",
        pubDate: "2024-04-01",
        categories: ["github", "git", "opensource"],
        contentSnippet: "Git and GitHub are powerful tools for version control and collaboration. A beginner's guide.",
        source: "dev.to"
    },
    {
        title: "First Hackathon Experience",
        link: "https://dev.to/pro_lay04",
        pubDate: "2024-04-01",
        categories: ["hackathon", "beginners"],
        contentSnippet: "So, finally I am writing my first blog and it is about my first hackathon experience.",
        source: "dev.to"
    },
];

export default async function BlogPage() {
    let posts = await getBlogPosts();
    if (posts.length === 0) posts = FALLBACK_POSTS as typeof posts;

    return (
        <div className="min-h-screen bg-[#030712] relative">
            {/* Page Header */}
            <div className="border-b border-white/5 bg-[#030712]/80 backdrop-blur-lg">
                <Container>
                    <div className="flex flex-col gap-2 py-16 pt-28 max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit tracking-widest uppercase mb-4">
                            <FileText className="h-3 w-3" />
                            Technical Writing · Dev.to
                        </div>
                        <h1 className="flex items-center gap-4 text-4xl md:text-6xl font-black tracking-tight text-glow">
                            Blog & Notes
                        </h1>
                        <p className="text-xl text-[#94a3b8] mt-4 leading-relaxed">
                            Documenting my learning journey in electronics, software architecture, and artificial intelligence.
                        </p>
                        <a
                            href="https://dev.to/pro_lay04"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex flex-wrap items-center gap-2 text-sm text-primary hover:underline hover:text-green-400 w-fit mt-6 transition-colors"
                        >
                            View all articles on Dev.to
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="py-16">
                    <BlogGrid posts={posts} />
                </div>
            </Container>
        </div>
    );
}
