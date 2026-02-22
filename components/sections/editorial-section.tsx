"use client";

import { useRef, useState, useEffect, useCallback } from "react";

// ——— Media before "Why Koivu — Easy to Start. Zero Overhead" ———
// Change src to swap video; poster = thumbnail before load; overlay 0–100
const EDITORIAL_VIDEO = {
  src: "https://videocdn.cdnpk.net/videos/ffda794d-6a48-5836-96e0-03ff997126fb/horizontal/previews/clear/large.mp4?token=exp=1771717557~hmac=1868be6711a428bbfbf9c57763ce04f4b0793ce2e38529f22aa04f926049b8a1",
  poster: "", // e.g. "/images/editorial-poster.jpg"
  overlayOpacity: 30, // 0–100
  parallaxStrength: 30,
};

const specs = [
  { label: "No Software Project", value: "Zero" },
  { label: "Consulting Needed", value: "None" },
  { label: "Pricing", value: "Pay-as-you-go" },
  { label: "FINMA & Resilience", value: "Supported" },
];

export function EditorialSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!videoRef.current) return;
    const rect = videoRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const videoTop = rect.top;
    const videoBottom = rect.bottom;
    if (videoBottom > 0 && videoTop < windowHeight) {
      const progress =
        1 -
        (videoTop + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateParallax);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateParallax]);

  const parallaxY = (scrollProgress - 0.5) * EDITORIAL_VIDEO.parallaxStrength;

  return (
    <section className="bg-background">
      <div
        ref={videoRef}
        className="relative aspect-16/9 w-full overflow-hidden md:aspect-21/9"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            WebkitTransform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
          }}
          src={EDITORIAL_VIDEO.src}
          poster={EDITORIAL_VIDEO.poster || undefined}
        />
        <div
          className="absolute inset-0 bg-[#183153]"
          style={{ opacity: EDITORIAL_VIDEO.overlayOpacity / 100 }}
        />
      </div>

      <div className="border-t border-[#183153]/12 bg-[#F5F5F5] px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-[#183153] md:text-3xl mb-10">
          Why Koivu — Easy to Start. Zero Overhead
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-[#183153]/10">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-[#F5F5F5] p-8 text-center"
            >
              <p className="mb-2 font-sans text-xs uppercase tracking-widest text-[#333333]/70">
                {spec.label}
              </p>
              <p className={`font-display font-semibold text-2xl md:text-4xl break-words ${spec.label === "Pricing" ? "text-[#2ECC71]" : "text-[#183153]"}`}>
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
