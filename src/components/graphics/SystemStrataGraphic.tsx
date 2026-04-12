export default function SystemStrataGraphic() {
  return (
    <div className="premium-surface relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 opacity-20 premium-grid" />
      <div className="beam-fade beam-fade-a" />
      <div className="beam-fade beam-fade-b" />

      <div className="relative">
        <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
          System strata
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          Layers of hidden operational logic
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
          LegacyBridge helps teams understand how code, batch jobs, rules, operators, and
          downstream business effects stack together.
        </p>

        <div className="mt-8 space-y-4">
          {[
            {
              title: "Operational outputs",
              body: "Notices, ledgers, collections, audits, customer impact",
              tone: "from-cyan-400/30 to-cyan-300/5",
            },
            {
              title: "Business rules",
              body: "Penalty thresholds, account classes, exceptions, edge-case logic",
              tone: "from-emerald-400/28 to-emerald-300/5",
            },
            {
              title: "Execution layer",
              body: "COBOL modules, JCL jobs, RPG flows, sync routines, batch sequence",
              tone: "from-blue-400/28 to-blue-300/5",
            },
            {
              title: "Tribal knowledge",
              body: "Operator assumptions, unwritten steps, exception handling memory",
              tone: "from-violet-400/28 to-violet-300/5",
            },
          ].map((layer) => (
            <div
              key={layer.title}
              className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-r ${layer.tone} p-5`}
            >
              <div className="text-sm font-medium text-white">{layer.title}</div>
              <div className="mt-2 text-sm leading-7 text-white/70">{layer.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
