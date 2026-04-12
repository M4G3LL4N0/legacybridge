import Link from "next/link";
import Section from "@/components/ui/Section";

const deliverables = [
  "System walkthrough of one critical workflow",
  "Initial dependency and artifact map",
  "Hidden logic and duplication findings",
  "Test coverage gap review",
  "Modernization options with risk framing",
  "Executive-ready summary of what the system actually does",
];

export default function PilotPage() {
  return (
    <main>
      <Section
        eyebrow="Pilot"
        title="Start with a high-signal enterprise pilot."
        description="The pilot is designed to create immediate clarity on one fragile or poorly understood workflow before larger modernization work begins."
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
            <div className="text-xl font-medium text-white">Pilot deliverables</div>
            <div className="mt-6 grid gap-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
            <div className="text-xl font-medium text-white">Who this is for</div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
              <p>
                Teams with a fragile workflow nobody wants to touch, outdated documentation,
                retiring experts, or growing pressure to modernize.
              </p>
              <p>
                Typical buyers include architecture leaders, modernization owners, CIO
                organizations, platform leaders, and consulting teams responsible for legacy transformation.
              </p>
              <p>
                Start with one workflow. Prove value fast. Expand from evidence.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:founder@legacybridge.ai?subject=LegacyBridge%20Pilot"
                className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
              >
                founder@legacybridge.ai
              </a>
              <Link
                href="/platform"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                Review platform
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
