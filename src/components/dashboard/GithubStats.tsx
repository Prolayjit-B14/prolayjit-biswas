"use client";

import { motion } from "framer-motion";
import { GitCommit, Users, BookOpen, Star } from "lucide-react";

export function GithubStats({ user }: { user: any }) {
    if (!user) return <div className="p-8 text-center text-muted-foreground">Unable to load GitHub stats.</div>;

    const stats = [
        { label: "Public Repos", value: user.public_repos, icon: BookOpen },
        { label: "Followers", value: user.followers, icon: Users },
        { label: "Public Gists", value: user.public_gists, icon: GitCommit },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="glass-card flex flex-col items-center justify-center p-6 text-center"
                    >
                        <Icon className="mb-4 h-8 w-8 text-primary" />
                        <span className="text-3xl font-black text-glow mb-2">{stat.value}</span>
                        <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                    </motion.div>
                );
            })}
        </div>
    );
}
