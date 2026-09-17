"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-12 bg-[#050508] border-t border-[rgba(255,26,26,0.1)]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-[family-name:var(--font-space-grotesk)] text-[14px] font-bold tracking-[0.15em]">
          <span className="text-[#ff1a1a]">DEVILISH LABS</span>
          <span className="text-[#555566] ml-2">© 2024</span>
        </div>

        <div className="flex items-center gap-8">
          {["Twitter", "Instagram", "GitHub"].map((social) => (
            <a
              key={social}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-[family-name:var(--font-inter)] text-[13px] text-[#555566] hover:text-[#ff1a1a] transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          className="font-[family-name:var(--font-inter)] text-[13px] text-[#555566] hover:text-[#ff1a1a] transition-colors duration-300"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}
