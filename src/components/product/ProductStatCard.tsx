type ProductStatCardProps = {
  label: string;
  value: string;
  sublabel?: string;
};

export default function ProductStatCard({
  label,
  value,
  sublabel,
}: ProductStatCardProps) {
  return (
    <div className="premium-surface rounded-3xl p-5">
      <div className="text-xs uppercase tracking-[0.22em] text-white/42">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{value}</div>
      {sublabel ? <div className="mt-2 text-sm text-white/56">{sublabel}</div> : null}
    </div>
  );
}
