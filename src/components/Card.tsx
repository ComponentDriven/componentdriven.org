import styled from 'styled-components';
import { styles } from '@storybook/design-system';

const { spacing, color, breakpoint } = styles;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${spacing.borderRadius.small}px;
  background-color: ${color.lightest};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (min-width: ${breakpoint * 1.75}px) {
    flex-direction: row;
  }
`;

export const CardBody = styled.div`
  align-self: center;
  flex: 1 1 auto;
`;

export const CardMedia = styled.div`
  align-self: stretch;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;

  @media (min-width: ${breakpoint * 1.75}px) {
    width: 33%;
    height: auto;
  }
`;
