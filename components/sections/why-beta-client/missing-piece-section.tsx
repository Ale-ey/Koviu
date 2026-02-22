"use client";

import { SectionScrollReveal } from "./section-scroll-reveal";

export function MissingPieceSection() {
  return (
    <SectionScrollReveal from="right">
      <section className="border-t border-[#183153]/10 bg-white px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-[#183153] md:text-3xl lg:text-4xl">
            The Missing Piece
          </h2>
          <p className="mt-2 text-xl font-medium text-[#183153] md:text-2xl">
            A Real Client With Banking Secrecy Waiver
          </p>
          <p className="mt-4 text-[#333333]/85 leading-relaxed md:text-lg">
            Koivu GmbH complements your anonymized and synthetic data—covering use cases they can&apos;t
          </p>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
