import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "navy";

const baseStyles =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[4px] px-8 py-3.5 text-[0.92rem] font-bold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-navy-deep shadow-[0_8px_24px_-8px_rgba(226,160,43,0.55)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(226,160,43,0.65)]",
  outline:
    "border border-white/40 bg-transparent text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10",
  navy: "bg-navy text-white hover:-translate-y-0.5 hover:bg-blue",
};

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (props.href) {
    return (
      <Link className={classes} {...(props as ButtonAsLink)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
