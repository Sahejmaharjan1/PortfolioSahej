import { navLinks } from "@/data/portfolio";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/[0.04] bg-bg/85 backdrop-blur-[18px]"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[920px] items-center justify-between px-7 py-5">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-[0.06em] text-muted no-underline"
        >
          <span className="text-accent-2">~/</span>sahej
        </a>
        <div className="flex gap-8 max-[680px]:gap-[18px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-[13px] tracking-[0.04em] text-muted no-underline transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
