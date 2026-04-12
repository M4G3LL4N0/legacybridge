export default function SecurityPostureGraphic() {
  const rows = [
    ["Deployment model", "Pilot-first with private-environment path"],
    ["Access model", "Role-scoped workspace and enterprise identity posture"],
    ["Data handling", "Built for controlled source and artifact visibility"],
    ["Auditability", "Activity-linked surfaces and report-oriented outputs"],
  ];

  return (
    <div className="premium-surface premium-surface-hover rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Security posture
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        Enterprise trust starts with controlled access
      </h3>

      <div className="mt-6 space-y-4">
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
