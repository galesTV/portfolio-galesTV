"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

const APPROACH = [
  {
    number: "01",
    title: "Sistemas que precisam conversar",
    text: "APIs, integrações e serviços que trocam informação sem transformar o código em um emaranhado de dependências.",
  },
  {
    number: "02",
    title: "Sistemas sob pressão",
    text: "Filas, concorrência e processamento assíncrono quando o problema deixa de ser apenas fazer funcionar e passa a ser fazer funcionar direito.",
  },
  {
    number: "03",
    title: "Sistemas que precisam permanecer simples",
    text: "Arquitetura, legibilidade e decisões proporcionais ao problema para que o software continue compreensível depois de crescer.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[220px_1fr]">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            <span className="text-accent">02</span>
            <span className="ml-3">Contexto</span>
          </div>

          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-6xl">
                Eu gosto de entender o problema antes de escolher a tecnologia.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-text-secondary md:text-lg">
                {profileData.about}
              </p>
            </motion.div>

            <div className="mt-16 grid border-t border-border md:grid-cols-3">
              {APPROACH.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="border-b border-border py-8 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="font-mono text-xs text-accent">{item.number}</span>
                  <h3 className="mt-6 max-w-xs text-xl font-medium tracking-[-0.02em] text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-text-secondary">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted"
            >
              <span>Backend</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>NestJS</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <a href="#projects" className="group ml-auto inline-flex items-center gap-2 text-text-secondary transition-colors hover:text-accent">
                Ver projetos
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
