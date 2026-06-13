import Image from "next/image";
import {
  IconBrandPython,
  IconBuilding,
  IconDownload,
  IconMail,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import { siteConfig } from "@/data/portfolio";
import { StatusDot } from "@/components/ui/status-dot";

export function Hero() {
  return (
    <section
      className="mb-[72px] grid grid-cols-[1fr_auto] items-center gap-12 border-b border-border py-20 max-[680px]:grid-cols-1 max-[680px]:gap-9 max-[680px]:py-[52px]"
      aria-label="Introduction"
    >
      <div className="min-w-0">
        <div className="mb-[22px] flex items-center gap-2">
          <StatusDot />
          <span className="font-mono text-[11px] tracking-[0.12em] text-green uppercase">
            AI engineer · Dublin, Ireland
          </span>
        </div>

        <h1 className="mb-1.5 text-[clamp(34px,5vw,54px)] leading-[1.05] font-bold tracking-[-0.028em]">
          {siteConfig.name}
          <span className="block bg-gradient-to-br from-accent-3 via-accent-2 to-accent-4 bg-clip-text text-transparent">
            Full-Stack · AI Engineer
          </span>
        </h1>

        <p className="mb-7 max-w-[520px] text-base leading-[1.75] text-muted-2">
          Building production-grade{" "}
          <em className="text-accent-2 not-italic">multi-agent systems</em> and{" "}
          <em className="text-accent-2 not-italic">RAG pipelines</em> on GCP.
          Currently shipping AI at{" "}
          <em className="text-accent-2 not-italic">Tactix AI</em> — turning
          messy restaurant data into intelligent operator tools.
        </p>

        <div className="mb-8 flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-1.5 text-[13px] text-muted">
            <IconMapPin size={15} aria-hidden="true" />
            {siteConfig.location}
          </div>
          <div className="flex items-center gap-1.5 text-[13px] text-muted">
            <IconBuilding size={15} aria-hidden="true" />
            {siteConfig.company}
          </div>
          <div className="flex items-center gap-1.5 text-[13px] text-muted">
            <IconBrandPython size={15} aria-hidden="true" />
            {siteConfig.techStack}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-[22px] py-[11px] text-sm font-medium text-white no-underline transition-[opacity,transform] hover:-translate-y-px hover:opacity-85"
          >
            <IconMail size={16} aria-hidden="true" />
            Get in touch
          </a>
          <a
            href={siteConfig.cvUrl}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-2 bg-transparent px-[22px] py-[11px] text-sm text-muted no-underline transition-all hover:border-white/30 hover:text-text"
          >
            <IconDownload size={16} aria-hidden="true" />
            Download CV
          </a>
          <a
            href="https://blog.dvx.ventures/author/sahej-maharjan-ed67"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-2 bg-transparent px-[22px] py-[11px] text-sm text-muted no-underline transition-all hover:border-white/30 hover:text-text"
          >
            <IconPencil size={16} aria-hidden="true" />
            My writing
          </a>
        </div>
      </div>

      <div
        className="relative shrink-0 max-[680px]:order-first max-[680px]:flex max-[680px]:justify-center"
        aria-hidden="true"
      >
        <div className="relative size-[200px] max-[680px]:size-[140px]">
          <div className="absolute inset-[-3px] rounded-full bg-[conic-gradient(from_180deg,#7c3aed,#06b6d4,#34d399,#7c3aed)] opacity-80 motion-safe:animate-spin-slow" />
          <div className="absolute inset-[3px] rounded-full bg-bg" />
          <Image
            src={siteConfig.avatar}
            alt={siteConfig.name}
            width={200}
            height={200}
            priority
            className="absolute inset-[5px] z-1 size-[calc(100%-10px)] rounded-full object-cover object-top"
          />
          <div className="absolute right-[-4px] bottom-2 z-2 flex items-center gap-1.5 rounded-[20px] border border-border-2 bg-bg-3 px-2.5 py-1.5 font-mono text-[11px] whitespace-nowrap text-muted-2">
            <StatusDot size="sm" />
            open to chat
          </div>
        </div>
      </div>
    </section>
  );
}
