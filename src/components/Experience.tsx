"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";
import { profileData } from "@/data/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 border-t border-zinc-800/40 bg-zinc-950/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Briefcase size={16} />
              <span>Trajetória Profissional</span>
            </div>
            <h3 className="text-3xl font-bold text-zinc-100 mb-8">
              Experiência
            </h3>

            <div className="space-y-8">
              {profileData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-6 border-l-2 border-blue-500/40 hover:border-blue-500 transition-colors"
                >
                  <span className="text-xs font-mono text-blue-400">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-zinc-100 mt-1">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-1.5 text-sm text-zinc-400 mt-0.5 mb-3">
                    <Building2 size={14} />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">
              <GraduationCap size={16} />
              <span>Educação & Base</span>
            </div>
            <h3 className="text-3xl font-bold text-zinc-100 mb-8">Formação</h3>

            <div className="space-y-6">
              {profileData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="group p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/70 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-2">
                    <span className="text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                      {edu.status}
                    </span>
                    <span className="group-hover:text-zinc-400 transition-colors">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">
                    {edu.course}
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1 group-hover:text-zinc-300 transition-colors">
                    {edu.institution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
