import { cloudPlatforms, skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

function SkillCard({
  icon,
  name,
  category,
}: {
  icon: string;
  name: string;
  category: string;
}) {
  return (
    <div className="flex h-full items-start gap-3 rounded-[10px] border border-border bg-bg-2 px-4 py-3.5 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent/45">
      <span className="mt-px shrink-0 text-[17px] leading-none">{icon}</span>
      <div className="min-w-0">
        <div className="text-[13px] leading-[1.3] font-medium">{name}</div>
        <div className="mt-0.5 text-[11px] text-muted">{category}</div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="mb-20" id="skills">
      <SectionHeading title="skills & stack" />
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="mb-3 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
            Cloud Platforms
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {cloudPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="rounded-[10px] border border-border bg-bg-2 px-4 py-4 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-accent/45"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-[17px] leading-none">☁️</span>
                  <span className="text-[13px] font-medium">{platform.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {platform.services.map((service) => (
                    <span
                      key={service}
                      className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-muted-2"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
