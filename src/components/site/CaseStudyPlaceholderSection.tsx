const cases = [
  {
    title: "Claims workflow stabilization",
    subtitle: "Insurance pilot placeholder",
    body: "Show how LegacyBridge surfaced duplicated branch logic, mapped downstream notice impact, and reduced uncertainty before change planning began.",
  },
  {
    title: "Billing engine modernization sequencing",
    subtitle: "Finance systems placeholder",
    body: "Show how the product helped architecture teams identify where to wrap, where to preserve, and where to generate tests before touching repricing logic.",
  },
  {
    title: "Knowledge continuity before expert attrition",
    subtitle: "Operations placeholder",
    body: "Show how undocumented operational assumptions were captured and attached to live system artifacts before they disappeared into ticket memory.",
  },
];

export default function CaseStudyPlaceholderSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">Proof stories</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          Placeholder case studies ready for real pilot wins.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
          These blocks make the site feel more complete now and give you a clean place to swap in real customer stories later.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {cases.map((item, index) => (
          <div
            key={item.title}
            className={`premium-surface premium-surface-hover rounded-[1.9rem] p-6 ${
              index === 0
                ? "bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(56,189,248,0.03))]"
                : index === 1
                  ? "bg-[linear-gradient(180deg,rgba(16,185,129,0.10),rgba(16,185,129,0.03))]"
                  : "bg-[linear-gradient(180deg,rgba(99,102,241,0.10),rgba(99,102,241,0.03))]"
            }`}
          >
            <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/52">
              {item.subtitle}
            </div>
            <div className="mt-3 text-xl font-medium text-white">{item.title}</div>
            <div className="mt-4 text-sm leading-7 text-white/68">{item.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
