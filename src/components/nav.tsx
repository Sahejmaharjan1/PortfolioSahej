import Link from "next/link";
import { navLinks } from "@/data/portfolio";
import { SectionLink } from "@/components/section-link";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/[0.04] bg-bg/85 backdrop-blur-[18px]"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[920px] items-center justify-between px-7 py-5">
        <Link
          href="/"
          scroll
          className="font-mono text-sm font-medium tracking-[0.06em] text-muted no-underline"
        >
          <span className="text-accent-2">~/</span>sahej
        </Link>
        <div className="flex gap-8 max-[680px]:gap-[18px]">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const className =
              "cursor-pointer text-[13px] tracking-[0.04em] text-muted no-underline transition-colors hover:text-text";

            if (isExternal) {
              return (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              );
            }

            if (link.href.startsWith("/")) {
              return (
                <Link key={link.href} href={link.href} scroll className={className}>
                  {link.label}
                </Link>
              );
            }

            return (
              <SectionLink key={link.href} href={link.href} className={className}>
                {link.label}
              </SectionLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
