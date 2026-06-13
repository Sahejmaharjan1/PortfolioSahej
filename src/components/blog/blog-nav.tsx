import Link from "next/link";

export function BlogNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/[0.04] bg-bg/85 backdrop-blur-[18px]"
      aria-label="Blog navigation"
    >
      <div className="mx-auto flex max-w-[760px] items-center justify-between px-7 py-5">
        <Link
          href="/"
          scroll
          className="font-mono text-sm font-medium tracking-[0.06em] text-muted no-underline transition-colors hover:text-text"
        >
          <span className="text-accent-2">~/</span>sahej
        </Link>
        <div className="flex gap-8 max-[680px]:gap-[18px]">
        <Link
          href="/blog"
          scroll
          className="text-[13px] tracking-[0.04em] text-text no-underline"
        >
          blog
        </Link>
        <Link
          href="/"
          scroll
          className="text-[13px] tracking-[0.04em] text-muted no-underline transition-colors hover:text-text"
        >
          portfolio
        </Link>
        </div>
      </div>
    </nav>
  );
}
