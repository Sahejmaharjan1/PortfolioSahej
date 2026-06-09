import { BlogNav } from "@/components/blog/blog-nav";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogNav />
      {children}
    </>
  );
}
