export default function SettingsStackGraphic() {
  const blocks = [
    ["Access", "Role-scoped workspace controls and pilot permissions"],
    ["Security", "Private environment posture, audit surface, customer-controlled inference"],
    ["Knowledge", "Capture, retention, and artifact-linking preferences"],
    ["Deployment", "Pilot → team → enterprise rollout configuration"],
  ];

  return (
    <div className="premium-surface premium-surface-hover rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Settings stack
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        Workspace controls with enterprise posture
      </h3>

      <div className="mt-6 space-y-4">
        {blocks.map(([title, body], index) => (
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
