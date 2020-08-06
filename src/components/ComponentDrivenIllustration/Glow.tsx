import React from 'react';
import styled, { keyframes } from 'styled-components';

export const fill1Anim = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fill2Anim = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const fill3Anim = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Fill1 = styled.path.attrs({ fill: 'url(#paint1_linear)' })`
  animation: ${fill1Anim} 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
`;

const Fill2 = styled.path.attrs({ fill: 'url(#paint2_linear)' })`
  animation: ${fill2Anim} 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
`;

const Fill3 = styled.path.attrs({ fill: 'url(#paint3_linear)' })`
  animation: ${fill3Anim} 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
`;

export const Glow = () => {
  return (
    <>
      <g filter="url(#filter0_dd)">
        <path
          fill="#131234"
          d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"
        ></path>
      </g>
      <g data-chromatic="ignore">
        <Fill1 d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"></Fill1>
        <Fill2 d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"></Fill2>
        <Fill3 d="M435.705 224.959V181.4H303.52v43.559l44.312.001.001 44.312h43.559V224.96l44.313-.001z"></Fill3>
      </g>
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
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-20"></feOffset>
          <feGaussianBlur stdDeviation="25"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.370827 0 0 0 0 0.66173 0 0 0 0.2 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint1_linear"
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
          id="paint2_linear"
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
          id="paint3_linear"
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
};
