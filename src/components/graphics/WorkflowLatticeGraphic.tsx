export default function WorkflowLatticeGraphic() {
  const cards = [
    {
      title: "Claims Intake",
      body: "Input normalization, account matching, eligibility prechecks",
      tone: "from-cyan-400/24 to-cyan-300/5",
    },
    {
      title: "Penalty Logic",
      body: "Thresholds, exception classes, late-state handling",
      tone: "from-blue-400/24 to-blue-300/5",
    },
    {
      title: "Notice Routing",
      body: "Template selection, legacy path branching, downstream delivery",
      tone: "from-violet-400/24 to-violet-300/5",
    },
    {
      title: "Ledger Update",
      body: "Balance sync, collections refresh, audit trace continuity",
      tone: "from-emerald-400/24 to-emerald-300/5",
    },
  ];

  return (
    <div className="premium-surface relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 premium-grid opacity-15" />
      <div className="beam-fade beam-fade-a" />
      <div className="beam-fade beam-fade-b" />

      <div className="relative">
        <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
          Workflow lattice
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          Cross-linked operational flow intelligence
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
          LegacyBridge helps teams reason across interacting workflow layers instead of isolated files.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-b ${card.tone} p-5`}
            >
              <div className="text-lg font-medium text-white">{card.title}</div>
              <div className="mt-3 text-sm leading-7 text-white/68">{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
