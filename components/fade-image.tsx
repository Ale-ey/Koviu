"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "motion/react";

interface FadeImageProps extends Omit<ImageProps, "onLoad"> {
  fadeDelay?: number;
}

export function FadeImage({ className, fadeDelay = 0, ...props }: FadeImageProps) {
  return (
    <motion.div
      className="relative h-full w-full"
      initial={{ opacity: 0, scale: 1.02 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "50px", amount: 0.1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: fadeDelay,
      }}
    >
      <Image {...props} className={className} />
    </motion.div>
  );
}
