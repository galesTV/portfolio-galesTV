"use client";

import { motion } from "motion/react";
import { Code2, Layout, Server, Database, Layers, Wrench } from "lucide-react";
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
        <div className="mb-12">
          <h2 className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
            Ecossistema
          </h2>
          <h3 className="text-3xl font-bold text-zinc-100">
            Tecnologias & Ferramentas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/20 hover:border-zinc-700/80 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-400">
                  <Icon size={20} />
                  <h4 className="font-semibold text-zinc-200 text-sm">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/40 hover:text-blue-300 hover:border-blue-500/40 transition-colors"
                    >
                      {item}
                    </span>
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
