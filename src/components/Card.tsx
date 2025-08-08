import clsx from "clsx";

import type { ReactNode } from "react";

type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("p-4 rounded-lg shadow-md bg-white", className)}>
      {children}
    </div>
  );
}
