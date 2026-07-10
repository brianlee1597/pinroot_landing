"use client";

import { useEffect, useRef } from "react";
import type * as React from "react";

import { cn } from "@/lib/utils/cn";

type ManifestoSketchIllustrationProps = React.HTMLAttributes<HTMLDivElement>;

const manifestoLinePath =
  "M8 248c58-18 131-40 177-73 54-38 82-113 56-150-20-29-79-25-118-6-39 18-61 76-52 129 9 55 59 83 131 93 58 8 132 7 205-2";

const DRAW_DURATION_MS = 1800;
const PATH_START = { x: 8, y: 248 };
const PATH_END = { x: 407, y: 239 };

const strokeProps = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke"
} as const;

export function ManifestoSketchIllustration({
  className,
  ...props
}: ManifestoSketchIllustrationProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const pencilRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const line = lineRef.current;
    const pencil = pencilRef.current;

    if (!root || !line || !pencil) {
      return;
    }

    const lineLength = line.getTotalLength();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;

    const setProgress = (progress: number) => {
      const easedProgress = easeDrawProgress(progress);
      const drawLength = lineLength * easedProgress;
      const point = line.getPointAtLength(drawLength);

      line.style.strokeDasharray = `${drawLength} ${lineLength}`;
      line.style.strokeDashoffset = "0";
      pencil.setAttribute("transform", `translate(${point.x} ${point.y})`);
      pencil.style.opacity = progress > 0 ? "1" : "0";
    };

    if (prefersReducedMotion) {
      line.style.strokeDasharray = "none";
      pencil.setAttribute("transform", `translate(${PATH_END.x} ${PATH_END.y})`);
      pencil.style.opacity = "1";
      return;
    }

    setProgress(0);

    const target = root.closest("[data-manifesto-section]") ?? root;
    let hasPlayed = false;

    const playAnimation = () => {
      if (hasPlayed) {
        return;
      }

      hasPlayed = true;
      const startedAt = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / DRAW_DURATION_MS, 1);

        setProgress(progress);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(tick);
        }
      };

      animationFrame = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          playAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.22
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className={cn("manifesto-sketch", className)} ref={rootRef} {...props}>
      <svg className="manifesto-sketch__svg" viewBox="0 0 520 310">
        <path
          className="manifesto-sketch__line"
          d={manifestoLinePath}
          ref={lineRef}
          {...strokeProps}
        />
        <g
          className="manifesto-sketch__pencil-motion"
          ref={pencilRef}
          transform={`translate(${PATH_START.x} ${PATH_START.y})`}
        >
          <PencilShape />
        </g>
        <g className="manifesto-sketch__pencil-static" transform="translate(407 239)">
          <PencilShape />
        </g>
      </svg>
    </div>
  );
}

function easeDrawProgress(progress: number) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  let lower = 0;
  let upper = 1;
  let t = clampedProgress;

  for (let index = 0; index < 10; index += 1) {
    const x = cubicBezierValue(t, 0.33, 0.15);

    if (x < clampedProgress) {
      lower = t;
    } else {
      upper = t;
    }

    t = (lower + upper) / 2;
  }

  return cubicBezierValue(t, 0, 1);
}

function cubicBezierValue(t: number, controlOne: number, controlTwo: number) {
  const inverse = 1 - t;

  return 3 * inverse * inverse * t * controlOne + 3 * inverse * t * t * controlTwo + t * t * t;
}

function PencilShape() {
  return (
    <g className="manifesto-sketch__pencil-shape" transform="rotate(-5)">
      <path
        className="manifesto-sketch__pencil-tip"
        d="M0 0 14-28 46-13Z"
        {...strokeProps}
      />
      <path
        className="manifesto-sketch__pencil-body"
        d="M14-28 48-103 80-88 46-13Z"
        {...strokeProps}
      />
      <path className="manifesto-sketch__pencil-band" d="M46-13 14-28" {...strokeProps} />
      <path className="manifesto-sketch__pencil-eraser" d="M48-103 80-88" {...strokeProps} />
      <path className="manifesto-sketch__pencil-point" d="M0 0 10-10" {...strokeProps} />
    </g>
  );
}
