"use client";

import { useEffect, useRef } from "react";

interface MouseEffectBackgroundProps {
  dotSize?: number;
  dotSpacing?: number;
  repulsionRadius?: number;
  repulsionStrength?: number;
}

export function MouseEffectBackground({
  dotSize = 2,
  dotSpacing = 28,
  repulsionRadius = 140,
  repulsionStrength = 35,
}: MouseEffectBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initDots();
    };

    window.addEventListener("resize", handleResize);

    interface Dot {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      targetOpacity: number;
      phase: number;
    }

    let dots: Dot[] = [];

    const initDots = () => {
      dots = [];
      const cols = Math.ceil(width / dotSpacing);
      const rows = Math.ceil(height / dotSpacing);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const baseX = c * dotSpacing;
          const baseY = r * dotSpacing;
          dots.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            vx: 0,
            vy: 0,
            opacity: 0.2 + Math.random() * 0.2,
            targetOpacity: 0.2 + Math.random() * 0.2,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    initDots();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        const dx = dot.baseX - mouse.x;
        const dy = dot.baseY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let targetX = dot.baseX;
        let targetY = dot.baseY;
        let opacityBoost = 0;

        if (dist < repulsionRadius && dist > 0) {
          const force = (1 - dist / repulsionRadius) * repulsionStrength;
          const angle = Math.atan2(dy, dx);
          targetX = dot.baseX + Math.cos(angle) * force;
          targetY = dot.baseY + Math.sin(angle) * force;
          opacityBoost = (1 - dist / repulsionRadius) * 0.6;
        }

        dot.vx += (targetX - dot.x) * 0.1;
        dot.vy += (targetY - dot.y) * 0.1;
        dot.vx *= 0.8;
        dot.vy *= 0.8;
        dot.x += dot.vx;
        dot.y += dot.vy;

        const pulse = Math.sin(time + dot.phase) * 0.1;
        const currentOpacity = Math.min(
          1,
          Math.max(0.1, dot.opacity + pulse + opacityBoost),
        );

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${currentOpacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize, dotSpacing, repulsionRadius, repulsionStrength]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-radial from-transparent via-zinc-950/40 to-zinc-950 pointer-events-none" />
    </div>
  );
}
