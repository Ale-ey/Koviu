"use client";

import { comparisonRows } from "./data";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function TableSection() {
  return (
    <SectionScrollReveal from="bottom">
      <section className="bg-[#F5F5F5] px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-semibold text-[#183153] md:text-3xl">
            When to Use What
          </h2>
          <p className="mt-2 text-lg text-[#333333]/80">
            A Complete Test Data Strategy — Each approach excels in different scenarios—use them together for full coverage
          </p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-[#183153]/15 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#183153]/15 bg-[#183153]/5">
                  <th className="px-4 py-3 font-semibold text-[#183153]">Best For</th>
                  <th className="px-4 py-3 font-semibold text-[#183153]">Anonymized Data</th>
                  <th className="px-4 py-3 font-semibold text-[#183153]">Synthetic Data</th>
                  <th className="px-4 py-3 font-semibold text-[#2ECC71]">Koivu as Betaclient</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-[#183153]/10 even:bg-white/50">
                    <td className="px-4 py-3 font-medium text-[#333333]">{row.bestFor}</td>
                    <td className="px-4 py-3 text-[#333333]/90">{row.anonymized}</td>
                    <td className="px-4 py-3 text-[#333333]/90">{row.synthetic}</td>
                    <td className="px-4 py-3 text-[#183153] font-medium">{row.koivu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-[#333333]/80">
            The best test data strategy uses all three approaches for their respective strengths.
          </p>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
