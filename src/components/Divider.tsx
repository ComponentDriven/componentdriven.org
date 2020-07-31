import styled from 'styled-components';
import { styles } from '@storybook/design-system';

const { color } = styles;

export const Divider = styled.hr`
  border-top: 0;
  border-bottom: 1px solid ${color.border};
  margin: 0;
`;
