import Link from "next/link";

type WorkflowGalleryCardProps = {
  href: string;
  title: string;
  system: string;
  language: string;
  riskScore: number;
  testCoverageGap: number;
  description: string;
};

export default function WorkflowGalleryCard({
  href,
  title,
  system,
  language,
  riskScore,
  testCoverageGap,
  description,
}: WorkflowGalleryCardProps) {
  return (
    <Link
      href={href}
      className="premium-surface premium-surface-hover block rounded-[1.9rem] p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-medium text-white">{title}</div>
          <div className="mt-2 text-sm text-white/55">
            {system} · {language}
          </div>
        </div>
        <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] text-amber-100">
          Risk {riskScore}
        </div>
      </div>

      <div className="mt-4 text-sm leading-7 text-white/68">{description}</div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="text-xs uppercase tracking-[0.22em] text-white/40">Coverage gap</div>
          <div className="mt-2 text-2xl font-semibold text-white">{testCoverageGap}%</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="text-xs uppercase tracking-[0.22em] text-white/40">Suggested motion</div>
          <div className="mt-2 text-sm font-medium text-white">Wrap → Test → Consolidate</div>
        </div>
      </div>
    </Link>
  );
}
