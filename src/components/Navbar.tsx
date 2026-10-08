"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Mail, Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";

const NAV_ITEMS = [
  { href: "#projects", label: "Trabalho", id: "projects" },
  { href: "#about", label: "Sobre", id: "about" },
  { href: "#trajectory", label: "Trajetória", id: "trajectory" },
  { href: "#outside-code", label: "Fora do código", id: "outside-code" },
  { href: "#contact", label: "Contato", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="font-mono text-sm font-semibold tracking-[0.12em] text-text-primary transition-colors hover:text-accent"
        >
          GAEL<span className="text-accent">.</span>GUZMAN
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const linkClass =
              "relative py-2 text-xs uppercase tracking-[0.12em] transition-colors " +
              (isActive
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary");

            return (
              <Link key={item.id} href={item.href} className={linkClass}>
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeSectionIndicator"
                    className="absolute -bottom-px left-0 right-0 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 text-text-secondary">
          <a
            href={profileData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden p-1 transition-colors hover:text-text-primary sm:block"
            aria-label="GitHub"
          >
            <svg width={17} height={17} className="fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden p-1 transition-colors hover:text-text-primary sm:block"
            aria-label="LinkedIn"
          >
            <svg width={17} height={17} className="fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762-2.239 5-5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href={"mailto:" + profileData.links.email}
            className="p-1 transition-colors hover:text-text-primary"
            aria-label="E-mail"
          >
            <Mail size={17} />
          </a>

          <a
            href="/Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden p-1 transition-colors hover:text-text-primary sm:block"
            aria-label="Currículo"
          >
            <FileText size={17} />
          </a>

          <button
            onClick={toggleMenu}
            className="p-1 text-text-secondary transition-colors hover:text-text-primary md:hidden"
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="w-full border-t border-border bg-background md:hidden"
          >
            <nav className="flex flex-col px-6 py-5 font-mono text-xs uppercase tracking-[0.14em]">
              {NAV_ITEMS.map((item, index) => {
                const mobileClass =
                  "border-b border-border/60 py-4 transition-colors last:border-b-0 " +
                  (activeSection === item.id
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary");

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className={mobileClass}
                  >
                    <span className="mr-4 text-text-muted">0{index + 1}</span>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
