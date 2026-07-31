"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";

function SpotlightCard({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  project: (typeof projects)[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (idx: number | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isAnyHovered = hoveredIndex !== null;
  const isThisHovered = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`transition-all duration-500 ease-out ${
        isAnyHovered && !isThisHovered
          ? "opacity-35 blur-[1px] scale-[0.98]"
          : "opacity-100 scale-100"
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setIsHovered(true);
          setHoveredIndex(index);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredIndex(null);
        }}
        className="relative rounded-xl p-px overflow-hidden group bg-zinc-800/60 hover:bg-zinc-700/80 transition-colors"
      >
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`,
          }}
        />

        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(96, 165, 250, 0.6), transparent 40%)`,
          }}
        />

        <Link
          href={`/projects/${project.slug}`}
          className="relative z-20 flex flex-col h-full rounded-[11px] bg-zinc-950/90 group-hover:bg-zinc-900/90 transition-colors overflow-hidden"
        >
          {project.imageUrl && (
            <div className="relative w-full h-44 bg-zinc-950 border-b border-zinc-800/60 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 to-transparent opacity-60" />
            </div>
          )}

          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <FolderGit2 className="text-blue-400" size={24} />
              <ArrowUpRight
                className="text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                size={20}
              />
            </div>

            <h4 className="text-xl font-bold text-zinc-100 group-hover:text-blue-300 transition-colors mb-2">
              {project.title}
            </h4>

            <p className="text-sm text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 group-hover:border-blue-500/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
              Portfólio
            </h2>
            <h3 className="text-3xl font-bold text-zinc-100">
              Projetos em Destaque
            </h3>
          </div>
          <p className="text-zinc-400 text-sm max-w-sm mt-2 md:mt-0">
            Passe o cursor sobre os cards para visualizar o foco interativo e
            acesse para ver os detalhes técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SpotlightCard
              key={project.slug}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
