import React from "react";

/**
 * NeverType app icon — a microphone with voice waves, matching the blue
 * gradient theme. Used as the General section icon in the sidebar.
 */
const AppIcon = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="mic-grad" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
    </defs>
    {/* Microphone body */}
    <rect x="9" y="2" width="6" height="11" rx="3" fill="url(#mic-grad)" />
    {/* Microphone stand arc */}
    <path
      d="M5 10a7 7 0 0 0 14 0"
      stroke="url(#mic-grad)"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    {/* Stand pole */}
    <line x1="12" y1="17" x2="12" y2="21" stroke="url(#mic-grad)" strokeWidth="2" strokeLinecap="round" />
    {/* Stand base */}
    <line x1="8" y1="21" x2="16" y2="21" stroke="url(#mic-grad)" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default AppIcon;
