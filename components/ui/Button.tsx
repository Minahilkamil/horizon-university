import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type VariantKey = "primary" | "secondary" | "outline" | "ghost" | "success";
type SizeKey = "sm" | "md" | "lg";

const variants: Record<VariantKey, string> = {
  primary:
    "bg-blue-600 text-white shadow-sm hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-blue-300",
  secondary:
    "bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200 active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:bg-gray-50 disabled:text-gray-400",
  outline:
    "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50 active:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:text-gray-400 disabled:border-gray-200",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:text-gray-400",
  success:
    "bg-green-600 text-white shadow-sm hover:bg-green-500 active:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:bg-green-300",
};

const sizes: Record<SizeKey, string> = {
  sm: "h-9 px-4 rounded-lg text-sm font-medium gap-1.5",
  md: "h-11 px-6 rounded-xl text-sm font-semibold gap-2",
  lg: "h-14 px-10 rounded-2xl text-sm font-semibold gap-2",
};

type ButtonVariantProps = {
  variant?: VariantKey;
  size?: SizeKey;
  loading?: boolean;
};

type SlotProps = {
  asChild?: boolean;
  children?: React.ReactNode;
};

export type ButtonProps = ButtonVariantProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariantProps> &
  SlotProps;

function InnerButton(
  {
    asChild,
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    className,
    children,
    type = "button",
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const isDisabled = disabled || loading;

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap transition-colors select-none",
        variants[variant],
        sizes[size],
        isDisabled && "pointer-events-none opacity-70 cursor-not-allowed",
        className,
        child.props.className
      ),
      ...props,
      ...child.props,
    });
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={isDisabled}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap transition-colors select-none disabled:cursor-not-allowed disabled:opacity-70",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 shrink-0 animate-spin" aria-hidden />}
      {children}
    </button>
  );
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(InnerButton);
Button.displayName = "Button";
