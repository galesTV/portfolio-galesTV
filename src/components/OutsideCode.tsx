"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";

const games = ["Valorant","Football Manager 2024","Dark Souls","Resident Evil","Darkest Dungeon","Puppeteer"];

export function OutsideCode() {
  return (
    <section id="outside-code" className="border-t border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[120px_1fr]">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            <span className="text-accent">08</span><span className="ml-3">Fora do código</span>
          </div>
          <div>
            <motion.h2 initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45}} className="max-w-4xl text-4xl font-medium tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Software é uma parte do que faço. Não é tudo o que me interessa.
            </motion.h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              Futebol, jogos, competição e análise sempre fizeram parte da minha forma de pensar e passar meu tempo. Algumas dessas coisas acabam encontrando o desenvolvimento de software de maneiras inesperadas — mas, principalmente, ajudam a explicar quem existe por trás dos projetos.
            </p>

            <div className="mt-20 border-t border-border">
              <article className="grid grid-cols-1 gap-8 border-b border-border py-12 lg:grid-cols-[180px_1fr]">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted"><span className="text-accent">Futebol</span></div>
                <div className="max-w-3xl">
                  <p className="text-base leading-8 text-text-secondary sm:text-lg">Futebol sempre esteve presente. Além de acompanhar e jogar, tive a oportunidade de estudar análise de desempenho e mercado e colocar isso em prática durante duas semanas de experiência como Analista de Desempenho no Flamengo de Guarulhos.</p>
                  <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">Foi uma experiência diferente do desenvolvimento, mas que me colocou novamente diante de algo que gosto: observar um sistema, identificar padrões e transformar informação em decisão.</p>
                  <div className="mt-10 border-t border-border pt-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">Na prática</p>
                    <p className="mt-3 text-lg font-medium text-text-primary">Flamengo de Guarulhos · Sub-15</p>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">Entre os trabalhos realizados, produzi uma análise do confronto entre Flamengo de Guarulhos U15 e Fluminense U15.</p>
                    <a href="https://youtu.be/RxQ8UfoVCQE" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-text-primary transition-colors hover:text-accent">
                      <Play size={13}/> Assistir à análise <ArrowUpRight size={13}/>
                    </a>
                  </div>
                </div>
              </article>

              <article className="grid grid-cols-1 gap-8 border-b border-border py-12 lg:grid-cols-[180px_1fr]">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted"><span className="text-accent">Competir também é construir</span></div>
                <div className="max-w-3xl">
                  <p className="text-base leading-8 text-text-secondary sm:text-lg">Gosto de situações em que existe alguma coisa para resolver e pouco espaço para simplesmente ficar parado.</p>
                  <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">Robocode, hackathons e jogos têm uma coisa em comum para mim: testar uma ideia, perceber que não funcionou, adaptar a estratégia e tentar novamente.</p>
                  <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-text-muted">Robocode · Hackathons · Games</p>
                </div>
              </article>

              <article className="grid grid-cols-1 gap-8 border-b border-border py-12 lg:grid-cols-[180px_1fr]">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted"><span className="text-accent">Jogos</span></div>
                <div className="max-w-3xl">
                  <p className="text-base leading-8 text-text-secondary sm:text-lg">Também passo bastante tempo jogando. Gosto especialmente de jogos que conseguem construir sistemas, desafios e mundos que fazem o jogador aprender enquanto joga.</p>
                  <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
                    {games.map((game) => <span key={game} className="border-b border-border pb-1 text-sm text-text-primary">{game}</span>)}
                  </div>
                  <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
                    <a href="https://steamcommunity.com/profiles/76561198819215372" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-accent">Steam <ArrowUpRight size={12}/></a>
                    <a href="https://discord.com/users/1336100480765530138" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-text-secondary transition-colors hover:text-accent">Discord · galestv._27872 <ArrowUpRight size={12}/></a>
                  </div>
                </div>
              </article>

              <article className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-[180px_1fr]">
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted"><span className="text-accent">Fala Fatec</span></div>
                <div className="max-w-3xl">
                  <p className="text-lg font-medium leading-8 text-text-primary sm:text-xl">Construir com outras pessoas também é uma parte do processo.</p>
                  <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">No hackathon, uma ideia precisa virar alguma coisa em pouco tempo. É uma experiência que gosto justamente por exigir decisão, colaboração e capacidade de adaptação.</p>
                </div>
              </article>
            </div>

            <div className="mt-14 max-w-3xl border-t border-border pt-10">
              <p className="text-xl font-medium leading-9 text-text-primary sm:text-2xl">No fim, as coisas que faço fora do código também acabam influenciando a forma como construo dentro dele.</p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] leading-7 text-text-muted">Observar. Testar. Analisar. Competir.<br/>Errar. Adaptar.<br/>Depois, construir de novo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
