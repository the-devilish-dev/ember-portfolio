"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 47, label: "Projects Delivered", suffix: "" },
  { value: 12, label: "Awards Won", suffix: "" },
  { value: 8, label: "Team Members", suffix: "" },
  { value: 0, label: "Lines of Code", suffix: "∞", isInfinity: true },
];

function CountUp({ target, isVisible, isInfinity }: { target: number; isVisible: boolean; isInfinity?: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    if (isInfinity) {
      setCount(0);
      return;
    }

    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, isInfinity]);

  if (isInfinity) return <span>∞</span>;
  return <span>{count}</span>;
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="relative w-full py-20 bg-[#050508] border-y border-[rgba(255,26,26,0.1)]">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.6s ease ${0.2 * i}s`,
            }}
          >
            <div className="font-[family-name:var(--font-playfair)] text-[clamp(40px,5vw,56px)] font-bold text-[#ff1a1a] mb-2">
              <CountUp target={stat.value} isVisible={isVisible} isInfinity={stat.isInfinity} />
              {stat.suffix && !stat.isInfinity && stat.suffix}
            </div>
            <div
              className="font-[family-name:var(--font-space-grotesk)] text-[12px] uppercase tracking-[0.15em] text-[#888899]"
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.6s ease ${0.2 * i + 0.5}s`,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
