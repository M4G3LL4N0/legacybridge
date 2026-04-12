export default function PlatformCommandGraphic() {
  return (
    <div className="premium-surface premium-surface-hover relative overflow-hidden rounded-[2rem] p-6">
      <div className="absolute inset-0 premium-grid opacity-15" />
      <div className="beam-fade beam-fade-a" />
      <div className="signal-mist signal-mist-b" />

      <div className="relative">
        <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
          Command layer
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          One interface over many fragile systems
        </h3>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[#07111d] p-4">
          <div className="rounded-2xl border border-white/8 bg-white/5 p-4 text-sm leading-7 text-white/78">
            Which workflows still bypass the current notice renderer, and what should we test before consolidating them?
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/42">Resolved signal</div>
              <div className="mt-3 text-sm leading-7 text-white/72">
                Duplicate penalty logic remains active in two branches. Legacy account classes trigger an older notice-routing path with downstream customer-impact risk.
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-white/42">Recommended action</div>
              <div className="mt-3 text-sm leading-7 text-white/72">
                Generate characterization tests, wrap selection boundary, then refactor with monitored rollout.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
