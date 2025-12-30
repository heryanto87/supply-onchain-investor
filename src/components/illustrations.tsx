import React from "react";

export function UnderlineSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 200 9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00025 6.99997C25.7501 2.99991 63.5002 0.49991 198.001 3.49996"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      ></path>
    </svg>
  );
}

export function GraphChartSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      viewBox="0 0 100 50"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop
            offset="0%"
            style={{
              stopColor: "var(--color-primary)",
              stopOpacity: 0.4,
            }}
          ></stop>
          <stop
            offset="100%"
            style={{
              stopColor: "var(--color-primary)",
              stopOpacity: 0,
            }}
          ></stop>
        </linearGradient>
      </defs>
      <path
        className="text-primary"
        d="M0,50 L0,40 C10,35 20,45 30,30 C40,15 50,35 60,20 C70,5 80,15 90,10 L100,5 L100,50 Z"
        fill="url(#grad1)"
        stroke="none"
      ></path>
      <path
        className="text-primary"
        d="M0,40 C10,35 20,45 30,30 C40,15 50,35 60,20 C70,5 80,15 90,10 L100,5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </svg>
  );
}
