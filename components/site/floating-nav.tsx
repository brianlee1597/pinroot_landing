"use client";

import { useEffect, useState } from "react";
import { PinRootLogo } from "@/components/brand/pinroot-logo";
import { NavLink } from "@/components/site/nav-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    let frame = 0;

    const syncVisibility = () => {
      const headerBottom = header?.getBoundingClientRect().bottom ?? 0;

      setIsVisible((current) => {
        const next = header ? headerBottom <= 0 : window.scrollY > 96;

        return current === next ? current : next;
      });
    };

    const updateVisibility = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        syncVisibility();
      });
    };

    syncVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      data-floating-nav
      inert={!isVisible ? true : undefined}
      className={cn(
        "fixed left-1/2 top-3 z-50 w-[calc(100%-2rem)] max-w-[1760px] -translate-x-1/2 transform-gpu transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform,filter] motion-reduce:transition-none sm:w-[calc(100%-3rem)] md:top-4 lg:w-[calc(100%-4rem)] xl:w-[calc(100%-8rem)] 3xl:w-[calc(100%-10rem)]",
        isVisible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "pointer-events-none -translate-y-6 scale-[0.985] opacity-0 blur-[2px]"
      )}
    >
      <div className="flex min-h-16 items-center justify-between rounded-full border border-ink/10 bg-paper/95 px-4 shadow-[0_16px_42px_rgb(29_30_27_/_0.14),0_1px_0_rgb(255_255_255_/_0.66)_inset] backdrop-blur-md sm:px-6 md:px-8 xl:min-h-[4.5rem] xl:px-9 3xl:min-h-20 3xl:px-10">
        <PinRootLogo className="text-[0.95rem] sm:text-[1.3rem] lg:text-[1.55rem]" />
        <nav
          aria-label="Floating navigation"
          className="hidden items-center gap-8 [font-family:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-ink/78 md:flex xl:gap-10 3xl:gap-12"
        >
          {navLinks.map((link) => (
            <NavLink href={link.href} key={link.href}>
              {link.label}
            </NavLink>
          ))}
          <Button size="small" type="button">
            Get in touch
          </Button>
        </nav>
        <Button className="md:hidden" size="small" type="button">
          Contact
        </Button>
      </div>
    </div>
  );
}
