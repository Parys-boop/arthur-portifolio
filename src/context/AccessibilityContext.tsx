"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const FONT_SCALE_KEY = "arthur-portfolio-font-scale";
const CONTRAST_KEY = "arthur-portfolio-contrast";
const DEFAULT_FONT_SCALE = 1;
const MIN_FONT_SCALE = 0.9;
const MAX_FONT_SCALE = 1.3;
const FONT_STEP = 0.05;

type AccessibilityContextValue = {
  fontScale: number;
  highContrast: boolean;
  decreaseFont: () => void;
  increaseFont: () => void;
  toggleHighContrast: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(
  null,
);

function clampFontScale(value: number) {
  const rounded = Math.round(value * 100) / 100;

  return Math.min(MAX_FONT_SCALE, Math.max(MIN_FONT_SCALE, rounded));
}

function getInitialFontScale() {
  return DEFAULT_FONT_SCALE;
}

function getInitialContrast() {
  return false;
}

export function AccessibilityProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [fontScale, setFontScale] = useState(getInitialFontScale);
  const [highContrast, setHighContrast] = useState(getInitialContrast);

  useEffect(() => {
    const savedFontScale = Number(window.localStorage.getItem(FONT_SCALE_KEY));
    const savedHighContrast = window.localStorage.getItem(CONTRAST_KEY) === "high";
    const frame = window.requestAnimationFrame(() => {
      if (!Number.isNaN(savedFontScale)) {
        setFontScale(clampFontScale(savedFontScale));
      }

      setHighContrast(savedHighContrast);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--font-scale", fontScale.toFixed(2));
    window.localStorage.setItem(FONT_SCALE_KEY, fontScale.toFixed(2));
  }, [fontScale]);

  useEffect(() => {
    const root = document.documentElement;

    if (highContrast) {
      root.dataset.contrast = "high";
    } else {
      delete root.dataset.contrast;
    }

    window.localStorage.setItem(CONTRAST_KEY, highContrast ? "high" : "default");
  }, [highContrast]);

  const value = useMemo(
    () => ({
      fontScale,
      highContrast,
      decreaseFont: () =>
        setFontScale((current) => clampFontScale(current - FONT_STEP)),
      increaseFont: () =>
        setFontScale((current) => clampFontScale(current + FONT_STEP)),
      toggleHighContrast: () => setHighContrast((current) => !current),
    }),
    [fontScale, highContrast],
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error(
      "useAccessibility precisa ser usado dentro de AccessibilityProvider.",
    );
  }

  return context;
}
