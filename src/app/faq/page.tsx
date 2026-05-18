import FaqSection from "@/components/site/FaqSection";
import { SubpageVisual } from "@/components/SubpageVisual";
import PageIntro from "@/components/site/PageIntro";

export default function FaqPage() {
  return (
    <main className="premium-page-shell">
      <SubpageVisual variant="default" />
      <section className="page-shell py-20 lg:py-24">
        <PageIntro
          eyebrow="FAQ"
          title="Questions that come up before teams commit."
          description="This page centralizes the most important buying and rollout questions around LegacyBridge."
        />
      </section>

      <FaqSection />
    </main>
  );
}
