"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Manifesto() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="manifesto"
      className="relative w-full py-[120px] bg-[#0a0a0f]"
    >
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-0 items-start"
      >
        <div className="md:w-[40%] md:pr-12">
          <p
            className="font-[family-name:var(--font-playfair)] text-[clamp(24px,3vw,32px)] font-semibold text-[#f0f0f5] leading-[1.3]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-60px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            We don&apos;t do safe. We don&apos;t do predictable. We build the kind of technology that makes people feel something.
          </p>
        </div>

        <div
          className="hidden md:block w-px self-stretch mx-8"
          style={{
            backgroundColor: "rgba(255, 26, 26, 0.2)",
            transformOrigin: "top",
            transform: isVisible ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        />

        <div className="md:w-[60%] md:pl-4">
          <p
            className="font-[family-name:var(--font-inter)] text-[16px] text-[#888899] leading-[1.7] mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(60px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            Devilish Labs is a collective of engineers, artists, and researchers operating at the intersection of artificial intelligence and human emotion. We create immersive digital experiences, generative art systems, and AI-powered products for brands that want to stand out.
          </p>
          <p
            className="font-[family-name:var(--font-inter)] text-[16px] text-[#888899] leading-[1.7]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(60px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
          >
            Founded in 2024, we&apos;ve partnered with forward-thinking companies across fashion, music, and entertainment to push the boundaries of what&apos;s possible in digital space.
          </p>
        </div>
      </div>
    </section>
  );
}
