type SignalCardGraphicProps = {
  title: string;
  body: string;
  tone?: "cyan" | "emerald" | "violet";
};

export default function SignalCardGraphic({
  title,
  body,
  tone = "cyan",
}: SignalCardGraphicProps) {
  const toneClasses =
    tone === "emerald"
      ? "from-emerald-400/22 to-emerald-300/5"
      : tone === "violet"
        ? "from-violet-400/22 to-violet-300/5"
        : "from-cyan-400/22 to-cyan-300/5";

  return (
    <div className={`premium-surface rounded-[1.8rem] bg-gradient-to-b ${toneClasses} p-6`}>
      <div className="mb-5 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-white/75" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/32" />
        <div className="h-2.5 w-2.5 rounded-full bg-white/18" />
      </div>

      <div className="text-lg font-medium text-white">{title}</div>
      <div className="mt-3 text-sm leading-7 text-white/68">{body}</div>

      <div className="mt-6 grid grid-cols-4 gap-2">
        <div className="h-8 rounded-xl border border-white/10 bg-white/6" />
        <div className="h-12 rounded-xl border border-white/10 bg-white/8" />
        <div className="h-9 rounded-xl border border-white/10 bg-white/6" />
        <div className="h-14 rounded-xl border border-white/10 bg-white/10" />
      </div>
    </div>
  );
}
