"use client";

import { Quote } from "lucide-react";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function QuoteSection() {
  return (
    <SectionScrollReveal from="right">
      <section className="border-t border-[#183153]/10 bg-white px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-10 w-10 text-[#2ECC71]" />
          <blockquote className="mt-4 font-display text-xl font-medium italic text-[#183153] md:text-2xl">
            &quot;Anonymized for volume. Synthetic for safety. Koivu for production reality.&quot;
          </blockquote>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
