import type * as React from "react";
import { cn } from "@/lib/utils/cn";

type PinRootLogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  size?: "default" | "small" | "compact" | "tiny";
};

const logoSizes = {
  default: "text-[1.12rem] sm:text-[1.55rem] lg:text-[1.85rem]",
  small: "text-[1.08rem]",
  compact: "text-[0.64rem]",
  tiny: "text-[0.52rem]"
};

export function PinRootLogo({
  href = "/",
  size = "default",
  className,
  ...props
}: PinRootLogoProps) {
  return (
    <a
      aria-label="PinRoot Consulting home"
      className={cn(
        "text-center [font-family:var(--font-display)] font-semibold leading-[0.95] tracking-normal text-ink",
        logoSizes[size],
        className
      )}
      href={href}
      {...props}
    >
      PinRoot Consulting
    </a>
  );
}
