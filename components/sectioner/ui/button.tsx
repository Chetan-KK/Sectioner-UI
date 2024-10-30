import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from "react";
import Link from "next/link";

interface CommonProps {
  variant?: "default" | "outline" | "ghost" | "danger" | "success";
  size?: "default" | "icon";
  className?: string;
  children: React.ReactNode;
  href?: string; // Optional `to` prop for link functionality
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: FC<ButtonProps | LinkButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  href,
  ...props
}) => {
  const variantClasses = {
    default: "bg-secondary text-foreground hover:bg-secondary/70",
    outline: "border border-border text-primary hover:bg-border/20",
    ghost: "bg-transparent text-text hover:bg-border/30",
    danger: "bg-danger text-foreground hover:bg-danger/70",
    success: "bg-success text-foreground hover:bg-success/70",
  };

  const sizeClasses = {
    default: "px-4 py-2",
    icon: "w-10 h-10 p-0 flex justify-center items-center",
  };

  const combinedClasses = `flex items-center gap-2 rounded-radius cursor-pointer transition-all whitespace-nowrap text-inherit font-poppins ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // If `to` prop is present, render as a link
  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      className={combinedClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
