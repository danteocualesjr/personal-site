import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-[var(--accent)]">// projects</h1>
      <p className="mt-2 text-[var(--muted)]">Things I&apos;ve built and am working on.</p>

      <div className="mt-8 border border-dashed border-[var(--border)] p-4 divide-y divide-[var(--border)]">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
