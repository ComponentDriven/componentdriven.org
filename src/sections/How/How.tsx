import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { sectionPadding } from '../../styles';
import { Heading, HeadingProps } from '../../components/Heading';
import { Backdrop } from '../../components/Backdrop';
import { HowToBeComponentDrivenDescription } from './HowToBeComponentDrivenDescription';

const { pageMargins, color, breakpoint } = styles;

const HowContainer = styled.section`
  ${pageMargins}

  ${sectionPadding}
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
