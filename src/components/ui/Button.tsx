import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonElementProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-caramelo bg-caramelo text-white shadow-[0_18px_35px_rgba(104,64,31,0.18)] hover:border-caramelo-dark hover:bg-caramelo-dark",
  secondary:
    "border-border bg-surface text-foreground hover:border-caramelo hover:bg-[#fffaf2] hover:text-caramelo-dark",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-surface-muted",
  dark: "border-surface-dark bg-surface-dark text-white shadow-[0_18px_35px_rgba(21,18,15,0.2)] hover:bg-[#2a2119]",
  outline:
    "border-foreground/25 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    children,
    ...rest
  } = props;

  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-[6px] border font-semibold transition duration-200 focus-visible:outline-caramelo disabled:pointer-events-none disabled:opacity-55",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {isLoading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {rightIcon}
    </>
  );

  if ("href" in rest && rest.href) {
    return (
      <Link className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      {...buttonProps}
      className={classes}
      disabled={isLoading || buttonProps.disabled}
    >
      {content}
    </button>
  );
}
