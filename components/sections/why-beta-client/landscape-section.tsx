"use client";

import { Lock, FlaskConical } from "lucide-react";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function LandscapeSection() {
  return (
    <SectionScrollReveal from="right">
      <section className="border-t border-[#183153]/10 bg-[#F5F5F5] px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold text-[#183153] md:text-3xl">
            The Landscape
          </h2>
          <p className="mt-2 text-lg text-[#333333]/80">
            Current Approaches to Test Data — Banks typically use anonymized customer data and synthetic data—both valuable, each with tradeoffs
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center rounded-2xl border border-[#183153]/15 bg-white p-6 text-center shadow-sm md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#183153]/10 text-[#183153]">
                <Lock className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[#183153]">
                Anonymized Customer Data
              </h3>
              <p className="mt-2 text-sm text-[#333333]/80">
                Real patterns, but requires careful handling. Can&apos;t use for production testing or external systems.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-[#183153]/15 bg-white p-6 text-center shadow-sm md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#183153]/10 text-[#183153]">
                <FlaskConical className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-[#183153]">
                Synthetic Test Data
              </h3>
              <p className="mt-2 text-sm text-[#333333]/80">
                Safe and scalable, but doesn&apos;t exist in production or external partner systems.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center font-medium italic text-[#183153]">
            &quot;Both approaches are essential. But some use cases fall through the gaps.&quot;
          </p>
          <p className="mt-2 text-center text-sm font-medium text-[#2ECC71]">
            — Where Koivu adds value
          </p>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
