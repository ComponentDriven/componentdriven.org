import React from 'react';
import { Link } from '@storybook/design-system';
import { Text } from '../../components/Text';
import { Measure } from '../../components/Measure';
import { Callout } from '../../components/Callout';

export const History = () => (
  <Measure variant="wide">
    <Callout>
      <Text as="span" variant="emphasis">
        History:
      </Text>{' '}
      Software engineer <Link href="https://twitter.com/tmeasday">Tom Coleman</Link> introduced
      Component Driven in{' '}
      <Link href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e">2017</Link>{' '}
      to describe the shift in UI development toward component architectures and processes. The idea
      of modular UI has many parallels in software movements such as microservices and
      containerization. Historical precedents also include lean manufacturing and mass manufacturing
      circa early 20th century.
    </Callout>
  </Measure>
);
