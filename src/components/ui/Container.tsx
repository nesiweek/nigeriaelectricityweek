import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("px-page mx-auto w-full max-w-[1240px]", className)}>
      {children}
    </div>
  );
}
