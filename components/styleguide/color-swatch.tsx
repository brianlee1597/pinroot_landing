import type * as React from "react";
import { Caption, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";

type ColorSwatchProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  hex: string;
  use?: string;
};

export function ColorSwatch({ name, hex, use, className, ...props }: ColorSwatchProps) {
  return (
    <div className={cn("border border-ink/30 bg-paper", className)} {...props}>
      <div className="h-24 border-b border-ink/20" style={{ backgroundColor: hex }} />
      <div className="space-y-2 p-4">
        <Caption>{name}</Caption>
        <Text as="p" variant="tiny" className="[font-family:var(--font-mono)] uppercase tracking-[0.14em]">
          {hex}
        </Text>
        {use ? (
          <Text as="p" variant="tiny" tone="muted">
            {use}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
