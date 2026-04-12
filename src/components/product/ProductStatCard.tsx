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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</div>
      <div className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{value}</div>
      {sublabel ? <div className="mt-2 text-sm text-white/55">{sublabel}</div> : null}
    </div>
  );
}
