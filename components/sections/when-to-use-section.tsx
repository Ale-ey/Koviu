"use client";

import React from "react";

const rows = [
  { bestFor: "Volume / load testing", anonymized: "Excellent", synthetic: "Excellent", koivu: "Limited" },
  { bestFor: "Pattern / behavior analysis", anonymized: "Excellent", synthetic: "Limited", koivu: "Single client" },
  { bestFor: "Privacy-safe development", anonymized: "With care", synthetic: "Excellent", koivu: "Yes" },
  { bestFor: "Production feature rollouts", anonymized: "No", synthetic: "No", koivu: "Yes" },
  { bestFor: "Mobile / 2FA / SMS testing", anonymized: "No", synthetic: "No", koivu: "Yes" },
  { bestFor: "Pennytest Payments", anonymized: "No", synthetic: "No", koivu: "Yes" },
  { bestFor: "Full team access without restrictions", anonymized: "Limited", synthetic: "Yes", koivu: "Yes" },
  { bestFor: "Realistic screenshots / demos", anonymized: "No", synthetic: "No", koivu: "Yes" },
];

function Cell({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`p-4 text-sm md:p-5 ${highlight ? "bg-[#2ECC71]/10 font-semibold text-[#183153]" : "text-[#333333]/80"}`}
    >
      {children}
    </div>
  );
}

export function WhenToUseSection() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24 lg:py-28">
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl lg:text-4xl">
          When to Use What
        </h2>
        <p className="mt-3 text-[#333333]/80 text-lg">
          A complete test data strategy. Each approach excels in different scenarios—use them together for full coverage.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-[#183153]/10 bg-white">
          <div className="grid min-w-[600px] grid-cols-4 gap-px bg-[#183153]/10">
            <div className="col-span-1 bg-[#F5F5F5] p-4 font-display text-xs font-semibold uppercase tracking-wider text-[#183153] md:p-5 md:text-sm">
              Best For
            </div>
            <div className="bg-[#F5F5F5] p-4 font-display text-xs font-semibold uppercase tracking-wider text-[#183153] md:p-5 md:text-sm">
              Anonymized Data
            </div>
            <div className="bg-[#F5F5F5] p-4 font-display text-xs font-semibold uppercase tracking-wider text-[#183153] md:p-5 md:text-sm">
              Synthetic Data
            </div>
            <div className="bg-[#2ECC71]/15 p-4 font-display text-xs font-semibold uppercase tracking-wider text-[#183153] md:p-5 md:text-sm">
              Koivu as Betaclient
            </div>
            {rows.map((row, i) => (
              <React.Fragment key={i}>
                <div className="border-t border-[#183153]/10 bg-white p-4 text-sm font-medium text-[#183153] md:p-5">
                  {row.bestFor}
                </div>
                <Cell>{row.anonymized}</Cell>
                <Cell>{row.synthetic}</Cell>
                <Cell highlight>{row.koivu}</Cell>
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-[#333333]/80">
          The best test data strategy uses all three approaches for their respective strengths.
        </p>
      </div>
    </section>
  );
}
