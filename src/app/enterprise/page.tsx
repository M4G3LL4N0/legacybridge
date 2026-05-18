import PageIntro from "@/components/site/PageIntro";
import { SubpageVisual } from "@/components/SubpageVisual";
import SectionCta from "@/components/site/SectionCta";

const pillars = [
  {
    title: "Deployment posture",
    body: "Frame LegacyBridge for private environments, controlled access, and enterprise-grade trust conversations from the first serious discussion.",
  },
  {
    title: "Operating model",
    body: "Start with one pilot workspace, prove signal on one workflow, then expand based on trust, coverage needs, and modernization priority.",
  },
  {
    title: "Stakeholder alignment",
    body: "Support architecture, platform, modernization, security, and executive stakeholders with outputs each group can actually use.",
  },
  {
    title: "Cross-source intelligence",
    body: "Unify code, jobs, docs, artifacts, and tribal knowledge into one layer that reduces fragmentation inside critical brownfield systems.",
  },
  {
    title: "Safer sequencing",
    body: "Help teams decide what to leave, what to wrap, what to test, and what to modernize first before expensive programs accelerate.",
  },
  {
    title: "Proof before expansion",
    body: "The enterprise motion is designed to earn broader rollout by first making one workflow clearly more legible and governable.",
  },
];

export default function EnterprisePage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="default" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Enterprise"
          title="LegacyBridge is designed to enter like an enterprise product, not a consumer AI tool."
          description="The sales, deployment, and product framing all support serious conversations around high-value systems, controlled environments, and pilot-led adoption."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="premium-surface premium-surface-hover rounded-[1.9rem] p-6"
            >
              <div className="text-lg font-medium text-white">{pillar.title}</div>
              <div className="mt-4 text-sm leading-7 text-white/68">{pillar.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-24">
        <SectionCta
          eyebrow="Enterprise motion"
          title="The fastest path to expansion is a pilot that creates immediate strategic signal."
          body="Once one fragile workflow becomes understandable and actionable, the case for broader deployment becomes much stronger."
          primaryHref="/demo"
          primaryLabel="Request enterprise walkthrough"
          secondaryHref="/security"
          secondaryLabel="Review security"
        />
      </section>
    </main>
  );
}
