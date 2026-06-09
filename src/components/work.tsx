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
                : "border-border hover:border-border-2"
            }`}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold tracking-[-0.01em]">
                  {role.title}
                </h3>
                {"companyLinks" in role && role.companyLinks ? (
                  <p className="text-[13px] text-accent-2">
                    {role.companyLinks.map((link, index) => (
                      <span key={link.url}>
                        {index > 0 && (
                          <span className="text-muted"> · </span>
                        )}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-2 no-underline transition-colors hover:text-accent-3"
                        >
                          {link.label}
                        </a>
                      </span>
                    ))}
                  </p>
                ) : "companyUrl" in role && role.companyUrl ? (
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
            <div className="flex flex-wrap gap-1.5">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-accent-3/10 px-2.5 py-0.5 font-mono text-[11px] text-accent-3"
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
