import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogProse } from "@/components/blog/blog-prose";
import { siteConfig } from "@/data/portfolio";
import {
  formatBlogDate,
  formatReadTime,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="mx-auto max-w-[760px] px-7 pb-[120px] pt-10">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 font-mono text-[11px] tracking-[0.04em] text-muted"
      >
        <Link href="/blog" className="text-muted no-underline hover:text-accent-2">
          Blog
        </Link>
        <span className="mx-2 text-border-2">/</span>
        <span className="text-muted-2">{post.category}</span>
        <span className="mx-2 text-border-2">/</span>
        <span className="text-muted">{post.slug}</span>
      </nav>

      <header className="mb-12 border-b border-border pb-10">
        <p className="mb-4 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
          Blog / {post.category} / {post.slug}
        </p>
        <h1 className="mb-5 text-[34px] leading-[1.12] font-semibold tracking-[-0.03em] max-[680px]:text-[28px]">
          {post.title}
        </h1>
        <p className="mb-8 text-[17px] leading-[1.65] text-muted-2">
          {post.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="size-9 shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src={siteConfig.avatar}
                alt={post.author}
                width={36}
                height={36}
                className="size-full object-cover"
              />
            </div>
            <div>
              <p className="text-[13px] font-medium">{post.author}</p>
              <p className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                {formatBlogDate(post.publishedDate)} ·{" "}
                {formatReadTime(post.readTimeMinutes)}
              </p>
            </div>
          </div>
        </div>
      </header>

      <BlogProse html={post.content} />

      <footer className="mt-16 border-t border-border pt-10">
        <div className="mb-8 flex items-start gap-4 rounded-[14px] border border-border bg-bg-2 p-6">
          <div className="size-12 shrink-0 overflow-hidden rounded-full border border-border">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              width={48}
              height={48}
              className="size-full object-cover"
            />
          </div>
          <div>
            <p className="mb-1 text-[11px] font-medium tracking-[0.06em] text-muted uppercase">
              About {post.author}
            </p>
            <p className="mb-1 text-[15px] font-medium">{siteConfig.name}</p>
            <p className="text-[13px] leading-[1.65] text-muted-2">
              AI Engineer at {siteConfig.company}. Building production-grade
              multi-agent systems and automation on GCP.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-block font-mono text-[11px] text-accent-2 no-underline hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <Link
          href="/blog"
          className="font-mono text-[12px] tracking-[0.04em] text-accent-2 no-underline hover:underline"
        >
          ← Back to all posts
        </Link>
      </footer>
    </main>
  );
}
