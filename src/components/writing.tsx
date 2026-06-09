import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconBooks, IconPencil } from "@tabler/icons-react";
import { PostCard } from "@/components/blog/post-card";
import { blogPost, siteConfig } from "@/data/portfolio";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/ui/section-heading";

export function Writing() {
  const personalPosts = getAllPosts();

  return (
    <section className="mb-20" id="writing">
      <SectionHeading title="writing" />

      {personalPosts.length > 0 && (
        <div className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
              Personal blog
            </h3>
            <Link
              href="/blog"
              className="font-mono text-[10px] tracking-[0.06em] text-accent-2 no-underline hover:underline"
            >
              view all →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {personalPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="mb-3 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
          DVx Ventures
        </h3>
        <a
          href={blogPost.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-[14px] border border-border bg-bg-2 px-[26px] py-6 text-inherit no-underline transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent-2/40"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center rounded bg-accent-2/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.09em] text-accent-2 uppercase">
              <IconPencil size={12} aria-hidden="true" className="mr-1" />
              {blogPost.tag}
            </span>
            <span className="font-mono text-xs text-muted">{blogPost.date}</span>
          </div>
          <h3 className="mb-2 text-[17px] leading-[1.35] font-semibold tracking-[-0.015em]">
            {blogPost.title}
          </h3>
          <p className="mb-4 text-[13.5px] leading-[1.65] text-muted-2">
            {blogPost.description}
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
                {blogPost.coAuthorInitials}
              </div>
              <span>{blogPost.coAuthors}</span>
            </div>
            <span className="flex items-center gap-1 text-xs text-accent-2">
              <IconArrowRight size={14} aria-hidden="true" />
              Read on DVx Blog
            </span>
          </div>
        </a>
        <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-accent-2/18 bg-accent-2/5 px-4 py-3 text-xs text-muted">
          <IconBooks size={14} aria-hidden="true" className="shrink-0 text-accent-2" />
          Part 3 of the Tactix engineering series — also covers multi-agent
          architecture (part 1) and the data flywheel (part 2).
        </div>
      </div>
    </section>
  );
}
