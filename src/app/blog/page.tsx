import type { Metadata } from "next";
import { PostCard } from "@/components/blog/post-card";
import { siteConfig } from "@/data/portfolio";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
  description: "Engineering writing on AI systems, automation, and production ops.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-[760px] px-7 pb-[120px] pt-12">
      <header className="mb-12 border-b border-border pb-10">
        <p className="mb-3 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          Blog
        </p>
        <h1 className="mb-4 text-[32px] leading-[1.15] font-semibold tracking-[-0.03em]">
          Writing
        </h1>
        <p className="max-w-[520px] text-[15px] leading-[1.7] text-muted-2">
          Engineering notes on AI agents, automation, and the systems behind
          them.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
