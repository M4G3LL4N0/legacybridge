export default function PilotMotionGraphic() {
  const steps = [
    {
      title: "Select one critical workflow",
      body: "Choose a system path where understanding gaps and change risk are already expensive.",
      tone: "from-cyan-400/22 to-cyan-300/5",
    },
    {
      title: "Ingest cross-source context",
      body: "Connect source code, jobs, docs, artifacts, and expert knowledge around that workflow.",
      tone: "from-blue-400/22 to-blue-300/5",
    },
    {
      title: "Generate signal",
      body: "Surface dependency risk, hidden branches, rule clusters, and characterization gaps.",
      tone: "from-violet-400/22 to-violet-300/5",
    },
    {
      title: "Deliver the readout",
      body: "Produce a credible modernization and change-risk view leadership can act on.",
      tone: "from-emerald-400/22 to-emerald-300/5",
    },
  ];

  return (
    <div className="premium-surface premium-surface-hover rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Pilot motion
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        How a focused pilot creates trust
      </h3>

      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-b ${step.tone} p-5`}
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/52">
              0{index + 1}
            </div>
            <div className="mt-3 text-lg font-medium text-white">{step.title}</div>
            <div className="mt-3 text-sm leading-7 text-white/68">{step.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
