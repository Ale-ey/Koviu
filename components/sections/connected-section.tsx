"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useState } from "react";

const BANKS_LOGO = "/banksLogo";

const banks = [
  {
    name: "PostFinance",
    short: undefined,
    description: "Swiss financial institution",
    logo: `${BANKS_LOGO}/postfinance-logo.png`,
    bg: "bg-white",
    labelColor: "text-[#333333]/70",
    nameColor: "text-[#183153]",
  },
  {
    name: "Zürcher Kantonalbank",
    short: "ZKB",
    description: "Swiss cantonal bank",
    logo: `${BANKS_LOGO}/zkb-logo.png`,
    bg: "bg-[#183153]",
    labelColor: "text-white/80",
    nameColor: "text-white",
  },
  {
    name: "Raiffeisen",
    short: undefined,
    description: "Swiss cooperative bank",
    logo: `${BANKS_LOGO}/raiffeisen-logo.png`,
    bg: "bg-[#F5C842]",
    labelColor: "text-[#333333]/80",
    nameColor: "text-[#183153]",
  },
];

function BankCell({
  name,
  short,
  description,
  logo,
  bg,
  labelColor,
  nameColor,
}: {
  name: string;
  short?: string;
  description: string;
  logo: string;
  bg: string;
  labelColor: string;
  nameColor: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`${bg} p-8 text-center`}>
      <p className={`mb-4 font-sans text-xs uppercase tracking-widest ${labelColor}`}>
        {description}
      </p>
      <div className="relative mx-auto flex min-h-[64px] w-full max-w-[200px] items-center justify-center md:min-h-[80px] md:max-w-[240px]">
        {imgError ? (
          <p className={`font-display font-semibold text-xl wrap-break-word md:text-2xl ${nameColor}`}>
            {short ?? name}
          </p>
        ) : (
          <Image
            src={logo}
            alt={name}
            width={200}
            height={80}
            className="object-contain max-h-16 w-full md:max-h-20"
            onError={() => setImgError(true)}
            unoptimized
          />
        )}
      </div>
    </div>
  );
}

export function ConnectedSection() {
  return (
    <section id="partners" className="bg-background">
      <div className="border-t border-[#183153]/12 bg-[#F5F5F5] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl mb-2">
          Bank Connections
        </h2>
        <h3 className="font-display text-xl font-medium text-[#183153]/90 md:text-2xl mb-4">
          Already Connected
        </h3>
        <p className="mb-10 max-w-2xl text-[#333333]/85 text-base leading-relaxed">
          Koivu maintains bank accounts at major Swiss banks for End-to-End payment monitoring and detection of problems.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-[#183153]/10">
          {banks.map((bank) => (
            <BankCell
              key={bank.name}
              name={bank.name}
              short={bank.short}
              description={bank.description}
              logo={bank.logo}
              bg={bank.bg}
              labelColor={bank.labelColor}
              nameColor={bank.nameColor}
            />
          ))}
          <div className="bg-[#F5F5F5] p-8 text-center">
            <p className="mb-2 font-sans text-xs uppercase tracking-widest text-[#333333]/70">
              More partners
            </p>
            <div className="flex flex-col items-center gap-2">
              <Plus className="h-10 w-10 text-[#183153] md:h-12 md:w-12" strokeWidth={2} />
              <p className="font-display font-semibold text-2xl md:text-4xl text-[#183153]">
                On request
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
