"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="border-t border-border bg-background px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            <span className="text-accent">03</span>
            <span className="ml-3">Selected Work</span>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl font-medium tracking-tight text-text-primary md:text-5xl">
                Alguns projetos que mostram como eu gosto de construir software.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary">
                Projetos diferentes, problemas diferentes — mas sempre com a
                mesma preocupação: entender o que precisa ser resolvido antes
                de decidir como construir.
              </p>
            </motion.div>

            <div className="mt-20 divide-y divide-border border-y border-border">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group py-10 md:py-14"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="grid gap-8 md:grid-cols-[72px_minmax(0,1fr)_220px] md:items-start"
                  >
                    <div className="font-mono text-xs text-text-muted">
                      <span className="text-accent">0{index + 1}</span>
                    </div>

                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                        {project.contextLabel}
                      </div>
                      <h3 className="mt-3 text-3xl font-medium tracking-tight text-text-primary transition-colors duration-200 group-hover:text-accent md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary md:text-base">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                        {project.tags.slice(0, 6).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4 border-t border-border pt-4 md:block md:border-t-0 md:border-l md:pl-6 md:pt-0">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
                          Contribution
                        </div>
                        <p className="mt-2 text-sm leading-5 text-text-secondary">
                          {project.contribution}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:mt-8"
                      />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-text-secondary transition-colors hover:text-accent"
              >
                Ver todos os projetos
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
