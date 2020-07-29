import styled from 'styled-components';
import { measure } from '../styles';

export type MeasureProps = {
  variant: 'regular' | 'wide';
};

export const Measure = styled.div`
  max-width: ${(props) => measure[props.variant]}px;
  margin-left: auto;
  margin-right: auto;
`;
