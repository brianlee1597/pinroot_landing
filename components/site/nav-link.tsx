import type * as React from "react";
import { cn } from "@/lib/utils/cn";

export function NavLink({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "nav-text-link inline-flex items-center !underline !decoration-transparent !decoration-1 !underline-offset-[0.35em] transition-[color,text-decoration-color] duration-150 hover:text-ink hover:!decoration-ink focus-visible:text-ink focus-visible:!decoration-ink focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}
