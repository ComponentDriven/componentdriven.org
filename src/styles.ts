import { createGlobalStyle } from 'styled-components';

export const measure = { regular: 600, wide: 760 };

export const margin = {
  xxsmall: 10,
  xsmall: 20,
  small: 40,
  medium: 64,
  large: 80,
  xlarge: 120,
};

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;
