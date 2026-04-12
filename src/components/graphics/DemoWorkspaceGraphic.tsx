export default function DemoWorkspaceGraphic() {
  return (
    <div className="premium-surface premium-surface-hover relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 premium-grid opacity-15" />
      <div className="beam-fade beam-fade-b" />

      <div className="relative">
        <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
          Workspace preview
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          What the walkthrough should feel like
        </h3>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
            <div className="space-y-3">
              {[
                "Overview",
                "Command Center",
                "Workflows",
                "Artifacts",
                "Executive Summary",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    index === 1
                      ? "border-cyan-300/18 bg-cyan-300/10 text-white"
                      : "border-white/10 bg-white/5 text-white/68"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#07111d] p-4">
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-white/78">
              Show me the highest-risk workflow, the duplicated business rules, and the first test pack we should generate before modernization.
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/42">Risk</div>
                <div className="mt-2 text-2xl font-semibold text-white">89</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/42">Rules</div>
                <div className="mt-2 text-2xl font-semibold text-white">96</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/42">Coverage gap</div>
                <div className="mt-2 text-2xl font-semibold text-white">31%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
