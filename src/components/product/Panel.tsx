import { ReactNode } from "react";

type PanelProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  rightSlot?: ReactNode;
};

export default function Panel({ eyebrow, title, children, rightSlot }: PanelProps) {
  return (
    <section className="premium-surface rounded-[2rem] p-6 sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">{eyebrow}</div>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.9rem]">
            {title}
          </h2>
        </div>
        {rightSlot ? rightSlot : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
