import React from "react";

export const ExoticaLogo = () => {
  return (
    <svg
      width="75"
      height="92"
      viewBox="0 0 75 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pulsing-logo"
    >
      <g clip-path="url(#clip0_304_11)" filter="url(#filter0_i_304_11)">
        <path
          opacity="0.9"
          d="M75 21.2672H0V0H53.8683L75 21.2672Z"
          fill="#64748B"
        />
        <path
          opacity="0.9"
          d="M75 92H21.1121L0 70.7328H75V92Z"
          fill="#64748B"
        />
        <path
          opacity="0.25"
          d="M0 70.7328V35.3664H21.1121V92L0 70.7328Z"
          fill="#64748B"
        />
        <path
          opacity="0.9"
          d="M53.8683 35.3664H0V56.6336H53.8683V35.3664Z"
          fill="#64748B"
        />
        <path d="M0 79.3621V92H12.5457L0 79.3621Z" fill="#10B981" />
        <path d="M74.9804 12.6379V0H62.4347L74.9804 12.6379Z" fill="#10B981" />
      </g>
      <defs>
        <filter
          id="filter0_i_304_11"
          x="0"
          y="0"
          width="75"
          height="92"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_304_11"
          />
        </filter>
        <clipPath id="clip0_304_11">
          <rect width="75" height="92" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
