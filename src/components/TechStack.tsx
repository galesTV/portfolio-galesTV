"use client";

import { motion } from "motion/react";
import {
  Boxes,
  Code2,
  Layout,
  Server,
  Database,
  Layers,
  Wrench,
} from "lucide-react";
import { profileData } from "@/data/profile";

export function TechStack() {
  const categories = [
    {
      title: "Linguagens",
      icon: Code2,
      items: profileData.skills.languages,
    },
    {
      title: "Frontend",
      icon: Layout,
      items: profileData.skills.frontend,
    },
    {
      title: "Backend",
      icon: Server,
      items: profileData.skills.backend,
    },
    {
      title: "Banco de Dados & ORM",
      icon: Database,
      items: profileData.skills.databaseAndORM,
    },
    {
      title: "Filas & Serviços",
      icon: Layers,
      items: profileData.skills.queuesAndServices,
    },
    {
      title: "DevOps & Ferramentas",
      icon: Wrench,
      items: profileData.skills.devOpsAndTools,
    },
  ];

  return (
    <section id="techs" className="py-24 border-t border-zinc-800/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            <span className="inline-flex items-center gap-2">
              <Boxes size={16} />
              <span>Ecossistema</span>
            </span>
          </h2>
          <h3 className="text-3xl font-bold text-zinc-100">
            Tecnologias & Ferramentas
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  delay: idx * 0.08,
                }}
                className="group p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-400">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon
                      size={20}
                      className="group-hover:text-blue-300 transition-colors"
                    />
                  </motion.div>
                  <h4 className="font-semibold text-zinc-200 text-sm group-hover:text-white transition-colors">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: idx * 0.05 + itemIdx * 0.03,
                      }}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/40 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/50 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
