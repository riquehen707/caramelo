import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

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
    "border-foreground bg-caramelo text-white shadow-[var(--shadow-soft)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brick",
  secondary:
    "border-foreground bg-surface text-foreground shadow-[var(--shadow-soft)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brasil-yellow",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-surface-muted",
  dark: "border-foreground bg-surface-dark text-white shadow-[var(--shadow-soft)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brasil-green",
  outline:
    "border-foreground bg-transparent text-foreground shadow-[var(--shadow-soft)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-foreground hover:text-background",
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
    styles.root,
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] border-2 font-black uppercase tracking-[0.04em] transition duration-200 focus-visible:outline-caramelo disabled:pointer-events-none disabled:translate-x-0 disabled:translate-y-0 disabled:opacity-55",
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
