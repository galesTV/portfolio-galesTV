"use client";

import { motion } from "motion/react";
import { profileData } from "@/data/profile";

const groups = [
  {
    label: "Core",
    description:
      "Tecnologias que mais fazem parte da forma como construo software.",
    items: [
      ...profileData.skills.programmingLanguages.slice(0, 2),
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    label: "Backend & APIs",
    description:
      "Ferramentas para APIs, serviços, integrações e processamento.",
    items: [
      ...profileData.skills.backend,
      "Prisma ORM",
      "BullMQ",
      "Firebase / Firestore",
    ],
  },
  {
    label: "Frontend",
    description:
      "Interfaces e aplicações que complementam os sistemas que construo.",
    items: profileData.skills.frontend,
  },
  {
    label: "Dados & Infraestrutura",
    description:
      "Tecnologias que uso para persistência, comunicação e execução.",
    items: profileData.skills.dataAndInfrastructure,
  },
  {
    label: "Outras tecnologias",
    description: "Tecnologias com as quais também tenho experiência.",
    items: profileData.skills.otherTechnologies,
  },
  {
    label: "Ferramentas",
    description: "Ferramentas que fazem parte do meu fluxo de desenvolvimento.",
    items: profileData.skills.tools,
  },
];

export function TechStack() {
  return (
    <section id="techs" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[120px_1fr]">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            <span className="text-accent">06</span>
            <span className="ml-3">Toolbox</span>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl text-4xl font-medium tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              As ferramentas mudam. A forma de pensar permanece.
            </motion.h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
              Não tento acumular tecnologias. Prefiro conhecer bem as
              ferramentas que fazem sentido para o problema e entender quando
              cada uma delas realmente ajuda.
            </p>

            <div className="mt-16 border-t border-border">
              {groups.map((group, index) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="grid grid-cols-1 gap-5 border-b border-border py-8 lg:grid-cols-[220px_1fr]"
                >
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {group.label}
                    </h3>
                    <p className="mt-3 max-w-xs text-xs leading-5 text-text-muted">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap content-start gap-x-5 gap-y-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 border-b border-border pb-10 sm:grid-cols-2">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  Also
                </h3>
                <p className="mt-3 max-w-xs text-xs leading-5 text-text-muted">
                  Competências que também fazem parte do meu perfil.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                    Idiomas
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {profileData.skills.other[0]}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                    Outras competências
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                    {[
                      profileData.skills.other[1],
                      ...profileData.skills.softSkills,
                    ].map((item) => (
                      <span key={item} className="text-sm text-text-secondary">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
