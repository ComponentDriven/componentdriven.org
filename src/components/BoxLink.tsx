import styled from 'styled-components';
import { Link, styles } from '@storybook/design-system';
import { rgba } from 'polished';

const { color, spacing } = styles;

export const BoxLink = styled(Link)`
  display: block;
  background: ${color.lightest};
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;

  &:hover {
    border-color: ${rgba(color.secondary, 0.5)};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  &:active {
    border-color: ${rgba(color.secondary, 1)};
    transform: translate3d(0, 0, 0);
  }
`;
