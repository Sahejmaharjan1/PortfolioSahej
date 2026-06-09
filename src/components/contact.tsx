import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStackoverflow,
  IconMail,
  IconPencil,
} from "@tabler/icons-react";
import { ContactForm } from "@/components/contact-form";
import { socialLinks } from "@/data/portfolio";

const iconMap = {
  mail: IconMail,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  pencil: IconPencil,
  stackoverflow: IconBrandStackoverflow,
} as const;

export function Contact() {
  return (
    <section className="mb-20" id="contact">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-2 px-10 py-11 text-center max-[680px]:px-5 max-[680px]:py-[30px]">
        <div className="absolute top-0 left-1/2 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        <h3 className="mb-2.5 text-2xl font-bold tracking-[-0.025em]">
          Let&apos;s build something worth building
        </h3>
        <p className="mx-auto mb-8 max-w-lg text-[15px] leading-[1.7] text-muted-2">
          AI engineer based in Dublin, open to conversations about hard
          problems.
          <br />
          Especially interested in multi-agent systems, data platforms, and
          production AI.
        </p>

        <ContactForm />

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
            or find me elsewhere
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="inline-flex items-center gap-1.5 rounded-lg border border-border-2 px-[18px] py-2.5 text-[13px] text-muted no-underline transition-all hover:border-white/30 hover:bg-white/[0.04] hover:text-text"
              >
                <Icon size={16} aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
