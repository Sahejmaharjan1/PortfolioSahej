import Link from "next/link";
import {
  formatBlogDate,
  formatReadTime,
  type BlogPostMeta,
} from "@/lib/blog";

export function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-[14px] border border-border bg-bg-2 px-[26px] py-6 text-inherit no-underline transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent-2/40"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="inline-flex shrink-0 items-center rounded bg-accent-2/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.09em] text-accent-2 uppercase">
          {post.category}
        </span>
        <span className="shrink-0 font-mono text-[10px] tracking-[0.06em] text-muted uppercase">
          {formatBlogDate(post.publishedDate)} · {formatReadTime(post.readTimeMinutes)}
        </span>
      </div>
      <h2 className="mb-2 text-[20px] leading-[1.35] font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent-2">
        {post.title}
      </h2>
      <p className="text-[14px] leading-[1.7] text-muted-2">{post.description}</p>
    </Link>
  );
}
