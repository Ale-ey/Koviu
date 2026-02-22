"use client";

import Image from "next/image";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function IntroSection() {
  return (
    <SectionScrollReveal from="bottom">
      <section className="relative overflow-hidden bg-[#183153] px-6 pt-20 pb-16 md:px-12 md:pt-28 md:pb-24 lg:px-20">
        <div className="absolute inset-0 z-0">
          <Image src="/koviuImages/end.jpg" alt="" fill className="object-cover opacity-30" sizes="100vw" />
          <div className="absolute inset-0 bg-[#183153]/90" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Completing Your Test Data Strategy
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">
            Anonymized data and synthetic data each have strengths. Koivu fills the gaps they can&apos;t cover.
          </p>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
