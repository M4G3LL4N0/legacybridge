import ButtonLink from "@/components/ui/ButtonLink";
import { SubpageVisual } from "@/components/SubpageVisual";
import PageIntro from "@/components/site/PageIntro";

export default function ContactPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="contact" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="Contact"
          title="Start the conversation where the system feels most fragile."
          description="The strongest first discussion usually starts with one workflow, one buyer group, and one place the organization needs more clarity before it acts."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="premium-surface rounded-[1.9rem] p-7">
            <div className="text-xl font-medium text-white">Contact options</div>
            <div className="mt-6 space-y-4">
              <a
                href="mailto:founder@legacybridge.ai"
                className="block rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm text-white/78 transition hover:border-cyan-300/18 hover:bg-white/[0.05]"
              >
                founder@legacybridge.ai
              </a>
              <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/68">
                Use email for pilot conversations, enterprise walkthrough requests, deployment posture questions, or partnership interest.
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <ButtonLink href="/demo">Request walkthrough</ButtonLink>
              <ButtonLink href="/pilot" variant="secondary">
                Review pilot structure
              </ButtonLink>
            </div>
          </div>

          <div className="premium-surface rounded-[1.9rem] p-7">
            <div className="text-xl font-medium text-white">Conversation prompts</div>
            <div className="mt-6 space-y-4">
              {[
                "Which workflow is most poorly understood but still business-critical?",
                "Where is change currently risky because too much logic is hidden?",
                "Which system depends on too few experts or too much tribal knowledge?",
                "Where would a pilot create the fastest proof of value?",
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
        </div>
      </section>
    </main>
  );
}
