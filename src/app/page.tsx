import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/data/projects";

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Acessibilidade",
  "Design Systems",
  "APIs REST",
];

export default function Home() {
  return (
    <div className="pb-20 sm:pb-24">
      <section className="hero-surface hero-grid relative overflow-hidden border-b border-white/10">
        <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12 md:py-24 lg:gap-18 lg:py-28">
          <div className="min-w-0 space-y-8 sm:space-y-10">
            <span className="eyebrow-badge">
              Portf&oacute;lio profissional
            </span>
            <div className="space-y-5 sm:space-y-6">
              <h1 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-text-strong)] sm:text-5xl md:text-6xl lg:text-7xl">
                Arthur Pires desenvolve sistemas para produtos digitais.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--color-text)]/82 sm:text-xl sm:leading-9">
                Projetos com foco em identidade visual, componentiza&ccedil;&atilde;o,
                acessibilidade e desenvolvimento preparado para evoluir em cada etapa
                do sistema.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="#projetos" className="primary-button sm:min-w-44">
                Explorar projetos
              </Link>
              <Link href="#contato" className="secondary-button sm:min-w-44">
                Falar no LinkedIn
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="stat-tile">
                <p className="text-3xl font-semibold text-[color:var(--color-text-strong)]">
                  4
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-text)]/75">
                  projetos publicados com leitura clara e navega&ccedil;&atilde;o dedicada
                </p>
              </div>
              <div className="stat-tile">
                <p className="text-3xl font-semibold text-[color:var(--color-text-strong)]">
                  100%
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-text)]/75">
                  aten&ccedil;&atilde;o a contraste, foco vis&iacute;vel e responsividade
                </p>
              </div>
              <div className="stat-tile">
                <p className="text-3xl font-semibold text-[color:var(--color-text-strong)]">
                  UI
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-text)]/75">
                  implementa&ccedil;&otilde;es com estrutura, ritmo visual e acabamento
                </p>
              </div>
            </div>
          </div>

          <aside className="panel-card hero-aside relative min-w-0 overflow-hidden self-start">
            <div className="flex flex-col gap-8">
            <div className="space-y-3">
              <p className="eyebrow-badge">Perfil</p>
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--color-text-strong)] sm:text-3xl">
                Desenvolvimento com clareza visual e base t&eacute;cnica consistente.
              </h2>
              <p className="text-base leading-8 text-[color:var(--color-text)]/82">
                Interfaces escal&aacute;veis com prioridade para legibilidade,
                consist&ecirc;ncia visual, sem perder identidade ou cuidado com a experi&ecirc;ncia.
              </p>
            </div>
            <div className="space-y-4">
              <div className="surface-subtle">
                <p className="text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
                  Disponibilidade
                </p>
                <p className="mt-3 text-base leading-7 text-[color:var(--color-text)]/82">
                  Dispon&iacute;vel para todos os tipos de sistemas, projetos autorais e
                  colabora&ccedil;&otilde;es.
                </p>
              </div>
              <div className="surface-subtle">
                <p className="text-sm font-medium tracking-[0.16em] text-[color:var(--color-accent-soft)] uppercase">
                  Redes
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://github.com/Parys-boop"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    aria-label="GitHub de Arthur Pires"
                  >
                    <FaGithub aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arthur-pires-948433252/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    aria-label="LinkedIn de Arthur Pires"
                  >
                    <FaLinkedin aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </aside>
        </Container>
      </section>

      <Container className="space-y-20 pt-16 sm:space-y-24 sm:pt-18">
        <section id="sobre" className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionTitle
              eyebrow="Sobre"
              title="Forma&ccedil;&atilde;o e constru&ccedil;&atilde;o de repert&oacute;rio para produtos digitais"
            />
          </div>
          <div className="panel-card min-w-0 space-y-5">
            <p className="text-xl leading-8 text-[color:var(--color-text-strong)] sm:text-3xl sm:leading-11">
              T&eacute;cnico em An&aacute;lise e Desenvolvimento de Sistemas (ETEC) e graduando em ADS na FATEC Jales (em andamento).
            </p>
            <p className="text-base leading-8 text-[color:var(--color-text)]/82 sm:text-lg">
              A forma&ccedil;&atilde;o se conecta com uma pr&aacute;tica orientada
              a experi&ecirc;ncias digitais acess&iacute;veis, componentes reutiliz&aacute;veis
              e uma camada visual intencional para desktop e mobile.
            </p>
          </div>
        </section>

        <section id="stack" className="space-y-8">
          <SectionTitle
            eyebrow="Stack"
            title="Tecnologias e frentes que sustentam o portf&oacute;lio"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((item) => (
              <div
                key={item}
                className="panel-card flex min-h-28 items-end rounded-3xl"
              >
                <span className="text-lg font-medium text-[color:var(--color-text-strong)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="projetos" className="space-y-8">
          <SectionTitle
            eyebrow="Projetos"
            title="Projetos com leitura visual forte, estrutura clara e foco em implementa&ccedil;&atilde;o"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="contact-shell panel-card flex flex-col gap-8 rounded-[2rem] px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="min-w-0 max-w-2xl space-y-4">
            <SectionTitle
              eyebrow="Contato"
              title="Vamos conversar sobre oportunidades, projetos e colabora&ccedil;&otilde;es"
            />
            <p className="text-base leading-8 text-[color:var(--color-text)]/82 sm:text-lg">
              O canal principal para contato profissional &eacute; o LinkedIn.
              Use o CTA abaixo para abrir meu perfil e iniciar uma conversa.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="https://www.linkedin.com/in/arthur-pires-948433252/"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Parys-boop"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
}
