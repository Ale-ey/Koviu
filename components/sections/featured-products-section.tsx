"use client";

import { FadeImage } from "@/components/fade-image";

/* Bento grid: all images from /public/koviuImages */
const KOVIU = "/koviuImages";
const features = [
  { image: `${KOVIU}/forex-trading-setup-vacant-office_482257-121461.avif`, span: "col-span-2 row-span-2", title: "SIC Instant Payment", points: ["24/7/365 availability", "Rent due at midnight? Done.", "End-to-end verification"] },
  { image: `${KOVIU}/contactless-mobile-payment_23-2151961273.avif`, span: "col-span-1 row-span-1", title: "TWINT & Cards", points: ["24/7/365 availability", "3am kebab run? Pay instantly.", "Real transaction testing"] },
  { image: `${KOVIU}/woman-working-with-finances-counting-money-table-smertphone-notepad_1268-17473.avif`, span: "col-span-1 row-span-1", title: "e-Banking & Mobile", points: ["24/7/365 availability", "Check balance at 2am? Always.", "Mobile & web flows"] },
  { image: `${KOVIU}/person-playing-contactless_52683-132177.avif`, span: "col-span-1 row-span-2", title: "Digital Asset Trading", points: ["24/7/365 availability", "Buy the dip at 4am? No problem.", "Trading & settlement checks"] },
  { image: `${KOVIU}/cropped-view-manager-making-online-payment_1262-3199.avif`, span: "col-span-1 row-span-1" },
  { image: `${KOVIU}/businessman-analyzing-stock-market-data_23-2151966721.jpg`, span: "col-span-2 row-span-1" },
  { image: `${KOVIU}/rear-view-man-seated-armchair-cafe-analyzing-diagrams-charts-before-presentation_1098-19128.avif`, span: "col-span-1 row-span-1" },
  { image: `${KOVIU}/debt-ridk-difficulty-downfall-concept_53876-121107.avif`, span: "col-span-1 row-span-2" },
  { image: `${KOVIU}/couple-traveling-with-vaccination-passports_23-2149351535.avif`, span: "col-span-2 row-span-1" },
  { image: `${KOVIU}/fashion-coat-joyful-pretty_1187-4875.avif`, span: "col-span-1 row-span-1" },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="relative bg-background py-20 md:py-32">
      <div className="px-4 md:px-12 lg:px-20">
        <h2 className="font-display mb-3 text-4xl font-semibold tracking-tight text-[#183153] md:text-5xl lg:text-6xl">
          Feature Highlights
        </h2>
        <p className="mb-12 text-lg text-[#333333]/80 md:text-xl leading-relaxed">24/7 availability across Swiss banking & fintech.</p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 w-full max-w-7xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bento-card card-hover-green relative overflow-hidden ${feature.span}`}
            >
              <FadeImage
                src={feature.image}
                alt={feature.title ?? `Koivu ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#183153]/80 via-[#183153]/20 to-transparent" />
              {feature.title && (
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                  <p className="font-display text-lg font-semibold tracking-tight md:text-xl lg:text-2xl">{feature.title}</p>
                  {"points" in feature && feature.points && feature.points.length > 0 && (
                    <ul className="mt-2 space-y-1 text-base md:text-lg text-white/90 leading-relaxed">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#2ECC71] shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
