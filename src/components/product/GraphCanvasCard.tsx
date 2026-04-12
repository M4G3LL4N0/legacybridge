const nodes = [
  { label: "Aging Feed", x: "left-[8%]", y: "top-[16%]" },
  { label: "PenaltyCalc", x: "left-[34%]", y: "top-[28%]" },
  { label: "LegacyClassMap", x: "left-[31%]", y: "top-[61%]" },
  { label: "NoticeSelect", x: "left-[63%]", y: "top-[23%]" },
  { label: "Balance Ledger", x: "left-[77%]", y: "top-[56%]" },
  { label: "Collections Rules", x: "left-[66%]", y: "top-[78%]" },
];

export default function GraphCanvasCard() {
  return (
    <div className="relative h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111d] glow-edge">
      <div className="premium-grid absolute inset-0 opacity-20" />
      <div className="beam-fade beam-fade-a" />
      <div className="beam-fade beam-fade-b" />

      <div className="absolute left-[15%] top-[24%] h-px w-[22%] bg-gradient-to-r from-cyan-300/35 to-cyan-300/0" />
      <div className="absolute left-[42%] top-[32%] h-px w-[22%] bg-gradient-to-r from-cyan-300/35 to-cyan-300/0" />
      <div className="absolute left-[41%] top-[64%] h-px w-[29%] bg-gradient-to-r from-emerald-300/30 to-emerald-300/0" />
      <div className="absolute left-[67%] top-[33%] h-[23%] w-px bg-gradient-to-b from-cyan-300/35 to-cyan-300/0" />
      <div className="absolute left-[38%] top-[38%] h-[21%] w-px bg-gradient-to-b from-cyan-300/35 to-emerald-300/0" />

      <div className="absolute right-5 top-5 rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-100">
        Live dependency graph
      </div>

      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute ${node.x} ${node.y} rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] px-4 py-3 text-sm text-white shadow-[0_0_35px_rgba(56,189,248,0.08)] backdrop-blur-md`}
        >
          {node.label}
        </div>
      ))}

      <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-xs uppercase tracking-[0.22em] text-white/50">
        Claims Processing Graph Canvas
      </div>
    </div>
  );
}
