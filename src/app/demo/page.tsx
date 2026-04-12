import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/site/Reveal";

export default function DemoPage() {
  return (
    <main>
      <Section
        eyebrow="Demo"
        title="Request an enterprise LegacyBridge walkthrough."
        description="Use this page as the premium request-demo and contact surface while future form infrastructure is added."
      >
        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="text-xl font-medium text-white">What the demo should cover</div>
              <div className="mt-6 space-y-4">
                {[
                  "How LegacyBridge builds a system intelligence layer",
                  "Natural-language querying over fragile legacy workflows",
                  "Rule extraction and dependency graphing",
                  "Generated test packs and workflow risk framing",
                  "Pilot structure and private deployment posture",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md">
              <div className="text-xl font-medium text-white">Request flow</div>
              <div className="mt-6 space-y-4">
                {[
                  "Work email",
                  "Company",
                  "Primary legacy system",
                  "Current modernization challenge",
                  "Preferred timeline",
                ].map((field) => (
                  <div
                    key={field}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/50"
                  >
                    {field}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:founder@legacybridge.ai?subject=LegacyBridge%20Demo%20Request"
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-300/30 bg-blue-300/16 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] transition hover:border-blue-200/40 hover:bg-blue-200/20"
                >
                  founder@legacybridge.ai
                </a>
                <ButtonLink href="/login" variant="secondary">
                  View workspace demo
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
