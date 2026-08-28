"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Fixed, full-viewport decorative layer: a few large, heavily-blurred
 * gradient blobs (blue + a warm amber accent) that drift slowly on their
 * own and shift position as the page scrolls, giving otherwise-static
 * dark sections a bit of depth. Purely decorative — inert to pointer
 * events and behind all real content (-z-10).
 *
 * Each blob is two nested layers: an outer one Framer Motion moves for
 * scroll parallax, and an inner one a CSS @keyframes animation drifts on
 * its own. Both animate `transform`, so they have to live on separate
 * elements or they'd fight each other for the same property.
 */
export function AmbientBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const slowY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fastY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const y1 = prefersReducedMotion ? "0%" : slowY;
  const y2 = prefersReducedMotion ? "0%" : fastY;
  const y3 = prefersReducedMotion ? "0%" : midY;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div style={{ y: y1 }} className="absolute -top-32 -right-24 size-[38rem]">
        <div className="size-full rounded-full bg-[oklch(0.5_0.16_255/0.22)] blur-[110px] motion-safe:animate-ambient-drift-a dark:bg-[oklch(0.55_0.19_255/0.32)]" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-[45%] -left-32 size-[34rem]">
        <div className="size-full rounded-full bg-[oklch(0.52_0.14_285/0.16)] blur-[110px] motion-safe:animate-ambient-drift-b dark:bg-[oklch(0.5_0.17_285/0.26)]" />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] right-[8%] size-[26rem]">
        <div className="size-full rounded-full bg-[oklch(0.75_0.1_55/0.14)] blur-[110px] motion-safe:animate-ambient-drift-c dark:bg-[oklch(0.72_0.13_55/0.2)]" />
      </motion.div>
    </div>
  );
}
