import { IconArrowRight, IconTrophy } from "@tabler/icons-react";
import { workExperiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Work() {
  return (
    <section className="mb-20" id="work">
      <SectionHeading title="where i work" />
      <div className="flex flex-col gap-3">
        {workExperiences.map((role) => (
          <article
            key={`${role.company}-${role.period}`}
            className={`rounded-[14px] border bg-bg-2 p-[26px] transition-[border-color,transform] hover:-translate-y-px ${
              role.highlighted
                ? "border-accent/25 hover:border-accent/35"
                : "productHunt" in role && role.productHunt
                  ? "border-amber/20 hover:border-amber/35"
                  : "border-border hover:border-border-2"
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold tracking-[-0.01em]">
                  {role.title}
                </h3>
                {"companyUrl" in role && role.companyUrl ? (
                  <a
                    href={role.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-accent-2 no-underline transition-colors hover:text-accent-3"
                  >
                    {role.company}
                  </a>
                ) : (
                  <p className="text-[13px] text-accent-2">{role.company}</p>
                )}
                <p className="mt-0.5 text-xs text-muted">{role.location}</p>
              </div>
              <span className="rounded-[20px] border border-border bg-white/[0.04] px-2.5 py-0.5 font-mono text-xs whitespace-nowrap text-muted">
                {role.period}
              </span>
            </div>
            <p className="mb-4 text-[13.5px] leading-[1.7] text-muted-2">
              {role.description}
            </p>

            {"productHunt" in role && role.productHunt && (
              <div className="relative mb-4 overflow-hidden rounded-xl border border-amber/30 bg-gradient-to-br from-amber/10 via-bg-3 to-bg-2">
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber/70 to-transparent" />
                <div className="absolute -top-16 -right-16 size-32 rounded-full bg-amber/10 blur-3xl" />
                <div className="relative flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 shrink-0 flex-col items-center justify-center rounded-xl border border-amber/35 bg-amber/15">
                      <IconTrophy
                        size={22}
                        className="text-amber"
                        aria-hidden="true"
                      />
                      <span className="mt-0.5 font-mono text-[11px] font-bold text-amber">
                        {role.productHunt.rank}
                      </span>
                    </div>
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <span className="rounded bg-amber/15 px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-amber uppercase">
                          Product Hunt
                        </span>
                        <span className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-muted">
                          {role.productHunt.role}
                        </span>
                      </div>
                      <h4 className="text-[15px] font-semibold tracking-[-0.01em]">
                        {role.productHunt.title}
                      </h4>
                      <p className="font-mono text-[11px] text-amber/90">
                        {role.productHunt.subtitle}
                      </p>
                      <p className="mt-2 text-[12.5px] leading-[1.6] text-muted-2">
                        {role.productHunt.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={role.productHunt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-lg border border-amber/40 bg-amber/10 px-4 py-2.5 text-xs font-medium text-amber no-underline transition-all hover:border-amber/60 hover:bg-amber/20 sm:self-center"
                  >
                    View on Product Hunt
                    <IconArrowRight size={13} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded px-2.5 py-0.5 font-mono text-[11px] ${
                    tag === "Product Hunt"
                      ? "bg-amber/15 text-amber"
                      : "bg-accent-3/10 text-accent-3"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
