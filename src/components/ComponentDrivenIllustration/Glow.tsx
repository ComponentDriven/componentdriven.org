import React from 'react';

export const Glow = () => (
  <>
    <g filter="url(#filter0_dd)">
      <path
        fill="#131234"
        d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"
      ></path>
    </g>
    <path
      fill="url(#paint0_linear)"
      d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"
    ></path>
    <path
      fill="url(#paint1_linear)"
      d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"
    ></path>
    <path
      fill="url(#paint2_linear)"
      d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"
    ></path>
    <defs>
      <filter
        id="filter0_dd"
        width="232.185"
        height="227.872"
        x="253.52"
        y="111.4"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="20"></feOffset>
        <feGaussianBlur stdDeviation="25"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0.695311 0 0 0 0 0.314952 0 0 0 0 0.978261 0 0 0 0.2 0"></feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="-20"></feOffset>
        <feGaussianBlur stdDeviation="25"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.370827 0 0 0 0 0.66173 0 0 0 0.2 0"></feColorMatrix>
        <feBlend in2="effect1_dropShadow" result="effect2_dropShadow"></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow"
          result="shape"
        ></feBlend>
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="395.568"
        x2="339.991"
        y1="250.137"
        y2="175.377"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EA7E44"></stop>
        <stop offset="1" stopColor="#C800FF"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="330.71"
        x2="355.873"
        y1="227.954"
        y2="260.989"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F6CD6A"></stop>
        <stop offset="1" stopColor="#C250E9"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="395.568"
        x2="339.991"
        y1="250.137"
        y2="175.377"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#444EEA"></stop>
        <stop offset="1" stopColor="#07FF00"></stop>
      </linearGradient>
    </defs>
  </>
);
