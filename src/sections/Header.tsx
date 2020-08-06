import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Navbar } from '../components/Navbar';
import { Backdrop } from '../components/Backdrop';
import { Heading } from '../components/Heading';
import { ComponentDrivenIllustration } from '../components/ComponentDrivenIllustration';
import { measure } from '../styles';
import { Stack, StackProps } from '../components/Stack';

const { typography, color, breakpoint, pageMargins } = styles;

const HeaderTitle = styled(Heading).attrs({ level: '1' })`
  color: ${color.lightest};
  text-align: center;
  margin-bottom: 8px;

  @media (min-width: ${breakpoint}px) {
    margin-bottom: 20px;
  }
`;

const HeaderCopy = styled.p`
  font-size: ${typography.size.s3}px;
  line-height: ${typography.size.m3}px;
  max-width: ${measure.regular}px;
  color: ${color.lightest};
  margin: 0 auto;

  @media (min-width: ${breakpoint}px) {
    font-size: ${typography.size.m1}px;
    line-height: 36px;
    letter-spacing: -0.41px;
  }
`;

const HeaderContainer = styled(Stack).attrs({
  axis: 'vertical',
  space: 'medium',
})<StackProps>`
  ${pageMargins}
  padding-top: 32px;
  padding-bottom: 3rem;

  @media (min-width: ${breakpoint}px) {
    padding-top: 48px;
    padding-bottom: 128px;
  }
`;

const HeaderIllustration = styled(ComponentDrivenIllustration)`
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  max-width: ${measure.regular}px;
  position: relative;
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
      <div>
        <HeaderTitle as="h1">Component Driven User Interfaces</HeaderTitle>
        <HeaderCopy>
          The development and design practice of building user interfaces with
          modular components. UIs are built from the “bottom up” starting with
          basic components then progressively combined to assemble screens.
        </HeaderCopy>
      </div>
    </HeaderContainer>
  </Backdrop>
);
