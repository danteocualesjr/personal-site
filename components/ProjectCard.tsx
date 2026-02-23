import type { Project } from "@/data/projects";

export default function ProjectCard({ title, description, tech, link, github }: Project) {
  return (
    <div className="py-5">
      <h3 className="font-medium text-[var(--foreground)]">&gt; {title}</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">{description}</p>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 border border-[var(--border)] text-[var(--accent-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>
        {(link || github) && (
          <div className="flex gap-3 text-sm">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                [live]
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              >
                [src]
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
