import type * as React from "react";
import { Caption, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils/cn";

type TokenSpecProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  value: string;
  detail?: string;
};

export function TokenSpec({ name, value, detail, className, ...props }: TokenSpecProps) {
  return (
    <div className={cn("grid gap-1 border-t border-ink/20 py-4 sm:grid-cols-[180px_1fr]", className)} {...props}>
      <Caption tone="muted">{name}</Caption>
      <div>
        <Text as="p" variant="tiny" className="[font-family:var(--font-mono)] uppercase tracking-[0.14em]">
          {value}
        </Text>
        {detail ? (
          <Text as="p" variant="tiny" tone="muted" className="mt-1">
            {detail}
          </Text>
        ) : null}
      </div>
    </div>
  );
}
