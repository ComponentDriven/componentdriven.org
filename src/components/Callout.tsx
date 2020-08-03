import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Text, TextProps } from './Text';
import { margin } from '../styles';

const { background, spacing, breakpoint } = styles;

export const Callout = styled(Text)<TextProps>`
  background-color: ${background.app};
  padding: ${spacing.padding.large}px;
  color: #586368;
  margin-top: 40px;
  margin-bottom: ${margin.large}px;
  margin-left: -${spacing.padding.medium}px;
  margin-right: -${spacing.padding.medium}px;

  @media (min-width: ${breakpoint}px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
