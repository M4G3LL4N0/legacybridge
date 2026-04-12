export default function ProductPreview() {
  return (
    <div className="relative floating-card">
      <div className="premium-surface glow-edge rounded-[2.25rem] p-4">
        <div className="rounded-[1.8rem] border border-white/10 bg-[#07111d]/92 p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
                LegacyBridge command layer
              </div>
              <div className="mt-2 text-xl font-medium text-white">
                Claims Processing Core
              </div>
            </div>

            <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
              Signal active
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-white/42">
                Query
              </div>
              <div className="mt-3 text-sm leading-7 text-white/78">
                Which notice-routing branches still depend on legacy account classes, and what
                should be tested before we consolidate the logic?
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/42">
                  Resolved signal
                </div>
                <div className="mt-3 text-sm leading-7 text-white/76">
                  Two duplicated penalty branches remain active. One downstream path still bypasses
                  the current renderer for legacy classes. Change risk is elevated until
                  characterization tests are generated.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/42">
                  Recommended path
                </div>
                <div className="mt-3 text-sm leading-7 text-white/76">
                  Generate test pack, wrap routing boundary, then consolidate duplicate logic.
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Risk score</div>
                <div className="mt-3 text-2xl font-semibold text-white">89</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Modules</div>
                <div className="mt-3 text-2xl font-semibold text-white">5</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/40">Coverage gap</div>
                <div className="mt-3 text-2xl font-semibold text-white">31%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="beam-fade beam-fade-a" />
      <div className="beam-fade beam-fade-b" />
    </div>
  );
}
