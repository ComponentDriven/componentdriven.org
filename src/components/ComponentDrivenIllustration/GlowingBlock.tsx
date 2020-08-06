import React from 'react';
import styled, { keyframes } from 'styled-components';

export const block1Anim = keyframes`
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

export const block2Anim = keyframes`
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

export const block3Anim = keyframes`
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

const Block1 = styled.img.attrs({ alt: '', src: '/block-1.svg' })`
  animation: ${block1Anim} 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const Block2 = styled.img.attrs({ alt: '', src: '/block-2.svg' })`
  animation: ${block2Anim} 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const Block3 = styled.img.attrs({ alt: '', src: '/block-3.svg' })`
  animation: ${block3Anim} 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const Shadow = styled.img.attrs({ alt: '', src: '/block-shadow.svg' })`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

export const GlowingBlock = () => {
  return (
    <>
      <Shadow />
      <Block1 />
      <Block2 />
      <Block3 />
    </>
  );
};
