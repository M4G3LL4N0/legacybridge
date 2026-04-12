import ButtonLink from "@/components/ui/ButtonLink";

type SectionCtaProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function SectionCta({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: SectionCtaProps) {
  return (
    <div className="premium-surface rounded-[2.2rem] p-8 sm:p-10 lg:p-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/58">{eyebrow}</div>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            {title}
          </h3>
          <p className="mt-5 text-base leading-8 text-white/70">{body}</p>
        </div>

        <div className="flex flex-col gap-4">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}
