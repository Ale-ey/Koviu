"use client";

import {
  IntroSection,
  MissingPieceSection,
  WaiverSection,
  QuoteSection,
  TableSection,
  ScopeSection,
  UseCasesSection,
  LandscapeSection,
  Approach1Section,
  Approach2Section,
  CtaSection,
} from "./why-beta-client";

export function WhyBetaClientPageContent() {
  return (
    <div className="bg-[#F5F5F5]">
      <IntroSection />
      <MissingPieceSection />
      <WaiverSection />
      <QuoteSection />
      <TableSection />
      <ScopeSection />
      <UseCasesSection />
      <LandscapeSection />
      <Approach1Section />
      <Approach2Section />
      <CtaSection />
    </div>
  );
}
