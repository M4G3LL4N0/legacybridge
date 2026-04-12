export default function ResourcesShelfGraphic() {
  const items = [
    ["Pilot guide", "How to structure the first LegacyBridge engagement"],
    ["Buyer brief", "How to position LegacyBridge internally"],
    ["Workflow scorecard", "How to pick the right first system path"],
    ["Executive readout template", "How to summarize signal for leadership"],
  ];

  return (
    <div className="premium-surface premium-surface-hover rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Resource shelf
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        Materials that support buying and rollout
      </h3>

      <div className="mt-8 space-y-4">
        {items.map(([title, body], index) => (
          <div
            key={title}
            className={`rounded-[1.5rem] border border-white/10 p-5 ${
              index % 2 === 0
                ? "bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(56,189,248,0.03))]"
                : "bg-[linear-gradient(180deg,rgba(16,185,129,0.10),rgba(16,185,129,0.03))]"
            }`}
          >
            <div className="text-lg font-medium text-white">{title}</div>
            <div className="mt-3 text-sm leading-7 text-white/68">{body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
