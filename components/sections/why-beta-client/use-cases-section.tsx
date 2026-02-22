"use client";

import Image from "next/image";
import { useCases, useCasesGridSpan } from "./data";
import { SectionScrollReveal } from "./section-scroll-reveal";

export function UseCasesSection() {
  return (
    <SectionScrollReveal from="bottom">
      <section className="relative overflow-hidden bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="absolute inset-0 z-0">
          <Image src="/koviuImages/end.jpg" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#F5F5F5]/90" aria-hidden />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl lg:text-4xl">
            Where Koivu Helps
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-[#333333]/80">
            Use Cases That Need Production Presence — These scenarios require a real account in production—where anonymized and synthetic data can&apos;t go
          </p>
          <div className="mt-12 grid grid-cols-1 auto-rows-[200px] gap-4 sm:grid-cols-2 sm:auto-rows-[200px] lg:grid-cols-4 lg:auto-rows-[200px]">
            {useCases.map((item, i) => {
              const span = useCasesGridSpan[i];
              const spanClass = [span.default, span.sm, span.lg].join(" ");
              const Icon = item.icon;
              const hasImage = item.image != null;
              const imgPos = item.imagePosition ?? "top";
              const isMedium = item.imageSize === "medium";
              const widthClass = isMedium ? "min-w-[100px] w-[40%]" : "min-w-[80px] w-[35%]";
              const topImageHeight = hasImage && imgPos === "top" ? (isMedium ? "h-28 md:h-32" : "h-24 md:h-28") : "";
              const contentPt = hasImage && imgPos === "top" ? (isMedium ? "pt-36 md:pt-40" : "pt-24 md:pt-28") : "";
              return (
                <div
                  key={i}
                  className={`glass-card card-hover-green group relative flex h-full min-h-0 overflow-hidden rounded-2xl ${spanClass}`}
                >
                  {hasImage && imgPos === "left" && (
                    <div className={`relative h-full shrink-0 ${widthClass} overflow-hidden`}>
                      <Image src={item.image!} alt="" fill className="object-cover" sizes="(max-width: 768px) 120px, 160px" />
                      <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent pointer-events-none" />
                    </div>
                  )}
                  {hasImage && imgPos === "right" && (
                    <div className={`relative order-2 h-full shrink-0 ${widthClass} overflow-hidden`}>
                      <Image src={item.image!} alt="" fill className="object-cover" sizes="(max-width: 768px) 120px, 160px" />
                      <div className="absolute inset-0 bg-linear-to-l from-white/20 to-transparent pointer-events-none" />
                    </div>
                  )}
                  {hasImage && imgPos === "top" && (
                    <div className={`absolute top-0 left-0 right-0 ${topImageHeight} w-full overflow-hidden`}>
                      <Image src={item.image!} alt="" fill className="object-cover" sizes="(max-width: 768px) 280px, 320px" />
                      <div className="absolute inset-0 bg-linear-to-b from-white/15 to-transparent pointer-events-none" />
                    </div>
                  )}
                  <div className={`relative flex flex-1 min-h-0 flex-col p-4 md:p-5 ${contentPt} ${hasImage && imgPos === "right" ? "order-1" : ""}`}>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#183153]/10 text-[#183153] transition-colors duration-300 group-hover:bg-[#2ECC71]/20 group-hover:text-[#2ECC71] md:h-10 md:w-10">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-2 font-display text-sm font-semibold text-[#183153] md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 flex-1 min-h-0 overflow-hidden text-xs text-[#333333]/80 leading-relaxed line-clamp-3 md:line-clamp-4 md:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionScrollReveal>
  );
}
