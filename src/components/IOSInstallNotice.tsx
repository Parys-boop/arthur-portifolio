"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "arthur-portfolio-ios-install-dismissed";

type IOSNavigator = Navigator & {
  standalone?: boolean;
};

function shouldShowIOSNotice() {
  const userAgent = window.navigator.userAgent;
  const iosNavigator = window.navigator as IOSNavigator;
  const isIOS =
    /iPhone|iPad|iPod/i.test(userAgent) ||
    (userAgent.includes("Macintosh") && "ontouchend" in document);
  const isSafari =
    /Safari/i.test(userAgent) &&
    !/CriOS|FxiOS|EdgiOS|OPiOS|YaBrowser/i.test(userAgent);
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    iosNavigator.standalone === true;
  const dismissed = window.localStorage.getItem(DISMISS_KEY) === "true";

  return isIOS && isSafari && !isStandalone && !dismissed;
}

export function IOSInstallNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const updateVisibility = () => setIsVisible(shouldShowIOSNotice());

    updateVisibility();
    window.addEventListener("storage", updateVisibility);
    mediaQuery.addEventListener("change", updateVisibility);

    return () => {
      window.removeEventListener("storage", updateVisibility);
      mediaQuery.removeEventListener("change", updateVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="status"
      className="ios-install-notice fixed z-40 w-[min(22rem,calc(100vw-5.5rem))] rounded-[1.25rem] border border-white/12 bg-[color:var(--color-surface)]/92 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
    >
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1 space-y-2">
          <p className="text-sm font-semibold text-[color:var(--color-text-strong)]">
            Adicionar &agrave; Tela de In&iacute;cio
          </p>
          <p className="text-sm leading-6 text-[color:var(--color-text)]/82">
            No Safari do iPhone, toque em Compartilhar e depois em
            {" "}
            &quot;Adicionar &agrave; Tela de In&iacute;cio&quot;.
          </p>
        </div>

        <button
          type="button"
          aria-label="Fechar aviso de instalação no iPhone"
          onClick={() => {
            window.localStorage.setItem(DISMISS_KEY, "true");
            setIsVisible(false);
          }}
          className="ios-install-close flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-[color:var(--color-text-strong)]"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
