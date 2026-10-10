"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Link
              href="/"
              className="inline-flex font-mono text-sm font-semibold tracking-[0.12em] text-text-primary transition-colors hover:text-accent"
            >
              GAEL<span className="text-accent">.</span>GUZMAN
            </Link>
            <p className="max-w-md text-xs leading-5 text-text-muted">
              Construir é resolver. Software, sistemas e problemas reais.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-text-secondary">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 border border-border px-3 py-2 text-text-secondary transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-label="Voltar ao topo"
            >
              Voltar ao topo <ArrowUp size={13} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-4 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {profileData.name}</span>
          <span>Construído com Next.js, Tailwind CSS & Motion</span>
        </div>
      </div>
    </footer>
  );
}
