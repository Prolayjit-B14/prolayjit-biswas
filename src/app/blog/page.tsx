import { Container } from "@/components/layout/Container";
import { getBlogPosts } from "@/lib/blog";
import { formatDistanceToNow } from "date-fns";
import { FileText, ArrowRight, ExternalLink } from "lucide-react";

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
    },
    {
        title: "Introduction to Git & GitHub",
        link: "https://dev.to/pro_lay04",
        pubDate: "2024-04-01",
        categories: ["github", "git", "opensource"],
        contentSnippet: "Git and GitHub are powerful tools for version control and collaboration. A beginner's guide.",
    },
    {
        title: "First Hackathon Experience",
        link: "https://dev.to/pro_lay04",
        pubDate: "2024-04-01",
        categories: ["hackathon", "beginners"],
        contentSnippet: "So, finally I am writing my first blog and it is about my first hackathon experience.",
    },
];

export default async function BlogPage() {
    let posts = await getBlogPosts();
    if (posts.length === 0) posts = FALLBACK_POSTS as typeof posts;

    return (
        <div className="min-h-screen bg-[#030712]">
            {/* Page Header */}
            <div className="border-b border-white/5 bg-[#030712]/80 backdrop-blur-lg">
                <Container>
                    <div className="flex flex-col gap-2 py-16 pt-28">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit tracking-widest uppercase mb-4">
                            <FileText className="h-3 w-3" />
                            Technical Writing · Dev.to
                        </div>
                        <h1 className="flex items-center gap-4 text-4xl md:text-6xl font-black tracking-tight text-glow">
                            <FileText className="h-9 w-9 text-primary" />
                            Engineering Notes
                        </h1>
                        <p className="text-lg text-[#6b7280] max-w-xl mt-2">
                            Documenting my learning journey in electronics, software, and hardware development.
                        </p>
                        <a
                            href="https://dev.to/pro_lay04"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:underline w-fit mt-2"
                        >
                            View all on Dev.to
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, i) => (
                            <a
                                key={post.link + i}
                                href={post.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col glass-card p-6 hover:border-primary/40 transition-all hover:-translate-y-1 duration-300 border border-white/5"
                            >
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2 mb-3 text-[#f8fafc]">
                                        {post.title}
                                    </h2>
                                    <p className="text-xs text-primary font-semibold mb-3 uppercase tracking-wider">
                                        {post.pubDate
                                            ? formatDistanceToNow(new Date(post.pubDate), { addSuffix: true })
                                            : "Recent"}
                                    </p>
                                    <p className="text-sm text-[#6b7280] line-clamp-3 mb-4 leading-relaxed">
                                        {post.contentSnippet}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.categories.slice(0, 3).map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full bg-white/5 border border-white/8 px-2.5 py-0.5 text-xs font-medium text-[#6b7280]"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#f8fafc] group-hover:text-primary transition-colors pt-4 border-t border-white/5">
                                    Read Article
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
