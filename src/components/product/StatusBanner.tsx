type StatusBannerProps = {
  eyebrow: string;
  title: string;
  body: string;
  tone?: "cyan" | "emerald" | "amber";
};

export default function StatusBanner({
  eyebrow,
  title,
  body,
  tone = "cyan",
}: StatusBannerProps) {
  const toneClass =
    tone === "emerald"
      ? "border-emerald-300/18 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(16,185,129,0.05))]"
      : tone === "amber"
        ? "border-amber-300/18 bg-[linear-gradient(180deg,rgba(245,158,11,0.12),rgba(245,158,11,0.05))]"
        : "border-cyan-300/18 bg-[linear-gradient(180deg,rgba(56,189,248,0.12),rgba(56,189,248,0.05))]";

  return (
    <div className={`rounded-[1.6rem] border p-5 ${toneClass}`}>
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">{eyebrow}</div>
      <div className="mt-3 text-lg font-medium text-white">{title}</div>
      <div className="mt-3 text-sm leading-7 text-white/68">{body}</div>
    </div>
  );
}
