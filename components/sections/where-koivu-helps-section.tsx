"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Rocket,
  Bug,
  Smartphone,
  BookOpen,
  Brain,
  Presentation,
  Link2,
  FileCheck,
  type LucideIcon,
} from "lucide-react";

const useCases: {
  title: string;
  description: string;
  icon: LucideIcon;
  span: string;
}[] = [
  {
    title: "Feature Rollouts",
    description: "Deploy new features to Koivu's accounts first via feature toggles. Test in production before general release.",
    icon: Rocket,
    span: "col-span-2 row-span-2",
  },
  {
    title: "Production Debugging",
    description: "Reproduce and investigate production issues using Koivu's account without privacy concerns.",
    icon: Bug,
    span: "col-span-1 row-span-1",
  },
  {
    title: "Mobile & 2FA Testing",
    description: "Koivu has a real mobile phone. Test SMS verification, push notifications, and mobile app flows end-to-end.",
    icon: Smartphone,
    span: "col-span-1 row-span-1",
  },
  {
    title: "Documentation & Training",
    description: "Create guides and training materials with real screenshots. Onboard new employees with realistic scenarios.",
    icon: BookOpen,
    span: "col-span-1 row-span-2",
  },
  {
    title: "AI/ML Training Data",
    description: "Train fraud detection, recommendation engines, or analytics models with real transaction patterns—compliantly.",
    icon: Brain,
    span: "col-span-1 row-span-1",
  },
  {
    title: "Sales Demos",
    description: "Show prospects real banking features with real data—not placeholder data that looks unprofessional.",
    icon: Presentation,
    span: "col-span-2 row-span-1",
  },
  {
    title: "External System Testing",
    description: "Koivu exists in production. Test integrations with SIX, TWINT, card networks, and correspondent banks using a real account.",
    icon: Link2,
    span: "col-span-1 row-span-1",
  },
  {
    title: "Audit Demonstrations",
    description: "Show auditors your testing and monitoring processes using real workflows—without exposing customer data.",
    icon: FileCheck,
    span: "col-span-1 row-span-1",
  },
];

export function WhereKoivuHelpsSection() {
  return (
    <section id="why-beta-client" className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/koviuImages/end.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#F5F5F5]/85" aria-hidden />
      </div>
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl lg:text-4xl">
          Where Koivu Helps
        </h2>
        <p className="mt-3 max-w-2xl text-[#333333]/80 text-lg">
          Use cases that need production presence—where anonymized and synthetic data can&apos;t go.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px", amount: 0.1 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
            hidden: {},
          }}
        >
          {useCases.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className={`glass-card card-hover-green group relative flex flex-col p-4 transition-all duration-300 md:p-6 ${item.span}`}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 24 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#183153]/10 text-[#183153] transition-colors duration-300 group-hover:bg-[#2ECC71]/20 group-hover:text-[#2ECC71] md:h-12 md:w-12">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold text-[#183153] md:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 flex-1 text-xs text-[#333333]/80 leading-relaxed line-clamp-3 md:line-clamp-4 md:text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
