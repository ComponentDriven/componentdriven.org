import styled, { css } from 'styled-components';
import { styles } from '@storybook/design-system';

const { color, typography, breakpoint } = styles;

export type HeadingProps = {
  level: '1' | '2' | '3' | '4';
};

export const Heading = styled.h1<HeadingProps>`
  color: ${color.darkest};

  ${(props) =>
    props.level === '1' &&
    css`
      font-size: ${typography.size.m3}px;
      line-height: ${typography.size.l1}px;
      letter-spacing: -0.61px;
      font-weight: ${typography.weight.black};

      @media (min-width: ${breakpoint}px) {
        font-size: ${typography.size.l3}px;
        line-height: 64px;
        letter-spacing: -0.61px;
      }
    `};

  ${(props) =>
    props.level === '2' &&
    css`
      font-size: ${typography.size.m2}px;
      line-height: ${typography.size.m3}px;
      letter-spacing: -0.44px;
      font-weight: ${typography.weight.black};

      @media (min-width: ${breakpoint}px) {
        font-size: ${typography.size.l1}px;
        line-height: ${typography.size.l1}px;
      }
    `};

  ${(props) =>
    props.level === '3' &&
    css`
      font-size: ${typography.size.m1}px;
      line-height: ${typography.size.l1}px;
      letter-spacing: -0.28px;
      font-weight: ${typography.weight.black};
      margin-bottom: 8px;
    `};

  ${(props) =>
    props.level === '4' &&
    css`
      font-size: ${typography.size.s3}px;
      line-height: ${typography.size.l1}px;
      letter-spacing: -0.22px;
      font-weight: ${typography.weight.bold};
    `};
`;
