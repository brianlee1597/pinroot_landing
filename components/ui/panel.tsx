import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const panelVariants = cva("border border-ink/20 bg-paper", {
  variants: {
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    },
    tone: {
      paper: "bg-paper",
      paperDeep: "bg-paper-deep",
      mist: "bg-mist",
      cloud: "bg-cloud"
    }
  },
  defaultVariants: {
    padding: "md",
    tone: "paper"
  }
});

type PanelProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof panelVariants> & {
    as?: "article" | "div";
  };

export function Panel({ as = "div", padding, tone, className, ...props }: PanelProps) {
  const Component = as;

  return <Component className={cn(panelVariants({ padding, tone }), className)} {...props} />;
}
