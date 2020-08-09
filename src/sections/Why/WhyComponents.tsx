import React from 'react';
import { Stack } from '../../components/Stack';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { Measure } from '../../components/Measure';

export const WhyComponents = () => (
  <Measure variant="regular">
    <Heading level="3" as="h2">
      Why components?
    </Heading>
    <Stack axis="vertical" space="xsmall">
      <Text>
        Modern user interfaces are more complicated than ever. People expect
        compelling, personalized experiences delivered across devices. That means frontend developers and designers have to embed
        more logic into the UI.
      </Text>
      <Text>
        But UIs become unwieldy as applications grow. Large UIs are
        brittle, painful to debug, and time consuming to ship. Breaking them down in a modular way makes it easy to build robust yet
        flexible UIs. 
      </Text>
      <Text>
        Components enable interchangeability by isolating state from application business logic.
        That way, you can decompose complex screens into simple components. Each
        component has a well-defined API and fixed series of states that are
        mocked. This allows components to be taken apart and recomposed to build
        different UIs.
      </Text>
    </Stack>
  </Measure>
);
