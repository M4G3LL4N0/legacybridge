export default function ProductShowcaseGraphic() {
  return (
    <div className="premium-surface premium-surface-hover relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 premium-grid opacity-15" />
      <div className="signal-mist signal-mist-a" />
      <div className="beam-fade beam-fade-a" />

      <div className="relative">
        <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
          Product showcase
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          One workspace, multiple signal surfaces
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
          The platform combines explainability, graphing, testing, and executive reporting into one operating layer.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#07111d] p-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/78">
              Which workflows still depend on legacy notice-routing behavior, and what should be protected before modernization starts?
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/42">Signal</div>
                <div className="mt-2 text-sm leading-7 text-white/72">
                  Duplicate branch logic and downstream drift surfaced in the claims flow.
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-white/42">Action</div>
                <div className="mt-2 text-sm leading-7 text-white/72">
                  Generate characterization coverage, then wrap and consolidate.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              "Cross-source dependency graph",
              "Generated test-pack preview",
              "Knowledge capture from experts",
              "Executive summary output",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-[1.35rem] border border-white/10 p-4 text-sm text-white/74 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(56,189,248,0.03))]"
                    : "bg-[linear-gradient(180deg,rgba(16,185,129,0.10),rgba(16,185,129,0.03))]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
