import * as React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Navbar } from './Navbar';
import { Backdrop } from './Backdrop';
import { ComponentDrivenIllustration } from './ComponentDrivenIllustration';
import { measure } from '../styles';

const { typography, color, breakpoint, pageMargins } = styles;

const HeaderTitle = styled.h1`
  font-size: ${typography.size.l1}px;
  line-height: 1.25;
  letter-spacing: -0.61px;
  font-weight: ${typography.weight.extrabold};
  color: ${color.lightest};
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;

  @media (min-width: ${breakpoint}px) {
    font-size: ${typography.size.l3}px;
    letter-spacing: -0.61px;
  }
`;

const HeaderCopy = styled.p`
  font-size: ${typography.size.s3}px;
  line-height: 1.5;
  max-width: ${measure}px;
  color: ${color.lightest};
  margin: 0 auto;

  @media (min-width: ${breakpoint}px) {
    font-size: ${typography.size.m1}px;
    line-height: 36px;
    letter-spacing: -0.41px;
  }
`;

const HeaderContainer = styled.div`
  ${pageMargins}
  padding-bottom: 64px;
  padding-top: 32px;

  @media (min-width: ${breakpoint}px) {
    padding-bottom: 128px;
    padding-top: 48px;
  }
`;

const HeaderIllustration = styled(ComponentDrivenIllustration)`
  margin: 64px auto;
  display: block;
  width: 100%;
  max-width: ${measure}px;
`;

export const Header = () => (
  <Backdrop>
    <HeaderContainer>
      <Navbar
        links={[
          { href: '#why', title: 'Why' },
          { href: '#how', title: 'How' },
          { href: '#benefits', title: 'Benefits' },
          { href: '#tools', title: 'Tools' },
        ]}
        githubLink={{
          namespace: 'ComponentDriven',
          repo: 'componentdriven.org',
        }}
      />
      <HeaderIllustration />
      <HeaderTitle>Component Driven User Interfaces</HeaderTitle>
      <HeaderCopy>
        The development and design practice of building user interfaces with
        modular components. UIs are built from the “bottom up” starting with
        basic components then progressively combined to assemble screens.
      </HeaderCopy>
    </HeaderContainer>
  </Backdrop>
);
