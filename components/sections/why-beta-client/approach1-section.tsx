"use client";

import { anonymizedBullets } from "./data";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function Approach1Section() {
  return (
    <SectionScrollReveal from="bottom">
      <section className="border-t border-[#183153]/10 bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-semibold text-[#183153] md:text-2xl">
            Approach 1 — Anonymized Customer Data
          </h2>
          <p className="mt-1 text-[#333333]/80">
            Valuable for realistic testing, with some inherent constraints
          </p>
          <ul className="mt-8 space-y-6">
            {anonymizedBullets.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#183153]/10 text-[#183153]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#183153]">{item.title}</h4>
                    <p className="mt-1 text-sm text-[#333333]/85 leading-relaxed">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-[#333333]/80">
            Anonymized data remains essential for scale testing and pattern analysis. Koivu complements it for specific use cases.
          </p>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
