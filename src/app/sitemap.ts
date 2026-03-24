import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://prolayjit-biswas.vercel.app";
    const now = new Date();

    return [
        {
            url: base,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${base}/projects`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${base}/hardware`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${base}/hackathons`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${base}/education`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${base}/gallery`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${base}/dashboard`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.6,
        },
        {
            url: `${base}/blog`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${base}/terminal`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
