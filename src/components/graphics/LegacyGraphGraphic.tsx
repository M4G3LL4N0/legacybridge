export default function LegacyGraphGraphic() {
  const nodes = [
    { name: "Aging Feed", x: "12%", y: "18%" },
    { name: "PenaltyCalc", x: "34%", y: "30%" },
    { name: "Class Map", x: "31%", y: "64%" },
    { name: "Notice Select", x: "61%", y: "24%" },
    { name: "Balance Ledger", x: "78%", y: "56%" },
    { name: "Collections", x: "66%", y: "79%" },
  ];

  return (
    <div className="premium-surface relative h-[480px] overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 premium-grid opacity-20" />
      <div className="signal-mist signal-mist-a" />
      <div className="signal-mist signal-mist-b" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
            Dependency visualization
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            Workflow intelligence graph
          </h3>
        </div>

        <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-100">
          Live model
        </div>
      </div>

      <div className="absolute left-[16%] top-[24%] h-px w-[20%] bg-gradient-to-r from-cyan-300/35 to-cyan-300/0" />
      <div className="absolute left-[42%] top-[34%] h-px w-[18%] bg-gradient-to-r from-cyan-300/35 to-cyan-300/0" />
      <div className="absolute left-[41%] top-[66%] h-px w-[22%] bg-gradient-to-r from-emerald-300/35 to-emerald-300/0" />
      <div className="absolute left-[66%] top-[35%] h-[23%] w-px bg-gradient-to-b from-cyan-300/35 to-emerald-300/0" />
      <div className="absolute left-[36%] top-[40%] h-[22%] w-px bg-gradient-to-b from-cyan-300/35 to-violet-300/0" />

      {nodes.map((node) => (
        <div
          key={node.name}
          className="absolute rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] px-4 py-3 text-sm text-white shadow-[0_0_35px_rgba(56,189,248,0.08)] backdrop-blur-md"
          style={{ left: node.x, top: node.y }}
        >
          {node.name}
        </div>
      ))}

      <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/48">
        Cross-source system graph
      </div>
    </div>
  );
}
