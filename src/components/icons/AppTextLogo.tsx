import React from "react";

/**
 * NeverType SVG text logo — shown in the sidebar header and onboarding screen.
 * Clean, modern wordmark using a bold geometric sans-serif style with a
 * blue gradient fill matching the app's blue theme.
 */
const AppTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height ?? Math.round((width ?? 200) * 0.22)}
      className={className}
      viewBox="0 0 600 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="nt-grad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="108"
        fontFamily="'SF Pro Display', 'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontSize="108"
        fontWeight="700"
        letterSpacing="-3"
        fill="url(#nt-grad)"
      >
        NeverType
      </text>
    </svg>
  );
};

export default AppTextLogo;
