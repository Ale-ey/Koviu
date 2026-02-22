"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    { src: "/koviuImages/forex-trading-setup-vacant-office_482257-121461.avif", alt: "Koivu payment verification" },
    { src: "/koviuImages/businessman-analyzing-stock-market-data_23-2151966721.jpg", alt: "24/7 monitoring" },
    { src: "/koviuImages/rear-view-man-seated-armchair-cafe-analyzing-diagrams-charts-before-presentation_1098-19128.avif", alt: "Real verification" },
    { src: "/koviuImages/woman-working-with-finances-counting-money-table-smertphone-notepad_1268-17473.avif", alt: "Koivu 24/7" },
  ];

  const updateTransform = useCallback(() => {
    if (!galleryRef.current) return;
    const rect = galleryRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = galleryRef.current.offsetHeight;
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateTransform);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateTransform]);

  const isLastImage = images.length - 1;
  const fullscreenStartProgress = 0.6;
  const fullscreenProgress = Math.max(
    0,
    Math.min(1, (scrollProgress - fullscreenStartProgress) / (1 - fullscreenStartProgress))
  );
  const easedFullscreenProgress = 1 - Math.pow(1 - fullscreenProgress, 3);

  return (
    <section
      id="gallery"
      ref={galleryRef}
      className="relative bg-[#183153]"
      style={{ minHeight: `${(images.length + 1) * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-4">
        <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]">
          {images.map((image, index) => {
            const isLast = index === isLastImage;
            const imageProgress = scrollProgress * images.length - index;
            const stackProgress = Math.max(0, Math.min(1, imageProgress));
            let translateY = (1 - stackProgress) * 100;
            let scale = 0.8 + stackProgress * 0.2;
            const opacity = stackProgress;

            if (isLast) {
              const normalScale = 0.8 + stackProgress * 0.2;
              const expandedScale = 1 + easedFullscreenProgress * 0.8;
              scale =
                normalScale +
                Math.max(0, stackProgress - 0.8) * 5 * (expandedScale - normalScale);
            }

            const zIndex = index;
            const borderRadius =
              isLast && easedFullscreenProgress > 0.3
                ? (1 - easedFullscreenProgress) * 16
                : undefined;

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  zIndex,
                  transform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  WebkitTransform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  opacity,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  willChange: "transform, opacity",
                }}
              >
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl border border-white/20 glass"
                  style={{
                    borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
