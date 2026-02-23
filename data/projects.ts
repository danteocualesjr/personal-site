export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Personal Website",
    description: "This site! Built with Next.js, Tailwind CSS, and Markdown for blogging.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/danteocualesjr/personal-site",
  },
  {
    title: "Project Two",
    description: "A placeholder for your next project. Replace this with something real!",
    tech: ["React", "Node.js"],
  },
];
