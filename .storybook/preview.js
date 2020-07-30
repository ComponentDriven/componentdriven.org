import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import {
  global as designSystemGlobal,
  loadFontsForStorybook,
} from '@storybook/design-system';
import '!style-loader!css-loader!react-github-button/assets/style.css';
import { GlobalStyle } from '../src/styles';

const { GlobalStyle: StorybookDSGlobalStyle } = designSystemGlobal;

const withGlobalStyle = (storyFn) => (
  <>
    <StorybookDSGlobalStyle />
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withGlobalStyle);

loadFontsForStorybook();

addParameters({
  options: {
    showRoots: true,
  },
});
