export default function DemoNarrativeGraphic() {
  const steps = [
    ["01", "Ingest", "Connect one critical workflow and its surrounding materials"],
    ["02", "Surface", "Map dependencies, rules, and undocumented branch behavior"],
    ["03", "Protect", "Generate a first-pass characterization pack"],
    ["04", "Sequence", "Recommend the safest modernization starting point"],
  ];

  return (
    <div className="premium-surface rounded-[2rem] p-6">
      <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">
        Demo narrative
      </div>
      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
        What a strong first walkthrough should show
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
        The goal is to prove that LegacyBridge can create signal fast around a workflow nobody wants to touch.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-4">
        {steps.map(([num, title, body]) => (
          <div
            key={num}
            className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/52">{num}</div>
            <div className="mt-3 text-lg font-medium text-white">{title}</div>
            <div className="mt-3 text-sm leading-7 text-white/68">{body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
