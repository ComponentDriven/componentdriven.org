import styled from 'styled-components';
import { margin } from '../styles';

type alignment = 'start' | 'end' | 'center';

const getAlignment = (value: alignment) =>
  value === 'start' || value === 'end' ? 'flex-' + value : value;

export type StackProps = {
  axis?: 'horizontal' | 'vertical';
  space?: keyof typeof margin | number | string;
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

  /* higher specificity to target component level margin values */
  && {
    > * {
      ${(props) => {
        const space = margin[props.space] ? margin[props.space] : props.space;

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
  }
`;

Stack.defaultProps = {
  axis: 'horizontal',
  space: 'small',
};
