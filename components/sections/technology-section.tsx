"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function ScrollRevealText({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.p
      className="font-display text-2xl font-medium leading-snug text-white md:text-3xl lg:text-4xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px", amount: 0.3 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.04, delayChildren: 0.1 },
        },
        hidden: {},
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{ marginRight: "0.3em" }}
          variants={{
            visible: { opacity: 1, filter: "blur(0px)" },
            hidden: { opacity: 0, filter: "blur(12px)" },
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

const sideImages = [
  { src: "/koviuImages/cropped-view-manager-making-online-payment_1262-3199.avif", alt: "Payment verification", position: "left" as const },
  { src: "/koviuImages/person-playing-contactless_52683-132177.avif", alt: "24/7 monitoring", position: "right" as const },
];

const textCycles = [
  "Real Payments.",
  "Real Verification.",
  "24/7 Monitoring.",
  "73% of the week runs unattended.",
  "Your monitoring covers business hours. We cover the rest.",
  "End-to-end verification. Not just system status.",
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const descriptionText =
    "Koivu maintains accounts at your bank and performs continuous penny-test transactions to verify end-to-end processing. Inter-bank (SIC/SEPA/SWIFT) or intra-bank: Koivu GmbH initiates, confirms, and alerts on failure.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 4;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const titleOpacity = Math.max(0, 1 - scrollProgress / 0.2);
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  const centerWidth = 100 - imageProgress * 58;
  const sideWidth = imageProgress * 22;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + imageProgress * 100;
  const sideTranslateRight = 100 - imageProgress * 100;
  const gap = imageProgress * 16;

  return (
    <section ref={sectionRef} className="relative bg-[#183153]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
          >
            <div
              className="relative overflow-hidden will-change-transform rounded-2xl border border-white/20"
              style={{
                width: `${sideWidth}%`,
                height: "100%",
                transform: `translateX(${sideTranslateLeft}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "left")
                .map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                ))}
            </div>

            <div
              className="relative overflow-hidden will-change-transform rounded-2xl border border-white/20"
              style={{
                width: `${centerWidth}%`,
                height: "100%",
                flex: "0 0 auto",
              }}
            >
              <Image
                src="/koviuImages/forex-trading-setup-vacant-office_482257-121461.avif"
                alt="Koivu payment verification"
                fill
                className="object-cover"
              />
              <Image
                src="/koviuImages/businessman-analyzing-stock-market-data_23-2151966721.jpg"
                alt="24/7 monitoring"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.2)),
                  transition: "opacity 0.3s ease",
                }}
              />
              <Image
                src="/koviuImages/rear-view-man-seated-armchair-cafe-analyzing-diagrams-charts-before-presentation_1098-19128.avif"
                alt="Real verification"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.2)),
                  transition: "opacity 0.3s ease",
                }}
              />
              <Image
                src="/koviuImages/woman-working-with-finances-counting-money-table-smertphone-notepad_1268-17473.avif"
                alt="Koivu 24/7"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.7) / 0.2)),
                  transition: "opacity 0.3s ease",
                }}
              />
              <div className="absolute inset-0 bg-[#183153]/50" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                {textCycles.map((text, cycleIndex) => {
                  const cycleStart = cycleIndex / textCycles.length;
                  const cycleEnd = (cycleIndex + 1) / textCycles.length;
                  const words = text.split(" ");

                  return (
                    <h2
                      key={cycleIndex}
                      className="font-display absolute max-w-3xl font-semibold leading-tight tracking-tight text-white text-3xl md:text-5xl lg:text-6xl"
                    >
                      {words.map((word, wordIndex) => {
                        let wordOpacity = 0;
                        let wordBlur = 40;
                        if (scrollProgress >= cycleStart && scrollProgress < cycleEnd) {
                          const localProgress =
                            (scrollProgress - cycleStart) / (cycleEnd - cycleStart);
                          if (localProgress < 0.5) {
                            const appearProgress = (localProgress / 0.5) * (words.length + 1);
                            const wordAppearProgress = Math.max(
                              0,
                              Math.min(1, appearProgress - wordIndex)
                            );
                            wordOpacity = wordAppearProgress;
                            wordBlur = (1 - wordAppearProgress) * 40;
                          } else {
                            const disappearProgress =
                              ((localProgress - 0.5) / 0.5) * (words.length + 1);
                            const wordDisappearProgress = Math.max(
                              0,
                              Math.min(1, disappearProgress - wordIndex)
                            );
                            wordOpacity = 1 - wordDisappearProgress;
                            wordBlur = wordDisappearProgress * 40;
                          }
                        }
                        return (
                          <span
                            key={wordIndex}
                            className="inline-block"
                            style={{
                              opacity: wordOpacity,
                              filter: `blur(${wordBlur}px)`,
                              transition: "opacity 0.1s linear, filter 0.1s linear",
                              marginRight: "0.3em",
                            }}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </h2>
                  );
                })}
              </div>
            </div>

            <div
              className="relative overflow-hidden will-change-transform rounded-2xl border border-white/20"
              style={{
                width: `${sideWidth}%`,
                height: "100%",
                transform: `translateX(${sideTranslateRight}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[400vh]" />

      <div
        ref={textSectionRef}
        className="relative overflow-hidden bg-[#183153] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40"
      >
        <div
          className="absolute top-0 left-0 right-0 z-0 pointer-events-none h-32"
          style={{
            background:
              "linear-gradient(to bottom, #183153 0%, rgba(24, 49, 83, 0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl">
          <ScrollRevealText text={descriptionText} />
        </div>
      </div>
    </section>
  );
}
