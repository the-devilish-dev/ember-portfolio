"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  trail: { x: number; y: number }[];
}

const COLORS = ["#ff1a1a", "#ff3366", "#ff6600", "#ffaa00", "#ff4444"];
const PARTICLE_COUNT_DESKTOP = 400;
const PARTICLE_COUNT_MOBILE = 150;
const BASE_SPEED = 0.5;
const NOISE_SCALE = 0.003;
const TIME_SCALE = 0.0003;
const REPULSION_RADIUS = 150;
const REPULSION_STRENGTH = 3.0;
const TRAIL_LENGTH = 5;

export default function EmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const timeRef = useRef(0);
  const rafRef = useRef<number>(0);
  const noiseRef = useRef(createNoise3D());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();

    const initParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5 - 0.3,
          size: 1.5 + Math.random() * 2.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: 0.3 + Math.random() * 0.7,
          life: Math.random(),
          maxLife: 1,
          trail: [],
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    const animate = () => {
      timeRef.current += 1;
      const time = timeRef.current;
      const noise = noiseRef.current;
      const mouse = mouseRef.current;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.fillStyle = "rgba(5, 5, 8, 0.15)";
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const angle = noise(p.x * NOISE_SCALE, p.y * NOISE_SCALE, time * TIME_SCALE) * Math.PI * 2;
        const windX = Math.cos(angle);
        const windY = Math.sin(angle);

        p.vx += windX * BASE_SPEED * 0.1;
        p.vy += windY * BASE_SPEED * 0.1;
        p.vy -= 0.3;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPULSION_RADIUS && dist > 0) {
          const force = ((REPULSION_RADIUS - dist) / REPULSION_RADIUS) * REPULSION_STRENGTH;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > TRAIL_LENGTH) {
          p.trail.shift();
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.trail = [];
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        p.life += 0.002;
        if (p.life > 1) p.life = 0;

        let displayAlpha = p.alpha;
        if (p.life < 0.1) displayAlpha = p.alpha * (p.life / 0.1);
        else if (p.life > 0.8) displayAlpha = p.alpha * ((1 - p.life) / 0.2);

        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let j = 1; j < p.trail.length; j++) {
            ctx.lineTo(p.trail[j].x, p.trail[j].y);
          }
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = displayAlpha * 0.3;
          ctx.lineWidth = p.size * 0.5;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = displayAlpha;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = displayAlpha * 0.15;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
}
