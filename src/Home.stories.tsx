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

export const Mobile = () => <Home />;

Mobile.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
    chromatic: { viewports: [375, 812] },
  },
};
