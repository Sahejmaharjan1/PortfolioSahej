import { terminalProfile } from "@/data/portfolio";

export function Terminal() {
  return (
    <div
      className="mb-[72px] rounded-[14px] border border-border bg-bg-2 px-[26px] py-[22px] font-mono text-[12.5px]"
      role="region"
      aria-label="Profile summary"
    >
      <div className="mb-4 flex gap-1.5" aria-hidden="true">
        <span className="size-[11px] rounded-full bg-[#ff5f57]" />
        <span className="size-[11px] rounded-full bg-[#ffbd2e]" />
        <span className="size-[11px] rounded-full bg-[#28c840]" />
      </div>

      <p className="mb-1.5 leading-[1.75]">
        <span className="text-accent-2">❯ </span>
        <span>python profile.py --format=json</span>
      </p>

      {terminalProfile.map((line) => (
        <p key={line.key} className="mb-1.5 pl-3.5 leading-[1.75] text-muted">
          <span className="text-accent-3">{line.key.padEnd(13, " ")} </span>
          <span className="text-green">{line.value}</span>
        </p>
      ))}

      <p className="leading-[1.75]">
        <span className="text-accent-2">❯ </span>
        <span
          aria-hidden="true"
          className="inline-block h-[13px] w-2 align-middle bg-accent-2 motion-safe:animate-blink"
        />
      </p>
    </div>
  );
}
