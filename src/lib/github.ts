export interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    public_gists: number;
    html_url: string;
}

export interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
}

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

        const [user, repos] = await Promise.all([userRes.json(), reposRes.json()]) as [GitHubUser, GitHubRepo[]];

        return { user, repos };
    } catch (error) {
        console.error("[GitHub] Failed to fetch data:", error);
        return { user: null, repos: [] };
    }
}
