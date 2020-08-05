import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { sectionPadding } from '../../styles';
import { WhyComponents } from './WhyComponents';
import { History } from './History';
import { WhatAreComponents } from './WhatAreComponents';

const { pageMargins, breakpoint } = styles;

const WhyContainer = styled.section`
  ${pageMargins}
  ${sectionPadding}
`;

export const Why = () => (
  <WhyContainer id="why">
    <WhyComponents />
    <History />
    <WhatAreComponents />
  </WhyContainer>
);
