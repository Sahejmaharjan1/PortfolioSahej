import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconBooks, IconPencil } from "@tabler/icons-react";
import { PostCard } from "@/components/blog/post-card";
import { getDvxPostsByDate, siteConfig } from "@/data/portfolio";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";

type WritingItem =
  | {
      kind: "personal";
      date: string;
      post: ReturnType<typeof getAllPosts>[number];
    }
  | {
      kind: "dvx";
      date: string;
      post: ReturnType<typeof getDvxPostsByDate>[number];
    };

export function Writing() {
  const personalPosts = getAllPosts();
  const dvxPosts = getDvxPostsByDate();

  const items: WritingItem[] = [
    ...personalPosts.map((post) => ({
      kind: "personal" as const,
      date: post.publishedDate,
      post,
    })),
    ...dvxPosts.map((post) => ({
      kind: "dvx" as const,
      date: post.publishedDate,
      post,
    })),
  ].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section className="mb-20" id="writing">
      <SectionHeading title="writing" />

      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
          All posts
        </h3>
        {personalPosts.length > 0 && (
          <Link
            href="/blog"
            className="font-mono text-[10px] tracking-[0.06em] text-accent-2 no-underline hover:underline"
          >
            personal blog →
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item) =>
          item.kind === "personal" ? (
            <PostCard key={item.post.slug} post={item.post} />
          ) : (
            <a
              key={item.post.href}
              href={item.post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[14px] border border-border bg-bg-2 px-[26px] py-6 text-inherit no-underline transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent-2/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center rounded bg-accent-2/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.09em] text-accent-2 uppercase">
                  <IconPencil size={12} aria-hidden="true" className="mr-1" />
                  {item.post.tag}
                </span>
                <span className="font-mono text-xs text-muted">{item.post.date}</span>
              </div>
              <h3 className="mb-2 text-[17px] leading-[1.35] font-semibold tracking-[-0.015em]">
                {item.post.title}
              </h3>
              <p className="mb-4 text-[13.5px] leading-[1.65] text-muted-2">
                {item.post.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <div className="size-[26px] shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={siteConfig.avatar}
                      alt={siteConfig.name}
                      width={26}
                      height={26}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-accent-2/20 text-[9px] font-semibold text-accent-2">
                    {item.post.coAuthorInitials}
                  </div>
                  <span>{item.post.coAuthors}</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-accent-2">
                  <IconArrowRight size={14} aria-hidden="true" />
                  Read on DVx Blog
                </span>
              </div>
            </a>
          ),
        )}
      </div>

      <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-accent-2/18 bg-accent-2/5 px-4 py-3 text-xs text-muted">
        <IconBooks size={14} aria-hidden="true" className="shrink-0 text-accent-2" />
        Three co-authored posts on the DVx Ventures blog — agent latency, MCP
        data routing, and access control for AI agents.
      </div>
    </section>
  );
}
