import { IconSchool } from "@tabler/icons-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  return (
    <section className="mb-20" id="education">
      <SectionHeading title="education" />
      <div className="flex flex-col gap-3">
        {education.map((item) => (
          <article
            key={item.degree}
            className={`rounded-[14px] border bg-bg-2 p-[26px] transition-[border-color,transform] hover:-translate-y-px ${
              item.highlighted
                ? "border-accent/25 hover:border-accent/35"
                : "border-border hover:border-border-2"
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-3.5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-3">
                  <IconSchool size={18} className="text-accent-3" aria-hidden="true" />
                </div>
                <h3 className="min-w-0 text-base font-semibold tracking-[-0.01em]">
                  {item.degree}
                </h3>
              </div>
              <span className="shrink-0 rounded-[20px] border border-border bg-white/[0.04] px-2.5 py-0.5 font-mono text-xs whitespace-nowrap text-muted">
                {item.period}
              </span>
            </div>
            <div className="pl-[54px]">
              {"schoolUrl" in item && item.schoolUrl ? (
                <a
                  href={item.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-accent-2 no-underline transition-colors hover:text-accent-3"
                >
                  {item.school}
                </a>
              ) : (
                <p className="text-[13px] text-accent-2">{item.school}</p>
              )}
              <p className="mt-0.5 text-xs text-muted">{item.location}</p>
              {"honours" in item && item.honours && (
                <span className="mt-2.5 inline-flex rounded bg-accent-3/10 px-2.5 py-0.5 font-mono text-[11px] whitespace-nowrap text-accent-3">
                  {item.honours}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
