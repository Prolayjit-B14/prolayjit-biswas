export interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    categories: string[];
    contentSnippet: string;
    source: string;
    coverImage?: string;
    readingTime?: number;
}

// Fetches from Dev.to public API (no RSS parser needed — avoids server-side parsing issues)
export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const res = await fetch(
            "https://dev.to/api/articles?username=pro_lay04&per_page=9",
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) throw new Error("Dev.to API request failed");

        const articles = await res.json();

        return articles.map((a: Record<string, unknown>) => ({
            title: String(a.title ?? ""),
            link: String(a.url ?? ""),
            pubDate: String(a.published_at ?? ""),
            categories: Array.isArray(a.tag_list) ? (a.tag_list as string[]) : [],
            contentSnippet: String(a.description ?? ""),
            source: "dev.to",
            coverImage: String(a.cover_image ?? ""),
            readingTime: Number(a.reading_time_minutes ?? 0),
        }));
    } catch (err) {
        console.error("[Blog] Failed to fetch posts:", err);
        return [];
    }
}

