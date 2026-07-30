import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Navbar />
      <Hero />
      <ProjectsGrid />
    </main>
  );
}
