/**
 * Fixed, full-viewport decorative layer: a few large, blurred gradient
 * blobs (blue + a warm amber accent) that drift slowly on their own,
 * giving otherwise-static dark sections a bit of depth. Purely
 * decorative — inert to pointer events and behind all real content
 * (-z-10).
 *
 * Deliberately zero-JS: no "use client", no framer-motion. A blurred,
 * animating layer is already one of the more GPU-expensive things a
 * mobile browser can composite, so this stays server-rendered CSS only
 * — no scroll listener recalculating a transform every frame on top of
 * that. `motion-safe:` (not a JS media-query check) is what disables the
 * drift for `prefers-reduced-motion: reduce`.
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-32 -right-24 size-[32rem] rounded-full bg-[oklch(0.5_0.16_255/0.22)] blur-[70px] motion-safe:animate-ambient-drift-a dark:bg-[oklch(0.55_0.19_255/0.32)]" />
      <div className="absolute top-[45%] -left-32 size-[28rem] rounded-full bg-[oklch(0.52_0.14_285/0.16)] blur-[70px] motion-safe:animate-ambient-drift-b dark:bg-[oklch(0.5_0.17_285/0.26)]" />
      <div className="absolute bottom-[-10%] right-[8%] size-[22rem] rounded-full bg-[oklch(0.75_0.1_55/0.14)] blur-[70px] motion-safe:animate-ambient-drift-c dark:bg-[oklch(0.72_0.13_55/0.2)]" />
    </div>
  );
}
