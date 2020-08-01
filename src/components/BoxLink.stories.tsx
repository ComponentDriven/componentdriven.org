import React from 'react';
import { BoxLink } from './BoxLink';

export default {
  component: BoxLink,
  title: 'Components/BoxLink',
};

export const Default = () => (
  <BoxLink href="/" style={{ margin: 64, padding: 32 }}>
    BoxLink content
  </BoxLink>
);
