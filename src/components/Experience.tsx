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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2"
            >
              <Briefcase size={16} />
              <span>Trajetória Profissional</span>
            </motion.div>
            <h3 className="text-3xl font-bold text-zinc-100 mb-8">
              Experiência
            </h3>

            <div className="space-y-8">
              {profileData.experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: idx * 0.15,
                  }}
                  whileHover={{ x: 6 }}
                  className="group relative pl-6 border-l-2 border-zinc-800 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-zinc-700 group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)]" />

                  <span className="text-xs font-mono text-blue-400/90 group-hover:text-blue-400 font-semibold transition-colors">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-zinc-100 mt-1 group-hover:text-white transition-colors">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-1.5 text-sm text-zinc-400 mt-0.5 mb-3 group-hover:text-zinc-300 transition-colors">
                    <Building2 size={14} className="text-blue-400/70" />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-2"
            >
              <GraduationCap size={16} />
              <span>Educação & Base</span>
            </motion.div>
            <h3 className="text-3xl font-bold text-zinc-100 mb-8">Formação</h3>

            <div className="space-y-6">
              {profileData.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                    delay: idx * 0.1,
                  }}
                  className="group p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
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
