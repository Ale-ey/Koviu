"use client";

import Image from "next/image";
import Link from "next/link";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src="/koviuImages/forex-trading-setup-vacant-office_482257-121461.avif"
          alt="Koivu – Continuous Payment Verification"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183153]/85 via-[#183153]/40 to-transparent" />

        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <div className="glass-strong mx-auto max-w-2xl rounded-2xl border border-white/20 px-8 py-10 md:px-12 md:py-12 text-center">
            <h3 className="font-display text-2xl font-semibold text-[#183153] md:text-3xl">
              Ready for a 1-Month Pilot?
            </h3>
            <p className="mt-4 text-[#333333] leading-relaxed">
              Start with in-house account transfers or instant payments. Evaluate results with weekly reports and direct calls.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="mailto:info@koivu.ch"
                className="btn-koivu-primary px-6 py-3"
              >
                Schedule a Call
              </Link>
              <Link
                href="#reserve"
                className="btn-koivu-green px-6 py-3"
              >
                Start Pilot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
