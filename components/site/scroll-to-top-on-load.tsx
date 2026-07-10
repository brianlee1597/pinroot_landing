"use client";

import { useEffect } from "react";

function scrollToPageTop() {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previousScrollBehavior;
}

export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    scrollToPageTop();

    const frame = window.requestAnimationFrame(scrollToPageTop);
    const handlePageShow = () => scrollToPageTop();

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return null;
}
