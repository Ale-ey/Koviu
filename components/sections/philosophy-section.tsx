"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  Quote,
  BarChart3,
  Server,
  MessageSquare,
  AlertTriangle,
  Calendar,
  Gauge,
  Layers,
  Eye,
  Zap,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const KOVIU = "/koviuImages";

const scenarioSteps = [
  { time: "FRIDAY 18:00", label: "Clearing system connection becomes unstable", sub: "Intermittent timeouts. Internal metrics show elevated latency but no clear failure state." },
  { time: "SATURDAY 10:00", label: "Customers experience payment failures", sub: "Weekend shoppers can't complete transfers. Some retry, some give up, some call support." },
  { time: "SUNDAY 14:00", label: "Social media complaints accumulate", sub: '"@YourBank payment not working again" — a local journalist notices the pattern.' },
  { time: "MONDAY 08:00", label: "Full team investigates — 62 hours later", sub: "Press inquiries are already incoming. For banks with state guarantees, this becomes a governance issue." },
  { time: "MONDAY 09:00", label: "Bank internal escalation", sub: "Top Management is alerted. Everybody is concerned." },
  { time: "MONDAY 11:00", label: "Problem fixed", sub: "The technical issue is resolved, but the reputational damage is done." },
];

const contextItems = [
  { icon: BarChart3, label: "Application exceptions" },
  { icon: MessageSquare, label: "MQ queues & dead letters" },
  { icon: Zap, label: "Dequeue speeds & latency" },
  { icon: Layers, label: "Batch job progress" },
  { icon: XCircle, label: "Reject statistics" },
  { icon: Server, label: "Server & API health" },
];

const comparisonRows = [
  { aspect: "Perspective", internal: "Inside infrastructure", koivu: "External customer view" },
  { aspect: "Scope", internal: "All internal systems", koivu: "Specific payment routes" },
  { aspect: "Method", internal: "Logs, metrics, alerts", koivu: "Real transaction execution" },
  { aspect: "Clearing systems", internal: "Interface monitoring", koivu: "End-to-end verification" },
  { aspect: "Third-party issues", internal: "Often invisible", koivu: "Detected if on test route" },
  { aspect: "Coverage hours", internal: "24/7 automated alerts", koivu: "Configurable test frequency" },
];

const notKoivu = [
  "Not a replacement for your IT monitoring — it's an additional layer",
  "Detects issues on tested payment routes only — not all possible failure modes",
  "Point-in-time verification — confirms success at test intervals, not continuous real-time",
  "Issues between tests won't be caught until the next scheduled verification",
];

