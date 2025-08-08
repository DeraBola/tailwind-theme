import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md font-medium",
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "secondary" && "bg-gray-200 text-gray-800 hover:bg-gray-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
