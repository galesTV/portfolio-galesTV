"use client";

import { projects } from "@/data/projects";
import { ProjectSpotlightCards } from "./ui/SpotlightCard";

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-2 mb-12">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl">
            Aplicações focadas em arquitetura backend, microsserviços e
            integração de banco de dados.
          </p>
        </div>

        <ProjectSpotlightCards projects={projects} />
      </div>
    </section>
  );
}
