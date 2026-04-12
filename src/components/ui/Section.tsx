import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24 ${className}`}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-100/60">{eyebrow}</div>
        ) : null}
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{description}</p>
        ) : null}
      </div>
      <div className="mt-12 lg:mt-14">{children}</div>
    </section>
  );
}
