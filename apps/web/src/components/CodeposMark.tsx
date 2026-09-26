import type { SVGProps } from "react";

export function CodeposMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M679 302c-48-37-102-55-162-55-146 0-265 119-265 265s119 265 265 265c60 0 114-18 162-55"
        fill="none"
        stroke="currentColor"
        strokeWidth="112"
        strokeLinecap="round"
      />
      <path
        d="m642 431 84 81-84 81"
        fill="none"
        stroke="currentColor"
        strokeWidth="66"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
