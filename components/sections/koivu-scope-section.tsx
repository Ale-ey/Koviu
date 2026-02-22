"use client";

export function KoivuScopeSection() {
  return (
    <section className="bg-[#183153] py-10 md:py-14">
      <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <div className="bento-card rounded-2xl border border-white/20 bg-white/10 px-6 py-6 backdrop-blur-sm md:px-8 md:py-8">
          <h3 className="font-display text-lg font-semibold text-white md:text-xl">
            Koivu&apos;s Scope
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-white/90 leading-relaxed md:text-base">
            <li>Koivu is one client—it complements, not replaces, your volume testing with anonymized or synthetic data.</li>
            <li>Koivu&apos;s transaction patterns reflect our business activities—not a statistically representative sample.</li>
            <li>Best for targeted production testing, not comprehensive regression suites.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
