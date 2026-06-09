import { stats } from "@/data/portfolio";

const colorMap = {
  accent3: "text-accent-3",
  accent2: "text-accent-2",
  green: "text-green",
  amber: "text-amber",
} as const;

export function Stats() {
  return (
    <div
      className="mb-20 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
      role="list"
      aria-label="Key stats"
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          role="listitem"
          className="rounded-xl border border-border bg-bg-2 px-4 py-5 text-center transition-colors hover:border-border-2"
        >
          <div
            className={`text-[26px] font-bold tracking-[-0.03em] ${colorMap[stat.color]}`}
          >
            {stat.value}
          </div>
          <div className="mt-1 text-[11px] tracking-[0.03em] text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
