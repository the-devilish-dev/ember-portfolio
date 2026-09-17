"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
    title: "Generative AI",
    description: "Custom AI models, diffusion systems, and generative pipelines trained on your brand's visual language.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff3366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Immersive Experiences",
    description: "WebGL installations, interactive narratives, and spatial computing experiences that blur the line between digital and physical.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Creative Technology",
    description: "Prototyping, R&D, and production-ready systems for campaigns, products, and permanent installations.",
  },
];

export default function Capabilities() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      id="capabilities"
      className="relative w-full py-[120px] bg-[#050508]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[12px] uppercase tracking-[0.2em] text-[#ff6600] block mb-4">
            WHAT WE DO
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(36px,5vw,48px)] font-semibold text-[#f0f0f5] tracking-[-0.02em]">
            Capabilities
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="group relative p-10 rounded-xl transition-all duration-400"
              style={{
                backgroundColor: "rgba(10, 10, 15, 0.7)",
                border: "1px solid rgba(255, 26, 26, 0.15)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 * i}s, border-color 0.4s, box-shadow 0.4s, transform 0.4s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 26, 26, 0.4)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(255, 26, 26, 0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 26, 26, 0.15)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="mb-6">{cap.icon}</div>
              <h3 className="font-[family-name:var(--font-inter)] text-[24px] font-semibold text-[#f0f0f5] mb-3">
                {cap.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[14px] text-[#888899] leading-[1.6]">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
