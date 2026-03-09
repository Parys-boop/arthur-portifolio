import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "@/components/container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/68 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
      <Container className="flex min-h-14 items-center justify-between gap-3 py-2 sm:min-h-16 sm:gap-4 sm:py-3">
        <Link
          href="/"
          className="min-w-0 whitespace-nowrap text-sm font-semibold tracking-[0.12em] text-[color:var(--color-text-strong)] uppercase sm:text-lg"
        >
          Arthur Pires
        </Link>

        <nav aria-label="Redes sociais" className="shrink-0">
          <ul className="flex items-center gap-1.5 sm:gap-2">
            <li>
              <a
                href="https://github.com/Parys-boop"
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label="GitHub de Arthur Pires"
              >
                <FaGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arthur-pires-948433252/"
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label="LinkedIn de Arthur Pires"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
