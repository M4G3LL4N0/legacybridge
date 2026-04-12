"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/pilot", label: "Pilot" },
  { href: "/pricing", label: "Pricing" },
  { href: "/security", label: "Security" },
  { href: "/demo", label: "Demo" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div className="absolute left-6 right-6 top-[78px] z-50 rounded-[1.6rem] border border-white/10 bg-[#08111a]/96 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="mb-3 text-[11px] uppercase tracking-[0.22em] text-cyan-100/50">
            Navigate
          </div>
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

          <div className="mt-4 rounded-2xl border border-cyan-300/14 bg-cyan-300/8 p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-cyan-100/52">
              LegacyBridge
            </div>
            <div className="mt-2 text-sm leading-6 text-white/68">
              AI for legacy code intelligence and safer modernization.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
