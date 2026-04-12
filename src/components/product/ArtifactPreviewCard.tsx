type ArtifactPreviewCardProps = {
  title: string;
  type: string;
  status: string;
  body: string;
};

export default function ArtifactPreviewCard({
  title,
  type,
  status,
  body,
}: ArtifactPreviewCardProps) {
  return (
    <div className="premium-surface premium-surface-hover rounded-[1.8rem] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-medium text-white">{title}</div>
          <div className="mt-2 text-sm text-white/55">{type}</div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
          {status}
        </div>
      </div>

      <div className="mt-4 text-sm leading-7 text-white/68">{body}</div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="h-12 rounded-2xl border border-white/10 bg-black/20" />
        <div className="h-12 rounded-2xl border border-white/10 bg-black/20" />
        <div className="h-12 rounded-2xl border border-white/10 bg-black/20" />
      </div>
    </div>
  );
}
