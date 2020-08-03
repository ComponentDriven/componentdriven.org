import React from 'react';
import { ComponentDrivenIllustration } from './ComponentDrivenIllustration';
import { Backdrop } from '../Backdrop';

export default {
  component: ComponentDrivenIllustration,
  title: 'Components/ComponentDrivenIllustration',
};

export const Default = () => (
  <Backdrop style={{ maxWidth: 600, padding: 32 }}>
    <ComponentDrivenIllustration />
  </Backdrop>
);
