"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { User, Code, GraduationCap } from "lucide-react";
import { profileData } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-zinc-800/40 bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80 cursor-pointer">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 blur-lg opacity-30 group-hover:opacity-80 transition duration-500 group-hover:blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt={profileData.name}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 16,
              delay: 0.5,
            }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest">
              <User size={16} />
              <span>Sobre Mim</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-zinc-100">
              Transformando lógica em sistemas escaláveis
            </h3>

            <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
              {profileData.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-blue-500/50 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <Code
                    size={18}
                    className="group-hover:rotate-12 transition-transform duration-300"
                  />
                  <span className="text-sm">Foco Atual</span>
                </div>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Arquitetura de microsserviços, NestJS, TypeScript e otimização
                  de queries SQL.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-blue-500/50 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <GraduationCap
                    size={18}
                    className="group-hover:-rotate-12 transition-transform duration-300"
                  />
                  <span className="text-sm">Formação Ativa</span>
                </div>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Desenvolvimento de Software Multiplataforma na Fatec Itaquera.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
