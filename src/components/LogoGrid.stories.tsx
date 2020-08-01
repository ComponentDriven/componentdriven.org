import React from 'react';
import { LogoGrid } from './LogoGrid';

export default {
  component: LogoGrid,
  title: 'Components/LogoGrid',
};

const items = Array.from({ length: 15 }, (_, idx) => ({
  image: '/logos/logo-chromatic.svg',
  link: '/',
  title: `${idx} chromatic`,
}));

export const Default = () => (
  <div style={{ padding: 64 }}>
    <LogoGrid items={items} />
  </div>
);
