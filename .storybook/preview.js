import React from 'react';
import { addDecorator } from '@storybook/react';
import {
  global as designSystemGlobal,
  loadFontsForStorybook,
} from '@storybook/design-system';

const { GlobalStyle } = designSystemGlobal;

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withGlobalStyle);

loadFontsForStorybook();
