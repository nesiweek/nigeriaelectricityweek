import type { SVGProps } from "react";

export function CelebrateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M9 12.5 7 22l5-3 5 3-2-9.5" />
    </svg>
  );
}
