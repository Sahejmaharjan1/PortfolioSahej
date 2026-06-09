type StatusDotProps = {
  size?: "sm" | "md";
};

export function StatusDot({ size = "md" }: StatusDotProps) {
  const sizeClass = size === "sm" ? "size-1.5" : "size-[7px]";

  return (
    <span
      aria-hidden="true"
      className={`${sizeClass} shrink-0 rounded-full bg-green motion-safe:animate-pulse-dot`}
    />
  );
}
