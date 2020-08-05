import styled from 'styled-components';
import { styles } from '@storybook/design-system';

const { color, typography } = styles;

export const SubHeading = styled.h3`
  letter-spacing: 5.57px;
  text-transform: uppercase;
  font-weight: ${typography.weight.extrabold};
  font-size: ${typography.size.s2}px;
  line-height: 22px;
  color: ${color.darkest};
`;
