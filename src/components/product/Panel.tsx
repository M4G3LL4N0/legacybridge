import { ReactNode } from "react";

type PanelProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  rightSlot?: ReactNode;
};

export default function Panel({ eyebrow, title, children, rightSlot }: PanelProps) {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          {eyebrow ? (
            <div className="text-xs uppercase tracking-[0.22em] text-blue-100/55">{eyebrow}</div>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h2>
        </div>
        {rightSlot ? rightSlot : null}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
