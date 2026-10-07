"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-text-secondary"
            >
              <span className="text-accent">01</span>
              <span>Desenvolvedor de Software</span>
              <span className="h-px w-10 bg-border" />
              <span>São Paulo, BR</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="max-w-5xl text-[clamp(3.25rem,9vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-text-primary"
            >
              Construir
              <br />
              <span className="text-text-secondary">é resolver.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[minmax(0,520px)_1fr]"
            >
              <p className="text-base leading-7 text-text-secondary md:text-lg">
                Sou {profileData.name}, desenvolvedor de software com foco em
                backend. Gosto de transformar problemas em sistemas claros,
                confiáveis e que façam sentido por trás da interface.
              </p>

              <div className="flex items-start md:justify-end">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 border-b border-border pb-2 font-mono text-xs uppercase tracking-[0.16em] text-text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  Ver trabalho
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="border-l border-border pl-5 font-mono text-xs text-text-muted"
          >
            <p className="mb-5 uppercase tracking-[0.16em] text-text-secondary">
              O que me interessa
            </p>
            <ul className="space-y-3">
              <li>APIs & integrações</li>
              <li>Filas & concorrência</li>
              <li>Arquitetura & clareza</li>
            </ul>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="absolute bottom-8 left-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted lg:left-10"
        >
          <ArrowDown size={13} />
          <span>Continue</span>
        </motion.div>
      </div>
    </section>
  );
}
