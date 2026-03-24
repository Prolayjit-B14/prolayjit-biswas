import { z } from "zod";

const GitHubUserSchema = z.object({
    login: z.string(),
    avatar_url: z.string(),
    name: z.string().nullable().optional(),
    bio: z.string().nullable().optional(),
    public_repos: z.number(),
    followers: z.number(),
    following: z.number(),
    public_gists: z.number(),
    html_url: z.string(),
}).passthrough();

const GitHubRepoSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullable().optional(),
    html_url: z.string(),
    stargazers_count: z.number(),
    forks_count: z.number(),
    language: z.string().nullable().optional(),
    topics: z.array(z.string()).optional().default([]),
}).passthrough();

export type GitHubUser = z.infer<typeof GitHubUserSchema>;
export type GitHubRepo = z.infer<typeof GitHubRepoSchema>;

export interface GitHubData {
    user: GitHubUser | null;
    repos: GitHubRepo[];
}

export async function getGithubData(username: string): Promise<GitHubData> {
    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    };

    if (token) headers["Authorization"] = `Bearer ${token}`;

    try {
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
            fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=15`, {
                headers,
                next: { revalidate: 3600 },
            }),
        ]);

        if (!userRes.ok || !reposRes.ok) {
            throw new Error(`GitHub API error: user=${userRes.status} repos=${reposRes.status}`);
        }

        const [userData, reposData] = await Promise.all([userRes.json(), reposRes.json()]);

        const user = GitHubUserSchema.parse(userData);
        const repos = z.array(GitHubRepoSchema).parse(reposData);

        return { user, repos };
    } catch (error) {
        console.error("[GitHub] Failed to fetch data:", error);
        return { user: null, repos: [] };
    }
}
