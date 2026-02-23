import type { Project } from "@/data/projects";

export default function ProjectCard({ title, description, tech, link, github }: Project) {
  return (
    <div className="py-5">
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded"
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
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                Live
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
