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
      ? "border border-blue-300/30 bg-blue-300/16 text-white shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:border-blue-200/40 hover:bg-blue-200/20"
      : "border border-white/12 bg-white/6 text-white/85 hover:bg-white/10 hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
