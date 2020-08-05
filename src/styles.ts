import { createGlobalStyle, css } from 'styled-components';
import { styles } from '@storybook/design-system';
const { breakpoint } = styles;

export const measure = { regular: 600, wide: 760, xwide: 980 };

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

export const sectionPadding = css`
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: ${breakpoint}px) {
    padding-top: ${margin.large}px;
    padding-bottom: ${margin.large}px;
  }
`