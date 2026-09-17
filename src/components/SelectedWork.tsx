"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";

const projects = [
  {
    title: "Neon Genesis",
    category: "Generative Video",
    image: "/images/project-1.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "The Void",
    category: "Immersive Web",
    image: "/images/project-2.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Spectre",
    category: "AI Identity",
    image: "/images/project-3.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Inferno",
    category: "Live Visuals",
    image: "/images/project-4.jpg",
    aspect: "aspect-[16/9]",
  },
];

export default function SelectedWork() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="work"
      className="relative w-full py-[120px] bg-[#0a0a0f]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[12px] uppercase tracking-[0.2em] text-[#ff6600] block mb-4">
            SELECTED WORK
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(36px,5vw,48px)] font-semibold text-[#f0f0f5] tracking-[-0.02em]">
            Projects
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} isVisible={isVisible} />
            ))}
          </div>
          <div className="flex flex-col gap-8">
            <ProjectCard project={projects[2]} index={2} isVisible={isVisible} tall />
            <ProjectCard project={projects[3]} index={3} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isVisible,
  tall = false,
}: {
  project: (typeof projects)[0];
  index: number;
  isVisible: boolean;
  tall?: boolean;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.9)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 * index}s`,
      }}
    >
      <div className={`relative ${tall ? "aspect-[3/4]" : project.aspect} overflow-hidden`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500"
          style={{
            background: "linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)",
          }}
        >
          <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="font-[family-name:var(--font-space-grotesk)] text-[12px] uppercase tracking-[0.15em] text-[#ff6600] block mb-2">
              {project.category}
            </span>
            <h3 className="font-[family-name:var(--font-playfair)] text-[24px] font-semibold text-[#f0f0f5]">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
