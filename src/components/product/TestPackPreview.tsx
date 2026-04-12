const tests = [
  {
    title: "Penalty branch equivalence",
    body: "Validate parity between current and legacy account-class penalty branches for core cases.",
  },
  {
    title: "Notice renderer path selection",
    body: "Ensure updated templates are selected for non-legacy classes and flag bypass behavior.",
  },
  {
    title: "30+ day late fee condition",
    body: "Verify extra fee application threshold and downstream balance update integrity.",
  },
];

export default function TestPackPreview() {
  return (
    <div className="premium-surface rounded-[2rem] p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">Generated test pack</div>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            Characterization preview
          </h3>
        </div>
        <div className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[11px] text-emerald-100">
          Draft ready
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {tests.map((test) => (
          <div
            key={test.title}
            className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
          >
            <div className="text-sm font-medium text-white">{test.title}</div>
            <div className="mt-2 text-sm leading-7 text-white/68">{test.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
