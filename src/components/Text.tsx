import clsx from "clsx";

type TextProps = {
  readonly children: React.ReactNode;
  readonly size?: "sm" | "md" | "lg";
  readonly className?: string;
};

export function Text({ children, size = "md", className }: TextProps) {
  return (
    <p
      className={clsx(
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        className
      )}
    >
      {children}
    </p>
  );
}
