export default function PricingValueGraphic() {
  const rows = [
    ["Discovery time", "Compressed from weeks toward a faster, searchable understanding layer"],
    ["Change risk", "Reduced through dependency visibility and generated test packs"],
    ["Knowledge continuity", "Improved by binding operator knowledge to artifacts and flows"],
    ["Modernization readiness", "Raised before large-scale rewrite spend begins"],
  ];

  return (
    <div className="premium-surface rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Value model
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        Pricing anchored to operational leverage
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
        The value is not seat count. It is clarity, risk reduction, and better sequencing around fragile systems.
      </p>

      <div className="mt-8 space-y-4">
        {rows.map(([title, body]) => (
          <div
            key={title}
            className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
          >
            <div className="text-sm font-medium text-white">{title}</div>
            <div className="mt-2 text-sm leading-7 text-white/68">{body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
