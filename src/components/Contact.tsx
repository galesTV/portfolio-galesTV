"use client";

import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, FileText, Mail } from "lucide-react";
import { profileData } from "@/data/profile";

const socialLinks = [
  {
    label: "GitHub",
    detail: "Projetos e código",
    href: profileData.links.github,
  },
  {
    label: "LinkedIn",
    detail: "Experiência e trajetória",
    href: profileData.links.linkedin,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-16">
          <div className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            <span className="text-accent">09</span>
            <span className="ml-3">Contato</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                  Uma boa conversa pode ser o começo
                </p>
                <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-text-primary sm:text-5xl md:text-6xl">
                  Tem um problema interessante para resolver?
                  <span className="text-accent"> Vamos conversar.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                  Estou aberto a oportunidades, colaborações e conversas sobre
                  software. Se você tem uma ideia, um desafio técnico ou quer
                  trocar experiências, pode me chamar.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profileData.links.email}`}
                    className="group inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail size={16} />
                      Enviar um e-mail
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="/Curriculo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-between gap-6 border border-border px-5 py-3 text-sm text-text-primary transition-colors hover:border-text-muted hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FileText size={16} />
                      Currículo (PDF)
                    </span>
                    <ArrowUpRight size={15} className="text-text-muted" />
                  </a>
                </div>
              </div>

              <aside className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                  Encontre-me também em
                </p>

                <div className="mt-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 border-b border-border py-4 first:border-t focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <span>
                        <span className="block text-sm text-text-primary transition-colors group-hover:text-accent">
                          {link.label}
                        </span>
                        <span className="mt-1 block text-xs text-text-muted">
                          {link.detail}
                        </span>
                      </span>
                      <span className="font-mono text-xs text-text-muted">
                        0{index + 1}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                    E-mail direto
                  </p>
                  <a
                    href={`mailto:${profileData.links.email}`}
                    className="mt-2 inline-flex max-w-full items-center gap-2 break-all text-sm text-text-secondary underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {profileData.links.email}
                    <ArrowUpRight size={13} className="shrink-0" />
                  </a>
                </div>
              </aside>
            </div>

            <div className="mt-16 flex items-center gap-3 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              <ArrowDownRight size={14} className="text-accent" />
              <span>Próximo passo: uma conversa</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
