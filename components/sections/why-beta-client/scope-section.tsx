"use client";

import { AlertTriangle } from "lucide-react";
import { scopeBullets } from "./data";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function ScopeSection() {
  return (
    <SectionScrollReveal from="right">
      <section className="border-t border-amber-400/30 bg-amber-50/80 px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600" />
            <h3 className="font-display text-xl font-semibold text-[#183153]">
              Koivu&apos;s Scope
            </h3>
          </div>
          <ul className="mt-4 space-y-2">
            {scopeBullets.map((item, i) => (
              <li key={i} className="flex gap-2 text-[#333333]/90">
                <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
