import styled from 'styled-components';
import { styles } from '@storybook/design-system';
const { spacing } = styles;

type alignment = 'start' | 'end' | 'center';

const getAlignment = (value: alignment) =>
  value === 'start' || value === 'end' ? 'flex-' + value : value;

export type StackProps = {
  axis?: 'horizontal' | 'vertical';
  space?: 'small' | 'medium' | 'large' | 'evenly' | number | string;
  alignment?: alignment;
  distribution?: alignment;
};

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.axis === 'horizontal' ? 'row' : 'column'};
  justify-content: ${(props) => {
    return props.space === 'evenly'
      ? 'space-between'
      : getAlignment(props.distribution);
  }};
  align-items: ${(props) => getAlignment(props.alignment)};

  > * {
    ${(props) => {
      const space = spacing.padding[props.space]
        ? spacing.padding[props.space]
        : props.space;

      return space === 'evenly'
        ? {}
        : {
            [props.axis === 'horizontal'
              ? 'marginRight'
              : 'marginBottom']: space,
          };
    }}
  }

  > *:last-child {
    ${(props) => ({
      [props.axis === 'horizontal' ? 'marginRight' : 'marginBottom']: 0,
    })}
  }
`;

Stack.defaultProps = {
  axis: 'horizontal',
  space: 'small',
};
