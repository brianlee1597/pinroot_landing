import type * as React from "react";

import { cn } from "@/lib/utils/cn";

type PinrootSproutIllustrationProps = React.HTMLAttributes<HTMLDivElement>;

const pathProps = {
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke"
} as const;

export function PinrootSproutIllustration({
  className,
  ...props
}: PinrootSproutIllustrationProps) {
  return (
    <div className={cn("pinroot-sprout", className)} {...props}>
      <svg
        aria-label="PinRoot sprout growing from consulting cards"
        className="pinroot-sprout__svg"
        role="img"
        viewBox="0 0 560 420"
      >
        <g className="pinroot-sprout__card pinroot-sprout__card--back">
          <rect
            className="pinroot-sprout__card-fill"
            height="252"
            rx="0"
            width="230"
            x="280"
            y="54"
          />
          <path
            className="pinroot-sprout__card-rule"
            d="M310 96h118M310 126h156M310 156h82"
            {...pathProps}
          />
          <path
            className="pinroot-sprout__chart-line"
            d="M312 244c28-34 48-20 72-50 24-29 42-12 80-58"
            pathLength={1}
            {...pathProps}
          />
          <circle className="pinroot-sprout__chart-dot pinroot-sprout__chart-dot--one" cx="312" cy="244" r="5" />
          <circle className="pinroot-sprout__chart-dot pinroot-sprout__chart-dot--two" cx="383" cy="195" r="5" />
          <circle className="pinroot-sprout__chart-dot pinroot-sprout__chart-dot--three" cx="464" cy="136" r="5" />
        </g>

        <g className="pinroot-sprout__card pinroot-sprout__card--front">
          <rect
            className="pinroot-sprout__card-fill"
            height="170"
            rx="0"
            width="260"
            x="150"
            y="146"
          />
          <g className="pinroot-sprout__checklist">
            <rect height="19" width="19" x="184" y="188" />
            <path d="M188 197l5 5 9-12" pathLength={1} {...pathProps} />
            <path d="M220 197h82" {...pathProps} />
            <rect height="19" width="19" x="184" y="226" />
            <path d="M188 235l5 5 9-12" pathLength={1} {...pathProps} />
            <path d="M220 235h112" {...pathProps} />
          </g>
          <g className="pinroot-sprout__blocks">
            <rect height="26" width="26" x="332" y="184" />
            <rect height="52" width="26" x="366" y="158" />
            <rect height="36" width="26" x="300" y="174" />
          </g>
        </g>

        <g className="pinroot-sprout__roots">
          <path
            className="pinroot-sprout__root-line pinroot-sprout__root-line--main"
            d="M282 264c-8 28-3 56 0 91"
            pathLength={1}
            {...pathProps}
          />
          <path
            className="pinroot-sprout__root-line pinroot-sprout__root-line--left"
            d="M275 292c-32 8-65 30-94 66"
            pathLength={1}
            {...pathProps}
          />
          <path
            className="pinroot-sprout__root-line pinroot-sprout__root-line--right"
            d="M286 306c34 9 61 27 89 58"
            pathLength={1}
            {...pathProps}
          />
          <path
            className="pinroot-sprout__root-line pinroot-sprout__root-line--thread-left"
            d="M235 318c-18-2-35 3-51 15"
            pathLength={1}
            {...pathProps}
          />
          <path
            className="pinroot-sprout__root-line pinroot-sprout__root-line--thread-right"
            d="M326 332c18-1 35 5 51 17"
            pathLength={1}
            {...pathProps}
          />
          <circle className="pinroot-sprout__root-node pinroot-sprout__root-node--one" cx="181" cy="358" r="6" />
          <circle className="pinroot-sprout__root-node pinroot-sprout__root-node--two" cx="375" cy="364" r="6" />
          <circle className="pinroot-sprout__root-node pinroot-sprout__root-node--three" cx="282" cy="355" r="5" />
        </g>

        <g className="pinroot-sprout__pin">
          <path
            d="M282 210c-22 0-39 17-39 39 0 26 39 64 39 64s39-38 39-64c0-22-17-39-39-39Z"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="282" cy="248" r="12" />
        </g>

        <g className="pinroot-sprout__plant">
          <path
            className="pinroot-sprout__stem"
            d="M282 234c-2-34 10-68 38-98"
            pathLength={1}
            {...pathProps}
          />
          <path
            className="pinroot-sprout__leaf pinroot-sprout__leaf--left"
            d="M314 152c-35-9-62 1-80 31 31 14 61 4 80-31Z"
          />
          <path
            className="pinroot-sprout__leaf pinroot-sprout__leaf--right"
            d="M322 140c7-38 31-61 70-69 2 39-24 64-70 69Z"
          />
          <circle className="pinroot-sprout__bud" cx="320" cy="136" r="8" />
        </g>
      </svg>
    </div>
  );
}
