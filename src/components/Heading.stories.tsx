import React from 'react';
import { Heading } from './Heading';

export default {
  component: Heading,
  title: 'Components/Typography/Heading',
};

export const Default = () => (
  <>
    <Heading level="1">Level 1</Heading>
    <Heading level="2">Level 2</Heading>
    <Heading level="3">Level 3</Heading>
    <Heading level="4">Level 4</Heading>
  </>
);
