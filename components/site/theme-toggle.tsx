"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "pinroot-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(storageKey, theme);
}

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(readTheme());

    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey) {
        setTheme(readTheme());
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      className="theme-toggle group fixed bottom-5 right-5 z-[60] flex h-11 w-11 items-center justify-center overflow-hidden border border-ink bg-paper text-ink shadow-[0_12px_32px_rgb(29_30_27_/_0.2)] transition-[width,background-color,border-color,color,box-shadow] duration-200 ease-out hover:w-32 hover:bg-ink hover:text-paper focus-visible:w-32 focus-visible:bg-ink focus-visible:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean-teal"
      onClick={() => {
        applyTheme(nextTheme);
        setTheme(nextTheme);
      }}
      type="button"
    >
      <span className="h-2.5 w-2.5 shrink-0 bg-current" aria-hidden="true" />
      <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap [font-family:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] opacity-0 transition-[max-width,margin,opacity] duration-200 ease-out group-hover:ml-3 group-hover:max-w-24 group-hover:opacity-100 group-focus-visible:ml-3 group-focus-visible:max-w-24 group-focus-visible:opacity-100">
        {nextTheme} mode
      </span>
    </button>
  );
}
