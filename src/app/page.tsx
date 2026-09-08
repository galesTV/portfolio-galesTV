import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <ProjectsGrid />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
