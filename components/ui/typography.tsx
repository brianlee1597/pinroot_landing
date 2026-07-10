import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const headingVariants = cva("[font-family:var(--font-display)] font-medium tracking-normal", {
  variants: {
    variant: {
      display1: "text-[2.875rem] leading-[0.95] sm:text-[3.5rem] xl:text-[4.5rem] 3xl:text-[5.5rem]",
      display2: "text-[2.25rem] leading-[1.08] xl:text-[2.75rem] 3xl:text-[3.25rem]",
      display3: "text-xl leading-[1.15] xl:text-2xl"
    },
    tone: {
      ink: "text-ink",
      paper: "text-paper",
      teal: "text-deep-teal"
    }
  },
  defaultVariants: {
    variant: "display2",
    tone: "ink"
  }
});

const textVariants = cva("[font-family:var(--font-body)] font-normal", {
  variants: {
    variant: {
      body: "text-base leading-[1.6] sm:text-lg",
      small: "text-[0.875rem] leading-[1.6]",
      tiny: "text-[0.8125rem] leading-[1.5]"
    },
    tone: {
      ink: "text-ink",
      muted: "text-ink/72",
      paper: "text-paper",
      paperMuted: "text-paper/78"
    }
  },
  defaultVariants: {
    variant: "body",
    tone: "ink"
  }
});

const eyebrowVariants = cva(
  "[font-family:var(--font-mono)] text-xs font-normal uppercase leading-none tracking-[0.14em]",
  {
    variants: {
      tone: {
        teal: "text-deep-teal",
        ocean: "text-ocean-teal",
        ink: "text-ink",
        paper: "text-paper"
      }
    },
    defaultVariants: {
      tone: "teal"
    }
  }
);

const captionVariants = cva(
  "[font-family:var(--font-mono)] text-[0.68rem] font-normal uppercase leading-[1.35] tracking-[0.14em]",
  {
    variants: {
      tone: {
        ink: "text-ink",
        muted: "text-ink/60",
        teal: "text-deep-teal",
        paper: "text-paper/78"
      }
    },
    defaultVariants: {
      tone: "ink"
    }
  }
);

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3";
  };

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    as?: "p" | "span" | "div";
  };

type EyebrowProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof eyebrowVariants> & {
    as?: "p" | "span" | "div" | "h2" | "h3";
  };

type CaptionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof captionVariants> & {
    as?: "p" | "span" | "div";
  };

export function Heading({ as, variant, tone, className, ...props }: HeadingProps) {
  const Component = as ?? (variant === "display1" ? "h1" : variant === "display3" ? "h3" : "h2");

  return <Component className={cn(headingVariants({ variant, tone }), className)} {...props} />;
}

export function Text({ as = "p", variant, tone, className, ...props }: TextProps) {
  const Component = as;

  return <Component className={cn(textVariants({ variant, tone }), className)} {...props} />;
}

export function Eyebrow({ as = "p", tone, className, ...props }: EyebrowProps) {
  const Component = as;

  return <Component className={cn(eyebrowVariants({ tone }), className)} {...props} />;
}

export function Caption({ as = "p", tone, className, ...props }: CaptionProps) {
  const Component = as;

  return <Component className={cn(captionVariants({ tone }), className)} {...props} />;
}
