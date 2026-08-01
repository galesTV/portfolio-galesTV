/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          className="font-mono text-sm sm:text-base font-semibold tracking-wider text-zinc-100 hover:text-blue-400 transition-colors"
        >
          GAEL<span className="text-blue-500">.</span>GUZMAN
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <Link href="#about" className="hover:text-zinc-100 transition-colors">
            Sobre
          </Link>
          <Link
            href="#experience"
            className="hover:text-zinc-100 transition-colors"
          >
            Experiência
          </Link>
          <Link
            href="#projects"
            className="hover:text-zinc-100 transition-colors"
          >
            Projetos
          </Link>
          <Link href="#techs" className="hover:text-zinc-100 transition-colors">
            Skills
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 text-zinc-400">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition-colors p-1"
            aria-label="GitHub"
          >
            <svg
              width={18}
              height={18}
              className="fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 transition-colors p-1"
            aria-label="LinkedIn"
          >
            <svg
              width={18}
              height={18}
              className="fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href={`mailto:${profileData.links.email}`}
            className="hover:text-zinc-100 transition-colors p-1"
            aria-label="E-mail"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={toggleMenu}
            className="md:hidden text-zinc-300 hover:text-zinc-100 p-1 focus:outline-none"
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-800/80 bg-zinc-950 w-full"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4 font-mono text-sm text-zinc-200">
              <Link
                href="#about"
                onClick={closeMenu}
                className="hover:text-blue-400 py-1 transition-colors block"
              >
                // 01. Sobre
              </Link>
              <Link
                href="#experience"
                onClick={closeMenu}
                className="hover:text-blue-400 py-1 transition-colors block"
              >
                // 02. Experiência
              </Link>
              <Link
                href="#projects"
                onClick={closeMenu}
                className="hover:text-blue-400 py-1 transition-colors block"
              >
                // 03. Projetos
              </Link>
              <Link
                href="#techs"
                onClick={closeMenu}
                className="hover:text-blue-400 py-1 transition-colors block"
              >
                // 04. Skills
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
