import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <ProjectsGrid />
      <TechStack />
    </main>
  );
}