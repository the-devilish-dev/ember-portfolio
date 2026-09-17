"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Research", href: "#manifesto" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          height: 64,
          backgroundColor: "rgba(5, 5, 8, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(255, 26, 26, 0.1)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-[family-name:var(--font-space-grotesk)] text-[18px] font-bold tracking-[0.15em]"
          >
            <span className="text-[#ff1a1a]">DEVILISH</span>
            <span className="text-[#f0f0f5]">LABS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-[family-name:var(--font-inter)] text-[14px] font-medium text-[#888899] hover:text-[#ff1a1a] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 bg-[#f0f0f5] transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(45deg) translateY(4px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 bg-[#f0f0f5] transition-all duration-300"
              style={{
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 bg-[#f0f0f5] transition-all duration-300"
              style={{
                transform: mobileOpen ? "rotate(-45deg) translateY(-4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{
            backgroundColor: "rgba(5, 5, 8, 0.95)",
            backdropFilter: "blur(20px)",
            paddingTop: 64,
          }}
        >
          <div className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-[family-name:var(--font-inter)] text-[18px] font-medium text-[#888899] hover:text-[#ff1a1a] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
