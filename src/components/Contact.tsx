"use client";

import { motion } from "motion/react";
import { Mail, FileText, Send } from "lucide-react";
import { profileData } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-zinc-800/40 bg-zinc-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            <Send size={14} className="animate-pulse" />
            <span>Vamos Conversar?</span>
          </motion.div>

          <h3 className="text-3xl sm:text-4xl font-bold text-zinc-100">
            Entre em Contato
          </h3>

          <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
            Estou sempre aberto a novas oportunidades, colaborações em projetos
            e conexões no mercado de tecnologia. Sinta-se à vontade para mandar
            uma mensagem!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${profileData.links.email}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              <Mail size={18} />
              <span>Enviar E-mail</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/50"
            >
              <FileText size={18} />
              <span>Visualizar Currículo (PDF)</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            <motion.a
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-blue-500/50 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-blue-500/5 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  width={20}
                  height={20}
                  className="text-zinc-400 group-hover:text-blue-400 fill-current transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="font-semibold text-zinc-200 text-sm group-hover:text-white transition-colors">
                  GitHub
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                /galesTV{" "}
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </span>
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 hover:border-blue-500/50 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-blue-500/5 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <svg
                  width={20}
                  height={20}
                  className="text-zinc-400 group-hover:text-blue-400 fill-current transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-semibold text-zinc-200 text-sm group-hover:text-white transition-colors">
                  LinkedIn
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-500 group-hover:text-blue-400 transition-colors flex items-center gap-1">
                in/gael-guzmannn{" "}
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
