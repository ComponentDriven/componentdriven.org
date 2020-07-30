import React from 'react';
import { ExplainerCard } from './ExplainerCard';
import { Backdrop } from './Backdrop';

export default {
  component: ExplainerCard,
  title: 'Components/ExplainerCard',
};

export const Default = () => (
  <Backdrop style={{ padding: 64 }}>
    <ExplainerCard
      illustration={<img src="/component.svg" />}
      term="Build one component at a time"
      definition="Build each component in isolation and define its relevant states. Start
        small."
      examples={['Avatar', 'Button', 'Input', 'Tooltip']}
    />
  </Backdrop>
);
