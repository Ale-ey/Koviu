"use client";

import Link from "next/link";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function CtaSection() {
  return (
    <SectionScrollReveal from="bottom">
      <section className="border-t border-[#183153]/10 bg-[#183153] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Complete Your Test Data Strategy
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Let&apos;s discuss how Koivu can fill the gaps in your existing testing approach.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#about"
              className="btn-koivu-green inline-flex items-center gap-2 px-8 py-3.5 text-base"
            >
              Schedule a Conversation
            </Link>
            <Link
              href="/#accessories"
              className="inline-flex items-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              See All Products
            </Link>
          </div>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
