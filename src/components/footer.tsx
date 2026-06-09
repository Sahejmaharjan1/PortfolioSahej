import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer
      className="flex items-center justify-between border-t border-border pt-7"
      role="contentinfo"
    >
      <span className="font-mono text-xs text-muted">{siteConfig.url.replace("https://", "")}</span>
      <span className="font-mono text-xs text-muted opacity-40">Dublin · 2026</span>
    </footer>
  );
}
