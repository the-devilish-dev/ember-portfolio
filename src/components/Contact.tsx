"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      id="contact"
      className="relative w-full py-[120px] bg-[#0a0a0f]"
    >
      <div
        ref={ref}
        className="max-w-[600px] mx-auto px-6 text-center"
      >
        <h2
          className="font-[family-name:var(--font-playfair)] text-[clamp(32px,5vw,48px)] font-semibold text-[#f0f0f5] tracking-[-0.02em]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Ready to make something dangerous?
        </h2>

        <p
          className="font-[family-name:var(--font-inter)] text-[16px] text-[#888899] mt-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
          }}
        >
          Tell us about your project. We&apos;ll tell you how we can push it beyond what you imagined.
        </p>

        <a
          href="mailto:hello@devilishlabs.com"
          className="inline-block font-[family-name:var(--font-space-grotesk)] text-[14px] font-semibold uppercase tracking-[0.1em] bg-[#ff1a1a] text-[#050508] px-12 py-[18px] rounded mt-10 hover:bg-[#ff3366] hover:-translate-y-0.5 transition-all duration-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, background-color 0.3s, transform 0.3s",
            boxShadow: "0 8px 32px rgba(255, 26, 26, 0.3)",
          }}
        >
          Start a Project
        </a>

        <a
          href="mailto:hello@devilishlabs.com"
          className="block font-[family-name:var(--font-inter)] text-[14px] text-[#555566] hover:text-[#ff1a1a] mt-6 transition-colors duration-300 hover:underline"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.5s, color 0.3s",
          }}
        >
          Or email us at hello@devilishlabs.com
        </a>
      </div>
    </section>
  );
}
