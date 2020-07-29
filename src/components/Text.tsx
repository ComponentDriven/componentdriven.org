import styled from 'styled-components';
import { styles } from '@storybook/design-system';

const { color, typography } = styles;

export const Text = styled.p`
  letter-spacing: -0.33px;
  font-size: ${typography.size.s3}px;
  line-height: ${typography.size.m3}px;
  color: ${color.darkest};
  margin-top: 0;
  margin-bottom: 0;
`;
