"use client";

import { FadeImage } from "@/components/fade-image";

const products = [
  {
    id: 1,
    name: "Continuous Verification",
    points: [
      "Real penny-test payments 24/7 using Koivu accounts",
      "Automatic retry on failure (2x)",
      "Instant email alerts",
      "Weekly reports included",
    ],
    image: "/koviuImages/forex-trading-setup-vacant-office_482257-121461.avif",
  },
  {
    id: 2,
    name: "Non-Sensitive Client Data",
    points: [
      "Waiver of banking secrecy (Verzicht auf Bankkundengeheimnis)",
      "Full transaction history for testing and feature rollouts",
      "Reference data for training, demos, and production debugging",
    ],
    image: "/koviuImages/businessman-analyzing-stock-market-data_23-2151966721.jpg",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-[#F5F5F5]">
      <div className="px-6 py-16 md:px-12 lg:px-20 md:py-12">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-[#183153] md:text-5xl lg:text-6xl">
          Two Products. <span className="text-[#2ECC71]">One Solution</span>
        </h2>
      </div>

      <div className="pb-24">
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {products.map((item) => (
            <div
              key={item.id}
              className="group shrink-0 w-[75vw] snap-center bento-card card-hover-green rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <FadeImage
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183153]/70 to-transparent group-hover:from-[#183153]/60 group-hover:bg-[#2ECC71]/10 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{item.name}</h3>
                  <ul className="mt-4 space-y-2 text-lg text-white/90 leading-relaxed">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#2ECC71] shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8 md:px-12 lg:px-20">
          {products.map((item) => (
            <div key={item.id} className="group bento-card card-hover-green rounded-2xl overflow-hidden">
              <div className="relative aspect-[2/3] overflow-hidden">
                <FadeImage
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183153]/70 to-transparent opacity-80 group-hover:opacity-90 group-hover:bg-[#2ECC71]/10 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">
                  <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">{item.name}</h3>
                  <ul className="mt-5 space-y-2.5 text-xl text-white/90 leading-relaxed md:text-2xl md:leading-relaxed">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="text-[#2ECC71] shrink-0 text-xl md:text-2xl">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
