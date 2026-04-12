type TagPillProps = {
  children: string;
  tone?: "default" | "cyan" | "emerald" | "amber" | "violet";
};

export default function TagPill({ children, tone = "default" }: TagPillProps) {
  const toneClass =
    tone === "cyan"
      ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
      : tone === "emerald"
        ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
        : tone === "amber"
          ? "border-amber-300/20 bg-amber-300/10 text-amber-100"
          : tone === "violet"
            ? "border-violet-300/20 bg-violet-300/10 text-violet-100"
            : "border-white/10 bg-white/5 text-white/72";

  return (
    <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] ${toneClass}`}>
      {children}
    </div>
  );
}
