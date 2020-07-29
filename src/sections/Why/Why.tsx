import * as React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Stack } from '../../components/Stack';
import { margin } from '../../styles';
import { WhyComponents } from './WhyComponents';
import { History } from './History';
import { WhatAreComponents } from './WhatAreComponents';

const { pageMargins } = styles;

const WhyContainer = styled.section`
  ${pageMargins}
  padding-bottom: ${margin.large}px;
  padding-top: ${margin.large}px;
`;

export const Why = () => (
  <WhyContainer id="why">
    <WhyComponents />
    <History />
    <WhatAreComponents />
  </WhyContainer>
);
