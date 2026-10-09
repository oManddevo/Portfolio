"use client";

import { useEffect, useRef } from "react";

type Props = { value: number; decimals?: number; suffix?: string };

// Renders the final number on the server; counts up from zero the first time it scrolls into view.
export default function CountUp({ value, decimals = 0, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const format = (n: number) => n.toFixed(decimals) + suffix;
    let raf = 0;
    el.textContent = format(0);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1400);
          el.textContent = format(value * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals, suffix]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
