import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
const { color } = styles;
import { Stack } from './Stack';

export default {
  component: Stack,
  title: 'Components/Stack',
};

const Box = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${color.darkest};
`;

export const Horizontal = () => (
  <Stack style={{ backgroundColor: color.mediumlight }}>
    <Box />
    <Box />
    <Box />
    <Box />
  </Stack>
);

export const Vertical = () => (
  <Stack axis="vertical" style={{ backgroundColor: color.mediumlight }}>
    <Box />
    <Box />
    <Box />
    <Box />
  </Stack>
);

export const ControlSpacing = () => (
  <Stack space="large" style={{ backgroundColor: color.mediumlight }}>
    <Box />
    <Box />
    <Box />
    <Box />
  </Stack>
);

export const ControlDistribution = () => (
  <Stack axis="vertical">
    <Stack style={{ backgroundColor: color.mediumlight }} distribution="start">
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
    <Stack style={{ backgroundColor: color.mediumlight }} distribution="center">
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
    <Stack style={{ backgroundColor: color.mediumlight }} distribution="end">
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
  </Stack>
);

export const ControlAlignment = () => (
  <Stack axis="vertical">
    <Stack
      style={{ backgroundColor: color.mediumlight, height: 96 }}
      alignment="start"
    >
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
    <Stack
      style={{ backgroundColor: color.mediumlight, height: 96 }}
      alignment="center"
    >
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
    <Stack
      style={{ backgroundColor: color.mediumlight, height: 96 }}
      alignment="end"
    >
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
  </Stack>
);
