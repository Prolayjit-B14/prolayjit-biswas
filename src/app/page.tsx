import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { DomainRoles } from "@/components/sections/DomainRoles";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { OpenSource } from "@/components/sections/OpenSource";
import { SocialWall } from "@/components/sections/SocialWall";
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
      {/* 1. Hero Section (Above the fold) */}
      <Hero />

      {/* 2. Trust Badges (Immediate credibility) */}
      <TrustBar />

      {/* 3. Featured Work (2 best projects) */}
      <FeaturedProjects />

      {/* 4. Core Expertise (Grid) */}
      <DomainRoles />

      {/* 5. Technical Skills (Categorized badges) */}
      <Skills />

      {/* 6. Experience Timeline */}
      <Timeline />

      {/* 8. Open Source / GitHub Activity */}
      <OpenSource repos={topRepos} />

      {/* 9. Articles / Blog */}
      <SocialWall posts={topPosts} />

      {/* 10. Contact CTA */}
      <Contact />
    </>
  );
}
