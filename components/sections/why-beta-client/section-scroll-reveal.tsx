"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealFrom = "bottom" | "right";

const scrollRevealConfig = {
  start: "top 85%",
  end: "top 20%",
  toggleActions: "play none none none",
};

export function SectionScrollReveal({
  from,
  children,
}: {
  from: RevealFrom;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromProps = from === "bottom"
      ? { opacity: 0, y: 72 }
      : { opacity: 0, x: 72 };
    const toProps = from === "bottom"
      ? { opacity: 1, y: 0 }
      : { opacity: 1, x: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: scrollRevealConfig.start,
        end: scrollRevealConfig.end,
        toggleActions: scrollRevealConfig.toggleActions,
      },
    });
    tl.fromTo(el, fromProps, {
      ...toProps,
      duration: 0.75,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [from]);

  return <div ref={ref}>{children}</div>;
}
