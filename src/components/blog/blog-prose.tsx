export function BlogProse({ html }: { html: string }) {
  return (
    <article
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
