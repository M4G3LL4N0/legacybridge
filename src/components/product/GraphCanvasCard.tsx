const nodes = [
  { label: "Aging Feed", x: "left-[8%]", y: "top-[18%]" },
  { label: "PenaltyCalc", x: "left-[34%]", y: "top-[28%]" },
  { label: "LegacyClassMap", x: "left-[32%]", y: "top-[58%]" },
  { label: "NoticeSelect", x: "left-[62%]", y: "top-[24%]" },
  { label: "Balance Ledger", x: "left-[78%]", y: "top-[56%]" },
  { label: "Collections Rules", x: "left-[68%]", y: "top-[76%]" },
];

export default function GraphCanvasCard() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#08111a]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

      <div className="absolute left-[15%] top-[24%] h-px w-[22%] bg-gradient-to-r from-blue-300/30 to-blue-300/0" />
      <div className="absolute left-[42%] top-[32%] h-px w-[22%] bg-gradient-to-r from-blue-300/30 to-blue-300/0" />
      <div className="absolute left-[42%] top-[62%] h-px w-[30%] bg-gradient-to-r from-violet-300/30 to-violet-300/0" />
      <div className="absolute left-[66%] top-[33%] h-[24%] w-px bg-gradient-to-b from-blue-300/30 to-emerald-300/0" />
      <div className="absolute left-[39%] top-[38%] h-[20%] w-px bg-gradient-to-b from-blue-300/30 to-violet-300/0" />

      <div className="absolute right-5 top-5 rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-100">
        Risk graph live
      </div>

      {nodes.map((node) => (
        <div
          key={node.label}
          className={`absolute ${node.x} ${node.y} rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-sm text-white shadow-[0_0_35px_rgba(59,130,246,0.10)] backdrop-blur-md`}
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
