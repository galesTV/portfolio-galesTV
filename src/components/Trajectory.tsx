"use client";

import { motion } from "motion/react";

type TrajectoryItem = {
  period: string;
  title: string;
  text: string;
  meta?: string;
  highlights?: string[];
};

const items: TrajectoryItem[] = [
  {
    period: "2023 — 2025",
    title: "ETEC de Guarulhos",
    meta: "Técnico em Desenvolvimento de Sistemas",
    text:
      "Em 2023, comecei o MTEC em Desenvolvimento de Sistemas na ETEC de Guarulhos. Foi onde programação deixou de ser apenas algo que eu experimentava e passou a fazer parte da minha rotina. Entre aulas, projetos e trabalhos em equipe, comecei a entender que desenvolver software também envolve organizar ideias, dividir responsabilidades e encontrar soluções para problemas concretos.",
  },
  {
    period: "2024",
    title: "Robocode",
    meta: "Competição · Estratégia · Ensino",
    text:
      "O Robocode foi uma das primeiras experiências em que programação ganhou uma dimensão diferente para mim: havia um problema, uma estratégia e um resultado que precisava ser conquistado. Além de competir, também tive a oportunidade de atuar como professor de Robocode na ETEC de Guarulhos. Construir estratégias, testar comportamentos e explicar lógica para outras pessoas reforçou algo que continuo levando para o desenvolvimento: entender o problema antes de tentar resolver.",
    highlights: [
      "2× 1º lugar na seleção interna da ETEC",
      "5º lugar na competição do Centro Paula Souza · 2024",
    ],
  },
  {
    period: "2025",
    title: "Análise de desempenho no futebol",
    meta: "Formação · Experiência prática",
    text:
      "Paralelamente ao desenvolvimento, aprofundei meu interesse por análise de desempenho e mercado no futebol. Fiz uma formação na área e, depois, tive duas semanas de experiência prática como Analista de Desempenho no Flamengo de Guarulhos. Foi uma experiência fora do desenvolvimento de software, mas que reforçou algo que também encontro na programação: observar informações, identificar padrões e transformar análise em decisão.",
  },
  {
    period: "2025 — 2026",
    title: "Primeira experiência profissional",
    meta: "Programador PHP · Arts System's",
    text:
      "Minha primeira experiência profissional me colocou em contato com sistemas existentes e problemas que já precisavam ser resolvidos. Trabalhei com PHP e Laravel, refatorando código legado, otimizando consultas, corrigindo bugs e contribuindo para novas funcionalidades. Foi uma etapa importante para entender que software também é manutenção, contexto e responsabilidade sobre aquilo que já existe.",
  },
  {
    period: "2026",
    title: "Fatec Itaquera",
    meta: "Desenvolvimento de Software Multiplataforma · Em andamento",
    text:
      "Em 2026, comecei uma nova etapa acadêmica na Fatec Itaquera. Ao mesmo tempo em que continuo estudando, passei a dedicar mais espaço a projetos próprios e a problemas de backend, arquitetura e integração.",
  },
  {
    period: "2026",
    title: "Projetos próprios",
    meta: "Backend · Sistemas · Autonomia",
    text:
      "Com o tempo, comecei a criar projetos não apenas para aprender uma tecnologia, mas para resolver problemas que eu realmente queria explorar. Projetos como o Orquestra me levaram a pensar em concorrência, filas, processamento assíncrono e consistência — problemas que exigem mais do que simplesmente fazer uma funcionalidade funcionar.",
    highlights: ["Orquestra Queue System · Solo project · Backend / Systems"],
  },
  {
    period: "2026",
    title: "Fala Fatec",
    meta: "Hackathon · Trabalho em equipe",
    text:
      "No Fala Fatec, tive uma experiência diferente: em vez de construir o sistema sozinho, precisei fazer parte de uma equipe com responsabilidades bem definidas e diferentes partes do produto acontecendo ao mesmo tempo. Como responsável pelo Back-end Web e API Core, trabalhei na construção da API com FastAPI e na integração entre os componentes do projeto. O hackathon me mostrou que, em sistemas reais, uma boa solução também depende de contratos claros, comunicação e capacidade de integrar o trabalho de diferentes pessoas.",
    highlights: ["Back-end Web / API Core · FastAPI"],
  },
];

export function Trajectory() {
  return (
    <section id="trajectory" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[120px_1fr]">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            <span className="text-accent">04</span>
            <span className="ml-3">Trajetória</span>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl text-4xl font-medium tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Minha trajetória foi menos sobre escolher uma tecnologia e mais
              sobre aprender a resolver problemas.
            </motion.h2>

            <div className="mt-20 border-t border-border">
              {items.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.03 }}
                  className="grid grid-cols-1 gap-6 border-b border-border py-10 lg:grid-cols-[150px_250px_1fr]"
                >
                  <div className="font-mono text-xs tracking-[0.12em] text-text-muted">
                    {item.period}
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-text-primary">
                      {item.title}
                    </h3>
                    {item.meta && (
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                        {item.meta}
                      </p>
                    )}
                  </div>

                  <div className="max-w-2xl">
                    <p className="text-sm leading-7 text-text-secondary sm:text-base">
                      {item.text}
                    </p>

                    {item.highlights && (
                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-b border-border pb-10 sm:grid-cols-2">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                <span className="text-accent">Próximos capítulos</span>
              </div>
              <p className="max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
                A trajetória continua. Em outubro e novembro, novos hackathons
                e mais uma competição de Robocode já estão no horizonte.
              </p>
            </div>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-text-primary">
              Hoje, meu interesse está principalmente em backend e sistemas —
              especialmente quando existe algum problema de arquitetura,
              integração, concorrência ou fluxo de dados para resolver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
