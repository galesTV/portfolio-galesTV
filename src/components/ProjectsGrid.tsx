"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
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
            Clique em um projeto para visualizar a arquitetura completa,
            repositórios e detalhes técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
              >
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
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
