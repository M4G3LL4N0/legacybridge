export default function ModernizationRunwayGraphic() {
  const stages = [
    {
      title: "Observe",
      body: "Index the system, map dependencies, surface rule clusters.",
      color: "from-cyan-400/30 to-cyan-300/5",
    },
    {
      title: "Stabilize",
      body: "Generate tests and reduce uncertainty around fragile branches.",
      color: "from-blue-400/28 to-blue-300/5",
    },
    {
      title: "Wrap",
      body: "Create safer boundaries around high-value workflow edges.",
      color: "from-violet-400/28 to-violet-300/5",
    },
    {
      title: "Modernize",
      body: "Consolidate and evolve only after behavior is understood.",
      color: "from-emerald-400/28 to-emerald-300/5",
    },
  ];

  return (
    <div className="premium-surface relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 premium-grid opacity-15" />
      <div className="relative">
        <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
          Modernization runway
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          A safer path than blind rewrites
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
          LegacyBridge is designed to move teams from opacity to control before major code change begins.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <div key={stage.title} className="relative">
              <div className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-b ${stage.color} p-5`}>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                  0{index + 1}
                </div>
                <div className="mt-3 text-lg font-medium text-white">{stage.title}</div>
                <div className="mt-3 text-sm leading-7 text-white/68">{stage.body}</div>
              </div>
              {index < stages.length - 1 ? (
                <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-cyan-300/40 to-transparent lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
