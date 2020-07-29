import React from 'react';
import { Navbar } from './Navbar';
import { Backdrop } from './Backdrop';

export default {
  component: Navbar,
  title: 'Components/Navbar',
};

export const Default = () => (
  <Backdrop style={{ padding: 64 }}>
    <Navbar
      links={[
        { href: '#why', title: 'Why' },
        { href: '#how', title: 'How' },
        { href: '#benefits', title: 'Benefits' },
        { href: '#tools', title: 'Tools' },
      ]}
      githubLink={{
        namespace: 'storybookjs',
        repo: 'storybook',
      }}
    />
  </Backdrop>
);
