import type * as React from "react";
import { cn } from "@/lib/utils/cn";
import { Text } from "@/components/ui/typography";

type PortraitPlaceholderProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function PortraitPlaceholder({
  label = "drawing headshot",
  className,
  ...props
}: PortraitPlaceholderProps) {
  return (
    <div
      className={cn("flex aspect-square items-center justify-center border border-ink/30 bg-paper", className)}
      {...props}
    >
      <Text className="flex max-w-24 items-center justify-center text-center leading-tight" tone="ink" variant="tiny">
        {label}
      </Text>
    </div>
  );
}
