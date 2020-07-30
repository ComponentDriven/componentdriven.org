import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Stack, StackProps } from '../../components/Stack';
import { BenefitsList } from './BenefitsList';
import { NotComponentDriven } from './NotComponentDriven';
import { ComplementaryTrends } from './ComplementaryTrends';
import { LearnMore } from './LearnMore';
import { margin } from '../../styles';

const { pageMargins } = styles;

const BenefitsContainer = styled(Stack).attrs({
  axis: 'vertical',
  space: 'medium',
})<StackProps>`
  ${pageMargins}
  padding-top: ${margin.xlarge}px;
  padding-bottom: ${margin.large}px;
`;

export const Benefits = () => (
  <BenefitsContainer id="benefits">
    <BenefitsList />
    <NotComponentDriven />
    <ComplementaryTrends />
    <LearnMore />
  </BenefitsContainer>
);
