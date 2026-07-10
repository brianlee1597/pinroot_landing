import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const containerVariants = cva(
  "mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] xl:w-[calc(100%-8rem)] 3xl:w-[calc(100%-10rem)]",
  {
    variants: {
      size: {
        narrow: "max-w-[760px]",
        content: "max-w-[1180px]",
        default: "max-w-[1360px]",
        wide: "max-w-[1600px]",
        cinema: "max-w-[1760px]"
      },
      rail: {
        nav: "px-4 sm:px-6 md:px-8 xl:px-9 3xl:px-10",
        none: ""
      }
    },
    defaultVariants: {
      size: "default",
      rail: "none"
    }
  }
);

const sectionVariants = cva("", {
  variants: {
    background: {
      paper: "bg-paper text-ink",
      paperDeep: "bg-paper-deep text-ink",
      ink: "bg-ink text-paper"
    },
    padding: {
      none: "py-0",
      sm: "py-14 sm:py-16 xl:py-20 3xl:py-24",
      md: "py-20 sm:py-24 xl:py-28 3xl:py-32",
      lg: "py-24 sm:py-28 xl:py-32 3xl:py-40"
    }
  },
  defaultVariants: {
    background: "paper",
    padding: "md"
  }
});

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>;

type SectionProps = React.HTMLAttributes<HTMLElement> & VariantProps<typeof sectionVariants>;

export function Container({ size, rail, className, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size, rail }), className)} {...props} />;
}

export function Section({ background, padding, className, ...props }: SectionProps) {
  return <section className={cn(sectionVariants({ background, padding }), className)} {...props} />;
}
