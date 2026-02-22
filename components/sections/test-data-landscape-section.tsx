"use client";

const approach1Points = [
  { title: "Compliance Overhead", description: "Requires careful anonymization processes to meet DSG (Switzerland), DSGVO/GDPR (EU), and banking secrecy requirements. Re-identification risk must be managed." },
  { title: "Environment Restrictions", description: "Typically restricted to controlled test environments. Can't be used in production or shared with external partners for cross-system testing." },
  { title: "Access Controls Needed", description: "Even anonymized data may require access controls and audit trails. External contractors and offshore teams may be excluded." },
  { title: "Data Freshness", description: "Anonymized snapshots can become stale. Keeping test data in sync with production patterns requires ongoing effort." },
];

const approach2Points = [
  { title: "No Production Presence", description: "Synthetic clients don't exist in production. Feature rollouts and production validation require a different approach." },
  { title: "No Mobile Device", description: "Synthetic clients can't receive SMS for 2FA, push notifications, or verify mobile app flows. End-to-end mobile testing requires real devices." },
  { title: "External Partners", description: "TWINT, SIX, correspondent banks, card networks don't have your synthetic clients. Cross-system integration testing has limits." },
  { title: "AI/ML Training", description: "Machine learning models often need real-world edge cases and behavioral patterns that synthetic data may not capture fully." },
  { title: "Documentation Realism", description: "Screenshots with placeholder data can look unprofessional in training materials and sales demos." },
  { title: "Production Debugging", description: "Reproducing production issues often requires access to real production data and transactions." },
];

export function TestDataLandscapeSection() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-28">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl lg:text-4xl">
          The Landscape
        </h2>
        <p className="mt-3 text-[#333333]/80 text-lg">
          Current approaches to test data. Banks typically use anonymized customer data and synthetic data—both valuable, each with tradeoffs.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bento-card card-hover-green rounded-2xl border border-[#183153]/10 bg-[#F5F5F5]/80 p-8">
            <h3 className="font-display text-xl font-semibold text-[#183153]">
              Anonymized Customer Data
            </h3>
            <p className="mt-2 text-sm text-[#333333]/80">
              Real patterns, but requires careful handling. Can&apos;t use for production testing or external systems.
            </p>
          </div>
          <div className="bento-card card-hover-green rounded-2xl border border-[#183153]/10 bg-[#F5F5F5]/80 p-8">
            <h3 className="font-display text-xl font-semibold text-[#183153]">
              Synthetic Test Data
            </h3>
            <p className="mt-2 text-sm text-[#333333]/80">
              Safe and scalable, but doesn&apos;t exist in production or external partner systems.
            </p>
          </div>
        </div>

        <blockquote className="mt-10 border-l-4 border-[#2ECC71] pl-6 font-display text-xl italic text-[#333333]/90 md:text-2xl">
          Both approaches are essential. But some use cases fall through the gaps.
          <cite className="mt-2 block not-italic text-base text-[#2ECC71] font-medium">— Where Koivu adds value</cite>
        </blockquote>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl">
            Approach 1 — Anonymized Customer Data
          </h3>
          <p className="mt-2 text-[#333333]/80">
            Valuable for realistic testing, with some inherent constraints.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {approach1Points.map((item, i) => (
              <div
                key={i}
                className="bento-card card-hover-green rounded-xl border border-[#183153]/10 bg-white p-5"
              >
                <h4 className="font-display text-sm font-semibold text-[#183153] uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-[#333333]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#333333]/80 italic">
            Anonymized data remains essential for scale testing and pattern analysis. Koivu complements it for specific use cases.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl">
            Approach 2 — Synthetic Test Data
          </h3>
          <p className="mt-2 text-[#333333]/80">
            Safe, scalable, and privacy-compliant—with some inherent constraints.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {approach2Points.map((item, i) => (
              <div
                key={i}
                className="bento-card card-hover-green rounded-xl border border-[#183153]/10 bg-white p-5"
              >
                <h4 className="font-display text-sm font-semibold text-[#183153] uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-[#333333]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#333333]/80 italic">
            Synthetic data is excellent for volume testing, load testing, and privacy-safe development. Koivu fills the gaps where production presence is needed.
          </p>
        </div>
      </div>
    </section>
  );
}
