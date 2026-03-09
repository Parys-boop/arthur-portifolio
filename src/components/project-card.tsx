import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="group block h-full rounded-[1.75rem] focus-visible:rounded-[1.75rem]"
    >
      <article className="project-card panel-card h-full rounded-[1.75rem] border border-white/10 transition duration-300">
        <div className="flex h-full flex-col justify-between gap-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-[color:var(--color-accent-soft)]/88">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <p className="text-base leading-7 text-[color:var(--color-text)]/78">
              {project.cardDescription}
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="stack-pill"
                >
                  {item}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center text-sm font-medium text-[color:var(--color-accent-soft)] transition-transform duration-200 group-hover:translate-x-1">
              Ver detalhes
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
