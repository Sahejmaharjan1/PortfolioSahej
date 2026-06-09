type SectionHeadingProps = {
  title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex items-center gap-2.5">
      <span className="font-mono text-[11px] tracking-[0.14em] whitespace-nowrap text-muted uppercase">
        {title}
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
