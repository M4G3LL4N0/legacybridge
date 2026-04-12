"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Demo" },
  { href: "/about", label: "About" },
  { href: "/login", label: "Login" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
      >
        Menu
      </button>

      {open ? (
        <div className="absolute left-6 right-6 top-[76px] z-50 rounded-[1.5rem] border border-white/10 bg-[#08111a]/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="space-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-transparent px-4 py-3 text-sm text-white/78 transition hover:border-white/10 hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
