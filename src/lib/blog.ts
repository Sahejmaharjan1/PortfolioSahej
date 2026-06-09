import fs from "fs";
import path from "path";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  authorSlug: string;
  readTimeMinutes: number;
  publishedDate: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) =>
      fs.existsSync(path.join(BLOG_DIR, entry.name, "meta.json")),
    )
    .map((entry) => entry.name);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const postDir = path.join(BLOG_DIR, slug);
  const metaPath = path.join(postDir, "meta.json");
  const contentPath = path.join(postDir, "content.html");

  if (!fs.existsSync(metaPath) || !fs.existsSync(contentPath)) return null;

  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8")) as BlogPostMeta;
  const content = fs.readFileSync(contentPath, "utf8");

  return { ...meta, content };
}

export function getAllPosts(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .map((post) => {
      const { slug, title, description, category, author, authorSlug, readTimeMinutes, publishedDate } = post;
      return { slug, title, description, category, author, authorSlug, readTimeMinutes, publishedDate };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime(),
    );
}

export function formatBlogDate(dateString: string): string {
  const date = new Date(dateString);
  const month = date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return `${month} ${day} · ${year}`;
}

export function formatReadTime(minutes: number): string {
  return `${minutes} MIN READ`;
}
