"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/* Images from /public/koviuImages */
const HERO_MAIN = "/koviuImages/main.jpg";
const HERO_SIDES = [
  "/koviuImages/contactless-mobile-payment_23-2151961273.avif",
  "/koviuImages/cropped-view-manager-making-online-payment_1262-3199.avif",
  "/koviuImages/person-playing-contactless_52683-132177.avif",
  "/koviuImages/woman-working-with-finances-counting-money-table-smertphone-notepad_1268-17473.avif",
];

const businessCase = [
  { label: "24/7", value: "Monitoring" },
  { label: "365", value: "Days/Year" },
  { label: "<5min", value: "" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textOpacity = Math.max(0, 1 - scrollProgress / 0.25);
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  const centerWidth = 100 - imageProgress * 80;
  const sideWidth = imageProgress * 40;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;
  const gap = imageProgress * 12;
  const sideTranslateY = -(imageProgress * 15);

  return (
    <section ref={sectionRef} id="hero" className="relative bg-[#183153]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >
            {/* Left Bento Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              <div className="relative h-full flex-1 overflow-hidden rounded-2xl border border-white/20">
                <Image
                  src={HERO_SIDES[0]}
                  alt="Banking"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
              <div className="relative h-full flex-1 overflow-hidden rounded-2xl border border-white/20">
                <Image
                  src={HERO_SIDES[1]}
                  alt="Finance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
            </div>

            {/* Center Hero */}
            <div
              className="relative overflow-hidden will-change-transform rounded-2xl border border-white/20"
              style={{
                width: `${centerWidth}%`,
                height: "100%",
                flex: "0 0 auto",
              }}
            >
              <motion.div
                className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center"
                style={{
                  opacity: textOpacity,
                  transform: "translateY(-40px)",
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <h1 className="font-display text-[clamp(1.75rem,5.5vw,3.5rem)] font-semibold leading-[1.15] tracking-tight text-white md:text-[clamp(2.5rem,5vw,4.25rem)] lg:max-w-4xl">
                  Koivu: a non-sensitive beta client for Swiss Banks
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
                  Real-time production monitoring for Swiss banks and fintechs. Detect payment failures before your customers do.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href="#business-case"
                    className="pointer-events-auto inline-flex items-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    The Business Case
                  </Link>
                </motion.div>
              </motion.div>
              <Image
                src={HERO_MAIN}
                alt="Koivu – Continuous End-to-End Payment Verification"
                fill
                className="absolute inset-0 z-10 object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 z-10 bg-[#183153]/50" />
            </div>

            {/* Right Bento Column */}
            <div
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              <div className="relative h-full flex-1 overflow-hidden rounded-2xl border border-white/20">
                <Image
                  src={HERO_SIDES[2]}
                  alt="Wealth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
              <div className="relative h-full flex-1 overflow-hidden rounded-2xl border border-white/20">
                <Image
                  src={HERO_SIDES[3]}
                  alt="Trust"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="business-case"
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-10 px-6 pb-10 md:px-12 md:pb-14 lg:px-20 lg:pb-16"
        style={{ opacity: textOpacity }}
      >
        <p className="font-display mb-6 text-center text-sm font-medium uppercase tracking-wider text-white/80 md:mb-8">
          The Business Case
        </p>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 md:gap-12">
          {businessCase.map((item, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                {item.label}
              </p>
              {item.value ? (
                <p className="mt-0.5 text-sm text-white/80">{item.value}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="h-[200vh]" />
    </section>
  );
}
