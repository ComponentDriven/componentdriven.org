import * as React from 'react';
import { Stack } from '../../components/Stack';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { Measure } from '../../components/Measure';

export const WhyComponents = () => (
  <Measure variant="regular">
    <Heading level="3" as="h2">
      Why components?
    </Heading>
    <Stack axis="vertical" space="medium">
      <Text>
        Modern user interfaces are more complicated than ever. Customers expect
        compelling, personalized experiences delivered across devices and
        channels. That means frontend developers and designers have to embed
        more logic and state into the UI.
      </Text>
      <Text>
        But managing UIs becomes unwieldy as applications grow. Large UIs are
        brittle, painful to debug, and time consuming to ship. Modular
        construction with components makes it easy to build robust yet
        configurable UIs. The component model encourages interchangeability by
        isolating component state from an application’s business logic.
      </Text>
      <Text>
        It decomposes complex screens into simple, standardized components. Each
        component has a well-defined API and fixed series of states that are
        mocked. This allows components to be taken apart and recomposed to build
        different UIs.
      </Text>
    </Stack>
  </Measure>
);
