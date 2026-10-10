import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const repositoryUrl = project.frontendRepo ?? project.backendRepo;

  return (
    <article className="group border-b border-border py-8 first:border-t md:py-10">
      <div className="grid gap-6 md:grid-cols-[64px_minmax(0,1fr)_220px] md:gap-8">
        <div className="font-mono text-xs text-text-muted">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
            {project.contextLabel ?? project.role}
            <span className="mx-2 text-border">/</span>
            {project.period}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-3 inline-flex max-w-full items-start gap-3"
          >
            <h3 className="text-2xl font-medium tracking-tight text-text-primary transition-colors duration-200 group-hover:text-accent md:text-3xl">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="mt-2 shrink-0 text-text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            />
          </Link>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary md:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-secondary">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Projeto ao vivo <ArrowUpRight size={12} />
              </a>
            )}
            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Repositório <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-5 md:pt-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
            Minha contribuição
          </p>
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {project.contribution ?? project.role}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} />
          Voltar para a Home
        </Link>

        <header className="border-b border-border pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="grid gap-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-16">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              <span className="text-accent">03</span>
              <span className="ml-3">Selected Work</span>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
                Arquivo de projetos / {String(projects.length).padStart(2, "0")} registros
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-medium tracking-[-0.045em] text-text-primary md:text-7xl">
                Projetos que mostram como penso e construo.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
                De sistemas de backend a experiências web e mobile: problemas,
                decisões técnicas e aprendizados de projetos que construí
                individualmente ou em equipe.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 border-t border-border pt-5 sm:max-w-md">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                Projetos
              </p>
              <p className="mt-2 text-2xl text-text-primary">{String(projects.length).padStart(2, "0")}</p>
            </div>
            <div className="border-l border-border pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted">
                Em destaque
              </p>
              <p className="mt-2 text-2xl text-text-primary">{String(featuredProjects.length).padStart(2, "0")}</p>
            </div>
          </div>
        </header>

        <section className="grid gap-8 border-b border-border py-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-16 md:py-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              <span className="text-accent">01</span>
              <span className="ml-3">Seleção</span>
            </p>
            <p className="mt-4 max-w-[14rem] text-sm leading-6 text-text-secondary">
              Os projetos que melhor representam minha forma de resolver problemas.
            </p>
          </div>
          <div>
            {featuredProjects.map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-12 md:grid-cols-[180px_minmax(0,1fr)] md:gap-16 md:py-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              <span className="text-accent">02</span>
              <span className="ml-3">Outros projetos</span>
            </p>
            <p className="mt-4 max-w-[14rem] text-sm leading-6 text-text-secondary">
              Experimentos, projetos acadêmicos e trabalhos que também fizeram parte do caminho.
            </p>
          </div>
          <div>
            {otherProjects.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={featuredProjects.length + index}
              />
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-5 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-text-secondary">
            Quer entender as decisões por trás de um projeto? Abra um estudo de caso para ver o contexto, os desafios e a implementação.
          </p>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-text-primary transition-colors hover:text-accent"
          >
            Entrar em contato <ArrowUpRight size={14} />
          </Link>
        </footer>
      </div>
    </main>
  );
}
