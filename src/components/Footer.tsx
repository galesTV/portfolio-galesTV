"use client";

import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950 py-12 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-mono text-sm font-semibold text-zinc-200">
            {profileData.name}
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            © {new Date().getFullYear()} • Construído com Next.js, Tailwind CSS
            & Motion.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
