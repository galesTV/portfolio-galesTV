"use client";

import { motion } from "motion/react";
import { ExternalLink, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[120px_1fr]">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            <span className="text-accent">07</span>
            <span className="ml-3">Formação</span>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl text-4xl font-medium tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Algumas formações que complementam o que construo.
            </motion.h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
              Cursos não substituem experiência prática, mas ajudam a ampliar
              repertório e aprofundar assuntos que aparecem em projetos,
              estudos e diferentes áreas de interesse.
            </p>

            <div className="mt-16 border-t border-border">
              {profileData.courses.map((course, index) => (
                <motion.article
                  key={course.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="grid grid-cols-1 gap-5 border-b border-border py-8 lg:grid-cols-[150px_1fr_220px]"
                >
                  <div className="font-mono text-xs uppercase tracking-[0.12em] text-text-muted">
                    {course.date}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-text-primary">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {course.institution}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-start gap-x-4 gap-y-2 lg:justify-end">
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent">
                      {course.hours}
                    </span>

                    {course.credentialFile && (
                      <a
                        href={course.credentialFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-text-primary"
                      >
                        <FileText size={13} />
                        Arquivo
                      </a>
                    )}

                    {course.credentialUrl && (
                      <a
                        href={course.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-text-primary"
                      >
                        <ExternalLink size={13} />
                        Credencial
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            <p className="mt-10 max-w-2xl text-xs leading-6 text-text-muted">
              As certificações aqui representam formação complementar; os
              projetos e experiências anteriores mostram como esse
              conhecimento é aplicado na prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
