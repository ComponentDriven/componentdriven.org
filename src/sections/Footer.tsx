import React from 'react';
import styled from 'styled-components';
import { styles, Link } from '@storybook/design-system';
import { Text } from '../components/Text';
import { margin } from '../styles';

const FooterContainer = styled(Text).attrs({ as: 'footer' })`
  color: #586368;
  margin-bottom: 3rem;
  text-align: center;

  @media (min-width: ${styles.breakpoint}px) {
    margin-bottom: ${margin.medium}px;
  }
`;

const FooterLink = styled(Link).attrs({ tertiary: true })`
  color: #586368;
  font-weight: ${styles.typography.weight.bold};
`;

export const Footer = () => (
  <FooterContainer>
    Maintained by{' '}
    <FooterLink href="https://www.chromatic.com/">Chromatic</FooterLink> and the
    amazing open source community.{' '}
    <FooterLink href="https://github.com/ComponentDriven/componentdriven.org">
      Pull requests welcome!
    </FooterLink>
  </FooterContainer>
);
