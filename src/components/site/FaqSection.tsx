const faqs = [
  {
    question: "Is LegacyBridge a code migration tool?",
    answer:
      "Not primarily. LegacyBridge is built to create system understanding, reduce change risk, surface hidden business logic, and improve modernization sequencing before large migration work begins.",
  },
  {
    question: "Who is the first buyer inside an organization?",
    answer:
      "Usually architecture leaders, modernization owners, platform teams, engineering leadership, or transformation groups responsible for systems nobody can casually replace.",
  },
  {
    question: "Why start with a pilot instead of a full rollout?",
    answer:
      "Because the fastest path to trust is proving signal on one fragile workflow first. LegacyBridge is strongest when it makes an opaque, risky system legible quickly.",
  },
  {
    question: "What makes this different from a generic coding assistant?",
    answer:
      "LegacyBridge is built for brownfield operational reality. It connects code, jobs, documents, rules, artifacts, and tribal knowledge into one intelligence layer rather than only generating code suggestions.",
  },
  {
    question: "Can this work with private enterprise environments?",
    answer:
      "Yes. The product story is intentionally framed around enterprise pilots, private deployment paths, role-scoped workspaces, and controlled access to sensitive legacy environments.",
  },
  {
    question: "What is the first visible outcome for a customer?",
    answer:
      "A clearer understanding of one critical workflow: its modules, dependencies, hidden rules, risk points, and the safest next steps before modernization moves forward.",
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
      <div className="max-w-3xl">
        <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">FAQ</div>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          Questions teams will ask before they buy.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
          This section helps frame LegacyBridge as an enterprise pilot product rather than a vague AI tool.
        </p>
      </div>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="premium-surface premium-surface-hover rounded-[1.8rem] p-6"
          >
            <div className="text-lg font-medium text-white">{faq.question}</div>
            <div className="mt-4 text-sm leading-7 text-white/68">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
