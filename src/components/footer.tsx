import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <Container>
        <p className="text-sm text-[color:var(--color-text)]/70">
          © 2026 por Arthur Pires.
        </p>
      </Container>
    </footer>
  );
}
