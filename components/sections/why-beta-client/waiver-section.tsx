"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function WaiverSection() {
  return (
    <SectionScrollReveal from="bottom">
      <section className="bg-[#183153] px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2ECC71] text-white">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
              Verzicht auf Bankkundengeheimnis
            </h3>
            <p className="mt-2 text-white/90 leading-relaxed">
              Koivu signs a formal waiver of banking secrecy with your institution. This gives your dev, QA, and operations teams full access to Koivu&apos;s account—unrestricted, in production—for the specific scenarios where anonymized and synthetic data fall short.
            </p>
          </div>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
