"use client";

import { useId, useState } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export function AccessibilityWidget() {
  const { decreaseFont, fontScale, highContrast, increaseFont, toggleHighContrast } =
    useAccessibility();
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  const atMinFont = fontScale <= 0.9;
  const atMaxFont = fontScale >= 1.3;

  return (
    <div className="safe-area-widget fixed z-50">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Abrir controles de acessibilidade"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="accessibility-fab accessibility-button flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/12 bg-[color:var(--color-surface)]/92 px-4 text-sm font-semibold text-[color:var(--color-text-strong)] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:hidden"
      >
        Aa
      </button>

      <div
        id={panelId}
        className={`accessibility-shell mt-3 ${isOpen ? "flex" : "hidden"} w-[min(18rem,calc(100vw-2rem))] flex-col gap-3 rounded-[1.5rem] border border-white/12 bg-[color:var(--color-surface)]/92 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:mt-0 lg:flex lg:w-72`}
      >
        <button
          type="button"
          onClick={toggleHighContrast}
          aria-label="Alternar alto contraste"
          aria-pressed={highContrast}
          className={`accessibility-button min-h-12 rounded-2xl border px-4 text-sm font-medium ${
            highContrast
              ? "border-[color:var(--color-accent)] bg-[color:var(--color-primary)]/35 text-[color:var(--color-text-strong)]"
              : "border-white/10 bg-white/5 text-[color:var(--color-text)] hover:bg-white/10"
          }`}
        >
          Alto contraste
        </button>

        <div className="grid grid-cols-[auto_auto] gap-3">
          <button
            type="button"
            onClick={decreaseFont}
            aria-label="Diminuir tamanho da fonte"
            disabled={atMinFont}
            className="accessibility-button flex min-h-12 min-w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-[color:var(--color-text-strong)] hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
          >
            A-
          </button>
          <button
            type="button"
            onClick={increaseFont}
            aria-label="Aumentar tamanho da fonte"
            disabled={atMaxFont}
            className="accessibility-button flex min-h-12 min-w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-[color:var(--color-text-strong)] hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
          >
            A+
          </button>
        </div>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Voltar ao topo da página"
          className="accessibility-button min-h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-[color:var(--color-text)] hover:bg-white/10"
        >
          Topo
        </button>
      </div>
    </div>
  );
}
