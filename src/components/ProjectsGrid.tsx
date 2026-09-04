"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ui/SpotlightCard";

export function ProjectsGrid() {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 relative bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="flex flex-col gap-2 mb-12"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest">
            <FolderGit2 size={16} />
            <span>Portfólio</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Projetos em Destaque
          </h2>

          <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
            Aplicações focadas em arquitetura backend, microsserviços e
            integração de banco de dados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, idx) => {
            const isDimmed =
              hoveredTitle !== null && hoveredTitle !== project.title;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: idx * 0.12,
                }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  dimmed={isDimmed}
                  onHoverStart={() => setHoveredTitle(project.title)}
                  onHoverEnd={() => setHoveredTitle(null)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
