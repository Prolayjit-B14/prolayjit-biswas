import { Hero } from "@/components/sections/Hero";
import { UnifiedProjects } from "@/components/sections/UnifiedProjects";
import { DomainRoles } from "@/components/sections/DomainRoles";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { Contact } from "@/components/sections/Contact";
import { getGithubData } from "@/lib/github";
import { getBlogPosts } from "@/lib/blog";

export default async function Home() {
  const { user, repos } = await getGithubData("Prolayjit-B14");
  const topRepos = repos.slice(0, 3);
  const allPosts = await getBlogPosts();
  const topPosts = allPosts.slice(0, 3);

  return (
    <>
      {/* 1. Hero Section (Includes Trust & Social) */}
      <Hero />

      {/* 2. Unified Engineering Portfolio (Tabbed) */}
      <UnifiedProjects />

      {/* 3. Core Expertise (Grid) */}
      <DomainRoles />

      {/* 4. Technical Skills (Categorized badges) */}
      <Skills />

      {/* 5. Experience Timeline */}
      <Timeline />

      {/* 6. Community & Knowledge Sharing */}
      <CommunitySection repos={topRepos} posts={topPosts} />

      {/* 7. Contact CTA */}
      <Contact />
    </>
  );
}
