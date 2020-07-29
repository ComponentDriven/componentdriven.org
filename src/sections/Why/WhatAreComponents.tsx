import * as React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Text } from '../../components/Text';
import { Measure, MeasureProps } from '../../components/Measure';
import { Heading } from '../../components/Heading';
import Histogram from '../../images/histogram.svg';
import { margin } from '../../styles';

const { breakpoint } = styles;

const WhatAreComponentsContainer = styled<MeasureProps>(Measure)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: ${breakpoint}px) {
    flex-direction: row;
  }

  svg {
    flex: none;
    width: 210px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${margin.small}px;

    @media (min-width: ${breakpoint}px) {
      margin-left: 0;
      margin-right: ${margin.small}px;
      margin-bottom: 0;
    }
  }

  div {
    flex: 1 1 auto;
  }
`;

export const WhatAreComponents = () => (
  <WhatAreComponentsContainer variant="regular">
    <Histogram />
    <div>
      <Heading level="4">What are components?</Heading>
      <Text>
        Components are standardized, interchangeable building blocks of UIs.
        They encapsulate the appearance and function of UI pieces. Think LEGO
        bricks. LEGOs can be used to build everything from castles to
        spaceships; components can be taken apart and used to create new
        features.
      </Text>
    </div>
  </WhatAreComponentsContainer>
);
