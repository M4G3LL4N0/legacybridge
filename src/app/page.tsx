const pillars = [
  {
    title: "Understand legacy systems",
    body: "Turn COBOL, RPG, Fortran, Ada, MUMPS, JCL, and brownfield enterprise code into searchable, explainable system intelligence.",
  },
  {
    title: "Ship safer changes",
    body: "Map dependencies, generate regression tests, score change risk, and reduce fear around fragile legacy workflows.",
  },
  {
    title: "Bridge old expertise to new AI",
    body: "Capture tribal knowledge, onboard modern engineers faster, and build a living modernization layer around code that still runs the world.",
  },
];

const features = [
  "Legacy code explainers",
  "Business-rule extraction",
  "Dependency and batch-job graphing",
  "AI-assisted safe fixes",
  "Regression test generation",
  "Modernization path recommendations",
  "Tribal-knowledge capture",
  "New-engineer onboarding academy",
];

const industries = [
  "Banking",
  "Insurance",
  "Healthcare",
  "Government",
  "Manufacturing",
  "Infrastructure",
  "Aerospace",
  "Scientific computing",
];

const stats = [
  { value: "40+ yrs", label: "of trapped logic made legible" },
  { value: "1 layer", label: "to unify code, docs, rules, and risk" },
  { value: "0 blind rewrites", label: "required to create immediate value" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_34%),radial-gradient(circle_at_80%_25%,rgba(245,158,11,0.12),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/6 text-sm font-semibold tracking-[0.2em] text-white shadow-[0_0_45px_rgba(59,130,246,0.16)]">
                LB
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                  LegacyBridge
                </div>
                <div className="text-xs text-white/45">
                  AI infrastructure for legacy code intelligence
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#platform" className="transition hover:text-white">
                Platform
              </a>
              <a href="#industries" className="transition hover:text-white">
                Industries
              </a>
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid items-center gap-14 pb-18 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24 lg:pt-18">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-blue-100 uppercase">
                Critical software. Newly understandable.
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                AI for the code
                <span className="block text-white/65">that still runs the world.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                LegacyBridge transforms COBOL, RPG, Fortran, Ada, MUMPS, JCL, and other
                mission-critical systems into searchable knowledge, safer changes, and
                modernization clarity without blind rewrites.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
                >
                  Book a pilot
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Explore the platform
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-md"
                  >
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-white/58">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/12 bg-white/7 p-4 shadow-[0_25px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="rounded-[1.65rem] border border-white/10 bg-[#08111a] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-blue-100/70">
                        System Intelligence Layer
                      </div>
                      <div className="mt-1 text-lg font-medium text-white">
                        Claims Processing Core
                      </div>
                    </div>
                    <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                      Risk mapped
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                        Natural language query
                      </div>
                      <div className="mt-3 text-sm leading-7 text-white/78">
                        Which modules calculate late-payment penalties and update downstream
                        customer notices?
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                            Extracted answer
                          </div>
                          <div className="mt-3 text-sm leading-7 text-white/78">
                            4 COBOL programs, 2 JCL jobs, and 1 nightly batch process are involved.
                            Penalty logic is duplicated in 2 modules. One path bypasses updated notice
                            templates for legacy account classes.
                          </div>
                        </div>
                        <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] text-amber-100">
                          Change warning
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                        <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                          Test coverage gap
                        </div>
                        <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                          31%
                        </div>
                        <div className="mt-2 text-sm text-white/58">
                          of logic paths currently unprotected
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                        <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                          Recommended path
                        </div>
                        <div className="mt-3 text-sm leading-7 text-white/78">
                          Generate characterization tests, wrap penalty service, then refactor duplicate
                          branch logic.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-blue-300/20 blur-3xl lg:block" />
              <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full bg-amber-200/16 blur-3xl lg:block" />
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.25em] text-blue-100/60">Platform</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            From trapped logic to operating intelligence.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">
            LegacyBridge creates a living system graph around old codebases so teams can
            understand dependencies, preserve expert knowledge, generate safer tests, and
            modernize with evidence instead of guesswork.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-lg font-medium text-white">{pillar.title}</div>
              <p className="mt-4 text-sm leading-7 text-white/65">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="border-y border-white/8 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-blue-100/60">Features</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Built for brownfield reality.
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                Not another generic coding assistant. LegacyBridge is designed for brittle,
                under-documented, mission-critical systems where context matters more than code
                generation theater.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/78"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-blue-100/60">Industries</div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              The systems no one can casually replace.
            </h3>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/70">
            Best fit for organizations with high-value legacy logic, aging expertise, complex
            compliance demands, and a need to modernize carefully instead of destructively.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/78"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-md sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-blue-100/60">Get started</div>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Make your legacy system legible.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/70">
                Start with a pilot. We ingest one critical workflow, map its dependencies,
                surface hidden business rules, and show where safe modernization starts.
              </p>
            </div>

            <a
              href="mailto:founder@legacybridge.ai"
              className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
            >
              founder@legacybridge.ai
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
