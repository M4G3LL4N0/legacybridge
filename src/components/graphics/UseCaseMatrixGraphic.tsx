export default function UseCaseMatrixGraphic() {
  const cases = [
    ["Dependency clarity", "Map hidden jobs, branches, and downstream effects"],
    ["Knowledge continuity", "Preserve logic before experts retire or leave"],
    ["Safer change", "Generate characterization guidance before edits"],
    ["Modernization sequencing", "Decide what to wrap, preserve, or refactor"],
    ["Executive visibility", "Summarize workflow risk and recommended path"],
    ["Team onboarding", "Help modern engineers ramp into brownfield systems faster"],
  ];

  return (
    <div className="premium-surface premium-surface-hover rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Use-case matrix
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        Where LegacyBridge creates leverage first
      </h3>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cases.map(([title, body], index) => (
          <div
            key={title}
            className={`rounded-[1.5rem] border border-white/10 p-5 ${
              index % 3 === 0
                ? "bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(56,189,248,0.03))]"
                : index % 3 === 1
                  ? "bg-[linear-gradient(180deg,rgba(16,185,129,0.10),rgba(16,185,129,0.03))]"
                  : "bg-[linear-gradient(180deg,rgba(99,102,241,0.10),rgba(99,102,241,0.03))]"
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
