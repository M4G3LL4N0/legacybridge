type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">{eyebrow}</div>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{description}</p>
    </div>
  );
}
