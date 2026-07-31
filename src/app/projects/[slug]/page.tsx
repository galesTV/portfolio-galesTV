import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
} from "lucide-react";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetails(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors mb-12 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Voltar para o início
        </Link>

        <div className="border-b border-zinc-800/80 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-blue-400 mb-3">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.period}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
            {project.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.backendRepo && (
              <a
                href={project.backendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/10"
              >
                <span>Repositório Backend</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <span>Repositório Frontend</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors flex items-center gap-2"
              >
                <span>Acessar Aplicação</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {project.imageUrl && (
          <div className="relative w-full h-64 md:h-105 rounded-2xl overflow-hidden border border-zinc-800/80 mb-12 shadow-2xl">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        <div className="space-y-12">
          <section className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
              <Layers size={18} className="text-blue-400" />
              Visão Geral do Sistema
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              {project.fullDescription}
            </p>
          </section>

          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-400" />
                Principais Funcionalidades
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/50 text-sm text-zinc-300 flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-blue-400" />
                Arquitetura e Destaques Técnicos
              </h2>
              <ul className="space-y-3">
                {project.architecture.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-zinc-400 bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-4 font-mono"
                  >
                    ⚡ {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
