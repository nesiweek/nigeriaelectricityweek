import type { SVGProps } from "react";

export function ConnectIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M9 15l6-6" />
      <path d="M8 13a4 4 0 0 1 0-5.7l2-2a4 4 0 0 1 5.7 5.7l-1 1" />
      <path d="M16 11a4 4 0 0 1 0 5.7l-2 2a4 4 0 0 1-5.7-5.7l1-1" />
    </svg>
  );
}
