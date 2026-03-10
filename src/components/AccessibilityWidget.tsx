"use client";

import { FaAdjust, FaArrowUp, FaMinus, FaPlus } from "react-icons/fa";
import { useAccessibility } from "@/context/AccessibilityContext";

export function AccessibilityWidget() {
  const { decreaseFont, fontScale, highContrast, increaseFont, toggleHighContrast } =
    useAccessibility();

  const atMinFont = fontScale <= 0.9;
  const atMaxFont = fontScale >= 1.3;

  return (
    <div className="safe-area-widget fixed z-50">
      <div className="accessibility-shell flex items-center gap-2 rounded-[1.35rem] border border-white/12 bg-[color:var(--color-surface)]/92 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <button
          type="button"
          onClick={toggleHighContrast}
          aria-label="Alternar alto contraste"
          aria-pressed={highContrast}
          className={`accessibility-button flex min-h-12 min-w-12 items-center justify-center rounded-[1rem] border ${
            highContrast
              ? "border-[color:var(--color-accent)] bg-[color:var(--color-primary)]/35 text-[color:var(--color-text-strong)]"
              : "border-white/10 bg-white/5 text-[color:var(--color-text)] hover:bg-white/10"
          }`}
        >
          <FaAdjust aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={decreaseFont}
          aria-label="Diminuir tamanho da fonte"
          disabled={atMinFont}
          className="accessibility-button flex min-h-12 min-w-12 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-sm font-semibold text-[color:var(--color-text-strong)] hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
        >
          <FaMinus aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={increaseFont}
          aria-label="Aumentar tamanho da fonte"
          disabled={atMaxFont}
          className="accessibility-button flex min-h-12 min-w-12 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-sm font-semibold text-[color:var(--color-text-strong)] hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
        >
          <FaPlus aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Voltar ao topo da página"
          className="accessibility-button flex min-h-12 min-w-12 items-center justify-center rounded-[1rem] border border-white/10 bg-white/5 text-sm font-medium text-[color:var(--color-text)] hover:bg-white/10"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
