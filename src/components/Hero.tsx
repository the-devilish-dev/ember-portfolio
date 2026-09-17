"use client";

import { useEffect, useState } from "react";
import EmberCanvas from "./EmberCanvas";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const titleWords = ["We Build", "Dangerous", "Technology"];

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <EmberCanvas />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[800px]">
        <span
          className="font-[family-name:var(--font-space-grotesk)] text-[12px] uppercase tracking-[0.2em] text-[#ff6600] mb-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          CREATIVE TECHNOLOGY STUDIO
        </span>

        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(48px,8vw,80px)] font-bold text-[#f0f0f5] leading-[0.95] tracking-[-0.03em]">
          {titleWords.map((word, i) => (
            <span
              key={i}
              className="block"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * (i + 1)}s`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className="font-[family-name:var(--font-inter)] text-[18px] text-[#888899] max-w-[480px] mt-6"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          AI research and immersive experiences for brands that refuse to be boring.
        </p>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="font-[family-name:var(--font-space-grotesk)] text-[14px] font-semibold uppercase tracking-[0.1em] bg-[#ff1a1a] text-[#050508] px-10 py-4 rounded mt-10 hover:bg-[#ff3366] hover:-translate-y-0.5 transition-all duration-300"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s, background-color 0.3s, transform 0.3s",
            boxShadow: "0 8px 32px rgba(255, 26, 26, 0.3)",
          }}
        >
          Enter the Lab
        </a>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span className="font-[family-name:var(--font-space-grotesk)] text-[10px] uppercase tracking-[0.15em] text-[#555566]">
          SCROLL
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="animate-bounce text-[#555566]"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
