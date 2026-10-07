import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Trajectory } from "@/components/Trajectory";
import { Certifications } from "@/components/Certifications";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-text-primary">
      <Navbar />
      <Hero />
      <About />
      <ProjectsGrid />
      <Trajectory />
      <Certifications />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
