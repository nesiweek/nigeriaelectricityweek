import type { SVGProps } from "react";

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.7L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6.1L18.9 2z" />
    </svg>
  );
}
