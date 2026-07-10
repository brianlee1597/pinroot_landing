import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

export const buttonVariants = cva(
  "inline-flex min-h-10 items-center justify-center border px-5 [font-family:var(--font-mono)] text-[0.75rem] font-normal uppercase leading-none tracking-[0.14em] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ocean-teal disabled:pointer-events-none disabled:opacity-50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-ink bg-ink text-paper hover:bg-charcoal",
        secondary: "border-ink bg-paper text-ink hover:bg-cloud/60",
        textLink:
          "min-h-5 border-transparent bg-transparent px-0 text-ink underline underline-offset-4 hover:text-deep-teal"
      },
      size: {
        default: "min-h-10 px-5",
        small: "min-h-9 px-4 text-[0.68rem]",
        compact: "min-h-0 px-0"
      }
    },
    compoundVariants: [
      {
        variant: "textLink",
        size: ["default", "small", "compact"],
        className: "min-h-5 px-0"
      }
    ],
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

export function Button(props: ButtonProps) {
  const { variant, size, className, disabled, children, ...rest } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = rest as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      "className"
    >;

    return (
      <a
        {...anchorProps}
        aria-disabled={disabled || anchorProps["aria-disabled"]}
        className={classes}
        data-disabled={disabled ? true : undefined}
        href={disabled ? undefined : href}
        tabIndex={disabled ? -1 : anchorProps.tabIndex}
      >
        {children}
      </a>
    );
  }

  const buttonProps = rest as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

  return (
    <button {...buttonProps} className={classes} disabled={disabled || buttonProps.disabled}>
      {children}
    </button>
  );
}
