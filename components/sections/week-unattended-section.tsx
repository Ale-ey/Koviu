"use client";

import Image from "next/image";

const KOVIU = "/koviuImages";
const challengeItems = [
  {
    title: "IT Monitoring Is Not Enough",
    body: "Traditional monitoring confirms that systems are running. It does not confirm that payments are succeeding end-to-end.",
    image: `${KOVIU}/businessman-analyzing-stock-market-data_23-2151966721.jpg`,
  },
  {
    title: "Always-On Expectations",
    body: "eBanking and payments operate 24/7. Support and operations teams typically work business hours, leaving a large window unattended.",
    image: `${KOVIU}/person-playing-contactless_52683-132177.avif`,
  },
  {
    title: "Early Problem Detection",
    body: "Proactive end-to-end monitoring reduces downtime and supports client satisfaction and regulatory expectations.",
    image: `${KOVIU}/forex-trading-setup-vacant-office_482257-121461.avif`,
  },
  {
    title: "The Real Test Is in Production",
    body: "Agile releases and interconnected systems mean the definitive test of payment flows often occurs in production.",
    image: `${KOVIU}/rear-view-man-seated-armchair-cafe-analyzing-diagrams-charts-before-presentation_1098-19128.avif`,
  },
  {
    title: "Compliance Constraints",
    body: "FINMA and equivalent frameworks require operational resilience. Using real client data for testing is restricted.",
    image: `${KOVIU}/woman-working-with-finances-counting-money-table-smertphone-notepad_1268-17473.avif`,
  },
];

export function WeekUnattendedSection() {
  return (
    <section className="relative overflow-x-hidden bg-background">
      {/* Top media block — same layout as Why Koivu (video block) */}
      <div className="relative aspect-16/9 w-full overflow-hidden md:aspect-21/9">
        <Image
          src={`${KOVIU}/end.jpg`}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#183153]" style={{ opacity: 0.3 }} />
      </div>

      {/* Content block — same structure and classes as Why Koivu */}
      <div className="border-t border-[#183153]/12 bg-[#F5F5F5] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl mb-10">
          73% of the Week Runs Unattended
        </h2>
        <p className="mb-10 text-[#333333]/85 leading-relaxed md:text-lg">
          Your current monitoring covers business hours. The remainder of the week is largely unmonitored.
        </p>
        <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-[#183153]/10">
          <div className="bg-[#F5F5F5] p-8 text-center">
            <p className="mb-2 font-sans text-xs uppercase tracking-widest text-[#333333]/70">
              Business hours — actively monitored
            </p>
            <p className="font-display font-semibold text-2xl md:text-4xl text-[#183153]">45h</p>
            <p className="mt-1 text-lg font-medium text-[#2ECC71]">26.8%</p>
          </div>
          <div className="bg-[#F5F5F5] p-8 text-center">
            <p className="mb-2 font-sans text-xs uppercase tracking-widest text-[#333333]/70">
              Evenings, nights, weekends — unattended
            </p>
            <p className="font-display font-semibold text-2xl md:text-4xl text-[#183153]">123h</p>
            <p className="mt-1 text-lg font-medium text-amber-500">73.2%</p>
          </div>
        </div>
        <p className="mt-8 rounded-xl border border-[#2ECC71]/30 bg-[#2ECC71]/10 px-6 py-4 text-[#333333]/90 md:text-base">
          During these 123 hours, payment failures may go undetected until the next business day — when the impact on clients and reputation is already material.
        </p>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl mt-16 mb-10">
          The Challenge
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challengeItems.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-[#183153]/15 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-[#183153]/10">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#183153]/40" />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2ECC71]/90 text-lg font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg font-semibold text-[#183153] md:text-xl">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm text-[#333333]/85 leading-relaxed md:text-base">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
