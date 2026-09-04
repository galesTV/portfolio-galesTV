"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";

const TILT_MAX = 16;
const TILT_SPRING = { stiffness: 260, damping: 22 } as const;
const GLOW_SPRING = { stiffness: 180, damping: 22 } as const;

interface CardProps {
  project: Project;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export function ProjectCard({
  project,
  dimmed,
  onHoverStart,
  onHoverEnd,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const accentColor = project.color || "#3b82f6";

  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);

  const rawRotateX = useTransform(normY, [0, 1], [TILT_MAX, -TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-TILT_MAX, TILT_MAX]);

  const rotateX = useSpring(rawRotateX, TILT_SPRING);
  const rotateY = useSpring(rawRotateY, TILT_SPRING);
  const glowOpacity = useSpring(0, GLOW_SPRING);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    normX.set((e.clientX - rect.left) / rect.width);
    normY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    normX.set(0.5);
    normY.set(0.5);
    glowOpacity.set(0);
    onHoverEnd();
  };

  const repoUrl = project.backendRepo || project.frontendRepo;
  const demoUrl = project.liveUrl;

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      animate={{
        scale: dimmed ? 0.97 : 1,
        opacity: dimmed ? 0.45 : 1,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className={cn(
        "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        "border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-700/80",
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Ver detalhes de ${project.title}`}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, ${accentColor}12, transparent 70%)`,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          opacity: glowOpacity,
          background: `radial-gradient(ellipse at 20% 20%, ${accentColor}28, transparent 65%)`,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] -translate-x-full -skew-x-12 bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[320%]"
      />

      <div className="relative pointer-events-none z-0 flex flex-col gap-4">
        {project.imageUrl && (
          <div className="relative h-44 w-full overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-950/60">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-zinc-100 tracking-tight group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </div>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-20 mt-6 flex items-center justify-between border-t border-zinc-800/60 pt-4">
        <div className="flex items-center gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Código</span>
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ExternalLink size={15} />
              <span>Demo</span>
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors"
        >
          Detalhes →
        </Link>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(to right, ${accentColor}a0, transparent)`,
        }}
      />
    </motion.div>
  );
}

export function ProjectSpotlightCards({ projects }: { projects: Project[] }) {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          dimmed={hoveredTitle !== null && hoveredTitle !== project.title}
          onHoverStart={() => setHoveredTitle(project.title)}
          onHoverEnd={() => setHoveredTitle(null)}
        />
      ))}
    </div>
  );
}
