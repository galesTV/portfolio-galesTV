import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetails(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const study = project.caseStudy;

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent">
          <ArrowLeft size={15} /> Voltar para projetos
        </Link>

        <header className="border-b border-border pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
            <div>
              <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                <span>{project.contextLabel ?? "Projeto"}</span>
                <span>{project.period}</span>
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] md:text-7xl">{project.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-text-secondary md:text-xl">{project.tagline}</p>
            </div>
            <div className="border-l border-border pl-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">Meu papel</p>
              <p className="mt-3 text-sm leading-6 text-text-primary">{project.role}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm">
            {project.backendRepo && <a href={project.backendRepo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-text-primary pb-1 transition-colors hover:border-accent hover:text-accent">Backend <ArrowUpRight size={14} /></a>}
            {project.frontendRepo && <a href={project.frontendRepo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-text-primary pb-1 transition-colors hover:border-accent hover:text-accent">Frontend <ArrowUpRight size={14} /></a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-text-primary pb-1 transition-colors hover:border-accent hover:text-accent">Ver projeto <ArrowUpRight size={14} /></a>}
          </div>
        </header>

        {project.gallery?.length ? (
          <section className="border-b border-border py-12 md:py-16">
            <div className="grid gap-6">
              {project.gallery.map((item, idx) => (
                <figure key={idx}>
                  <div className="relative overflow-hidden border border-border bg-surface">
                    <Image src={item.url} alt={item.caption || `${project.title} — imagem ${idx + 1}`} width={1200} height={675} className="h-auto w-full object-cover" priority={idx === 0} />
                  </div>
                  {item.caption && <figcaption className="mt-3 flex gap-3 font-mono text-[11px] leading-5 text-text-muted"><span className="text-accent">0{idx + 1}</span><span>{item.caption}</span></figcaption>}
                </figure>
              ))}
            </div>
          </section>
        ) : project.imageUrl ? (
          <section className="border-b border-border py-12 md:py-16">
            <div className="relative aspect-video overflow-hidden border border-border bg-surface">
              <Image src={project.imageUrl} alt={project.title} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover object-top" priority />
            </div>
          </section>
        ) : null}

        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-[180px_1fr]">
          <aside className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Case study</aside>
          <div className="max-w-3xl space-y-16">
            {study ? (
              <>
                <CaseSection label="Contexto" text={study.context} />
                <CaseSection label="Problema" text={study.problem} />
                <CaseSection label="Meu papel" text={study.role} />
                <CaseList label="Decisões" items={study.decisions} />
                <CaseList label="Desafios" items={study.challenges} />
                <CaseSection label="Solução" text={study.solution} />
                <CaseSection label="Resultado" text={study.result} />
                <CaseList label="Aprendizados" items={study.learnings} />
              </>
            ) : (
              <CaseSection label="Visão geral" text={project.fullDescription} />
            )}

            {project.features.length > 0 && (
              <CaseList label="O que foi construído" items={project.features} />
            )}

            <section>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">Stack</p>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-text-secondary">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

function CaseSection({ label, text }: { label: string; text?: string }) {
  if (!text) return null;
  return (
    <section>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">{label}</p>
      <p className="text-base leading-8 text-text-secondary md:text-lg">{text}</p>
    </section>
  );
}

function CaseList({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">{label}</p>
      <ul className="space-y-4">
        {items.map((item) => <li key={item} className="border-l border-border pl-5 text-sm leading-7 text-text-secondary md:text-base">{item}</li>)}
      </ul>
    </section>
  );
}
