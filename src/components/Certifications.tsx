"use client";

import { motion } from "motion/react";
import { Award, ExternalLink, CheckCircle2, FileText } from "lucide-react";
import { profileData } from "@/data/profile";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 border-t border-zinc-800/40 bg-zinc-950/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest mb-2">
            <Award size={16} />
            <span>Aprendizado Contínuo</span>
          </div>
          <h3 className="text-3xl font-bold text-zinc-100">
            Cursos Complementares & Certificados
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {profileData.courses.map((course, idx) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.015 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 14,
                delay: idx * 0.08,
              }}
              className="group relative flex flex-col justify-between p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/70 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 h-full"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                  <span className="flex items-center gap-1 text-blue-400 font-semibold">
                    <CheckCircle2 size={13} />
                    {course.hours}
                  </span>
                  <span>{course.date}</span>
                </div>

                <h4 className="font-bold text-zinc-100 text-lg group-hover:text-white transition-colors">
                  {course.title}
                </h4>

                <p className="text-sm text-zinc-400 mt-1 mb-4">
                  {course.institution}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-800/50 text-zinc-400 border border-zinc-700/30 group-hover:text-zinc-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-4 text-xs">
                {course.credentialFile && (
                  <a
                    href={course.credentialFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FileText size={14} />
                    <span>Ver Arquivo</span>
                  </a>
                )}

                {course.credentialUrl && (
                  <a
                    href={course.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Ver Credencial</span>
                  </a>
                )}

                {!course.credentialFile && !course.credentialUrl && (
                  <span className="font-mono text-zinc-500">Concluído</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
