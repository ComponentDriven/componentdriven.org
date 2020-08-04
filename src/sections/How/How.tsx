import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { margin } from '../../styles';
import { Heading, HeadingProps } from '../../components/Heading';
import { Backdrop } from '../../components/Backdrop';
import { HowToBeComponentDrivenDescription } from './HowToBeComponentDrivenDescription';

const { pageMargins, color } = styles;

const HowContainer = styled.section`
  ${pageMargins}
  padding-bottom: ${margin.large}px;
  padding-top: ${margin.large}px;
`;

const HowTitle = styled(Heading).attrs({ level: '2', as: 'h2' })<HeadingProps>`
  color: ${color.lightest};
  text-align: center;
`;

export const How = () => (
  <Backdrop>
    <HowContainer id="how">
      <HowTitle>How to be Component Driven</HowTitle>
      <HowToBeComponentDrivenDescription />
    </HowContainer>
  </Backdrop>
);
