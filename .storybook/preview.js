import React from 'react';
import { addDecorator } from '@storybook/react';
import {
  global as designSystemGlobal,
  loadFontsForStorybook,
} from '@storybook/design-system';
import '!style-loader!css-loader!react-github-button/assets/style.css';

const { GlobalStyle } = designSystemGlobal;

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withGlobalStyle);

loadFontsForStorybook();
