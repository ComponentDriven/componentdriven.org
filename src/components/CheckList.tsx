import React from 'react';
import styled from 'styled-components';
import { Icon, styles } from '@storybook/design-system';
import { Text, TextProps } from './Text';

const { color } = styles;

export const CheckList = styled.ul`
  padding-left: 0;
`;

export const CheckListItemContainer = styled(Text).attrs({ as: 'li' })<
  TextProps
>`
  margin-bottom: 1.25em;
  list-style: none;
  position: relative;
  padding-left: 32px;

  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    padding: 4px;
    border-radius: 100%;
    top: 4px;
    left: 0px;
  }
`;

type BulletType = 'check' | 'cross';

const Bullet = styled(Icon).attrs((props) => ({
  icon: props.type,
}))<{
  type: BulletType;
}>`
  color: ${color.lightest};

  background: ${(props) =>
    props.type === 'check' ? color.green : color.negative};
`;

type CheckListItemProps = {
  type: BulletType;
  children: React.ReactNode;
} & TextProps;

export const CheckListItem = ({
  type,
  children,
  ...props
}: CheckListItemProps) => (
  <CheckListItemContainer {...props}>
    <Bullet type={type} />
    {children}
  </CheckListItemContainer>
);
