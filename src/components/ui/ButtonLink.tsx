import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(56,189,248,0.18),rgba(16,185,129,0.16))] text-white shadow-[0_0_40px_rgba(56,189,248,0.14)] hover:border-cyan-200/35 hover:bg-[linear-gradient(135deg,rgba(56,189,248,0.24),rgba(16,185,129,0.22))]"
      : "border border-white/12 bg-white/6 text-white/85 hover:bg-white/10 hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
