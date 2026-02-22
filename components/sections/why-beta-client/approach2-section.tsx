"use client";

import { syntheticBullets } from "./data";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function Approach2Section() {
  return (
    <SectionScrollReveal from="right">
      <section className="border-t border-[#183153]/10 bg-[#F5F5F5] px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-xl font-semibold text-[#183153] md:text-2xl">
            Approach 2 — Synthetic Test Data
          </h2>
          <p className="mt-1 text-[#333333]/80">
            Safe, scalable, and privacy-compliant—with some inherent constraints
          </p>
          <ul className="mt-8 space-y-6">
            {syntheticBullets.map((item, i) => {
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
            Synthetic data is excellent for volume testing, load testing, and privacy-safe development. Koivu fills the gaps where production presence is needed.
          </p>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
