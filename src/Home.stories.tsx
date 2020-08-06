import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Home from '../pages';

export default {
  component: Home,
  title: 'Pages/Home',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export const Default = () => <Home />;

Default.story = {
  parameters: {
    chromatic: { viewports: [375, 768, 1024, 1440] },
  },
};

export const Mobile = () => <Home />;

Mobile.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};
