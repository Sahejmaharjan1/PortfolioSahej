import {
  IconArrowRight,
  IconBrandGithub,
  IconGitFork,
  IconGitPullRequest,
  IconStar,
} from "@tabler/icons-react";
import { openSourceContribution } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusDot } from "@/components/ui/status-dot";

export function OpenSource() {
  const { repo, pr } = openSourceContribution;

  return (
    <section className="mb-20" id="opensource">
      <SectionHeading title="open source" />
      <div className="relative overflow-hidden rounded-[14px] border border-green/25 bg-bg-2 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-green/40">
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-green/60 to-transparent" />
        <div className="absolute -top-24 -right-24 size-48 rounded-full bg-green/5 blur-3xl" />

        <div className="relative px-[26px] py-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded bg-green/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.09em] text-green uppercase">
                <StatusDot size="sm" />
                {pr.status}
              </span>
              <span className="rounded bg-accent-4/10 px-2.5 py-0.5 font-mono text-[10px] tracking-[0.09em] text-accent-4 uppercase">
                {pr.label}
              </span>
              <span className="rounded bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-muted">
                Fixes {pr.issue}
              </span>
            </div>
            <span className="font-mono text-xs text-muted">{pr.date}</span>
          </div>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-3">
              <IconBrandGithub size={20} className="text-text" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold tracking-[-0.01em] text-text no-underline transition-colors hover:text-accent-3"
              >
                {repo.name}
              </a>
              <p className="text-xs text-muted">
                <a
                  href={repo.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-2 no-underline hover:text-accent-3"
                >
                  codu.co
                </a>
                {" · "}
                {repo.description}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-4 font-mono text-xs text-muted">
              <span className="flex items-center gap-1">
                <IconStar size={13} className="text-amber" aria-hidden="true" />
                {repo.stars}
              </span>
              <span className="flex items-center gap-1">
                <IconGitFork size={13} aria-hidden="true" />
                {repo.forks}
              </span>
            </div>
          </div>

          <h3 className="mb-2 text-[17px] leading-[1.35] font-semibold tracking-[-0.015em]">
            {pr.title}
          </h3>
          <p className="mb-4 text-[13.5px] leading-[1.65] text-muted-2">
            {pr.description}
          </p>

          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {pr.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[12.5px] leading-[1.5] text-muted-2"
              >
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-4" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {pr.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-accent-4/10 px-2.5 py-0.5 font-mono text-[11px] text-accent-4"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-green/30 bg-green/5 px-3.5 py-2 text-xs font-medium text-green no-underline transition-all hover:border-green/50 hover:bg-green/10"
            >
              <IconGitPullRequest size={14} aria-hidden="true" />
              View PR #{pr.number}
              <IconArrowRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-green/18 bg-green/5 px-4 py-3 text-xs text-muted">
        <IconBrandGithub
          size={14}
          aria-hidden="true"
          className="shrink-0 text-green"
        />
        Approved and merged by{" "}
        <a
          href="https://github.com/NiallJoeMaher"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-2 no-underline hover:text-accent-3"
        >
          @{pr.reviewer}
        </a>{" "}
        — first contribution to the Codú open-source community.
      </div>
    </section>
  );
}
