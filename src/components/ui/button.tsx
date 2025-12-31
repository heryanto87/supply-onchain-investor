import * as React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-white"
  | "ghost"
  | "dashed";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary/40 shadow-sm",
  secondary:
    "bg-white text-primary hover:bg-neutral-100 focus-visible:ring-primary/40 shadow-sm",
  outline:
    "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:ring-primary/30",
  "outline-white":
    "border border-white/20 bg-primary text-white hover:bg-white/5 focus-visible:ring-white/30",
  ghost:
    "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-primary focus-visible:ring-primary/30",
  dashed:
    "bg-transparent border border-dashed border-neutral-300 text-primary hover:text-primary/80 focus-visible:ring-primary/30",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-8 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
