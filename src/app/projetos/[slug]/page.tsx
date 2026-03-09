import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto n\u00e3o encontrado | Arthur Pires",
    };
  }

  return {
    title: `${project.title} | Arthur Pires`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-16 sm:py-20">
      <div className="space-y-8">
        <nav aria-label="Breadcrumb" className="text-sm text-[color:var(--color-text)]/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[color:var(--color-text-strong)]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link
                href="/#projetos"
                className="hover:text-[color:var(--color-text-strong)]"
              >
                Projetos
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li
              aria-current="page"
              className="text-[color:var(--color-text-strong)]"
            >
              {project.title}
            </li>
          </ol>
        </nav>

        <div className="flex flex-wrap gap-4">
          <Link href="/" className="secondary-button inline-flex">
            Voltar
          </Link>
        </div>

        <header className="space-y-5">
          <span className="inline-flex rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-primary)]/20 px-4 py-1 text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
            Projeto
          </span>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[color:var(--color-text-strong)] sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[color:var(--color-text)]/82">
              {project.subtitle}
            </p>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="panel-card space-y-6">
            <div>
              <h2 className="text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
                README Intro
              </h2>
              <p className="mt-4 text-lg leading-9 text-[color:var(--color-text)]/86 sm:text-xl">
                {project.readmeIntro}
              </p>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
                Destaques
              </h2>
              <ul className="mt-4 space-y-3 text-base leading-7 text-[color:var(--color-text)]/82">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="panel-card space-y-6">
            <div>
              <h2 className="text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
                Links
              </h2>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button justify-center"
                >
                  Abrir reposit&oacute;rio no GitHub
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
                Tags
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.tags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-primary)]/18 px-4 py-2 text-sm text-[color:var(--color-accent-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
                Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[color:var(--color-text)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
