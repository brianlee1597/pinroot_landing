import type * as React from "react";

import { cn } from "@/lib/utils/cn";

type TypewriterWordProps = {
  children: string;
  className?: string;
};

type TypewriterStyle = React.CSSProperties & {
  "--typewriter-character-delay"?: string;
  "--typewriter-final-caret-delay"?: string;
  "--typewriter-step-duration"?: string;
};

const TYPEWRITER_START_MS = 420;
const TYPEWRITER_STEP_MS = 115;

export function TypewriterWord({ children, className }: TypewriterWordProps) {
  const characters = Array.from(children);
  const finalCaretDelay = TYPEWRITER_START_MS + characters.length * TYPEWRITER_STEP_MS;

  return (
    <span
      className={cn("typewriter-word", className)}
      style={
        {
          "--typewriter-final-caret-delay": `${finalCaretDelay}ms`,
          "--typewriter-step-duration": `${TYPEWRITER_STEP_MS}ms`,
        } as TypewriterStyle
      }
    >
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="typewriter-word__letters">
        {characters.map((character, index) => (
          <span
            className="typewriter-word__char"
            key={`${character}-${index}`}
            style={
              {
                "--typewriter-character-delay": `${
                  TYPEWRITER_START_MS + index * TYPEWRITER_STEP_MS
                }ms`,
              } as TypewriterStyle
            }
          >
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
        <span aria-hidden="true" className="typewriter-word__final-caret" />
      </span>
    </span>
  );
}
