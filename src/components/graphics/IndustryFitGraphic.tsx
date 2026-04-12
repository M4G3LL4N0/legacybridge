export default function IndustryFitGraphic() {
  const sectors = [
    ["Banking", "Transaction logic, fee engines, notices, ledger continuity"],
    ["Insurance", "Claims rules, policy workflows, premium adjustments"],
    ["Healthcare", "Operational sync, record movement, exception-heavy flows"],
    ["Government", "Critical public systems with high continuity requirements"],
    ["Manufacturing", "Scheduling, inventory logic, ERP-adjacent brownfield systems"],
    ["Scientific", "Fortran-heavy and long-lived technical compute flows"],
  ];

  return (
    <div className="premium-surface rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Industry fit
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        Best where replacement is expensive
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
        The strongest fit is where legacy logic carries operational weight and understanding is scarce.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sectors.map(([title, body], index) => (
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
