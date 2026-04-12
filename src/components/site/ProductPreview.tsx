export default function ProductPreview() {
  return (
    <div className="relative">
      <div className="rounded-[2rem] border border-white/12 bg-white/7 p-4 shadow-[0_25px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="rounded-[1.65rem] border border-white/10 bg-[#08111a] p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-blue-100/70">
                LegacyBridge Workspace
              </div>
              <div className="mt-1 text-lg font-medium text-white">
                Claims Processing Core
              </div>
            </div>
            <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
              Pilot active
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-white/45">Natural language query</div>
              <div className="mt-3 text-sm leading-7 text-white/78">
                Which legacy branches still bypass the updated notice renderer, and what should be tested before refactoring?
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Key signal</div>
                <div className="mt-3 text-sm leading-7 text-white/78">
                  Duplicate penalty logic remains active across two module paths with legacy-class branching.
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Recommended path</div>
                <div className="mt-3 text-sm leading-7 text-white/78">
                  Generate characterization pack, wrap notice selection, then consolidate branches.
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Modules</div>
                <div className="mt-3 text-2xl font-semibold text-white">5</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Risk score</div>
                <div className="mt-3 text-2xl font-semibold text-white">89</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">Coverage gap</div>
                <div className="mt-3 text-2xl font-semibold text-white">31%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-blue-300/20 blur-3xl lg:block" />
      <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-amber-200/16 blur-3xl lg:block" />
    </div>
  );
}