export function PhilosophySection() {
  return (
    <section id="why-monitoring" className="bg-background">
      {/* Top media block — same as rest of app */}
      <div className="relative aspect-16/9 w-full overflow-hidden md:aspect-21/9">
        <Image
          src={`${KOVIU}/end.jpg`}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#183153]" style={{ opacity: 0.4 }} />
      </div>

      {/* Content block — same structure as Why Koivu / 73% section */}
      <div className="border-t border-[#183153]/12 bg-[#F5F5F5] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl lg:text-4xl mb-4">
            The Gap in Banking Monitoring
          </h2>
          <p className="text-lg text-[#333333]/85 md:text-xl mb-12">
            Why &quot;System Green&quot; doesn&apos;t always mean customers can pay
          </p>

          {/* The Problem */}
          <div className="rounded-2xl border border-[#183153]/15 bg-white p-6 shadow-sm md:p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl">
              The Problem
            </h3>
            <p className="mt-3 text-[#333333]/85 md:text-lg">
              Internal Monitoring Can Create an Illusion of Security. Your dashboards show green. But what do customers actually experience?
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#183153]/10 bg-[#F5F5F5] p-4">
                <div className="flex items-center gap-2 text-[#2ECC71]">
                  <CheckCircle2 className="h-6 w-6 shrink-0" />
                  <span className="font-medium">Internal View</span>
                </div>
                <p className="mt-2 text-sm text-[#333333]/80">
                  &quot;Servers up. APIs responding. Queues processing. No exceptions flagged.&quot;
                </p>
              </div>
              <div className="rounded-xl border border-[#183153]/10 bg-[#F5F5F5] p-4">
                <div className="flex items-center gap-2 text-amber-600">
                  <XCircle className="h-6 w-6 shrink-0" />
                  <span className="font-medium">Customer Reality</span>
                </div>
                <p className="mt-2 text-sm text-[#333333]/80">
                  &quot;Payment stuck. Confirmation never arrived. Can&apos;t complete transfer.&quot;
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#2ECC71]/30 bg-[#2ECC71]/10 p-4">
              <Quote className="h-6 w-6 shrink-0 text-[#2ECC71]" />
              <p className="text-[#333333]/90">
                Internal monitoring tells you if systems are running. External verification tells you if payments are succeeding.
              </p>
            </div>
          </div>

          {/* The Numbers */}
          <div className="rounded-2xl border border-[#183153]/15 bg-white p-6 shadow-sm md:p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-[#2ECC71]" />
              The Numbers
            </h3>
            <p className="mt-2 font-medium text-[#183153]">The Off-Hours Challenge</p>
            <p className="mt-1 text-[#333333]/85 md:text-lg">
              73% of every week is outside core business hours. Evenings, nights, weekends, holidays — when active investigation of issues is slower.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-[#183153]/10 sm:grid-cols-4">
              <div className="bg-[#F5F5F5] p-4 text-center">
                <span className="font-display text-3xl font-bold text-[#2ECC71] md:text-4xl">73%</span>
                <p className="mt-1 text-xs text-[#333333]/70">outside core hours</p>
              </div>
              <div className="bg-[#F5F5F5] p-4 text-center">
                <span className="font-display text-2xl font-bold text-[#183153] md:text-3xl">168</span>
                <p className="mt-1 text-xs text-[#333333]/70">hours per week</p>
              </div>
              <div className="bg-[#F5F5F5] p-4 text-center">
                <span className="font-display text-2xl font-bold text-[#183153] md:text-3xl">~45</span>
                <p className="mt-1 text-xs text-[#333333]/70">core business hours</p>
              </div>
              <div className="bg-[#F5F5F5] p-4 text-center">
                <span className="font-display text-2xl font-bold text-amber-600 md:text-3xl">~123</span>
                <p className="mt-1 text-xs text-[#333333]/70">off-hours exposure</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#333333]/75">
              This is when consumer mobile banking and instant payment usage peaks.
            </p>
          </div>

          {/* The Scenario */}
          <div className="rounded-2xl border border-[#183153]/15 bg-white p-6 shadow-sm md:p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[#2ECC71]" />
              The Scenario
            </h3>
            <p className="mt-2 font-medium text-[#183153]">A Walking Reputation Risk</p>
            <p className="mt-1 text-sm text-[#333333]/75">How an unnoticed issue can escalate over a weekend</p>
            <div className="mt-6 space-y-3">
              {scenarioSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-[#183153]/10 bg-[#F5F5F5] p-4"
                >
                  <span className="shrink-0 font-mono text-xs font-medium text-[#2ECC71] md:text-sm">
                    {step.time}
                  </span>
                  <div>
                    <p className="font-medium text-[#183153]">{step.label}</p>
                    <p className="mt-0.5 text-sm text-[#333333]/80">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Context */}
          <div className="rounded-2xl border border-[#183153]/15 bg-white p-6 shadow-sm md:p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl">
              Context
            </h3>
            <p className="mt-2 font-medium text-[#183153]">Your IT Monitoring is Already Comprehensive</p>
            <p className="mt-1 text-[#333333]/85">
              Banks monitor their infrastructure extensively. Koivu adds a different angle.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contextItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-[#183153]/10 bg-[#F5F5F5] px-4 py-3"
                  >
                    <Icon className="h-6 w-6 shrink-0 text-[#2ECC71]" />
                    <span className="text-[#333333]/90">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 flex items-start gap-2 rounded-xl border border-[#2ECC71]/30 bg-[#2ECC71]/10 p-4">
              <Eye className="h-6 w-6 shrink-0 text-[#2ECC71]" />
              <p className="text-[#333333]/90">
                All of this is essential. Koivu doesn&apos;t replace it—Koivu adds the question: &quot;Did the payment actually arrive at the other end?&quot;
              </p>
            </div>
          </div>

          {/* The Comparison */}
          <div className="rounded-2xl border border-[#183153]/15 bg-white p-6 shadow-sm md:p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl flex items-center gap-2">
              <Gauge className="h-6 w-6 text-[#2ECC71]" />
              The Comparison
            </h3>
            <p className="mt-2 text-[#333333]/85 md:text-lg">Different Tools for Different Purposes</p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-[#183153]/15">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead>
                  <tr className="border-b border-[#183153]/15 bg-[#183153]/5">
                    <th className="px-4 py-3 font-semibold text-[#183153]">Aspect</th>
                    <th className="px-4 py-3 font-semibold text-[#183153]">Internal Monitoring</th>
                    <th className="px-4 py-3 font-semibold text-[#2ECC71]">Koivu Verification</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#183153]/10 even:bg-[#F5F5F5]/50">
                      <td className="px-4 py-3 font-medium text-[#333333]">{row.aspect}</td>
                      <td className="px-4 py-3 text-[#333333]/85">{row.internal}</td>
                      <td className="px-4 py-3 text-[#183153] font-medium">{row.koivu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* What Koivu is NOT */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-6 md:p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-[#183153] md:text-2xl flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
              What Koivu is NOT
            </h3>
            <ul className="mt-4 space-y-2">
              {notKoivu.map((item, i) => (
                <li key={i} className="flex gap-2 text-[#333333]/90">
                  <span className="text-amber-600">⚠</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-[#183153]/15 bg-white p-8 text-center shadow-sm md:p-10">
            <ShieldAlert className="mx-auto h-14 w-14 text-[#2ECC71]" />
            <h3 className="font-display mt-4 text-2xl font-semibold text-[#183153] md:text-3xl">
              Want to Close This Gap?
            </h3>
            <p className="mt-3 text-[#333333]/85 max-w-lg mx-auto md:text-lg">
              Let&apos;s discuss how Koivu can add outside-in verification to your monitoring stack.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#about"
                className="btn-koivu-green inline-flex items-center gap-2 text-base"
              >
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/#technology"
                className="inline-flex items-center gap-2 rounded-xl border border-[#183153]/30 bg-white px-5 py-2.5 text-base font-medium text-[#183153] transition hover:bg-[#183153]/5"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
