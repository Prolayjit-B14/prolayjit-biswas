import { Hero } from "@/components/sections/Hero";
import { DomainRoles } from "@/components/sections/DomainRoles";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { SocialWall } from "@/components/sections/SocialWall";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/layout/Container";
import { Trophy, ArrowRight, Layers, GitBranch, Award } from "lucide-react";
import Link from "next/link";
import { getGithubData } from "@/lib/github";
import { getBlogPosts } from "@/lib/blog";
import { RepoCards } from "@/components/dashboard/RepoCards";

export default async function Home() {
  const { user, repos } = await getGithubData("Prolayjit-B14");
  const topRepos = repos.slice(0, 3);

  const allPosts = await getBlogPosts();
  const topPosts = allPosts.slice(0, 3);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalRepos = user?.public_repos || repos.length;

  return (
    <>
      {/* 1. Who are you? */}
      <Hero stats={{ stars: totalStars, repos: totalRepos }} />

      {/* Stats strip — quick credibility signal */}
      <div className="relative border-y border-white/5 bg-[#050d1a] overflow-hidden">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { icon: Layers,    value: "6+",         label: "Projects Shipped" },
              { icon: Award,     value: "2",           label: "Hackathon Wins" },
              { icon: GitBranch, value: "3",           label: "Engineering Domains" },
              { icon: Trophy,    value: "National",    label: "SIH 2024 Level" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center justify-center py-6 px-4 gap-1 text-center">
                <Icon className="h-4 w-4 text-primary mb-1 opacity-70" />
                <span className="text-2xl md:text-3xl font-black text-glow">{value}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 2. What do you do? */}
      <DomainRoles />

      {/* 3. What tools do you use? */}
      <Skills />

      {/* 4. How did you get here? */}
      <Timeline />

      {/* 5. What have you built? */}
      <section className="relative py-16 bg-background border-t border-white/5">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary w-fit uppercase mb-4 tracking-wider">
                <Trophy className="h-3 w-3" />
                Featured Work
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-glow">
                Hackathons & Projects
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <RepoCards repos={topRepos} />
        </Container>
      </section>

      {/* 6. Community & social proof */}
      <SocialWall posts={topPosts} />

      {/* 7. Connect — final CTA */}
      <Contact />
    </>
  );
}
